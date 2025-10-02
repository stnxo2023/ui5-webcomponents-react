import{j as o}from"./iframe-B-pj6tCi.js";import{useMDXComponents as r}from"./index-CV4vE3wQ.js";import{I as n,F as m}from"./CommandsAndQueries-D5MjQxKD.js";import{M as p,C as s}from"./blocks-HpriUj6L.js";import"./Tag-BGSRXwU9.js";import"./index-BjTnndjj.js";import"./copy-DztVyiyp.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BK8uysVc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C-xz_U36.js";import"./index-CBj2QVaO.js";import"./index-BuYTxKvQ.js";import"./Link-C2AEvOhf.js";import"./index-BJS1VYKy.js";import"./index-C-cxTaDk.js";import"./index-etFlaHh7.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-zIVJXLqJ.js";import"./addCustomCSSWithScoping-NTHEVFVs.js";import"./index-BOWgSpCi.js";import"./information-D4Uxy2_-.js";import"./sys-enter-2-dO_KPcSs.js";import"./alert-DoolSfaJ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CXj0uEXT.js";import"./delete-BnYHOY2E.js";import"./settings-uSbSIQHU.js";import"./NoData-DMPDFl_l.js";import"./IllustratedMessage-C4cgVVAn.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-1DtyXPj6.js";import"./index-DkYSANwf.js";import"./slim-arrow-down-26t7D4j9.js";import"./Input-DmrlR0kq.js";import"./ResponsivePopoverCommon.css-CE7mr_pS.js";import"./ValueStateMessage.css-tXcATjqT.js";import"./Suggestions.css-CniPwVQQ.js";import"./ListBoxItemGroupTemplate-BFTUBHkW.js";import"./ComboBoxItemGroup-CkQyHkRa.js";import"./ListItemBaseTemplate-Cci8iryR.js";import"./Token-CxMiOAAC.js";import"./ScrollEnablement-D-n-HsWC.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DZ46rijL.js";import"./ToggleButton-4_Ru-zex.js";import"./SuggestionItem-BQ13UCwK.js";import"./index-ByOJ1YLH.js";import"./Option-CaNpJRmR.js";import"./index-DtsHJXJf.js";import"./SegmentedButton-B14_njt4.js";import"./index-CoWsLfrh.js";import"./Select-DbUQ6bw8.js";import"./InvisibleMessage-QwxdDQeA.js";import"./slim-arrow-down-BOPKijzV.js";import"./index-DJqVwyD9.js";import"./index-BQ49BgDg.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bi23S08g.js";import"./group-2-Cm9rVH12.js";import"./sort-descending-Dj82RQGa.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C_rwdTta.js";import"./utils-dtTM_TEW.js";import"./index-B_v9zx4p.js";import"./index-CJOQ4d67.js";import"./index-CC2eGnfy.js";import"./navigation-down-arrow-CpReOOXl.js";import"./navigation-right-arrow-DLC8Xg5V.js";import"./navigation-right-arrow-RgTlgqvQ.js";import"./useCurrentTheme-BwLBQ8nO.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BaaVPMC7.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-wViExLAn.js";import"./paper-plane-Bt6zz62V.js";import"./index-Dcyd7m_C.js";import"./less-BTlYxKnD.js";import"./index-C3ng40gn.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
`,o.jsx(e.h1,{id:"analyticaltable-plugin-useoncolumnresize",children:"AnalyticalTable Plugin: useOnColumnResize"}),`
`,o.jsx(n,{moduleName:"useOnColumnResize",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
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
`,o.jsx(m,{})]})}function Wo(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{Wo as default};
