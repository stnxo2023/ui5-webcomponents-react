import{j as e}from"./iframe-DT7hQ3AG.js";import{useMDXComponents as n}from"./index-DTdIoXIV.js";import{I as r,F as s}from"./CommandsAndQueries-yjo1_LDl.js";import{M as l,C as a}from"./blocks-JRrvULZW.js";import"./Tag-DiLaQDn-.js";import"./index-B-uTHhu7.js";import"./copy-BZt3PDtc.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DJf1Cndu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CddBOV7O.js";import"./index-C77H1xG_.js";import"./index-DnmZF6f8.js";import"./Link-G5lQtbW1.js";import"./index-DOozC4VO.js";import"./index-RcOcV3SW.js";import"./index-BT5-01iU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CVNusK2J.js";import"./addCustomCSSWithScoping-BEpn4Gqh.js";import"./index-BRw-bjcq.js";import"./information-BTX-CwCK.js";import"./sys-enter-2-Ckqh2Zib.js";import"./alert-j2_xvgwV.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BQysclUq.js";import"./delete-CeyxsMhm.js";import"./settings-DNzL1VLp.js";import"./NoData-D55CCIT8.js";import"./IllustratedMessage-DdOGU8iu.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DEWd1NOO.js";import"./index-Cvz-A2Iy.js";import"./index-CMxGkooZ.js";import"./slim-arrow-down-D50am5_P.js";import"./Input-CiFaXTlp.js";import"./ResponsivePopoverCommon.css-K8_QNK7m.js";import"./ValueStateMessage.css-C74mOLeC.js";import"./Suggestions.css-Cd_sUhjR.js";import"./ListBoxItemGroupTemplate-MrpowO6L.js";import"./ComboBoxItemGroup-JHT7eKkU.js";import"./ListItemBaseTemplate-cYuiWrew.js";import"./Token-74hpwmue.js";import"./ScrollEnablement-C3Wt9Cue.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DUKcPDwc.js";import"./ToggleButton-YrPJ68bM.js";import"./SuggestionItem-CihSCUQE.js";import"./index-Bq6tT57Z.js";import"./Option-Bhgcb91O.js";import"./index-CQXfWENp.js";import"./SegmentedButton-wIlHxxU5.js";import"./index-Bah3sHAa.js";import"./Select-BAJF9MUA.js";import"./InvisibleMessage-D4QZC_oh.js";import"./slim-arrow-down-Ddzx8t1A.js";import"./index-B9SneDxK.js";import"./index-CjyRf1Rx.js";import"./index-DZrXzplx.js";import"./index-BJs3_1HF.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B45Yx_uW.js";import"./group-2-xTMpIWf0.js";import"./sort-descending-o9PDLWx6.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CUBCEi1k.js";import"./utils-MrKqThPe.js";import"./index-BO3xCydK.js";import"./index-BLjdJn29.js";import"./index-BGk70aYe.js";import"./navigation-down-arrow-DJEikV3a.js";import"./navigation-right-arrow-BNlj3PDZ.js";import"./navigation-right-arrow-C-qFNytF.js";import"./useCurrentTheme-DR--wRSh.js";import"./index-D1b27DJe.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BIZQiftC.js";import"./paper-plane-GTcq8Dwh.js";import"./index-8AKQM2r8.js";import"./less-BZfAkQR5.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
