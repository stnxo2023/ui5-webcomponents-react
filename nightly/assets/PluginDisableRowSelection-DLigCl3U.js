import{j as e}from"./iframe-CB_qmYI8.js";import{useMDXComponents as n}from"./index-CUbKt2T4.js";import{I as r,F as s}from"./CommandsAndQueries-HFp-4-55.js";import{M as l,C as a}from"./blocks-DzH1842d.js";import"./Tag-BYvfvCLi.js";import"./index-BfAPJluR.js";import"./copy-DF2Z1I-X.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-23cGt9Fu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-R89IEGRw.js";import"./index-SxWu56C4.js";import"./index-DE9gqn8Y.js";import"./Link-BRHRm_Z2.js";import"./index-C0flI_9Q.js";import"./index-At4nCxiD.js";import"./index-6WmsPmX0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ClKIXNm7.js";import"./addCustomCSSWithScoping-9v1tewFq.js";import"./index-03LyQe5H.js";import"./information-CRpELSoZ.js";import"./sys-enter-2-DeQtcYtY.js";import"./alert-Bc8RvQjV.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DoIcej0d.js";import"./delete-h5Qd2W2H.js";import"./settings-CSx4aPPi.js";import"./NoData-BrRr6rJG.js";import"./IllustratedMessage-P-eTSBPb.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-C4AhZadB.js";import"./index-BecbeCsX.js";import"./index-4XDdM9qY.js";import"./slim-arrow-down-COs4Wkey.js";import"./Input-C9UjHzpz.js";import"./ResponsivePopoverCommon.css-DeWNHY7M.js";import"./ValueStateMessage.css-C_C4YLjN.js";import"./Suggestions.css-BiWmWxsR.js";import"./ListBoxItemGroupTemplate-CMTiHLs-.js";import"./ComboBoxItemGroup-CO3bHj-e.js";import"./ListItemBaseTemplate-DB4BankB.js";import"./Token-Bn2Z9z3x.js";import"./ScrollEnablement-zi7znCts.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cv8isNSi.js";import"./ToggleButton-CS3KiBib.js";import"./SuggestionItem-CS7L8vuq.js";import"./index-BmjeN9M0.js";import"./Option-DDYwfZPs.js";import"./index-BiQ1de6A.js";import"./SegmentedButton-B8To13C-.js";import"./index-MDU9FtHu.js";import"./Select-DhuDrd7S.js";import"./InvisibleMessage-Ds6r8Hv8.js";import"./slim-arrow-down-jIayUIlb.js";import"./index-DDk-oOqz.js";import"./index-CTC0a4Ev.js";import"./index-BvRf3EEd.js";import"./index-D2nb9FR-.js";import"./IconDesign-DXd8PPVF.js";import"./filter-J7STKAsw.js";import"./group-2-bvY_SkSU.js";import"./sort-descending-7NVh3v7n.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BUpkmw30.js";import"./utils-D98SoFu_.js";import"./index-CN6SBPye.js";import"./index-BhZzLROS.js";import"./index-Y1-1V0is.js";import"./navigation-down-arrow-BV093n8q.js";import"./navigation-right-arrow-hA-Kw1uy.js";import"./navigation-right-arrow-BYDjRs4q.js";import"./useCurrentTheme-C9z11eLv.js";import"./index-CPVT_XbL.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-NAZbOjtu.js";import"./paper-plane-DaL2oIMz.js";import"./index-B9MOWJBA.js";import"./less-CxZT17u6.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
