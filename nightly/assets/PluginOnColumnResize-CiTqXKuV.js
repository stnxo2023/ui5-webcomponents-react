import{j as o}from"./iframe-DjfYWB_-.js";import{useMDXComponents as n}from"./index-CNEMb-s-.js";import{I as r,F as m}from"./CommandsAndQueries-BsOJw-5f.js";import{M as p,C as s}from"./blocks-nmBdCmu5.js";import"./Tag-BYbOAHsQ.js";import"./index-Cv9LJBlx.js";import"./copy-DOQqskn1.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Bx8L5gGw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cwo-vKel.js";import"./index-B3I7HtBx.js";import"./index-CkJ-GMHH.js";import"./Link-CGcb-hqt.js";import"./index-3-iEB97a.js";import"./index-Blql2ABB.js";import"./index-B4phfj74.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-M6waVzUY.js";import"./addCustomCSSWithScoping-Bm9f8w42.js";import"./index-CPQFexs4.js";import"./information-6Bx96viV.js";import"./sys-enter-2-Dkjyf6Zz.js";import"./alert-Cr4CwR6P.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dg2EcDm-.js";import"./delete-Dn4VRsBO.js";import"./settings-Bqn2drvn.js";import"./NoData-BrXPHqk9.js";import"./IllustratedMessage-bJRZPLTh.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-Bij97oPM.js";import"./index-CGkDrGvP.js";import"./index-BvLI0S8J.js";import"./slim-arrow-down-swQTdSNw.js";import"./Input-CJfaU7cK.js";import"./ResponsivePopoverCommon.css-DpaN_G4_.js";import"./ValueStateMessage.css-DaYi5Bjt.js";import"./Suggestions.css-CNISWm9D.js";import"./ListBoxItemGroupTemplate-BQ40pZer.js";import"./ComboBoxItemGroup-o1GMSWgz.js";import"./ListItemBaseTemplate-DNfVXr3f.js";import"./Token-D9FthG2R.js";import"./ScrollEnablement-B4FaEPu4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DkthL8Bg.js";import"./ToggleButton-DPum5vk_.js";import"./SuggestionItem-CF8875wi.js";import"./index-BRPIgwS4.js";import"./Option-3-roLoVF.js";import"./index-Bs2a6dx4.js";import"./SegmentedButton-B7RnWeGJ.js";import"./index-CpZsNdqM.js";import"./Select-CpnB3P08.js";import"./InvisibleMessage-BuBF9yqs.js";import"./slim-arrow-down-DNZp2sIO.js";import"./index-BZ-x6-Bx.js";import"./index-BFkrGCCz.js";import"./index-B_HRORUp.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DD4TJf9R.js";import"./group-2-ARDd1dPZ.js";import"./sort-descending-Bm1JystE.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-7WbgYwtx.js";import"./utils-B_rTI3PV.js";import"./index-0H0qN1a3.js";import"./index-k3f5SVhd.js";import"./index-B-bcUYN5.js";import"./navigation-down-arrow-BXADmo6h.js";import"./navigation-right-arrow-K_bO6q0G.js";import"./navigation-right-arrow-Bg66dsed.js";import"./useCurrentTheme-C9aR5EtN.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B14eBFuc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DoJ7z7ik.js";import"./paper-plane-KU6AFQvR.js";import"./index-BB7Dlsa8.js";import"./less-BADhD7u_.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
