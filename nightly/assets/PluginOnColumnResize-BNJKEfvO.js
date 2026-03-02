import{j as o}from"./iframe-Brff1rmP.js";import{useMDXComponents as n}from"./index-CqBWQ9Zx.js";import{I as r,F as m}from"./CommandsAndQueries-Z2F9olV7.js";import{M as p,C as s}from"./blocks-Cx2b2NzS.js";import"./Tag-CO6ENRz9.js";import"./index-DlA7--5Z.js";import"./copy-Bv1OuOcO.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CjilTa_F.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cl8f3le-.js";import"./index-GNhj6rYz.js";import"./index-DYmdKmkq.js";import"./Link-CnNfKrga.js";import"./index-CHjRsrmQ.js";import"./index-BM_H4FxE.js";import"./index-SsKZpktE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-hZd9oRLF.js";import"./addCustomCSSWithScoping-DWThNXxY.js";import"./index-C7l_yPP_.js";import"./information-Cs5lMjWh.js";import"./sys-enter-2-D0GbakMF.js";import"./alert-DvXA8o8i.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DGKptoJD.js";import"./delete-C9vgo_nn.js";import"./settings-K-nxoclT.js";import"./NoData-D4gr7NQb.js";import"./IllustratedMessage-EHffJ8mB.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-xJ_W-ozk.js";import"./index-v9HL1hDi.js";import"./index-BK9Dppbt.js";import"./slim-arrow-down-DHZaQUOz.js";import"./Input-Dd38fmul.js";import"./ResponsivePopoverCommon.css-CCXZCmBy.js";import"./ValueStateMessage.css-DyEd-7MM.js";import"./Suggestions.css-A8d5VcXf.js";import"./ListBoxItemGroupTemplate-DDtryC-p.js";import"./ComboBoxItemGroup-DiF6Vj82.js";import"./ListItemBaseTemplate-BPRyBwPx.js";import"./Token-CGQBD38e.js";import"./ScrollEnablement-L6YMa_Sh.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CFw-rkJd.js";import"./ToggleButton-CJv8CO-v.js";import"./SuggestionItem-CFU47XHi.js";import"./index-xNbk8EkH.js";import"./Option-CrDw5azF.js";import"./index-BNRoZ_z-.js";import"./SegmentedButton-C-poCUsN.js";import"./index-_Xx0BHEx.js";import"./Select-Chae-TJe.js";import"./InvisibleMessage-ByZ2WPzN.js";import"./slim-arrow-down-C94xZ_93.js";import"./index-C4Pu6wgx.js";import"./index-B597IRDL.js";import"./index-Sey1U4Nj.js";import"./index-ByUJYxuO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B1HOC25c.js";import"./group-2-Bl1lsFHE.js";import"./sort-descending-CLPvvO8q.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DuPpFX5n.js";import"./utils-CGg_sa7o.js";import"./index-ChaPxfcm.js";import"./index-X945bjAw.js";import"./index-Cft4P2eI.js";import"./navigation-down-arrow-Cb_GEVcv.js";import"./navigation-right-arrow-Dj8u635l.js";import"./navigation-right-arrow-C3t6w78M.js";import"./useCurrentTheme-DEOFEBbn.js";import"./index-BAklYe1X.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-utzGJSQW.js";import"./paper-plane-4WEe8zaP.js";import"./index-NLOcJtOO.js";import"./less-Cjh9x-Bl.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
