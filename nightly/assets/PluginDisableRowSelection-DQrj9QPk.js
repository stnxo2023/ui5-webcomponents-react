import{j as e}from"./iframe-GIjPgZz_.js";import{useMDXComponents as n}from"./index-Q5qZCDzK.js";import{I as r,F as s}from"./CommandsAndQueries-DAsamt73.js";import{M as l,C as a}from"./blocks-Brju_yKM.js";import"./Tag-CRHSyhrL.js";import"./index-BF6G6ZOp.js";import"./copy-DMIRXvtR.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BmLNZ8hu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BnsMKJYG.js";import"./index-ByWeYssR.js";import"./index-ChNOA-bd.js";import"./Link-CUZ6JL-B.js";import"./index-V5lDTiuM.js";import"./index-BiD4GApv.js";import"./index-Xvv35NLG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dpx1zyp1.js";import"./addCustomCSSWithScoping-zdxF42yG.js";import"./index-DYv3qsbi.js";import"./information-C_h8A4lQ.js";import"./sys-enter-2-CoTdl5fW.js";import"./alert-DH_fdUZB.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CfpH1xFo.js";import"./delete-C-T01lLr.js";import"./settings-BnzBZ0lV.js";import"./NoData-BG6uVDAU.js";import"./IllustratedMessage-2JZ8q5L8.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-CqR8UELm.js";import"./index-CMian285.js";import"./index-CYHTRK1L.js";import"./slim-arrow-down-BHOwA7DG.js";import"./Input-CO8cUSWP.js";import"./ResponsivePopoverCommon.css-Dg5kCeR8.js";import"./ValueStateMessage.css-ByTQt8zp.js";import"./Suggestions.css-KU_u1XlD.js";import"./ListBoxItemGroupTemplate-C8z3ly7J.js";import"./ComboBoxItemGroup-CaK2hUsm.js";import"./ListItemBaseTemplate-2unCupVB.js";import"./Token-vTv9qWj-.js";import"./ScrollEnablement-BoZvgjLJ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CUnytT-Q.js";import"./ToggleButton-t1GK7a4c.js";import"./SuggestionItem-D4GQqs9D.js";import"./index-Booxjpxp.js";import"./Option-CLaJv9Lf.js";import"./index-B5cPbpB3.js";import"./SegmentedButton-MYaX8HFF.js";import"./index-C5rN46vA.js";import"./Select-DgEbc0sd.js";import"./InvisibleMessage-DE2IJQx3.js";import"./slim-arrow-down-BfhdSO50.js";import"./index-aXzni-kK.js";import"./index-CHYlEZPx.js";import"./index-DVRaig0H.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CbB12dqr.js";import"./group-2-Y0F9rU1V.js";import"./sort-descending-CYDDdi_E.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-XIfZZvDx.js";import"./utils-BdyEyvAN.js";import"./index-Br6ahyAe.js";import"./index-C4IL_GaS.js";import"./index-DGm9tOTO.js";import"./navigation-down-arrow-CDRhyDRq.js";import"./navigation-right-arrow-D1sC2HOI.js";import"./navigation-right-arrow-D_7sv2xN.js";import"./useCurrentTheme-BXWde22w.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CQxy6kwu.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DE6ac6kW.js";import"./paper-plane-0HnsvUce.js";import"./index-BzjyVP51.js";import"./less-COhi_etz.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(a,{sourceState:"none",of:m}),`
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
`,e.jsx(s,{})]})}function Xe(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Xe as default};
