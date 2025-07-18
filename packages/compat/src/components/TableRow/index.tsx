'use client';

import '@ui5/webcomponents-compat/dist/TableRow.js';
import type TableRowType from '@ui5/webcomponents-compat/dist/types/TableRowType.js';
import { getCompatCustomElementsScopingSuffix } from '@ui5/webcomponents-compat/dist/utils/CompatCustomElementsScope.js';
import type { CommonProps, Ui5DomRef } from '@ui5/webcomponents-react-base';
import { withWebComponent } from '@ui5/webcomponents-react-base/dist/wrapper/withWebComponent.js';
import type { ReactNode } from 'react';

const compatScopingSuffix = getCompatCustomElementsScopingSuffix();
const tagSuffix = compatScopingSuffix ? `-${compatScopingSuffix}` : '';

interface TableRowAttributes {
  /**
   * Indicates if the table row is navigated.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-compat**.
   * @default false
   */
  navigated?: boolean;

  /**
   * Defines the row's selected state.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-compat**.
   * @default false
   */
  selected?: boolean;

  /**
   * Defines the visual indication and behavior of the component.
   *
   * **Note:** When set to `Active`, the item will provide visual response upon press,
   * while with type `Inactive`-will not.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-compat**.
   * @default "Inactive"
   */
  type?: TableRowType | keyof typeof TableRowType;
}

interface TableRowDomRef extends Required<TableRowAttributes>, Ui5DomRef {}

interface TableRowPropTypes extends TableRowAttributes, Omit<CommonProps, keyof TableRowAttributes | 'children'> {
  /**
   * Defines the cells of the component.
   *
   * **Note:** Use `TableCell` for the intended design.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `TableRow` component represents a row in the `Table`.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 * @deprecated Deprecated as of version 2.12.0, use `@ui5/webcomponents/dist/TableRow.js` instead.
 */
const TableRow = withWebComponent<TableRowPropTypes, TableRowDomRef>(
  `ui5-table-row${tagSuffix}`,
  ['type'],
  ['navigated', 'selected'],
  [],
  [],
);

TableRow.displayName = 'TableRow';

export { TableRow };
export type { TableRowDomRef, TableRowPropTypes };
