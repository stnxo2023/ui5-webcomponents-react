import{j as o}from"./iframe-BSil-P7u.js";import{useMDXComponents as n}from"./index-vt-1HXZR.js";import{I as r,F as m}from"./CommandsAndQueries-D6srY1_t.js";import{M as p,C as s}from"./blocks-DAd1jcGX.js";import"./Tag-C9JFY3U3.js";import"./index-DHsON_5K.js";import"./copy-CwHd1VH0.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Bxr1oTwn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-FBl5xz3h.js";import"./index-TzMEaDq9.js";import"./index-CoIXLnKn.js";import"./Link-qL_T98pU.js";import"./index-DYtE3L5B.js";import"./index-BEx2FW11.js";import"./index-DzdENY0T.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bp27VxQp.js";import"./addCustomCSSWithScoping-BLX4O9b7.js";import"./index-CM8rBgl_.js";import"./information-BmoL6a_m.js";import"./sys-enter-2-CRjOI67W.js";import"./alert-B93IgYs6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CoH36o8l.js";import"./delete-BI-937IP.js";import"./settings-CuEyn2tk.js";import"./NoData-CGFrF-GJ.js";import"./IllustratedMessage-bk9jckQm.js";import"./i18n-defaults-BTYpTGpY.js";import"./parameters-bundle.css-B37gDvcF.js";import"./NoFilterResults-DJ4x8n8R.js";import"./index-DM1cWKd-.js";import"./index-BAOnjwgh.js";import"./slim-arrow-down-CceGcM8g.js";import"./Input-Brq604ts.js";import"./ResponsivePopoverCommon.css-D6ugJ8J6.js";import"./ValueStateMessage.css-Bl9ehnfn.js";import"./Suggestions.css-DL5LMP4f.js";import"./ListBoxItemGroupTemplate-DTEnhQcP.js";import"./ComboBoxItemGroup-D278rfHD.js";import"./ListItemBaseTemplate-XePtjjIP.js";import"./Token-BjQ1h7zj.js";import"./ScrollEnablement-BseTvxzn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Co9OiWLE.js";import"./ToggleButton-CucfFvuo.js";import"./SuggestionItem-D-NzBmhj.js";import"./index-x2opHf5c.js";import"./Option-D_fhd8yQ.js";import"./index-0XEIKLHq.js";import"./SegmentedButton-CxPgyCvs.js";import"./index-B4ETCzn3.js";import"./Select-DIzgGRIh.js";import"./InvisibleMessage-8W7RFh9p.js";import"./slim-arrow-down-CEMmPYc4.js";import"./index-dpHfrh8L.js";import"./index-B81hxV8d.js";import"./index-BSCj-pol.js";import"./index-BxBIGX03.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DDvkMb7O.js";import"./group-2-B3KKCYd6.js";import"./sort-descending-xaSeLobU.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CwWYxgbu.js";import"./utils-BC-DJmvs.js";import"./index-BosJcweM.js";import"./index-BDjwx27j.js";import"./index-BBoe6R2N.js";import"./navigation-down-arrow-DZHe0qjz.js";import"./navigation-right-arrow-B-M3EsUK.js";import"./navigation-right-arrow-Caxsuv4H.js";import"./useCurrentTheme-BWoqnafC.js";import"./index-BbeYWMcG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B8wJR6kV.js";import"./paper-plane-CJEv3WjG.js";import"./index-CBHCu-XZ.js";import"./less-Cu4-mAFi.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
