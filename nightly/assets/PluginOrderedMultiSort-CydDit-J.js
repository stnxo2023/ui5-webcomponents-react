import{j as e}from"./iframe-CB_qmYI8.js";import{useMDXComponents as i}from"./index-CUbKt2T4.js";import{I as a,F as m}from"./CommandsAndQueries-HFp-4-55.js";import{M as s,C as p}from"./blocks-DzH1842d.js";import"./Tag-BYvfvCLi.js";import"./index-BfAPJluR.js";import{C as l}from"./ControlsWithNote-C2ZegKsl.js";import"./copy-DF2Z1I-X.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-23cGt9Fu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-R89IEGRw.js";import"./index-SxWu56C4.js";import"./index-DE9gqn8Y.js";import"./Link-BRHRm_Z2.js";import"./index-C0flI_9Q.js";import"./index-At4nCxiD.js";import"./index-6WmsPmX0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ClKIXNm7.js";import"./addCustomCSSWithScoping-9v1tewFq.js";import"./index-03LyQe5H.js";import"./information-CRpELSoZ.js";import"./sys-enter-2-DeQtcYtY.js";import"./alert-Bc8RvQjV.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DoIcej0d.js";import"./delete-h5Qd2W2H.js";import"./settings-CSx4aPPi.js";import"./NoData-BrRr6rJG.js";import"./IllustratedMessage-P-eTSBPb.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-C4AhZadB.js";import"./index-BecbeCsX.js";import"./index-4XDdM9qY.js";import"./slim-arrow-down-COs4Wkey.js";import"./Input-C9UjHzpz.js";import"./ResponsivePopoverCommon.css-DeWNHY7M.js";import"./ValueStateMessage.css-C_C4YLjN.js";import"./Suggestions.css-BiWmWxsR.js";import"./ListBoxItemGroupTemplate-CMTiHLs-.js";import"./ComboBoxItemGroup-CO3bHj-e.js";import"./ListItemBaseTemplate-DB4BankB.js";import"./Token-Bn2Z9z3x.js";import"./ScrollEnablement-zi7znCts.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cv8isNSi.js";import"./ToggleButton-CS3KiBib.js";import"./SuggestionItem-CS7L8vuq.js";import"./index-BmjeN9M0.js";import"./Option-DDYwfZPs.js";import"./index-BiQ1de6A.js";import"./SegmentedButton-B8To13C-.js";import"./index-MDU9FtHu.js";import"./Select-DhuDrd7S.js";import"./InvisibleMessage-Ds6r8Hv8.js";import"./slim-arrow-down-jIayUIlb.js";import"./index-DDk-oOqz.js";import"./index-CTC0a4Ev.js";import"./index-BvRf3EEd.js";import"./index-D2nb9FR-.js";import"./IconDesign-DXd8PPVF.js";import"./filter-J7STKAsw.js";import"./group-2-bvY_SkSU.js";import"./sort-descending-7NVh3v7n.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BUpkmw30.js";import"./utils-D98SoFu_.js";import"./index-CN6SBPye.js";import"./index-BhZzLROS.js";import"./index-Y1-1V0is.js";import"./navigation-down-arrow-BV093n8q.js";import"./navigation-right-arrow-hA-Kw1uy.js";import"./navigation-right-arrow-BYDjRs4q.js";import"./useCurrentTheme-C9z11eLv.js";import"./index-CPVT_XbL.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-NAZbOjtu.js";import"./paper-plane-DaL2oIMz.js";import"./index-B9MOWJBA.js";import"./less-CxZT17u6.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
