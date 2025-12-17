import{j as e}from"./iframe-0odebeya.js";import{useMDXComponents as n}from"./index-CqFbrvRl.js";import{I as r,F as s}from"./CommandsAndQueries-EL4jX5E-.js";import{M as l,C as a}from"./blocks-CZanU-Ia.js";import"./Tag-BUYfpKMM.js";import"./index-D9xNyPsZ.js";import"./copy-CT5RXkub.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DOi-Wnm_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-8HMofQBq.js";import"./index-Bj8LHsHM.js";import"./index-CaXXMvN7.js";import"./Link-BrHi8e0V.js";import"./index-frz6UFer.js";import"./index-tz56fx9f.js";import"./index-CWrbfQpH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BHrZH3Z4.js";import"./addCustomCSSWithScoping-Dp2j1Uki.js";import"./index-BINGVIRj.js";import"./information-CjkTzkFz.js";import"./sys-enter-2-DdZ_D29i.js";import"./alert-D-ynjdbk.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-xRjMB__s.js";import"./delete-fLvq34Jl.js";import"./settings-B4AOpzhv.js";import"./NoData-yaNyLcbB.js";import"./IllustratedMessage-C_hFkGWb.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-2a998mcO.js";import"./index-D8VPPfjQ.js";import"./index-BnCUL16H.js";import"./slim-arrow-down-BFjQhKte.js";import"./Input-CB7ibhwK.js";import"./ResponsivePopoverCommon.css-fLKohW0Q.js";import"./ValueStateMessage.css-C-9YoNH5.js";import"./Suggestions.css-CmFhhLzD.js";import"./ListBoxItemGroupTemplate-BT5gB5uM.js";import"./ComboBoxItemGroup-Du1B6a9S.js";import"./ListItemBaseTemplate-BJ16pLA5.js";import"./Token-Ch4ywBb0.js";import"./ScrollEnablement-CqQuXn0O.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B9R18C1J.js";import"./ToggleButton-PcgJOeQd.js";import"./SuggestionItem-D-h7iS1u.js";import"./index-CDM_4gIl.js";import"./Option-DYfARMYl.js";import"./index-BSUqgLJE.js";import"./SegmentedButton-BCHL45F3.js";import"./index-BzO5275T.js";import"./Select-Cc7eo2Px.js";import"./InvisibleMessage-DBSe1ewq.js";import"./slim-arrow-down-BrhmzZXI.js";import"./index-DQI_EJF_.js";import"./index-ClaOFseh.js";import"./index-XJJ-3YHL.js";import"./index-zsFPEOYy.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CMrG-M6g.js";import"./group-2-DCO1BTNo.js";import"./sort-descending-Cjurks9x.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BOtvtZYN.js";import"./utils-D6cGPaWL.js";import"./index-C9fKAKSL.js";import"./index-BsMffN5Y.js";import"./index-DFrOQYBP.js";import"./navigation-down-arrow-CxSCHjvh.js";import"./navigation-right-arrow-C1Z29n6I.js";import"./navigation-right-arrow-sQXzL3an.js";import"./useCurrentTheme-B4rbko8_.js";import"./index-GKaPWcp4.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-3MSrpeOV.js";import"./paper-plane-C4OvpktK.js";import"./index-B_3GzVsz.js";import"./less-BL1Txw-9.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
