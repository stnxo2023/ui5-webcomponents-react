import{j as e}from"./iframe-rBa3eszb.js";import{useMDXComponents as i}from"./index-ywplRXEz.js";import{I as a,F as m}from"./CommandsAndQueries-CwUQeNe6.js";import{M as s,C as p}from"./blocks-g4en69Tv.js";import"./Tag-Ub-ab5wh.js";import"./index-CpHbQUX7.js";import{C as l}from"./ControlsWithNote-CNfoTTea.js";import"./copy-DpAiYmLC.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DwoO2n4l.js";import"./preload-helper-PPVm8Dsz.js";import"./index-_uK4ftNi.js";import"./index-dvt-GDfC.js";import"./index--W9c_yZX.js";import"./Link-Dq-0iXqs.js";import"./index-SiJKqGQM.js";import"./index-Bt8TlIkO.js";import"./index-CCm0OAPD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C-cGFZau.js";import"./addCustomCSSWithScoping-BFTmBMm0.js";import"./index-Dlmk5mT2.js";import"./information-Do12jBFt.js";import"./sys-enter-2-Gg5Ob7c_.js";import"./alert-Cl85dmlC.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BdvCWOzD.js";import"./delete-DSX6IBAt.js";import"./settings-B5OYEsJJ.js";import"./NoData-DnjMluBO.js";import"./IllustratedMessage-ft7Ssdsp.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-DL4_GS9s.js";import"./index-CeS1OQQr.js";import"./index-rLirECJZ.js";import"./slim-arrow-down-C9VdBaRF.js";import"./Input-m5bCswpX.js";import"./ResponsivePopoverCommon.css-CCI8LaeI.js";import"./ValueStateMessage.css-G3jxxdhr.js";import"./Suggestions.css-Bza81oFQ.js";import"./ListBoxItemGroupTemplate-BDdWlJ71.js";import"./ComboBoxItemGroup-C5w7p3nn.js";import"./ListItemBaseTemplate-DjnvcIEh.js";import"./Token-C1Lxypw2.js";import"./ScrollEnablement-BvgkaIDV.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DN6z6JAI.js";import"./ToggleButton-Do4GdOaF.js";import"./SuggestionItem-D8MLXmu2.js";import"./index-DE7-37Zx.js";import"./Option-3oJBHvkA.js";import"./index-CUcb9Gd6.js";import"./SegmentedButton-DfvUN2eU.js";import"./index-Bsqqc8MZ.js";import"./Select-B8folAVa.js";import"./InvisibleMessage-DbLy2p28.js";import"./slim-arrow-down-BI4obKhl.js";import"./index-_g-j8myn.js";import"./index-DlIBvfIs.js";import"./index-BsdBRU2K.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cv9GM9v6.js";import"./group-2-Bec-D2WX.js";import"./sort-descending-_A-rRud-.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BaG1O05d.js";import"./utils-B0At23gp.js";import"./index-BofIltQ1.js";import"./index-BI_6m6xU.js";import"./index-BDnRm_Qs.js";import"./navigation-down-arrow-DDHH9XQh.js";import"./navigation-right-arrow-sPX4M8sP.js";import"./navigation-right-arrow-CKY57fNf.js";import"./useCurrentTheme-NuodFJJx.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B62mh56S.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BifrIkAV.js";import"./paper-plane-CAhseGkA.js";import"./index-fMMDrhfL.js";import"./less-BLxfjnTZ.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
