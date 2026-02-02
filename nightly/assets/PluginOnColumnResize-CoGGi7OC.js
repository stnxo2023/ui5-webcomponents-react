import{j as o}from"./iframe-CeMquKfU.js";import{useMDXComponents as n}from"./index-BbFo7jBM.js";import{I as r,F as m}from"./CommandsAndQueries-DG6G8TEI.js";import{M as p,C as s}from"./blocks-Db1iDIvu.js";import"./Tag-DBOPR6ka.js";import"./index-BWGqmYD4.js";import"./copy-DuOXgjDa.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-B1wSYbCh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DYb2g8Yq.js";import"./index-srI8srsL.js";import"./index-WnbBQODb.js";import"./Link-B4KwrrH9.js";import"./index-Brk-KPPC.js";import"./index-jfPm289V.js";import"./index-DMujUK6u.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-RK7-B4yx.js";import"./addCustomCSSWithScoping-06k5HVP6.js";import"./index-CQMy8EdC.js";import"./information-BF8hjIJ6.js";import"./sys-enter-2-CBCKgEbS.js";import"./alert-DPPxzZqA.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DPG_OKYP.js";import"./delete-Uj8hBt6S.js";import"./settings-CRRgNt-N.js";import"./NoData-YotdDZfS.js";import"./IllustratedMessage-C9SN6Yvr.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-gYz_1-Iq.js";import"./index-DTmGPPPG.js";import"./index-lo7sxx3g.js";import"./slim-arrow-down-rp2vwRxt.js";import"./Input-DQRA-VuS.js";import"./ResponsivePopoverCommon.css-BClm2dDh.js";import"./ValueStateMessage.css-CKCH07QR.js";import"./Suggestions.css-BWIb4a3h.js";import"./ListBoxItemGroupTemplate-DCHeqAW1.js";import"./ComboBoxItemGroup-SnnIm8Sr.js";import"./ListItemBaseTemplate-1_D2ATm3.js";import"./Token-CruD5fzF.js";import"./ScrollEnablement-C-b-W7id.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D7spGUwG.js";import"./ToggleButton-_yDrgV6p.js";import"./SuggestionItem-CL3ZaIy3.js";import"./index-UEVtisfD.js";import"./Option-BKd77GhM.js";import"./index-3m2Ir6Wd.js";import"./SegmentedButton-PLCet70E.js";import"./index-DSexaJxi.js";import"./Select-mBwpFl_7.js";import"./InvisibleMessage-DPIiF7tN.js";import"./slim-arrow-down-DP9BktZN.js";import"./index-DBpNwbAj.js";import"./index-CT9C6QTI.js";import"./index-CBp7yPzh.js";import"./index-_bp4qzZ2.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BgkPuhmB.js";import"./group-2-Cjy-hE1J.js";import"./sort-descending-Bvfrz-CE.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CHxxDtPV.js";import"./utils-BpaGkPqN.js";import"./index-DWISqHTN.js";import"./index-BO-Xqwo9.js";import"./index-2AndXKS7.js";import"./navigation-down-arrow-C-MSOhmQ.js";import"./navigation-right-arrow-PEzIwvoX.js";import"./navigation-right-arrow-Df3YrvYp.js";import"./useCurrentTheme-DkydNdML.js";import"./index-C0E2EBUT.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CjonKQN8.js";import"./paper-plane-Cz43U6io.js";import"./index-BtaWLEfD.js";import"./less-BiaIGbp3.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
