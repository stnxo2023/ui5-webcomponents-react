import{j as e}from"./iframe-DtedCjfy.js";import{useMDXComponents as i}from"./index-CHHTCtpJ.js";import{I as a,F as m}from"./CommandsAndQueries-CefMw8Tu.js";import{M as s,C as p}from"./blocks-B76JpcnK.js";import"./Tag-UovGhxml.js";import"./index-DKt9EK6E.js";import{C as l}from"./ControlsWithNote-U2_-yu-i.js";import"./copy-YvtV-MwK.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DaFgOxon.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DX3eFopX.js";import"./index-DeLaWQId.js";import"./index-B_rkL0I7.js";import"./Link-DZXvuASQ.js";import"./index-CYjF7K0n.js";import"./index-BwT8h001.js";import"./index-CSzpUMpn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BDJ7Ajcv.js";import"./addCustomCSSWithScoping-ClguXaul.js";import"./index-Np4eK1ew.js";import"./information-Dgg1zzf6.js";import"./sys-enter-2-BS_wAjUh.js";import"./alert-DCJXRL-H.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CYN8eos6.js";import"./delete-C1Wyhlth.js";import"./settings-CptqO7gs.js";import"./NoData-F4hYh7Ek.js";import"./IllustratedMessage-C5F6SUC6.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BJoCUYm7.js";import"./index-s9vdjwfk.js";import"./index-D10KU1Ta.js";import"./slim-arrow-down-B5bCreHk.js";import"./Input-Dl-5sLwa.js";import"./ResponsivePopoverCommon.css-82X5LMAI.js";import"./ValueStateMessage.css-BmfTYgl7.js";import"./Suggestions.css-D0hxhwDs.js";import"./ListBoxItemGroupTemplate-DVxNdcM2.js";import"./ComboBoxItemGroup-DLcad7ol.js";import"./ListItemBaseTemplate-vodsce4v.js";import"./Token-dHSL_sqK.js";import"./ScrollEnablement-CJ3-LAJa.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BKpRxXOc.js";import"./ToggleButton-D-pV1m-u.js";import"./SuggestionItem-DNzNqXr6.js";import"./index-CX53ZjFD.js";import"./Option-1uoBZugc.js";import"./index-CPryGVXA.js";import"./SegmentedButton-aUT_BGJH.js";import"./index-DOcX0ZLa.js";import"./Select-Dv5jHc6p.js";import"./InvisibleMessage-CMofOcZ8.js";import"./slim-arrow-down-DO0xZWHM.js";import"./index-DgAPvGu_.js";import"./index-BTiCeD2_.js";import"./index-ymNZsoic.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cm-ygou4.js";import"./group-2-DGbAk6nr.js";import"./sort-descending-C2Qum4wS.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Doqujavl.js";import"./utils-C_iBhdzJ.js";import"./index--q_AhH3V.js";import"./index-DWer0OoI.js";import"./index-DR8LVVUU.js";import"./navigation-down-arrow-DjGJNutR.js";import"./navigation-right-arrow-CXzg5gO0.js";import"./navigation-right-arrow-C4yN2OeR.js";import"./useCurrentTheme-B3YW7Vit.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CAokvEvK.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BGj6VAfy.js";import"./paper-plane-tyKPIBAt.js";import"./index-C0v4tUQf.js";import"./less-CM7xB0tS.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
