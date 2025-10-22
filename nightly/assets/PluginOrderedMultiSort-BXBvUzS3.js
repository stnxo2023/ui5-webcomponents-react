import{j as e}from"./iframe-aKs2ZWAj.js";import{useMDXComponents as i}from"./index-c4zJYkcR.js";import{I as a,F as m}from"./CommandsAndQueries-IBiFSZr-.js";import{M as s,C as p}from"./blocks-fvCr5kp9.js";import"./Tag-DSoVP5MU.js";import"./index-CMRRcr14.js";import{C as l}from"./ControlsWithNote-B8WaBvsi.js";import"./copy-D9idsxI8.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BaQwIBgF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DNGZMnOS.js";import"./index-9dBzyYap.js";import"./index-Bj8ei7PO.js";import"./Link--ytwK8Iw.js";import"./index-ChXUbPo1.js";import"./index-B_N5JODd.js";import"./index-MuWvZ7Ot.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C1lURHaG.js";import"./addCustomCSSWithScoping--I2WhUfl.js";import"./index-Dqo0aPAB.js";import"./information-CcxaAVSU.js";import"./sys-enter-2-DseuEdAf.js";import"./alert-DbU8Ao5u.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CxMI9gU-.js";import"./delete-BtFgIOxP.js";import"./settings-ZFHQhdsu.js";import"./NoData-DZS9Ur76.js";import"./IllustratedMessage-qSdTMbb_.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-B6-4gdXH.js";import"./index-CmhJUl_b.js";import"./index-DepEoVTO.js";import"./slim-arrow-down-Dxd3QVtv.js";import"./Input-C4wOVg4W.js";import"./ResponsivePopoverCommon.css-Dn8ntY67.js";import"./ValueStateMessage.css-BbNN49z9.js";import"./Suggestions.css-CJQWNtEa.js";import"./ListBoxItemGroupTemplate-BlE3pbv5.js";import"./ComboBoxItemGroup-tqMfhz0v.js";import"./ListItemBaseTemplate-CtNEmA22.js";import"./Token-B4ffJEtp.js";import"./ScrollEnablement-loPYCCzg.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-xWRY6uoX.js";import"./ToggleButton-CGCRf2qx.js";import"./SuggestionItem-C0HWDl10.js";import"./index-CUVmuYtL.js";import"./Option-78QXYTZI.js";import"./index-DwEarF4u.js";import"./SegmentedButton-Dcqh0APM.js";import"./index-DA1062Kq.js";import"./Select-D7DdaJ-R.js";import"./InvisibleMessage-DezkuNLo.js";import"./slim-arrow-down-BlGxKe2j.js";import"./index-CBIaN5fI.js";import"./index-DnUR33pO.js";import"./index-Czu_4IUB.js";import"./IconDesign-DXd8PPVF.js";import"./filter-rWMtqLgy.js";import"./group-2-CHhi29YF.js";import"./sort-descending-DHA1WIN6.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CLYrF4yE.js";import"./utils-B1uKdKfv.js";import"./index-3SWcYaJq.js";import"./index-B60Izm_h.js";import"./index-BFnuOW-D.js";import"./navigation-down-arrow-Cb1XkKbC.js";import"./navigation-right-arrow-CqaFjLeM.js";import"./navigation-right-arrow-Byp8Xbsp.js";import"./useCurrentTheme-RkZvjCi7.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CjjC7c0Q.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C1moqd-D.js";import"./paper-plane-CJQ7U-vp.js";import"./index-DQpXYUsU.js";import"./less-tAUMA1iF.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
