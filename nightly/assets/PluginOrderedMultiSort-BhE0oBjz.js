import{j as e}from"./iframe-DeMwMmGx.js";import{useMDXComponents as i}from"./index-CWwj9Mnl.js";import{I as a,F as m}from"./CommandsAndQueries-BBLmRDsb.js";import{M as s,C as p}from"./blocks-8D0p5thu.js";import"./Tag-CJlss1uo.js";import"./index-fzrObdgv.js";import{C as l}from"./ControlsWithNote--Y171OS7.js";import"./copy-BgdiHhBm.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CWwR-y9u.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DaGO4DII.js";import"./index-CvQAJVIm.js";import"./index-CqRETC9D.js";import"./Link-DuK3KTb6.js";import"./index-x-nhhmJ1.js";import"./index-QSmrzR-p.js";import"./index-C3DV1EGu.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DJ0_IZyX.js";import"./addCustomCSSWithScoping-DmQSYZoL.js";import"./index-DwA6oYWp.js";import"./information-IgIWD04z.js";import"./sys-enter-2-B6dBkbbN.js";import"./alert-DXbxKJCI.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BgVD4qXY.js";import"./delete-mq69ob-m.js";import"./settings-DsHd3P0n.js";import"./NoData--TQXjPxp.js";import"./IllustratedMessage-q7ABRVJa.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DN8h-kj9.js";import"./index-Bqo4E53G.js";import"./index-Ce9C4-0M.js";import"./slim-arrow-down-CB1uueTx.js";import"./Input-DRHd5nbL.js";import"./ResponsivePopoverCommon.css-Nq-6b_ms.js";import"./ValueStateMessage.css-Tpbst_AR.js";import"./Suggestions.css-BcZrXAjC.js";import"./ListBoxItemGroupTemplate-DWp2fAWp.js";import"./ComboBoxItemGroup-B99x6mYV.js";import"./ListItemBaseTemplate-BE7nd5FZ.js";import"./Token-fAbSmEQt.js";import"./ScrollEnablement-BDJVsvmw.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-eMNK3qV1.js";import"./ToggleButton-DVIEs1wL.js";import"./SuggestionItem-C9Fa1J1D.js";import"./index-HyDyLjGn.js";import"./Option-C1H5Qp9e.js";import"./index-EGOdPRwf.js";import"./SegmentedButton-BLiDf_5M.js";import"./index-Cjfludll.js";import"./Select-BWPut0uV.js";import"./InvisibleMessage-RemLUX1t.js";import"./slim-arrow-down-Cavo_L7e.js";import"./index-BwxK2g44.js";import"./index-B0LvNv03.js";import"./index-5d-X9JJE.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B4tw820b.js";import"./group-2-DLLjtbHP.js";import"./sort-descending-DFffTKv8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-hbWTH7_c.js";import"./utils-mFF1dh2e.js";import"./index-DfGmmuHK.js";import"./index-CEQRcaEk.js";import"./index-BPZ4GFnq.js";import"./navigation-down-arrow-BQ77KqPN.js";import"./navigation-right-arrow-BckoNBw3.js";import"./navigation-right-arrow-F7WHq2_o.js";import"./useCurrentTheme-BnPNa_8f.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BXvWjhnt.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Dy9MOOru.js";import"./paper-plane-4ZqR7r5W.js";import"./index-BFzoLWvR.js";import"./less-DFrGBfi9.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
