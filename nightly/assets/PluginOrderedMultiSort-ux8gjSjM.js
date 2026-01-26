import{j as e}from"./iframe-vvFzJQsm.js";import{useMDXComponents as i}from"./index-mWjr9AFM.js";import{I as a,F as m}from"./CommandsAndQueries-8pSfE60h.js";import{M as s,C as p}from"./blocks-COsbTFiZ.js";import"./Tag-CSxd9Vy9.js";import"./index-CdSwAr1T.js";import{C as l}from"./ControlsWithNote-B3kpKevA.js";import"./copy-qs9aVbQg.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-B3ECgz-E.js";import"./preload-helper-PPVm8Dsz.js";import"./index-FWmQFiva.js";import"./index-DSMhm57i.js";import"./index-keBzjxCB.js";import"./Link-hAW6WURd.js";import"./index-CYjg-3sd.js";import"./index-bfJ02BDw.js";import"./index-BBX1dqjw.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BmD8Hqdt.js";import"./addCustomCSSWithScoping-Px-H63QY.js";import"./index-Ck5nT1M9.js";import"./information-CWYm1ZbR.js";import"./sys-enter-2-kpgYGCQC.js";import"./alert-Ba0jfTcX.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C9kK_LVq.js";import"./delete-D4XAzPaO.js";import"./settings-C8va5o-b.js";import"./NoData-5jtjQ5y7.js";import"./IllustratedMessage-B8VwOS63.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BPC0yP-u.js";import"./index-DRbu4jj1.js";import"./index-CLL1C2RL.js";import"./slim-arrow-down-D1045Dej.js";import"./Input-Bdz4QBIo.js";import"./ResponsivePopoverCommon.css-Baj0Epwl.js";import"./ValueStateMessage.css-4BAUMJYg.js";import"./Suggestions.css-3p3I60pl.js";import"./ListBoxItemGroupTemplate-BpiHCZsA.js";import"./ComboBoxItemGroup-BfSjrPkV.js";import"./ListItemBaseTemplate-B5P3HOKd.js";import"./Token-nR3AU3yg.js";import"./ScrollEnablement-DGKqDpbT.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bq3jzA--.js";import"./ToggleButton-D2c9Ioes.js";import"./SuggestionItem-D6PBycsg.js";import"./index-p75UYelA.js";import"./Option-m73man2m.js";import"./index-CEWT0FVs.js";import"./SegmentedButton-BHh8HeGl.js";import"./index-C5N6WMqm.js";import"./Select-Cvi-Tl5M.js";import"./InvisibleMessage-DfdHEKSG.js";import"./slim-arrow-down-BxUM_kC3.js";import"./index-Dbxl2QgS.js";import"./index-DNtC8pK0.js";import"./index-DkgHrAaT.js";import"./index-HICqIhxY.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dvyr9bkH.js";import"./group-2-CTXNR9Fa.js";import"./sort-descending-D9vZzYoL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DNIS43S0.js";import"./utils-DnHyYccE.js";import"./index-naNPIt8g.js";import"./index-lJc2O7eM.js";import"./index-CchiWT1q.js";import"./navigation-down-arrow-B3V1489R.js";import"./navigation-right-arrow-Dach_1y0.js";import"./navigation-right-arrow-BeI9ctVu.js";import"./useCurrentTheme-DNXu84CQ.js";import"./index-lCZJ1S5W.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BvMNZh4_.js";import"./paper-plane-wgrrkunQ.js";import"./index-DGYtHBaB.js";import"./less-D8pAxZdo.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
