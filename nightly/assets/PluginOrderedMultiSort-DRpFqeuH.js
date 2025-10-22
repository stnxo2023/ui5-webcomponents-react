import{j as e}from"./iframe-BfEtcTHs.js";import{useMDXComponents as i}from"./index-CPCxp1pX.js";import{I as a,F as m}from"./CommandsAndQueries-XBwAul-0.js";import{M as s,C as p}from"./blocks-BEk0eltt.js";import"./Tag-5zjMhKbj.js";import"./index-Cdy39dSN.js";import{C as l}from"./ControlsWithNote-BTHAdxiA.js";import"./copy-CuNW8uGj.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-iqlA5Rsi.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CpslN8bF.js";import"./index-C2AzqXEp.js";import"./index-BoD67Q0d.js";import"./Link-Dx6E4Ul6.js";import"./index-zG-h4Dtj.js";import"./index-DZog4k2R.js";import"./index-SIE8WAww.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DzVstS1R.js";import"./addCustomCSSWithScoping-BOC9QupD.js";import"./index-BwoaU2AB.js";import"./information-DXNiXlp4.js";import"./sys-enter-2-Da7fZjtE.js";import"./alert-sulwnQm9.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DefV3fg4.js";import"./delete-DRp_vKLL.js";import"./settings-8cBiGhEo.js";import"./NoData-DRiCv3V7.js";import"./IllustratedMessage-BcierAe3.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DC3p8tpO.js";import"./index-BU6h6RcY.js";import"./index-inlCeEQP.js";import"./slim-arrow-down-PFXKhKTH.js";import"./Input-kpy9MJfL.js";import"./ResponsivePopoverCommon.css-DnHFDVo1.js";import"./ValueStateMessage.css-71Kwz1nQ.js";import"./Suggestions.css-CVcapq67.js";import"./ListBoxItemGroupTemplate-Yo3vvIxC.js";import"./ComboBoxItemGroup-CVRBhhBV.js";import"./ListItemBaseTemplate-BekWMZBh.js";import"./Token-jUwPkdch.js";import"./ScrollEnablement-CI0R8iiH.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CRg3tQau.js";import"./ToggleButton-C-eT4TLR.js";import"./SuggestionItem-BFsIrsax.js";import"./index-C-6LBD30.js";import"./Option-Bnm7Q230.js";import"./index-BbL5VZ3R.js";import"./SegmentedButton-CyHKGesR.js";import"./index-BX9NA7Ty.js";import"./Select-CHLFQnon.js";import"./InvisibleMessage-c4INzckP.js";import"./slim-arrow-down-C0u-ePLI.js";import"./index-CGv8fhvM.js";import"./index-oDy6hXsG.js";import"./index-BywWnLvF.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Ceyg-lSX.js";import"./group-2-DC-4yjr6.js";import"./sort-descending-C2KIxNMI.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bx6m_JwS.js";import"./utils-lSaTNz_p.js";import"./index-DKB6a4-7.js";import"./index-BKyhgX99.js";import"./index-B2EjrpGu.js";import"./navigation-down-arrow-BfqJo7nx.js";import"./navigation-right-arrow-BDRcromZ.js";import"./navigation-right-arrow-DPFdFbno.js";import"./useCurrentTheme-K8lHxNsa.js";import"./IndicationColor-DVw-fSM_.js";import"./index-SiSH1lpP.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DwLDEYmZ.js";import"./paper-plane-C_6zFKE6.js";import"./index-BlUB7lqP.js";import"./less-BJgq7N11.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
