import{j as e}from"./iframe-BAeEsjGg.js";import{useMDXComponents as n}from"./index-Bq0E1dsP.js";import{I as r,F as s}from"./CommandsAndQueries-BmSS4dsr.js";import{M as l,C as a}from"./blocks-BgvPFJNP.js";import"./Tag-C0AbLWiC.js";import"./index-CofNVADY.js";import"./copy-AboRjUVj.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CFI9VGkd.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BbgOEhgO.js";import"./index-CdyvC-L0.js";import"./index-D8OEyr8Q.js";import"./Link-C-dbgRnK.js";import"./index-B1MvTI4o.js";import"./index-Bh0rKKOG.js";import"./index-DTbJ3L--.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-j4KshgYu.js";import"./addCustomCSSWithScoping-dmB8rtW3.js";import"./index-BcBOqS22.js";import"./information-DWcYA3Ge.js";import"./sys-enter-2-CQUiiR68.js";import"./alert-DfrSfG2k.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C01vq_tG.js";import"./delete-B-vJcZEa.js";import"./settings-C9s2yLAD.js";import"./NoData-C_OT3nkl.js";import"./IllustratedMessage-Bw6CCqa1.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-CeOc3m_6.js";import"./index-BtfUZD9l.js";import"./index-bKb7cC61.js";import"./slim-arrow-down-plIUNiIv.js";import"./Input-BqTefG9q.js";import"./ResponsivePopoverCommon.css-CaExEbcN.js";import"./ValueStateMessage.css-j0uXhKgp.js";import"./Suggestions.css-LZu9AJzQ.js";import"./ListBoxItemGroupTemplate-CA08nrMV.js";import"./ComboBoxItemGroup-DSvJ8fHP.js";import"./ListItemBaseTemplate-PmrEhlyw.js";import"./Token-Dae4rL70.js";import"./ScrollEnablement-B_VGa692.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DkifgMKf.js";import"./ToggleButton-7zmtTUNl.js";import"./SuggestionItem-DyFoeHZd.js";import"./index-CIveRvMm.js";import"./Option-BddoQSs-.js";import"./index-C7Cx90Bv.js";import"./SegmentedButton-DFR9vAuR.js";import"./index-BeVxZxme.js";import"./Select-D8r9sg-T.js";import"./InvisibleMessage-BamEjZig.js";import"./slim-arrow-down-DPB1_EKt.js";import"./index-BK8lvVbF.js";import"./index-COe7AG8n.js";import"./index-BEoChkv9.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B3GX0NY1.js";import"./group-2-Ck2TlhgN.js";import"./sort-descending-Bcg2xsEH.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DnyBfK-i.js";import"./utils-C1cOCLNW.js";import"./index-Co1haORi.js";import"./index-Bn4aUwEb.js";import"./index-CJ_qaT_q.js";import"./navigation-down-arrow-Ch-dz918.js";import"./navigation-right-arrow-nGujzQ0V.js";import"./navigation-right-arrow-DJO4C4Vi.js";import"./useCurrentTheme-CgyKYq3h.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BS5kb7Yk.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CkDYu-F2.js";import"./paper-plane-DNrev12r.js";import"./index-qCY9xvvQ.js";import"./less-CUB-bYbC.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
