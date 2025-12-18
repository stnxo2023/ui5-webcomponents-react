import{j as e}from"./iframe-DE5WqRSI.js";import{useMDXComponents as n}from"./index-DVGykmsi.js";import{I as r,F as s}from"./CommandsAndQueries-CT_qy-L6.js";import{M as l,C as a}from"./blocks-CybNjylu.js";import"./Tag-DXduP7K6.js";import"./index-BqsIcBTd.js";import"./copy-CmTK1gpG.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-C3OL6pAr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C3HZg113.js";import"./index-Bo0MdSU9.js";import"./index-CxE79HQo.js";import"./Link-BcyJtysS.js";import"./index-EXtiqGa7.js";import"./index-DF_fIzZz.js";import"./index-BoscFH1P.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CURCJNNc.js";import"./addCustomCSSWithScoping-CHzs5Kt8.js";import"./index-C1194UdL.js";import"./information-CfYTqUOR.js";import"./sys-enter-2-Dqu1QcV8.js";import"./alert-Dotce8LG.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D8bIdqWY.js";import"./delete-DoYichJ9.js";import"./settings-CZU_ZJ1W.js";import"./NoData-CZpLmT-x.js";import"./IllustratedMessage-LENPWSEm.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-BgR1eZwE.js";import"./index-B3Xqsb1Q.js";import"./index-R106sdPA.js";import"./slim-arrow-down-C4VKqtzG.js";import"./Input-DlArSVkv.js";import"./ResponsivePopoverCommon.css-Cq6LxgIa.js";import"./ValueStateMessage.css-Cn051aSB.js";import"./Suggestions.css-Bdq3EXqW.js";import"./ListBoxItemGroupTemplate-CyrDSXZo.js";import"./ComboBoxItemGroup-TKl3BoRz.js";import"./ListItemBaseTemplate-B03-wmFo.js";import"./Token-Dg7qiry7.js";import"./ScrollEnablement-B1rg2zRK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CFNpTG6Z.js";import"./ToggleButton-Zt7gvlFv.js";import"./SuggestionItem-D5tKUGZ0.js";import"./index-DiH8R-tE.js";import"./Option-CXIWrKVD.js";import"./index-BQ0OFhZj.js";import"./SegmentedButton-CcDlKKiv.js";import"./index-C0g5pUuk.js";import"./Select-BvpJxR_5.js";import"./InvisibleMessage-BlCBqyND.js";import"./slim-arrow-down-DEwJBIUS.js";import"./index-mUAstY9h.js";import"./index-B9aDXKRc.js";import"./index-CqMTF644.js";import"./index-BcVPuJ_0.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DttNweVC.js";import"./group-2-C61vdaG7.js";import"./sort-descending-MtSyw_8y.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CUv9Snax.js";import"./utils-B-5aInVE.js";import"./index-DcmdwFOG.js";import"./index-CIbFjeJU.js";import"./index-kbflT9HY.js";import"./navigation-down-arrow-D2MASbC_.js";import"./navigation-right-arrow-DYEDqb8B.js";import"./navigation-right-arrow-Ba2Y3uGG.js";import"./useCurrentTheme-CKsG-a7q.js";import"./index-DnEL084z.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BThYFQYx.js";import"./paper-plane-CxhIT5X8.js";import"./index-CyZOZ66H.js";import"./less-BXwZj-_-.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
