import{j as e}from"./iframe-jtGuD92m.js";import{useMDXComponents as i}from"./index-DyF6GLYl.js";import{I as a,F as m}from"./CommandsAndQueries-BgMZZCcl.js";import{M as s,C as p}from"./blocks-BL9sBKUV.js";import"./Tag-Dpj_ZR-y.js";import"./index-l_17qA1t.js";import{C as l}from"./ControlsWithNote-BaJ4jHGx.js";import"./copy-Cn3-Cbk_.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-5Tk_lYY6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-6t-0TKBV.js";import"./index-D83RH-Pe.js";import"./index-BEvnvfMN.js";import"./Link-DNXoJofm.js";import"./index-C31MI_yM.js";import"./index-B03g8ajZ.js";import"./index-DtTTXQKH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BUd6X6mW.js";import"./addCustomCSSWithScoping-Bli4C3Yg.js";import"./index-DWeXgmyB.js";import"./information-DbZkMEoB.js";import"./sys-enter-2-K-A7BdiC.js";import"./alert-Csq7QRRu.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BWnXpevw.js";import"./delete-91MAIkTv.js";import"./settings-D-bW6kuF.js";import"./NoData-CzzIdr3g.js";import"./IllustratedMessage-C9-M-hdZ.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DqqtA8_P.js";import"./index-B3tdBbEs.js";import"./index-DHuy06ot.js";import"./slim-arrow-down-BXWYLP4S.js";import"./Input-CYGHSySa.js";import"./ResponsivePopoverCommon.css-CWePAE7F.js";import"./ValueStateMessage.css-BFBzO_xV.js";import"./Suggestions.css-DBI26x47.js";import"./ListBoxItemGroupTemplate-CsqKmRRZ.js";import"./ComboBoxItemGroup-CIWUs4af.js";import"./ListItemBaseTemplate-BqSygcyO.js";import"./Token-BHrN57pC.js";import"./ScrollEnablement-NU8w7nTv.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DhTllij2.js";import"./ToggleButton-hXSjriuS.js";import"./SuggestionItem-Dtkve2MA.js";import"./index-Cvp7efxq.js";import"./Option-Dcdi45sN.js";import"./index-DmozDhUV.js";import"./SegmentedButton-CQ1w3cR3.js";import"./index-Dwk6FeKM.js";import"./Select-CY97Kj_H.js";import"./InvisibleMessage-CjY7eeJ7.js";import"./slim-arrow-down-D05WhDba.js";import"./index-CCzWQSlv.js";import"./index-Cp9jM2Nb.js";import"./index-LE4ERw5Y.js";import"./index-C0ZVEY98.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D2cn45G_.js";import"./group-2-ByAZ2_iD.js";import"./sort-descending-BB9cOvuL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CTCTysJ9.js";import"./utils-DdgWIhzU.js";import"./index-BGvGmVJ6.js";import"./index-BUu3tjYA.js";import"./index-DrECakWL.js";import"./navigation-down-arrow-CGa1rkR6.js";import"./navigation-right-arrow-inY4KsbT.js";import"./navigation-right-arrow-CDKzHRuO.js";import"./useCurrentTheme-BdPm8Riw.js";import"./index-Cd3rxfas.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-_IURFj1j.js";import"./paper-plane-BU6zGRJF.js";import"./index-CX971ue9.js";import"./less-CRl1RWOh.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
