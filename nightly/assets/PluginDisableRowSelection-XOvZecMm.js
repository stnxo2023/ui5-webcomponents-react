import{j as e}from"./iframe-Cv2DxGxx.js";import{useMDXComponents as n}from"./index-DJcSDbNR.js";import{I as r,F as s}from"./CommandsAndQueries-bS4Yf-ej.js";import{M as l,C as a}from"./blocks-ugoI9X9t.js";import"./Tag-Coz7RYuP.js";import"./index-D_TtcnwQ.js";import"./copy-CqIWY1yr.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Bzu6OElq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-mHVz6rF3.js";import"./index-CInTOaEh.js";import"./index-B09eBGHl.js";import"./Link-BduAs2w5.js";import"./index-DUYUZ9D7.js";import"./index-Gpf6Q-KM.js";import"./index-BniFx0GW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-0lPpvscI.js";import"./addCustomCSSWithScoping-Bw7ry9Qy.js";import"./index-C0_2Dkpw.js";import"./information-DWd1dkKI.js";import"./sys-enter-2-DDyu9UHI.js";import"./alert-3r0WRbjT.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CaCjLhwG.js";import"./delete-DA30Vb_3.js";import"./settings-DPcZjvrc.js";import"./NoData-CkwFywRp.js";import"./IllustratedMessage-CAb2xgRr.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-CpZwDGYv.js";import"./index-Ba-Eubsl.js";import"./index-CdW_heB4.js";import"./slim-arrow-down-BTvRdwWq.js";import"./Input-C1lqpYg3.js";import"./ResponsivePopoverCommon.css-D3KSXKvs.js";import"./ValueStateMessage.css-CZDTXdiA.js";import"./Suggestions.css-Cw7wY2ht.js";import"./ListBoxItemGroupTemplate-Waem1Q61.js";import"./ComboBoxItemGroup-DSnMrpI-.js";import"./ListItemBaseTemplate-CXI8xke2.js";import"./Token-CoSFdHdR.js";import"./ScrollEnablement-D_FfjNHJ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C1pGRTma.js";import"./ToggleButton-mckNH_TC.js";import"./SuggestionItem-BQNyHhBv.js";import"./index-Bo2NWm1F.js";import"./Option-BuJ-tVWb.js";import"./index-DIyggbSr.js";import"./SegmentedButton-75RA8p3W.js";import"./index-FkfgVmhN.js";import"./Select-944-A8Kx.js";import"./InvisibleMessage-DWFrz2m3.js";import"./slim-arrow-down-sehS3JFD.js";import"./index-V4LMPnG-.js";import"./index-BFYwVfb0.js";import"./index-BCQ2rtHe.js";import"./IconDesign-DXd8PPVF.js";import"./filter-4kPRahty.js";import"./group-2-Bg2BOQ3d.js";import"./sort-descending-B6JANGfX.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D4tiooQx.js";import"./utils-DdfwhCCt.js";import"./index-WPe-KT9J.js";import"./index-Br9lY8SV.js";import"./index-m0ZtgUtd.js";import"./navigation-down-arrow-0n0msI0k.js";import"./navigation-right-arrow-DrgYv11d.js";import"./navigation-right-arrow-D__Tv4vy.js";import"./useCurrentTheme-BaNC1vQQ.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D7LRyA5h.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Hq2jb4tD.js";import"./paper-plane-DSa5GeV2.js";import"./index-CU0aCIvN.js";import"./less-C0w2VPH4.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
