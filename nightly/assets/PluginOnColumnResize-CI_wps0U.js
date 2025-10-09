import{j as o}from"./iframe-DeMwMmGx.js";import{useMDXComponents as n}from"./index-CWwj9Mnl.js";import{I as r,F as m}from"./CommandsAndQueries-BBLmRDsb.js";import{M as p,C as s}from"./blocks-8D0p5thu.js";import"./Tag-CJlss1uo.js";import"./index-fzrObdgv.js";import"./copy-BgdiHhBm.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CWwR-y9u.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DaGO4DII.js";import"./index-CvQAJVIm.js";import"./index-CqRETC9D.js";import"./Link-DuK3KTb6.js";import"./index-x-nhhmJ1.js";import"./index-QSmrzR-p.js";import"./index-C3DV1EGu.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DJ0_IZyX.js";import"./addCustomCSSWithScoping-DmQSYZoL.js";import"./index-DwA6oYWp.js";import"./information-IgIWD04z.js";import"./sys-enter-2-B6dBkbbN.js";import"./alert-DXbxKJCI.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BgVD4qXY.js";import"./delete-mq69ob-m.js";import"./settings-DsHd3P0n.js";import"./NoData--TQXjPxp.js";import"./IllustratedMessage-q7ABRVJa.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DN8h-kj9.js";import"./index-Bqo4E53G.js";import"./index-Ce9C4-0M.js";import"./slim-arrow-down-CB1uueTx.js";import"./Input-DRHd5nbL.js";import"./ResponsivePopoverCommon.css-Nq-6b_ms.js";import"./ValueStateMessage.css-Tpbst_AR.js";import"./Suggestions.css-BcZrXAjC.js";import"./ListBoxItemGroupTemplate-DWp2fAWp.js";import"./ComboBoxItemGroup-B99x6mYV.js";import"./ListItemBaseTemplate-BE7nd5FZ.js";import"./Token-fAbSmEQt.js";import"./ScrollEnablement-BDJVsvmw.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-eMNK3qV1.js";import"./ToggleButton-DVIEs1wL.js";import"./SuggestionItem-C9Fa1J1D.js";import"./index-HyDyLjGn.js";import"./Option-C1H5Qp9e.js";import"./index-EGOdPRwf.js";import"./SegmentedButton-BLiDf_5M.js";import"./index-Cjfludll.js";import"./Select-BWPut0uV.js";import"./InvisibleMessage-RemLUX1t.js";import"./slim-arrow-down-Cavo_L7e.js";import"./index-BwxK2g44.js";import"./index-B0LvNv03.js";import"./index-5d-X9JJE.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B4tw820b.js";import"./group-2-DLLjtbHP.js";import"./sort-descending-DFffTKv8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-hbWTH7_c.js";import"./utils-mFF1dh2e.js";import"./index-DfGmmuHK.js";import"./index-CEQRcaEk.js";import"./index-BPZ4GFnq.js";import"./navigation-down-arrow-BQ77KqPN.js";import"./navigation-right-arrow-BckoNBw3.js";import"./navigation-right-arrow-F7WHq2_o.js";import"./useCurrentTheme-BnPNa_8f.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BXvWjhnt.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Dy9MOOru.js";import"./paper-plane-4ZqR7r5W.js";import"./index-BFzoLWvR.js";import"./less-DFrGBfi9.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
