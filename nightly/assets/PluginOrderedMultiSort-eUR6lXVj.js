import{j as e}from"./iframe-BBABn56p.js";import{useMDXComponents as i}from"./index-JaA5rKoZ.js";import{I as a,F as m}from"./CommandsAndQueries-BQ3fu09v.js";import{M as s,C as p}from"./blocks-C48pq8eI.js";import"./Tag-2o8WwGUn.js";import"./index-CDfsiwkh.js";import{C as l}from"./ControlsWithNote-wtVH_ZZd.js";import"./copy-DZ9Ywk1q.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DkIX-1rK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-J2oyeWCO.js";import"./index-CKtBuMmX.js";import"./index-DWO5htBk.js";import"./Link-Ber6JvTK.js";import"./index-bK0pQ8Eu.js";import"./index-D_78KBK9.js";import"./index-BkrG37On.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BGZzwSbc.js";import"./addCustomCSSWithScoping-BtxahzH2.js";import"./index-Ckf8DLFv.js";import"./information-BZFlG9j_.js";import"./sys-enter-2-DjgAxbYG.js";import"./alert-CS_Fjm7A.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BAH4TUxy.js";import"./delete-DsWdS96_.js";import"./settings-Df6DL7Gq.js";import"./NoData-BNjlB7uw.js";import"./IllustratedMessage-Di319cue.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-BsO5uN5a.js";import"./index-DhLGJCjj.js";import"./index-BqTDCnco.js";import"./slim-arrow-down-BG1nt-P_.js";import"./Input-CYLSHt27.js";import"./ResponsivePopoverCommon.css-BpyfczN_.js";import"./ValueStateMessage.css-B7LgM9S6.js";import"./Suggestions.css-CEnMSpxy.js";import"./ListBoxItemGroupTemplate-DMJ27KCA.js";import"./ComboBoxItemGroup-DdXTq1Vh.js";import"./ListItemBaseTemplate-DaYbGn7R.js";import"./Token-CJDolX8T.js";import"./ScrollEnablement-BLTuKYfn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B5ygJNfI.js";import"./ToggleButton-7E3RKcQ8.js";import"./SuggestionItem-Bine1zmz.js";import"./index-B6Q789ah.js";import"./Option-BjUcgJcl.js";import"./index-Ch7wW-jX.js";import"./SegmentedButton-DhLiQXqU.js";import"./index-6d4BSX0F.js";import"./Select-BKOJ5f1a.js";import"./InvisibleMessage-W81utmZk.js";import"./slim-arrow-down-CNYLbtEw.js";import"./index-BEp2nlaX.js";import"./index-CPKR6tvC.js";import"./index-BCqZx7KV.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bg-CqXDw.js";import"./group-2-UoqYeskz.js";import"./sort-descending-BBmoGOXL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BJgZ-Sj2.js";import"./utils-CQ2iljMS.js";import"./index-BlzTje2S.js";import"./index-10H1aut2.js";import"./index-CJlMvGeI.js";import"./navigation-down-arrow-CZ7v8mT2.js";import"./navigation-right-arrow-GIyVM7JZ.js";import"./navigation-right-arrow-BtregVCK.js";import"./useCurrentTheme-CTzRqOqk.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BfiFzDtl.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BoTjglKk.js";import"./paper-plane-D5Xcc4aT.js";import"./index-FOPI05Cv.js";import"./less-DX_0GEda.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
