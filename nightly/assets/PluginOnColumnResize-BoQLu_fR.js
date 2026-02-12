import{j as o}from"./iframe-Hc0Jcm1H.js";import{useMDXComponents as n}from"./index-DuUU5AC1.js";import{I as r,F as m}from"./CommandsAndQueries-DaPP_-f6.js";import{M as p,C as s}from"./blocks-Blx2ursY.js";import"./Tag-DWcxngX2.js";import"./index-X6pjtL8_.js";import"./copy-BhskYI2N.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CSkHzbUH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CQCUFERN.js";import"./index-BZHpmRs9.js";import"./index-BP8PtjoR.js";import"./Link-B4jgiGqN.js";import"./index-D4_s-XzL.js";import"./index-DixWMcP9.js";import"./index-YGVe_Lue.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CSgKpTfU.js";import"./addCustomCSSWithScoping-C31rwvDU.js";import"./index-CJBWc845.js";import"./information-MEaUQuQF.js";import"./sys-enter-2-Bor4HzlU.js";import"./alert-B5sjmhde.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BUSpAEyp.js";import"./delete-B_UVOxI5.js";import"./settings-DoJo7PIR.js";import"./NoData-BtiqKpF_.js";import"./IllustratedMessage-7Q0rSxAX.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DY07_HAn.js";import"./index-C4-ueurv.js";import"./index-CVAhSMmh.js";import"./slim-arrow-down-CnQoJTna.js";import"./Input-jvbkedmk.js";import"./ResponsivePopoverCommon.css-BUymfbWg.js";import"./ValueStateMessage.css-DYbIayMA.js";import"./Suggestions.css-DAulSdYD.js";import"./ListBoxItemGroupTemplate-C3BPGY4S.js";import"./ComboBoxItemGroup-S4DHHq5B.js";import"./ListItemBaseTemplate-D1J42Smc.js";import"./Token-C_NNBIIw.js";import"./ScrollEnablement-DdNa3g_Z.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DI8nzW2J.js";import"./ToggleButton-Dqx5ood8.js";import"./SuggestionItem-BQwZmd1n.js";import"./index-B2zqQYOB.js";import"./Option-DYDjvvQF.js";import"./index-B-jLNkJI.js";import"./SegmentedButton-B6hVMkZG.js";import"./index-Cl268kCu.js";import"./Select-DcomDJKy.js";import"./InvisibleMessage-1eRkmfyK.js";import"./slim-arrow-down-DpK-rqPH.js";import"./index-BDvJxbiT.js";import"./index-D_cylvMd.js";import"./index-CtZBQQM2.js";import"./index-BF_BhXaP.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D_PK0427.js";import"./group-2-CVFEbsNN.js";import"./sort-descending-DZXbPc0n.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-hjnENwQI.js";import"./utils-CMQMf6l5.js";import"./index-CP62UNNy.js";import"./index-C89QNOBV.js";import"./index-Dc4nb1AV.js";import"./navigation-down-arrow-Dgmp7r6E.js";import"./navigation-right-arrow-B3FKHK8J.js";import"./navigation-right-arrow-DBBKbyJD.js";import"./useCurrentTheme-D1RNYWH0.js";import"./index-3YVdwNdJ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BnF71Q9x.js";import"./paper-plane-BEnc2lHw.js";import"./index-DJj6qKVN.js";import"./less-Bx2mAaAT.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
