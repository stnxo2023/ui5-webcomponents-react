import{j as e}from"./iframe-tj1IXK49.js";import{useMDXComponents as n}from"./index-BnfY_9Nm.js";import{I as r,F as s}from"./CommandsAndQueries-BjstQSnK.js";import{M as l,C as a}from"./blocks-B5RuKJh5.js";import"./Tag-DQ_YqxY9.js";import"./index-BScgQgkK.js";import"./copy-7hwn-SEF.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-B7q_Qref.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BZJK_qmM.js";import"./index-CG8SFQa2.js";import"./index-BINOQQsd.js";import"./Link-OqvTbJ_m.js";import"./index--qIKxsMf.js";import"./index-yAmFIL7x.js";import"./index-DPa2AXHs.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DtbFBLyL.js";import"./addCustomCSSWithScoping-DTX7qnOW.js";import"./index-BSv7hb7A.js";import"./information-7IX06_U3.js";import"./sys-enter-2-lbz-PkIt.js";import"./alert-BrK48pCK.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CNmav4uw.js";import"./delete-BJCcrEo8.js";import"./settings-B4r0uagp.js";import"./NoData-D1wg2ZjH.js";import"./IllustratedMessage-DtQEbzMl.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-CYdJZ1Fa.js";import"./index-zy6Z6fzh.js";import"./index-BHfvcuXR.js";import"./slim-arrow-down-3Bp4HO9L.js";import"./Input-DyMVldoQ.js";import"./ResponsivePopoverCommon.css-B7sBPpGT.js";import"./ValueStateMessage.css-BOXCyn5o.js";import"./Suggestions.css-qhb-jRVq.js";import"./ListBoxItemGroupTemplate-B5kCf4FY.js";import"./ComboBoxItemGroup-DjqHpR4q.js";import"./ListItemBaseTemplate-CZ5gJcTc.js";import"./Token-DiUPhPVy.js";import"./ScrollEnablement-C1DMpgda.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BSxtlPA8.js";import"./ToggleButton-CLkDo8Zi.js";import"./SuggestionItem-fPrWfpXj.js";import"./index-DHAsISTr.js";import"./Option-Cw8wFm8J.js";import"./index-DlxkxtJl.js";import"./SegmentedButton-TpTrNTvw.js";import"./index-CB88dHgs.js";import"./Select-_lEfRkl9.js";import"./InvisibleMessage-DqI98h3N.js";import"./slim-arrow-down-Pg-mR8x6.js";import"./index-C-he-_F8.js";import"./index-ALFTWpOD.js";import"./index-DqQsnaMw.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D313vNRh.js";import"./group-2-DVW5e3Di.js";import"./sort-descending-CZWlqs0g.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-l3FXy0fA.js";import"./utils-BO0Wywqo.js";import"./index-CDt63173.js";import"./index-BrVm2JNm.js";import"./index-CFNZtnKn.js";import"./navigation-down-arrow-Bb0O9CDG.js";import"./navigation-right-arrow-iBxRGUGq.js";import"./navigation-right-arrow-qIgwnOYY.js";import"./useCurrentTheme-C1ygFUZ9.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DXYI5egs.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BXFoHGh1.js";import"./paper-plane-BEYLmZQj.js";import"./index-XdCx1c8d.js";import"./less-Cnus0AYW.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
