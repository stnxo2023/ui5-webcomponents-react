import{j as o}from"./iframe-ClKZoppV.js";import{useMDXComponents as r}from"./index-BBP-HRkM.js";import{I as n}from"./CommandsAndQueries-BSg7r23V.js";import{M as m,C as p}from"./blocks-C6PUfAN7.js";import"./Tag-CnAKe81V.js";import"./index-Brz6Jamn.js";import"./copy-rX2zRtcl.js";import{F as s}from"./Footer-BJ8-oElo.js";import"./PageNotFound-DkMfdMip.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DGZTteEt.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-DLU4uHoZ.js";import"./index-BFw8ePED.js";import"./index-W9ERffOR.js";import"./index-DG_kdwr6.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CJ7j91qP.js";import"./addCustomCSSWithScoping-5Po78CSL.js";import"./index-Tx9EfJkS.js";import"./index-Dnwis2Yb.js";import"./index-CEU-nQxX.js";import"./information-C2rgVrmf.js";import"./sys-enter-2-zNCrvlrA.js";import"./alert-DLSg1FPP.js";import"./index-kUQXQip-.js";import"./Illustrations-CjXAC4Lw.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BqRIgD2H.js";import"./delete-DTLw9kFa.js";import"./settings-CKxE0u5y.js";import"./NoData-Beno5Ixn.js";import"./NoFilterResults-DAtw42t7.js";import"./index-owrFuFXC.js";import"./IllustratedMessage-Bq2mIffC.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-Ct-vvlBG.js";import"./Input-DifhVVae.js";import"./ResponsivePopoverCommon.css-Dcm-qCQM.js";import"./ValueStateMessage.css-C3kGxfwH.js";import"./Suggestions.css-DMuxG7ST.js";import"./ListBoxItemGroupTemplate-DCEyEHtj.js";import"./ComboBoxItemGroup-CZ_yERJC.js";import"./ListItemBaseTemplate-wnFyFdMD.js";import"./Token-BGJ_CPca.js";import"./ScrollEnablement-DisvRpMe.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BgPpv9rh.js";import"./ToggleButton-EH5FNVd0.js";import"./multiselect-all-DfoaZX6L.js";import"./SuggestionItem-DvrIUtwR.js";import"./index-BiHnlYBo.js";import"./Option-hV2MsLrQ.js";import"./index-DFcrPMwa.js";import"./SegmentedButton-Dw0Q0pVv.js";import"./index-CqtCXtRM.js";import"./Select-BNOIoVRp.js";import"./InvisibleMessage-BAsmVFY2.js";import"./index-BNyltB7F.js";import"./index-CGhnN41O.js";import"./index-CxZDjTcS.js";import"./index-BLYzCrAG.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CrnnRFsr.js";import"./group-2-Bqh4dqd8.js";import"./sort-descending-Vzr3Ff4Q.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C86D3ysp.js";import"./utils-Dz6AVwqM.js";import"./index-CAsRf7dg.js";import"./index-IVfxG6E8.js";import"./index-DiTwbDsk.js";import"./navigation-down-arrow-C05xj5np.js";import"./navigation-right-arrow-DlzjCvaV.js";import"./navigation-right-arrow-D7tfucyq.js";import"./useCurrentTheme-D4VUyUoQ.js";import"./index-CUey85Pp.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CHRGMaLR.js";import"./paper-plane-Ddvc44cX.js";import"./index-B-c0kiTT.js";import"./less-C_ayitlz.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
`,o.jsx(p,{sourceState:"none",of:l}),`
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
`,o.jsx(s,{})]})}function So(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{So as default};
