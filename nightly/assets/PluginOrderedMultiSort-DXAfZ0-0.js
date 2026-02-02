import{j as e}from"./iframe-CeMquKfU.js";import{useMDXComponents as i}from"./index-BbFo7jBM.js";import{I as a,F as m}from"./CommandsAndQueries-DG6G8TEI.js";import{M as s,C as p}from"./blocks-Db1iDIvu.js";import"./Tag-DBOPR6ka.js";import"./index-BWGqmYD4.js";import{C as l}from"./ControlsWithNote-BmMLVWWf.js";import"./copy-DuOXgjDa.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-B1wSYbCh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DYb2g8Yq.js";import"./index-srI8srsL.js";import"./index-WnbBQODb.js";import"./Link-B4KwrrH9.js";import"./index-Brk-KPPC.js";import"./index-jfPm289V.js";import"./index-DMujUK6u.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-RK7-B4yx.js";import"./addCustomCSSWithScoping-06k5HVP6.js";import"./index-CQMy8EdC.js";import"./information-BF8hjIJ6.js";import"./sys-enter-2-CBCKgEbS.js";import"./alert-DPPxzZqA.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DPG_OKYP.js";import"./delete-Uj8hBt6S.js";import"./settings-CRRgNt-N.js";import"./NoData-YotdDZfS.js";import"./IllustratedMessage-C9SN6Yvr.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-gYz_1-Iq.js";import"./index-DTmGPPPG.js";import"./index-lo7sxx3g.js";import"./slim-arrow-down-rp2vwRxt.js";import"./Input-DQRA-VuS.js";import"./ResponsivePopoverCommon.css-BClm2dDh.js";import"./ValueStateMessage.css-CKCH07QR.js";import"./Suggestions.css-BWIb4a3h.js";import"./ListBoxItemGroupTemplate-DCHeqAW1.js";import"./ComboBoxItemGroup-SnnIm8Sr.js";import"./ListItemBaseTemplate-1_D2ATm3.js";import"./Token-CruD5fzF.js";import"./ScrollEnablement-C-b-W7id.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D7spGUwG.js";import"./ToggleButton-_yDrgV6p.js";import"./SuggestionItem-CL3ZaIy3.js";import"./index-UEVtisfD.js";import"./Option-BKd77GhM.js";import"./index-3m2Ir6Wd.js";import"./SegmentedButton-PLCet70E.js";import"./index-DSexaJxi.js";import"./Select-mBwpFl_7.js";import"./InvisibleMessage-DPIiF7tN.js";import"./slim-arrow-down-DP9BktZN.js";import"./index-DBpNwbAj.js";import"./index-CT9C6QTI.js";import"./index-CBp7yPzh.js";import"./index-_bp4qzZ2.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BgkPuhmB.js";import"./group-2-Cjy-hE1J.js";import"./sort-descending-Bvfrz-CE.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CHxxDtPV.js";import"./utils-BpaGkPqN.js";import"./index-DWISqHTN.js";import"./index-BO-Xqwo9.js";import"./index-2AndXKS7.js";import"./navigation-down-arrow-C-MSOhmQ.js";import"./navigation-right-arrow-PEzIwvoX.js";import"./navigation-right-arrow-Df3YrvYp.js";import"./useCurrentTheme-DkydNdML.js";import"./index-C0E2EBUT.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CjonKQN8.js";import"./paper-plane-Cz43U6io.js";import"./index-BtaWLEfD.js";import"./less-BiaIGbp3.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
