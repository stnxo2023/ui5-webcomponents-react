import{j as o}from"./iframe-fnu3Vo41.js";import{useMDXComponents as n}from"./index-BSrpAODL.js";import{I as r,F as m}from"./CommandsAndQueries-Bopzu-n8.js";import{M as p,C as s}from"./blocks-BS5BROTL.js";import"./Tag-BiBlBJWE.js";import"./index-BbmVly28.js";import"./copy-Db06aovL.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-cEuR5nNv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-SCFjt_Ga.js";import"./index-CJk9IgGL.js";import"./index-rPkavUv0.js";import"./Link-BLTuinuO.js";import"./index-BUdZGDL2.js";import"./index-C8EzOXR3.js";import"./index-DahYWRMR.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D2MON8lG.js";import"./addCustomCSSWithScoping-DzZplljN.js";import"./index-B7d1u9D1.js";import"./information-C4CUHJ6u.js";import"./sys-enter-2-Bq1R0WAk.js";import"./alert-xdJdEaU1.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cg3qW77l.js";import"./delete-DmiOTRnw.js";import"./settings-zDmG-3im.js";import"./NoData-nQLO9EZ8.js";import"./IllustratedMessage-BXzbNCL1.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-DBeKPlkH.js";import"./index-Brwr5FUa.js";import"./index-BDJpTTku.js";import"./slim-arrow-down-XRKMzLPf.js";import"./Input-Detc7Ii6.js";import"./ResponsivePopoverCommon.css-CxPrgmxN.js";import"./ValueStateMessage.css-CQ4OVJ9G.js";import"./Suggestions.css-vM9OM1GI.js";import"./ListBoxItemGroupTemplate-BYeB1Cl_.js";import"./ComboBoxItemGroup-4jucO2i6.js";import"./ListItemBaseTemplate-FeG_oPAJ.js";import"./Token-DAQ1DS0x.js";import"./ScrollEnablement-WgQtsSmN.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BRTdZnQJ.js";import"./ToggleButton-57cIItv1.js";import"./SuggestionItem-C8mqfWho.js";import"./index-CX4U2Jek.js";import"./Option-DD3Zi9NK.js";import"./index-jyed2UIl.js";import"./SegmentedButton-gKY9F3pt.js";import"./index-BRftw348.js";import"./Select-lOtzZ3fx.js";import"./InvisibleMessage-Bg2OVWgo.js";import"./slim-arrow-down-DRNkvrF7.js";import"./index-D5Hq6_Re.js";import"./index-BhBUN7y5.js";import"./index-oA7Crhpd.js";import"./index-Cw1Aet_f.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C-h3NHKT.js";import"./group-2-DwY0Xc-S.js";import"./sort-descending-Bc55MwdY.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bwnkn5xs.js";import"./utils-DYh0gtXT.js";import"./index-DYKo8bXl.js";import"./index-BPeyg5AZ.js";import"./index-BrR0l5NR.js";import"./navigation-down-arrow-B7W9-sHI.js";import"./navigation-right-arrow-D_oDOzWj.js";import"./navigation-right-arrow-B69jNS7a.js";import"./useCurrentTheme-BetgmMaZ.js";import"./index-q7ej9ehA.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CEjni14h.js";import"./paper-plane-DOa3jfws.js";import"./index-JCFhG4pE.js";import"./less-BaCzhisI.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
