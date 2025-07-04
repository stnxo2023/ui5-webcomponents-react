import type { Virtualizer } from '@tanstack/react-virtual';
import { clsx } from 'clsx';
import type { MutableRefObject, RefObject } from 'react';
import { useEffect, useMemo, useRef } from 'react';
import type {
  AnalyticalTablePropTypes,
  ClassNames,
  DivWithCustomScrollProp,
  ReactVirtualScrollToMethods,
  TableInstance,
  TriggerScrollState,
} from '../types/index.js';
import { RenderColumnTypes } from '../types/index.js';
import { getSubRowsByString } from '../util/index.js';
import { EmptyRow } from './EmptyRow.js';
import { RowSubComponent as SubComponent } from './RowSubComponent.js';

interface VirtualTableBodyProps {
  classes: ClassNames;
  prepareRow: TableInstance['prepareRow'];
  rows: TableInstance['rows'];
  isTreeTable?: AnalyticalTablePropTypes['isTreeTable'];
  internalRowHeight: number;
  alternateRowColor?: AnalyticalTablePropTypes['alternateRowColor'];
  visibleColumns: Record<string, unknown>[];
  renderRowSubComponent: AnalyticalTablePropTypes['renderRowSubComponent'];
  popInRowHeight: number;
  isRtl: boolean;
  markNavigatedRow?: AnalyticalTablePropTypes['markNavigatedRow'];
  alwaysShowSubComponent: boolean;
  dispatch?: (e: { type: string; payload?: Record<string, unknown> }) => void;
  subComponentsHeight?: Record<string, { rowId: string; subComponentHeight?: number }>;
  columnVirtualizer: Virtualizer<DivWithCustomScrollProp, Element>;
  manualGroupBy?: boolean;
  subRowsKey: string;
  scrollContainerRef?: MutableRefObject<HTMLDivElement>;
  triggerScroll?: TriggerScrollState;
  scrollToRef: RefObject<ReactVirtualScrollToMethods>;
  rowVirtualizer: Virtualizer<DivWithCustomScrollProp, HTMLElement>;
}

export const VirtualTableBody = (props: VirtualTableBodyProps) => {
  const {
    alternateRowColor,
    classes,
    prepareRow,
    rows,
    scrollToRef,
    isTreeTable,
    internalRowHeight,
    visibleColumns,
    renderRowSubComponent,
    popInRowHeight,
    markNavigatedRow,
    isRtl,
    alwaysShowSubComponent,
    dispatch,
    subComponentsHeight,
    columnVirtualizer,
    manualGroupBy,
    subRowsKey,
    scrollContainerRef,
    triggerScroll,
    rowVirtualizer,
  } = props;

  const rowHeight = popInRowHeight !== internalRowHeight ? popInRowHeight : internalRowHeight;
  const lastNonEmptyRow = useRef(null);

  scrollToRef.current = {
    ...scrollToRef.current,
    scrollToOffset: rowVirtualizer.scrollToOffset,
    scrollToIndex: rowVirtualizer.scrollToIndex,
  };

  useEffect(() => {
    if (triggerScroll && triggerScroll.direction === 'vertical') {
      if (triggerScroll.type === 'offset') {
        rowVirtualizer.scrollToOffset(...triggerScroll.args);
      } else {
        rowVirtualizer.scrollToIndex(...triggerScroll.args);
      }
    }
  }, [triggerScroll]);

  const popInColumn = useMemo(
    () =>
      visibleColumns.filter(
        (item) =>
          item.id !== '__ui5wcr__internal_highlight_column' &&
          item.id !== '__ui5wcr__internal_selection_column' &&
          item.id !== '__ui5wcr__internal_navigation_column',
      )[0],
    [visibleColumns],
  );
  return (
    <div
      ref={scrollContainerRef}
      data-component-name="AnalyticalTableBodyScrollableContainer"
      style={{
        position: 'relative',
        height: `${rowVirtualizer.getTotalSize()}px`,
        width: `${columnVirtualizer.getTotalSize()}px`,
      }}
    >
      {rowVirtualizer.getVirtualItems().map((virtualRow, visibleRowIndex) => {
        const row = rows[virtualRow.index];
        const rowIndexWithHeader = virtualRow.index + 1;
        if (!row || row.groupByVal === 'undefined') {
          const alternate = alternateRowColor && virtualRow.index % 2 !== 0;
          if (!lastNonEmptyRow.current?.cells) {
            return (
              <EmptyRow
                key={`empty_row_${virtualRow.index}`}
                virtualRow={virtualRow}
                className={clsx(classes.tr, alternate && classes.alternateRowColor)}
              />
            );
          }
          const cells = lastNonEmptyRow.current.cells;
          return (
            <EmptyRow
              key={`empty_row_${virtualRow.index}`}
              virtualRow={virtualRow}
              className={clsx(classes.tr, alternate && classes.alternateRowColor)}
            >
              {columnVirtualizer.getVirtualItems().map((item) => {
                const cell = cells[item.index];
                const cellProps = cell.getCellProps();
                const {
                  'aria-colindex': _0,
                  'aria-selected': _1,
                  'aria-label': _2,
                  tabIndex: _3,
                  ...emptyRowCellProps
                } = cellProps;
                return (
                  <div
                    {...emptyRowCellProps}
                    key={`${visibleRowIndex}-${emptyRowCellProps.key}`}
                    data-empty-row-cell="true"
                    tabIndex={-1}
                    aria-hidden="true"
                    style={{ ...emptyRowCellProps.style, cursor: 'unset', width: item.size }}
                  />
                );
              })}
            </EmptyRow>
          );
        } else {
          lastNonEmptyRow.current = row;
        }
        prepareRow(row);
        const { key, ...rowProps } = row.getRowProps({
          'aria-rowindex': virtualRow.index + 1,
          'data-virtual-row-index': virtualRow.index,
        });
        const isNavigatedCell = typeof markNavigatedRow === 'function' ? markNavigatedRow(row) : false;
        const RowSubComponent = typeof renderRowSubComponent === 'function' ? renderRowSubComponent(row) : undefined;

        let updatedHeight = rowHeight;
        if (
          renderRowSubComponent &&
          (rows[virtualRow.index]?.isExpanded || alwaysShowSubComponent) &&
          subComponentsHeight?.[virtualRow.index]?.rowId === rows[virtualRow.index]?.id
        ) {
          updatedHeight += subComponentsHeight?.[virtualRow.index]?.subComponentHeight ?? 0;
        }

        const measureRef =
          isTreeTable && renderRowSubComponent && (row.isExpanded || alwaysShowSubComponent)
            ? (node) => {
                rowVirtualizer.measureElement(node);
              }
            : rowVirtualizer.measureElement;

        return (
          <div
            key={key}
            {...rowProps}
            ref={measureRef}
            style={{
              ...(rowProps.style ?? {}),
              transform: `translateY(${virtualRow.start}px)`,
              position: 'absolute',
              boxSizing: 'border-box',
              height: `${updatedHeight}px`,
            }}
          >
            {typeof renderRowSubComponent === 'function' && (
              <SubComponent
                subComponentsHeight={subComponentsHeight}
                virtualRow={virtualRow}
                dispatch={dispatch}
                row={row}
                rowHeight={rowHeight}
                rows={rows}
                alwaysShowSubComponent={alwaysShowSubComponent}
                rowIndex={visibleRowIndex + 1}
                classNames={classes}
                renderSubComp={RowSubComponent && (row.isExpanded || alwaysShowSubComponent)}
              >
                {RowSubComponent}
              </SubComponent>
            )}
            {columnVirtualizer.getVirtualItems().map((virtualColumn, visibleColumnIndex) => {
              const cell = row.cells[virtualColumn.index];
              const directionStyles = isRtl
                ? {
                    transform: `translateX(-${virtualColumn.start}px)`,
                    insertInlineStart: 0,
                  }
                : { transform: `translateX(${virtualColumn.start}px)`, insertInlineStart: 0 };
              if (!cell) {
                return null;
              }
              const { key, ...cellProps } = cell.getCellProps();
              const allCellProps = {
                ...cellProps,
                ['data-visible-column-index']: visibleColumnIndex,
                ['data-column-index']: virtualColumn.index,
                ['data-visible-row-index']: visibleRowIndex + 1,
                ['data-row-index']: rowIndexWithHeader,
                style: {
                  ...cellProps.style,
                  position: 'absolute',
                  width: `${virtualColumn.size}px`,
                  top: 0,
                  height: `${rowHeight}px`,
                  ...directionStyles,
                },
              };
              let contentToRender: RenderColumnTypes;
              if (
                cell.column.id === '__ui5wcr__internal_highlight_column' ||
                cell.column.id === '__ui5wcr__internal_selection_column' ||
                cell.column.id === '__ui5wcr__internal_navigation_column'
              ) {
                contentToRender = RenderColumnTypes.Cell;
              } else if (isTreeTable || (!alwaysShowSubComponent && RowSubComponent)) {
                contentToRender = RenderColumnTypes.Expandable;
              } else if (
                cell.isGrouped ||
                (manualGroupBy &&
                  cell.column.isGrouped &&
                  getSubRowsByString(subRowsKey, row.original) != null &&
                  cell.value !== undefined)
              ) {
                contentToRender = RenderColumnTypes.Grouped;
              } else if (cell.isAggregated) {
                contentToRender = RenderColumnTypes.Aggregated;
              } else if (cell.isPlaceholder) {
                contentToRender = RenderColumnTypes.RepeatedValue;
              } else {
                contentToRender = RenderColumnTypes.Cell;
              }

              return (
                <div
                  key={key}
                  {...allCellProps}
                  data-selection-cell={cell.column.id === '__ui5wcr__internal_selection_column'}
                >
                  {popInRowHeight !== internalRowHeight && popInColumn.id === cell.column.id
                    ? cell.render(RenderColumnTypes.PopIn, { contentToRender, internalRowHeight })
                    : cell.render(contentToRender, isNavigatedCell === true ? { isNavigatedCell } : {})}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
