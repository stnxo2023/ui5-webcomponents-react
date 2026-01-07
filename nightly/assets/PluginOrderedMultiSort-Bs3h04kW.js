import{j as e}from"./iframe-Bx5nPEOl.js";import{useMDXComponents as i}from"./index-xw1HgrxR.js";import{I as a,F as m}from"./CommandsAndQueries-DQbk5l2-.js";import{M as s,C as p}from"./blocks-BnfvreJd.js";import"./Tag-Czmfabca.js";import"./index-DySSVXhZ.js";import{C as l}from"./ControlsWithNote-CahJmR9N.js";import"./copy-CNcXjyuB.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CrixVdQ8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BJ7q1nh3.js";import"./index-CHjTsZ6I.js";import"./index-DkrrTKjv.js";import"./Link-kOQVQryb.js";import"./index-DAgUYXjE.js";import"./index-EX-yWEKJ.js";import"./index-Bwj8Rahv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-4hIxCZ-4.js";import"./addCustomCSSWithScoping-BnQjkpis.js";import"./index-D030oFb6.js";import"./information-C_BRWXUj.js";import"./sys-enter-2-lnnKHtcu.js";import"./alert-CZSvHkOp.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BwNoBN7k.js";import"./delete-DojygiWC.js";import"./settings-CdO75LQa.js";import"./NoData-BxLSGnmz.js";import"./IllustratedMessage-CznMqB69.js";import"./i18n-defaults-BoKY-OR9.js";import"./parameters-bundle.css-B37gDvcF.js";import"./NoFilterResults-BIAQtnD-.js";import"./index-DV1-UqSW.js";import"./index-CpsQPo3e.js";import"./slim-arrow-down-eJKhvhkE.js";import"./Input-CxXLCf6q.js";import"./ResponsivePopoverCommon.css-CalmLiVM.js";import"./ValueStateMessage.css-BZ1EUbwN.js";import"./Suggestions.css-DQV6aIGz.js";import"./ListBoxItemGroupTemplate-VNyv00pZ.js";import"./ComboBoxItemGroup-jUyYtSAM.js";import"./ListItemBaseTemplate-Dykvp_EK.js";import"./Token-DhwxhKpj.js";import"./ScrollEnablement-DNpNAWna.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-zfIyxVpK.js";import"./ToggleButton-CQ5gk1wa.js";import"./SuggestionItem-CcFTbcr2.js";import"./index-MISqvFi7.js";import"./Option-DPppUzFK.js";import"./index-BfR1hjK_.js";import"./SegmentedButton-3fKGQQxX.js";import"./index-C4WckVVh.js";import"./Select-C1QLPr_H.js";import"./InvisibleMessage-CQ0u2q5u.js";import"./slim-arrow-down-CAhFqhr1.js";import"./index-FDm07H3e.js";import"./index-djmxjVZM.js";import"./index-8AWyZMWh.js";import"./index-AroNelzF.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cozu-6eK.js";import"./group-2-o5ZUKu4E.js";import"./sort-descending-BldoBMrB.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C6ekE9Pr.js";import"./utils-D64FTNul.js";import"./index-DBe8VqoY.js";import"./index-BK8Wq19O.js";import"./index-Cp2_alMF.js";import"./navigation-down-arrow-CRFET8c4.js";import"./navigation-right-arrow-BmtWA2-q.js";import"./navigation-right-arrow-JKoD_tiK.js";import"./useCurrentTheme-BTp0qmA6.js";import"./index-CiSPkYgk.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-wht3LnSl.js";import"./paper-plane-C5y4Nddn.js";import"./index-DH3g5PUN.js";import"./less-BXKa_8RC.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
