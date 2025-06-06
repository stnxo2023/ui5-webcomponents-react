'use client';

import '@ui5/webcomponents/dist/Table.js';
import type {
  TableMoveEventDetail,
  TableRowActionClickEventDetail,
  TableRowClickEventDetail,
} from '@ui5/webcomponents/dist/Table.js';
import type TableOverflowMode from '@ui5/webcomponents/dist/types/TableOverflowMode.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface TableAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Identifies the element (or elements) that labels the component.
   * @default undefined
   */
  accessibleNameRef?: string | undefined;

  /**
   * Defines if the loading indicator should be shown.
   *
   * **Note:** When the component is loading, it is not interactive.
   * @default false
   */
  loading?: boolean;

  /**
   * Defines the delay in milliseconds, after which the loading indicator will show up for this component.
   * @default 1000
   */
  loadingDelay?: number;

  /**
   * Defines the text to be displayed when there are no rows in the component.
   * @default undefined
   */
  noDataText?: string | undefined;

  /**
   * Defines the mode of the <code>ui5-table</code> overflow behavior.
   *
   * Available options are:
   *
   * <code>Scroll</code> - Columns are shown as regular columns and horizontal scrolling is enabled.
   * <code>Popin</code> - Columns are shown as pop-ins instead of regular columns.
   * @default "Scroll"
   */
  overflowMode?: TableOverflowMode | keyof typeof TableOverflowMode;

  /**
   * Defines the maximum number of row actions that is displayed, which determines the width of the row action column.
   *
   * **Note:** It is recommended to use a maximum of 3 row actions, as exceeding this limit may take up too much space on smaller screens.
   *
   * **Note:** Available since [v2.7.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.7.0) of **@ui5/webcomponents**.
   * @default 0
   */
  rowActionCount?: number;
}

interface TableDomRef extends Required<TableAttributes>, Ui5DomRef {}

interface TablePropTypes
  extends TableAttributes,
    Omit<
      CommonProps,
      | keyof TableAttributes
      | 'children'
      | 'features'
      | 'headerRow'
      | 'noData'
      | 'onMove'
      | 'onMoveOver'
      | 'onRowActionClick'
      | 'onRowClick'
    > {
  /**
   * Defines the rows of the component.
   *
   * **Note:** Use `TableRow` for the intended design.
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the features of the component.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="features"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   */
  features?: UI5WCSlotsNode;

  /**
   * Defines the header row of the component.
   *
   * **Note:** Use `TableHeaderRow` for the intended design.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="headerRow"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   */
  headerRow?: UI5WCSlotsNode;

  /**
   * Defines the custom visualization if there is no data available.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="noData"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   */
  noData?: UI5WCSlotsNode;
  /**
   * Fired when a movable list item is dropped onto a drop target.
   *
   * **Notes:**
   *
   * The `move` event is fired only if there was a preceding `move-over` with prevented default action.
   *
   * If the dragging operation is a cross-browser operation or files are moved to a potential drop target,
   * the `source` parameter will be `null`.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onMove?: (event: Ui5CustomEvent<TableDomRef, TableMoveEventDetail>) => void;

  /**
   * Fired when a movable item is moved over a potential drop target during a dragging operation.
   *
   * If the new position is valid, prevent the default action of the event using `preventDefault()`.
   *
   * **Note:** If the dragging operation is a cross-browser operation or files are moved to a potential drop target,
   * the `source` parameter will be `null`.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ✅|✅|
   */
  onMoveOver?: (event: Ui5CustomEvent<TableDomRef, TableMoveEventDetail>) => void;

  /**
   * Fired when a row action is clicked.
   *
   * **Note:** Available since [v2.6.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.6.0) of **@ui5/webcomponents**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onRowActionClick?: (event: Ui5CustomEvent<TableDomRef, TableRowActionClickEventDetail>) => void;

  /**
   * Fired when an interactive row is clicked.
   *
   * **Note:** This event is not fired if the `behavior` property of the selection component is set to `RowOnly`.
   * In that case, use the `change` event of the selection component instead.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onRowClick?: (event: Ui5CustomEvent<TableDomRef, TableRowClickEventDetail>) => void;
}

/**
 * The `Table` component provides a set of sophisticated features for displaying and dealing with vast amounts of data in a responsive manner.
 * To render the `Table`, you need to define the columns and rows. You can use the provided `TableHeaderRow` and `TableRow` components for this purpose.
 *
 * ### Features
 *
 * The `Table` can be enhanced in its functionalities by applying different features.
 * Features can be slotted into the `features` slot, to enable them in the component.
 * Features need to be imported separately, as they are not enabled by default.
 *
 * The following features are currently available:
 *
 * * [TableSelection](../TableSelection) - adds selection capabilities to the table
 * * [TableGrowing](../TableGrowing) - provides growing capabilities to load more data
 *
 * ### Keyboard Handling
 *
 * This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
 * In order to use this functionality, you need to import the following module:
 * `import "@ui5/webcomponents-base/dist/features/F6Navigation.js"`
 *
 * Furthermore, you can interact with `Table` via the following keys:
 *
 * If the focus is on a row, the following keyboard shortcuts are available:
 * * <kbd>Down</kbd> - Navigates down
 * * <kbd>Up</kbd> - Navigates up
 * * <kbd>Right</kbd> - Selects the first cell of the row
 * * <kbd>Space</kbd> - Toggles the selection of the row
 * * <kbd>Ctrl/Cmd + A</kbd> - In multi selection mode, toggles the selection of all rows
 * * <kbd>Home</kbd> - Navigates to the first row, if the focus is on the first row, navigates to the header row
 * * <kbd>End</kbd> - Navigates to the last row, if the focus is on the last row, navigates to the growing button
 * * <kbd>Page Up</kbd> - Navigates one page up, if the focus is on the first row, navigates to the header row
 * * <kbd>Page Down</kbd> - Navigates one page down, if the focus is on the last row, navigates to the growing button
 * * <kbd>F2</kbd> - Focuses the first tabbable element in the row
 * * <kbd>F7</kbd> - If focus position is remembered, moves focus to the corresponding focus position row, otherwise to the first tabbable element within the row
 * * <kbd>[Shift]Tab</kbd> - Move focus to the element in the tab chain outside the table
 *
 *
 * If the focus is on a cell, the following keyboard shortcuts are available:
 * * <kbd>Down</kbd> - Navigates down
 * * <kbd>Up</kbd> - Navigates up
 * * <kbd>Right</kbd> - Navigates right
 * * <kbd>Left</kbd> - Navigates left, if the focus is on the first cell of the row, the focus is moved to the row.
 * * <kbd>Home</kbd> - Navigates to the first cell of the current row, if the focus is on the first cell, navigates to the corresponding row
 * * <kbd>End</kbd> - Navigates to the last cell of the current row, if the focus is on the last cell, navigates to the corresponding row
 * * <kbd>Page Up</kbd> - Navigates one page up while keeping the focus in same column
 * * <kbd>Page Down</kbd> - Navigates one page down while keeping the focus in same column
 * * <kbd>F2</kbd> - Toggles the focus between the first tabbable cell content and the cell
 * * <kbd>Enter</kbd> - Focuses the first tabbable cell content
 * * <kbd>F7</kbd> - If the focus is on an interactive element inside a row, moves focus to the corresponding row and remembers the focus position of the element within the row
 * * <kbd>[Shift]Tab</kbd> - Move focus to the element in the tab chain outside the table
 *
 *
 * If the focus is on an interactive cell content, the following keyboard shortcuts are available:
 * * <kbd>Down</kbd> - Move the focus to the interactive element in the same column of the previous row, unless the focused element prevents the default
 * * <kbd>Up</kbd> - Move the focus to the interactive element in the same column of the next row, unless the focused element prevents the default
 * * <kbd>[Shift]Tab</kbd> - Move the focus to the element in the tab chain
 *
 * \
 * `import "@ui5/webcomponents/dist/TableRow.js";` (`TableRow`)\
 * `import "@ui5/webcomponents/dist/TableCell.js";` (`TableCell`)\
 * `import "@ui5/webcomponents/dist/TableHeaderRow.js";` (`TableHeaderRow`)\
 * `import "@ui5/webcomponents/dist/TableHeaderCell.js";` (`TableHeaderCell`)
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of __@ui5/webcomponents__.
 */
const Table = withWebComponent<TablePropTypes, TableDomRef>(
  'ui5-table',
  ['accessibleName', 'accessibleNameRef', 'loadingDelay', 'noDataText', 'overflowMode', 'rowActionCount'],
  ['loading'],
  ['features', 'headerRow', 'noData'],
  ['move-over', 'move', 'row-action-click', 'row-click'],
);

Table.displayName = 'Table';

export { Table };
export type { TableDomRef, TablePropTypes };
