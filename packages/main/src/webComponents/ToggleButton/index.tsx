'use client';

import '@ui5/webcomponents/dist/ToggleButton.js';
import type { ButtonAccessibilityAttributes, ButtonClickEventDetail } from '@ui5/webcomponents/dist/Button.js';
import type ButtonAccessibleRole from '@ui5/webcomponents/dist/types/ButtonAccessibleRole.js';
import type ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import type ButtonType from '@ui5/webcomponents/dist/types/ButtonType.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '@ui5/webcomponents-react-base';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface ToggleButtonAttributes {
  /**
   * Defines the additional accessibility attributes that will be applied to the component.
   * The following fields are supported:
   *
   * - **expanded**: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed.
   * Accepts the following string values: `true` or `false`
   *
   * - **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.
   * Accepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.
   *
   * - **controls**: Identifies the element (or elements) whose contents or presence are controlled by the button element.
   * Accepts a lowercase string value.
   *
   * **Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.
   * @default {}
   */
  accessibilityAttributes?: ButtonAccessibilityAttributes;

  /**
   * Defines the accessible description of the component.
   *
   * **Note:** Available since [v2.5.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.5.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  accessibleDescription?: string | undefined;

  /**
   * Defines the accessible ARIA name of the component.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Receives id(or many ids) of the elements that label the component.
   *
   * **Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  accessibleNameRef?: string | undefined;

  /**
   * Describes the accessibility role of the button.
   *
   * **Note:** Use <code>ButtonAccessibleRole.Link</code> role only with a press handler, which performs a navigation. In all other scenarios the default button semantics are recommended.
   *
   * **Note:** Available since [v1.23](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23) of **@ui5/webcomponents**.
   * @default "Button"
   */
  accessibleRole?: ButtonAccessibleRole | keyof typeof ButtonAccessibleRole;

  /**
   * Defines the component design.
   * @default "Default"
   */
  design?: ButtonDesign | keyof typeof ButtonDesign;

  /**
   * Defines whether the component is disabled.
   * A disabled component can't be pressed or
   * focused, and it is not in the tab chain.
   * @default false
   */
  disabled?: boolean;

  /**
   * Defines the icon, displayed as graphical element within the component after the button text.
   *
   * **Note:** It is highly recommended to use `endIcon` property only together with `icon` and/or `text` properties.
   * Usage of `endIcon` only should be avoided.
   *
   * The SAP-icons font provides numerous options.
   *
   * Example:
   * See all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
   * @default undefined
   */
  endIcon?: string | undefined;

  /**
   * Defines the icon, displayed as graphical element within the component.
   * The SAP-icons font provides numerous options.
   *
   * Example:
   * See all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
   * @default undefined
   */
  icon?: string | undefined;

  /**
   * Determines whether the component is displayed as pressed.
   * @default false
   */
  pressed?: boolean;

  /**
   * When set to `true`, the component will
   * automatically submit the nearest HTML form element on `press`.
   *
   * **Note:** This property is only applicable within the context of an HTML Form element.`
   * @default false
   * @deprecated Set the "type" property to "Submit" to achieve the same result. The "submits" property is ignored if "type" is set to any value other than "Button".
   */
  submits?: boolean;

  /**
   * Defines the tooltip of the component.
   *
   * **Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.
   *
   * **Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  tooltip?: string | undefined;

  /**
   * Defines whether the button has special form-related functionality.
   *
   * **Note:** This property is only applicable within the context of an HTML Form element.
   *
   * **Note:** Available since [v1.15.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents**.
   * @default "Button"
   */
  type?: ButtonType | keyof typeof ButtonType;
}

interface ToggleButtonDomRef extends Required<ToggleButtonAttributes>, Ui5DomRef {}

interface ToggleButtonPropTypes
  extends ToggleButtonAttributes,
    Omit<CommonProps, keyof ToggleButtonAttributes | 'badge' | 'children' | 'onClick'> {
  /**
   * Adds a badge to the button.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="badge"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * **Note:** Available since [v2.7.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.7.0) of **@ui5/webcomponents**.
   */
  badge?: UI5WCSlotsNode;

  /**
   * Defines the text of the component.
   *
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the component is activated either with a mouse/tap or by using the Enter or Space key.
   *
   * **Note:** The event will not be fired if the `disabled` property is set to `true`.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * **Note:** Available since [v2.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.10.0) of **@ui5/webcomponents**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ✅|✅|
   */
  onClick?: (event: Ui5CustomEvent<ToggleButtonDomRef, ButtonClickEventDetail>) => void;
}

/**
 * The `ToggleButton` component is an enhanced `Button`
 * that can be toggled between pressed and normal states.
 * Users can use the `ToggleButton` as a switch to turn a setting on or off.
 * It can also be used to represent an independent choice similar to a check box.
 *
 * Clicking or tapping on a `ToggleButton` changes its state to `pressed`. The button returns to
 * its initial state when the user clicks or taps on it again.
 * By applying additional custom CSS-styling classes, apps can give a different style to any `ToggleButton`.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 */
const ToggleButton = withWebComponent<ToggleButtonPropTypes, ToggleButtonDomRef>(
  'ui5-toggle-button',
  [
    'accessibilityAttributes',
    'accessibleDescription',
    'accessibleName',
    'accessibleNameRef',
    'accessibleRole',
    'design',
    'endIcon',
    'icon',
    'tooltip',
    'type',
  ],
  ['disabled', 'pressed', 'submits'],
  ['badge'],
  ['click'],
);

ToggleButton.displayName = 'ToggleButton';

export { ToggleButton };
export type { ToggleButtonDomRef, ToggleButtonPropTypes };
