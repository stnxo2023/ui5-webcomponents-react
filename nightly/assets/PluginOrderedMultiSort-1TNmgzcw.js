import{j as e}from"./iframe-D4Wcvdi9.js";import{useMDXComponents as i}from"./index-CyoSS2tn.js";import{I as a,F as m}from"./CommandsAndQueries-CHCF8nk5.js";import{M as s,C as p}from"./blocks-BZVDlLxv.js";import"./Tag-C8CPshPM.js";import"./index-C0Cp4coA.js";import{C as l}from"./ControlsWithNote-BsM9lLzJ.js";import"./copy-ByuSrISy.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DvH8YaNx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BfU-6WHW.js";import"./index-DRGYhnMd.js";import"./index-BoPvUO7L.js";import"./Link-DRjrHvv7.js";import"./index-C0aU4sgS.js";import"./index-DyEesLqq.js";import"./index-B5YCmd_L.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C_EKP5sQ.js";import"./addCustomCSSWithScoping-B3blWPk3.js";import"./index-iYqBFHCz.js";import"./information-BV6B4i17.js";import"./sys-enter-2-Be3rvkTR.js";import"./alert-Bj2TJcB4.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bg9NkTF8.js";import"./delete-Dan4xo-W.js";import"./settings-Dc0Ay2Ol.js";import"./NoData-CPHXEiea.js";import"./IllustratedMessage-CqSfiYLz.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-Cc_7hoVU.js";import"./index-hA8G-1F0.js";import"./index-umARLA2o.js";import"./slim-arrow-down-BQ4prS5H.js";import"./Input-Dw523AWA.js";import"./ResponsivePopoverCommon.css-DXXW23Pq.js";import"./ValueStateMessage.css-CGX3TujJ.js";import"./Suggestions.css-yWvjMCYt.js";import"./ListBoxItemGroupTemplate-BXg8ZZhL.js";import"./ComboBoxItemGroup-BWf21BRm.js";import"./ListItemBaseTemplate-BtxWLyBh.js";import"./Token-CJew2pIR.js";import"./ScrollEnablement-B_7Hn9ne.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B7i9H2_f.js";import"./ToggleButton-tkY9KnFv.js";import"./SuggestionItem-C-IyQ9GM.js";import"./index-CalwvC2l.js";import"./Option-o--nSFBp.js";import"./index-B4qdjTS3.js";import"./SegmentedButton-Dlsij53P.js";import"./index-Bs-Aw581.js";import"./Select-G5EwzUhf.js";import"./InvisibleMessage-z6pIlI85.js";import"./slim-arrow-down-BwasBD_7.js";import"./index-CbPN-lRT.js";import"./index-DZDIO8XF.js";import"./index-BNR4hbu3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-AltxkYtY.js";import"./group-2-DCKEVdUW.js";import"./sort-descending-D6BynqyS.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C_DH5grj.js";import"./utils-BSZp2_tG.js";import"./index-Ddv6G0qJ.js";import"./index-MsmJ52zV.js";import"./index-BLw-L2xS.js";import"./navigation-down-arrow-CiJ3nX35.js";import"./navigation-right-arrow-CZ9bddNc.js";import"./navigation-right-arrow-B9tYbly4.js";import"./useCurrentTheme-DZ5Dd1Oz.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C_IB42fC.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-pRkoq2nx.js";import"./paper-plane-C5O9xOBt.js";import"./index-D9uEVirk.js";import"./less-Bgb69ICn.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
