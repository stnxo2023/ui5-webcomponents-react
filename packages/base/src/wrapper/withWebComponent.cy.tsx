import {
  setCustomElementsScopingRules,
  setCustomElementsScopingSuffix,
} from '@ui5/webcomponents-base/dist/CustomElementsScope.js';
import type { ButtonDomRef } from '@ui5/webcomponents-react';
import { Bar, Button, Popover, Switch } from '@ui5/webcomponents-react';
import { useReducer, useRef, useState } from 'react';

describe('withWebComponent', () => {
  // reset scoping
  afterEach(function () {
    if (this.currentTest.title === 'scoping') {
      // it's not possible to pass an empty string to `setCustomElementsScopingSuffix`
      setCustomElementsScopingRules({ include: [/^ui5-/], exclude: [/.*/] });
    }
  });

  it('Unmount Event Handlers correctly after prop update', () => {
    const custom = cy.spy().as('custom');
    const nativePassedThrough = cy.spy().as('nativePassedThrough');
    const native = cy.spy().as('native');
    const updatedCustom = cy.spy().as('updatedCustom');
    const updatedNative = cy.spy().as('updatedNative');
    const updatedNativePassedThrough = cy.spy().as('updatedNativePassedThrough');

    const TestComp = () => {
      const [currentHandler, updateHandler] = useReducer(
        () => ({
          native: updatedNative,
          nativePassedThrough: updatedNativePassedThrough,
          custom: updatedCustom,
        }),
        { native, nativePassedThrough, custom },
      );
      return (
        <>
          <button onClick={updateHandler}>Update handler</button>
          <Switch data-testid="switch" onChange={currentHandler.custom} onClick={currentHandler.native} />
          <Button onClick={currentHandler.nativePassedThrough}>Btn</Button>
        </>
      );
    };
    cy.mount(<TestComp />);

    cy.findByTestId('switch').realClick();
    cy.findByText('Btn').click();
    cy.get('@custom').should('have.been.calledOnce');
    cy.get('@native').should('have.been.calledOnce');
    cy.get('@nativePassedThrough').should('have.been.calledOnce');
    cy.findByText('Update handler').click();
    cy.findByTestId('switch').realClick();
    cy.findByText('Btn').click();
    cy.get('@custom').should('have.been.calledOnce');
    cy.get('@native').should('have.been.calledOnce');
    cy.get('@nativePassedThrough').should('have.been.calledOnce');
    cy.get('@updatedCustom').should('have.been.calledOnce');
    cy.get('@updatedNative').should('have.been.calledOnce');
    cy.get('@updatedNativePassedThrough').should('have.been.calledOnce');
  });

  it('Slots accept both Fragment and regular nodes', () => {
    const callbackFooter1 = cy.spy().as('cb1');
    const callbackFooter2 = cy.spy().as('cb2');

    cy.mount(<Bar startContent={<Button onClick={callbackFooter1}>Footer Button 1</Button>}>Middle Content</Bar>);

    cy.findByText('Footer Button 1').click();
    cy.get('@cb1').should('have.been.calledOnce');

    cy.mount(
      <Bar
        startContent={
          <>
            <Button onClick={callbackFooter1}>Footer Button 1</Button>
            <Button onClick={callbackFooter2}>Footer Button 2</Button>
          </>
        }
      >
        Middle Content
      </Bar>,
    );
    cy.findByText('Footer Button 1').click();
    cy.get('@cb1').should('have.been.calledTwice');
    cy.findByText('Footer Button 2').click();
    cy.get('@cb2').should('have.been.calledOnce');

    cy.mount(
      <Bar
        startContent={
          <>
            {true}
            not mounted
            {/* eslint-disable-next-line no-constant-binary-expression */}
            {false && <span>not mounted</span>}
            <span>mounted</span>
            <>
              {/* eslint-disable-next-line no-constant-binary-expression */}
              {false && <span>not mounted</span>}
              <span>mounted</span>
              <>
                {/* eslint-disable-next-line no-constant-binary-expression */}
                {false && <span>not mounted</span>}
                <span>mounted</span>
                <>
                  <span>mounted</span>
                </>
              </>
            </>
            <>
              <span>mounted</span>
            </>
            {/* eslint-disable-next-line no-constant-binary-expression */}
            <>{false && <span>not mounted</span>}</>
            <>
              <span>mounted</span>
              {[<span key="0">mounted</span>, <span key="1">mounted</span>]}
            </>
          </>
        }
      />,
    );

    cy.findByText('not mounted').should('not.exist');
    cy.findAllByText('mounted').should('have.length', 8).should('be.visible');
  });

  it('correct handling of boolean props', () => {
    const TestComp = () => {
      const [disabled, setDisabled] = useState(undefined);
      return (
        <>
          <button
            onClick={() => {
              setDisabled(false);
            }}
          >
            false
          </button>
          <button
            onClick={() => {
              setDisabled(true);
            }}
          >
            true
          </button>
          <button
            onClick={() => {
              setDisabled(undefined);
            }}
          >
            undefined
          </button>
          <Button disabled={disabled}>Btn</Button>
        </>
      );
    };
    cy.mount(<TestComp />);
    cy.findByText('Btn').should('not.have.attr', 'disabled');
    cy.findByText('true').click();
    cy.findByText('Btn').should('have.attr', 'disabled');
    cy.findByText('false').click();
    cy.findByText('Btn').should('not.have.attr', 'disabled');
    cy.findByText('undefined').click();
    cy.findByText('Btn').should('not.have.attr', 'disabled');
  });

  it('scoping', () => {
    const TestComp = () => {
      setCustomElementsScopingSuffix('ui5-wcr');
      return <Button>Test</Button>;
    };

    const TestComp2 = () => {
      setCustomElementsScopingSuffix('ui5-wcr');
      setCustomElementsScopingRules({ include: [/^ui5-/], exclude: [/^ui5-button/] });
      return <Button>Test</Button>;
    };

    cy.mount(<TestComp />);
    cy.get('ui5-button-ui5-wcr').should('be.visible');
    cy.get('ui5-button').should('not.exist');

    // now exclude the button
    cy.mount(<TestComp2 />);
    cy.get('ui5-button').should('be.visible');
    cy.get('ui5-button-ui5-wcr').should('not.exist');
  });

  it('pass objects & refs as props', () => {
    const PopoverComponent = () => {
      const btnRef = useRef(null);
      const [open, setOpen] = useState(false);
      return (
        <>
          <Button
            ref={btnRef}
            onClick={() => {
              setOpen((prev) => !prev);
            }}
          >
            Opener
          </Button>
          <Popover
            open={open}
            opener={btnRef.current}
            onClose={() => {
              setOpen(false);
            }}
          >
            Popover Content
          </Popover>
        </>
      );
    };

    cy.mount(<Button accessibilityAttributes={{ expanded: 'true' }}>Test</Button>);
    cy.findByText('Test').should('have.attr', 'ui5-button');
    cy.wait(500);
    cy.contains<ButtonDomRef>('Test').then(([$button]) => {
      expect($button.accessibilityAttributes).to.deep.equal({ expanded: 'true' });
    });

    cy.mount(<PopoverComponent />);
    cy.get('[ui5-popover]').should('exist').should('not.be.visible');
    cy.findByText('Opener').click();
    cy.get('[ui5-popover]').should('be.visible');
  });
});
