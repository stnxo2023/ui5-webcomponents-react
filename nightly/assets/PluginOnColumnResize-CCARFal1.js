import{j as o}from"./iframe-Di0CnA8S.js";import{useMDXComponents as n}from"./index-D1yNQJed.js";import{I as r,F as m}from"./CommandsAndQueries-zSui8mFJ.js";import{M as p,C as s}from"./blocks-CQfV0luP.js";import"./Tag-YM6QkIty.js";import"./index-Cv974V6E.js";import"./copy-BnyBSvmF.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CaMp0239.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bkm6KJyR.js";import"./index-FrAwh-uI.js";import"./index-CX_Pkcfg.js";import"./Link-WIuadCnC.js";import"./index-Bms_gXSs.js";import"./index-DEJJ6ZVN.js";import"./index-DChMCwxZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BL09SrHJ.js";import"./addCustomCSSWithScoping-D9ak18Ev.js";import"./index-C4vcrMlE.js";import"./information-DzISr5a2.js";import"./sys-enter-2-Vd3zyEtx.js";import"./alert-DaK0qpmR.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BkjZN1m5.js";import"./delete-CkgveXZV.js";import"./settings-O_SqiOO8.js";import"./NoData-Cm3Sgky-.js";import"./IllustratedMessage-BkwPs3fv.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BXEHKTVt.js";import"./index-D5FQCJ2w.js";import"./index-DWNbjlf6.js";import"./slim-arrow-down-bK9T7o5_.js";import"./Input-BMxXpEmu.js";import"./ResponsivePopoverCommon.css--b7te08F.js";import"./ValueStateMessage.css-wgmiBQCU.js";import"./Suggestions.css-Bkytjk5E.js";import"./ListBoxItemGroupTemplate-DvN0aU6B.js";import"./ComboBoxItemGroup-N1tLGR-W.js";import"./ListItemBaseTemplate-0lg9M0fM.js";import"./Token-CZDcEwHC.js";import"./ScrollEnablement-DhAJ5JnK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D4_pyZ43.js";import"./ToggleButton-qVqa-FdV.js";import"./SuggestionItem-CDxntgT5.js";import"./index-XMMJdMJi.js";import"./Option-DNM61xVD.js";import"./index-nh3D4sX1.js";import"./SegmentedButton-DLLN3073.js";import"./index-D4LgD8pt.js";import"./Select-CSvcStkQ.js";import"./InvisibleMessage-CA5l1OrC.js";import"./slim-arrow-down-BZ32OfT-.js";import"./index-jyrIbm7X.js";import"./index-jLe1V_0t.js";import"./index-BCKZ26pG.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CSxtsdcS.js";import"./group-2-D_KQdcyc.js";import"./sort-descending-CVK6o8y6.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Cn-IKnzn.js";import"./utils-CA_s0xCU.js";import"./index-Dj5ZK7Jm.js";import"./index-SGAGbvBy.js";import"./index-BY5Nj2YC.js";import"./navigation-down-arrow-Cn2Pb-ac.js";import"./navigation-right-arrow-BM8i-tol.js";import"./navigation-right-arrow-qgiVcRku.js";import"./useCurrentTheme-DDCiNxpb.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CdwOc6CH.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DMJx-Dqa.js";import"./paper-plane-BU5KNFmh.js";import"./index-Dtz3OPe1.js";import"./less-DIBO8ral.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
