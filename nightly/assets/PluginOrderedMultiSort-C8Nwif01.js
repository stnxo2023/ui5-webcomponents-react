import{j as e}from"./iframe-u8FS7fYy.js";import{useMDXComponents as i}from"./index-C5mdpSHf.js";import{I as a,F as m}from"./CommandsAndQueries-q_IHoPaq.js";import{M as s,C as p}from"./blocks-CA6IPYk4.js";import"./Tag-DslDE0Bb.js";import"./index-feIb_zWP.js";import{C as l}from"./ControlsWithNote-BB_y-Ms5.js";import"./copy-DnscT9w9.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-G0EhQtQ2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dm5-M5Tp.js";import"./index-BLjc-MlZ.js";import"./index-Dt8N5TZZ.js";import"./Link-B1qI_6K5.js";import"./index-B2lRXwRR.js";import"./index-Ck97t6iE.js";import"./index-Cr0S2U_P.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-VZfInv7D.js";import"./addCustomCSSWithScoping-Bi-KBOqo.js";import"./index-39vhHnbo.js";import"./information-eayia0M9.js";import"./sys-enter-2-Bq8G42J8.js";import"./alert-C2jJRi0I.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-IUrgbwed.js";import"./delete-Cy6nStvu.js";import"./settings-CsmDkRWR.js";import"./NoData-Dl4cDDvc.js";import"./IllustratedMessage-DJn7OKbx.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-WNq2o82Q.js";import"./index-B8Yw7-ed.js";import"./index-DoELuHg5.js";import"./slim-arrow-down-BzdglbBq.js";import"./Input-BzkAXBhe.js";import"./ResponsivePopoverCommon.css-B6vVrffQ.js";import"./ValueStateMessage.css-Dzp1zAdp.js";import"./Suggestions.css-CAMRCZc2.js";import"./ListBoxItemGroupTemplate-Do83mcvC.js";import"./ComboBoxItemGroup-DHIXSohN.js";import"./ListItemBaseTemplate-Bwno4fVU.js";import"./Token-3SQMJSyT.js";import"./ScrollEnablement-DD98dGgr.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BMXLX1H8.js";import"./ToggleButton-C6hKc49t.js";import"./SuggestionItem-DkOZoD1a.js";import"./index-BU3s_1Ip.js";import"./Option-BhGVz_yi.js";import"./index-DdIT0IEq.js";import"./SegmentedButton-FB1pLwEh.js";import"./index-BUE39DSG.js";import"./Select-DGVfvIxr.js";import"./InvisibleMessage-DkTNwmO6.js";import"./slim-arrow-down-BbWvK7SD.js";import"./index-CnuUXHea.js";import"./index-C_nlngWN.js";import"./index-D_yNDnhr.js";import"./index-DXUHUv71.js";import"./IconDesign-DXd8PPVF.js";import"./filter-yxN8PX9Y.js";import"./group-2-DoGrMQPN.js";import"./sort-descending-C5L9Lo2Z.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DprFiL_z.js";import"./utils-BPFvLxt3.js";import"./index-DFCmj0mv.js";import"./index-DyfLxNJ7.js";import"./index-C4EDa0au.js";import"./navigation-down-arrow-BuZsOLrp.js";import"./navigation-right-arrow-CGDJY1aB.js";import"./navigation-right-arrow-GAvN6s_t.js";import"./useCurrentTheme-GbCKdsaA.js";import"./index-C5a3zBKu.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BmVGl_xM.js";import"./paper-plane-C4HjhJCN.js";import"./index-BeDOg-Ts.js";import"./less-m02jLT-2.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
