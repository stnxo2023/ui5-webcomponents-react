import{j as e}from"./iframe-IArRSqE_.js";import{useMDXComponents as n}from"./index-j7nsZpBW.js";import{I as r,F as s}from"./CommandsAndQueries-Y7cLRyXq.js";import{M as l,C as a}from"./blocks-uZpIO_b1.js";import"./Tag-y4SxBR_K.js";import"./index-BxBWQyES.js";import"./copy-7xAa2gpG.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BkqA6iXe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-AiAyIf9Q.js";import"./index-C0j3-f_Y.js";import"./index-gakMtpus.js";import"./Link-Ba0uGRWm.js";import"./index-NrHuYdPm.js";import"./index-Cs2OWExd.js";import"./index-DL3EiYIa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Gn0YqzQq.js";import"./addCustomCSSWithScoping-DtA6p3SW.js";import"./index-Dxbh4gdX.js";import"./information-CXNknbN_.js";import"./sys-enter-2-ByYwkCyE.js";import"./alert-ryPoEChu.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-1N0Eq8bh.js";import"./delete-BpYGCW93.js";import"./settings-QUtefwRO.js";import"./NoData-BfNcqfUs.js";import"./IllustratedMessage-DbI5RVEz.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DdOfsEgr.js";import"./index-DAEebFt6.js";import"./index-CvKfJEnX.js";import"./slim-arrow-down-CSyKASAS.js";import"./Input-cW7JJ7b6.js";import"./ResponsivePopoverCommon.css-DVDWeT9K.js";import"./ValueStateMessage.css-W9SPqd3S.js";import"./Suggestions.css-DAgR6HvO.js";import"./ListBoxItemGroupTemplate-DiENw7p6.js";import"./ComboBoxItemGroup-QFrY2sVI.js";import"./ListItemBaseTemplate-C6zWgODK.js";import"./Token-Cd_Fzg2A.js";import"./ScrollEnablement-n9c5FDfp.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C2IILuHn.js";import"./ToggleButton-B-umBxz3.js";import"./SuggestionItem-BGp5wTE2.js";import"./index-PCqe8LzU.js";import"./Option-DNXns7Qu.js";import"./index-CPuaLVo-.js";import"./SegmentedButton-g_x-Qdey.js";import"./index-DzjJZIQt.js";import"./Select-Fl9If8OF.js";import"./InvisibleMessage-CvbQRyy5.js";import"./slim-arrow-down-CDqB4_RO.js";import"./index-BHZkDumw.js";import"./index-CplVzSTZ.js";import"./index-BIoXLnZD.js";import"./index-CXKXn_sm.js";import"./IconDesign-DXd8PPVF.js";import"./filter-2Icy2qTG.js";import"./group-2-CbKDFJtT.js";import"./sort-descending-CC3WileJ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-ebj139yB.js";import"./utils-wGJGGLR4.js";import"./index-DfFr6hKm.js";import"./index-DE-yEL4-.js";import"./index-Bl053VFJ.js";import"./navigation-down-arrow-BfaasJa4.js";import"./navigation-right-arrow-D98pnN-Z.js";import"./navigation-right-arrow-O-4HQyyY.js";import"./useCurrentTheme-BaKmNskh.js";import"./index-DpTPjJsC.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BRehkAZJ.js";import"./paper-plane-logWDsxf.js";import"./index-PtMah9EX.js";import"./less-Crcn7S2y.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
