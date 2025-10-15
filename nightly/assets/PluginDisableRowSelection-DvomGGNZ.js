import{j as e}from"./iframe-MOZTZvx5.js";import{useMDXComponents as n}from"./index-Dg_uAO8t.js";import{I as r,F as s}from"./CommandsAndQueries-D1cXr-nE.js";import{M as l,C as a}from"./blocks-OWx-zaQy.js";import"./Tag-D4CUHK9_.js";import"./index-BgV1CUPM.js";import"./copy-1ZgkFucr.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Cw0HPS5N.js";import"./preload-helper-PPVm8Dsz.js";import"./index-jWV64fa4.js";import"./index-Wo6cIUDI.js";import"./index-BVuz7GOm.js";import"./Link-D6y2NVEd.js";import"./index-D_H2FzQ8.js";import"./index-BfSH4rx9.js";import"./index-CT3JBxRK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DgDY8vOY.js";import"./addCustomCSSWithScoping-C-qiC_lj.js";import"./index-Vm6d87Cs.js";import"./information-BmrOjFlN.js";import"./sys-enter-2-CJ54mtHu.js";import"./alert-CvnXXdTy.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DhneGV7w.js";import"./delete-Bn5gdNgE.js";import"./settings-Cbx-epPE.js";import"./NoData-BJR7iwul.js";import"./IllustratedMessage-YE7gLYpT.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-Jm7E3NGo.js";import"./index-C8xadZxD.js";import"./index-BLa13CRy.js";import"./slim-arrow-down-Cc4bNxF2.js";import"./Input-VwoOlGdU.js";import"./ResponsivePopoverCommon.css-NhonNuZc.js";import"./ValueStateMessage.css-B4GAmP9X.js";import"./Suggestions.css-DA1a_gYi.js";import"./ListBoxItemGroupTemplate-Dx4qYl7E.js";import"./ComboBoxItemGroup-Bw3Iaycs.js";import"./ListItemBaseTemplate-BZSLWu4w.js";import"./Token-DbnH4QPK.js";import"./ScrollEnablement-BN64g5L9.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-3bCIQ3yY.js";import"./ToggleButton-OlwgaROV.js";import"./SuggestionItem-CQ-oefH8.js";import"./index-oXUFSANu.js";import"./Option-U0m19n5L.js";import"./index-CY3YewAo.js";import"./SegmentedButton-rkgekSAQ.js";import"./index-C9UJ92uP.js";import"./Select-HunAogfG.js";import"./InvisibleMessage-B6eggr2u.js";import"./slim-arrow-down-CSnytLmB.js";import"./index-DKau9-Kv.js";import"./index-CnG-Mf1G.js";import"./index-ChNWUHOB.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CNuVE1dN.js";import"./group-2-DYeh0LPK.js";import"./sort-descending-CVlDQhaZ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BcUA259N.js";import"./utils-BOAuSk9m.js";import"./index-BUkrgD3V.js";import"./index-BbzY9xji.js";import"./index-NwVlg13M.js";import"./navigation-down-arrow-Dw2CvikE.js";import"./navigation-right-arrow-DRazBLZW.js";import"./navigation-right-arrow-BxyRDEC9.js";import"./useCurrentTheme-wbA7IpXG.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Bdi_NLBI.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Csl6zSRf.js";import"./paper-plane-DH1_vU7X.js";import"./index-Bs-jL4oy.js";import"./less-DPf2C5zX.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
