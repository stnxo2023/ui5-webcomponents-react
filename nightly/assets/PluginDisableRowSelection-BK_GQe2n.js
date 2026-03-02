import{j as e}from"./iframe-Brff1rmP.js";import{useMDXComponents as n}from"./index-CqBWQ9Zx.js";import{I as r,F as s}from"./CommandsAndQueries-Z2F9olV7.js";import{M as l,C as a}from"./blocks-Cx2b2NzS.js";import"./Tag-CO6ENRz9.js";import"./index-DlA7--5Z.js";import"./copy-Bv1OuOcO.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CjilTa_F.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cl8f3le-.js";import"./index-GNhj6rYz.js";import"./index-DYmdKmkq.js";import"./Link-CnNfKrga.js";import"./index-CHjRsrmQ.js";import"./index-BM_H4FxE.js";import"./index-SsKZpktE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-hZd9oRLF.js";import"./addCustomCSSWithScoping-DWThNXxY.js";import"./index-C7l_yPP_.js";import"./information-Cs5lMjWh.js";import"./sys-enter-2-D0GbakMF.js";import"./alert-DvXA8o8i.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DGKptoJD.js";import"./delete-C9vgo_nn.js";import"./settings-K-nxoclT.js";import"./NoData-D4gr7NQb.js";import"./IllustratedMessage-EHffJ8mB.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-xJ_W-ozk.js";import"./index-v9HL1hDi.js";import"./index-BK9Dppbt.js";import"./slim-arrow-down-DHZaQUOz.js";import"./Input-Dd38fmul.js";import"./ResponsivePopoverCommon.css-CCXZCmBy.js";import"./ValueStateMessage.css-DyEd-7MM.js";import"./Suggestions.css-A8d5VcXf.js";import"./ListBoxItemGroupTemplate-DDtryC-p.js";import"./ComboBoxItemGroup-DiF6Vj82.js";import"./ListItemBaseTemplate-BPRyBwPx.js";import"./Token-CGQBD38e.js";import"./ScrollEnablement-L6YMa_Sh.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CFw-rkJd.js";import"./ToggleButton-CJv8CO-v.js";import"./SuggestionItem-CFU47XHi.js";import"./index-xNbk8EkH.js";import"./Option-CrDw5azF.js";import"./index-BNRoZ_z-.js";import"./SegmentedButton-C-poCUsN.js";import"./index-_Xx0BHEx.js";import"./Select-Chae-TJe.js";import"./InvisibleMessage-ByZ2WPzN.js";import"./slim-arrow-down-C94xZ_93.js";import"./index-C4Pu6wgx.js";import"./index-B597IRDL.js";import"./index-Sey1U4Nj.js";import"./index-ByUJYxuO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B1HOC25c.js";import"./group-2-Bl1lsFHE.js";import"./sort-descending-CLPvvO8q.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DuPpFX5n.js";import"./utils-CGg_sa7o.js";import"./index-ChaPxfcm.js";import"./index-X945bjAw.js";import"./index-Cft4P2eI.js";import"./navigation-down-arrow-Cb_GEVcv.js";import"./navigation-right-arrow-Dj8u635l.js";import"./navigation-right-arrow-C3t6w78M.js";import"./useCurrentTheme-DEOFEBbn.js";import"./index-BAklYe1X.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-utzGJSQW.js";import"./paper-plane-4WEe8zaP.js";import"./index-NLOcJtOO.js";import"./less-Cjh9x-Bl.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
