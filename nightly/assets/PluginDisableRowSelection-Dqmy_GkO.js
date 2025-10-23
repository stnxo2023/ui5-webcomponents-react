import{j as e}from"./iframe-dhwXAt1u.js";import{useMDXComponents as n}from"./index-DImPBCtJ.js";import{I as r,F as s}from"./CommandsAndQueries-BiJh2_dH.js";import{M as l,C as a}from"./blocks-CTyxDY6f.js";import"./Tag-BG2XjNSs.js";import"./index-B1ZC6OTg.js";import"./copy-WVaPICqB.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-NobErNiv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DEgKjCYL.js";import"./index-C7W-OT1T.js";import"./index-3eryvK5U.js";import"./Link-Cd_dPy_Q.js";import"./index-CAgLAQbh.js";import"./index-T43jgYfn.js";import"./index-CdiB3Os4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BR_2w1_J.js";import"./addCustomCSSWithScoping-cc9WpAMd.js";import"./index-BPFGYJtx.js";import"./information-hzaD6T-d.js";import"./sys-enter-2-B2YAXpf0.js";import"./alert-DeSP_HIc.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BQJ9_hXc.js";import"./delete-ColCegI9.js";import"./settings-BKxUXi_G.js";import"./NoData-DE4p_qfr.js";import"./IllustratedMessage-IVjS-cFc.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-BYHaslJ3.js";import"./index-BdKfj6BP.js";import"./index-Bo0SF_w8.js";import"./slim-arrow-down-RFEatmWJ.js";import"./Input-Dhh001VP.js";import"./ResponsivePopoverCommon.css-byQMK4lk.js";import"./ValueStateMessage.css-7UGm8ZKL.js";import"./Suggestions.css-ChcbQr92.js";import"./ListBoxItemGroupTemplate-6OIAemZH.js";import"./ComboBoxItemGroup-BfFjklB8.js";import"./ListItemBaseTemplate-D31ELJez.js";import"./Token-9QLbAU5H.js";import"./ScrollEnablement-Bjuu67w6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BwVKYcla.js";import"./ToggleButton-D60jws_T.js";import"./SuggestionItem-BY0B1lvJ.js";import"./index-DFsd0zaO.js";import"./Option-Blnne7RQ.js";import"./index-DdMJqEp5.js";import"./SegmentedButton-DUCC8xz-.js";import"./index-hsE4BZb-.js";import"./Select-VK7jMl2Q.js";import"./InvisibleMessage-aNho_UJn.js";import"./slim-arrow-down-CHcSrWyO.js";import"./index-_A95DrSO.js";import"./index-xhEmKt2i.js";import"./index-C-LnOqtr.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D5RqGlQv.js";import"./group-2-CYR4pn1M.js";import"./sort-descending-Dqk7kt1w.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DFpmbe8i.js";import"./utils-bFJ73DdM.js";import"./index-B4TolNq1.js";import"./index-kxgSnLRw.js";import"./index-Dae02is2.js";import"./navigation-down-arrow-zUd6dVMN.js";import"./navigation-right-arrow-DHvkUpoR.js";import"./navigation-right-arrow-5cHWwAFo.js";import"./useCurrentTheme-Ecq0NIxs.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DuHZ_byj.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-xQaBj4C2.js";import"./paper-plane-BQm487K_.js";import"./index-CEgJEyfN.js";import"./less-DyOzkEyI.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
