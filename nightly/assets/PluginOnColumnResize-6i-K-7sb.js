import{j as o}from"./iframe-_aM0UtJ2.js";import{useMDXComponents as n}from"./index-BfzIu2dE.js";import{I as r,F as m}from"./CommandsAndQueries-DzKXmTWy.js";import{M as p,C as s}from"./blocks-l9d8PUx_.js";import"./Tag-BfFHPicD.js";import"./index-DK-65CGT.js";import"./copy-DFcekAfZ.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CgldXt7D.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D4-JCcJ5.js";import"./index-D94cPjQU.js";import"./index-HG9KwvVi.js";import"./Link-DVTfY9Y-.js";import"./index-ChnKUkkG.js";import"./index-daYey1G6.js";import"./index-B2FptVvG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D5ZlAJzQ.js";import"./addCustomCSSWithScoping-JIDtcj4a.js";import"./index-80py4d9m.js";import"./information-Bugjbsmi.js";import"./sys-enter-2-B3MGAVo9.js";import"./alert-CNC7DRI_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BDin49Qt.js";import"./delete-qfJnygw7.js";import"./settings-4mK1hrn-.js";import"./NoData-8b23hioQ.js";import"./IllustratedMessage-BGHWa-aT.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-d2xsz83Y.js";import"./index-BrzyWVSa.js";import"./index-B7RpqTLg.js";import"./slim-arrow-down-BRjLnbot.js";import"./Input-MazSOwes.js";import"./ResponsivePopoverCommon.css-C9u2x3-0.js";import"./ValueStateMessage.css-DszbwuLg.js";import"./Suggestions.css-qx180UMs.js";import"./ListBoxItemGroupTemplate-DuHSjG0t.js";import"./ComboBoxItemGroup-D0cmVbGL.js";import"./ListItemBaseTemplate-DFJr1Bva.js";import"./Token-C2yl10l2.js";import"./ScrollEnablement-Bhq2qTDI.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BU1IwfYt.js";import"./ToggleButton-DYX2agjM.js";import"./SuggestionItem-C_mbbanp.js";import"./index-DKAKDwua.js";import"./Option-NFGo4imz.js";import"./index-ozNHZ0R1.js";import"./SegmentedButton-BCvDohGJ.js";import"./index-Cf7GYcbF.js";import"./Select-C0UwiMyq.js";import"./InvisibleMessage-C6DL-Jud.js";import"./slim-arrow-down-cxFeYscI.js";import"./index-C_W6PJrr.js";import"./index-Cr_o_sGI.js";import"./index-4LhBYovK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CNRItJq8.js";import"./group-2-BSuDu3BP.js";import"./sort-descending-CjYTHc_q.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D0_4QMUt.js";import"./utils-RjvQRYKv.js";import"./index-BxkisXba.js";import"./index-Di6FiDqU.js";import"./index-D-tGJU1i.js";import"./navigation-down-arrow-CXVkGqrk.js";import"./navigation-right-arrow-OXPBdahQ.js";import"./navigation-right-arrow-CCBpu_jK.js";import"./useCurrentTheme-C1Tgc9SL.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CtV42zsn.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CaZ25Jpx.js";import"./paper-plane-II9HzJH8.js";import"./index-Drkmvmr5.js";import"./less-BOPdbN0q.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
