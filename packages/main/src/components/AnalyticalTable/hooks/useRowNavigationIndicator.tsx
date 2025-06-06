import type { ReactTableHooks, TableInstance } from '../types/index.js';

const baseStyles = {
  width: '100%',
  height: '100%',
};

/*
 * COMPONENTS
 */
const Header = () => <div style={{ width: '6px' }} />;

const Cell = (instance) => {
  const { isNavigatedCell, webComponentsReactProperties } = instance;
  if (isNavigatedCell) {
    return (
      <div
        style={baseStyles}
        className={webComponentsReactProperties.classes.navigation}
        data-component-name="AnalyticalTableNavigatedCell"
      />
    );
  }
  return <div style={baseStyles} />;
};

/*
 * TABLE HOOKS
 */
const columnsDeps = (deps, { instance: { webComponentsReactProperties } }: { instance: TableInstance }) => {
  return [...deps, webComponentsReactProperties.withNavigationHighlight];
};
const visibleColumnsDeps = (deps, { instance }: { instance: TableInstance }) => [
  ...deps,
  instance.webComponentsReactProperties.withNavigationHighlight,
];
const visibleColumns = (
  currentVisibleColumns,
  { instance: { webComponentsReactProperties } }: { instance: TableInstance },
) => {
  if (!webComponentsReactProperties.withNavigationHighlight) {
    return currentVisibleColumns.filter(({ id }) => id !== '__ui5wcr__internal_navigation_column');
  }

  const highlightColumn = currentVisibleColumns.find(({ id }) => id === '__ui5wcr__internal_navigation_column');
  return [...currentVisibleColumns.filter(({ id }) => id !== '__ui5wcr__internal_navigation_column'), highlightColumn];
};

const columns = (currentColumns, { instance }: { instance: TableInstance }) => {
  const { withNavigationHighlight } = instance.webComponentsReactProperties;

  if (!withNavigationHighlight) {
    return currentColumns;
  }
  return [
    ...currentColumns,
    {
      id: '__ui5wcr__internal_navigation_column',
      disableFilters: true,
      disableSortBy: true,
      disableGroupBy: true,
      disableResizing: true,
      disableDragAndDrop: true,
      width: 6,
      minWidth: 6,
      maxWidth: 6,
      Header,
      Cell,
    },
  ];
};

export const useRowNavigationIndicators = (hooks: ReactTableHooks) => {
  hooks.columns.push(columns);
  hooks.columnsDeps.push(columnsDeps);
  hooks.visibleColumnsDeps.push(visibleColumnsDeps);
  hooks.visibleColumns.push(visibleColumns);
};
