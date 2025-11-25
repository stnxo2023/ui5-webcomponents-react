import{j as e}from"./iframe-rBa3eszb.js";import{useMDXComponents as n}from"./index-ywplRXEz.js";import{I as r,F as s}from"./CommandsAndQueries-CwUQeNe6.js";import{M as l,C as a}from"./blocks-g4en69Tv.js";import"./Tag-Ub-ab5wh.js";import"./index-CpHbQUX7.js";import"./copy-DpAiYmLC.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DwoO2n4l.js";import"./preload-helper-PPVm8Dsz.js";import"./index-_uK4ftNi.js";import"./index-dvt-GDfC.js";import"./index--W9c_yZX.js";import"./Link-Dq-0iXqs.js";import"./index-SiJKqGQM.js";import"./index-Bt8TlIkO.js";import"./index-CCm0OAPD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C-cGFZau.js";import"./addCustomCSSWithScoping-BFTmBMm0.js";import"./index-Dlmk5mT2.js";import"./information-Do12jBFt.js";import"./sys-enter-2-Gg5Ob7c_.js";import"./alert-Cl85dmlC.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BdvCWOzD.js";import"./delete-DSX6IBAt.js";import"./settings-B5OYEsJJ.js";import"./NoData-DnjMluBO.js";import"./IllustratedMessage-ft7Ssdsp.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-DL4_GS9s.js";import"./index-CeS1OQQr.js";import"./index-rLirECJZ.js";import"./slim-arrow-down-C9VdBaRF.js";import"./Input-m5bCswpX.js";import"./ResponsivePopoverCommon.css-CCI8LaeI.js";import"./ValueStateMessage.css-G3jxxdhr.js";import"./Suggestions.css-Bza81oFQ.js";import"./ListBoxItemGroupTemplate-BDdWlJ71.js";import"./ComboBoxItemGroup-C5w7p3nn.js";import"./ListItemBaseTemplate-DjnvcIEh.js";import"./Token-C1Lxypw2.js";import"./ScrollEnablement-BvgkaIDV.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DN6z6JAI.js";import"./ToggleButton-Do4GdOaF.js";import"./SuggestionItem-D8MLXmu2.js";import"./index-DE7-37Zx.js";import"./Option-3oJBHvkA.js";import"./index-CUcb9Gd6.js";import"./SegmentedButton-DfvUN2eU.js";import"./index-Bsqqc8MZ.js";import"./Select-B8folAVa.js";import"./InvisibleMessage-DbLy2p28.js";import"./slim-arrow-down-BI4obKhl.js";import"./index-_g-j8myn.js";import"./index-DlIBvfIs.js";import"./index-BsdBRU2K.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cv9GM9v6.js";import"./group-2-Bec-D2WX.js";import"./sort-descending-_A-rRud-.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BaG1O05d.js";import"./utils-B0At23gp.js";import"./index-BofIltQ1.js";import"./index-BI_6m6xU.js";import"./index-BDnRm_Qs.js";import"./navigation-down-arrow-DDHH9XQh.js";import"./navigation-right-arrow-sPX4M8sP.js";import"./navigation-right-arrow-CKY57fNf.js";import"./useCurrentTheme-NuodFJJx.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B62mh56S.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BifrIkAV.js";import"./paper-plane-CAhseGkA.js";import"./index-fMMDrhfL.js";import"./less-BLxfjnTZ.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
