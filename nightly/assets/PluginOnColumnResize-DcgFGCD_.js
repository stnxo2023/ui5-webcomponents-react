import{j as o}from"./iframe-DtedCjfy.js";import{useMDXComponents as n}from"./index-CHHTCtpJ.js";import{I as r,F as m}from"./CommandsAndQueries-CefMw8Tu.js";import{M as p,C as s}from"./blocks-B76JpcnK.js";import"./Tag-UovGhxml.js";import"./index-DKt9EK6E.js";import"./copy-YvtV-MwK.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DaFgOxon.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DX3eFopX.js";import"./index-DeLaWQId.js";import"./index-B_rkL0I7.js";import"./Link-DZXvuASQ.js";import"./index-CYjF7K0n.js";import"./index-BwT8h001.js";import"./index-CSzpUMpn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BDJ7Ajcv.js";import"./addCustomCSSWithScoping-ClguXaul.js";import"./index-Np4eK1ew.js";import"./information-Dgg1zzf6.js";import"./sys-enter-2-BS_wAjUh.js";import"./alert-DCJXRL-H.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CYN8eos6.js";import"./delete-C1Wyhlth.js";import"./settings-CptqO7gs.js";import"./NoData-F4hYh7Ek.js";import"./IllustratedMessage-C5F6SUC6.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BJoCUYm7.js";import"./index-s9vdjwfk.js";import"./index-D10KU1Ta.js";import"./slim-arrow-down-B5bCreHk.js";import"./Input-Dl-5sLwa.js";import"./ResponsivePopoverCommon.css-82X5LMAI.js";import"./ValueStateMessage.css-BmfTYgl7.js";import"./Suggestions.css-D0hxhwDs.js";import"./ListBoxItemGroupTemplate-DVxNdcM2.js";import"./ComboBoxItemGroup-DLcad7ol.js";import"./ListItemBaseTemplate-vodsce4v.js";import"./Token-dHSL_sqK.js";import"./ScrollEnablement-CJ3-LAJa.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BKpRxXOc.js";import"./ToggleButton-D-pV1m-u.js";import"./SuggestionItem-DNzNqXr6.js";import"./index-CX53ZjFD.js";import"./Option-1uoBZugc.js";import"./index-CPryGVXA.js";import"./SegmentedButton-aUT_BGJH.js";import"./index-DOcX0ZLa.js";import"./Select-Dv5jHc6p.js";import"./InvisibleMessage-CMofOcZ8.js";import"./slim-arrow-down-DO0xZWHM.js";import"./index-DgAPvGu_.js";import"./index-BTiCeD2_.js";import"./index-ymNZsoic.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cm-ygou4.js";import"./group-2-DGbAk6nr.js";import"./sort-descending-C2Qum4wS.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Doqujavl.js";import"./utils-C_iBhdzJ.js";import"./index--q_AhH3V.js";import"./index-DWer0OoI.js";import"./index-DR8LVVUU.js";import"./navigation-down-arrow-DjGJNutR.js";import"./navigation-right-arrow-CXzg5gO0.js";import"./navigation-right-arrow-C4yN2OeR.js";import"./useCurrentTheme-B3YW7Vit.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CAokvEvK.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BGj6VAfy.js";import"./paper-plane-tyKPIBAt.js";import"./index-C0v4tUQf.js";import"./less-CM7xB0tS.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
