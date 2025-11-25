import{j as e}from"./iframe-DqhX_Hdp.js";import{useMDXComponents as i}from"./index-B-LlaBAd.js";import{I as a,F as m}from"./CommandsAndQueries-Ctn2WqFW.js";import{M as s,C as p}from"./blocks-BTKPnx40.js";import"./Tag-t-9sbcO3.js";import"./index-eBm8t70p.js";import{C as l}from"./ControlsWithNote-BiIXTcre.js";import"./copy-BkBAOPVd.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DrWG1jWH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BeJ9wz7o.js";import"./index-DCixdKQP.js";import"./index-BJOWTBa5.js";import"./Link-KAeBCRn4.js";import"./index-CZfYA9Jl.js";import"./index-D2G6pSj4.js";import"./index-CqRqJjYx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Duf1worp.js";import"./addCustomCSSWithScoping-BTNZ7_2D.js";import"./index-CuoIUeLC.js";import"./information-DBUGylnd.js";import"./sys-enter-2-CQyTlO0m.js";import"./alert-OnHFbpl_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BpMc5M9M.js";import"./delete-C7JHot2N.js";import"./settings-SKzIyHSS.js";import"./NoData-CX7evjUT.js";import"./IllustratedMessage-CqLVEv_t.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-DAqM8TO4.js";import"./index-BzlXpFoZ.js";import"./index-BtdQUBMJ.js";import"./slim-arrow-down-B4S7UH3-.js";import"./Input-Bip1JtLT.js";import"./ResponsivePopoverCommon.css-B62B-Zvc.js";import"./ValueStateMessage.css-D02law6b.js";import"./Suggestions.css-CSoreWx6.js";import"./ListBoxItemGroupTemplate-DHoLoT8x.js";import"./ComboBoxItemGroup-C5WDhKir.js";import"./ListItemBaseTemplate-OClf921P.js";import"./Token-BLU09JyB.js";import"./ScrollEnablement-B9Jmoik0.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D7vVDnmd.js";import"./ToggleButton-D53MHrW_.js";import"./SuggestionItem-BeURI2s8.js";import"./index-C9P_P9K4.js";import"./Option-CHApBvDG.js";import"./index-DAJXbvOW.js";import"./SegmentedButton-DeqHvB3C.js";import"./index-BCK2EVsS.js";import"./Select-Be7QzEWT.js";import"./InvisibleMessage-Bdbv9Ef9.js";import"./slim-arrow-down-CarTb4uE.js";import"./index-BIu9-7Rg.js";import"./index-BCh3t8Up.js";import"./index-DxAT9tTr.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CtE2b9bq.js";import"./group-2-eAJtoAsZ.js";import"./sort-descending-Cx0p3NMy.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DDEoRTFB.js";import"./utils-BSyH8VJa.js";import"./index-BkR8Kcfn.js";import"./index-CfGNWRnm.js";import"./index-DNTS6-c1.js";import"./navigation-down-arrow-ahG-gz6o.js";import"./navigation-right-arrow-A7nXgQLK.js";import"./navigation-right-arrow-C6E29xwI.js";import"./useCurrentTheme-gRxjNOgY.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D-Tz76DO.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DHOA1SXn.js";import"./paper-plane-Bzfws6My.js";import"./index-DrsUiW4k.js";import"./less-CCPik5WH.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
