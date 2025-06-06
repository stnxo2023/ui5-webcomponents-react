import WrappingType from '@ui5/webcomponents/dist/types/WrappingType.js';
import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import { Link } from '@ui5/webcomponents-react';
import { useRef } from 'react';
import { MessageItem } from './MessageItem';
import { MessageView } from './index.js';

describe('MessageView', () => {
  it('default & grouped', () => {
    const getAllTextsVisible = () => {
      cy.findByText('Error').should('be.visible');
      cy.findByText('Warning').should('be.visible');
      cy.findByText('Success').should('be.visible');
      cy.findByText('Information').should('be.visible');
      cy.findByText('None').should('be.visible');
    };

    [undefined, true].forEach((grouped) => {
      cy.log(`grouped = ${!!grouped}`);
      cy.mount(
        <MessageView groupItems={grouped}>
          <MessageItem titleText="Error" type={ValueState.Negative} groupName="Group1">
            Error
          </MessageItem>
          <MessageItem titleText="Warning" type={ValueState.Critical} groupName="Group1">
            Warning
          </MessageItem>
          <MessageItem titleText="Success" type={ValueState.Positive}>
            Success
          </MessageItem>
          <MessageItem titleText="Information" type={ValueState.Information}>
            Information
          </MessageItem>
          <MessageItem titleText="None" type={ValueState.None} groupName="Group2">
            None
          </MessageItem>
        </MessageView>,
      );
      getAllTextsVisible();
      cy.get('[ui5-icon][name="error"]').should('have.length', 2).should('be.visible');
      cy.get('[icon="error"]').should('have.text', '1').should('be.visible');
      cy.get('[ui5-icon][name="alert"]').should('have.length', 2).should('be.visible');
      cy.get('[icon="alert"]').should('have.text', '1').should('be.visible');
      cy.get('[ui5-icon][name="sys-enter-2"]').should('have.length', 2).should('be.visible');
      cy.get('[icon="sys-enter-2"]').should('have.text', '1').should('be.visible');
      cy.get('[ui5-icon][name="information"]').should('have.length', 3).should('be.visible');
      cy.get('[icon="information"]').should('have.text', '2').should('be.visible');
    });
    cy.get('[data-title="Success"]')
      .next()
      // Information and None don't have a status screen reader announcement
      .should('have.text', 'Information. Has Details')
      .next()
      .should('have.attr', 'header-text', 'Group1')
      .children()
      .first()
      .should('have.text', 'Error. Has Details. Error')
      .next()
      .should('have.text', 'Warning. Has Details. Warning')
      .parent()
      .next()
      .should('have.attr', 'header-text', 'Group2')
      .children()
      .first()
      .should('have.text', 'None. Has Details');

    ['error', 'alert', 'sys-enter-2', 'information'].forEach((btn, index, arr) => {
      cy.log(`SegmentedButton click - ${btn}`);
      cy.get(`[icon="${btn}"]`).click();
      cy.get(`[ui5-icon][name="${btn}"]`)
        .should('have.length', btn === 'information' ? 3 : 2)
        .should('be.visible');
      arr
        .filter((item) => item !== btn)
        .forEach((notVis) => {
          cy.get(`[ui5-icon][name="${notVis}"]`).should('have.length', 1);
        });
    });
    cy.findByText('All').click();
    getAllTextsVisible();
  });

  it('select & nav back', () => {
    const select = cy.spy().as('select');
    const TestComp = () => {
      const ref = useRef(null);
      return (
        <>
          <button
            onClick={() => {
              ref.current.navigateBack();
            }}
          >
            nav back
          </button>
          <MessageView onItemSelect={select} ref={ref} showDetailsPageHeader>
            <MessageItem titleText="Error" type={ValueState.Negative} groupName="Group1">
              Error Message
            </MessageItem>
            <MessageItem titleText="Warning" type={ValueState.Critical} groupName="Group1">
              Warning
            </MessageItem>
            <MessageItem titleText="Success" type={ValueState.Positive}>
              Success
            </MessageItem>
            <MessageItem titleText="Information" type={ValueState.Information}>
              Information Message
            </MessageItem>
            <MessageItem titleText="None" type={ValueState.None} groupName="Group2">
              None
            </MessageItem>
          </MessageView>
        </>
      );
    };
    cy.mount(<TestComp />);
    cy.findByText('Error').click();
    cy.findAllByText('Error').should('have.length', 1);
    cy.findByText('Error Message').should('be.visible');
    cy.get('[ui5-button]').click();
    cy.findAllByText('Error').should('have.length', 1);
    cy.findByText('Error Message').should('not.exist');
    cy.get('@select').should('have.been.calledOnce');
    cy.findByText('Information').click();
    cy.findAllByText('Information').should('have.length', 1);
    cy.findByText('Information Message').should('be.visible');
    cy.findByText('nav back').click();
    cy.findAllByText('Information').should('have.length', 1);
    cy.findByText('Information Message').should('not.exist');
    cy.get('@select').should('have.been.calledTwice');
  });

  it('one/no message-type/item', () => {
    [
      undefined,
      <MessageItem titleText="Error" type={ValueState.Negative} key={0}>
        Error
      </MessageItem>,
      <>
        <MessageItem titleText="Error" type={ValueState.Negative} key={1}>
          Error
        </MessageItem>
        <MessageItem titleText="Error" type={ValueState.Negative} key={2}>
          Error
        </MessageItem>
      </>,
    ].forEach((children) => {
      cy.mount(<MessageView>{children}</MessageView>);
      cy.findByText('All').should('not.exist');
      cy.get('[ui5-bar]').should('not.exist');
    });
  });

  it('MessageItem', () => {
    cy.mount(
      <MessageView>
        <MessageItem
          titleText="TitleText"
          subtitleText="SubtitleText"
          counter={1337}
          type={ValueState.Negative}
          groupName="Group1"
        >
          Message
        </MessageItem>
      </MessageView>,
    );
    // remaining props were already tested
    cy.findByText('SubtitleText').should('be.visible');
    cy.findByText('1337').should('be.visible');
    cy.get('[name="slim-arrow-right"]').should('be.visible').click();
    cy.findByText('SubtitleText').should('not.exist');
    cy.findByText('1337').should('not.exist');
  });

  it('MessageItem - titleText overflow', () => {
    const selectSpy = cy.spy().as('select');
    cy.mount(
      <MessageView style={{ width: '500px' }} showDetailsPageHeader onItemSelect={selectSpy}>
        <MessageItem
          data-testid="item1"
          titleText={
            <Link wrappingType={WrappingType.None}>
              Long Error Message Type without children/details including a Link as `titleText` which has
              wrappingType='None' applied. - The details view is only available if the `titleText` is not fully visible.
              It is NOT recommended to use long titles!
            </Link>
          }
          type={ValueState.Negative}
          counter={3}
        />
        <MessageItem
          data-testid="item2"
          titleText={
            'Long Empty Message Type (no title, no subtitle, no children/details) - The details view is only available if the `titleText` is not fully visible. It is NOT recommended to use long titles!'
          }
          groupName={'Products'}
        />
        <MessageItem data-testid="item3" titleText="Error" type={ValueState.Negative} groupName="Group1" />
      </MessageView>,
    );

    cy.get('[name="slim-arrow-right"]').should('be.visible').and('have.length', 2);
    cy.findByTestId('item1').click();
    cy.get('@select').should('have.been.calledOnce');

    cy.get('[name="slim-arrow-left"]').should('be.visible').and('have.length', 1);
    cy.focused().should('have.attr', 'aria-label', 'Navigate Back').click();

    cy.focused()
      .parent()
      .should(
        'have.attr',
        'data-title',
        `Long Error Message Type without children/details including a Link as \`titleText\` which has wrappingType='None' applied. - The details view is only available if the \`titleText\` is not fully visible. It is NOT recommended to use long titles!`,
      );
    cy.findByTestId('item2').click();
    cy.get('@select').should('have.been.calledTwice');
    cy.get('[name="slim-arrow-left"]').should('be.visible').and('have.length', 1);
    cy.get('[accessible-name="Navigate Back"]').should('be.focused').click();

    cy.findByTestId('item3').click();
    cy.get('@select').should('have.been.calledTwice');
    cy.get('[name="slim-arrow-left"]').should('not.exist');
  });
});
