import{j as o}from"./iframe-m3wgL8DO.js";import{useMDXComponents as n}from"./index-BDA4Q--W.js";import{I as r,F as m}from"./CommandsAndQueries-DJJG77Q0.js";import{M as p,C as s}from"./blocks-CkTarMgO.js";import"./Tag-tSZf1-5X.js";import"./index-XwYlDB9P.js";import"./copy-CODhXho7.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-uoQ6fw54.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BhmtIGIH.js";import"./index-D9MBfHQe.js";import"./index-CVyBcJoi.js";import"./Link-BBA1fpnp.js";import"./index-CLINieEb.js";import"./index-00DfGzTS.js";import"./index-B7uA3u-p.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C6f_OpFu.js";import"./addCustomCSSWithScoping-D1ffFiBE.js";import"./index-BSNngnc7.js";import"./information-DsCCxR_j.js";import"./sys-enter-2-3GVzqOhh.js";import"./alert-CYqVZ7NL.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CM97FBcw.js";import"./delete-Bf921CWr.js";import"./settings-BYe7f3tO.js";import"./NoData-Dh7joJIl.js";import"./IllustratedMessage-CxQCJ2ay.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-CTWxVoyD.js";import"./index-ljJh2mXy.js";import"./index-DdE1XOTZ.js";import"./slim-arrow-down-8v6NvsKW.js";import"./Input-Cs15w5r3.js";import"./ResponsivePopoverCommon.css-C9hxCvuP.js";import"./ValueStateMessage.css-z6jg6mGY.js";import"./Suggestions.css-DbjXinA2.js";import"./ListBoxItemGroupTemplate-9uh1HRli.js";import"./ComboBoxItemGroup-BqRSt8o0.js";import"./ListItemBaseTemplate-BAr1QC4e.js";import"./Token-DRcSqql8.js";import"./ScrollEnablement-Dlq8aT82.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DGziFzMo.js";import"./ToggleButton-sEBB_MTe.js";import"./SuggestionItem-Cc8TNMCR.js";import"./index-CxG5u9XF.js";import"./Option-QpRjKkO3.js";import"./index-CXyubNwj.js";import"./SegmentedButton-BflLR7ZS.js";import"./index-D17ZhWQV.js";import"./Select-Cp0iaTMd.js";import"./InvisibleMessage-BUt-p4eg.js";import"./slim-arrow-down-BxbuKxeo.js";import"./index-CKvze9UP.js";import"./index-DaG3SG7b.js";import"./index-Bt_KiuWe.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BM91Z3C5.js";import"./group-2-BwsR6O4m.js";import"./sort-descending-BqWoToib.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Cl9chJaT.js";import"./utils-DiSEeJmV.js";import"./index-vic8-m6V.js";import"./index-J2w0B87P.js";import"./index-Bcls0r_S.js";import"./navigation-down-arrow-DD0yo9R6.js";import"./navigation-right-arrow-D4MH6EAI.js";import"./navigation-right-arrow-Vgro8iwV.js";import"./useCurrentTheme-Cx5Llmvy.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BW_d6Mec.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-NbRukm78.js";import"./paper-plane-Bod-WMHa.js";import"./index-CIqeAo6O.js";import"./less-jU3EhTke.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
