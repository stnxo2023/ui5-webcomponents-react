import{j as t}from"./iframe-D_oMot10.js";import{useMDXComponents as a}from"./index-Cg6HnkxT.js";import{M as c,C as s}from"./blocks-2cuCWctq.js";import"./Tag-R7_VB2zh.js";import"./index-DYuRbnft.js";import{C as l}from"./ControlsWithNote-DXnp8onQ.js";import{D as m}from"./DocsHeader-f9VHbHEE.js";import{F as p}from"./CommandsAndQueries-DPkePXTz.js";import{C as n,D as r,W as d,a as j,b,I as u,c as h}from"./ObjectStatus.stories-BfBrP90S.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D9-yMhmx.js";import"./sys-enter-2-B1tI1-EQ.js";import"./alert-C600_lKj.js";import"./index-s1VP44pI.js";import"./index-DO_1WCge.js";import"./Link-9JdM6Hjv.js";import"./copy-C7-LK9Y4.js";import"./copy-D4R1-NDI.js";import"./GitHub-Mark-os5OPWIB.js";import"./TableOfContent-BFzbgAl_.js";import"./index-Ds5vSSWx.js";import"./index-3r4NxXtD.js";import"./index-DnX1qu0M.js";import"./index-DRuRCvkV.js";import"./index-1pxNHpjB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-izT7sph5.js";import"./addCustomCSSWithScoping-BPH8FgqV.js";import"./ThemingParameters-pyhX3s39.js";import"./index-Du_ko5GP.js";import"./index-DyWV_0XY.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CXVgG9df.js";import"./group-2-8zib2_rz.js";import"./sort-descending-BvWPtphW.js";import"./stopPropagation-CsBxLuUS.js";import"./index-tTOrxfXr.js";import"./Input-C8nwJpL1.js";import"./ResponsivePopoverCommon.css-AxdwvBmm.js";import"./ValueStateMessage.css-BD-bXrba.js";import"./Suggestions.css-Cabt6nOq.js";import"./utils-CrcpPJy1.js";import"./index-VkA4_y2n.js";import"./index-63bBxxuU.js";import"./index-6bx9Fpoe.js";import"./ListItemStandard-BdOqn1aP.js";import"./navigation-down-arrow-BD0SNbXx.js";import"./navigation-right-arrow-C-j4QHZm.js";import"./navigation-right-arrow-DXyKbQJ-.js";import"./useCurrentTheme-B6V2tZjd.js";import"./index-B0xbs9YS.js";import"./InvisibleMessage-DDLiWcDo.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DpJLc3e9.js";import"./index-DM4s58kB.js";import"./query-CzSBusdE.js";import"./overflow-CXLV3MGI.js";import"./index-BGno3kGd.js";import"./TableSelectionBase-CSIemSHV.js";import"./index-nl8CIEtb.js";function i(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...a(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(c,{of:n}),`
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
