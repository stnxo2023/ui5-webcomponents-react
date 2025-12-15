import{j as e}from"./iframe-CMRYeg3m.js";import{useMDXComponents as i}from"./index-d3aogLFm.js";import{I as a,F as m}from"./CommandsAndQueries-DpsRc0ye.js";import{M as s,C as p}from"./blocks-B--XNN4Z.js";import"./Tag-DLJpwqrU.js";import"./index-X7c2uI6J.js";import{C as l}from"./ControlsWithNote-CXzfRtXZ.js";import"./copy-O4x8gwVx.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-NcPcxP0m.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dt6RwhRx.js";import"./index-BVsKPF1I.js";import"./index-csz7EJl3.js";import"./Link-Bxvjqypp.js";import"./index-PIXQ40x8.js";import"./index-Ca5PVHn4.js";import"./index-DVEpH7N4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-f1AMIobt.js";import"./addCustomCSSWithScoping-D9ZK4KgK.js";import"./index-TGfnZuTz.js";import"./information-2R4wAWn8.js";import"./sys-enter-2-h25AZJAc.js";import"./alert-EuMgWuer.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CbVSGA1k.js";import"./delete-1RwfcjcT.js";import"./settings-C5H9S65V.js";import"./NoData-CW7TgSmL.js";import"./IllustratedMessage-CGTR8uP0.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-DAZPTCPU.js";import"./index-Dq8e-1UW.js";import"./index-GkNgVDAt.js";import"./slim-arrow-down-CmvdQO7m.js";import"./Input-2Nygg4-q.js";import"./ResponsivePopoverCommon.css-CqBO6fZ3.js";import"./ValueStateMessage.css-D51R__Qj.js";import"./Suggestions.css-C4L82WYT.js";import"./ListBoxItemGroupTemplate-C-1UKkDb.js";import"./ComboBoxItemGroup-C51CY9Wh.js";import"./ListItemBaseTemplate-qOSQ4Fnc.js";import"./Token-CoqMARg0.js";import"./ScrollEnablement-CHUJ-chc.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ntD8YpfZ.js";import"./ToggleButton-DQ-1wEim.js";import"./SuggestionItem-BnR17Fyw.js";import"./index-BkexHsEY.js";import"./Option-DybeogHQ.js";import"./index-BHc0UMTZ.js";import"./SegmentedButton-Dezgm7cC.js";import"./index-BB_dZdK5.js";import"./Select-CAZuopb2.js";import"./InvisibleMessage-DVgio3fu.js";import"./slim-arrow-down-B1aQoQzR.js";import"./index-e5pHMgA1.js";import"./index-D_E6BFUk.js";import"./index-C1Exyb_f.js";import"./index-8DOGvRkG.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cb9Y6gPy.js";import"./group-2-Cea3ryU3.js";import"./sort-descending-rBOFvsCA.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-kdPvsB1k.js";import"./utils-CgBfQCBk.js";import"./index-jc4_TuNU.js";import"./index-BPBucl4y.js";import"./index-BewwXtWC.js";import"./navigation-down-arrow-BIKGPDMD.js";import"./navigation-right-arrow-gSRQ7cEs.js";import"./navigation-right-arrow-DT95PVm7.js";import"./useCurrentTheme-DhCErNXe.js";import"./index-QpjC2w_s.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-G_RHHN41.js";import"./paper-plane-DEFfxY-Y.js";import"./index-DTxz0DV7.js";import"./less-B-qcBapJ.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
