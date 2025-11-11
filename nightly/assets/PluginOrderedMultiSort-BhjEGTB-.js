import{j as e}from"./iframe-BzFFzKD_.js";import{useMDXComponents as i}from"./index-CZpqZls8.js";import{I as a,F as m}from"./CommandsAndQueries-98tICPmn.js";import{M as s,C as p}from"./blocks-Dfn8aDA2.js";import"./Tag-Du7Hh6Mn.js";import"./index-BnnU1inb.js";import{C as l}from"./ControlsWithNote-BkyUdb-g.js";import"./copy-CYosl6Ho.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BlawaMrj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-s8GS1odQ.js";import"./index-CjTZ8O9p.js";import"./index-BTogfKzr.js";import"./Link-CMUJ7C_U.js";import"./index-DDykH0pl.js";import"./index-DXrTedKP.js";import"./index-DWEvXFon.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DUUeXWCw.js";import"./addCustomCSSWithScoping-26WgEUoU.js";import"./index-BkRjFulW.js";import"./information-ItcJqxXi.js";import"./sys-enter-2-Y1mMTef-.js";import"./alert-BnuKtxZV.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CJxmxwdy.js";import"./delete-DvlzQjzU.js";import"./settings-BtDwJkQy.js";import"./NoData-RN4fv0I6.js";import"./IllustratedMessage-22prqt92.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-CuqFQkP0.js";import"./index-BZwhzjSN.js";import"./index-DeWW5-Td.js";import"./slim-arrow-down-CQstKHsd.js";import"./Input-DWRBGriJ.js";import"./ResponsivePopoverCommon.css-Dh0AbpYk.js";import"./ValueStateMessage.css-D95mkauN.js";import"./Suggestions.css-B-ge1jIP.js";import"./ListBoxItemGroupTemplate-Duu4RMpx.js";import"./ComboBoxItemGroup-C3kd4aNe.js";import"./ListItemBaseTemplate-25qboxfo.js";import"./Token-D-De-6_k.js";import"./ScrollEnablement-CN1jgR1Z.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CKrmQxvq.js";import"./ToggleButton-CD3XCDqC.js";import"./SuggestionItem-DfQZW9Bt.js";import"./index-DlK_9Aw2.js";import"./Option-DGgXyVE9.js";import"./index-kQWOveMj.js";import"./SegmentedButton-BD5wjYvX.js";import"./index-DPt3z0Xm.js";import"./Select-Biz1LhyR.js";import"./InvisibleMessage-DAn4ghj3.js";import"./slim-arrow-down-Dy8U4h34.js";import"./index-BpbvvaJA.js";import"./index-BNuehqek.js";import"./index-T2JpUHkX.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CXv10JXZ.js";import"./group-2-BaX0RAg9.js";import"./sort-descending-C1aqy8QD.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-HIY5U8Xd.js";import"./utils-BOfme5mX.js";import"./index-DEFnuKWD.js";import"./index-BqaTO31J.js";import"./index-lM2ViReC.js";import"./navigation-down-arrow-DyEHJO4J.js";import"./navigation-right-arrow-DOrImmdb.js";import"./navigation-right-arrow-XetH_fh1.js";import"./useCurrentTheme-KwChezx1.js";import"./IndicationColor-DVw-fSM_.js";import"./index-5mNQu9kN.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CtHY0-jf.js";import"./paper-plane-BYoF07I-.js";import"./index-BVE1VzVn.js";import"./less-BAX0c4ch.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
