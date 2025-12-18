import{j as e}from"./iframe-DE5WqRSI.js";import{useMDXComponents as i}from"./index-DVGykmsi.js";import{I as a,F as m}from"./CommandsAndQueries-CT_qy-L6.js";import{M as s,C as p}from"./blocks-CybNjylu.js";import"./Tag-DXduP7K6.js";import"./index-BqsIcBTd.js";import{C as l}from"./ControlsWithNote-CAP3lJcn.js";import"./copy-CmTK1gpG.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-C3OL6pAr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C3HZg113.js";import"./index-Bo0MdSU9.js";import"./index-CxE79HQo.js";import"./Link-BcyJtysS.js";import"./index-EXtiqGa7.js";import"./index-DF_fIzZz.js";import"./index-BoscFH1P.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CURCJNNc.js";import"./addCustomCSSWithScoping-CHzs5Kt8.js";import"./index-C1194UdL.js";import"./information-CfYTqUOR.js";import"./sys-enter-2-Dqu1QcV8.js";import"./alert-Dotce8LG.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D8bIdqWY.js";import"./delete-DoYichJ9.js";import"./settings-CZU_ZJ1W.js";import"./NoData-CZpLmT-x.js";import"./IllustratedMessage-LENPWSEm.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-BgR1eZwE.js";import"./index-B3Xqsb1Q.js";import"./index-R106sdPA.js";import"./slim-arrow-down-C4VKqtzG.js";import"./Input-DlArSVkv.js";import"./ResponsivePopoverCommon.css-Cq6LxgIa.js";import"./ValueStateMessage.css-Cn051aSB.js";import"./Suggestions.css-Bdq3EXqW.js";import"./ListBoxItemGroupTemplate-CyrDSXZo.js";import"./ComboBoxItemGroup-TKl3BoRz.js";import"./ListItemBaseTemplate-B03-wmFo.js";import"./Token-Dg7qiry7.js";import"./ScrollEnablement-B1rg2zRK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CFNpTG6Z.js";import"./ToggleButton-Zt7gvlFv.js";import"./SuggestionItem-D5tKUGZ0.js";import"./index-DiH8R-tE.js";import"./Option-CXIWrKVD.js";import"./index-BQ0OFhZj.js";import"./SegmentedButton-CcDlKKiv.js";import"./index-C0g5pUuk.js";import"./Select-BvpJxR_5.js";import"./InvisibleMessage-BlCBqyND.js";import"./slim-arrow-down-DEwJBIUS.js";import"./index-mUAstY9h.js";import"./index-B9aDXKRc.js";import"./index-CqMTF644.js";import"./index-BcVPuJ_0.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DttNweVC.js";import"./group-2-C61vdaG7.js";import"./sort-descending-MtSyw_8y.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CUv9Snax.js";import"./utils-B-5aInVE.js";import"./index-DcmdwFOG.js";import"./index-CIbFjeJU.js";import"./index-kbflT9HY.js";import"./navigation-down-arrow-D2MASbC_.js";import"./navigation-right-arrow-DYEDqb8B.js";import"./navigation-right-arrow-Ba2Y3uGG.js";import"./useCurrentTheme-CKsG-a7q.js";import"./index-DnEL084z.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BThYFQYx.js";import"./paper-plane-CxhIT5X8.js";import"./index-CyZOZ66H.js";import"./less-BXwZj-_-.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
