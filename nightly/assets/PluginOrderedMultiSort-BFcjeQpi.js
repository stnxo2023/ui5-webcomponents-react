import{j as e}from"./iframe-D7LtZGbE.js";import{useMDXComponents as i}from"./index-DPe-hK9n.js";import{I as a,F as m}from"./CommandsAndQueries-16gk4cWC.js";import{M as s,C as p}from"./blocks-pr2PodND.js";import"./Tag-CAGvJLHq.js";import"./index-8IYrQOsB.js";import{C as l}from"./ControlsWithNote-BGB5-nBh.js";import"./copy-irE93QLw.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-B9VjvtYg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CTJj7zal.js";import"./index-CQrPSC4r.js";import"./index-DCDoujQt.js";import"./Link-DR-Yc_uT.js";import"./index-D9f7QWgZ.js";import"./index-7y0cv8s8.js";import"./index-B5kVVFk8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D0rw92sk.js";import"./addCustomCSSWithScoping-Q6oWMzUs.js";import"./index-nlmJusRV.js";import"./information-DGR9jLKW.js";import"./sys-enter-2-pukk9ibo.js";import"./alert-ltuZ9R-x.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C2wuCET-.js";import"./delete-BsnXpo15.js";import"./settings-18EA03mw.js";import"./NoData-DD1I2RW2.js";import"./IllustratedMessage-GNJtNDK1.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DbgaenG_.js";import"./index-Cvm9n84J.js";import"./index-CONzwepJ.js";import"./slim-arrow-down-CSg5EB5A.js";import"./Input-smzufGTw.js";import"./ResponsivePopoverCommon.css-BuYzr302.js";import"./ValueStateMessage.css-B17FpIm5.js";import"./Suggestions.css-D7t7e06T.js";import"./ListBoxItemGroupTemplate-D6TYIJcU.js";import"./ComboBoxItemGroup-DVpFxRma.js";import"./ListItemBaseTemplate-DPI4cuqZ.js";import"./Token-DsqCbMj8.js";import"./ScrollEnablement-BHoJsn2l.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DJhw0qF_.js";import"./ToggleButton-c8Z5hSFG.js";import"./SuggestionItem-Ccdg184n.js";import"./index-CyQ4JYW2.js";import"./Option-DijjA4Vk.js";import"./index-DtP90_Pc.js";import"./SegmentedButton-6lreoM-F.js";import"./index-DvCsGyO6.js";import"./Select-BbkKcK4f.js";import"./InvisibleMessage-Cv3DnnE8.js";import"./slim-arrow-down-CRqqmTAd.js";import"./index-DWNwOieW.js";import"./index-Ce0fYx_h.js";import"./index-DOsdkp8m.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BcZJAP96.js";import"./group-2-MIHTxi8_.js";import"./sort-descending-BXMcQwtn.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-1VTd4aoY.js";import"./utils-aOFiSUxD.js";import"./index-Q9bXyf1m.js";import"./index-BpcjvSLQ.js";import"./index-B66V5vGh.js";import"./navigation-down-arrow-CJtYN5Co.js";import"./navigation-right-arrow-IFUe67pQ.js";import"./navigation-right-arrow-LlpQSEVq.js";import"./useCurrentTheme-D1sCc5b1.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DZFiI2KH.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BMbyDpGC.js";import"./paper-plane-C_ZVdgGb.js";import"./index-CdvQl7dB.js";import"./less-DCpc4-xW.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
