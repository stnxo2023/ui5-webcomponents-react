import{j as e}from"./iframe-0odebeya.js";import{useMDXComponents as i}from"./index-CqFbrvRl.js";import{I as a,F as m}from"./CommandsAndQueries-EL4jX5E-.js";import{M as s,C as p}from"./blocks-CZanU-Ia.js";import"./Tag-BUYfpKMM.js";import"./index-D9xNyPsZ.js";import{C as l}from"./ControlsWithNote-yy9Z70tj.js";import"./copy-CT5RXkub.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DOi-Wnm_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-8HMofQBq.js";import"./index-Bj8LHsHM.js";import"./index-CaXXMvN7.js";import"./Link-BrHi8e0V.js";import"./index-frz6UFer.js";import"./index-tz56fx9f.js";import"./index-CWrbfQpH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BHrZH3Z4.js";import"./addCustomCSSWithScoping-Dp2j1Uki.js";import"./index-BINGVIRj.js";import"./information-CjkTzkFz.js";import"./sys-enter-2-DdZ_D29i.js";import"./alert-D-ynjdbk.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-xRjMB__s.js";import"./delete-fLvq34Jl.js";import"./settings-B4AOpzhv.js";import"./NoData-yaNyLcbB.js";import"./IllustratedMessage-C_hFkGWb.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-2a998mcO.js";import"./index-D8VPPfjQ.js";import"./index-BnCUL16H.js";import"./slim-arrow-down-BFjQhKte.js";import"./Input-CB7ibhwK.js";import"./ResponsivePopoverCommon.css-fLKohW0Q.js";import"./ValueStateMessage.css-C-9YoNH5.js";import"./Suggestions.css-CmFhhLzD.js";import"./ListBoxItemGroupTemplate-BT5gB5uM.js";import"./ComboBoxItemGroup-Du1B6a9S.js";import"./ListItemBaseTemplate-BJ16pLA5.js";import"./Token-Ch4ywBb0.js";import"./ScrollEnablement-CqQuXn0O.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B9R18C1J.js";import"./ToggleButton-PcgJOeQd.js";import"./SuggestionItem-D-h7iS1u.js";import"./index-CDM_4gIl.js";import"./Option-DYfARMYl.js";import"./index-BSUqgLJE.js";import"./SegmentedButton-BCHL45F3.js";import"./index-BzO5275T.js";import"./Select-Cc7eo2Px.js";import"./InvisibleMessage-DBSe1ewq.js";import"./slim-arrow-down-BrhmzZXI.js";import"./index-DQI_EJF_.js";import"./index-ClaOFseh.js";import"./index-XJJ-3YHL.js";import"./index-zsFPEOYy.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CMrG-M6g.js";import"./group-2-DCO1BTNo.js";import"./sort-descending-Cjurks9x.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BOtvtZYN.js";import"./utils-D6cGPaWL.js";import"./index-C9fKAKSL.js";import"./index-BsMffN5Y.js";import"./index-DFrOQYBP.js";import"./navigation-down-arrow-CxSCHjvh.js";import"./navigation-right-arrow-C1Z29n6I.js";import"./navigation-right-arrow-sQXzL3an.js";import"./useCurrentTheme-B4rbko8_.js";import"./index-GKaPWcp4.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-3MSrpeOV.js";import"./paper-plane-C4OvpktK.js";import"./index-B_3GzVsz.js";import"./less-BL1Txw-9.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
