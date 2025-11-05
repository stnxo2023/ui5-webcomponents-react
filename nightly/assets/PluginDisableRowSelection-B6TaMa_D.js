import{j as e}from"./iframe-CRwp3Tpg.js";import{useMDXComponents as n}from"./index-COIro8D8.js";import{I as r,F as s}from"./CommandsAndQueries-BOt8E6ok.js";import{M as l,C as a}from"./blocks-C4HsTNIO.js";import"./Tag-tfloHdXZ.js";import"./index-B8mUtBGn.js";import"./copy-DIWKtK23.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BkiRgwtD.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DtgT2jRs.js";import"./index-B3NhI5Qb.js";import"./index-Cv51gsI_.js";import"./Link-Dtv1Hpbf.js";import"./index-DIEFvDQl.js";import"./index-DzYDiZvU.js";import"./index-DYA05DWY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D0x12wWs.js";import"./addCustomCSSWithScoping-Dv4ZSX5E.js";import"./index-C0aL9woL.js";import"./information-MlnnkJju.js";import"./sys-enter-2-DNoGuffO.js";import"./alert-aDgjp5mZ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BIKVWOiQ.js";import"./delete-BsiUWMyb.js";import"./settings-sxQzjKnN.js";import"./NoData-BdJ39RdV.js";import"./IllustratedMessage-D4izY5uv.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-BQNjO2jS.js";import"./index-COdypGT7.js";import"./index-DbsdpZ0s.js";import"./slim-arrow-down-C-sQkdwh.js";import"./Input-CKqAaoJh.js";import"./ResponsivePopoverCommon.css-TNg_0n0_.js";import"./ValueStateMessage.css-CYdcHCck.js";import"./Suggestions.css-BAVf_4rH.js";import"./ListBoxItemGroupTemplate-CqtX5gL_.js";import"./ComboBoxItemGroup-XlcjepWp.js";import"./ListItemBaseTemplate-DNSZp8wv.js";import"./Token-CSx3lX-3.js";import"./ScrollEnablement-CzlDnCBe.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CG69oYew.js";import"./ToggleButton-8cblrt3F.js";import"./SuggestionItem-XM4Pz9fl.js";import"./index-CRs2PjFa.js";import"./Option-y4L7YpM6.js";import"./index-DRJHyZv9.js";import"./SegmentedButton-CDx2wd85.js";import"./index-BfNpixh1.js";import"./Select-BYSDq3x_.js";import"./InvisibleMessage-BMQ2txcL.js";import"./slim-arrow-down-DDdekocZ.js";import"./index-DEay9TCB.js";import"./index-BMcRBVTx.js";import"./index-WpAbWfDk.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DBC-rl-6.js";import"./group-2-D2J0_DJH.js";import"./sort-descending-DZsOcrOl.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-xFdAYmE4.js";import"./utils-rzD3DZ3e.js";import"./index-Bmk_6Mqn.js";import"./index-BHqYfiWu.js";import"./index-C9fmCLaq.js";import"./navigation-down-arrow-DTNzqgNt.js";import"./navigation-right-arrow-DL5KfXIw.js";import"./navigation-right-arrow-CDwfvJNR.js";import"./useCurrentTheme-BsJOJC7B.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CbdzFybD.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DAMtZyo0.js";import"./paper-plane-E8fm-GBo.js";import"./index-Dzeoy_HR.js";import"./less-xMOC9uh_.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
