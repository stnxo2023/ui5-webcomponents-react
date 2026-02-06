import{j as e}from"./iframe-DrnWJux_.js";import{useMDXComponents as i}from"./index-8FDMxm68.js";import{I as a,F as m}from"./CommandsAndQueries-CNfp17jg.js";import{M as s,C as p}from"./blocks-BFYkdnf5.js";import"./Tag-C0-SLfdZ.js";import"./index-e4jmEiJR.js";import{C as l}from"./ControlsWithNote-DIYc68X9.js";import"./copy-BxyqZoQq.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DgUCPkq2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CW1Fzcqx.js";import"./index-Cjg1iz22.js";import"./index-IUrjl9ty.js";import"./Link-DZzQtWK9.js";import"./index-DVoKYJte.js";import"./index-BNqm2zkD.js";import"./index-CBWW3th1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CDLiZVZl.js";import"./addCustomCSSWithScoping-CbplP-kx.js";import"./index-CvpE5smH.js";import"./information-Djf1EDVN.js";import"./sys-enter-2-BH66Bhis.js";import"./alert-DUpqB4cV.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-SPiIDSVL.js";import"./delete-5wIjYt_5.js";import"./settings-CAxNiiQH.js";import"./NoData-HSKDxZyT.js";import"./IllustratedMessage-DN8OF25b.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CyleH7Va.js";import"./index-xdLxPP_I.js";import"./index-Cx3nmWT2.js";import"./slim-arrow-down-DtR6poag.js";import"./Input-4ibVB00q.js";import"./ResponsivePopoverCommon.css-e_PJNQiz.js";import"./ValueStateMessage.css-CmtfF9l5.js";import"./Suggestions.css-CmamAcfO.js";import"./ListBoxItemGroupTemplate-8x1YZ5vn.js";import"./ComboBoxItemGroup-CIBhgpWG.js";import"./ListItemBaseTemplate-BtkgFioN.js";import"./Token-Zy1XachM.js";import"./ScrollEnablement-1d_YGRve.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-yRZvETLK.js";import"./ToggleButton-C23ah_yf.js";import"./SuggestionItem-CB5GR-P0.js";import"./index-wMa-vVtE.js";import"./Option-CqIki-Fh.js";import"./index--9-z_1Kd.js";import"./SegmentedButton-r0yGjI_-.js";import"./index-DDrFA_hE.js";import"./Select-BOTkrqM0.js";import"./InvisibleMessage-C0LEPWkX.js";import"./slim-arrow-down-CVB2vj5c.js";import"./index-M4vNGXYB.js";import"./index-D6NM4VIr.js";import"./index-DKmNv-fY.js";import"./index-ON4dRT-g.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DFUoYrZj.js";import"./group-2-DE19W3Nx.js";import"./sort-descending-DI4YTnq7.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BmAbNejI.js";import"./utils-EOKqhIpz.js";import"./index-Bm4VLMrF.js";import"./index-BC5oddu4.js";import"./index-DdJ94PAJ.js";import"./navigation-down-arrow-CVq5S1h3.js";import"./navigation-right-arrow-C068DZ1b.js";import"./navigation-right-arrow-CvUKgEjh.js";import"./useCurrentTheme-Co2qp8hO.js";import"./index-C4phtI-B.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BIBkdk-r.js";import"./paper-plane-Dk1M1e69.js";import"./index-DQW6kDtJ.js";import"./less-4cQ9RhUf.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
