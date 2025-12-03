import{j as e}from"./iframe-tj1IXK49.js";import{useMDXComponents as i}from"./index-BnfY_9Nm.js";import{I as a,F as m}from"./CommandsAndQueries-BjstQSnK.js";import{M as s,C as p}from"./blocks-B5RuKJh5.js";import"./Tag-DQ_YqxY9.js";import"./index-BScgQgkK.js";import{C as l}from"./ControlsWithNote-8LDKc61c.js";import"./copy-7hwn-SEF.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-B7q_Qref.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BZJK_qmM.js";import"./index-CG8SFQa2.js";import"./index-BINOQQsd.js";import"./Link-OqvTbJ_m.js";import"./index--qIKxsMf.js";import"./index-yAmFIL7x.js";import"./index-DPa2AXHs.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DtbFBLyL.js";import"./addCustomCSSWithScoping-DTX7qnOW.js";import"./index-BSv7hb7A.js";import"./information-7IX06_U3.js";import"./sys-enter-2-lbz-PkIt.js";import"./alert-BrK48pCK.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CNmav4uw.js";import"./delete-BJCcrEo8.js";import"./settings-B4r0uagp.js";import"./NoData-D1wg2ZjH.js";import"./IllustratedMessage-DtQEbzMl.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-CYdJZ1Fa.js";import"./index-zy6Z6fzh.js";import"./index-BHfvcuXR.js";import"./slim-arrow-down-3Bp4HO9L.js";import"./Input-DyMVldoQ.js";import"./ResponsivePopoverCommon.css-B7sBPpGT.js";import"./ValueStateMessage.css-BOXCyn5o.js";import"./Suggestions.css-qhb-jRVq.js";import"./ListBoxItemGroupTemplate-B5kCf4FY.js";import"./ComboBoxItemGroup-DjqHpR4q.js";import"./ListItemBaseTemplate-CZ5gJcTc.js";import"./Token-DiUPhPVy.js";import"./ScrollEnablement-C1DMpgda.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BSxtlPA8.js";import"./ToggleButton-CLkDo8Zi.js";import"./SuggestionItem-fPrWfpXj.js";import"./index-DHAsISTr.js";import"./Option-Cw8wFm8J.js";import"./index-DlxkxtJl.js";import"./SegmentedButton-TpTrNTvw.js";import"./index-CB88dHgs.js";import"./Select-_lEfRkl9.js";import"./InvisibleMessage-DqI98h3N.js";import"./slim-arrow-down-Pg-mR8x6.js";import"./index-C-he-_F8.js";import"./index-ALFTWpOD.js";import"./index-DqQsnaMw.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D313vNRh.js";import"./group-2-DVW5e3Di.js";import"./sort-descending-CZWlqs0g.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-l3FXy0fA.js";import"./utils-BO0Wywqo.js";import"./index-CDt63173.js";import"./index-BrVm2JNm.js";import"./index-CFNZtnKn.js";import"./navigation-down-arrow-Bb0O9CDG.js";import"./navigation-right-arrow-iBxRGUGq.js";import"./navigation-right-arrow-qIgwnOYY.js";import"./useCurrentTheme-C1ygFUZ9.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DXYI5egs.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BXFoHGh1.js";import"./paper-plane-BEYLmZQj.js";import"./index-XdCx1c8d.js";import"./less-Cnus0AYW.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
