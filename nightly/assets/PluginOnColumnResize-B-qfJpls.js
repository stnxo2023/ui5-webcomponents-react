import{j as o}from"./iframe-BAeEsjGg.js";import{useMDXComponents as n}from"./index-Bq0E1dsP.js";import{I as r,F as m}from"./CommandsAndQueries-BmSS4dsr.js";import{M as p,C as s}from"./blocks-BgvPFJNP.js";import"./Tag-C0AbLWiC.js";import"./index-CofNVADY.js";import"./copy-AboRjUVj.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CFI9VGkd.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BbgOEhgO.js";import"./index-CdyvC-L0.js";import"./index-D8OEyr8Q.js";import"./Link-C-dbgRnK.js";import"./index-B1MvTI4o.js";import"./index-Bh0rKKOG.js";import"./index-DTbJ3L--.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-j4KshgYu.js";import"./addCustomCSSWithScoping-dmB8rtW3.js";import"./index-BcBOqS22.js";import"./information-DWcYA3Ge.js";import"./sys-enter-2-CQUiiR68.js";import"./alert-DfrSfG2k.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C01vq_tG.js";import"./delete-B-vJcZEa.js";import"./settings-C9s2yLAD.js";import"./NoData-C_OT3nkl.js";import"./IllustratedMessage-Bw6CCqa1.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-CeOc3m_6.js";import"./index-BtfUZD9l.js";import"./index-bKb7cC61.js";import"./slim-arrow-down-plIUNiIv.js";import"./Input-BqTefG9q.js";import"./ResponsivePopoverCommon.css-CaExEbcN.js";import"./ValueStateMessage.css-j0uXhKgp.js";import"./Suggestions.css-LZu9AJzQ.js";import"./ListBoxItemGroupTemplate-CA08nrMV.js";import"./ComboBoxItemGroup-DSvJ8fHP.js";import"./ListItemBaseTemplate-PmrEhlyw.js";import"./Token-Dae4rL70.js";import"./ScrollEnablement-B_VGa692.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DkifgMKf.js";import"./ToggleButton-7zmtTUNl.js";import"./SuggestionItem-DyFoeHZd.js";import"./index-CIveRvMm.js";import"./Option-BddoQSs-.js";import"./index-C7Cx90Bv.js";import"./SegmentedButton-DFR9vAuR.js";import"./index-BeVxZxme.js";import"./Select-D8r9sg-T.js";import"./InvisibleMessage-BamEjZig.js";import"./slim-arrow-down-DPB1_EKt.js";import"./index-BK8lvVbF.js";import"./index-COe7AG8n.js";import"./index-BEoChkv9.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B3GX0NY1.js";import"./group-2-Ck2TlhgN.js";import"./sort-descending-Bcg2xsEH.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DnyBfK-i.js";import"./utils-C1cOCLNW.js";import"./index-Co1haORi.js";import"./index-Bn4aUwEb.js";import"./index-CJ_qaT_q.js";import"./navigation-down-arrow-Ch-dz918.js";import"./navigation-right-arrow-nGujzQ0V.js";import"./navigation-right-arrow-DJO4C4Vi.js";import"./useCurrentTheme-CgyKYq3h.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BS5kb7Yk.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CkDYu-F2.js";import"./paper-plane-DNrev12r.js";import"./index-qCY9xvvQ.js";import"./less-CUB-bYbC.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
