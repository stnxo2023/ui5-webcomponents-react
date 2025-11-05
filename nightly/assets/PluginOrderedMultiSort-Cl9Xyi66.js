import{j as e}from"./iframe-CRwp3Tpg.js";import{useMDXComponents as i}from"./index-COIro8D8.js";import{I as a,F as m}from"./CommandsAndQueries-BOt8E6ok.js";import{M as s,C as p}from"./blocks-C4HsTNIO.js";import"./Tag-tfloHdXZ.js";import"./index-B8mUtBGn.js";import{C as l}from"./ControlsWithNote-BCEkc-TD.js";import"./copy-DIWKtK23.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BkiRgwtD.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DtgT2jRs.js";import"./index-B3NhI5Qb.js";import"./index-Cv51gsI_.js";import"./Link-Dtv1Hpbf.js";import"./index-DIEFvDQl.js";import"./index-DzYDiZvU.js";import"./index-DYA05DWY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D0x12wWs.js";import"./addCustomCSSWithScoping-Dv4ZSX5E.js";import"./index-C0aL9woL.js";import"./information-MlnnkJju.js";import"./sys-enter-2-DNoGuffO.js";import"./alert-aDgjp5mZ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BIKVWOiQ.js";import"./delete-BsiUWMyb.js";import"./settings-sxQzjKnN.js";import"./NoData-BdJ39RdV.js";import"./IllustratedMessage-D4izY5uv.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-BQNjO2jS.js";import"./index-COdypGT7.js";import"./index-DbsdpZ0s.js";import"./slim-arrow-down-C-sQkdwh.js";import"./Input-CKqAaoJh.js";import"./ResponsivePopoverCommon.css-TNg_0n0_.js";import"./ValueStateMessage.css-CYdcHCck.js";import"./Suggestions.css-BAVf_4rH.js";import"./ListBoxItemGroupTemplate-CqtX5gL_.js";import"./ComboBoxItemGroup-XlcjepWp.js";import"./ListItemBaseTemplate-DNSZp8wv.js";import"./Token-CSx3lX-3.js";import"./ScrollEnablement-CzlDnCBe.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CG69oYew.js";import"./ToggleButton-8cblrt3F.js";import"./SuggestionItem-XM4Pz9fl.js";import"./index-CRs2PjFa.js";import"./Option-y4L7YpM6.js";import"./index-DRJHyZv9.js";import"./SegmentedButton-CDx2wd85.js";import"./index-BfNpixh1.js";import"./Select-BYSDq3x_.js";import"./InvisibleMessage-BMQ2txcL.js";import"./slim-arrow-down-DDdekocZ.js";import"./index-DEay9TCB.js";import"./index-BMcRBVTx.js";import"./index-WpAbWfDk.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DBC-rl-6.js";import"./group-2-D2J0_DJH.js";import"./sort-descending-DZsOcrOl.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-xFdAYmE4.js";import"./utils-rzD3DZ3e.js";import"./index-Bmk_6Mqn.js";import"./index-BHqYfiWu.js";import"./index-C9fmCLaq.js";import"./navigation-down-arrow-DTNzqgNt.js";import"./navigation-right-arrow-DL5KfXIw.js";import"./navigation-right-arrow-CDwfvJNR.js";import"./useCurrentTheme-BsJOJC7B.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CbdzFybD.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DAMtZyo0.js";import"./paper-plane-E8fm-GBo.js";import"./index-Dzeoy_HR.js";import"./less-xMOC9uh_.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
