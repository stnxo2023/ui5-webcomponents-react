import{j as e}from"./iframe-vvFzJQsm.js";import{useMDXComponents as n}from"./index-mWjr9AFM.js";import{I as r,F as s}from"./CommandsAndQueries-8pSfE60h.js";import{M as l,C as a}from"./blocks-COsbTFiZ.js";import"./Tag-CSxd9Vy9.js";import"./index-CdSwAr1T.js";import"./copy-qs9aVbQg.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-B3ECgz-E.js";import"./preload-helper-PPVm8Dsz.js";import"./index-FWmQFiva.js";import"./index-DSMhm57i.js";import"./index-keBzjxCB.js";import"./Link-hAW6WURd.js";import"./index-CYjg-3sd.js";import"./index-bfJ02BDw.js";import"./index-BBX1dqjw.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BmD8Hqdt.js";import"./addCustomCSSWithScoping-Px-H63QY.js";import"./index-Ck5nT1M9.js";import"./information-CWYm1ZbR.js";import"./sys-enter-2-kpgYGCQC.js";import"./alert-Ba0jfTcX.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C9kK_LVq.js";import"./delete-D4XAzPaO.js";import"./settings-C8va5o-b.js";import"./NoData-5jtjQ5y7.js";import"./IllustratedMessage-B8VwOS63.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BPC0yP-u.js";import"./index-DRbu4jj1.js";import"./index-CLL1C2RL.js";import"./slim-arrow-down-D1045Dej.js";import"./Input-Bdz4QBIo.js";import"./ResponsivePopoverCommon.css-Baj0Epwl.js";import"./ValueStateMessage.css-4BAUMJYg.js";import"./Suggestions.css-3p3I60pl.js";import"./ListBoxItemGroupTemplate-BpiHCZsA.js";import"./ComboBoxItemGroup-BfSjrPkV.js";import"./ListItemBaseTemplate-B5P3HOKd.js";import"./Token-nR3AU3yg.js";import"./ScrollEnablement-DGKqDpbT.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bq3jzA--.js";import"./ToggleButton-D2c9Ioes.js";import"./SuggestionItem-D6PBycsg.js";import"./index-p75UYelA.js";import"./Option-m73man2m.js";import"./index-CEWT0FVs.js";import"./SegmentedButton-BHh8HeGl.js";import"./index-C5N6WMqm.js";import"./Select-Cvi-Tl5M.js";import"./InvisibleMessage-DfdHEKSG.js";import"./slim-arrow-down-BxUM_kC3.js";import"./index-Dbxl2QgS.js";import"./index-DNtC8pK0.js";import"./index-DkgHrAaT.js";import"./index-HICqIhxY.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dvyr9bkH.js";import"./group-2-CTXNR9Fa.js";import"./sort-descending-D9vZzYoL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DNIS43S0.js";import"./utils-DnHyYccE.js";import"./index-naNPIt8g.js";import"./index-lJc2O7eM.js";import"./index-CchiWT1q.js";import"./navigation-down-arrow-B3V1489R.js";import"./navigation-right-arrow-Dach_1y0.js";import"./navigation-right-arrow-BeI9ctVu.js";import"./useCurrentTheme-DNXu84CQ.js";import"./index-lCZJ1S5W.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BvMNZh4_.js";import"./paper-plane-wgrrkunQ.js";import"./index-DGYtHBaB.js";import"./less-D8pAxZdo.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
