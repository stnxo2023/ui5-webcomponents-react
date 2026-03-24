import{j as e}from"./iframe-DBRigOoU.js";import{useMDXComponents as n}from"./index-apRVXKap.js";import{I as r}from"./CommandsAndQueries-CSuPwIuY.js";import{M as s,C as l}from"./blocks-BfIRBmeA.js";import"./Tag-DEWl5_iK.js";import"./index-CtZlHOCH.js";import"./copy-D7myjbZ2.js";import{F as a}from"./Footer-C0l-yj0s.js";import"./PageNotFound-CQZvX7Tj.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-B11QIys0.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-WDyL8T_Q.js";import"./index-NhTjO4vR.js";import"./index-BAsbE3_A.js";import"./index-u05fNeKh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bc6gryl9.js";import"./addCustomCSSWithScoping-Oz7AbKTz.js";import"./index-DxEJ2UxM.js";import"./index-DybExlT-.js";import"./index-DWKSf_OJ.js";import"./information-Di_zbJNn.js";import"./sys-enter-2-CpC_ZrXX.js";import"./alert-CuS5B2OC.js";import"./index-C-7GLaxU.js";import"./Illustrations-aiaUW8Wr.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-7qA_JtjR.js";import"./delete-CTGykAkJ.js";import"./settings-Dg8O-66-.js";import"./NoData-DguEQNRg.js";import"./NoFilterResults-DtRFGhMh.js";import"./index-BhR_yJpK.js";import"./IllustratedMessage-ByVRx6RQ.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-D6CltELs.js";import"./Input-CtHTs60C.js";import"./ResponsivePopoverCommon.css-Da1SZvGe.js";import"./ValueStateMessage.css-nbS3DH35.js";import"./Suggestions.css-W26MlxzS.js";import"./ListBoxItemGroupTemplate-C6kkFi_o.js";import"./ComboBoxItemGroup-BElYaVDv.js";import"./ListItemBaseTemplate-CQKCVtx8.js";import"./Token-sjwuvo1P.js";import"./ScrollEnablement-D2Hwnqmj.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BfX1rpOQ.js";import"./ToggleButton-CBS-G2ZN.js";import"./multiselect-all-DN-bH4h7.js";import"./SuggestionItem-BdsM9iKO.js";import"./index-DtdveVs3.js";import"./Option-BiUpRTT7.js";import"./index-BRz6iuWA.js";import"./SegmentedButton-Bi1zUA1m.js";import"./index-DWQUGHoP.js";import"./Select-ozqLHBcF.js";import"./InvisibleMessage-CdaXnoMp.js";import"./index-BSmsbgeq.js";import"./index-caETFkvA.js";import"./index-Dg9lVvz1.js";import"./index-BFhPQQPD.js";import"./IconDesign-DXd8PPVF.js";import"./filter-p9qYgOWh.js";import"./group-2-BnNeS8WE.js";import"./sort-descending-DdagI1nq.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-rB7yhNqF.js";import"./utils-CCmbeTCZ.js";import"./index-BqTTgId_.js";import"./index-CrXK0vZY.js";import"./index-aJnjZLGo.js";import"./navigation-down-arrow-BFJ7Hu2K.js";import"./navigation-right-arrow-82Tpqbaq.js";import"./navigation-right-arrow-DkEC0vdN.js";import"./useCurrentTheme-CD182pcz.js";import"./index-CNAb_u8i.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CEAvFyV7.js";import"./paper-plane-CREdbXKT.js";import"./index-C4eTaivo.js";import"./less-W_1D3jc4.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(l,{sourceState:"none",of:m}),`
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
`,e.jsx(a,{})]})}function Ee(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ee as default};
