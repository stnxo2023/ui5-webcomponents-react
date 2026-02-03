import{j as e}from"./iframe-CL0E0PWh.js";import{useMDXComponents as n}from"./index-Deybi7Kf.js";import{I as r,F as s}from"./CommandsAndQueries-CS7a2Ny4.js";import{M as l,C as a}from"./blocks-D7bkOkCE.js";import"./Tag-DqkevlzV.js";import"./index-CnAIuZ6O.js";import"./copy-ZUxcJ4wZ.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DzqTEMVF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CjZThSgP.js";import"./index-ChvCHLyh.js";import"./index-DKGx2Tou.js";import"./Link-opqw9zLH.js";import"./index-BmAVbjyV.js";import"./index-DNHIOaVp.js";import"./index-BjeAAycA.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C2NuoADq.js";import"./addCustomCSSWithScoping-nc0b1DpN.js";import"./index-CDhMu5B6.js";import"./information-B3nD7cls.js";import"./sys-enter-2-C4Y2Nq9D.js";import"./alert-Dw8v7tUg.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CnAxgAVj.js";import"./delete-CEucf5yG.js";import"./settings-DZKOIFbW.js";import"./NoData-El9prw2w.js";import"./IllustratedMessage-D0QYzomd.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DQRO6FcQ.js";import"./index-CghszLxp.js";import"./index-BbltPikc.js";import"./slim-arrow-down-DhSa9dLQ.js";import"./Input-DUkmGF5S.js";import"./ResponsivePopoverCommon.css-CGTYgw9i.js";import"./ValueStateMessage.css-C7zqpLFs.js";import"./Suggestions.css-D1MvItNb.js";import"./ListBoxItemGroupTemplate-DduLgS-n.js";import"./ComboBoxItemGroup-B3VqZwL7.js";import"./ListItemBaseTemplate-DcYxvehU.js";import"./Token-CHhkGCwz.js";import"./ScrollEnablement-DJDUaKRX.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BFyRiZ3I.js";import"./ToggleButton-nPzNF8JZ.js";import"./SuggestionItem-dwEDuAnB.js";import"./index-CWugch4w.js";import"./Option-YfFjlyIk.js";import"./index-ChNtVMH3.js";import"./SegmentedButton-BGPljDMM.js";import"./index-DuGAOmpy.js";import"./Select-BcB_Egz7.js";import"./InvisibleMessage-To8J9FEL.js";import"./slim-arrow-down-DsQgB3Sq.js";import"./index-Bw1B3i5S.js";import"./index-BvecTUj_.js";import"./index-CWBSa9lg.js";import"./index-DyNXbAXI.js";import"./IconDesign-DXd8PPVF.js";import"./filter-pPFeO57V.js";import"./group-2-DswFkUgQ.js";import"./sort-descending-Cp4PHVoq.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BFAZrbzu.js";import"./utils-C6v86EjJ.js";import"./index-xBWwCLsb.js";import"./index-Ds_mffnJ.js";import"./index-CSOTLQaF.js";import"./navigation-down-arrow-BBpx7i5v.js";import"./navigation-right-arrow-BtI6edzV.js";import"./navigation-right-arrow-BjmboBdq.js";import"./useCurrentTheme-BWHA45hS.js";import"./index-E4EGWXgk.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-g6jee3iH.js";import"./paper-plane-9DGcdM4H.js";import"./index-CwsNlV8s.js";import"./less-DCgV-mbR.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
