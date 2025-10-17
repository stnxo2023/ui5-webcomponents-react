import{j as e}from"./iframe-28qsVqoa.js";import{useMDXComponents as i}from"./index-BFNvmwXu.js";import{I as a,F as m}from"./CommandsAndQueries-BfKaGYgk.js";import{M as s,C as p}from"./blocks-BNVDqSKu.js";import"./Tag-CLPhNAjj.js";import"./index-SsxmriuV.js";import{C as l}from"./ControlsWithNote-Bp2hBOMg.js";import"./copy-D8k23l_a.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Cg1NtmUY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BaQxmIN-.js";import"./index-QZ0q645F.js";import"./index-CWduGffo.js";import"./Link-DXcAF61b.js";import"./index-BSTD78ro.js";import"./index-Ca0DqgDv.js";import"./index-DL1oyV4a.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BDZLmGFA.js";import"./addCustomCSSWithScoping-BQde53eT.js";import"./index-CLPTUIfm.js";import"./information-DHvzqwV5.js";import"./sys-enter-2-BKUUSCT4.js";import"./alert-D4ecQurj.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-COPcPnn5.js";import"./delete-D6n8l8UK.js";import"./settings-KfG2DgI0.js";import"./NoData-BHcK-Aul.js";import"./IllustratedMessage-CGHyK5ha.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-BFsCnHXw.js";import"./index-CK3Laxke.js";import"./index-CxlikhWp.js";import"./slim-arrow-down-2lG3bKMG.js";import"./Input-CrBqW3Ot.js";import"./ResponsivePopoverCommon.css-DsOR_HfQ.js";import"./ValueStateMessage.css-Dvyiq9XB.js";import"./Suggestions.css-CdBr9Iyq.js";import"./ListBoxItemGroupTemplate-D6s9h6mp.js";import"./ComboBoxItemGroup-BSE1TSV-.js";import"./ListItemBaseTemplate-DQ-a9maQ.js";import"./Token-Bg0__rMF.js";import"./ScrollEnablement-D20yGFFj.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BH9JzmU2.js";import"./ToggleButton-DnstKIPi.js";import"./SuggestionItem-BYGj_peP.js";import"./index-C5RB-L2O.js";import"./Option-CBaHN4ua.js";import"./index-DTixF4LF.js";import"./SegmentedButton-BE8yfTm6.js";import"./index-CQtjld3i.js";import"./Select-CdXPeKkl.js";import"./InvisibleMessage-c9pOv6Ax.js";import"./slim-arrow-down-nj_KPop2.js";import"./index-Ak3FL7pI.js";import"./index-D9_Z31ZG.js";import"./index-Bq1PEsv_.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Ch2Rtr4k.js";import"./group-2-Ca0UP8Bj.js";import"./sort-descending-D3OEeGWP.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CD3TL1kj.js";import"./utils-DHg3ikqn.js";import"./index-CC-MGg2L.js";import"./index-CjppD4GJ.js";import"./index-BzTqkFjE.js";import"./navigation-down-arrow-DwBdfM0k.js";import"./navigation-right-arrow-CasD3Mbg.js";import"./navigation-right-arrow-FCQDrhAi.js";import"./useCurrentTheme-67g0YI4J.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BFx0BUYp.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B2mIAyDi.js";import"./paper-plane-CpCfXY5u.js";import"./index-CGLvNCn3.js";import"./less-4GZTBVpK.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
