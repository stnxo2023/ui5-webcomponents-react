import{j as o}from"./iframe-rBa3eszb.js";import{useMDXComponents as n}from"./index-ywplRXEz.js";import{I as r,F as m}from"./CommandsAndQueries-CwUQeNe6.js";import{M as p,C as s}from"./blocks-g4en69Tv.js";import"./Tag-Ub-ab5wh.js";import"./index-CpHbQUX7.js";import"./copy-DpAiYmLC.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DwoO2n4l.js";import"./preload-helper-PPVm8Dsz.js";import"./index-_uK4ftNi.js";import"./index-dvt-GDfC.js";import"./index--W9c_yZX.js";import"./Link-Dq-0iXqs.js";import"./index-SiJKqGQM.js";import"./index-Bt8TlIkO.js";import"./index-CCm0OAPD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C-cGFZau.js";import"./addCustomCSSWithScoping-BFTmBMm0.js";import"./index-Dlmk5mT2.js";import"./information-Do12jBFt.js";import"./sys-enter-2-Gg5Ob7c_.js";import"./alert-Cl85dmlC.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BdvCWOzD.js";import"./delete-DSX6IBAt.js";import"./settings-B5OYEsJJ.js";import"./NoData-DnjMluBO.js";import"./IllustratedMessage-ft7Ssdsp.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-DL4_GS9s.js";import"./index-CeS1OQQr.js";import"./index-rLirECJZ.js";import"./slim-arrow-down-C9VdBaRF.js";import"./Input-m5bCswpX.js";import"./ResponsivePopoverCommon.css-CCI8LaeI.js";import"./ValueStateMessage.css-G3jxxdhr.js";import"./Suggestions.css-Bza81oFQ.js";import"./ListBoxItemGroupTemplate-BDdWlJ71.js";import"./ComboBoxItemGroup-C5w7p3nn.js";import"./ListItemBaseTemplate-DjnvcIEh.js";import"./Token-C1Lxypw2.js";import"./ScrollEnablement-BvgkaIDV.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DN6z6JAI.js";import"./ToggleButton-Do4GdOaF.js";import"./SuggestionItem-D8MLXmu2.js";import"./index-DE7-37Zx.js";import"./Option-3oJBHvkA.js";import"./index-CUcb9Gd6.js";import"./SegmentedButton-DfvUN2eU.js";import"./index-Bsqqc8MZ.js";import"./Select-B8folAVa.js";import"./InvisibleMessage-DbLy2p28.js";import"./slim-arrow-down-BI4obKhl.js";import"./index-_g-j8myn.js";import"./index-DlIBvfIs.js";import"./index-BsdBRU2K.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cv9GM9v6.js";import"./group-2-Bec-D2WX.js";import"./sort-descending-_A-rRud-.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BaG1O05d.js";import"./utils-B0At23gp.js";import"./index-BofIltQ1.js";import"./index-BI_6m6xU.js";import"./index-BDnRm_Qs.js";import"./navigation-down-arrow-DDHH9XQh.js";import"./navigation-right-arrow-sPX4M8sP.js";import"./navigation-right-arrow-CKY57fNf.js";import"./useCurrentTheme-NuodFJJx.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B62mh56S.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BifrIkAV.js";import"./paper-plane-CAhseGkA.js";import"./index-fMMDrhfL.js";import"./less-BLxfjnTZ.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
