import{j as e}from"./iframe-BkU8WQpb.js";import{useMDXComponents as i}from"./index-BeG8GrN5.js";import{I as a,F as m}from"./CommandsAndQueries-DetvrItO.js";import{M as s,C as p}from"./blocks-CLMMfPPt.js";import"./Tag-Cih70sHI.js";import"./index-DnBqZpyB.js";import{C as l}from"./ControlsWithNote-DyRp8-gJ.js";import"./copy-B4HTDbaZ.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BvLI3kX2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dj6CZlQQ.js";import"./index-f6jDEWAh.js";import"./index-eFI2U8Up.js";import"./Link-DLFy93gF.js";import"./index-D4xCyo8q.js";import"./index-DWR5LsZZ.js";import"./index-BysDONg4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Fp7idO2l.js";import"./addCustomCSSWithScoping-CehjyWVu.js";import"./index-DATmYB4_.js";import"./information-CjNccefj.js";import"./sys-enter-2-RLTSxo4s.js";import"./alert-DdBYY2qU.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CsenYKF8.js";import"./delete-B_OD3K68.js";import"./settings-CJS1NR3M.js";import"./NoData-AjIR6FXV.js";import"./IllustratedMessage-DUpdSioN.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DmtWxoyx.js";import"./index-B_Lo1ajO.js";import"./index-CRA6hnYw.js";import"./slim-arrow-down-BTmhvktL.js";import"./Input-LLlRvrNn.js";import"./ResponsivePopoverCommon.css-NpFXxOXP.js";import"./ValueStateMessage.css-BdFRF0eK.js";import"./Suggestions.css-Dl4BPrxO.js";import"./ListBoxItemGroupTemplate-DEE5SIID.js";import"./ComboBoxItemGroup-BWN-cMPv.js";import"./ListItemBaseTemplate-B2kevfSs.js";import"./Token-BQND7Ztt.js";import"./ScrollEnablement-BpahqvCY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BgczD3q6.js";import"./ToggleButton-CDkfCjtp.js";import"./SuggestionItem-CrbDQNDp.js";import"./index-BCLLjiA_.js";import"./Option-DModAxyu.js";import"./index-CXuec-HL.js";import"./SegmentedButton-DfLnf31k.js";import"./index-D4IOGR9a.js";import"./Select-D4yKPFL9.js";import"./InvisibleMessage-52jPagfA.js";import"./slim-arrow-down-CpyZ1Zfr.js";import"./index-B49HkTlG.js";import"./index-DHOtv1YS.js";import"./index-v2LmQFFt.js";import"./index-D2fRocR2.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DhKFVNcX.js";import"./group-2-CYuJGq9D.js";import"./sort-descending-GfYRxa9q.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BqWvECKK.js";import"./utils-CekyTbg1.js";import"./index-BJRBwXE4.js";import"./index-Fsnq8hnt.js";import"./index-lT6ku5Z4.js";import"./navigation-down-arrow-CfiNm6dT.js";import"./navigation-right-arrow-UY7xGVP3.js";import"./navigation-right-arrow-DgO3Fp25.js";import"./useCurrentTheme-hKMovh50.js";import"./index-Dm5lGjM9.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DlWYfZgO.js";import"./paper-plane-DxMEXvmI.js";import"./index-D1dGw7D4.js";import"./less-DRAo-dZd.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
