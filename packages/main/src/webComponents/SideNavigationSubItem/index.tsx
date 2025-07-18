'use client';

import '@ui5/webcomponents-fiori/dist/SideNavigationSubItem.js';
import type { SideNavigationItemClickEventDetail } from '@ui5/webcomponents-fiori/dist/SideNavigationItemBase.js';
import type { SideNavigationItemAccessibilityAttributes } from '@ui5/webcomponents-fiori/dist/SideNavigationSelectableItemBase.js';
import type SideNavigationItemDesign from '@ui5/webcomponents-fiori/dist/types/SideNavigationItemDesign.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface SideNavigationSubItemAttributes {
  /**
   * Defines the additional accessibility attributes that will be applied to the component.
   * The following fields are supported:
   *
   * - **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.
   * Accepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.
   *
   * **Note:** Do not use it on parent items, as it will be overridden if the item is in the overflow menu.
   *
   * **Note:** Available since [v2.7.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.7.0) of **@ui5/webcomponents-fiori**.
   * @default {}
   */
  accessibilityAttributes?: SideNavigationItemAccessibilityAttributes;

  /**
   * Item design.
   *
   * **Note:** Items with "Action" design must not have sub-items.
   *
   * **Note:** Available since [v2.7.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.7.0) of **@ui5/webcomponents-fiori**.
   * @default "Default"
   */
  design?: SideNavigationItemDesign | keyof typeof SideNavigationItemDesign;

  /**
   * Defines whether the component is disabled.
   * A disabled component can't be pressed or
   * focused, and it is not in the tab chain.
   *
   * **Note:** Available since [v1.19.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.19.0) of **@ui5/webcomponents-fiori**.
   * @default false
   */
  disabled?: boolean;

  /**
   * Defines the link target URI. Supports standard hyperlink behavior.
   * If a JavaScript action should be triggered,
   * this should not be set, but instead an event handler
   * for the `click` event should be registered.
   *
   * **Note:** Available since [v1.19.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.19.0) of **@ui5/webcomponents-fiori**.
   * @default undefined
   */
  href?: string | undefined;

  /**
   * Defines the icon of the item.
   *
   * The SAP-icons font provides numerous options.
   *
   * See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
   * @default undefined
   */
  icon?: string | undefined;

  /**
   * Defines whether the item is selected.
   *
   * **Note:** Items that have a set `href` and `target` set to `_blank` should not be selectable.
   * @default false
   */
  selected?: boolean;

  /**
   * Defines the component target.
   *
   * Possible values:
   *
   * - `_self`
   * - `_top`
   * - `_blank`
   * - `_parent`
   * - `framename`
   *
   * **Note:** Items that have a defined `href` and `target`
   * attribute set to `_blank` should not be selectable.
   *
   * **Note:** Available since [v1.19.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.19.0) of **@ui5/webcomponents-fiori**.
   * @default undefined
   */
  target?: string | undefined;

  /**
   * Defines the text of the item.
   * @default undefined
   */
  text?: string | undefined;

  /**
   * Defines the tooltip of the component.
   *
   * A tooltip attribute should be provided, in order to represent meaning/function,
   * when the component is collapsed ("icon only" design is visualized) or the item text is truncated.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-fiori**.
   * @default undefined
   */
  tooltip?: string | undefined;

  /**
   * Indicates whether the navigation item is selectable. By default, all items are selectable unless specifically marked as unselectable.
   *
   * When a parent item is marked as unselectable, selecting it will only expand or collapse its sub-items.
   * To improve user experience do not mix unselectable parent items with selectable parent items in a single side navigation.
   *
   *
   * **Guidelines**:
   * - Items with an assigned `href` and a target of `_blank` should be marked as unselectable.
   * - Items that trigger actions (with design "Action") should be marked as unselectable.
   *
   * **Note:** Available since [v2.7.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.7.0) of **@ui5/webcomponents-fiori**.
   * @default false
   */
  unselectable?: boolean;
}

interface SideNavigationSubItemDomRef extends Required<SideNavigationSubItemAttributes>, Ui5DomRef {}

interface SideNavigationSubItemPropTypes
  extends SideNavigationSubItemAttributes,
    Omit<CommonProps, keyof SideNavigationSubItemAttributes | 'onClick'> {
  /**
   * Fired when the component is activated either with a click/tap or by using the [Enter] or [Space] keys.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ✅|✅|
   */
  onClick?: (event: Ui5CustomEvent<SideNavigationSubItemDomRef, SideNavigationItemClickEventDetail>) => void;
}

/**
 * Represents a single navigation action within `SideNavigationItem`.
 * The `SideNavigationSubItem` is intended to be used inside a `SideNavigationItem` only.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 * @abstract
 */
const SideNavigationSubItem = withWebComponent<SideNavigationSubItemPropTypes, SideNavigationSubItemDomRef>(
  'ui5-side-navigation-sub-item',
  ['accessibilityAttributes', 'design', 'href', 'icon', 'target', 'text', 'tooltip'],
  ['disabled', 'selected', 'unselectable'],
  [],
  ['click'],
);

SideNavigationSubItem.displayName = 'SideNavigationSubItem';

export { SideNavigationSubItem };
export type { SideNavigationSubItemDomRef, SideNavigationSubItemPropTypes };
