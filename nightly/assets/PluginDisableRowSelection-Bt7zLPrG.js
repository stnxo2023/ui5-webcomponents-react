import{j as e}from"./iframe-C4t4IgBC.js";import{useMDXComponents as n}from"./index-Mw7OJb9H.js";import{I as r,F as s}from"./CommandsAndQueries-D8F1OdPA.js";import{M as l,C as a}from"./blocks-BBLZG0oz.js";import"./Tag-CDNtFOv1.js";import"./index-Dn3tX0-p.js";import"./copy-Cuc5dF6S.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-V6ifSjCg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C_e2hqHh.js";import"./index-DHWon9Pg.js";import"./index-CWVWkCUh.js";import"./Link-DmVNlXZz.js";import"./index-BTZMG5sJ.js";import"./index-DoEQkKHr.js";import"./index-B9hc6QqK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BVHmgfEk.js";import"./addCustomCSSWithScoping-BpxylvhK.js";import"./index-nQT45DkO.js";import"./information-ChMVL_f6.js";import"./sys-enter-2-qiLZ6lMH.js";import"./alert-CRjt_mFI.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-oxvyxDGg.js";import"./delete-D2fGGkgG.js";import"./settings-BzwMkjoZ.js";import"./NoData-svbafsAZ.js";import"./IllustratedMessage-CgB73CZ_.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-B1hxL8l_.js";import"./index-CE4-T5o8.js";import"./index-BVxOFa0i.js";import"./slim-arrow-down-C7wr2wWx.js";import"./Input-Cwg3cKtN.js";import"./ResponsivePopoverCommon.css-BxW6PWv_.js";import"./ValueStateMessage.css-BgyK2iA6.js";import"./Suggestions.css-Dcdd-5zD.js";import"./ListBoxItemGroupTemplate-CxNkfiJO.js";import"./ComboBoxItemGroup-_wxpn53X.js";import"./ListItemBaseTemplate-BbBKRL88.js";import"./Token-qGW5fzs1.js";import"./ScrollEnablement-36SXz3Hc.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Ct25_r8s.js";import"./ToggleButton-CfDXNWyK.js";import"./SuggestionItem-CJwimrS_.js";import"./index-CPA6F2o0.js";import"./Option-BqPc7Xaz.js";import"./index-Daus8hUA.js";import"./SegmentedButton-E0ssPtu-.js";import"./index-CKAEMoq5.js";import"./Select-C-ie4pXP.js";import"./InvisibleMessage-Cy5GYkqO.js";import"./slim-arrow-down-CSCnEpSC.js";import"./index-BssGtCQL.js";import"./index-ChIKHgsp.js";import"./index-aUdUg_A0.js";import"./index-CHTmrhF4.js";import"./IconDesign-DXd8PPVF.js";import"./filter--qgSY2tr.js";import"./group-2-AzeUAacZ.js";import"./sort-descending-C8HEqCX3.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-bUr-dgTA.js";import"./utils-C40Oa032.js";import"./index-C6p9FXGA.js";import"./index-CJmM4Vgv.js";import"./index-BwGmy4E4.js";import"./navigation-down-arrow-D-VRAhaE.js";import"./navigation-right-arrow-BeV5rlT5.js";import"./navigation-right-arrow-CkaVVkuI.js";import"./useCurrentTheme-w37MUDwR.js";import"./index-BmlceBp1.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-w_ivh6EU.js";import"./paper-plane-Dc-sk_g4.js";import"./index-BBX-5EM_.js";import"./less-D5VcceqT.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
