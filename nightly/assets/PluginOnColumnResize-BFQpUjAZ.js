import{j as o}from"./iframe-Bx5nPEOl.js";import{useMDXComponents as n}from"./index-xw1HgrxR.js";import{I as r,F as m}from"./CommandsAndQueries-DQbk5l2-.js";import{M as p,C as s}from"./blocks-BnfvreJd.js";import"./Tag-Czmfabca.js";import"./index-DySSVXhZ.js";import"./copy-CNcXjyuB.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CrixVdQ8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BJ7q1nh3.js";import"./index-CHjTsZ6I.js";import"./index-DkrrTKjv.js";import"./Link-kOQVQryb.js";import"./index-DAgUYXjE.js";import"./index-EX-yWEKJ.js";import"./index-Bwj8Rahv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-4hIxCZ-4.js";import"./addCustomCSSWithScoping-BnQjkpis.js";import"./index-D030oFb6.js";import"./information-C_BRWXUj.js";import"./sys-enter-2-lnnKHtcu.js";import"./alert-CZSvHkOp.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BwNoBN7k.js";import"./delete-DojygiWC.js";import"./settings-CdO75LQa.js";import"./NoData-BxLSGnmz.js";import"./IllustratedMessage-CznMqB69.js";import"./i18n-defaults-BoKY-OR9.js";import"./parameters-bundle.css-B37gDvcF.js";import"./NoFilterResults-BIAQtnD-.js";import"./index-DV1-UqSW.js";import"./index-CpsQPo3e.js";import"./slim-arrow-down-eJKhvhkE.js";import"./Input-CxXLCf6q.js";import"./ResponsivePopoverCommon.css-CalmLiVM.js";import"./ValueStateMessage.css-BZ1EUbwN.js";import"./Suggestions.css-DQV6aIGz.js";import"./ListBoxItemGroupTemplate-VNyv00pZ.js";import"./ComboBoxItemGroup-jUyYtSAM.js";import"./ListItemBaseTemplate-Dykvp_EK.js";import"./Token-DhwxhKpj.js";import"./ScrollEnablement-DNpNAWna.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-zfIyxVpK.js";import"./ToggleButton-CQ5gk1wa.js";import"./SuggestionItem-CcFTbcr2.js";import"./index-MISqvFi7.js";import"./Option-DPppUzFK.js";import"./index-BfR1hjK_.js";import"./SegmentedButton-3fKGQQxX.js";import"./index-C4WckVVh.js";import"./Select-C1QLPr_H.js";import"./InvisibleMessage-CQ0u2q5u.js";import"./slim-arrow-down-CAhFqhr1.js";import"./index-FDm07H3e.js";import"./index-djmxjVZM.js";import"./index-8AWyZMWh.js";import"./index-AroNelzF.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cozu-6eK.js";import"./group-2-o5ZUKu4E.js";import"./sort-descending-BldoBMrB.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C6ekE9Pr.js";import"./utils-D64FTNul.js";import"./index-DBe8VqoY.js";import"./index-BK8Wq19O.js";import"./index-Cp2_alMF.js";import"./navigation-down-arrow-CRFET8c4.js";import"./navigation-right-arrow-BmtWA2-q.js";import"./navigation-right-arrow-JKoD_tiK.js";import"./useCurrentTheme-BTp0qmA6.js";import"./index-CiSPkYgk.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-wht3LnSl.js";import"./paper-plane-C5y4Nddn.js";import"./index-DH3g5PUN.js";import"./less-BXKa_8RC.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
