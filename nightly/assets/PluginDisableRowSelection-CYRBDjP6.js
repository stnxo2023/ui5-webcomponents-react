import{j as e}from"./iframe-BXb_n64_.js";import{u as n,M as r,C as s}from"./blocks-9VP231tA.js";import{I as l}from"./CommandsAndQueries-BI-RA2OZ.js";import"./Tag-CRNARXt6.js";import"./index-BL83g4Fz.js";import"./copy-BBKTKpbi.js";import{F as a}from"./Footer-DPPwB2I6.js";import"./PageNotFound-CZrojxwO.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BKWnHpAq.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BUcKjx9R.js";import"./index-D10d9Tlr.js";import"./index-B22x7h0Z.js";import"./index-Ju3FGlVf.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Mi2Syuqb.js";import"./addCustomCSSWithScoping-F8HAuIL-.js";import"./index-BD_xT1Nj.js";import"./index-DqAHmx0d.js";import"./index-BNBy1IQK.js";import"./information-C2n1oeWx.js";import"./sys-enter-2-BNeNMeW8.js";import"./alert-DXZPI1Fp.js";import"./index-BSoVaSRp.js";import"./Illustrations-ks8TfsTU.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-wgYgfTj9.js";import"./delete-Csnjywyc.js";import"./settings-NI8fkDUM.js";import"./NoData-En3Nogfa.js";import"./NoFilterResults-Dhcwn1zt.js";import"./index-BOdF7LF9.js";import"./IllustratedMessage-Doboq85l.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-DO2GHw1V.js";import"./Input-B1pV19yo.js";import"./ResponsivePopoverCommon.css-DMiEES2t.js";import"./ValueStateMessage.css-YCjELpnO.js";import"./Suggestions.css-BZAnlsRN.js";import"./ListBoxItemGroupTemplate-5-RLXPsG.js";import"./ComboBoxItemGroup-DfJF5BDs.js";import"./ListItemBaseTemplate-CL-9zx8x.js";import"./Token-C7CCdRfL.js";import"./ScrollEnablement-CdFwVVtK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-dvvLOc5F.js";import"./ToggleButton-REMyBJsR.js";import"./multiselect-all-Ch1Qp7qR.js";import"./SuggestionItem-CuJ_PC3L.js";import"./index-COeWnEcb.js";import"./Option-DDwjJ3Kz.js";import"./index-CAhGtq2M.js";import"./SegmentedButton-Cg1f73_M.js";import"./index-Bnp975NP.js";import"./Select-DjVfX_jp.js";import"./InvisibleMessage-tI82KiTk.js";import"./index-BXr-yJYg.js";import"./index-YKbtChLI.js";import"./index-D9WU53Lw.js";import"./index-DrzieGlz.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BRQYQGhf.js";import"./group-2-DS1ObAk7.js";import"./sort-descending-Cj6QG_j1.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BGaKo2kM.js";import"./utils-B78a72Xy.js";import"./index-CEFR42mv.js";import"./index-BBdTafaa.js";import"./index-70052kQG.js";import"./navigation-down-arrow-C-XIYlAc.js";import"./navigation-right-arrow-DvOid56m.js";import"./navigation-right-arrow-b4NzmHT7.js";import"./useCurrentTheme-DoV6h_Xa.js";import"./index-BW8nkbFg.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BJ6r15BN.js";import"./paper-plane-YWK2QeBd.js";import"./index-DL4fpI_G.js";import"./less-0zzPWnhW.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
