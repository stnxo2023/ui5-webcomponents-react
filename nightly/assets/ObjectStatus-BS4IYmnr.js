import{j as t}from"./iframe-bao9qRDH.js";import{useMDXComponents as a}from"./index-D58rFl3P.js";import{M as c,C as s}from"./blocks-uUz_WETG.js";import"./Tag-DnPLRNDs.js";import"./index-B3NnTsyp.js";import{C as l}from"./ControlsWithNote-B5-P5vcT.js";import{D as m}from"./DocsHeader-FxRbQzqR.js";import{F as p}from"./Footer-WVPZdxr3.js";import"./CommandsAndQueries-Bg8yb33a.js";import"./PageNotFound-sLpD2w2i.js";import{C as n,D as r,W as d,a as j,b,I as u,c as h}from"./ObjectStatus.stories-B34Qg8u1.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DbPZ0LCP.js";import"./sys-enter-2-Ch2YqKTp.js";import"./alert-CeM8CijD.js";import"./index-CwfO5OAT.js";import"./index-DPEMBgxp.js";import"./Link-ZWtIcHaY.js";import"./copy-DUEvZFUb.js";import"./copy-jfQcw6pd.js";import"./GitHub-Mark-tOKz_pt5.js";import"./TableOfContent-CharJQun.js";import"./index-D32QYjx2.js";import"./index-5JMcfQSp.js";import"./index-BNO-qx4N.js";import"./index-Dl2g3tcZ.js";import"./index-DOBS9bga.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-L1xKvRVU.js";import"./addCustomCSSWithScoping-D0v__xyi.js";import"./Illustrations-BL_lLuOy.js";import"./i18n-defaults-CFWtSmu6.js";import"./ThemingParameters-pyhX3s39.js";import"./index-CLyNAv9_.js";import"./index-C8x-DaOR.js";import"./IconDesign-DXd8PPVF.js";import"./filter-vG2O0XVd.js";import"./group-2-Cn2rIsnU.js";import"./sort-descending-Dbm-NR0R.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BBPmP6UZ.js";import"./Input-B4vfEymz.js";import"./ResponsivePopoverCommon.css-boUjI9kL.js";import"./ValueStateMessage.css-Betpi1RU.js";import"./Suggestions.css-Czb7XS0g.js";import"./utils-CPXWtj8G.js";import"./index--h_XAmYP.js";import"./index-BLVSX5Bx.js";import"./index-1cD6iEHz.js";import"./ListItemStandard-_fmCfmaL.js";import"./navigation-down-arrow-DkqjrQmu.js";import"./navigation-right-arrow-DBBJoASN.js";import"./navigation-right-arrow-l91271wa.js";import"./useCurrentTheme-Cu36YjS3.js";import"./index-ReeUPo0U.js";import"./InvisibleMessage-lmhcQGzA.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BuL1NiTR.js";import"./index-Dvvorzrk.js";import"./query-CzSBusdE.js";import"./overflow-Bqafv3t-.js";import"./index-BlRyG4e5.js";import"./TableSelectionBase-Cm40Q25d.js";import"./index-CnrqoCE-.js";function i(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...a(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(c,{of:n}),`
`,t.jsx(m,{of:n}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"example",children:"Example"}),`
`,t.jsx(s,{of:r}),`
`,t.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(l,{of:r}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h1,{id:"more-examples",children:"More Examples"}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"objectstatus-with-default-icons",children:"ObjectStatus With Default Icons"}),`
`,t.jsx(s,{of:d}),`
`,t.jsx(e.h2,{id:"objectstatus-with-custom-icon",children:"ObjectStatus With Custom Icon"}),`
`,t.jsx(s,{of:j}),`
`,t.jsx(e.h2,{id:"objectstatus-with-icon-only",children:"ObjectStatus With Icon Only"}),`
`,t.jsx(s,{of:b}),`
`,t.jsx(e.h2,{id:"all-objectstatus-states",children:"All ObjectStatus States"}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"Note:"})," Only the ",t.jsx(e.code,{children:"inverted"})," ",t.jsx(e.code,{children:"ObjectStatus"})," supports ",t.jsx(e.code,{children:"IndicationColor"}),"s 11-20. For non-inverted ",t.jsx(e.code,{children:"ObjectStatus"}),", these colors default to the ",t.jsx(e.code,{children:'"None"'})," ",t.jsx(e.code,{children:"state"})," color and should ",t.jsx(e.strong,{children:"not"})," be used."]}),`
`,t.jsx(s,{of:u}),`
`,t.jsx(e.h2,{id:"objectstatus-in-interactive-lists-or-tables",children:"ObjectStatus in Interactive Lists or Tables"}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"Applicable since v2.17.0"})}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:"AnalyticalTable"})," component includes active state styling for ",t.jsx(e.code,{children:"ObjectStatus"}),` out of the box, as it is developed within project and can be styled accordingly.
For lists or tables from `,t.jsx(e.code,{children:"@ui5/webcomponents(-fiori/-ai/-compat)"})," (e.g., ",t.jsx(e.code,{children:"List"}),", ",t.jsx(e.code,{children:"Table"}),"), custom CSS is required to override the text and icon ",t.jsx(e.code,{children:"color"})," and ",t.jsx(e.code,{children:"text-shadow"})," to ensure proper styling when rows are in active state:"]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-css",children:`.object-status {
  --ui5wcr-object-status-icon-color: var(--sapList_Active_TextColor);
  color: var(--sapList_Active_TextColor);
  text-shadow: none;
}
`})}),`
`,t.jsx(s,{of:h}),`
`,t.jsxs("details",{children:[t.jsx("summary",{children:"Show Static Code"}),t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-css",children:`.interactive-table-row:active .object-status,
.interactive-li[active] .object-status {
  --ui5wcr-object-status-icon-color: var(--sapList_Active_TextColor);
  color: var(--sapList_Active_TextColor);
  text-shadow: none;
}
`})}),t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`function ObjectStatusInListOrTable(objectStatusProps: Omit<ObjectStatusPropTypes, 'inverted'>) {
  const atCols: AnalyticalTableColumnDefinition[] = useMemo(
    () => [
      {
        accessor: 'os1',
        Header: 'ObjectStatus (controllable)',
        Cell: () => <ObjectStatus {...objectStatusProps} />,
      },
      {
        accessor: 'os2',
        Header: 'ObjectStatus ("Negative")',
        Cell: () => <ObjectStatus {...objectStatusProps} state={'Negative'} />,
      },
    ],
    [objectStatusProps],
  );
  return (
    <>
      Table
      <Table
        headerRow={
          <TableHeaderRow>
            <TableHeaderCell>ObjectStatus (controllable)</TableHeaderCell>
            <TableHeaderCell>ObjectStatus (&#34;Negative&#34;)</TableHeaderCell>
          </TableHeaderRow>
        }
        features={<TableSelectionSingle behavior={'RowOnly'} />}
      >
        <TableRow rowKey={'0'} className={'interactive-table-row'}>
          <TableCell>
            <ObjectStatus {...objectStatusProps} className={'object-status'} />
          </TableCell>
          <TableCell>
            <ObjectStatus {...objectStatusProps} className={'object-status'} state={'Negative'} />
          </TableCell>
        </TableRow>
      </Table>
      <hr />
      List
      <List selectionMode="Single">
        <ListItemCustom className={'interactive-li'}>
          <ObjectStatus {...objectStatusProps} className={'object-status'} />
        </ListItemCustom>
      </List>
      <hr />
      AnalyticalTable
      <AnalyticalTable
        data={atData}
        columns={atCols}
        minRows={1}
        selectionMode={'Single'}
        selectionBehavior={'RowOnly'}
      />
    </>
  );
}
`})})]}),`
`,t.jsx("br",{}),`
`,t.jsx("br",{}),`
`,t.jsx(p,{})]})}function Nt(o={}){const{wrapper:e}={...a(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(i,{...o})}):i(o)}export{Nt as default};
