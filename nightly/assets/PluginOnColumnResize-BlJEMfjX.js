import{j as o}from"./iframe-8VKaAWwE.js";import{useMDXComponents as n}from"./index-BiQxBi02.js";import{I as r,F as m}from"./CommandsAndQueries-Br8gYKlc.js";import{M as p,C as s}from"./blocks-D4P1btFV.js";import"./Tag-CAEVBdQF.js";import"./index-BMIVJ8fC.js";import"./copy-GTYDTz4M.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BERQNFQP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DeQFsrbp.js";import"./index-CG1tJmDp.js";import"./index-DjKsiZpu.js";import"./Link-Br8LM296.js";import"./index-Wr_VU4vx.js";import"./index--0IHLSpo.js";import"./index-G7mYvFlh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DS15uRtL.js";import"./addCustomCSSWithScoping-gm53ZH9E.js";import"./index-Bd8LmHtw.js";import"./information-Dxy_OYjg.js";import"./sys-enter-2-B9S9TtfQ.js";import"./alert-CW57s-T2.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DSRTNUO-.js";import"./delete-DnWD3Mq-.js";import"./settings-VKt-L-yH.js";import"./NoData-DDfv6RCL.js";import"./IllustratedMessage-Dr8guHqM.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-CpUJ40_F.js";import"./index-BVZi_tVP.js";import"./index-_vy-bJhX.js";import"./slim-arrow-down-CulswK7d.js";import"./Input-B5Wpiidi.js";import"./ResponsivePopoverCommon.css-B4U_I0dH.js";import"./ValueStateMessage.css-cYz9FUF7.js";import"./Suggestions.css-Z6CWuri5.js";import"./ListBoxItemGroupTemplate-C1lRcpbG.js";import"./ComboBoxItemGroup-C-hUUmdm.js";import"./ListItemBaseTemplate-BmD2uZ0g.js";import"./Token-BQ7R6PHh.js";import"./ScrollEnablement-CjnCh3Bs.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CACymtkK.js";import"./ToggleButton-u0UnHeJY.js";import"./SuggestionItem-C7KEv8FG.js";import"./index-CMbxs2W4.js";import"./Option-DOmelVgu.js";import"./index-B9H6XpWs.js";import"./SegmentedButton-3N38bHb8.js";import"./index-B8y-Fmz6.js";import"./Select-DtzGLi_j.js";import"./InvisibleMessage-CPZrrpNT.js";import"./slim-arrow-down-sBLB8zju.js";import"./index-DVQVneSw.js";import"./index-v7aOm5Jv.js";import"./index-C-Q_6JkP.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DjgLpVIw.js";import"./group-2-lPSSe0zs.js";import"./sort-descending-CS7wmhm4.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C-aC7Trz.js";import"./utils-96nz7lxB.js";import"./index-CAXoANqy.js";import"./index-JF3sM6PG.js";import"./index-Dw_SJKgF.js";import"./navigation-down-arrow-POZr2Ly1.js";import"./navigation-right-arrow-BStxgVlV.js";import"./navigation-right-arrow-BQknt-RQ.js";import"./useCurrentTheme-Dvt6ch19.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BRpZcEjH.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-8d_BW4ml.js";import"./paper-plane-BwV277z1.js";import"./index-CUAVuKcw.js";import"./less-BLTcp359.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
