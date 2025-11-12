import{j as e}from"./iframe-m3wgL8DO.js";import{useMDXComponents as i}from"./index-BDA4Q--W.js";import{I as a,F as m}from"./CommandsAndQueries-DJJG77Q0.js";import{M as s,C as p}from"./blocks-CkTarMgO.js";import"./Tag-tSZf1-5X.js";import"./index-XwYlDB9P.js";import{C as l}from"./ControlsWithNote-Bfr8xnVJ.js";import"./copy-CODhXho7.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-uoQ6fw54.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BhmtIGIH.js";import"./index-D9MBfHQe.js";import"./index-CVyBcJoi.js";import"./Link-BBA1fpnp.js";import"./index-CLINieEb.js";import"./index-00DfGzTS.js";import"./index-B7uA3u-p.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C6f_OpFu.js";import"./addCustomCSSWithScoping-D1ffFiBE.js";import"./index-BSNngnc7.js";import"./information-DsCCxR_j.js";import"./sys-enter-2-3GVzqOhh.js";import"./alert-CYqVZ7NL.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CM97FBcw.js";import"./delete-Bf921CWr.js";import"./settings-BYe7f3tO.js";import"./NoData-Dh7joJIl.js";import"./IllustratedMessage-CxQCJ2ay.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-CTWxVoyD.js";import"./index-ljJh2mXy.js";import"./index-DdE1XOTZ.js";import"./slim-arrow-down-8v6NvsKW.js";import"./Input-Cs15w5r3.js";import"./ResponsivePopoverCommon.css-C9hxCvuP.js";import"./ValueStateMessage.css-z6jg6mGY.js";import"./Suggestions.css-DbjXinA2.js";import"./ListBoxItemGroupTemplate-9uh1HRli.js";import"./ComboBoxItemGroup-BqRSt8o0.js";import"./ListItemBaseTemplate-BAr1QC4e.js";import"./Token-DRcSqql8.js";import"./ScrollEnablement-Dlq8aT82.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DGziFzMo.js";import"./ToggleButton-sEBB_MTe.js";import"./SuggestionItem-Cc8TNMCR.js";import"./index-CxG5u9XF.js";import"./Option-QpRjKkO3.js";import"./index-CXyubNwj.js";import"./SegmentedButton-BflLR7ZS.js";import"./index-D17ZhWQV.js";import"./Select-Cp0iaTMd.js";import"./InvisibleMessage-BUt-p4eg.js";import"./slim-arrow-down-BxbuKxeo.js";import"./index-CKvze9UP.js";import"./index-DaG3SG7b.js";import"./index-Bt_KiuWe.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BM91Z3C5.js";import"./group-2-BwsR6O4m.js";import"./sort-descending-BqWoToib.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Cl9chJaT.js";import"./utils-DiSEeJmV.js";import"./index-vic8-m6V.js";import"./index-J2w0B87P.js";import"./index-Bcls0r_S.js";import"./navigation-down-arrow-DD0yo9R6.js";import"./navigation-right-arrow-D4MH6EAI.js";import"./navigation-right-arrow-Vgro8iwV.js";import"./useCurrentTheme-Cx5Llmvy.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BW_d6Mec.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-NbRukm78.js";import"./paper-plane-Bod-WMHa.js";import"./index-CIqeAo6O.js";import"./less-jU3EhTke.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
