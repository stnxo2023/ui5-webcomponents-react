import{j as o}from"./iframe-Cv2DxGxx.js";import{useMDXComponents as n}from"./index-DJcSDbNR.js";import{I as r,F as m}from"./CommandsAndQueries-bS4Yf-ej.js";import{M as p,C as s}from"./blocks-ugoI9X9t.js";import"./Tag-Coz7RYuP.js";import"./index-D_TtcnwQ.js";import"./copy-CqIWY1yr.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Bzu6OElq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-mHVz6rF3.js";import"./index-CInTOaEh.js";import"./index-B09eBGHl.js";import"./Link-BduAs2w5.js";import"./index-DUYUZ9D7.js";import"./index-Gpf6Q-KM.js";import"./index-BniFx0GW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-0lPpvscI.js";import"./addCustomCSSWithScoping-Bw7ry9Qy.js";import"./index-C0_2Dkpw.js";import"./information-DWd1dkKI.js";import"./sys-enter-2-DDyu9UHI.js";import"./alert-3r0WRbjT.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CaCjLhwG.js";import"./delete-DA30Vb_3.js";import"./settings-DPcZjvrc.js";import"./NoData-CkwFywRp.js";import"./IllustratedMessage-CAb2xgRr.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-CpZwDGYv.js";import"./index-Ba-Eubsl.js";import"./index-CdW_heB4.js";import"./slim-arrow-down-BTvRdwWq.js";import"./Input-C1lqpYg3.js";import"./ResponsivePopoverCommon.css-D3KSXKvs.js";import"./ValueStateMessage.css-CZDTXdiA.js";import"./Suggestions.css-Cw7wY2ht.js";import"./ListBoxItemGroupTemplate-Waem1Q61.js";import"./ComboBoxItemGroup-DSnMrpI-.js";import"./ListItemBaseTemplate-CXI8xke2.js";import"./Token-CoSFdHdR.js";import"./ScrollEnablement-D_FfjNHJ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C1pGRTma.js";import"./ToggleButton-mckNH_TC.js";import"./SuggestionItem-BQNyHhBv.js";import"./index-Bo2NWm1F.js";import"./Option-BuJ-tVWb.js";import"./index-DIyggbSr.js";import"./SegmentedButton-75RA8p3W.js";import"./index-FkfgVmhN.js";import"./Select-944-A8Kx.js";import"./InvisibleMessage-DWFrz2m3.js";import"./slim-arrow-down-sehS3JFD.js";import"./index-V4LMPnG-.js";import"./index-BFYwVfb0.js";import"./index-BCQ2rtHe.js";import"./IconDesign-DXd8PPVF.js";import"./filter-4kPRahty.js";import"./group-2-Bg2BOQ3d.js";import"./sort-descending-B6JANGfX.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D4tiooQx.js";import"./utils-DdfwhCCt.js";import"./index-WPe-KT9J.js";import"./index-Br9lY8SV.js";import"./index-m0ZtgUtd.js";import"./navigation-down-arrow-0n0msI0k.js";import"./navigation-right-arrow-DrgYv11d.js";import"./navigation-right-arrow-D__Tv4vy.js";import"./useCurrentTheme-BaNC1vQQ.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D7LRyA5h.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Hq2jb4tD.js";import"./paper-plane-DSa5GeV2.js";import"./index-CU0aCIvN.js";import"./less-C0w2VPH4.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
