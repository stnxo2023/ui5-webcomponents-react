import{j as o}from"./iframe-D74d3IUT.js";import{useMDXComponents as n}from"./index-BzFpXofy.js";import{I as r,F as m}from"./CommandsAndQueries-CXtjs1YA.js";import{M as p,C as s}from"./blocks-CXGWO-SS.js";import"./Tag-CGDi5rN6.js";import"./index-D9Jimze5.js";import"./copy-B52gZhj1.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CRUZhyOz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dp6BwZZH.js";import"./index-BAV2Dqb-.js";import"./index-nz5M1FvK.js";import"./Link-BnKuAsKS.js";import"./index-CGofV6Bd.js";import"./index-CBnDxC_O.js";import"./index-CUp4_VMY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DI0ZtE-_.js";import"./addCustomCSSWithScoping-DX0DY0tV.js";import"./index-B6nGMvY0.js";import"./information-CzZVG8MP.js";import"./sys-enter-2-Bo9ZeWqv.js";import"./alert-BpouBdE8.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BP3F7SzG.js";import"./delete-YUY4KlW5.js";import"./settings-DpOnwkHb.js";import"./NoData-B2ZeHRsw.js";import"./IllustratedMessage-CD7-3bUQ.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-D8YrAv4w.js";import"./index-B4EupoFR.js";import"./index-GzctAGg6.js";import"./slim-arrow-down-CJ7jhAk1.js";import"./Input-D3Xm66Jc.js";import"./ResponsivePopoverCommon.css-Bm5g59rh.js";import"./ValueStateMessage.css-CNhskv9k.js";import"./Suggestions.css-BammTqMf.js";import"./ListBoxItemGroupTemplate-Bnq694A2.js";import"./ComboBoxItemGroup-CTUZloft.js";import"./ListItemBaseTemplate-BtNRlpdq.js";import"./Token-9UX-S350.js";import"./ScrollEnablement-Bvs_TGN7.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-S82lpBYr.js";import"./ToggleButton-BCthjRIl.js";import"./SuggestionItem-BD6hvrsk.js";import"./index-BTq-cNvk.js";import"./Option-c6rQ8KOO.js";import"./index-BeFwl-qO.js";import"./SegmentedButton-DsOBeHfP.js";import"./index-C2WGUbBO.js";import"./Select-Bl9KvdRX.js";import"./InvisibleMessage-BT-HA0qk.js";import"./slim-arrow-down-DDEX6AaA.js";import"./index-BGhEWWIW.js";import"./index-Bj1y_nF2.js";import"./index-BAajSuv0.js";import"./index-BJZ4mF5F.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CZdxiPUv.js";import"./group-2-x2wNxahT.js";import"./sort-descending-DblnClo_.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CoiaLP2s.js";import"./utils-BPA4Vsqc.js";import"./index-DrVyi1bm.js";import"./index-Db-Q1TXS.js";import"./index-C1aOp4aZ.js";import"./navigation-down-arrow-ACQ1IIiZ.js";import"./navigation-right-arrow-C6rkELWM.js";import"./navigation-right-arrow-DRqzrNVR.js";import"./useCurrentTheme-DcwwM3Ir.js";import"./index-DelixGbO.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D2mdH9Ar.js";import"./paper-plane-BAJmhSNp.js";import"./index-DmuQ-N4b.js";import"./less-DFyAY_Yv.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
