import{j as e}from"./iframe-Hc0Jcm1H.js";import{useMDXComponents as i}from"./index-DuUU5AC1.js";import{I as a,F as m}from"./CommandsAndQueries-DaPP_-f6.js";import{M as s,C as p}from"./blocks-Blx2ursY.js";import"./Tag-DWcxngX2.js";import"./index-X6pjtL8_.js";import{C as l}from"./ControlsWithNote-CFIfyIzl.js";import"./copy-BhskYI2N.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CSkHzbUH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CQCUFERN.js";import"./index-BZHpmRs9.js";import"./index-BP8PtjoR.js";import"./Link-B4jgiGqN.js";import"./index-D4_s-XzL.js";import"./index-DixWMcP9.js";import"./index-YGVe_Lue.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CSgKpTfU.js";import"./addCustomCSSWithScoping-C31rwvDU.js";import"./index-CJBWc845.js";import"./information-MEaUQuQF.js";import"./sys-enter-2-Bor4HzlU.js";import"./alert-B5sjmhde.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BUSpAEyp.js";import"./delete-B_UVOxI5.js";import"./settings-DoJo7PIR.js";import"./NoData-BtiqKpF_.js";import"./IllustratedMessage-7Q0rSxAX.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DY07_HAn.js";import"./index-C4-ueurv.js";import"./index-CVAhSMmh.js";import"./slim-arrow-down-CnQoJTna.js";import"./Input-jvbkedmk.js";import"./ResponsivePopoverCommon.css-BUymfbWg.js";import"./ValueStateMessage.css-DYbIayMA.js";import"./Suggestions.css-DAulSdYD.js";import"./ListBoxItemGroupTemplate-C3BPGY4S.js";import"./ComboBoxItemGroup-S4DHHq5B.js";import"./ListItemBaseTemplate-D1J42Smc.js";import"./Token-C_NNBIIw.js";import"./ScrollEnablement-DdNa3g_Z.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DI8nzW2J.js";import"./ToggleButton-Dqx5ood8.js";import"./SuggestionItem-BQwZmd1n.js";import"./index-B2zqQYOB.js";import"./Option-DYDjvvQF.js";import"./index-B-jLNkJI.js";import"./SegmentedButton-B6hVMkZG.js";import"./index-Cl268kCu.js";import"./Select-DcomDJKy.js";import"./InvisibleMessage-1eRkmfyK.js";import"./slim-arrow-down-DpK-rqPH.js";import"./index-BDvJxbiT.js";import"./index-D_cylvMd.js";import"./index-CtZBQQM2.js";import"./index-BF_BhXaP.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D_PK0427.js";import"./group-2-CVFEbsNN.js";import"./sort-descending-DZXbPc0n.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-hjnENwQI.js";import"./utils-CMQMf6l5.js";import"./index-CP62UNNy.js";import"./index-C89QNOBV.js";import"./index-Dc4nb1AV.js";import"./navigation-down-arrow-Dgmp7r6E.js";import"./navigation-right-arrow-B3FKHK8J.js";import"./navigation-right-arrow-DBBKbyJD.js";import"./useCurrentTheme-D1RNYWH0.js";import"./index-3YVdwNdJ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BnF71Q9x.js";import"./paper-plane-BEnc2lHw.js";import"./index-DJj6qKVN.js";import"./less-Bx2mAaAT.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
