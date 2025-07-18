'use client';

import '@ui5/webcomponents/dist/MenuItem.js';
import type {
  MenuBeforeCloseEventDetail,
  MenuBeforeOpenEventDetail,
  MenuItemAccessibilityAttributes,
} from '@ui5/webcomponents/dist/MenuItem.js';
import type Highlight from '@ui5/webcomponents/dist/types/Highlight.js';
import type ListItemType from '@ui5/webcomponents/dist/types/ListItemType.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '@ui5/webcomponents-react-base';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface MenuItemAttributes {
  /**
   * Defines the additional accessibility attributes that will be applied to the component.
   * The following fields are supported:
   *
   * - **ariaKeyShortcuts**: Indicated the availability of a keyboard shortcuts defined for the menu item.
   *
   * - **role**: Defines the role of the menu item. If not set, menu item will have default role="menuitem".
   *
   * **Note:** Available since [v2.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.1.0) of **@ui5/webcomponents**.
   * @default {}
   */
  accessibilityAttributes?: MenuItemAccessibilityAttributes;

  /**
   * Defines the accessible ARIA name of the component.
   *
   * **Note:** Available since [v1.7.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.7.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Defines the `additionalText`, displayed in the end of the menu item.
   *
   * **Note:** The additional text will not be displayed if there are items added in `items` slot or there are
   * components added to `endContent` slot.
   *
   * The priority of what will be displayed at the end of the menu item is as follows:
   * sub-menu arrow (if there are items added in `items` slot) -> components added in `endContent` -> text set to `additionalText`.
   *
   * **Note:** Available since [v1.8.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.8.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  additionalText?: string | undefined;

  /**
   * Defines whether menu item is in checked state.
   *
   * **Note:** checked state is only taken into account when menu item is added to menu item group
   * with `checkMode` other than `None`.
   *
   * **Note:** A checked menu item has a checkmark displayed at its end.
   *
   * **Note:** Available since [v2.12.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.12.0) of **@ui5/webcomponents**.
   * @default false
   */
  checked?: boolean;

  /**
   * Defines whether menu item is in disabled state.
   *
   * **Note:** A disabled menu item is noninteractive.
   * @default false
   */
  disabled?: boolean;

  /**
   * Defines the highlight state of the list items.
   * Available options are: `"None"` (by default), `"Positive"`, `"Critical"`, `"Information"` and `"Negative"`.
   *
   * **Note:** Available since [v1.24](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.24) of **@ui5/webcomponents**.
   * @default "None"
   */
  highlight?: Highlight | keyof typeof Highlight;

  /**
   * Defines the icon to be displayed as graphical element within the component.
   * The SAP-icons font provides numerous options.
   *
   * **Example:**
   *
   * See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
   * @default undefined
   */
  icon?: string | undefined;

  /**
   * Defines the delay in milliseconds, after which the loading indicator will be displayed inside the corresponding menu popover.
   *
   * **Note:** If set to `true` a busy indicator component will be displayed into the related one to the current menu item sub-menu popover.
   *
   * **Note:** Available since [v1.13.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.13.0) of **@ui5/webcomponents**.
   * @default false
   */
  loading?: boolean;

  /**
   * Defines the delay in milliseconds, after which the loading indicator will be displayed inside the corresponding menu popover.
   *
   * **Note:** Available since [v1.13.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.13.0) of **@ui5/webcomponents**.
   * @default 1000
   */
  loadingDelay?: number;

  /**
   * The navigated state of the list item.
   * If set to `true`, a navigation indicator is displayed at the end of the list item.
   *
   * **Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.
   * @default false
   */
  navigated?: boolean;

  /**
   * Defines the selected state of the component.
   * @default false
   */
  selected?: boolean;

  /**
   * Defines the text of the tree item.
   * @default undefined
   */
  text?: string | undefined;

  /**
   * Defines the text of the tooltip for the menu item.
   *
   * **Note:** Available since [v1.23.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  tooltip?: string | undefined;

  /**
   * Defines the visual indication and behavior of the list items.
   * Available options are `Active` (by default), `Inactive`, `Detail` and `Navigation`.
   *
   * **Note:** When set to `Active` or `Navigation`, the item will provide visual response upon press and hover,
   * while with type `Inactive` and `Detail` - will not.
   * @default "Active"
   */
  type?: ListItemType | keyof typeof ListItemType;
}

interface MenuItemDomRef extends Required<MenuItemAttributes>, Ui5DomRef {}

interface MenuItemPropTypes
  extends MenuItemAttributes,
    Omit<
      CommonProps,
      | keyof MenuItemAttributes
      | 'children'
      | 'deleteButton'
      | 'endContent'
      | 'onBeforeClose'
      | 'onBeforeOpen'
      | 'onCheck'
      | 'onClose'
      | 'onDetailClick'
      | 'onOpen'
    > {
  /**
   * Defines the items of this component.
   *
   * **Note:** The slot can hold menu item and menu separator items.
   *
   * If there are items added to this slot, an arrow will be displayed at the end
   * of the item in order to indicate that there are items added. In that case components added
   * to `endContent` slot or `additionalText` content will not be displayed.
   *
   * The priority of what will be displayed at the end of the menu item is as follows:
   * sub-menu arrow (if there are items added in `items` slot) -> components added in `endContent` -> text set to `additionalText`.
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the delete button, displayed in "Delete" mode.
   * **Note:** While the slot allows custom buttons, to match
   * design guidelines, please use the `Button` component.
   * **Note:** When the slot is not present, a built-in delete button will be displayed.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="deleteButton"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * **Note:** Available since [v1.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.9.0) of **@ui5/webcomponents**.
   */
  deleteButton?: UI5WCSlotsNode;

  /**
   * Defines the components that should be displayed at the end of the menu item.
   *
   * **Note:** It is highly recommended to slot only components of type `Button`,`Link`
   * or `Icon` in order to preserve the intended design. If there are components added to this slot,
   * and there is text set in `additionalText`, it will not be displayed. If there are items added to `items` slot,
   * nether `additionalText` nor components added to this slot would be displayed.
   *
   * The priority of what will be displayed at the end of the menu item is as follows:
   * sub-menu arrow (if there are items added in `items` slot) -> components added in `endContent` -> text set to `additionalText`.
   *
   * Application developers are responsible for ensuring that interactive elements placed in the `endContent` slot
   * have the correct accessibility behaviour, including their enabled or disabled states.
   * The menu does not manage these aspects when the menu item state changes.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="endContent"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.
   */
  endContent?: UI5WCSlotsNode;
  /**
   * Fired before the menu is closed. This event can be cancelled, which will prevent the menu from closing.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * **Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ✅|❌|
   */
  onBeforeClose?: (event: Ui5CustomEvent<MenuItemDomRef, MenuBeforeCloseEventDetail>) => void;

  /**
   * Fired before the menu is opened. This event can be cancelled, which will prevent the menu from opening.
   *
   * **Note:** Since 1.14.0 the event is also fired before a sub-menu opens.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * **Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ✅|❌|
   */
  onBeforeOpen?: (event: Ui5CustomEvent<MenuItemDomRef, MenuBeforeOpenEventDetail>) => void;

  /**
   * Fired when an item is checked or unchecked.
   *
   * **Note:** Available since [v2.12.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.12.0) of **@ui5/webcomponents**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onCheck?: (event: Ui5CustomEvent<MenuItemDomRef>) => void;

  /**
   * Fired after the menu is closed.
   *
   * **Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|❌|
   */
  onClose?: (event: Ui5CustomEvent<MenuItemDomRef>) => void;

  /**
   * Fired when the user clicks on the detail button when type is `Detail`.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onDetailClick?: (event: Ui5CustomEvent<MenuItemDomRef>) => void;

  /**
   * Fired after the menu is opened.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|❌|
   */
  onOpen?: (event: Ui5CustomEvent<MenuItemDomRef>) => void;
}

/**
 * `MenuItem` is the item to use inside a `Menu`.
 * An arbitrary hierarchy structure can be represented by recursively nesting menu items.
 *
 * ### Usage
 *
 * `MenuItem` represents a node in a `Menu`. The menu itself is rendered as a list,
 * and each `MenuItem` is represented by a list item in that list. Therefore, you should only use
 * `MenuItem` directly in your apps. The `ListItemStandard` list item is internal for the list, and not intended for public use.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [1.3.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.3.0) of __@ui5/webcomponents__.
 */
const MenuItem = withWebComponent<MenuItemPropTypes, MenuItemDomRef>(
  'ui5-menu-item',
  [
    'accessibilityAttributes',
    'accessibleName',
    'additionalText',
    'highlight',
    'icon',
    'loadingDelay',
    'text',
    'tooltip',
    'type',
  ],
  ['checked', 'disabled', 'loading', 'navigated', 'selected'],
  ['deleteButton', 'endContent'],
  ['before-close', 'before-open', 'check', 'close', 'detail-click', 'open'],
);

MenuItem.displayName = 'MenuItem';

export { MenuItem };
export type { MenuItemDomRef, MenuItemPropTypes };
