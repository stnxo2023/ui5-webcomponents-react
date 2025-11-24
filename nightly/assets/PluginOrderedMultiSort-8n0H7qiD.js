import{j as e}from"./iframe-8VKaAWwE.js";import{useMDXComponents as i}from"./index-BiQxBi02.js";import{I as a,F as m}from"./CommandsAndQueries-Br8gYKlc.js";import{M as s,C as p}from"./blocks-D4P1btFV.js";import"./Tag-CAEVBdQF.js";import"./index-BMIVJ8fC.js";import{C as l}from"./ControlsWithNote-JxH1w4ac.js";import"./copy-GTYDTz4M.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BERQNFQP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DeQFsrbp.js";import"./index-CG1tJmDp.js";import"./index-DjKsiZpu.js";import"./Link-Br8LM296.js";import"./index-Wr_VU4vx.js";import"./index--0IHLSpo.js";import"./index-G7mYvFlh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DS15uRtL.js";import"./addCustomCSSWithScoping-gm53ZH9E.js";import"./index-Bd8LmHtw.js";import"./information-Dxy_OYjg.js";import"./sys-enter-2-B9S9TtfQ.js";import"./alert-CW57s-T2.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DSRTNUO-.js";import"./delete-DnWD3Mq-.js";import"./settings-VKt-L-yH.js";import"./NoData-DDfv6RCL.js";import"./IllustratedMessage-Dr8guHqM.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-CpUJ40_F.js";import"./index-BVZi_tVP.js";import"./index-_vy-bJhX.js";import"./slim-arrow-down-CulswK7d.js";import"./Input-B5Wpiidi.js";import"./ResponsivePopoverCommon.css-B4U_I0dH.js";import"./ValueStateMessage.css-cYz9FUF7.js";import"./Suggestions.css-Z6CWuri5.js";import"./ListBoxItemGroupTemplate-C1lRcpbG.js";import"./ComboBoxItemGroup-C-hUUmdm.js";import"./ListItemBaseTemplate-BmD2uZ0g.js";import"./Token-BQ7R6PHh.js";import"./ScrollEnablement-CjnCh3Bs.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CACymtkK.js";import"./ToggleButton-u0UnHeJY.js";import"./SuggestionItem-C7KEv8FG.js";import"./index-CMbxs2W4.js";import"./Option-DOmelVgu.js";import"./index-B9H6XpWs.js";import"./SegmentedButton-3N38bHb8.js";import"./index-B8y-Fmz6.js";import"./Select-DtzGLi_j.js";import"./InvisibleMessage-CPZrrpNT.js";import"./slim-arrow-down-sBLB8zju.js";import"./index-DVQVneSw.js";import"./index-v7aOm5Jv.js";import"./index-C-Q_6JkP.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DjgLpVIw.js";import"./group-2-lPSSe0zs.js";import"./sort-descending-CS7wmhm4.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C-aC7Trz.js";import"./utils-96nz7lxB.js";import"./index-CAXoANqy.js";import"./index-JF3sM6PG.js";import"./index-Dw_SJKgF.js";import"./navigation-down-arrow-POZr2Ly1.js";import"./navigation-right-arrow-BStxgVlV.js";import"./navigation-right-arrow-BQknt-RQ.js";import"./useCurrentTheme-Dvt6ch19.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BRpZcEjH.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-8d_BW4ml.js";import"./paper-plane-BwV277z1.js";import"./index-CUAVuKcw.js";import"./less-BLTcp359.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
