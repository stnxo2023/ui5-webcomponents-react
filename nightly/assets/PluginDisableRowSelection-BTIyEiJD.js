import{j as e}from"./iframe-m3wgL8DO.js";import{useMDXComponents as n}from"./index-BDA4Q--W.js";import{I as r,F as s}from"./CommandsAndQueries-DJJG77Q0.js";import{M as l,C as a}from"./blocks-CkTarMgO.js";import"./Tag-tSZf1-5X.js";import"./index-XwYlDB9P.js";import"./copy-CODhXho7.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-uoQ6fw54.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BhmtIGIH.js";import"./index-D9MBfHQe.js";import"./index-CVyBcJoi.js";import"./Link-BBA1fpnp.js";import"./index-CLINieEb.js";import"./index-00DfGzTS.js";import"./index-B7uA3u-p.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C6f_OpFu.js";import"./addCustomCSSWithScoping-D1ffFiBE.js";import"./index-BSNngnc7.js";import"./information-DsCCxR_j.js";import"./sys-enter-2-3GVzqOhh.js";import"./alert-CYqVZ7NL.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CM97FBcw.js";import"./delete-Bf921CWr.js";import"./settings-BYe7f3tO.js";import"./NoData-Dh7joJIl.js";import"./IllustratedMessage-CxQCJ2ay.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-CTWxVoyD.js";import"./index-ljJh2mXy.js";import"./index-DdE1XOTZ.js";import"./slim-arrow-down-8v6NvsKW.js";import"./Input-Cs15w5r3.js";import"./ResponsivePopoverCommon.css-C9hxCvuP.js";import"./ValueStateMessage.css-z6jg6mGY.js";import"./Suggestions.css-DbjXinA2.js";import"./ListBoxItemGroupTemplate-9uh1HRli.js";import"./ComboBoxItemGroup-BqRSt8o0.js";import"./ListItemBaseTemplate-BAr1QC4e.js";import"./Token-DRcSqql8.js";import"./ScrollEnablement-Dlq8aT82.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DGziFzMo.js";import"./ToggleButton-sEBB_MTe.js";import"./SuggestionItem-Cc8TNMCR.js";import"./index-CxG5u9XF.js";import"./Option-QpRjKkO3.js";import"./index-CXyubNwj.js";import"./SegmentedButton-BflLR7ZS.js";import"./index-D17ZhWQV.js";import"./Select-Cp0iaTMd.js";import"./InvisibleMessage-BUt-p4eg.js";import"./slim-arrow-down-BxbuKxeo.js";import"./index-CKvze9UP.js";import"./index-DaG3SG7b.js";import"./index-Bt_KiuWe.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BM91Z3C5.js";import"./group-2-BwsR6O4m.js";import"./sort-descending-BqWoToib.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Cl9chJaT.js";import"./utils-DiSEeJmV.js";import"./index-vic8-m6V.js";import"./index-J2w0B87P.js";import"./index-Bcls0r_S.js";import"./navigation-down-arrow-DD0yo9R6.js";import"./navigation-right-arrow-D4MH6EAI.js";import"./navigation-right-arrow-Vgro8iwV.js";import"./useCurrentTheme-Cx5Llmvy.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BW_d6Mec.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-NbRukm78.js";import"./paper-plane-Bod-WMHa.js";import"./index-CIqeAo6O.js";import"./less-jU3EhTke.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
