import{j as e}from"./iframe-CojmUvbr.js";import{useMDXComponents as n}from"./index-yNE59oSe.js";import{I as r,F as s}from"./CommandsAndQueries-aZHAlwyo.js";import{M as l,C as a}from"./blocks-CCIsbg9K.js";import"./Tag-Dsf3IOJa.js";import"./index-Brr98IUO.js";import"./copy-BaosELJI.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CG_nlWId.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DWXpW2Nz.js";import"./index-CJ7ufDVc.js";import"./index-YKIZAZmt.js";import"./Link-DrGCnOch.js";import"./index-DSq2zmmv.js";import"./index-n-K8h2zA.js";import"./index-BIRLYBEm.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CBX4KpMg.js";import"./addCustomCSSWithScoping-IwiFNes4.js";import"./index-CW7nJiyw.js";import"./information-BEykFvbu.js";import"./sys-enter-2-BjWZZR70.js";import"./alert-CeJt7tDB.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CscadejP.js";import"./delete-BrCc2tej.js";import"./settings-rTgMGjKN.js";import"./NoData-3cxxI4xB.js";import"./IllustratedMessage-DbYC26wy.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-UIvAx6KX.js";import"./index-Ca07kfjm.js";import"./index-Wu8As2d7.js";import"./slim-arrow-down-CnEombk5.js";import"./Input-CMo9bLuk.js";import"./ResponsivePopoverCommon.css-DnVyVoGn.js";import"./ValueStateMessage.css-awQruozh.js";import"./Suggestions.css-CNoZckwt.js";import"./ListBoxItemGroupTemplate-B7epaTRM.js";import"./ComboBoxItemGroup-CcEHTpa7.js";import"./ListItemBaseTemplate-BhUR_jwE.js";import"./Token-BNQ0MNpG.js";import"./ScrollEnablement-CsFUE6Hy.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-x9obTEZ-.js";import"./ToggleButton-B6FN-zj3.js";import"./SuggestionItem-BgJHRloZ.js";import"./index-CshUp08T.js";import"./Option-CcKhKS8d.js";import"./index-DNSi3hz_.js";import"./SegmentedButton-QKVFOy33.js";import"./index-Bw1q_xPl.js";import"./Select-DbE_8KmI.js";import"./InvisibleMessage-C9kaBW3M.js";import"./slim-arrow-down-CmTsJEng.js";import"./index-s2T_O_TR.js";import"./index-BnQtKf9Y.js";import"./index-fxNkC4ZC.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BapWlnQS.js";import"./group-2-BCIyFqCc.js";import"./sort-descending-DCnBtPjC.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BTW6f1H7.js";import"./utils-BOJTBdKc.js";import"./index-CGQmGuch.js";import"./index-Bf-N28hY.js";import"./index-k6h4lExd.js";import"./navigation-down-arrow-LIHAsR-b.js";import"./navigation-right-arrow-BaaRnnci.js";import"./navigation-right-arrow-Dej95qlj.js";import"./useCurrentTheme-iOMvhnFg.js";import"./IndicationColor-DVw-fSM_.js";import"./index-9IGeFUbL.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BjmSWWr0.js";import"./paper-plane-j8ePWbJq.js";import"./index-C9WiPxnz.js";import"./less-OV79TxhL.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
