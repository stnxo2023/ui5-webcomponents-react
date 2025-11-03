import{j as e}from"./iframe-BAeEsjGg.js";import{useMDXComponents as i}from"./index-Bq0E1dsP.js";import{I as a,F as m}from"./CommandsAndQueries-BmSS4dsr.js";import{M as s,C as p}from"./blocks-BgvPFJNP.js";import"./Tag-C0AbLWiC.js";import"./index-CofNVADY.js";import{C as l}from"./ControlsWithNote-C_MVHisI.js";import"./copy-AboRjUVj.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CFI9VGkd.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BbgOEhgO.js";import"./index-CdyvC-L0.js";import"./index-D8OEyr8Q.js";import"./Link-C-dbgRnK.js";import"./index-B1MvTI4o.js";import"./index-Bh0rKKOG.js";import"./index-DTbJ3L--.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-j4KshgYu.js";import"./addCustomCSSWithScoping-dmB8rtW3.js";import"./index-BcBOqS22.js";import"./information-DWcYA3Ge.js";import"./sys-enter-2-CQUiiR68.js";import"./alert-DfrSfG2k.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C01vq_tG.js";import"./delete-B-vJcZEa.js";import"./settings-C9s2yLAD.js";import"./NoData-C_OT3nkl.js";import"./IllustratedMessage-Bw6CCqa1.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-CeOc3m_6.js";import"./index-BtfUZD9l.js";import"./index-bKb7cC61.js";import"./slim-arrow-down-plIUNiIv.js";import"./Input-BqTefG9q.js";import"./ResponsivePopoverCommon.css-CaExEbcN.js";import"./ValueStateMessage.css-j0uXhKgp.js";import"./Suggestions.css-LZu9AJzQ.js";import"./ListBoxItemGroupTemplate-CA08nrMV.js";import"./ComboBoxItemGroup-DSvJ8fHP.js";import"./ListItemBaseTemplate-PmrEhlyw.js";import"./Token-Dae4rL70.js";import"./ScrollEnablement-B_VGa692.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DkifgMKf.js";import"./ToggleButton-7zmtTUNl.js";import"./SuggestionItem-DyFoeHZd.js";import"./index-CIveRvMm.js";import"./Option-BddoQSs-.js";import"./index-C7Cx90Bv.js";import"./SegmentedButton-DFR9vAuR.js";import"./index-BeVxZxme.js";import"./Select-D8r9sg-T.js";import"./InvisibleMessage-BamEjZig.js";import"./slim-arrow-down-DPB1_EKt.js";import"./index-BK8lvVbF.js";import"./index-COe7AG8n.js";import"./index-BEoChkv9.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B3GX0NY1.js";import"./group-2-Ck2TlhgN.js";import"./sort-descending-Bcg2xsEH.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DnyBfK-i.js";import"./utils-C1cOCLNW.js";import"./index-Co1haORi.js";import"./index-Bn4aUwEb.js";import"./index-CJ_qaT_q.js";import"./navigation-down-arrow-Ch-dz918.js";import"./navigation-right-arrow-nGujzQ0V.js";import"./navigation-right-arrow-DJO4C4Vi.js";import"./useCurrentTheme-CgyKYq3h.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BS5kb7Yk.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CkDYu-F2.js";import"./paper-plane-DNrev12r.js";import"./index-qCY9xvvQ.js";import"./less-CUB-bYbC.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
`,e.jsx(t.h1,{id:"analyticaltable-plugin-useorderedmultisort",children:"AnalyticalTable Plugin: useOrderedMultiSort"}),`
`,e.jsx(a,{moduleName:"useOrderedMultiSort",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,e.jsxs(t.p,{children:["With the ",e.jsx(t.code,{children:"useOrderedMultiSort"})," it's possible to define the sorting priority if multi-sort is enabled for the respective columns (",e.jsx(t.code,{children:"enableMultiSort: true"}),")."]}),`
`,e.jsx(t.p,{children:"It receives one parameter that defines the sorting priority by the column id."}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"orderedIds: string[]"}),": Defines the sort priority when sorting by multiple columns, starting with the first column ID."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"})," Column IDs that are not found in the array use the default priority, so the first sorted column has a higher priority than the next sorted column."]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(p,{sourceState:"none",of:o}),`
`,e.jsx(t.h3,{id:"current-parameter",children:"Current Parameter"}),`
`,e.jsx(l,{of:o,hideHTMLPropsNote:!0,include:["orderedIds"]}),`
`,e.jsx(t.h3,{id:"code",children:"Code"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const columns = [
  {
    Header: 'Name',
    accessor: 'name',
    enableMultiSort: true
  },
  {
    Header: 'Age',
    accessor: 'age',
    enableMultiSort: true
  },
  {
    Header: 'Name 2',
    accessor: 'name2',
    enableMultiSort: true
  },
  {
    Header: 'Age 2',
    accessor: 'age2',
    enableMultiSort: true
  }
];
const data = [
  { name: 'Peter', age: 40, name2: 'Alissa', age2: 18 },
  { name: 'Kristen', age: 40, name2: 'Randolph', age2: 21 },
  { name: 'Peter', age: 30, name2: 'Rose', age2: 90 },
  { name: 'Peter', age: 70, name2: 'Rose', age2: 22 },
  { name: 'Kristen', age: 60, name2: 'Willis', age2: 80 },
  { name: 'Kristen', age: 20, name2: 'Alissa', age2: 80 },
  { name: 'Graham', age: 40, name2: 'Alissa', age2: 80 },
  { name: 'Peter', age: 65, name2: 'Rose', age2: 26 },
  { name: 'Graham', age: 65, name2: 'Rose', age2: 26 },
  { name: 'Graham', age: 65, name2: 'Willis', age2: 26 },
  { name: 'Graham', age: 62, name2: 'Willis', age2: 26 }
];
const orderedIds = ['name', 'name2', 'age', 'age2'];
const tableHooks = [useOrderedMultiSort(orderedIds)]; // should be memoized
const TableComponent = () => {
  return (
    <AnalyticalTable
      columns={columns}
      data={data}
      sortable
      tableHooks={tableHooks}
    />
  );
};
`})}),`
`,e.jsx(m,{})]})}function Ke(r={}){const{wrapper:t}={...i(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(n,{...r})}):n(r)}export{Ke as default};
