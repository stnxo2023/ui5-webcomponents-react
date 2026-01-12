import{j as e}from"./iframe-BWwaFrUe.js";import{useMDXComponents as n}from"./index-YNaFuKct.js";import{I as r,F as s}from"./CommandsAndQueries-BTZsnlDx.js";import{M as l,C as a}from"./blocks-CUOVkMW1.js";import"./Tag-C1jS-OQM.js";import"./index-D57lmYpc.js";import"./copy-CotvDhWa.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BMcdVAna.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DWyfCle9.js";import"./index-CPNWsz0F.js";import"./index-D2byHvrl.js";import"./Link-BKxr4_LG.js";import"./index-CjEjkqT0.js";import"./index-BHGImwbL.js";import"./index-CZL1WN1v.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B9SYXEMy.js";import"./addCustomCSSWithScoping-DT9AYQXn.js";import"./index-B87YjzNM.js";import"./information-DMTe0ysY.js";import"./sys-enter-2-DQvPI1W2.js";import"./alert-BsvI3BFP.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ZJM36qku.js";import"./delete-DOgupLX8.js";import"./settings-4vio0KZw.js";import"./NoData-CX6GFhcP.js";import"./IllustratedMessage-DQsQaQ5a.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-C-6BQoNw.js";import"./index-B9Gz8ycv.js";import"./index-CN1ndyZW.js";import"./slim-arrow-down-CmSn7Sik.js";import"./Input-CY2_jO7N.js";import"./ResponsivePopoverCommon.css-DLB8912B.js";import"./ValueStateMessage.css-BD8m1HnI.js";import"./Suggestions.css-BBBvQtOR.js";import"./ListBoxItemGroupTemplate-yf3HFsAX.js";import"./ComboBoxItemGroup-D2AL_rCQ.js";import"./ListItemBaseTemplate-QNOu6P8O.js";import"./Token-DzMcWdi_.js";import"./ScrollEnablement-JdqAnokE.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D-3ZFt0p.js";import"./ToggleButton-Cf5cO5pE.js";import"./SuggestionItem-RvTEtoqI.js";import"./index-V1xW8ahy.js";import"./Option-tKeldczj.js";import"./index-BwnRWUYP.js";import"./SegmentedButton-SW6UDtT6.js";import"./index-DMORvkBO.js";import"./Select-DMl3Tw2N.js";import"./InvisibleMessage-C817vP8u.js";import"./slim-arrow-down-DkhplX3E.js";import"./index-c5nDhqAm.js";import"./index-C8H6ETRj.js";import"./index-MtPA4SgJ.js";import"./index-BD5bs7yp.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ClKCT9rN.js";import"./group-2-Dpay8E0t.js";import"./sort-descending-DyGsNaKs.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-vQwIUp-n.js";import"./utils-CdBNuaY-.js";import"./index-BDRKN7at.js";import"./index-BXKFr2l-.js";import"./index-mG3R14Tg.js";import"./navigation-down-arrow-BHHjgb5v.js";import"./navigation-right-arrow-CsvEnEN9.js";import"./navigation-right-arrow-Bmpxqsod.js";import"./useCurrentTheme-DCWBN9yR.js";import"./index-BuCzF1I2.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Ccg0UGwD.js";import"./paper-plane-o_qW1OCn.js";import"./index-BmyR6abe.js";import"./less-BiUEcVEK.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
