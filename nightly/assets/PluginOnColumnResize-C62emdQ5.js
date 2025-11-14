import{j as o}from"./iframe-D4Wcvdi9.js";import{useMDXComponents as n}from"./index-CyoSS2tn.js";import{I as r,F as m}from"./CommandsAndQueries-CHCF8nk5.js";import{M as p,C as s}from"./blocks-BZVDlLxv.js";import"./Tag-C8CPshPM.js";import"./index-C0Cp4coA.js";import"./copy-ByuSrISy.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DvH8YaNx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BfU-6WHW.js";import"./index-DRGYhnMd.js";import"./index-BoPvUO7L.js";import"./Link-DRjrHvv7.js";import"./index-C0aU4sgS.js";import"./index-DyEesLqq.js";import"./index-B5YCmd_L.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C_EKP5sQ.js";import"./addCustomCSSWithScoping-B3blWPk3.js";import"./index-iYqBFHCz.js";import"./information-BV6B4i17.js";import"./sys-enter-2-Be3rvkTR.js";import"./alert-Bj2TJcB4.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bg9NkTF8.js";import"./delete-Dan4xo-W.js";import"./settings-Dc0Ay2Ol.js";import"./NoData-CPHXEiea.js";import"./IllustratedMessage-CqSfiYLz.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-Cc_7hoVU.js";import"./index-hA8G-1F0.js";import"./index-umARLA2o.js";import"./slim-arrow-down-BQ4prS5H.js";import"./Input-Dw523AWA.js";import"./ResponsivePopoverCommon.css-DXXW23Pq.js";import"./ValueStateMessage.css-CGX3TujJ.js";import"./Suggestions.css-yWvjMCYt.js";import"./ListBoxItemGroupTemplate-BXg8ZZhL.js";import"./ComboBoxItemGroup-BWf21BRm.js";import"./ListItemBaseTemplate-BtxWLyBh.js";import"./Token-CJew2pIR.js";import"./ScrollEnablement-B_7Hn9ne.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B7i9H2_f.js";import"./ToggleButton-tkY9KnFv.js";import"./SuggestionItem-C-IyQ9GM.js";import"./index-CalwvC2l.js";import"./Option-o--nSFBp.js";import"./index-B4qdjTS3.js";import"./SegmentedButton-Dlsij53P.js";import"./index-Bs-Aw581.js";import"./Select-G5EwzUhf.js";import"./InvisibleMessage-z6pIlI85.js";import"./slim-arrow-down-BwasBD_7.js";import"./index-CbPN-lRT.js";import"./index-DZDIO8XF.js";import"./index-BNR4hbu3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-AltxkYtY.js";import"./group-2-DCKEVdUW.js";import"./sort-descending-D6BynqyS.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C_DH5grj.js";import"./utils-BSZp2_tG.js";import"./index-Ddv6G0qJ.js";import"./index-MsmJ52zV.js";import"./index-BLw-L2xS.js";import"./navigation-down-arrow-CiJ3nX35.js";import"./navigation-right-arrow-CZ9bddNc.js";import"./navigation-right-arrow-B9tYbly4.js";import"./useCurrentTheme-DZ5Dd1Oz.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C_IB42fC.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-pRkoq2nx.js";import"./paper-plane-C5O9xOBt.js";import"./index-D9uEVirk.js";import"./less-Bgb69ICn.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
