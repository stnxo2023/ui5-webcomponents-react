import{j as t}from"./iframe-BtOtRMtR.js";import{useMDXComponents as a}from"./index-CgtvsECt.js";import{M as c,C as s}from"./blocks-D9wmcLvH.js";import"./Tag-C9nMOu5c.js";import"./index-Cb_okFKb.js";import{C as l}from"./ControlsWithNote-ylJnyVwL.js";import{D as m}from"./DocsHeader-BlRAfoKH.js";import{F as p}from"./CommandsAndQueries-CKs7dFOK.js";import{C as n,D as r,W as d,a as j,b,I as u,c as h}from"./ObjectStatus.stories-BdtLcade.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D5w9Hrcs.js";import"./sys-enter-2-Bq4TRZEz.js";import"./alert-CYL_IdM5.js";import"./index-B8f2IgEG.js";import"./index-CSfaSQyt.js";import"./Link-BYt0ZGVT.js";import"./copy-DhM4rUDn.js";import"./copy-CGNUo2FO.js";import"./GitHub-Mark-ChiDCgEd.js";import"./TableOfContent-BCPzy_yC.js";import"./index-DyCpVDUu.js";import"./index-BG_zbJpP.js";import"./index-BRaE6xYn.js";import"./index-Ch2focQy.js";import"./index-Ddk7eeGJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-4u4TRFh7.js";import"./addCustomCSSWithScoping-Ji9yZ6HK.js";import"./ThemingParameters-pyhX3s39.js";import"./index-DO0bWOhc.js";import"./index-Db2BTFt5.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DamfrtCC.js";import"./group-2-DpZVik8-.js";import"./sort-descending-B-A3hXvE.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B1qY8nay.js";import"./Input-DW6Mcq6Q.js";import"./ResponsivePopoverCommon.css-B0MfPGYJ.js";import"./ValueStateMessage.css-Cntln-gq.js";import"./Suggestions.css-C1P2f68k.js";import"./utils-CqrUR1Jn.js";import"./index-jphnT_hb.js";import"./index-C84K25j6.js";import"./index-DgTNmU-2.js";import"./ListItemStandard-DSZwl3pY.js";import"./navigation-down-arrow-BChKVsM3.js";import"./navigation-right-arrow-Fi9U-iyQ.js";import"./navigation-right-arrow-Du-S1bwS.js";import"./useCurrentTheme-BRCDCnqM.js";import"./index-c-S2g_Xv.js";import"./InvisibleMessage-CJx3E7ve.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D6S1xN6P.js";import"./index-CFvmY4a2.js";import"./query-CzSBusdE.js";import"./overflow-BrtMIjwT.js";import"./index-DRWMO8eM.js";import"./TableSelectionBase-DgeDn7To.js";import"./index-CQANsFRb.js";function i(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...a(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(c,{of:n}),`
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
