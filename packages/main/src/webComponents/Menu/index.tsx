'use client';

import '@ui5/webcomponents/dist/Menu.js';
import type {
  MenuBeforeCloseEventDetail,
  MenuBeforeOpenEventDetail,
  MenuItemClickEventDetail,
} from '@ui5/webcomponents/dist/Menu.js';
import type PopoverHorizontalAlign from '@ui5/webcomponents/dist/types/PopoverHorizontalAlign.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface MenuAttributes {
  /**
   * Defines the header text of the menu (displayed on mobile).
   * @default undefined
   */
  headerText?: string | undefined;

  /**
   * Determines the horizontal alignment of the menu relative to its opener control.
   * @default "Start"
   */
  horizontalAlign?: PopoverHorizontalAlign | keyof typeof PopoverHorizontalAlign;

  /**
   * Defines if a loading indicator would be displayed inside the corresponding ui5-menu popover.
   *
   * **Note:** Available since [v1.13.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.13.0) of **@ui5/webcomponents**.
   * @default false
   */
  loading?: boolean;

  /**
   * Defines the delay in milliseconds, after which the loading indicator will be displayed inside the corresponding ui5-menu popover.
   *
   * **Note:** Available since [v1.13.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.13.0) of **@ui5/webcomponents**.
   * @default 1000
   */
  loadingDelay?: number;

  /**
   * Indicates if the menu is open.
   *
   * **Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.
   * @default false
   */
  open?: boolean;

  /**
   * Defines the ID or DOM Reference of the element at which the menu is shown.
   * When using this attribute in a declarative way, you must only use the `id` (as a string) of the element at which you want to show the popover.
   * You can only set the `opener` attribute to a DOM Reference when using JavaScript.
   *
   * **Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  opener?: HTMLElement | string | undefined;
}

interface MenuDomRef extends Required<MenuAttributes>, Ui5DomRef {}

interface MenuPropTypes
  extends MenuAttributes,
    Omit<
      CommonProps,
      keyof MenuAttributes | 'children' | 'onBeforeClose' | 'onBeforeOpen' | 'onClose' | 'onItemClick' | 'onOpen'
    > {
  /**
   * Defines the items of this component.
   *
   * **Note:** Use `MenuItem` and `MenuSeparator` for their intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired before the menu is closed. This event can be cancelled, which will prevent the menu from closing.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * **Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ✅|✅|
   */
  onBeforeClose?: (event: Ui5CustomEvent<MenuDomRef, MenuBeforeCloseEventDetail>) => void;

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
   * | ✅|✅|
   */
  onBeforeOpen?: (event: Ui5CustomEvent<MenuDomRef, MenuBeforeOpenEventDetail>) => void;

  /**
   * Fired after the menu is closed.
   *
   * **Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|❌|
   */
  onClose?: (event: Ui5CustomEvent<MenuDomRef>) => void;

  /**
   * Fired when an item is being clicked.
   *
   * **Note:** Since 1.17.0 the event is preventable, allowing the menu to remain open after an item is pressed.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ✅|❌|
   */
  onItemClick?: (event: Ui5CustomEvent<MenuDomRef, MenuItemClickEventDetail>) => void;

  /**
   * Fired after the menu is opened.
   *
   * **Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onOpen?: (event: Ui5CustomEvent<MenuDomRef>) => void;
}

/**
 * `Menu` component represents a hierarchical menu structure.
 *
 * ### Structure
 *
 * The `Menu` can hold two types of entities:
 *
 * - `MenuItem` components
 * - `MenuSeparator` - used to separate menu items with a line
 *
 * An arbitrary hierarchy structure can be represented by recursively nesting menu items.
 *
 * ### Keyboard Handling
 *
 * The `Menu` provides advanced keyboard handling.
 * The user can use the following keyboard shortcuts in order to navigate trough the tree:
 *
 * - `Arrow Up` / `Arrow Down` - Navigates up and down the menu items that are currently visible.
 * - `Arrow Right`, `Space` or `Enter` - Opens a sub-menu if there are menu items nested
 * in the currently clicked menu item.
 * - `Arrow Left` or `Escape` - Closes the currently opened sub-menu.
 *
 * when there is `endContent` :
 * - `Arrow Left` or `ArrowRight` - Navigate between the menu item actions and the menu item itself
 * - `Arrow Up` / `Arrow Down` - Navigates up and down the currently visible menu items
 *
 * **Note:** If the text direction is set to Right-to-left (RTL), `Arrow Right` and `Arrow Left` functionality is swapped.
 *
 * Application developers are responsible for ensuring that interactive elements placed in the `endContent` slot
 * have the correct accessibility behaviour, including their enabled or disabled states.
 * The menu does not manage these aspects when the menu item state changes.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [1.3.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.3.0) of __@ui5/webcomponents__.
 */
const Menu = withWebComponent<MenuPropTypes, MenuDomRef>(
  'ui5-menu',
  ['headerText', 'horizontalAlign', 'loadingDelay', 'opener'],
  ['loading', 'open'],
  [],
  ['before-close', 'before-open', 'close', 'item-click', 'open'],
);

Menu.displayName = 'Menu';

export { Menu };
export type { MenuDomRef, MenuPropTypes };
