import{j as e}from"./iframe-D9-3X0JI.js";import{useMDXComponents as i}from"./index-dMdAMZT7.js";import{I as a,F as m}from"./CommandsAndQueries-Cnpdrmv-.js";import{M as s,C as p}from"./blocks-BYKnuPZj.js";import"./Tag-rAEScKNS.js";import"./index-DwPMNEU4.js";import{C as l}from"./ControlsWithNote-DmMPtAq1.js";import"./copy-B87NDbR1.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BFQ_A00u.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B0kTLMxV.js";import"./index-Bo2p0dAu.js";import"./index-BC71hX7l.js";import"./Link-B5zjhOqH.js";import"./index-DhzIoMaL.js";import"./index-j1saZdO-.js";import"./index-CxPR9JIx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DORD8sYf.js";import"./addCustomCSSWithScoping-CDB2w5BM.js";import"./index-BjUikPJy.js";import"./information-e-gqJ6X6.js";import"./sys-enter-2-BhYBtaW9.js";import"./alert-XeF5lKFk.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DHZG-a9h.js";import"./delete-Cqn9h0fS.js";import"./settings-D0TIiCOY.js";import"./NoData-h_3BPE3I.js";import"./IllustratedMessage-DrYfSsmV.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BQhnxhD2.js";import"./index-BnP9b9Ky.js";import"./index-lEFQSdUo.js";import"./slim-arrow-down-B8HgmHUP.js";import"./Input-DADAhjMq.js";import"./ResponsivePopoverCommon.css-CWBdwhTg.js";import"./ValueStateMessage.css-BQV-lfyq.js";import"./Suggestions.css-RW7Qb5Rw.js";import"./ListBoxItemGroupTemplate-95aXC4Zd.js";import"./ComboBoxItemGroup-BmvBFBsQ.js";import"./ListItemBaseTemplate-CeEtHuiX.js";import"./Token-D4ouf1p4.js";import"./ScrollEnablement-C4sfEIZB.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DhetoAjI.js";import"./ToggleButton-Cf16CjNh.js";import"./SuggestionItem-BznSOywU.js";import"./index-a8oDzDPg.js";import"./Option-DuBZhqYX.js";import"./index-CS7_81Z1.js";import"./SegmentedButton-CrnUIMou.js";import"./index-BaqGrvUy.js";import"./Select-jAoE6kcO.js";import"./InvisibleMessage-B78hZJHf.js";import"./slim-arrow-down-DRw17b4-.js";import"./index-PO4-y7XB.js";import"./index-BwtfdfmC.js";import"./index-C3d2BxPO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DzvCSHnC.js";import"./group-2-DG9Xxc_K.js";import"./sort-descending-DQD9wlqN.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DakTmcy-.js";import"./utils-CCWGeWj_.js";import"./index-lNoXPje7.js";import"./index-B5sC3CbN.js";import"./index-CoAbgxwH.js";import"./navigation-down-arrow-BCk2Xe8o.js";import"./navigation-right-arrow-BcVav5TW.js";import"./navigation-right-arrow-DiWFJr_y.js";import"./useCurrentTheme-r_mdZh15.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DMLJfOS0.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Bu1wdE8w.js";import"./paper-plane-CSjFaLDV.js";import"./index-C6Aqw5an.js";import"./less-BQc0aqcX.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
