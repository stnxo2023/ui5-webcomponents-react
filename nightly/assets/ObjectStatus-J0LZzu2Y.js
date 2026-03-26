import{j as t}from"./iframe-CTCL6F1r.js";import{useMDXComponents as a}from"./index-COtiMl_W.js";import{M as c,C as s}from"./blocks-BWrgTR_X.js";import"./Tag-BL5Qfzs7.js";import"./index-DN-3xlKC.js";import{C as l}from"./ControlsWithNote-BbSbV3TH.js";import{D as m}from"./DocsHeader-DnQu7owR.js";import{F as p}from"./Footer-DeTYP8-R.js";import"./CommandsAndQueries-BsPL36Z9.js";import"./PageNotFound-D_xGTPNz.js";import{C as n,D as r,W as d,a as j,b,I as u,c as h}from"./ObjectStatus.stories-6q78_j9o.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CiEkIJMA.js";import"./sys-enter-2-Cm5ZOXv2.js";import"./alert-CwDd6vfH.js";import"./index-9E9I64Wt.js";import"./index-BzwM6I24.js";import"./Link-A2IdBIvD.js";import"./copy-DGL6Pu-r.js";import"./copy-DEpsQlxb.js";import"./GitHub-Mark-yKvhTSPN.js";import"./TableOfContent-C2y7XBBL.js";import"./index-D_vdDgjG.js";import"./index-DWmGRAcl.js";import"./index-CeDd6fzK.js";import"./index-Dj3jefRS.js";import"./index-ByW0PFuk.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bj5cLhE3.js";import"./addCustomCSSWithScoping-Bp0u_2pD.js";import"./Illustrations-GQ99oYm_.js";import"./i18n-defaults-CFWtSmu6.js";import"./ThemingParameters-BvhwmbYD.js";import"./index-CFfYMp7H.js";import"./index-BksCzbKY.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CLAP-CGA.js";import"./group-2-DFK22c05.js";import"./sort-descending-CAFmujKH.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CcZpUEcN.js";import"./Input-CskqmG-U.js";import"./ResponsivePopoverCommon.css-DqU8u_Xb.js";import"./ValueStateMessage.css-Dz2ZBT4Q.js";import"./Suggestions.css-pJEqYvzu.js";import"./utils-CrwAwKdr.js";import"./index-B0bfBcoV.js";import"./index-RisHXePe.js";import"./index-zpAMMNek.js";import"./ListItemStandard-DzDcm21T.js";import"./navigation-down-arrow-wVevGwwX.js";import"./navigation-right-arrow-0lpCtsn6.js";import"./navigation-right-arrow-DF7UFLN2.js";import"./useCurrentTheme-Bmu75wPA.js";import"./index-pVHPziZI.js";import"./InvisibleMessage-0vTx7A5o.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CVAaEzsl.js";import"./index-CuWozfqv.js";import"./query-CzSBusdE.js";import"./overflow-BoiNtI0i.js";import"./index-im3CYt6f.js";import"./TableSelectionBase-DMpFtIPk.js";import"./index-Co_AA59G.js";function i(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...a(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(c,{of:n}),`
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
