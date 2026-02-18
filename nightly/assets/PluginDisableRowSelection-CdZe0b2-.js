import{j as e}from"./iframe-Dk0n26L0.js";import{useMDXComponents as n}from"./index-GonNK-F8.js";import{I as r,F as s}from"./CommandsAndQueries-C5xq4Qip.js";import{M as l,C as a}from"./blocks-Do665btL.js";import"./Tag-DHDcW-fI.js";import"./index-zII-B7tZ.js";import"./copy-DI2yzFNj.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CDVHvZJu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BOuRbWlk.js";import"./index-DZcV0iyk.js";import"./index-Dww5FXQ1.js";import"./Link-CiqsvlwF.js";import"./index-BYI0Uf8A.js";import"./index-A7L-MktQ.js";import"./index-DuchmHxs.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-WCv2CDBA.js";import"./addCustomCSSWithScoping-C7tuYiM4.js";import"./index-DVvxIcdz.js";import"./information-CyaCviRw.js";import"./sys-enter-2-BeHXFnMA.js";import"./alert-CjBv8gy0.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BGSne0t9.js";import"./delete-Wr4GKhKk.js";import"./settings-CTkQY05A.js";import"./NoData-DN-HgX0w.js";import"./IllustratedMessage-WiIf7tiQ.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CsDkGDUR.js";import"./index-BEOp2Qs8.js";import"./index-DkDwXcnb.js";import"./slim-arrow-down-oRzOUke0.js";import"./Input-BrteEEfL.js";import"./ResponsivePopoverCommon.css-B_3MTk0W.js";import"./ValueStateMessage.css-DW6dpdMx.js";import"./Suggestions.css-BKD2VSge.js";import"./ListBoxItemGroupTemplate-DphDFimI.js";import"./ComboBoxItemGroup-CfpmoNkX.js";import"./ListItemBaseTemplate-BW6zm8tA.js";import"./Token-fVkVNRGm.js";import"./ScrollEnablement-BDIo3BIe.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-8LD2v8AG.js";import"./ToggleButton-lLT-pIBz.js";import"./SuggestionItem-BgHqUSrH.js";import"./index-BakJLASc.js";import"./Option-Bs3lQB5f.js";import"./index-BfchdiDe.js";import"./SegmentedButton-kL0-alOP.js";import"./index-WaTuFDqY.js";import"./Select-CgcyfRGV.js";import"./InvisibleMessage-DxH_2GsR.js";import"./slim-arrow-down-Buf41Nuz.js";import"./index-DHKtmYan.js";import"./index-CO1j-MpK.js";import"./index-BbjMprDv.js";import"./index-BGwOxs0U.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CWCwhs_t.js";import"./group-2-DBqLD-HP.js";import"./sort-descending-NSp7tyQ0.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Blitw6nk.js";import"./utils-BVujrbxV.js";import"./index-D4w2TJZn.js";import"./index-g0v-MWQC.js";import"./index-Dvotll0l.js";import"./navigation-down-arrow-C3npHCkQ.js";import"./navigation-right-arrow-DIlKpP0p.js";import"./navigation-right-arrow-CfXHjg3k.js";import"./useCurrentTheme-K0AsAVmL.js";import"./index-BZVSQdFq.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cr1Ieyfb.js";import"./paper-plane-DShcb0AZ.js";import"./index-ufKMWArj.js";import"./less-znGJqNXZ.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
