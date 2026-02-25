import{j as e}from"./iframe-BHlEgbZD.js";import{useMDXComponents as n}from"./index-DuWPJPdo.js";import{I as r,F as s}from"./CommandsAndQueries-CRy7DgFq.js";import{M as l,C as a}from"./blocks-BZ1_Gb0n.js";import"./Tag-CUIBDfjO.js";import"./index-DMcN3ohr.js";import"./copy-Ds19teD5.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-ByzE4p5Q.js";import"./preload-helper-PPVm8Dsz.js";import"./index-57xnhTbk.js";import"./index-D8Q0xw5Q.js";import"./index-CPQEcn_1.js";import"./Link-DdeM_yx0.js";import"./index-DXZq7O0l.js";import"./index-COEmfUFW.js";import"./index-x01lEzby.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbwzLluT.js";import"./addCustomCSSWithScoping-BezKsk6D.js";import"./index-2QbIapUz.js";import"./information-Cbg1Tz52.js";import"./sys-enter-2-Z2Vy22vQ.js";import"./alert-BcFaqecl.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CC6hyO-N.js";import"./delete-4ZvrUKjO.js";import"./settings-DG_uwOtb.js";import"./NoData-DYxHoJfA.js";import"./IllustratedMessage-udF9mWrD.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CbnIbvhX.js";import"./index-DN6hq5_h.js";import"./index-BT3cRVz2.js";import"./slim-arrow-down-36KS2JIw.js";import"./Input-BOFtXl-H.js";import"./ResponsivePopoverCommon.css-DVGkEwPu.js";import"./ValueStateMessage.css-BcukUnSJ.js";import"./Suggestions.css-oxI77au-.js";import"./ListBoxItemGroupTemplate-CEjJ4Crf.js";import"./ComboBoxItemGroup-C_SgaNix.js";import"./ListItemBaseTemplate-D1qgX7Z0.js";import"./Token-BULKmOKE.js";import"./ScrollEnablement-Cu7uqZ0X.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CeF-gQpE.js";import"./ToggleButton-DYZAZrxx.js";import"./SuggestionItem-BZywVYEn.js";import"./index-BEzWpt9n.js";import"./Option-DaLzGShP.js";import"./index-BTRoGroB.js";import"./SegmentedButton-DcSgMcr8.js";import"./index-BP72XLPJ.js";import"./Select-zEDuWLFW.js";import"./InvisibleMessage-OeUWQ5Ye.js";import"./slim-arrow-down-DLrArs5r.js";import"./index-DCYT0nIY.js";import"./index-CvJhvJHe.js";import"./index-D4qBUSpf.js";import"./index-C57Z4SS3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CC3D5stC.js";import"./group-2-CAC2yRw6.js";import"./sort-descending-Ct46rwrC.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B3QDW9YY.js";import"./utils-Bkxa81Gm.js";import"./index-h4KD2Npg.js";import"./index-ChBdg0CU.js";import"./index-Dxaffyfy.js";import"./navigation-down-arrow-CUMLWhBn.js";import"./navigation-right-arrow-D2ty4le0.js";import"./navigation-right-arrow-DEzFZZdH.js";import"./useCurrentTheme-CTTdfk_h.js";import"./index-Db_zW0W2.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Dp2bM3ZO.js";import"./paper-plane-wrAGSNsE.js";import"./index-0vEfSv_1.js";import"./less-D9a_VPsv.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
