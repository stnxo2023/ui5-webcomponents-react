import{j as e}from"./iframe-DjfYWB_-.js";import{useMDXComponents as i}from"./index-CNEMb-s-.js";import{I as a,F as m}from"./CommandsAndQueries-BsOJw-5f.js";import{M as s,C as p}from"./blocks-nmBdCmu5.js";import"./Tag-BYbOAHsQ.js";import"./index-Cv9LJBlx.js";import{C as l}from"./ControlsWithNote-DsGQ_MBv.js";import"./copy-DOQqskn1.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Bx8L5gGw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cwo-vKel.js";import"./index-B3I7HtBx.js";import"./index-CkJ-GMHH.js";import"./Link-CGcb-hqt.js";import"./index-3-iEB97a.js";import"./index-Blql2ABB.js";import"./index-B4phfj74.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-M6waVzUY.js";import"./addCustomCSSWithScoping-Bm9f8w42.js";import"./index-CPQFexs4.js";import"./information-6Bx96viV.js";import"./sys-enter-2-Dkjyf6Zz.js";import"./alert-Cr4CwR6P.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dg2EcDm-.js";import"./delete-Dn4VRsBO.js";import"./settings-Bqn2drvn.js";import"./NoData-BrXPHqk9.js";import"./IllustratedMessage-bJRZPLTh.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-Bij97oPM.js";import"./index-CGkDrGvP.js";import"./index-BvLI0S8J.js";import"./slim-arrow-down-swQTdSNw.js";import"./Input-CJfaU7cK.js";import"./ResponsivePopoverCommon.css-DpaN_G4_.js";import"./ValueStateMessage.css-DaYi5Bjt.js";import"./Suggestions.css-CNISWm9D.js";import"./ListBoxItemGroupTemplate-BQ40pZer.js";import"./ComboBoxItemGroup-o1GMSWgz.js";import"./ListItemBaseTemplate-DNfVXr3f.js";import"./Token-D9FthG2R.js";import"./ScrollEnablement-B4FaEPu4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DkthL8Bg.js";import"./ToggleButton-DPum5vk_.js";import"./SuggestionItem-CF8875wi.js";import"./index-BRPIgwS4.js";import"./Option-3-roLoVF.js";import"./index-Bs2a6dx4.js";import"./SegmentedButton-B7RnWeGJ.js";import"./index-CpZsNdqM.js";import"./Select-CpnB3P08.js";import"./InvisibleMessage-BuBF9yqs.js";import"./slim-arrow-down-DNZp2sIO.js";import"./index-BZ-x6-Bx.js";import"./index-BFkrGCCz.js";import"./index-B_HRORUp.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DD4TJf9R.js";import"./group-2-ARDd1dPZ.js";import"./sort-descending-Bm1JystE.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-7WbgYwtx.js";import"./utils-B_rTI3PV.js";import"./index-0H0qN1a3.js";import"./index-k3f5SVhd.js";import"./index-B-bcUYN5.js";import"./navigation-down-arrow-BXADmo6h.js";import"./navigation-right-arrow-K_bO6q0G.js";import"./navigation-right-arrow-Bg66dsed.js";import"./useCurrentTheme-C9aR5EtN.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B14eBFuc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DoJ7z7ik.js";import"./paper-plane-KU6AFQvR.js";import"./index-BB7Dlsa8.js";import"./less-BADhD7u_.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
