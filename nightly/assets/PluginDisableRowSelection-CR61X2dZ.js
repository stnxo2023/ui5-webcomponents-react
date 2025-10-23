import{j as e}from"./iframe-DJ3L9Q7k.js";import{useMDXComponents as n}from"./index-CgKASuks.js";import{I as r,F as s}from"./CommandsAndQueries-J0DynbNC.js";import{M as l,C as a}from"./blocks-CtbNLxKJ.js";import"./Tag-dHoy1aOg.js";import"./index-Drb2TrHE.js";import"./copy-dl-GArcT.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-XmI_OBRf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BiXweYzS.js";import"./index-4H2gG8m_.js";import"./index-DQGcZUo3.js";import"./Link-CI3a-uZg.js";import"./index-DDFmE4EA.js";import"./index-BTen11gj.js";import"./index-C_wfJoh6.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BifEEb3N.js";import"./addCustomCSSWithScoping-BamJJJtZ.js";import"./index-DJdHB7_b.js";import"./information-1qu8opp4.js";import"./sys-enter-2-Cu2hBGrK.js";import"./alert-Bssjvu3J.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ZogVh3-n.js";import"./delete-DJWhYD8C.js";import"./settings-NgS7zej6.js";import"./NoData-CmcwKAsS.js";import"./IllustratedMessage-BquGAG1y.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-6m67jwsT.js";import"./index-BMmEn-9e.js";import"./index-DHWps5pX.js";import"./slim-arrow-down-CD5MJjlC.js";import"./Input-BTxUiPoF.js";import"./ResponsivePopoverCommon.css-DAHQOPQC.js";import"./ValueStateMessage.css-C1vUk4m-.js";import"./Suggestions.css-AC0gY3Q2.js";import"./ListBoxItemGroupTemplate-BKr03FZt.js";import"./ComboBoxItemGroup-DmnfwRXO.js";import"./ListItemBaseTemplate-C7qYhT1t.js";import"./Token-Bh6SaF3b.js";import"./ScrollEnablement-BgeY4u8Z.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DMcqHDTj.js";import"./ToggleButton-Bq8xm8nS.js";import"./SuggestionItem-CmXkyaku.js";import"./index-DuEKvhcf.js";import"./Option-asFhuENp.js";import"./index-BVPkbHHt.js";import"./SegmentedButton-DmsFvxo8.js";import"./index-B_gzg89D.js";import"./Select-Cpy_GAyA.js";import"./InvisibleMessage-DIaqYHhI.js";import"./slim-arrow-down-BphH8SC0.js";import"./index-DvC78ri4.js";import"./index-QxoMqp8P.js";import"./index-BElugJkH.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BBj9Wq0r.js";import"./group-2-Bclkbxf6.js";import"./sort-descending-Qi2aeWer.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dx8gVwDW.js";import"./utils-AbgTTf_S.js";import"./index-BftjTv9E.js";import"./index-kkvWmntR.js";import"./index-f5CXzuCL.js";import"./navigation-down-arrow-Cn34Yi42.js";import"./navigation-right-arrow-BdYlSoky.js";import"./navigation-right-arrow-ZjAJAoPG.js";import"./useCurrentTheme-Dv8It12u.js";import"./IndicationColor-DVw-fSM_.js";import"./index-gUd0jpcr.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-g4vzgofK.js";import"./paper-plane-DR2uxcqx.js";import"./index-BTrtIEWf.js";import"./less-DMzNG9tV.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
