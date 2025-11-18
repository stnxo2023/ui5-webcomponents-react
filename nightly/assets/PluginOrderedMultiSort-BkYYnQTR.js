import{j as e}from"./iframe-GIjPgZz_.js";import{useMDXComponents as i}from"./index-Q5qZCDzK.js";import{I as a,F as m}from"./CommandsAndQueries-DAsamt73.js";import{M as s,C as p}from"./blocks-Brju_yKM.js";import"./Tag-CRHSyhrL.js";import"./index-BF6G6ZOp.js";import{C as l}from"./ControlsWithNote-BkIhWDzf.js";import"./copy-DMIRXvtR.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BmLNZ8hu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BnsMKJYG.js";import"./index-ByWeYssR.js";import"./index-ChNOA-bd.js";import"./Link-CUZ6JL-B.js";import"./index-V5lDTiuM.js";import"./index-BiD4GApv.js";import"./index-Xvv35NLG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dpx1zyp1.js";import"./addCustomCSSWithScoping-zdxF42yG.js";import"./index-DYv3qsbi.js";import"./information-C_h8A4lQ.js";import"./sys-enter-2-CoTdl5fW.js";import"./alert-DH_fdUZB.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CfpH1xFo.js";import"./delete-C-T01lLr.js";import"./settings-BnzBZ0lV.js";import"./NoData-BG6uVDAU.js";import"./IllustratedMessage-2JZ8q5L8.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-CqR8UELm.js";import"./index-CMian285.js";import"./index-CYHTRK1L.js";import"./slim-arrow-down-BHOwA7DG.js";import"./Input-CO8cUSWP.js";import"./ResponsivePopoverCommon.css-Dg5kCeR8.js";import"./ValueStateMessage.css-ByTQt8zp.js";import"./Suggestions.css-KU_u1XlD.js";import"./ListBoxItemGroupTemplate-C8z3ly7J.js";import"./ComboBoxItemGroup-CaK2hUsm.js";import"./ListItemBaseTemplate-2unCupVB.js";import"./Token-vTv9qWj-.js";import"./ScrollEnablement-BoZvgjLJ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CUnytT-Q.js";import"./ToggleButton-t1GK7a4c.js";import"./SuggestionItem-D4GQqs9D.js";import"./index-Booxjpxp.js";import"./Option-CLaJv9Lf.js";import"./index-B5cPbpB3.js";import"./SegmentedButton-MYaX8HFF.js";import"./index-C5rN46vA.js";import"./Select-DgEbc0sd.js";import"./InvisibleMessage-DE2IJQx3.js";import"./slim-arrow-down-BfhdSO50.js";import"./index-aXzni-kK.js";import"./index-CHYlEZPx.js";import"./index-DVRaig0H.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CbB12dqr.js";import"./group-2-Y0F9rU1V.js";import"./sort-descending-CYDDdi_E.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-XIfZZvDx.js";import"./utils-BdyEyvAN.js";import"./index-Br6ahyAe.js";import"./index-C4IL_GaS.js";import"./index-DGm9tOTO.js";import"./navigation-down-arrow-CDRhyDRq.js";import"./navigation-right-arrow-D1sC2HOI.js";import"./navigation-right-arrow-D_7sv2xN.js";import"./useCurrentTheme-BXWde22w.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CQxy6kwu.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DE6ac6kW.js";import"./paper-plane-0HnsvUce.js";import"./index-BzjyVP51.js";import"./less-COhi_etz.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
