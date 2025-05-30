'use client';

import '@ui5/webcomponents/dist/TableSelection.js';
import type TableSelectionMode from '@ui5/webcomponents/dist/types/TableSelectionMode.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface TableSelectionAttributes {
  /**
   * Defines the selection mode.
   * @default "Multiple"
   */
  mode?: TableSelectionMode | keyof typeof TableSelectionMode;

  /**
   * Defines the selected rows separated by a space.
   */
  selected?: string;
}

interface TableSelectionDomRef extends Required<TableSelectionAttributes>, Ui5DomRef {}

interface TableSelectionPropTypes
  extends TableSelectionAttributes,
    Omit<CommonProps, keyof TableSelectionAttributes | 'onChange'> {
  /**
   * Fired when the selection is changed by user interaction.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onChange?: (event: Ui5CustomEvent<TableSelectionDomRef>) => void;
}

/**
 * The `TableSelection` component is used inside the `Table` to add key-based selection capabilities to the `Table`.
 *
 * The component offers three selection modes:
 * * Single - select a single row.
 * * Multiple - select multiple rows.
 * * None - no selection active.
 *
 * As the selection is key-based, `TableRow` components need to define a unique `row-key` property.
 *
 * ### Usage
 *
 * The `TableSelection` component is only used inside the `Table` component as a feature.
 * It has to be slotted inside the `Table` in the `features` slot.
 * The component is not intended to be used as a standalone component.
 *
 * ```html
 * <Table>
 * 	<TableSelection mode="Multiple" slot="features"></TableSelection>
 * </Table>
 * ```
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of __@ui5/webcomponents__.
 * @experimental This web component is available since 2.0 with an experimental flag and its API and behavior are subject to change.
 * @deprecated This component is deprecated and will be removed in future releases. Use the `TableSelectionSingle` or `TableSelectionMulti` components instead.
 */
const TableSelection = withWebComponent<TableSelectionPropTypes, TableSelectionDomRef>(
  'ui5-table-selection',
  ['mode', 'selected'],
  [],
  [],
  ['change'],
);

TableSelection.displayName = 'TableSelection';

export { TableSelection };
export type { TableSelectionDomRef, TableSelectionPropTypes };
