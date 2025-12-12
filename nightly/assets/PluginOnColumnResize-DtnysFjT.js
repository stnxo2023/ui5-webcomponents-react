import{j as o}from"./iframe-5Ai_0qn6.js";import{useMDXComponents as n}from"./index-B7f66Dmz.js";import{I as r,F as m}from"./CommandsAndQueries-JQTwJq8J.js";import{M as p,C as s}from"./blocks-B56i3DPI.js";import"./Tag-COMV1q97.js";import"./index-DmI0q2i9.js";import"./copy-DNLRE2WL.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Cly1OFy0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ce1oa-YM.js";import"./index-q1btkUh6.js";import"./index-BRDhzPf9.js";import"./Link-D--4KGaX.js";import"./index-B-uO6_4g.js";import"./index-D661wfa7.js";import"./index-Bq31yNzK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-COAGvdy_.js";import"./addCustomCSSWithScoping-DYNqCkls.js";import"./index-BkdUYSuU.js";import"./information-D04M7OHu.js";import"./sys-enter-2-1BgXqzpT.js";import"./alert-BhFUrxxf.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DptVgLxH.js";import"./delete-BKhqWRT0.js";import"./settings-C7ek-hnD.js";import"./NoData-wohXKQfm.js";import"./IllustratedMessage-CPRROUzO.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-DbUMx87M.js";import"./index-CWkjXrf_.js";import"./index-DZC-KX_7.js";import"./slim-arrow-down-CVsfCMuZ.js";import"./Input-irwstt8P.js";import"./ResponsivePopoverCommon.css-C3FRXGqL.js";import"./ValueStateMessage.css-CE7fKOnd.js";import"./Suggestions.css-Dq5Dns8R.js";import"./ListBoxItemGroupTemplate-DBU-Amvn.js";import"./ComboBoxItemGroup-Bq4VJjC4.js";import"./ListItemBaseTemplate-D2M6voVm.js";import"./Token-PzQXz8IW.js";import"./ScrollEnablement-BpTg3nyv.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BzBCEa9G.js";import"./ToggleButton-ietgb841.js";import"./SuggestionItem-DlAE1lsO.js";import"./index-DEaM6HA1.js";import"./Option-9p-hiMpG.js";import"./index-br9mqeEo.js";import"./SegmentedButton-AE0tpI52.js";import"./index-BFBqEJBM.js";import"./Select-DeIsnLIh.js";import"./InvisibleMessage-CmGdQZT2.js";import"./slim-arrow-down-ZE4Gr-dz.js";import"./index-B-aNjF0L.js";import"./index-CoK8JjT_.js";import"./index-O_J6wUes.js";import"./index-Cyt6o_O8.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BpA9S_eu.js";import"./group-2-DpjVfqgj.js";import"./sort-descending-BGJJks9P.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bx98osqc.js";import"./utils-BOfVxA4M.js";import"./index-Cb8kvc5z.js";import"./index-S4uAEFIo.js";import"./index-DwAuXlyS.js";import"./navigation-down-arrow-DfJbyOqR.js";import"./navigation-right-arrow-B-Vhmt5L.js";import"./navigation-right-arrow-D1zxr9Vh.js";import"./useCurrentTheme-DiluXBTF.js";import"./index-CcKvpDiG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B0oo9ftu.js";import"./paper-plane-C_f61Wz0.js";import"./index-Dae_Omsb.js";import"./less-fRAvhj5N.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
