import{j as o}from"./iframe-30LZfzOw.js";import{useMDXComponents as r}from"./index-9hK3vCGp.js";import{I as n}from"./CommandsAndQueries-B3tX98p8.js";import{M as m,C as p}from"./blocks-C0vZ6D8t.js";import"./Tag-Dtxkyswp.js";import"./index-CjMm9yFV.js";import"./copy-BDfV85Pd.js";import{F as s}from"./Footer-BNR5gUPY.js";import"./PageNotFound-yG6M5MId.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-B3-rzdQd.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CPAvZ0M5.js";import"./index-BqAk99uF.js";import"./index-orHhnsuM.js";import"./index-DNQEiveD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dl3uWGQL.js";import"./addCustomCSSWithScoping-DtBGS5Q4.js";import"./index-CqMGZXJd.js";import"./index-DBMP_Ccw.js";import"./index-CZwEe_4d.js";import"./information-BQPccwsM.js";import"./sys-enter-2-CbSQlHDF.js";import"./alert-BwFRRuyW.js";import"./index-CFfbQ4H0.js";import"./Illustrations-BGO-1oHt.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D4Ny2Qqv.js";import"./delete-C23RyoNS.js";import"./settings-vCvKKELE.js";import"./NoData-BYjwPDGX.js";import"./NoFilterResults-CCvr_mGb.js";import"./index-HraqqLCL.js";import"./IllustratedMessage-B21zxjt4.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-Cnc3ng8i.js";import"./Input-C9d7fki7.js";import"./ResponsivePopoverCommon.css-COYnkjUj.js";import"./ValueStateMessage.css-BtsWCoC_.js";import"./Suggestions.css-BIuoYk1E.js";import"./ListBoxItemGroupTemplate-CkL-FEGQ.js";import"./ComboBoxItemGroup-gJ9bF5Mf.js";import"./ListItemBaseTemplate-CbFyC0Bd.js";import"./Token-6w1_tPy9.js";import"./ScrollEnablement-BtBhqt6G.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DUX806d8.js";import"./ToggleButton-DLpAZcDf.js";import"./multiselect-all-3L7ChLWO.js";import"./SuggestionItem-aIZEKOnW.js";import"./index-BZL0dq0V.js";import"./Option-CtcuoPzM.js";import"./index-DTQROv24.js";import"./SegmentedButton-B_fnwh2s.js";import"./index-B1i_wN68.js";import"./Select-l4rVM2RI.js";import"./InvisibleMessage-IbisIrn1.js";import"./index-qMyxaARO.js";import"./index-ByDJh9XY.js";import"./index-DkQqnEjC.js";import"./index-Dn9Dy3ZO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DUmOK15y.js";import"./group-2-Cm3-VEfC.js";import"./sort-descending-D91blpVD.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B3GhDGHr.js";import"./utils-IkNb-DUU.js";import"./index-5e0OL3tH.js";import"./index-Kunnu4JS.js";import"./index-CS-7xh0w.js";import"./navigation-down-arrow-C1y2H9vH.js";import"./navigation-right-arrow-BjkMCO6q.js";import"./navigation-right-arrow-xyDtPWf6.js";import"./useCurrentTheme-D3OuI6Tp.js";import"./index-Dxoj_xD_.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CVz-G4WN.js";import"./paper-plane-Dl39-tzB.js";import"./index-BWQnImub.js";import"./less-Cg3ABqJp.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
