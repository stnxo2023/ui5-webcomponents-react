import{j as e}from"./iframe-BSil-P7u.js";import{useMDXComponents as i}from"./index-vt-1HXZR.js";import{I as a,F as m}from"./CommandsAndQueries-D6srY1_t.js";import{M as s,C as p}from"./blocks-DAd1jcGX.js";import"./Tag-C9JFY3U3.js";import"./index-DHsON_5K.js";import{C as l}from"./ControlsWithNote-IzVnpcp3.js";import"./copy-CwHd1VH0.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Bxr1oTwn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-FBl5xz3h.js";import"./index-TzMEaDq9.js";import"./index-CoIXLnKn.js";import"./Link-qL_T98pU.js";import"./index-DYtE3L5B.js";import"./index-BEx2FW11.js";import"./index-DzdENY0T.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bp27VxQp.js";import"./addCustomCSSWithScoping-BLX4O9b7.js";import"./index-CM8rBgl_.js";import"./information-BmoL6a_m.js";import"./sys-enter-2-CRjOI67W.js";import"./alert-B93IgYs6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CoH36o8l.js";import"./delete-BI-937IP.js";import"./settings-CuEyn2tk.js";import"./NoData-CGFrF-GJ.js";import"./IllustratedMessage-bk9jckQm.js";import"./i18n-defaults-BTYpTGpY.js";import"./parameters-bundle.css-B37gDvcF.js";import"./NoFilterResults-DJ4x8n8R.js";import"./index-DM1cWKd-.js";import"./index-BAOnjwgh.js";import"./slim-arrow-down-CceGcM8g.js";import"./Input-Brq604ts.js";import"./ResponsivePopoverCommon.css-D6ugJ8J6.js";import"./ValueStateMessage.css-Bl9ehnfn.js";import"./Suggestions.css-DL5LMP4f.js";import"./ListBoxItemGroupTemplate-DTEnhQcP.js";import"./ComboBoxItemGroup-D278rfHD.js";import"./ListItemBaseTemplate-XePtjjIP.js";import"./Token-BjQ1h7zj.js";import"./ScrollEnablement-BseTvxzn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Co9OiWLE.js";import"./ToggleButton-CucfFvuo.js";import"./SuggestionItem-D-NzBmhj.js";import"./index-x2opHf5c.js";import"./Option-D_fhd8yQ.js";import"./index-0XEIKLHq.js";import"./SegmentedButton-CxPgyCvs.js";import"./index-B4ETCzn3.js";import"./Select-DIzgGRIh.js";import"./InvisibleMessage-8W7RFh9p.js";import"./slim-arrow-down-CEMmPYc4.js";import"./index-dpHfrh8L.js";import"./index-B81hxV8d.js";import"./index-BSCj-pol.js";import"./index-BxBIGX03.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DDvkMb7O.js";import"./group-2-B3KKCYd6.js";import"./sort-descending-xaSeLobU.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CwWYxgbu.js";import"./utils-BC-DJmvs.js";import"./index-BosJcweM.js";import"./index-BDjwx27j.js";import"./index-BBoe6R2N.js";import"./navigation-down-arrow-DZHe0qjz.js";import"./navigation-right-arrow-B-M3EsUK.js";import"./navigation-right-arrow-Caxsuv4H.js";import"./useCurrentTheme-BWoqnafC.js";import"./index-BbeYWMcG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B8wJR6kV.js";import"./paper-plane-CJEv3WjG.js";import"./index-CBHCu-XZ.js";import"./less-Cu4-mAFi.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
