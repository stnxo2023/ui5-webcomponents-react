import '@ui5/webcomponents-icons/dist/AllIcons.js';
import '@ui5/webcomponents-fiori/dist/illustrations/NoData.js';
import BarDesign from '@ui5/webcomponents/dist/types/BarDesign.js';
import ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import InputType from '@ui5/webcomponents/dist/types/InputType.js';
import TitleLevel from '@ui5/webcomponents/dist/types/TitleLevel.js';
import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import IllustrationMessageType from '@ui5/webcomponents-fiori/dist/types/IllustrationMessageType.js';
import type { CSSProperties } from 'react';
import { useEffect, useReducer, useRef, useState } from 'react';
import type { ObjectPagePropTypes } from '../..';
import {
  CheckBox,
  Form,
  FormGroup,
  FormItem,
  Input,
  Option,
  Select,
  TextArea,
  Avatar,
  Bar,
  Breadcrumbs,
  BreadcrumbsItem,
  Button,
  ObjectPageHeader,
  ObjectPageTitle,
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxWrap,
  Icon,
  IllustratedMessage,
  Label,
  Link,
  MessageStrip,
  ObjectPage,
  ObjectPageMode,
  ObjectPageSection,
  ObjectPageSubSection,
  ObjectStatus,
  Text,
  Title,
  Toolbar,
  ToolbarButton,
} from '../..';
import { cypressPassThroughTestsFactory } from '@/cypress/support/utils';

const arbitraryCharsId = `~\`!1@#$%^&*()-_+={}[]:;"'z,<.>/?|♥`;

describe('ObjectPage', () => {
  [ObjectPageMode.Default, ObjectPageMode.IconTabBar].forEach((mode) => {
    it(`dynamic children selection (mode: ${mode})`, () => {
      const TestComp = () => {
        const [state, setState] = useState<boolean>(false);
        const [sections, add] = useReducer(
          (prev) => [
            ...prev,
            <ObjectPageSection key={prev.length + 1} id={`${prev.length + 1}`} titleText={`Section ${prev.length + 1}`}>
              <div style={{ height: `${(prev.length + 1) * 50}px` }}>Content {prev.length + 1}</div>
            </ObjectPageSection>,
          ],
          [],
        );
        return (
          <>
            <button onClick={add}>Add</button>
            <ObjectPage
              data-testid="op"
              style={{ height: '800px', scrollBehavior: 'auto' }}
              titleArea={DPTitle}
              headerArea={DPContent}
              onSelectedSectionChange={() => {
                setState(!state);
              }}
              mode={mode}
            >
              {OPContent}
              {sections}
            </ObjectPage>
          </>
        );
      };

      cy.mount(<TestComp />);

      cy.wait(100);
      cy.get('[ui5-tabcontainer]').findUi5TabByText('Employment').realClick();
      cy.findByText('Job Information').should('be.visible');

      // add 15 sections
      for (let i = 0; i < 15; i++) {
        cy.findByText('Add').click();
      }

      //TabContainer overflow btn
      cy.get('[data-ui5-stable="overflow-end"]').realClick();
      cy.get('[ui5-list]').should('be.visible');
      cy.wait(500);
      // select "Section 15"
      cy.realPress('PageDown');
      cy.wait(500);
      cy.realPress('Enter');
      cy.get('[ui5-list]').should('not.be.visible');

      cy.findByText('Content 15').should('be.visible');
      cy.wait(100);
      cy.get('[ui5-tabcontainer]').findUi5TabByText('Section 15').should('have.attr', 'aria-selected', 'true');

      if (mode === ObjectPageMode.Default) {
        cy.findByTestId('op').scrollTo(0, 4660);

        cy.findByText('Content 7').should('be.visible');
        cy.get('[ui5-tabcontainer]').findUi5TabByText('Section 7').should('have.attr', 'aria-selected', 'true');

        cy.mount(<TestComp />);
        // add 15 sections
        for (let i = 0; i < 15; i++) {
          cy.findByText('Add').click();
        }
        cy.findByTestId('op').scrollTo(0, 4660);

        cy.findByText('Content 7').should('be.visible');
        cy.get('[ui5-tabcontainer]').findUi5TabByText('Section 7').should('have.attr', 'aria-selected', 'true');
      }
    });
  });

  [ObjectPageMode.Default, ObjectPageMode.IconTabBar].forEach((mode) => {
    it(`toggle header (mode: ${mode})`, () => {
      const toggle = cy.spy().as('toggleSpy');
      cy.mount(
        <ObjectPage
          titleArea={<ObjectPageTitle header="Heading" subHeader="SubHeading" />}
          headerArea={<ObjectPageHeader>ObjectPageHeader</ObjectPageHeader>}
          onToggleHeaderArea={toggle}
          hidePinButton
          mode={mode}
        >
          <ObjectPageSection id="section" titleText="Section">
            Content
          </ObjectPageSection>
        </ObjectPage>,
      );
      cy.findByText('ObjectPageHeader').should('be.visible');

      cy.get('[data-component-name="ObjectPageAnchorBar"] > [ui5-button]').click();
      cy.findByText('ObjectPageHeader').should('not.be.visible');
      cy.get('@toggleSpy').should('have.been.calledOnce');
      cy.get('@toggleSpy').should('have.been.calledWith', false);

      cy.get('[data-component-name="ObjectPageAnchorBar"] > [ui5-button]').click();
      cy.findByText('ObjectPageHeader').should('be.visible');
      cy.get('@toggleSpy').should('have.been.calledWith', true);
      cy.get('@toggleSpy').should('have.been.calledTwice');

      cy.findByText('Heading').click({ force: true });
      cy.findByText('ObjectPageHeader').should('not.be.visible');
      cy.get('@toggleSpy').should('have.been.calledThrice');
      cy.get('@toggleSpy').should('have.been.calledWith', false);

      cy.get('[data-component-name="ObjectPageTitle"]').click();
      cy.findByText('ObjectPageHeader').should('be.visible');
      cy.get('@toggleSpy').should('have.been.calledWith', true);
      cy.get('@toggleSpy').should('have.callCount', 4);

      cy.mount(
        <ObjectPage
          titleArea={<ObjectPageTitle header="Heading" subHeader="SubHeading" />}
          headerArea={<ObjectPageHeader>ObjectPageHeader</ObjectPageHeader>}
          onToggleHeaderArea={toggle}
          hidePinButton
          preserveHeaderStateOnClick
          mode={mode}
        >
          <ObjectPageSection id="section" titleText="Section">
            Content
          </ObjectPageSection>
        </ObjectPage>,
      );

      cy.findByText('Heading').click({ force: true });
      cy.findByText('ObjectPageHeader').should('be.visible');
      cy.get('@toggleSpy').should('have.callCount', 4);

      cy.get('[data-component-name="ObjectPageTitle"]').click();
      cy.findByText('ObjectPageHeader').should('be.visible');
      cy.get('@toggleSpy').should('have.callCount', 4);
    });
  });

  [ObjectPageMode.Default, ObjectPageMode.IconTabBar].forEach((mode) => {
    it(`pin header (mode: ${mode})`, () => {
      const pin = cy.spy().as('onPinSpy');
      cy.mount(
        <ObjectPage
          style={{ height: '100vh' }}
          titleArea={<ObjectPageTitle header="Heading" subHeader="SubHeading" />}
          headerArea={<ObjectPageHeader>ObjectPageHeader</ObjectPageHeader>}
          onPinButtonToggle={pin}
          data-testid="op"
        >
          <ObjectPageSection id="section" titleText="Section">
            <div style={{ height: '2000px' }} />
          </ObjectPageSection>
        </ObjectPage>,
      );
      cy.wait(50);

      cy.findByTestId('op').scrollTo(0, 500);
      cy.findByText('ObjectPageHeader').should('not.be.visible');

      cy.findByTestId('op').scrollTo('top');

      cy.get('[data-component-name="ObjectPageAnchorBarPinBtn"]').click();
      cy.get('@onPinSpy').should('have.been.calledOnce');
      cy.get('@onPinSpy').should('have.been.calledWith', true);

      cy.findByTestId('op').scrollTo(0, 500);
      cy.findByText('ObjectPageHeader').should('be.visible');

      cy.get('[data-component-name="ObjectPageAnchorBarPinBtn"]').click();
      cy.get('@onPinSpy').should('have.been.calledTwice');
      cy.get('@onPinSpy').should('have.been.calledWith', false);
      cy.findByText('ObjectPageHeader').should('not.be.visible');
    });
  });

  [ObjectPageMode.Default, ObjectPageMode.IconTabBar].forEach((mode) => {
    it(`programmatically pin header (headerPinned) (mode: ${mode})`, () => {
      document.body.style.margin = '0px';
      const TestComp = ({ onPinButtonToggle }: ObjectPagePropTypes) => {
        const [pinned, setPinned] = useState(false);
        const handlePinChange = (pinned) => {
          onPinButtonToggle(pinned);
          setPinned(pinned);
        };
        return (
          <>
            <Button
              data-testid="btn"
              onClick={() => {
                setPinned((prev) => !prev);
              }}
            >
              toggle {`${!pinned}`}
            </Button>
            <ObjectPage
              style={{ height: '95vh' }}
              titleArea={<ObjectPageTitle header="Heading" subHeader="SubHeading" />}
              headerArea={<ObjectPageHeader>ObjectPageHeader</ObjectPageHeader>}
              headerPinned={pinned}
              onPinButtonToggle={handlePinChange}
              data-testid="op"
              mode={mode}
            >
              <ObjectPageSection id="section" titleText="Section">
                <div style={{ height: '2000px' }} />
              </ObjectPageSection>
            </ObjectPage>
          </>
        );
      };
      const pin = cy.spy().as('onPinSpy');
      cy.mount(<TestComp onPinButtonToggle={pin} />);
      cy.wait(50);

      cy.findByTestId('op').scrollTo(0, 500);
      cy.findByText('ObjectPageHeader').should('not.be.visible');

      cy.findByTestId('btn').click();
      cy.get('@onPinSpy').should('have.been.calledOnce');
      cy.get('@onPinSpy').should('have.been.calledWith', true);
      cy.findByText('ObjectPageHeader').should('be.visible');

      cy.findByTestId('op').scrollTo(0, 0);
      cy.findByText('ObjectPageHeader').should('be.visible');

      cy.findByTestId('op').scrollTo(0, 800);
      cy.findByText('ObjectPageHeader').should('be.visible');

      cy.findByTestId('btn').click();
      cy.get('@onPinSpy').should('have.been.calledTwice');
      cy.get('@onPinSpy').should('have.been.calledWith', false);
      cy.findByText('ObjectPageHeader').should('not.be.visible');

      cy.findByTestId('btn').click();
      cy.get('@onPinSpy').should('have.callCount', 3);
      cy.findByTestId('op').scrollTo(0, 500);
      cy.findByText('ObjectPageHeader').should('be.visible');
      cy.wait(200);
      cy.findByTestId('btn').click();
      cy.findByText('ObjectPageHeader').should('not.be.visible');

      cy.get('[data-component-name="ObjectPageAnchorBarExpandBtn"]').click();
      cy.get('@onPinSpy').should('have.callCount', 4);
      cy.findByText('ObjectPageHeader').should('be.visible');

      // wait for timeout of expand click
      cy.wait(500);

      cy.findByTestId('op').scrollTo(0, 501);
      cy.findByText('ObjectPageHeader').should('not.be.visible');

      cy.findByTestId('op').scrollTo(0, 30);
      cy.get('[data-component-name="ObjectPageAnchorBarPinBtn"]').click();
      cy.get('@onPinSpy').should('have.callCount', 5);
      cy.findByTestId('btn').should('have.text', 'toggle false');
      cy.findByText('ObjectPageHeader').should('be.visible');

      cy.findByTestId('op').scrollTo(0, 500);
      cy.wait(500);
      cy.findByTestId('btn').click();
      cy.get('@onPinSpy').should('have.callCount', 6);
      cy.findByText('ObjectPageHeader').should('not.be.visible');

      cy.findByTestId('btn').click();
      cy.findByText('ObjectPageHeader').should('be.visible');
      cy.get('@onPinSpy').should('have.callCount', 7);
    });
  });

  [ObjectPageMode.Default, ObjectPageMode.IconTabBar].forEach((mode) => {
    it(`collapse header when partially visible (mode: ${mode})`, () => {
      cy.viewport(1440, 1080);
      cy.mount(
        <ObjectPage
          style={{ height: '100vh' }}
          titleArea={<ObjectPageTitle header="Heading" subHeader="SubHeading" />}
          headerArea={
            <ObjectPageHeader>
              <div style={{ height: '400px', width: '100%', background: 'lightyellow' }}>ObjectPageHeader</div>
            </ObjectPageHeader>
          }
          data-testid="op"
          mode={mode}
        >
          <ObjectPageSection id="section" titleText="Section">
            <div style={{ height: '2000px' }} />
          </ObjectPageSection>
        </ObjectPage>,
      );
      cy.wait(50);

      cy.findByTestId('op').scrollTo(0, 400);
      cy.get('[data-component-name="ObjectPageAnchorBarExpandBtn"]').click();
      cy.get('[data-component-name="ObjectPageAnchorBarPinBtn"]').should('not.exist');
      cy.findByText('ObjectPageHeader').should('not.be.visible');

      // wait for timeout of expand click
      cy.wait(500);

      cy.findByTestId('op').scrollTo(0, 1);
      cy.get('[data-component-name="ObjectPageAnchorBarPinBtn"]').should('not.exist');
      cy.wait(50);
      cy.findByTestId('op').scrollTo(0, 0);
      cy.get('[data-component-name="ObjectPageAnchorBarPinBtn"]').should('be.visible');
      cy.findByText('ObjectPageHeader').should('be.visible');
    });
  });

  it('scroll to sections - default mode', () => {
    document.body.style.margin = '0px';
    cy.mount(
      <ObjectPage data-testid="op" titleArea={DPTitle} headerArea={DPContent} style={{ height: '100vh' }}>
        {OPContent}
      </ObjectPage>,
    );
    cy.wait(200);

    // first titleText should never be displayed (not.be.visible doesn't work here - only invisible for sighted users)
    cy.findByText('Goals')
      .parent()
      .should('have.css', 'width', '1px')
      .and('have.css', 'margin', '-1px')
      .and('have.css', 'position', 'absolute');
    cy.findByText('Employment').should('not.be.visible');
    cy.findByText('Test').should('be.visible');

    cy.get('[ui5-tabcontainer]').findUi5TabByText('Employment').realClick();
    cy.get('[data-section-id="test"]').shouldNeverHaveAttribute('selected');
    cy.get('[data-section-id="personal"]').shouldNeverHaveAttribute('selected');
    cy.get(`[ui5-tab][data-index="3"]`).should('have.attr', 'selected');
    cy.findByText('Employment').should('be.visible');

    cy.wait(200);

    cy.get('[ui5-tabcontainer]').findUi5TabByText('Goals').realClick();
    cy.findByText('Test').should('be.visible');

    // no scroll when focusing something in the header area
    cy.get('[ui5-tabcontainer]').findUi5TabByText('Employment').realClick();
    cy.findByText('Job Information').should('be.visible');
    cy.findByTestId('op').invoke('scrollTop').as('scrollTop');
    cy.wait(100);
    cy.realPress('ArrowLeft');
    cy.get('@scrollTop').then((scrollTop) => {
      cy.findByTestId('op').invoke('scrollTop').should('equal', scrollTop);
    });

    cy.get('[ui5-tabcontainer]').findUi5TabByText('Employment').focus();
    cy.realPress('ArrowDown');
    cy.realPress('ArrowDown');
    cy.realPress('ArrowDown');
    cy.realPress('Enter');
    cy.get('[data-section-id="goals"]').shouldNeverHaveAttribute('selected');
    cy.get('[data-section-id="personal"]').shouldNeverHaveAttribute('selected');
    cy.findByText('Job Relationship').should('be.visible');

    cy.mount(
      <ObjectPage
        data-testid
        titleArea={DPTitle}
        headerArea={DPContent}
        footerArea={Footer}
        style={{ height: '100vh' }}
      >
        {OPContent}
      </ObjectPage>,
    );
    cy.wait(100);

    cy.findByText('Employment').should('not.be.visible');
    cy.findByText('Test').should('be.visible');
    cy.findByTestId('footer').should('be.visible');

    // Select Employment tab
    cy.get('[ui5-tabcontainer]').findUi5TabByText('Goals').click();
    cy.get('[ui5-tabcontainer]').realPress('ArrowRight');
    cy.get('[ui5-tabcontainer]').realPress('ArrowRight');
    cy.get('[ui5-tabcontainer]').realPress('ArrowRight');
    cy.get('[ui5-tabcontainer]').realPress('Enter');

    cy.wait(200);
    //fallback click
    cy.get('[ui5-tabcontainer]').findUi5TabByText('Employment').realClick();
    cy.get('[data-section-id="test"]').shouldNeverHaveAttribute('selected');
    cy.get('[data-section-id="personal"]').shouldNeverHaveAttribute('selected');
    cy.findByTestId('footer').should('be.visible');
    cy.findByText('Employment').should('be.visible');
    cy.findByText('Job Information').should('be.visible');

    cy.get('[ui5-tabcontainer]').findUi5TabByText('Goals').click();
    cy.get('[data-section-id="test"]').shouldNeverHaveAttribute('selected', 300);
    cy.get('[data-section-id="personal"]').shouldNeverHaveAttribute('selected');
    cy.findByText('Test').should('be.visible');
    cy.findByTestId('footer').should('be.visible');

    cy.get('[ui5-tabcontainer]').findUi5TabByText('Employment').focus();
    cy.realPress('ArrowDown');
    cy.wait(500);
    cy.realPress('ArrowDown');
    cy.realPress('ArrowDown');
    cy.realPress('Enter');
    cy.get('[data-section-id="personal"]').shouldNeverHaveAttribute('selected');
    cy.get(`[ui5-tab][data-index="3"]`).should('have.attr', 'selected');
    // wait for scroll
    cy.wait(200);
    cy.findByText('Job Relationship').should('be.visible');

    cy.findByTestId('footer').should('be.visible');

    cy.mount(
      <ObjectPage
        data-testid
        titleArea={DPTitle}
        headerArea={DPContent}
        footerArea={Footer}
        style={{ height: '100vh' }}
      >
        {OPContent}
        <ObjectPageSection aria-label="Long Section" id="long-section" titleText="Long Section">
          <ObjectPageSubSection aria-label="Long Subsection 1" id="sub1" titleText="Long Subsection 1">
            <FlexBox style={{ height: '2000px' }} direction="Column" justifyContent="SpaceBetween">
              <span>Start SubSection1</span>
              <span>End SubSection1</span>
            </FlexBox>
          </ObjectPageSubSection>
          <ObjectPageSubSection aria-label="Long Subsection 2" id="sub2" titleText="Long Subsection 2">
            <FlexBox style={{ height: '1000px' }} direction="Column" justifyContent="SpaceBetween">
              <span>Start SubSection2</span>
              <span>End SubSection2</span>
            </FlexBox>
          </ObjectPageSubSection>
        </ObjectPageSection>
      </ObjectPage>,
    );
    cy.wait(100);

    cy.get('[ui5-tabcontainer]').findUi5TabByText('Long Section').focus();
    cy.realPress('ArrowDown');
    cy.get('[ui5-responsive-popover]').should('be.visible');
    cy.realPress('ArrowDown');
    cy.wait(50);
    cy.realPress('ArrowDown');
    cy.realPress('Enter');
    cy.get('[data-section-id="test"]').shouldNeverHaveAttribute('selected');
    cy.get('[data-section-id="personal"]').shouldNeverHaveAttribute('selected');
    cy.get(`[ui5-tab][data-index="3"]`).shouldNeverHaveAttribute('selected');
    // wait for scroll
    cy.wait(200);
    cy.findByText('Start SubSection2').should('be.visible');
  });

  it('scroll to sections - tab mode', () => {
    document.body.style.margin = '0px';

    cy.mount(
      <ObjectPage
        data-testid
        titleArea={DPTitle}
        headerArea={DPContent}
        footerArea={Footer}
        style={{ height: '100vh' }}
      >
        {OPContent}
        <ObjectPageSection aria-label="Long Section" id="long-section" titleText="Long Section">
          <ObjectPageSubSection aria-label="Long Subsection 1" id="sub1" titleText="Long Subsection 1">
            <FlexBox style={{ height: '2000px' }} direction="Column" justifyContent="SpaceBetween">
              <span>Start SubSection1</span>
              <span>End SubSection1</span>
            </FlexBox>
          </ObjectPageSubSection>
          <ObjectPageSubSection aria-label="Long Subsection 2" id="sub2" titleText="Long Subsection 2">
            <FlexBox style={{ height: '1000px' }} direction="Column" justifyContent="SpaceBetween">
              <span>Start SubSection2</span>
              <span>End SubSection2</span>
            </FlexBox>
          </ObjectPageSubSection>
        </ObjectPageSection>
      </ObjectPage>,
    );
    cy.wait(100);

    cy.get('[ui5-tabcontainer]').findUi5TabByText('Long Section').focus();
    cy.realPress('ArrowDown');
    cy.get('[ui5-responsive-popover]').should('be.visible');
    cy.realPress('ArrowDown');
    cy.wait(50);
    cy.realPress('ArrowDown');
    cy.realPress('Enter');
    // wait for scroll
    cy.wait(200);
    cy.findByText('Start SubSection2').should('be.visible');

    cy.mount(
      <ObjectPage
        data-testid="op"
        titleArea={DPTitle}
        headerArea={DPContent}
        footerArea={Footer}
        style={{ height: '100vh', scrollBehavior: 'auto' }}
      >
        {OPContent}
        <ObjectPageSection aria-label="Long Section" id="long-section" titleText="Long Section">
          <ObjectPageSubSection aria-label="Long Subsection 1" id="sub1" titleText="Long Subsection 1">
            <FlexBox style={{ height: '2000px' }} direction="Column" justifyContent="SpaceBetween">
              <span>Start SubSection1</span>
              <span>End SubSection1</span>
            </FlexBox>
          </ObjectPageSubSection>
          <ObjectPageSubSection aria-label="Long Subsection 2" id="sub2" titleText="Long Subsection 2">
            <FlexBox style={{ height: '1000px' }} direction="Column" justifyContent="SpaceBetween">
              <span>Start SubSection2</span>
              <span>End SubSection2</span>
            </FlexBox>
          </ObjectPageSubSection>
        </ObjectPageSection>
      </ObjectPage>,
    );
    cy.wait(100);

    cy.get('[ui5-tabcontainer]').findUi5TabByText('Long Section').focus();
    cy.realPress('ArrowDown');
    cy.get('[ui5-responsive-popover]').should('be.visible');
    cy.realPress('ArrowDown');
    cy.wait(50);
    cy.realPress('ArrowDown');
    cy.realPress('Enter');
    // wait for scroll
    cy.wait(200);
    cy.findByText('Start SubSection2').should('be.visible');

    cy.mount(
      <ObjectPage
        data-testid="op"
        titleArea={DPTitle}
        headerArea={DPContent}
        mode={ObjectPageMode.IconTabBar}
        style={{ height: '100vh', scrollBehavior: 'auto' }}
      >
        {OPContent}
      </ObjectPage>,
    );
    cy.findByText('Job Information').should('not.exist');
    cy.findByTestId('section 1').should('be.visible');

    cy.wait(100);
    cy.get('[ui5-tabcontainer]').findUi5TabByText('Employment').realClick();
    cy.findByText('Job Information').should('be.visible');
    cy.findByTestId('section 1').should('not.exist');
    // no scroll when focusing something in the header area
    cy.findByTestId('op').invoke('scrollTop').as('scrollTop');
    cy.wait(100);
    cy.realPress('ArrowLeft');
    cy.get('@scrollTop').then((scrollTop) => {
      cy.findByTestId('op').invoke('scrollTop').should('equal', scrollTop);
    });

    cy.get('[ui5-tabcontainer]').findUi5TabByText('Goals').click();
    cy.findByText('section 2').should('not.exist');
    cy.findByTestId('section 1').should('be.visible');

    cy.get('[ui5-tabcontainer]').findUi5TabOpenPopoverButtonByText('Employment').click();
    cy.get('[ui5-list]').should('be.visible');
    cy.wait(200);
    cy.realPress('ArrowDown');
    cy.realPress('ArrowDown');
    cy.realPress('Enter');
    cy.wait(500);
    cy.findByText('Job Relationship').should('be.visible');
    cy.findByText('Job Information').should('not.be.visible');

    cy.mount(
      <ObjectPage
        titleArea={DPTitle}
        headerArea={DPContent}
        footerArea={Footer}
        mode={ObjectPageMode.IconTabBar}
        style={{ height: '100vh', scrollBehavior: 'auto' }}
      >
        {OPContent}
      </ObjectPage>,
    );

    cy.findByText('Job Information').should('not.exist');
    cy.findByTestId('section 1').should('be.visible');
    cy.findByTestId('footer').should('be.visible');

    cy.wait(50);

    cy.get('[ui5-tabcontainer]').findUi5TabByText('Employment').click();
    cy.findByText('Job Information').should('be.visible');
    cy.findByTestId('section 1').should('not.exist');
    cy.findByTestId('footer').should('be.visible');

    cy.get('[ui5-tabcontainer]').findUi5TabByText('Goals').click();
    cy.findByText('section 2').should('not.exist');
    cy.findByTestId('section 1').should('be.visible');
    cy.findByTestId('footer').should('be.visible');

    cy.get('[ui5-tabcontainer]').findUi5TabOpenPopoverButtonByText('Employment').click();
    cy.wait(500);

    cy.get('[ui5-tabcontainer]').contains('Job Relationship').click({ force: true });
    cy.findByText('Job Information').should('not.be.visible');
    cy.findByText('Job Relationship').should('be.visible');
    cy.findByTestId('footer').should('be.visible');
  });

  it('single section - Default mode', () => {
    document.body.style.margin = '0px';
    const TestComp = ({
      mode,
      height,
      withFooter,
    }: {
      height: CSSProperties['height'];
      withFooter?: boolean;
      mode: ObjectPageMode;
    }) => {
      const ref = useRef(null);
      const [showCurrentHeights, setShowCurrentHeights] = useState({ offset: null, scroll: null });
      return (
        <ObjectPage
          style={{ height: '100vh' }}
          titleArea={DPTitle}
          headerArea={DPContent}
          data-testid="op"
          ref={ref}
          footerArea={withFooter && Footer}
          mode={mode}
        >
          <ObjectPageSection key="0" titleText="Goals" id="goals" aria-label="Goals">
            <div data-testid="section 1" style={{ height, width: '100%', background: 'lightblue' }}>
              <Button
                onClick={() => {
                  setShowCurrentHeights({
                    // rounding offset/scroll-height differs from browser to browser and maybe even from headless tests
                    offset: Math.floor(ref.current?.offsetHeight / 10) * 10,
                    scroll: Math.floor(ref.current?.scrollHeight / 10) * 10,
                  });
                }}
              >
                Update Heights
              </Button>
              {JSON.stringify(showCurrentHeights)}
            </div>
          </ObjectPageSection>
        </ObjectPage>
      );
    };
    cy.mount(<TestComp height="2000px" mode={ObjectPageMode.Default} />);
    cy.findByText('Update Heights').click();
    cy.findByText('{"offset":1080,"scroll":2270}').should('exist');

    cy.findByTestId('op').scrollTo('bottom');
    cy.findByText('Update Heights').click({ force: true });
    cy.findByText('{"offset":1080,"scroll":2270}').should('exist');

    cy.mount(<TestComp height="2000px" withFooter mode={ObjectPageMode.Default} />);
    cy.findByText('Update Heights').click();
    cy.findByText('{"offset":1080,"scroll":2310}').should('exist');

    cy.findByTestId('op').scrollTo('bottom');
    cy.findByText('Update Heights').click({ force: true });
    cy.findByText('{"offset":1080,"scroll":2310}').should('exist');

    cy.mount(<TestComp height="400px" mode={ObjectPageMode.Default} />);
    cy.findByText('Update Heights').click();
    cy.findByText('{"offset":1080,"scroll":1080}').should('exist');

    cy.findByTestId('op').scrollTo('bottom', { ensureScrollable: false });
    cy.findByText('Update Heights').click({ force: true });
    cy.findByText('{"offset":1080,"scroll":1080}').should('exist');

    cy.get('[data-component-name="ObjectPageAnchorBarExpandBtn"]').click();
    cy.findByText('Update Heights').click({ force: true });
    cy.findByText('{"offset":1080,"scroll":1080}').should('exist');

    cy.mount(<TestComp height="400px" withFooter mode={ObjectPageMode.Default} />);
    cy.findByText('Update Heights').click();
    cy.findByText('{"offset":1080,"scroll":1080}').should('exist');

    cy.findByTestId('op').scrollTo('bottom', { ensureScrollable: false });
    cy.findByText('Update Heights').click({ force: true });
    cy.findByText('{"offset":1080,"scroll":1080}').should('exist');

    cy.get('[data-component-name="ObjectPageAnchorBarExpandBtn"]').click();
    cy.findByText('Update Heights').click({ force: true });
    cy.findByText('{"offset":1080,"scroll":1080}').should('exist');

    cy.mount(<TestComp height="925px" mode={ObjectPageMode.Default} />);
    cy.findByText('https://github.com/SAP/ui5-webcomponents-react').should('be.visible');

    cy.wait(50);
    cy.findByTestId('op').scrollTo('bottom');
    cy.findByText('https://github.com/SAP/ui5-webcomponents-react').should('not.be.visible');
    cy.get('[data-component-name="ObjectPageAnchorBarExpandBtn"]').should('have.attr', 'icon', 'slim-arrow-down');

    cy.get('[data-component-name="ObjectPageAnchorBarExpandBtn"]').click();
    cy.findByText('https://github.com/SAP/ui5-webcomponents-react').should('be.visible');

    cy.get('[data-component-name="ObjectPageAnchorBarExpandBtn"]').click();
    cy.findByText('https://github.com/SAP/ui5-webcomponents-react').should('not.be.visible');
  });

  it('single section - Tab mode', () => {
    document.body.style.margin = '0px';
    const TestComp = ({
      mode,
      height,
      withFooter,
    }: {
      height: CSSProperties['height'];
      withFooter?: boolean;
      mode: ObjectPageMode;
    }) => {
      const ref = useRef(null);
      const [showCurrentHeights, setShowCurrentHeights] = useState({ offset: null, scroll: null });
      return (
        <ObjectPage
          style={{ height: '100vh' }}
          titleArea={DPTitle}
          headerArea={DPContent}
          data-testid="op"
          ref={ref}
          footerArea={withFooter && Footer}
          mode={mode}
        >
          <ObjectPageSection key="0" titleText="Goals" id="goals" aria-label="Goals">
            <div data-testid="section 1" style={{ height, width: '100%', background: 'lightblue' }}>
              <Button
                onClick={() => {
                  setShowCurrentHeights({
                    // rounding offset/scroll-height differs from browser to browser and maybe even from headless tests
                    offset: Math.floor(ref.current?.offsetHeight / 10) * 10,
                    scroll: Math.floor(ref.current?.scrollHeight / 10) * 10,
                  });
                }}
              >
                Update Heights
              </Button>
              {JSON.stringify(showCurrentHeights)}
            </div>
          </ObjectPageSection>
        </ObjectPage>
      );
    };
    cy.mount(<TestComp height="2000px" mode={ObjectPageMode.IconTabBar} />);
    cy.findByText('Update Heights').click();
    cy.findByText('{"offset":1080,"scroll":2270}').should('exist');

    cy.findByTestId('op').scrollTo('bottom');
    cy.findByText('Update Heights').click({ force: true });
    cy.findByText('{"offset":1080,"scroll":2270}').should('exist');

    cy.mount(<TestComp height="2000px" withFooter mode={ObjectPageMode.IconTabBar} />);
    cy.findByText('Update Heights').click();
    cy.findByText('{"offset":1080,"scroll":2330}').should('exist');

    cy.findByTestId('op').scrollTo('bottom');
    cy.findByText('Update Heights').click({ force: true });
    cy.findByText('{"offset":1080,"scroll":2330}').should('exist');

    cy.mount(<TestComp height="400px" mode={ObjectPageMode.IconTabBar} />);
    cy.findByText('Update Heights').click();
    cy.findByText('{"offset":1080,"scroll":1080}').should('exist');

    cy.findByTestId('op').scrollTo('bottom', { ensureScrollable: false });
    cy.findByText('Update Heights').click({ force: true });
    cy.findByText('{"offset":1080,"scroll":1080}').should('exist');

    cy.get('[data-component-name="ObjectPageAnchorBarExpandBtn"]').click();
    cy.findByText('Update Heights').click({ force: true });
    cy.findByText('{"offset":1080,"scroll":1080}').should('exist');

    cy.mount(<TestComp height="400px" withFooter mode={ObjectPageMode.IconTabBar} />);
    cy.findByText('Update Heights').click();
    cy.findByText('{"offset":1080,"scroll":1080}').should('exist');

    cy.findByTestId('op').scrollTo('bottom', { ensureScrollable: false });
    cy.findByText('Update Heights').click({ force: true });
    cy.findByText('{"offset":1080,"scroll":1080}').should('exist');

    cy.get('[data-component-name="ObjectPageAnchorBarExpandBtn"]').click();
    cy.findByText('Update Heights').click({ force: true });
    cy.findByText('{"offset":1080,"scroll":1080}').should('exist');

    cy.mount(<TestComp height="925px" mode={ObjectPageMode.IconTabBar} />);
    cy.findByText('https://github.com/SAP/ui5-webcomponents-react').should('be.visible');

    cy.wait(50);
    cy.findByTestId('op').scrollTo('bottom');
    cy.findByText('https://github.com/SAP/ui5-webcomponents-react').should('not.be.visible');
    cy.get('[data-component-name="ObjectPageAnchorBarExpandBtn"]').should('have.attr', 'icon', 'slim-arrow-down');

    cy.get('[data-component-name="ObjectPageAnchorBarExpandBtn"]').click();
    cy.findByText('https://github.com/SAP/ui5-webcomponents-react').should('be.visible');

    cy.get('[data-component-name="ObjectPageAnchorBarExpandBtn"]').click();
    cy.findByText('https://github.com/SAP/ui5-webcomponents-react').should('not.be.visible');
  });
  [ObjectPageMode.Default, ObjectPageMode.IconTabBar].forEach((mode) => {
    it(`ObjectPageSection/SubSection: Custom header & hideTitleText (mode: ${mode})`, () => {
      document.body.style.margin = '0px';
      const TestComp = ({ mode }: ObjectPagePropTypes) => {
        const [hideTitleText1, toggleTitleText1] = useReducer((prev) => !prev, true);
        const [hideTitleText2, toggleTitleText2] = useReducer((prev) => !prev, true);
        const [hideTitleTextSub, toggleTitleTextSub] = useReducer((prev) => !prev, true);
        return (
          <ObjectPage titleArea={DPTitle} headerArea={DPContent} mode={mode}>
            <ObjectPageSection
              titleText="Goals"
              hideTitleText={hideTitleText1}
              id="goals"
              aria-label="Goals"
              header={<Title>Custom Header Section One</Title>}
            >
              <div style={{ width: '100%', height: '200px', background: 'cadetblue' }} />
              <Button onClick={toggleTitleText1}>toggle titleText1</Button>
              <ObjectPageSubSection id={'goals2'} titleText="Goals 2" hideTitleText={hideTitleTextSub}>
                <div style={{ width: '100%', height: '200px', background: 'lightblue' }} />
                <Button onClick={toggleTitleTextSub}>toggle titleTextSub</Button>
              </ObjectPageSubSection>
            </ObjectPageSection>
            <ObjectPageSection
              titleText="Personal"
              hideTitleText={hideTitleText2}
              id="personal"
              aria-label="Personal"
              header={<MessageStrip hideCloseButton>Custom Header Section Two</MessageStrip>}
            >
              <div style={{ width: '100%', height: '1200px', background: 'cadetblue' }} />
              <Button onClick={toggleTitleText2}>toggle titleText2</Button>
            </ObjectPageSection>
            <ObjectPageSection
              titleText="Employment"
              hideTitleText
              id="employment"
              aria-label="Employment"
              header={
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Icon name={'general-leave-request'} style={{ marginInlineEnd: '2rem' }} />
                  <Text>Custom Header Section Three</Text>
                  <Icon name={'general-leave-request'} style={{ marginInlineStart: '2rem' }} />
                </div>
              }
            >
              <div style={{ width: '100%', height: '300px', background: 'cadetblue' }} />
            </ObjectPageSection>
          </ObjectPage>
        );
      };

      cy.mount(<TestComp mode={mode} />);
      cy.wait(50);

      cy.get('[ui5-tabcontainer]').findUi5TabByText('Employment').click();
      cy.findByText('Custom Header Section Three').should('be.visible');
      cy.findByText('Employment').should('not.exist');

      cy.get('[ui5-tabcontainer]').findUi5TabByText('Goals').click();
      cy.findByText('Custom Header Section One').should('be.visible');
      cy.findByText('toggle titleText1').click({ scrollBehavior: false, force: true });
      // first titleText should never be displayed (not.be.visible doesn't work here - only invisible for sighted users)
      cy.findByText('Goals')
        .parent()
        .should('have.css', 'width', '1px')
        .and('have.css', 'margin', '-1px')
        .and('have.css', 'position', 'absolute');
      cy.findByText('Custom Header Section One').should('be.visible');

      cy.get('[ui5-tabcontainer]').findUi5TabByText('Personal').click();
      cy.findByText('Custom Header Section Two').should('be.visible');
      cy.findByText('Personal').should('not.exist');
      cy.findByText('toggle titleText2').click({ scrollBehavior: false, force: true });
      if (mode === ObjectPageMode.IconTabBar) {
        cy.findByText('Personal').should('not.be.visible');
      } else {
        cy.findByText('Personal').should('be.visible');
      }
      cy.findByText('Custom Header Section Two').should('be.visible');

      cy.get('[ui5-tabcontainer]').findUi5TabOpenPopoverButtonByText('Goals').click();
      cy.wait(500);
      cy.get('[ui5-tabcontainer]').contains('Goals 2').click({ force: true });
      cy.findByText('Goals 2').should('not.exist');
      cy.findByText('toggle titleTextSub').click({ scrollBehavior: false, force: true });
      cy.findByText('Goals 2').should('be.visible');
    });
  });

  it('ObjectPageSection: wrap title', () => {
    const TestComp = () => {
      const [wrapTitle, toggleWrap] = useReducer((prev) => !prev, false);
      return (
        <ObjectPage titleArea={DPTitle} headerArea={DPContent}>
          <ObjectPageSection id="placeholder" titleText="Placeholder">
            <span />
          </ObjectPageSection>
          <ObjectPageSection
            wrapTitleText={wrapTitle}
            titleText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper
            sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse
            lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at
            id ex."
            id="goals"
            aria-label="Goals"
          >
            <div style={{ width: '100%', height: '100px', background: 'cadetblue' }} />
            <Button onClick={toggleWrap}>toggle wrap</Button>
            <ObjectPageSubSection
              id={'goals2'}
              titleText="Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod
            aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend
            neque. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque."
            >
              <div style={{ width: '100%', height: '100px', background: 'lightblue' }} />
            </ObjectPageSubSection>
          </ObjectPageSection>
        </ObjectPage>
      );
    };
    cy.mount(<TestComp />);

    cy.findByText(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id ex.',
    ).should('have.css', 'white-space', 'nowrap');

    cy.findByText(
      'Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque.',
    ).should('have.css', 'white-space', 'normal');

    cy.findByText('toggle wrap').click();
    cy.findByText(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id ex.',
    ).should('have.css', 'white-space', 'normal');
  });

  it('ObjectPageSection: uppercase', () => {
    const TestComp = () => {
      const [uppercase, toggleUppercase] = useReducer((prev) => !prev, undefined);
      const [uppercaseSub, toggleUppercaseSub] = useReducer((prev) => !prev, undefined);
      return (
        <ObjectPage titleArea={DPTitle} headerArea={DPContent}>
          <ObjectPageSection id="placeholder" titleText="Placeholder">
            <span />
          </ObjectPageSection>
          <ObjectPageSection
            titleTextUppercase={uppercase}
            titleText="Lorem ipsum dolor sit amet"
            id="goals"
            aria-label="Goals"
          >
            <div style={{ width: '100%', height: '100px', background: 'cadetblue' }} />
            <Button onClick={toggleUppercase}>toggle uppercase</Button>
            <ObjectPageSubSection id={'goals2'} titleText="Etiam pellentesque" titleTextUppercase={uppercaseSub}>
              <div style={{ width: '100%', height: '100px', background: 'lightblue' }} />
              <Button onClick={toggleUppercaseSub}>toggle uppercaseSub</Button>
            </ObjectPageSubSection>
          </ObjectPageSection>
        </ObjectPage>
      );
    };
    cy.mount(<TestComp />);

    cy.findByText('Lorem ipsum dolor sit amet').should('have.css', 'text-transform', 'none');
    cy.findByText('Etiam pellentesque').should('have.css', 'text-transform', 'none');

    cy.findByText('toggle uppercase').click();
    cy.findByText('Lorem ipsum dolor sit amet').should('have.css', 'text-transform', 'uppercase');
    cy.findByText('toggle uppercase').click();
    cy.findByText('Lorem ipsum dolor sit amet').should('have.css', 'text-transform', 'none');

    cy.findByText('toggle uppercaseSub').click();
    cy.findByText('Etiam pellentesque').should('have.css', 'text-transform', 'uppercase');
  });

  it('ObjectPageSection: titleTextLevel', () => {
    const TestComp = () => {
      const [level, setLevel] = useState<undefined | TitleLevel>(undefined);
      const [levelSub, setLevelSub] = useState<undefined | TitleLevel>(undefined);
      return (
        <ObjectPage titleArea={DPTitle} headerArea={DPContent}>
          <ObjectPageSection id="placeholder" titleText="Placeholder">
            <span />
          </ObjectPageSection>
          <ObjectPageSection
            titleText="Lorem ipsum dolor sit amet"
            id="goals"
            aria-label="Goals"
            titleTextLevel={level}
          >
            <div style={{ width: '100%', height: '100px', background: 'cadetblue' }} />
            <Button
              onClick={() => {
                setLevel(TitleLevel.H1);
              }}
            >
              set level 1
            </Button>
            <ObjectPageSubSection id={'goals2'} titleText="Etiam pellentesque" titleTextLevel={levelSub}>
              <div style={{ width: '100%', height: '100px', background: 'lightblue' }} />
              <Button
                onClick={() => {
                  setLevelSub(TitleLevel.H6);
                }}
              >
                set level 6
              </Button>
            </ObjectPageSubSection>
          </ObjectPageSection>
        </ObjectPage>
      );
    };
    cy.mount(<TestComp />);

    cy.findByText('Lorem ipsum dolor sit amet').parent().should('have.attr', 'aria-level', '3');
    cy.findByText('Etiam pellentesque').should('have.attr', 'aria-level', '4');

    cy.findByText('set level 1').click();
    cy.findByText('Lorem ipsum dolor sit amet').parent().should('have.attr', 'aria-level', '1');

    cy.findByText('set level 6').click();
    cy.findByText('Etiam pellentesque').should('have.attr', 'aria-level', '6');
  });

  [ObjectPageMode.Default, ObjectPageMode.IconTabBar].forEach((mode) => {
    it(`empty content (mode: ${mode})`, () => {
      cy.mount(<ObjectPage data-testid="op" mode={mode} />);
      cy.findByTestId('op').should('be.visible');
      cy.mount(<ObjectPage data-testid="op" mode={mode} titleArea={DPTitle} headerArea={DPContent} />);
      cy.findByTestId('op').should('be.visible');
    });
  });

  it('w/ image', () => {
    cy.mount(<ObjectPage data-testid="op" titleArea={DPTitle} headerArea={DPContent} image="not_a_real_path.orly" />);
    cy.findByAltText('Company Logo').should('be.visible');
    cy.mount(
      <ObjectPage
        data-testid="op"
        titleArea={DPTitle}
        headerArea={DPContent}
        image="not_a_real_path.orly"
        imageShapeCircle
      />,
    );
    cy.findByAltText('Company Logo')
      .should('be.visible')
      .parent()
      .should('have.css', 'border-radius', '50%')
      .should('have.css', 'overflow', 'hidden');
    cy.mount(<ObjectPage data-testid="op" titleArea={DPTitle} headerArea={DPContent} image={<Avatar />} />);
    cy.get('[ui5-avatar]').should('have.attr', 'size', 'L').should('be.visible');
  });

  [ObjectPageMode.Default, ObjectPageMode.IconTabBar].forEach((mode) => {
    it(`with IllustratedMessage (mode: ${mode})`, () => {
      cy.mount(
        <ObjectPage
          data-testid="op"
          titleArea={DPTitle}
          headerArea={DPContent}
          placeholder={<IllustratedMessage data-testid="no-data" name={IllustrationMessageType.NoData} />}
          mode={mode}
        />,
      );
      cy.get('[ui5-illustrated-message]').should('be.visible');
      cy.get('[ui5-tabcontainer]').should('not.exist');
      cy.get('[data-component-name="ObjectPageAnchorBar"]').should('not.be.visible');
      cy.mount(
        <ObjectPage
          data-testid="op"
          titleArea={DPTitle}
          headerArea={DPContent}
          placeholder={<IllustratedMessage data-testid="no-data" name={IllustrationMessageType.NoData} />}
          mode={mode}
        >
          {OPContent}
        </ObjectPage>,
      );
      cy.get('[ui5-illustrated-message]').should('be.visible');
      cy.get('[ui5-tabcontainer]').should('not.exist');
      cy.get('[data-component-name="ObjectPageAnchorBar"]').should('not.be.visible');
    });
  });

  [ObjectPageMode.Default, ObjectPageMode.IconTabBar].forEach((mode) => {
    it(`onBeforeNavigate (mode: ${mode})`, () => {
      const beforeNavigateHandlerDefaultPrevented = (e) => {
        // deleted as not relevant for the test
        delete e.detail.tab;
        delete e.detail.tabIndex;
        e.preventDefault();
      };
      const beforeNavigate = cy.spy(beforeNavigateHandlerDefaultPrevented).as('beforeNavigateSpy');
      const sectionChange = cy.spy().as('sectionChangeSpy');
      cy.mount(
        <ObjectPage
          data-testid="op"
          titleArea={DPTitle}
          headerArea={DPContent}
          onBeforeNavigate={beforeNavigate}
          onSelectedSectionChange={sectionChange}
          mode={mode}
        >
          {OPContent}
        </ObjectPage>,
      );
      cy.get('[ui5-tabcontainer]').findUi5TabByText('Personal').click();
      cy.get('@beforeNavigateSpy')
        .should('have.been.calledOnce')
        .its('firstCall.args[0].detail')
        .should('deep.equal', { sectionIndex: 2, sectionId: 'personal', subSectionId: undefined });
      cy.get('@sectionChangeSpy').should('not.have.been.called');

      cy.get('[ui5-tabcontainer]').findUi5TabOpenPopoverButtonByText('Employment').click();
      cy.wait(500);
      cy.realPress('Enter');
      cy.get('@beforeNavigateSpy')
        .should('have.been.calledTwice')
        .its('secondCall.args[0].detail')
        .should('deep.equal', {
          sectionIndex: 3,
          sectionId: arbitraryCharsId,
          subSectionId: 'employment-job-information',
        });
      cy.get('@sectionChangeSpy').should('not.have.been.called');
    });
  });

  it('IconTabBar mode: only mount single section', () => {
    const cbSpy = cy.spy().as('cb');
    const CallBackComp = () => {
      useEffect(() => {
        cbSpy();
      }, []);
      return null;
    };
    cy.mount(
      <ObjectPage mode={ObjectPageMode.IconTabBar}>
        <ObjectPageSection id="1">Dummy</ObjectPageSection>
        <ObjectPageSection id="2">
          <CallBackComp />
        </ObjectPageSection>
      </ObjectPage>,
    );
    cy.findByText('Dummy').should('be.visible');
    cy.get('@cb').should('not.been.called');
  });

  [ObjectPageMode.Default, ObjectPageMode.IconTabBar].forEach((mode) => {
    it(`onSelectedSectionChange: React state update (mode: ${mode})`, () => {
      const TestComp = () => {
        const [state, setState] = useState(false);
        return (
          <ObjectPage
            // increase test speed by setting scroll behavior to instant
            style={{ height: '800px', scrollBehavior: 'auto' }}
            onSelectedSectionChange={() => {
              setState(!state);
            }}
            mode={mode}
          >
            <ObjectPageSection id={'test1'} titleText={'test1'}>
              <div style={{ height: '900px' }}>
                <div style={{ height: '30%' }}>Content1</div>
              </div>
            </ObjectPageSection>
            <ObjectPageSection id={'test2'} titleText={'test2'}>
              <div style={{ height: '900px' }}>
                <div style={{ height: '30%' }}>Content2</div>
              </div>
            </ObjectPageSection>
          </ObjectPage>
        );
      };

      cy.mount(<TestComp />);
      cy.wait(200);

      cy.get('[ui5-tabcontainer]').findUi5TabByText('test2').realClick();
      if (mode === ObjectPageMode.IconTabBar) {
        cy.findByText('Content1').should('not.exist');
      } else {
        cy.findByText('Content1').should('not.be.visible');
      }
      cy.findByText('Content2').should('be.visible');
      cy.get('[ui5-tabcontainer]').findUi5TabByText('test2').should('have.attr', 'aria-selected', 'true');
      cy.get('[ui5-tabcontainer]').findUi5TabByText('test1').should('have.attr', 'aria-selected', 'false');
    });
  });

  it('header spacer', () => {
    const TestComp = () => {
      return (
        <ObjectPage data-testid="op" style={{ height: '95vh' }} titleArea={DPTitle} headerArea={HeaderWithLargeForm}>
          <ObjectPageSection id="first" titleText="First">
            <div>First Content</div>
          </ObjectPageSection>
          {OPContent}
        </ObjectPage>
      );
    };
    cy.mount(<TestComp />);
    cy.findByTestId('op').scrollTo(0, 649);

    cy.wait(500);
    cy.findByText('First Content').should('be.visible');
  });

  [ObjectPageMode.Default, ObjectPageMode.IconTabBar].forEach((mode) => {
    it(`programmatic prop selection (mode: ${mode})`, () => {
      const TestComp = (props: ObjectPagePropTypes) => {
        const [selectedSection, setSelectedSection] = useState(props.selectedSectionId);
        const [selectedSubSection, setSelectedSubSection] = useState(props.selectedSubSectionId);

        return (
          <>
            <button
              onClick={() => {
                setSelectedSection('goals');
              }}
            >
              Select Goals
            </button>
            <button
              onClick={() => {
                setSelectedSubSection('personal-payment-information');
              }}
            >
              Select Payment Information
            </button>
            <ObjectPage
              {...props}
              selectedSubSectionId={selectedSubSection}
              selectedSectionId={selectedSection}
              style={{ height: '1000px', scrollBehavior: 'auto' }}
            >
              {OPContent}
            </ObjectPage>
          </>
        );
      };
      const changeSpy = cy.spy().as('change');
      let callCount = 1;
      [{ titleArea: DPTitle, headerArea: DPContent }, { titleArea: DPTitle }, { headerArea: DPContent }, {}].forEach(
        (props: ObjectPagePropTypes) => {
          cy.mount(
            <TestComp
              {...props}
              mode={mode}
              selectedSubSectionId={`employment-job-relationship`}
              onSelectedSectionChange={changeSpy}
            />,
          );

          cy.findByText('employment-job-relationship-content').should('be.visible');
          cy.findByText('Job Information').should('not.be.visible');
          cy.get('[ui5-tabcontainer]').findUi5TabByText('Employment').should('have.attr', 'aria-selected', 'true');

          cy.mount(
            <TestComp {...props} mode={mode} selectedSectionId={`personal`} onSelectedSectionChange={changeSpy} />,
          );
          cy.findByText('personal-connect-content').should('be.visible');

          if (mode === 'IconTabBar') {
            cy.findByText('test-content').should('not.exist');
          } else {
            cy.findByText('test-content').should('not.be.visible');
          }
          cy.get('[ui5-tabcontainer]').findUi5TabByText('Personal').should('have.attr', 'aria-selected', 'true');

          cy.wait(100);
          cy.findByText('Select Goals').click();
          cy.findByText('goals-content').should('be.visible');
          cy.get('@change').should('have.callCount', callCount);
          callCount++;
          if (mode === 'IconTabBar') {
            cy.findByText('personal-connect-content').should('not.exist');
          } else {
            cy.findByText('personal-connect-content').should('not.be.visible');
          }
          cy.get('[ui5-tabcontainer]').findUi5TabByText('Goals').should('have.attr', 'aria-selected', 'true');

          cy.get('[ui5-tabcontainer]').findUi5TabByText('Personal').click();
          if (mode === 'IconTabBar') {
            cy.findByText('test-content').should('not.exist');
          } else {
            cy.findByText('test-content').should('not.be.visible');
          }
          cy.findByText('personal-connect-content').should('be.visible');
          cy.get('[ui5-tabcontainer]').findUi5TabByText('Personal').should('have.attr', 'aria-selected', 'true');
          cy.get('@change').should('have.callCount', callCount);
          callCount++;

          cy.get('[ui5-tabcontainer]').findUi5TabByText('Goals').click();
          if (mode === 'IconTabBar') {
            cy.findByText('personal-connect-content').should('not.exist');
          } else {
            cy.findByText('personal-connect-content').should('not.be.visible');
          }
          cy.findByText('goals-content').should('be.visible');
          cy.get('[ui5-tabcontainer]').findUi5TabByText('Goals').should('have.attr', 'aria-selected', 'true');
          cy.get('@change').should('have.callCount', callCount);
          callCount++;

          cy.findByText('Select Payment Information').click();
          cy.findByText('personal-payment-information-content').should('be.visible');
          cy.findByText('personal-connect-content').should('not.be.visible');
          cy.get('[ui5-tabcontainer]').findUi5TabByText('Personal').should('have.attr', 'aria-selected', 'true');
          cy.get('@change').should('have.callCount', callCount);
          callCount++;
        },
      );
    });
  });

  it('accessibilityAttributes', () => {
    cy.mount(
      <ObjectPage data-testid="op" titleArea={DPTitle} headerArea={DPContent} footerArea={Footer}>
        {OPContent}
      </ObjectPage>,
    );

    cy.get('header').should('not.have.attr', 'role');
    cy.get('header').should('have.attr', 'aria-roledescription', 'Object Page header');
    cy.get('[data-component-name="ObjectPageAnchorBarExpandBtn"]').should(($el) => {
      expect($el[0].accessibilityAttributes.expanded).to.equal(true);
    });
    cy.get('[data-component-name="ObjectPageAnchorBarExpandBtn"]').should(
      'have.attr',
      'accessible-name',
      'Collapse Header',
    );
    cy.get('section[data-component-name="ObjectPageAnchorBar"]').should('not.have.attr', 'role');
    cy.get('footer').should('not.have.attr', 'role');

    const accessibilityAttributes = {
      objectPageTopHeader: {
        role: 'banner',
        ariaRoledescription: 'ariaRoledescription',
      },
      objectPageAnchorBar: {
        expandButton: {
          expanded: undefined,
          accessibleName: '',
        },
        role: 'not-a-real-role',
      },
      objectPageFooterArea: {
        role: 'contentinfo',
      },
    };

    cy.mount(
      <ObjectPage
        data-testid="op"
        titleArea={DPTitle}
        headerArea={DPContent}
        footerArea={Footer}
        accessibilityAttributes={accessibilityAttributes}
      >
        {OPContent}
      </ObjectPage>,
    );

    cy.get('header').should('have.attr', 'role', 'banner');
    cy.get('header').should('have.attr', 'aria-roledescription', 'ariaRoledescription');
    cy.get('[data-component-name="ObjectPageAnchorBarExpandBtn"]').should(($el) => {
      const attrs = $el[0].accessibilityAttributes;

      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      expect(attrs).to.exist;
      expect(attrs).to.haveOwnProperty('expanded');
      expect(attrs.expanded).to.equal(undefined);
    });
    cy.get('[data-component-name="ObjectPageAnchorBarExpandBtn"]').should('have.attr', 'accessible-name', '');
    cy.get('section[data-component-name="ObjectPageAnchorBar"]').should('have.attr', 'role', 'not-a-real-role');
    cy.get('footer').should('have.attr', 'role', 'contentinfo');
  });

  cypressPassThroughTestsFactory(ObjectPage);
});

const DPTitle = (
  <ObjectPageTitle
    header="Denise Smith"
    subHeader="Senior UI Developer"
    actionsBar={
      <Toolbar>
        <ToolbarButton design={ButtonDesign.Emphasized} text="Primary Action" />
        <ToolbarButton text="Action" />
      </Toolbar>
    }
    breadcrumbs={
      <Breadcrumbs>
        <BreadcrumbsItem>Manager Cockpit</BreadcrumbsItem>
        <BreadcrumbsItem>My Team</BreadcrumbsItem>
        <BreadcrumbsItem>Employee Details (Denise Smith)</BreadcrumbsItem>
      </Breadcrumbs>
    }
  >
    <ObjectStatus state={ValueState.Positive}>employed</ObjectStatus>
  </ObjectPageTitle>
);

const DPContent = (
  <ObjectPageHeader>
    <FlexBox wrap={FlexBoxWrap.Wrap} alignItems={FlexBoxAlignItems.Center}>
      <FlexBox direction={FlexBoxDirection.Column}>
        <Link>+33 6 4512 5158</Link>
        <Link href="mailto:ui5-webcomponents-react@sap.com">DeniseSmith@sap.com</Link>
        <Link href="https://github.com/SAP/ui5-webcomponents-react">
          https://github.com/SAP/ui5-webcomponents-react
        </Link>
      </FlexBox>
      <FlexBox direction={FlexBoxDirection.Column} style={{ padding: '10px' }}>
        <Label>San Jose</Label>
        <Label>California, USA</Label>
      </FlexBox>
    </FlexBox>
  </ObjectPageHeader>
);

const OPContent = [
  <ObjectPageSection key="0" titleText="Goals" id="goals" aria-label="Goals">
    <div data-testid="section 1" style={{ height: '400px', width: '100%', background: 'lightblue' }}>
      <span data-testid="goals-content">goals-content</span>
    </div>
  </ObjectPageSection>,
  <ObjectPageSection key="1" titleText="Test" id="test" aria-label="Test">
    <div data-testid="section 2" style={{ height: '1200px', width: '100%', background: 'lightyellow' }}>
      <span data-testid="test-content">test-content</span>
    </div>
  </ObjectPageSection>,
  <ObjectPageSection key="2" titleText="Personal" id="personal" aria-label="Personal">
    <ObjectPageSubSection
      titleText="Connect"
      id="personal-connect"
      aria-label="Connect"
      actions={
        <>
          <Button design={ButtonDesign.Emphasized} style={{ minWidth: '120px' }}>
            Custom Action
          </Button>
          <Button design={ButtonDesign.Transparent} icon="action-settings" tooltip="settings" />
          <Button design={ButtonDesign.Transparent} icon="download" tooltip="download" />
        </>
      }
    >
      <div style={{ height: '400px', width: '100%', background: 'black' }}>
        <span data-testid="personal-connect-content">personal-connect-content</span>
      </div>
    </ObjectPageSubSection>
    <ObjectPageSubSection
      titleText="Payment Information"
      id="personal-payment-information"
      aria-label="Payment Information"
    >
      <div style={{ height: '400px', width: '100%', background: 'blue' }}>
        <span data-testid="personal-payment-information-content">personal-payment-information-content</span>
      </div>
    </ObjectPageSubSection>
  </ObjectPageSection>,
  <ObjectPageSection key="3" titleText="Employment" id={arbitraryCharsId} aria-label="Employment">
    <ObjectPageSubSection titleText="Job Information" id="employment-job-information" aria-label="Job Information">
      <div style={{ height: '100px', width: '100%', background: 'orange' }}>
        <span data-testid="employment-job-information-content">employment-job-information-content</span>
      </div>
    </ObjectPageSubSection>
    <ObjectPageSubSection titleText="Employee Details" id="employment-employee-details" aria-label="Employee Details">
      <div style={{ height: '100px', width: '100%', background: 'cadetblue' }}>
        <span data-testid="employment-employee-details-content">employment-employee-details-content</span>
      </div>
    </ObjectPageSubSection>
    <ObjectPageSubSection titleText="Job Relationship" id="employment-job-relationship" aria-label="Job Relationship">
      <div style={{ height: '100px', width: '100%', background: 'lightgrey' }}>
        <span data-testid="employment-job-relationship-content">employment-job-relationship-content</span>
      </div>
    </ObjectPageSubSection>
  </ObjectPageSection>,
];

const HeaderWithLargeForm = (
  <ObjectPageHeader>
    <Form layout="S1 M2 L2 XL2">
      <FormGroup headerText="Personal Data">
        <FormItem labelContent={<Label>Name</Label>}>
          <Input type={InputType.Text} />
        </FormItem>
        <FormItem labelContent={<Label>Address</Label>}>
          <Input type={InputType.Text} />
        </FormItem>
        <FormItem labelContent={<Label>Country</Label>}>
          <Select>
            <Option>Germany</Option>
            <Option>France</Option>
            <Option>Italy</Option>
          </Select>
        </FormItem>
        <FormItem labelContent={<Label>Additional Comment</Label>} className="formAlignLabelStart">
          <TextArea
            rows={5}
            placeholder="The label is aligned to start by setting `<class>::part(label){  align-self: start; }` "
          />
        </FormItem>
        <FormItem labelContent={<Label>Home address</Label>}>
          <CheckBox checked />
        </FormItem>
      </FormGroup>
      <FormGroup headerText="Company Data">
        <FormItem labelContent={<Label>Company Name</Label>}>
          <Input type={InputType.Text} />
        </FormItem>
        <FormItem labelContent={<Label>Company Address</Label>}>
          <Input type={InputType.Text} />
        </FormItem>
        <FormItem labelContent={<Label>Company City</Label>}>
          <Input type={InputType.Text} />
        </FormItem>
        <FormItem labelContent={<Label>Company Country</Label>}>
          <Input type={InputType.Text} />
        </FormItem>
        <FormItem labelContent={<Label>Number of Employees</Label>}>
          <Input type={InputType.Number} value="5000" disabled />
        </FormItem>
        <FormItem labelContent={<Label>Member of Partner Network</Label>}>
          <CheckBox checked />
        </FormItem>
      </FormGroup>
      <FormGroup headerText="Marketing Data">
        <FormItem labelContent={<Label>Email</Label>}>
          <Input type={InputType.Email} />
        </FormItem>
        <FormItem labelContent={<Label>Company Email</Label>}>
          <Input type={InputType.Email} />
        </FormItem>
        <FormItem labelContent={<Label>I want to receive the newsletter</Label>}>
          <CheckBox />
        </FormItem>
      </FormGroup>
    </Form>
  </ObjectPageHeader>
);

const Footer = (
  <Bar
    data-testid="footer"
    design={BarDesign.FloatingFooter}
    endContent={
      <>
        <Button design={ButtonDesign.Positive}>Accept</Button>
        <Button design={ButtonDesign.Negative}>Reject</Button>
      </>
    }
  />
);
