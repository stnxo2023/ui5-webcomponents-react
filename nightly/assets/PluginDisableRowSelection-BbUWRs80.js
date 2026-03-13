import{j as e}from"./iframe-D-7Wdns9.js";import{useMDXComponents as n}from"./index-DvD8yUkt.js";import{I as r}from"./CommandsAndQueries-DtEJSw4R.js";import{M as s,C as l}from"./blocks-DbRPcZc3.js";import"./Tag-CnF9nKkB.js";import"./index-Be6zsFxp.js";import"./copy-eIAIBU-7.js";import{F as a}from"./Footer-M_QXWpzq.js";import"./PageNotFound-C1UEztRs.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DCWjplL6.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-B-zN_JAi.js";import"./index-DvVefbTP.js";import"./index-Bj1jARrT.js";import"./index-Xz-lwjQC.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CyP71rSn.js";import"./addCustomCSSWithScoping-DvzvYvm_.js";import"./index-IYXWglY5.js";import"./index-D18p9Zu8.js";import"./index-jYQjsDyG.js";import"./information-DJAFTTyQ.js";import"./sys-enter-2-CY8szrdt.js";import"./alert-B0l8ygN-.js";import"./index-BwYsEJM0.js";import"./Illustrations-BvGUWHq-.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-xnkjzkNM.js";import"./delete-CTm07_I6.js";import"./settings-Dera6BUq.js";import"./NoData-DhYwOlVJ.js";import"./NoFilterResults-BzCKWE4q.js";import"./index-BO4WdR2c.js";import"./IllustratedMessage-q392qVc7.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-DANBiJYI.js";import"./Input-Cp96Jnd7.js";import"./ResponsivePopoverCommon.css-Sl7osct5.js";import"./ValueStateMessage.css-gHfjldlM.js";import"./Suggestions.css-BDE0tH2L.js";import"./ListBoxItemGroupTemplate-UuY21VMH.js";import"./ComboBoxItemGroup-BpTqaFWD.js";import"./ListItemBaseTemplate-BNrzSWz7.js";import"./Token-D687qbiA.js";import"./ScrollEnablement-U6Xzy_Kr.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CB-iQ9fV.js";import"./ToggleButton-DChenGu9.js";import"./multiselect-all-DZsJihlM.js";import"./SuggestionItem-CoXh7lo4.js";import"./index-CCg5QgLJ.js";import"./Option-BkY44RQX.js";import"./index-B09Whsxr.js";import"./SegmentedButton-BKJR91WQ.js";import"./index-vOadrNEy.js";import"./Select-CUKOY9zK.js";import"./InvisibleMessage-D8eqIb81.js";import"./index-CsAfykCl.js";import"./index--ZEFn26I.js";import"./index-D2yuBR4r.js";import"./index-CAqW3SuX.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BJ54auiG.js";import"./group-2-CpFk6_lc.js";import"./sort-descending-BeLPS0WX.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-H-O4wn2B.js";import"./utils-DyIZyrE-.js";import"./index-DN8JrYBf.js";import"./index-CMjatJ1L.js";import"./index-D4V_2-aN.js";import"./navigation-down-arrow-BbsuHHwf.js";import"./navigation-right-arrow-DYYtY0JW.js";import"./navigation-right-arrow-P062IBqh.js";import"./useCurrentTheme-ChSiS0ST.js";import"./index-BAR7WUDu.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Ba3nL1b4.js";import"./paper-plane-mdEDK4gR.js";import"./index-B-U-wWOK.js";import"./less-Cbo4vjAe.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
