import{j as e}from"./iframe-1PJgHZTG.js";import{useMDXComponents as n}from"./index-DQ8p-OUL.js";import{I as r}from"./CommandsAndQueries-CQXQgoMe.js";import{M as s,C as l}from"./blocks-BWdY__MG.js";import"./Tag-B40KCJnD.js";import"./index-C8yXoAsR.js";import"./copy-DV2HGm9x.js";import{F as a}from"./Footer-Dn-umaI8.js";import"./PageNotFound-BDu5VFGA.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Uck7FsnG.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-7AxyQCs2.js";import"./index-BQUqcZEd.js";import"./index-i1xIbWKA.js";import"./index-D-m_lTJG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DnF5TvKk.js";import"./addCustomCSSWithScoping-NZMltsez.js";import"./index-BhuvwaVu.js";import"./index-BpyshfBP.js";import"./index-ppU6pF9w.js";import"./information-DJc7dR8E.js";import"./sys-enter-2-C9tJiXDL.js";import"./alert-DYBuSdd9.js";import"./index-BIAg1r_N.js";import"./Illustrations-BZEV-hfk.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-izwhatPm.js";import"./delete-C5D2s8Ak.js";import"./settings-Bs8Htp6v.js";import"./NoData-DQ9X6gYh.js";import"./NoFilterResults-C4_WnkVU.js";import"./index-C2z4jgPp.js";import"./IllustratedMessage--5kFVM8I.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-DZqBJym4.js";import"./Input-CXFJmsc3.js";import"./ResponsivePopoverCommon.css-DL_QXptj.js";import"./ValueStateMessage.css-B7_HUMyf.js";import"./Suggestions.css-CKJ9ed6J.js";import"./ListBoxItemGroupTemplate-D5VYXEPs.js";import"./ComboBoxItemGroup-DBAC-JxZ.js";import"./ListItemBaseTemplate-5OahYJGz.js";import"./Token-DqC2yQ9K.js";import"./ScrollEnablement-CaJ2EN4H.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DwJ4wR2U.js";import"./ToggleButton-DgQxqUU_.js";import"./multiselect-all-DCb2TMLS.js";import"./SuggestionItem-GuXqHjCS.js";import"./index-DgtiDtM8.js";import"./Option-BOs3k1aM.js";import"./index-i9m_q-VY.js";import"./SegmentedButton-CkdgIHk7.js";import"./index-DGyBVUqn.js";import"./Select-DawqrssT.js";import"./InvisibleMessage-CMHHgpOp.js";import"./index-BUuVWqmv.js";import"./index-B22926Ud.js";import"./index-DQdq4IFP.js";import"./index-DcZPtEFB.js";import"./IconDesign-DXd8PPVF.js";import"./filter-QsCfk0fT.js";import"./group-2-CIcR_Yc_.js";import"./sort-descending-9Z_hUleg.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CLLV259a.js";import"./utils-5yXcyzO7.js";import"./index-B_CQz5B0.js";import"./index-BAc9VyuZ.js";import"./index-lR-STrLr.js";import"./navigation-down-arrow-CHCqyWX1.js";import"./navigation-right-arrow-DUxRui6p.js";import"./navigation-right-arrow-BVMvMFjo.js";import"./useCurrentTheme-Bytj-6td.js";import"./index-C9eyp_iT.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-ACr-zRT8.js";import"./paper-plane-BuXAAdlj.js";import"./index-7ZhckGC4.js";import"./less-DXmDlvC3.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
