import{j as e}from"./iframe-D_oMot10.js";import{useMDXComponents as n}from"./index-Cg6HnkxT.js";import{I as r,F as s}from"./CommandsAndQueries-DPkePXTz.js";import{M as l,C as a}from"./blocks-2cuCWctq.js";import"./Tag-R7_VB2zh.js";import"./index-DYuRbnft.js";import"./copy-D4R1-NDI.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CpSNPUE6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ds5vSSWx.js";import"./index-3r4NxXtD.js";import"./index-DO_1WCge.js";import"./Link-9JdM6Hjv.js";import"./index-DnX1qu0M.js";import"./index-DRuRCvkV.js";import"./index-1pxNHpjB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-izT7sph5.js";import"./addCustomCSSWithScoping-BPH8FgqV.js";import"./index-s1VP44pI.js";import"./information-D9-yMhmx.js";import"./sys-enter-2-B1tI1-EQ.js";import"./alert-C600_lKj.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D3QE7t4X.js";import"./delete-0A1IJzIR.js";import"./settings-DYy_oKsW.js";import"./NoData-BekvHle4.js";import"./IllustratedMessage-jp9C_ng3.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-Dd30xa9E.js";import"./index-i-6EpctQ.js";import"./index-u8vmOMKU.js";import"./slim-arrow-down-DgLBVq-1.js";import"./Input-C8nwJpL1.js";import"./ResponsivePopoverCommon.css-AxdwvBmm.js";import"./ValueStateMessage.css-BD-bXrba.js";import"./Suggestions.css-Cabt6nOq.js";import"./ListBoxItemGroupTemplate-DnWzMrIY.js";import"./ComboBoxItemGroup-D7xa7XFs.js";import"./ListItemBaseTemplate-qA9suj1W.js";import"./Token-BVzC5uio.js";import"./ScrollEnablement-DXy9g_lY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BdOqn1aP.js";import"./ToggleButton--yAdk_ty.js";import"./SuggestionItem-Cfm6XrS-.js";import"./index-BlGxI91r.js";import"./Option-C_uqpt-r.js";import"./index-BdLqOm4-.js";import"./SegmentedButton-S4YhScxi.js";import"./index-tSiHVF9y.js";import"./Select-DrZaox4H.js";import"./InvisibleMessage-DDLiWcDo.js";import"./slim-arrow-down-Dlw-8h3-.js";import"./index-Cc2cok_1.js";import"./index-nl8CIEtb.js";import"./index-Du_ko5GP.js";import"./index-DyWV_0XY.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CXVgG9df.js";import"./group-2-8zib2_rz.js";import"./sort-descending-BvWPtphW.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-tTOrxfXr.js";import"./utils-CrcpPJy1.js";import"./index-VkA4_y2n.js";import"./index-63bBxxuU.js";import"./index-6bx9Fpoe.js";import"./navigation-down-arrow-BD0SNbXx.js";import"./navigation-right-arrow-C-j4QHZm.js";import"./navigation-right-arrow-DXyKbQJ-.js";import"./useCurrentTheme-B6V2tZjd.js";import"./index-B0xbs9YS.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DpJLc3e9.js";import"./paper-plane-xw6W06sT.js";import"./index-CW3qSWE6.js";import"./less-CiwlGLes.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
