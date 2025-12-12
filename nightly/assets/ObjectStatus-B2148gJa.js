import{j as t}from"./iframe-5Ai_0qn6.js";import{useMDXComponents as a}from"./index-B7f66Dmz.js";import{M as c,C as s}from"./blocks-B56i3DPI.js";import"./Tag-COMV1q97.js";import"./index-DmI0q2i9.js";import{C as l}from"./ControlsWithNote-Dmf2RZYl.js";import{D as m}from"./DocsHeader-BNDJcX-j.js";import{F as p}from"./CommandsAndQueries-JQTwJq8J.js";import{C as n,D as r,W as d,a as j,b,I as u,c as h}from"./ObjectStatus.stories-Ba7ZI0MK.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D04M7OHu.js";import"./sys-enter-2-1BgXqzpT.js";import"./alert-BhFUrxxf.js";import"./index-BkdUYSuU.js";import"./index-BRDhzPf9.js";import"./Link-D--4KGaX.js";import"./copy-B5LlkFWV.js";import"./copy-DNLRE2WL.js";import"./GitHub-Mark-CmaLVeo_.js";import"./TableOfContent-BjCvBF3F.js";import"./index-Ce1oa-YM.js";import"./index-q1btkUh6.js";import"./index-B-uO6_4g.js";import"./index-D661wfa7.js";import"./index-Bq31yNzK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-COAGvdy_.js";import"./addCustomCSSWithScoping-DYNqCkls.js";import"./ThemingParameters-pyhX3s39.js";import"./index-O_J6wUes.js";import"./index-Cyt6o_O8.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BpA9S_eu.js";import"./group-2-DpjVfqgj.js";import"./sort-descending-BGJJks9P.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bx98osqc.js";import"./Input-irwstt8P.js";import"./ResponsivePopoverCommon.css-C3FRXGqL.js";import"./ValueStateMessage.css-CE7fKOnd.js";import"./Suggestions.css-Dq5Dns8R.js";import"./utils-BOfVxA4M.js";import"./index-Cb8kvc5z.js";import"./index-S4uAEFIo.js";import"./index-DwAuXlyS.js";import"./ListItemStandard-BzBCEa9G.js";import"./navigation-down-arrow-DfJbyOqR.js";import"./navigation-right-arrow-B-Vhmt5L.js";import"./navigation-right-arrow-D1zxr9Vh.js";import"./useCurrentTheme-DiluXBTF.js";import"./index-CcKvpDiG.js";import"./InvisibleMessage-CmGdQZT2.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B0oo9ftu.js";import"./index-CTCiegXE.js";import"./query-CzSBusdE.js";import"./overflow-BSsr1A2Q.js";import"./index-DkZH6d58.js";import"./TableSelectionBase-C75NJOLo.js";import"./index-CoK8JjT_.js";function i(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...a(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(c,{of:n}),`
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
`,t.jsx(p,{})]})}function Ot(o={}){const{wrapper:e}={...a(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(i,{...o})}):i(o)}export{Ot as default};
