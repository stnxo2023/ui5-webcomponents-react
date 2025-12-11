import{j as e}from"./iframe-D74d3IUT.js";import{useMDXComponents as i}from"./index-BzFpXofy.js";import{I as a,F as m}from"./CommandsAndQueries-CXtjs1YA.js";import{M as s,C as p}from"./blocks-CXGWO-SS.js";import"./Tag-CGDi5rN6.js";import"./index-D9Jimze5.js";import{C as l}from"./ControlsWithNote-CvEObb8r.js";import"./copy-B52gZhj1.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CRUZhyOz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dp6BwZZH.js";import"./index-BAV2Dqb-.js";import"./index-nz5M1FvK.js";import"./Link-BnKuAsKS.js";import"./index-CGofV6Bd.js";import"./index-CBnDxC_O.js";import"./index-CUp4_VMY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DI0ZtE-_.js";import"./addCustomCSSWithScoping-DX0DY0tV.js";import"./index-B6nGMvY0.js";import"./information-CzZVG8MP.js";import"./sys-enter-2-Bo9ZeWqv.js";import"./alert-BpouBdE8.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BP3F7SzG.js";import"./delete-YUY4KlW5.js";import"./settings-DpOnwkHb.js";import"./NoData-B2ZeHRsw.js";import"./IllustratedMessage-CD7-3bUQ.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-D8YrAv4w.js";import"./index-B4EupoFR.js";import"./index-GzctAGg6.js";import"./slim-arrow-down-CJ7jhAk1.js";import"./Input-D3Xm66Jc.js";import"./ResponsivePopoverCommon.css-Bm5g59rh.js";import"./ValueStateMessage.css-CNhskv9k.js";import"./Suggestions.css-BammTqMf.js";import"./ListBoxItemGroupTemplate-Bnq694A2.js";import"./ComboBoxItemGroup-CTUZloft.js";import"./ListItemBaseTemplate-BtNRlpdq.js";import"./Token-9UX-S350.js";import"./ScrollEnablement-Bvs_TGN7.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-S82lpBYr.js";import"./ToggleButton-BCthjRIl.js";import"./SuggestionItem-BD6hvrsk.js";import"./index-BTq-cNvk.js";import"./Option-c6rQ8KOO.js";import"./index-BeFwl-qO.js";import"./SegmentedButton-DsOBeHfP.js";import"./index-C2WGUbBO.js";import"./Select-Bl9KvdRX.js";import"./InvisibleMessage-BT-HA0qk.js";import"./slim-arrow-down-DDEX6AaA.js";import"./index-BGhEWWIW.js";import"./index-Bj1y_nF2.js";import"./index-BAajSuv0.js";import"./index-BJZ4mF5F.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CZdxiPUv.js";import"./group-2-x2wNxahT.js";import"./sort-descending-DblnClo_.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CoiaLP2s.js";import"./utils-BPA4Vsqc.js";import"./index-DrVyi1bm.js";import"./index-Db-Q1TXS.js";import"./index-C1aOp4aZ.js";import"./navigation-down-arrow-ACQ1IIiZ.js";import"./navigation-right-arrow-C6rkELWM.js";import"./navigation-right-arrow-DRqzrNVR.js";import"./useCurrentTheme-DcwwM3Ir.js";import"./index-DelixGbO.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D2mdH9Ar.js";import"./paper-plane-BAJmhSNp.js";import"./index-DmuQ-N4b.js";import"./less-DFyAY_Yv.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
