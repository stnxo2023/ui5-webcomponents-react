import{j as e}from"./iframe-5Ai_0qn6.js";import{useMDXComponents as i}from"./index-B7f66Dmz.js";import{I as a,F as m}from"./CommandsAndQueries-JQTwJq8J.js";import{M as s,C as p}from"./blocks-B56i3DPI.js";import"./Tag-COMV1q97.js";import"./index-DmI0q2i9.js";import{C as l}from"./ControlsWithNote-Dmf2RZYl.js";import"./copy-DNLRE2WL.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Cly1OFy0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ce1oa-YM.js";import"./index-q1btkUh6.js";import"./index-BRDhzPf9.js";import"./Link-D--4KGaX.js";import"./index-B-uO6_4g.js";import"./index-D661wfa7.js";import"./index-Bq31yNzK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-COAGvdy_.js";import"./addCustomCSSWithScoping-DYNqCkls.js";import"./index-BkdUYSuU.js";import"./information-D04M7OHu.js";import"./sys-enter-2-1BgXqzpT.js";import"./alert-BhFUrxxf.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DptVgLxH.js";import"./delete-BKhqWRT0.js";import"./settings-C7ek-hnD.js";import"./NoData-wohXKQfm.js";import"./IllustratedMessage-CPRROUzO.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-DbUMx87M.js";import"./index-CWkjXrf_.js";import"./index-DZC-KX_7.js";import"./slim-arrow-down-CVsfCMuZ.js";import"./Input-irwstt8P.js";import"./ResponsivePopoverCommon.css-C3FRXGqL.js";import"./ValueStateMessage.css-CE7fKOnd.js";import"./Suggestions.css-Dq5Dns8R.js";import"./ListBoxItemGroupTemplate-DBU-Amvn.js";import"./ComboBoxItemGroup-Bq4VJjC4.js";import"./ListItemBaseTemplate-D2M6voVm.js";import"./Token-PzQXz8IW.js";import"./ScrollEnablement-BpTg3nyv.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BzBCEa9G.js";import"./ToggleButton-ietgb841.js";import"./SuggestionItem-DlAE1lsO.js";import"./index-DEaM6HA1.js";import"./Option-9p-hiMpG.js";import"./index-br9mqeEo.js";import"./SegmentedButton-AE0tpI52.js";import"./index-BFBqEJBM.js";import"./Select-DeIsnLIh.js";import"./InvisibleMessage-CmGdQZT2.js";import"./slim-arrow-down-ZE4Gr-dz.js";import"./index-B-aNjF0L.js";import"./index-CoK8JjT_.js";import"./index-O_J6wUes.js";import"./index-Cyt6o_O8.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BpA9S_eu.js";import"./group-2-DpjVfqgj.js";import"./sort-descending-BGJJks9P.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bx98osqc.js";import"./utils-BOfVxA4M.js";import"./index-Cb8kvc5z.js";import"./index-S4uAEFIo.js";import"./index-DwAuXlyS.js";import"./navigation-down-arrow-DfJbyOqR.js";import"./navigation-right-arrow-B-Vhmt5L.js";import"./navigation-right-arrow-D1zxr9Vh.js";import"./useCurrentTheme-DiluXBTF.js";import"./index-CcKvpDiG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B0oo9ftu.js";import"./paper-plane-C_f61Wz0.js";import"./index-Dae_Omsb.js";import"./less-fRAvhj5N.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
