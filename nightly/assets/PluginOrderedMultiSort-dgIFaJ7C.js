import{j as e}from"./iframe-Cu2r5DBt.js";import{useMDXComponents as i}from"./index-DsEnC-S2.js";import{I as a,F as m}from"./CommandsAndQueries-DfbTmmri.js";import{M as s,C as p}from"./blocks-DrEEcrJV.js";import"./Tag-BfeG-i6G.js";import"./index-DcYlZ6P4.js";import{C as l}from"./ControlsWithNote-DlpqvBve.js";import"./copy-D0JAZV9l.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BiMefP11.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BCrFY3fH.js";import"./index-BlqIDgbk.js";import"./index-Os4Zeg9n.js";import"./Link-DyRt210A.js";import"./index-DiFMEeWS.js";import"./index-CMEHSo2E.js";import"./index-COwVlcqf.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CO5icxsl.js";import"./addCustomCSSWithScoping-81SqKEKs.js";import"./index-DacMIu3h.js";import"./information-Bxm8KRwL.js";import"./sys-enter-2-f8dz7x8Q.js";import"./alert-848W8p-Q.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D76FbZtk.js";import"./delete-B-IsQiZR.js";import"./settings-CD2c-woD.js";import"./NoData-DTI18JF6.js";import"./IllustratedMessage-DX1YYOhS.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CmTEtjIx.js";import"./index-DoOj6a-I.js";import"./index-BfnkmY72.js";import"./slim-arrow-down-QBkKAVhi.js";import"./Input-D3OZDz2j.js";import"./ResponsivePopoverCommon.css-D6DQUrFO.js";import"./ValueStateMessage.css-DVAUVrF2.js";import"./Suggestions.css-D_7WvW8J.js";import"./ListBoxItemGroupTemplate-CAqv16Vd.js";import"./ComboBoxItemGroup-Bkl0glqF.js";import"./ListItemBaseTemplate-B36zIliD.js";import"./Token-czU1vG1J.js";import"./ScrollEnablement-bEoR-zYl.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BjU2dKNl.js";import"./ToggleButton-K4-PXkOC.js";import"./SuggestionItem-DpYfRwX3.js";import"./index-Bc3rhNIn.js";import"./Option-ylN_TdkI.js";import"./index-9JKg4cbf.js";import"./SegmentedButton-CJfA1Mtn.js";import"./index-O_QxZdYN.js";import"./Select-DHUaUoMk.js";import"./InvisibleMessage-BUdS_g5o.js";import"./slim-arrow-down-BHYyEM1X.js";import"./index-l2pP1Xti.js";import"./index-t_6EW66R.js";import"./index-CoFRC52-.js";import"./index-DWSSjAYi.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bsoqp3td.js";import"./group-2-wbi_dpVE.js";import"./sort-descending-DNwrriud.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BajIgag2.js";import"./utils-Gj7QsPnx.js";import"./index-B-UkReOd.js";import"./index-_95c2mxo.js";import"./index-CeTtedVZ.js";import"./navigation-down-arrow-ofZN1zUz.js";import"./navigation-right-arrow-Dj5fUfjl.js";import"./navigation-right-arrow-BCtmnaF7.js";import"./useCurrentTheme-DNnBzfxG.js";import"./index-qksCzBH3.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-l2Qw6S3S.js";import"./paper-plane-ArZYudnw.js";import"./index-C37vfn-j.js";import"./less-DAgDXDNb.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
