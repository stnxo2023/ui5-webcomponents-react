import{j as o}from"./iframe-D_oMot10.js";import{useMDXComponents as n}from"./index-Cg6HnkxT.js";import{I as r,F as m}from"./CommandsAndQueries-DPkePXTz.js";import{M as p,C as s}from"./blocks-2cuCWctq.js";import"./Tag-R7_VB2zh.js";import"./index-DYuRbnft.js";import"./copy-D4R1-NDI.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CpSNPUE6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ds5vSSWx.js";import"./index-3r4NxXtD.js";import"./index-DO_1WCge.js";import"./Link-9JdM6Hjv.js";import"./index-DnX1qu0M.js";import"./index-DRuRCvkV.js";import"./index-1pxNHpjB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-izT7sph5.js";import"./addCustomCSSWithScoping-BPH8FgqV.js";import"./index-s1VP44pI.js";import"./information-D9-yMhmx.js";import"./sys-enter-2-B1tI1-EQ.js";import"./alert-C600_lKj.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D3QE7t4X.js";import"./delete-0A1IJzIR.js";import"./settings-DYy_oKsW.js";import"./NoData-BekvHle4.js";import"./IllustratedMessage-jp9C_ng3.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-Dd30xa9E.js";import"./index-i-6EpctQ.js";import"./index-u8vmOMKU.js";import"./slim-arrow-down-DgLBVq-1.js";import"./Input-C8nwJpL1.js";import"./ResponsivePopoverCommon.css-AxdwvBmm.js";import"./ValueStateMessage.css-BD-bXrba.js";import"./Suggestions.css-Cabt6nOq.js";import"./ListBoxItemGroupTemplate-DnWzMrIY.js";import"./ComboBoxItemGroup-D7xa7XFs.js";import"./ListItemBaseTemplate-qA9suj1W.js";import"./Token-BVzC5uio.js";import"./ScrollEnablement-DXy9g_lY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BdOqn1aP.js";import"./ToggleButton--yAdk_ty.js";import"./SuggestionItem-Cfm6XrS-.js";import"./index-BlGxI91r.js";import"./Option-C_uqpt-r.js";import"./index-BdLqOm4-.js";import"./SegmentedButton-S4YhScxi.js";import"./index-tSiHVF9y.js";import"./Select-DrZaox4H.js";import"./InvisibleMessage-DDLiWcDo.js";import"./slim-arrow-down-Dlw-8h3-.js";import"./index-Cc2cok_1.js";import"./index-nl8CIEtb.js";import"./index-Du_ko5GP.js";import"./index-DyWV_0XY.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CXVgG9df.js";import"./group-2-8zib2_rz.js";import"./sort-descending-BvWPtphW.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-tTOrxfXr.js";import"./utils-CrcpPJy1.js";import"./index-VkA4_y2n.js";import"./index-63bBxxuU.js";import"./index-6bx9Fpoe.js";import"./navigation-down-arrow-BD0SNbXx.js";import"./navigation-right-arrow-C-j4QHZm.js";import"./navigation-right-arrow-DXyKbQJ-.js";import"./useCurrentTheme-B6V2tZjd.js";import"./index-B0xbs9YS.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DpJLc3e9.js";import"./paper-plane-xw6W06sT.js";import"./index-CW3qSWE6.js";import"./less-CiwlGLes.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
`,o.jsx(e.h1,{id:"analyticaltable-plugin-useoncolumnresize",children:"AnalyticalTable Plugin: useOnColumnResize"}),`
`,o.jsx(r,{moduleName:"useOnColumnResize",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx(e.code,{children:"useOnColumnResize"}),` plugin hook allows firing a callback when a columns size has changed by dragging the "Resizer".
The first parameter is the callback itself (`,o.jsx(e.code,{children:"e: { columnWidth: number; header: Record<string, any> }) => void;"}),"), the second one are the optional ",o.jsx(e.code,{children:"options"})," for controlling how often the callback should fire."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"options"}),":"]}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"liveUpdate"}),": If ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),", the resize function will fire every time the width has changed depending on the ",o.jsx(e.code,{children:"options.wait"})," delay."]}),`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"wait"}),": The number of milliseconds for which the calls are to be delayed. ",o.jsxs(e.strong,{children:["Defaults to ",o.jsx(e.code,{children:"100"})]}),". (Only has an effect if ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),")"]}),`
`]}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(s,{sourceState:"none",of:l}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`const TableComponent = (props) => {
  const handleColumResize = useCallback((e) => {
    console.log(e.columnWidth, e.header);
  }, []);

  const tableHooks = useMemo(
    () => [
      useOnColumnResize(handleColumResize, {
        liveUpdate: false,
        wait: 100,
      }),
    ],
    [handleColumResize],
  );

  return (
    <AnalyticalTable
      data={props.data}
      columns={props.columns}
      tableHooks={tableHooks}
    />
  );
};
`})}),`
`,o.jsx(m,{})]})}function Xo(i={}){const{wrapper:e}={...n(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{Xo as default};
