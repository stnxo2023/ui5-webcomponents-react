import{j as e}from"./iframe-D_CdPJGB.js";import{useMDXComponents as i}from"./index-CU-ptlAE.js";import{I as a,F as m}from"./CommandsAndQueries-mK8OCXMD.js";import{M as s,C as p}from"./blocks-CCtPO9cz.js";import"./Tag-Bp64ITEl.js";import"./index-DvHG4NxR.js";import{C as l}from"./ControlsWithNote-FhkELdDw.js";import"./copy-BADAjupU.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DYjJZZgv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CZ_x4nC8.js";import"./index-px1zqH5W.js";import"./index-BjO8dbVD.js";import"./Link-D2G2Fur_.js";import"./index-rQn5W4JD.js";import"./index-BtAl8RaU.js";import"./index-Bp0lp_Bf.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CAznTGJj.js";import"./addCustomCSSWithScoping-CCFJUFLD.js";import"./index-C4kKrQ_A.js";import"./information-D72qH7xY.js";import"./sys-enter-2-hXCOpqjq.js";import"./alert-DtWkY9xa.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D_IhUX-d.js";import"./delete-7Ml3hpJC.js";import"./settings-zWMvdB3T.js";import"./NoData-B6osxBGy.js";import"./IllustratedMessage-BSFIsl3K.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-mv1-qqSd.js";import"./index-DdLYl7JB.js";import"./index-DU-QIP1X.js";import"./slim-arrow-down-DjB7mIxL.js";import"./Input-DDlyZUe3.js";import"./ResponsivePopoverCommon.css-BLJDaaVS.js";import"./ValueStateMessage.css-BCduw_aJ.js";import"./Suggestions.css-BidsuWHC.js";import"./ListBoxItemGroupTemplate-xzts4k2L.js";import"./ComboBoxItemGroup-CHXVN60o.js";import"./ListItemBaseTemplate-DxdVRh6Y.js";import"./Token-C48gjgFU.js";import"./ScrollEnablement-DdqyZen4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CKWpRsaf.js";import"./ToggleButton-D2rDUs9L.js";import"./SuggestionItem-DDpzUX_W.js";import"./index-B4aMp4lg.js";import"./Option-DUZ1b-TT.js";import"./index-B2ct1whH.js";import"./SegmentedButton-Do-ayQ2t.js";import"./index-D1WIrmAT.js";import"./Select-6cSgUjJb.js";import"./InvisibleMessage-C5We_rGd.js";import"./slim-arrow-down-CHdhic0E.js";import"./index-B4pCbKOH.js";import"./index-CVUQsMX1.js";import"./index-DPMPQ5O6.js";import"./index-DcE2qBtK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DlD1QirN.js";import"./group-2-Dor_fq4O.js";import"./sort-descending-DgbKssf5.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-L2EXVoeb.js";import"./utils-BUKq5qYC.js";import"./index-DKu9DJJF.js";import"./index-BV1E9Rhs.js";import"./index-BylnBWRJ.js";import"./navigation-down-arrow-DunPFpLG.js";import"./navigation-right-arrow-BwWM6KQQ.js";import"./navigation-right-arrow-D3e7CxpK.js";import"./useCurrentTheme-C6BNKx_P.js";import"./index-DeJpfMkF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D_nqdA78.js";import"./paper-plane-DQ1C_A2n.js";import"./index-BQbEiE4i.js";import"./less-bDMIhIOC.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
