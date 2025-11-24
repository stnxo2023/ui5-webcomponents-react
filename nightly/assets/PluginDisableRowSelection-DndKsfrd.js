import{j as e}from"./iframe-8VKaAWwE.js";import{useMDXComponents as n}from"./index-BiQxBi02.js";import{I as r,F as s}from"./CommandsAndQueries-Br8gYKlc.js";import{M as l,C as a}from"./blocks-D4P1btFV.js";import"./Tag-CAEVBdQF.js";import"./index-BMIVJ8fC.js";import"./copy-GTYDTz4M.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BERQNFQP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DeQFsrbp.js";import"./index-CG1tJmDp.js";import"./index-DjKsiZpu.js";import"./Link-Br8LM296.js";import"./index-Wr_VU4vx.js";import"./index--0IHLSpo.js";import"./index-G7mYvFlh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DS15uRtL.js";import"./addCustomCSSWithScoping-gm53ZH9E.js";import"./index-Bd8LmHtw.js";import"./information-Dxy_OYjg.js";import"./sys-enter-2-B9S9TtfQ.js";import"./alert-CW57s-T2.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DSRTNUO-.js";import"./delete-DnWD3Mq-.js";import"./settings-VKt-L-yH.js";import"./NoData-DDfv6RCL.js";import"./IllustratedMessage-Dr8guHqM.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-CpUJ40_F.js";import"./index-BVZi_tVP.js";import"./index-_vy-bJhX.js";import"./slim-arrow-down-CulswK7d.js";import"./Input-B5Wpiidi.js";import"./ResponsivePopoverCommon.css-B4U_I0dH.js";import"./ValueStateMessage.css-cYz9FUF7.js";import"./Suggestions.css-Z6CWuri5.js";import"./ListBoxItemGroupTemplate-C1lRcpbG.js";import"./ComboBoxItemGroup-C-hUUmdm.js";import"./ListItemBaseTemplate-BmD2uZ0g.js";import"./Token-BQ7R6PHh.js";import"./ScrollEnablement-CjnCh3Bs.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CACymtkK.js";import"./ToggleButton-u0UnHeJY.js";import"./SuggestionItem-C7KEv8FG.js";import"./index-CMbxs2W4.js";import"./Option-DOmelVgu.js";import"./index-B9H6XpWs.js";import"./SegmentedButton-3N38bHb8.js";import"./index-B8y-Fmz6.js";import"./Select-DtzGLi_j.js";import"./InvisibleMessage-CPZrrpNT.js";import"./slim-arrow-down-sBLB8zju.js";import"./index-DVQVneSw.js";import"./index-v7aOm5Jv.js";import"./index-C-Q_6JkP.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DjgLpVIw.js";import"./group-2-lPSSe0zs.js";import"./sort-descending-CS7wmhm4.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C-aC7Trz.js";import"./utils-96nz7lxB.js";import"./index-CAXoANqy.js";import"./index-JF3sM6PG.js";import"./index-Dw_SJKgF.js";import"./navigation-down-arrow-POZr2Ly1.js";import"./navigation-right-arrow-BStxgVlV.js";import"./navigation-right-arrow-BQknt-RQ.js";import"./useCurrentTheme-Dvt6ch19.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BRpZcEjH.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-8d_BW4ml.js";import"./paper-plane-BwV277z1.js";import"./index-CUAVuKcw.js";import"./less-BLTcp359.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
