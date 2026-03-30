import{j as e}from"./iframe-CJJIsx6F.js";import{u as n,M as r,C as s}from"./blocks-ChaXMZP5.js";import{I as l}from"./CommandsAndQueries-B6BpCs-M.js";import"./Tag-n7rERTqv.js";import"./index-C3WbBMZ1.js";import"./copy-CS6obn2m.js";import{F as a}from"./Footer-Ce6by-oH.js";import"./PageNotFound-BtSzGq-G.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CwHhua2M.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-GrYjVq0T.js";import"./index-BAPIP2EX.js";import"./index-CiQC7Mcr.js";import"./index-DWaBFkkI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CLM_ccAB.js";import"./addCustomCSSWithScoping-DH49qo7-.js";import"./index-8nS7lmoC.js";import"./index-qLq9B_00.js";import"./index-Comgbi1p.js";import"./information-DHzv4rEq.js";import"./sys-enter-2-DxE2QBT2.js";import"./alert-BgdGP7JP.js";import"./index-DqWhINqr.js";import"./Illustrations-BhBoWAi4.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DjANczir.js";import"./delete-iBMBoW9R.js";import"./settings-DrDadmIh.js";import"./NoData-CLaEuyBQ.js";import"./NoFilterResults-DJwtRche.js";import"./index-CIOABHCP.js";import"./IllustratedMessage-D4RUR_cG.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-C7pW_ymX.js";import"./Input-DsafznTO.js";import"./ResponsivePopoverCommon.css-ChLB8_9T.js";import"./ValueStateMessage.css-BLjLq8yr.js";import"./Suggestions.css-CqX3de1P.js";import"./ListBoxItemGroupTemplate-BSinwIEf.js";import"./ComboBoxItemGroup-Bc4DlTLD.js";import"./ListItemBaseTemplate-DaxiMu7F.js";import"./Token-DL4JI-jm.js";import"./ScrollEnablement-BtkDzK2q.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BESL8Ob4.js";import"./ToggleButton-Cnr9P6yJ.js";import"./multiselect-all-Bskqp-LX.js";import"./SuggestionItem-Cs3GRJFE.js";import"./index-C6tjcKY2.js";import"./Option-BxB-PkjK.js";import"./index-DGKNIxXV.js";import"./SegmentedButton-Bzt45PRO.js";import"./index-CdhWGsJy.js";import"./Select-DE4i9rKp.js";import"./InvisibleMessage-Cyxze3uu.js";import"./index-DGPTSllW.js";import"./index-DXlSvPUQ.js";import"./index-CXnZMaCF.js";import"./index-JFvXmi3y.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bo9w-30o.js";import"./group-2-BSryHq49.js";import"./sort-descending-s0zyZhYG.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BGeA_s_w.js";import"./utils-D0vF-SRs.js";import"./index-CGyGuqHJ.js";import"./index-ChV5JXtw.js";import"./index-B5SvgXn6.js";import"./navigation-down-arrow-C4Sf-qtS.js";import"./navigation-right-arrow-DQC4L2-T.js";import"./navigation-right-arrow-BuD6ryaO.js";import"./useCurrentTheme-iJZHQfRw.js";import"./index-BHQcIWf-.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-1-FsbUZP.js";import"./paper-plane-BSxU-RyY.js";import"./index-BR1QDb9u.js";import"./less-BBBCDqSd.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
`,e.jsx(o.h1,{id:"analyticaltable-plugin-userowdisableselection",children:"AnalyticalTable Plugin: useRowDisableSelection"}),`
`,e.jsx(l,{moduleName:"useRowDisableSelection",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
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
`,e.jsx(s,{sourceState:"none",of:m}),`
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
`,e.jsx(a,{})]})}function ze(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{ze as default};
