import{j as o}from"./iframe-DCh7S_7o.js";import{useMDXComponents as n}from"./index-CQ2Rgf0f.js";import{I as r,F as m}from"./CommandsAndQueries-BHuSnwTn.js";import{M as p,C as s}from"./blocks-DmZmqlp_.js";import"./Tag-CZuGcFNN.js";import"./index-C5sgOYh1.js";import"./copy-BrUTFvSK.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Dyg4late.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DvoAW6NG.js";import"./index-BwuMWpwU.js";import"./index-BzGBt6gL.js";import"./Link-DOaKYpM4.js";import"./index-CqXebPST.js";import"./index-CKcNqeBZ.js";import"./index-Gt-7HKkD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CDzt8G5a.js";import"./addCustomCSSWithScoping-DaHSAyiF.js";import"./index-gCdJvzAZ.js";import"./information-FYwlptxJ.js";import"./sys-enter-2-CNa4r-Sw.js";import"./alert-Bj_hkuex.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BUMFQ1pn.js";import"./delete-D5M82eeI.js";import"./settings-D-G-hMFI.js";import"./NoData-Cks1g_4P.js";import"./IllustratedMessage-c9qO6qKJ.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BhckPa9Q.js";import"./index-5XMRhuzg.js";import"./index-BAgLClg3.js";import"./slim-arrow-down-D91T-40j.js";import"./Input-LTgloMqk.js";import"./ResponsivePopoverCommon.css-YvTmosB3.js";import"./ValueStateMessage.css-_40RyXNK.js";import"./Suggestions.css-CEeo2on1.js";import"./ListBoxItemGroupTemplate-8cMH_8Hg.js";import"./ComboBoxItemGroup-wv4ICvd4.js";import"./ListItemBaseTemplate-B1GyPNZx.js";import"./Token-CxvB1hc0.js";import"./ScrollEnablement-CHt3xTrM.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D-7OIxnD.js";import"./ToggleButton-CWn-VFiI.js";import"./SuggestionItem-1WqpyGaM.js";import"./index-DQ_ZwByO.js";import"./Option-Bd427Odz.js";import"./index-CYDuPw7n.js";import"./SegmentedButton-MFLETAjB.js";import"./index-CG2oTHho.js";import"./Select-DgXiFLA1.js";import"./InvisibleMessage-CO-uxLEE.js";import"./slim-arrow-down-N5l622ic.js";import"./index-FRjNpllp.js";import"./index-CkoxQ7YT.js";import"./index-BaU_AFbL.js";import"./index-D-grjYU9.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CuMi9SwU.js";import"./group-2-JRco5MZe.js";import"./sort-descending-B05TUdbs.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-_tQWfdMG.js";import"./utils-BHbbXcFh.js";import"./index-BF5blqws.js";import"./index-CTOIsb5D.js";import"./index-JhMtSdTx.js";import"./navigation-down-arrow-DlTIQ6fX.js";import"./navigation-right-arrow-Cca6wH2s.js";import"./navigation-right-arrow-VnZvrXIO.js";import"./useCurrentTheme-Dna0LUjC.js";import"./index-DnXcPtid.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D0YNVX7D.js";import"./paper-plane-DoMiy80N.js";import"./index-NjhBYZF2.js";import"./less-DQi8Ps2m.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
