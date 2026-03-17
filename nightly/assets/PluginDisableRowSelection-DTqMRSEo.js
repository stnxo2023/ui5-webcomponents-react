import{j as e}from"./iframe-30LZfzOw.js";import{useMDXComponents as n}from"./index-9hK3vCGp.js";import{I as r}from"./CommandsAndQueries-B3tX98p8.js";import{M as s,C as l}from"./blocks-C0vZ6D8t.js";import"./Tag-Dtxkyswp.js";import"./index-CjMm9yFV.js";import"./copy-BDfV85Pd.js";import{F as a}from"./Footer-BNR5gUPY.js";import"./PageNotFound-yG6M5MId.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-B3-rzdQd.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CPAvZ0M5.js";import"./index-BqAk99uF.js";import"./index-orHhnsuM.js";import"./index-DNQEiveD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dl3uWGQL.js";import"./addCustomCSSWithScoping-DtBGS5Q4.js";import"./index-CqMGZXJd.js";import"./index-DBMP_Ccw.js";import"./index-CZwEe_4d.js";import"./information-BQPccwsM.js";import"./sys-enter-2-CbSQlHDF.js";import"./alert-BwFRRuyW.js";import"./index-CFfbQ4H0.js";import"./Illustrations-BGO-1oHt.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D4Ny2Qqv.js";import"./delete-C23RyoNS.js";import"./settings-vCvKKELE.js";import"./NoData-BYjwPDGX.js";import"./NoFilterResults-CCvr_mGb.js";import"./index-HraqqLCL.js";import"./IllustratedMessage-B21zxjt4.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-Cnc3ng8i.js";import"./Input-C9d7fki7.js";import"./ResponsivePopoverCommon.css-COYnkjUj.js";import"./ValueStateMessage.css-BtsWCoC_.js";import"./Suggestions.css-BIuoYk1E.js";import"./ListBoxItemGroupTemplate-CkL-FEGQ.js";import"./ComboBoxItemGroup-gJ9bF5Mf.js";import"./ListItemBaseTemplate-CbFyC0Bd.js";import"./Token-6w1_tPy9.js";import"./ScrollEnablement-BtBhqt6G.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DUX806d8.js";import"./ToggleButton-DLpAZcDf.js";import"./multiselect-all-3L7ChLWO.js";import"./SuggestionItem-aIZEKOnW.js";import"./index-BZL0dq0V.js";import"./Option-CtcuoPzM.js";import"./index-DTQROv24.js";import"./SegmentedButton-B_fnwh2s.js";import"./index-B1i_wN68.js";import"./Select-l4rVM2RI.js";import"./InvisibleMessage-IbisIrn1.js";import"./index-qMyxaARO.js";import"./index-ByDJh9XY.js";import"./index-DkQqnEjC.js";import"./index-Dn9Dy3ZO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DUmOK15y.js";import"./group-2-Cm3-VEfC.js";import"./sort-descending-D91blpVD.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B3GhDGHr.js";import"./utils-IkNb-DUU.js";import"./index-5e0OL3tH.js";import"./index-Kunnu4JS.js";import"./index-CS-7xh0w.js";import"./navigation-down-arrow-C1y2H9vH.js";import"./navigation-right-arrow-BjkMCO6q.js";import"./navigation-right-arrow-xyDtPWf6.js";import"./useCurrentTheme-D3OuI6Tp.js";import"./index-Dxoj_xD_.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CVz-G4WN.js";import"./paper-plane-Dl39-tzB.js";import"./index-BWQnImub.js";import"./less-Cg3ABqJp.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
`,e.jsx(o.h1,{id:"analyticaltable-plugin-userowdisableselection",children:"AnalyticalTable Plugin: useRowDisableSelection"}),`
`,e.jsx(r,{moduleName:"useRowDisableSelection",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,e.jsx("hr",{}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Deprecated!"})," It is not recommended to disable table rows, mainly because of the following reasons:"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"Users are not informed why items cannot be selected."}),`
`,e.jsx(o.li,{children:"ARIA lacks built-in support for selective item selection, complicating accessibility."}),`
`,e.jsx(o.li,{children:"Consistency to other applications which do not offer disabled items."}),`
`]}),`
`,e.jsx("hr",{}),`
`,e.jsxs(o.p,{children:["With the ",e.jsx(o.code,{children:"useRowDisableSelection"})," it's possible to disable the selection of specific rows. It can receive two types of parameters:"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"string"}),": Defines the key in the dataset for disabling rows. If the value of the key is ",e.jsx(o.code,{children:"true"}),", then the row will not be selectable."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Function(row) => boolean"}),": Programmatically disable rows for selection. The function receives the current row as parameter."]}),`
`]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"}),' The "Select All" checkbox is not available with this hook.']}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"})," Using this hook in combination with the ",e.jsx(o.code,{children:"useIndeterminateRowSelection"})," hook is not supported!"]}),`
`,e.jsx(l,{sourceState:"none",of:m}),`
`,e.jsx(o.h2,{id:"example",children:"Example"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const disableRowFunc = (row) => row.original.age < 40;
const tableHooks = [useRowDisableSelection(disableRowFunc)]; // this array should be memoized

const WithFunctionParameter = () => {

  return (
    <AnalyticalTable
      data={data}
      columns={columns}
      selectionMode={AnalyticalTableSelectionMode.Multiple}
      tableHooks={tableHooks}
    />
  );
};

`})}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const data = [
  {
    name: "Peter Franco",
    age: 22,
    //...
    disableSelection: Math.random() < 0.5,
  },
  //...
];
const tableHooks = [useRowDisableSelection("disableSelection")]; // this array should be memoized

const WithStringParameter = () => {
  return (
    <AnalyticalTable
      data={data}
      columns={columns}
      selectionMode={AnalyticalTableSelectionMode.Multiple}
      tableHooks={tableHooks}
    />
  );
};
`})}),`
`,e.jsx(a,{})]})}function Ee(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ee as default};
