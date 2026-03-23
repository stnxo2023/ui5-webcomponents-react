import{j as e}from"./iframe-DpyqAETS.js";import{useMDXComponents as n}from"./index-DokE1aPE.js";import{I as r}from"./CommandsAndQueries-DgdmOsaT.js";import{M as s,C as l}from"./blocks-PLzKwXGQ.js";import"./Tag-DKNf6AcV.js";import"./index-TIDQzFF1.js";import"./copy-Bdya3dKB.js";import{F as a}from"./Footer-B_kIXa7O.js";import"./PageNotFound-BN4cbSeC.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BDoJsWpF.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-Cygi3wLY.js";import"./index-B67fvT3R.js";import"./index-CnomjaBB.js";import"./index-I3HyyzwM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DP11CHq4.js";import"./addCustomCSSWithScoping-Co67Uzxh.js";import"./index-B0Hg115V.js";import"./index-CiKduFiJ.js";import"./index-I3Bq7JP2.js";import"./information-99NDnz_N.js";import"./sys-enter-2-CaEWuWxX.js";import"./alert-L-6hDox8.js";import"./index-B8-2K5Ni.js";import"./Illustrations-Beru7cxi.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CaaaVZQA.js";import"./delete-BXUGnDKm.js";import"./settings-DrzuGCHX.js";import"./NoData-gBBZ_Wbs.js";import"./NoFilterResults-BxXVfs7J.js";import"./index-BNg5WP_7.js";import"./IllustratedMessage-QqLt7tsj.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-D_Bv5Pk4.js";import"./Input-WF7CT_uR.js";import"./ResponsivePopoverCommon.css-CMqfjYXO.js";import"./ValueStateMessage.css-Wupv_jGJ.js";import"./Suggestions.css-BVFzvbLq.js";import"./ListBoxItemGroupTemplate-dNP8oHGP.js";import"./ComboBoxItemGroup-C1_dhnPF.js";import"./ListItemBaseTemplate-Be9h2s8y.js";import"./Token-BEFEGWrk.js";import"./ScrollEnablement-cQ2m6PIi.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D5IRqJ4A.js";import"./ToggleButton-Dya_F0pD.js";import"./multiselect-all-0_IwdKza.js";import"./SuggestionItem-DeMwyYWk.js";import"./index-BnNEaiFq.js";import"./Option-BYL0UpNA.js";import"./index-k7lg1KnU.js";import"./SegmentedButton-BpDQdB-L.js";import"./index-DX7R1uAP.js";import"./Select-MzTCuHdz.js";import"./InvisibleMessage-dvUkP_Hh.js";import"./index-CCEqKFXe.js";import"./index-CKTtQJTk.js";import"./index-CZG3dmap.js";import"./index-Be45WFmK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CS1Hwtsk.js";import"./group-2-CAz_Zq6U.js";import"./sort-descending-DIRUxiNv.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-ByG9JROg.js";import"./utils-GKCuX9hZ.js";import"./index-DcZIfOhg.js";import"./index-pZ-yDWgG.js";import"./index-CrY6jiry.js";import"./navigation-down-arrow-UHkP0V-Q.js";import"./navigation-right-arrow-WWFFQj9u.js";import"./navigation-right-arrow-CDfDe0dR.js";import"./useCurrentTheme-CPbkxv-P.js";import"./index-Uncwm3va.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-kZVBuGuq.js";import"./paper-plane-chkECRdy.js";import"./index-CXUGpKft.js";import"./less-QAdmSHz4.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
