import{j as o}from"./iframe-DoO3B8k6.js";import{useMDXComponents as n}from"./index-c3qBf9j-.js";import{I as r,F as m}from"./CommandsAndQueries-BgTP9rvd.js";import{M as p,C as s}from"./blocks-SZ1zCtFT.js";import"./Tag-BQH01MnI.js";import"./index-0e8xkLwE.js";import"./copy-_xuz2Nel.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CmXCVKCh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BSLJX4WE.js";import"./index-CQlaTUTv.js";import"./index-DHXtHkXk.js";import"./Link-BjpII7wh.js";import"./index-DkL8yUNi.js";import"./index-DNsrF3vl.js";import"./index-DeXyQXgZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CRtsvWdt.js";import"./addCustomCSSWithScoping-BMQmLAx8.js";import"./index-DcEck9MJ.js";import"./information-CQ3_UNon.js";import"./sys-enter-2-04wFErlJ.js";import"./alert-TTaxVgBW.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CIhT2n-D.js";import"./delete-SjnFcxET.js";import"./settings-C0lq9GEs.js";import"./NoData-DfBjPnbb.js";import"./IllustratedMessage-CXdSvR4a.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-xMjYb9KY.js";import"./index-CpiZNEne.js";import"./index-DQXIYNyl.js";import"./slim-arrow-down-GZWBJmnW.js";import"./Input-C10NYIPu.js";import"./ResponsivePopoverCommon.css-CPXMLCds.js";import"./ValueStateMessage.css-69Ktf8Dg.js";import"./Suggestions.css-DN6X2W_Y.js";import"./ListBoxItemGroupTemplate-B5AqpDrM.js";import"./ComboBoxItemGroup-j1Qew58i.js";import"./ListItemBaseTemplate-BsAW94PE.js";import"./Token-DC4trEDg.js";import"./ScrollEnablement-vDfjB2It.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BmumZdm7.js";import"./ToggleButton-C4VP5bTt.js";import"./SuggestionItem-IO39S43j.js";import"./index-B94XsNA0.js";import"./Option-BaLD8Fma.js";import"./index-NWr0Tsrk.js";import"./SegmentedButton-X1XX7xUF.js";import"./index-C_c4Byeq.js";import"./Select-9rIpwA3F.js";import"./InvisibleMessage-CgykMR3a.js";import"./slim-arrow-down-t7AVMtWo.js";import"./index-DQKXzwtk.js";import"./index-D9vcEjIT.js";import"./index-MnZkDyaG.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ynF8pjf8.js";import"./group-2-Detpstok.js";import"./sort-descending-B0qjzB_P.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B_g-vZKh.js";import"./utils-LOEo2xLm.js";import"./index-GNYcE7dh.js";import"./index-DXQ56gFw.js";import"./index-BZhKH3An.js";import"./navigation-down-arrow-B33glP6f.js";import"./navigation-right-arrow-CD5NCtjH.js";import"./navigation-right-arrow-BNO-nAvK.js";import"./useCurrentTheme-DlkHXRgd.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DVfnIZQS.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D0_rTS9I.js";import"./paper-plane-BCWKCy3u.js";import"./index-DZMzSe-F.js";import"./less-2TELAs2h.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
