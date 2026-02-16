import{j as e}from"./iframe-BQw543fO.js";import{useMDXComponents as i}from"./index-BxhW0hRZ.js";import{I as a,F as m}from"./CommandsAndQueries-C4NyJWbb.js";import{M as s,C as p}from"./blocks-DVt0JaPi.js";import"./Tag-sELDi5ig.js";import"./index-DRKxBO9I.js";import{C as l}from"./ControlsWithNote-BMlhetbG.js";import"./copy-9tJvlpXS.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-C2_U3nDd.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B2T-_GlF.js";import"./index-DlwOY2o8.js";import"./index-8hxRUREt.js";import"./Link-CGxFiH0u.js";import"./index-DqHN2E4G.js";import"./index-B74G-VBW.js";import"./index-B0V2Rdv7.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BUFLcfGV.js";import"./addCustomCSSWithScoping-JZmabDZV.js";import"./index-CButcFfg.js";import"./information-giMaU9kv.js";import"./sys-enter-2-8R25DHYh.js";import"./alert-DoRuAU1t.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CM2uzcB4.js";import"./delete-C24k1AlE.js";import"./settings-CGiD0aRJ.js";import"./NoData-DkFDQhZS.js";import"./IllustratedMessage-BHzFOR23.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-BzR8x5cH.js";import"./index-C6Gx5LBV.js";import"./index-I9qS98gj.js";import"./slim-arrow-down-Y3VcW7MM.js";import"./Input-Dqe9_Cgh.js";import"./ResponsivePopoverCommon.css-BUtvUiTp.js";import"./ValueStateMessage.css-B4a25LJP.js";import"./Suggestions.css-CWOCvyz5.js";import"./ListBoxItemGroupTemplate-Cjp35C8X.js";import"./ComboBoxItemGroup-Y846uSl7.js";import"./ListItemBaseTemplate-BydcNEAt.js";import"./Token-zZiPj9PM.js";import"./ScrollEnablement-C3bXHz1R.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Yv4CXx4-.js";import"./ToggleButton-BXvmSzD8.js";import"./SuggestionItem-C_wlXKJi.js";import"./index-DvR3wRKz.js";import"./Option-ezhIbOLI.js";import"./index-BWs4o4Dm.js";import"./SegmentedButton-CRv9M-40.js";import"./index-Cxe3oJI6.js";import"./Select-D4f1CrB5.js";import"./InvisibleMessage-DIaEl61G.js";import"./slim-arrow-down-6K51CIbd.js";import"./index-CzWzZBFG.js";import"./index-BCXvLyuV.js";import"./index-CVp7cd0k.js";import"./index-BbqsQoi1.js";import"./IconDesign-DXd8PPVF.js";import"./filter-t5x_Oax_.js";import"./group-2-CsbviiZ6.js";import"./sort-descending-FFgYtEEy.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CbS6xyk7.js";import"./utils-B51JP7MS.js";import"./index-Cyxa-Lg1.js";import"./index-ePsAp63A.js";import"./index-DgaKDpsv.js";import"./navigation-down-arrow-D3N52Tck.js";import"./navigation-right-arrow-C56keY6-.js";import"./navigation-right-arrow-DtVrQ57T.js";import"./useCurrentTheme-NBNMJ8GX.js";import"./index-DPNHq_j6.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B1lcnCzB.js";import"./paper-plane-CY_k9ZwL.js";import"./index-ZJKQMD2K.js";import"./less-BFId0QYp.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
