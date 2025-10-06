import{j as e}from"./iframe-C3aU9yO2.js";import{useMDXComponents as n}from"./index-DcLDqK7w.js";import{I as r,F as s}from"./CommandsAndQueries-D0nTXU9T.js";import{M as l,C as a}from"./blocks-B9oc031V.js";import"./Tag-CNw53_eT.js";import"./index-i1N6ua_w.js";import"./copy-D_R4P06r.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BwxHOvH5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CfpqN5Id.js";import"./index-g0B9jrXN.js";import"./index-DKI76k_B.js";import"./Link-BnEnKAv3.js";import"./index-DBwKQ69N.js";import"./index-D8QgyDbC.js";import"./index-CPcH_eI_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CPfGSaYG.js";import"./addCustomCSSWithScoping-C73QrPVQ.js";import"./index-BU0JfJz1.js";import"./information-B-Ns6m0d.js";import"./sys-enter-2-D_Kaw-gu.js";import"./alert-7z2pNDRB.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DnUmXdKQ.js";import"./delete-DmCWbdAi.js";import"./settings-1nFL_G7A.js";import"./NoData-vppJJq2k.js";import"./IllustratedMessage-BIRyOBBo.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-CtRAMKvF.js";import"./index-DEu9ukF7.js";import"./index-BJ4JqDZt.js";import"./slim-arrow-down-B-t7KMm_.js";import"./Input-Cfbtnwg6.js";import"./ResponsivePopoverCommon.css-BiqlokwB.js";import"./ValueStateMessage.css-BCiC-Blk.js";import"./Suggestions.css-DhC4w4Fb.js";import"./ListBoxItemGroupTemplate-C7SkMpNF.js";import"./ComboBoxItemGroup-CIO6k5QH.js";import"./ListItemBaseTemplate-C7NEMs7Q.js";import"./Token-D-8TO1My.js";import"./ScrollEnablement-B-ve8lNO.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BPLw0fnj.js";import"./ToggleButton--U2n7cRR.js";import"./SuggestionItem-B5fupWrO.js";import"./index-DrHO_6Yk.js";import"./Option-CeOJa7O5.js";import"./index-haCaBy7F.js";import"./SegmentedButton-DasYM7ls.js";import"./index-BHr0wFPK.js";import"./Select-C8enezS2.js";import"./InvisibleMessage-Ce5yXPOl.js";import"./slim-arrow-down-gN-yvIKk.js";import"./index-DcrniWqF.js";import"./index-ATxduGAU.js";import"./index-HMHM8G5Q.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BV4nhufn.js";import"./group-2-DXTcSu-3.js";import"./sort-descending-_zxdumlM.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DbNwybSm.js";import"./utils-HF4Qfx7C.js";import"./index-D4SYQI3K.js";import"./index-BFaqayaE.js";import"./index-CJWdScx6.js";import"./navigation-down-arrow-D4g4EBUf.js";import"./navigation-right-arrow-C2JbsM5-.js";import"./navigation-right-arrow-DER4Cb5G.js";import"./useCurrentTheme-CNp62qcx.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C_6DRLOc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CyLBUYXb.js";import"./paper-plane-CRXLbten.js";import"./index-DiOVCr3o.js";import"./less-C2uRyvrb.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
