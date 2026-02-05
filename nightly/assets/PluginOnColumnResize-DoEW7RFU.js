import{j as o}from"./iframe-u8FS7fYy.js";import{useMDXComponents as n}from"./index-C5mdpSHf.js";import{I as r,F as m}from"./CommandsAndQueries-q_IHoPaq.js";import{M as p,C as s}from"./blocks-CA6IPYk4.js";import"./Tag-DslDE0Bb.js";import"./index-feIb_zWP.js";import"./copy-DnscT9w9.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-G0EhQtQ2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dm5-M5Tp.js";import"./index-BLjc-MlZ.js";import"./index-Dt8N5TZZ.js";import"./Link-B1qI_6K5.js";import"./index-B2lRXwRR.js";import"./index-Ck97t6iE.js";import"./index-Cr0S2U_P.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-VZfInv7D.js";import"./addCustomCSSWithScoping-Bi-KBOqo.js";import"./index-39vhHnbo.js";import"./information-eayia0M9.js";import"./sys-enter-2-Bq8G42J8.js";import"./alert-C2jJRi0I.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-IUrgbwed.js";import"./delete-Cy6nStvu.js";import"./settings-CsmDkRWR.js";import"./NoData-Dl4cDDvc.js";import"./IllustratedMessage-DJn7OKbx.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-WNq2o82Q.js";import"./index-B8Yw7-ed.js";import"./index-DoELuHg5.js";import"./slim-arrow-down-BzdglbBq.js";import"./Input-BzkAXBhe.js";import"./ResponsivePopoverCommon.css-B6vVrffQ.js";import"./ValueStateMessage.css-Dzp1zAdp.js";import"./Suggestions.css-CAMRCZc2.js";import"./ListBoxItemGroupTemplate-Do83mcvC.js";import"./ComboBoxItemGroup-DHIXSohN.js";import"./ListItemBaseTemplate-Bwno4fVU.js";import"./Token-3SQMJSyT.js";import"./ScrollEnablement-DD98dGgr.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BMXLX1H8.js";import"./ToggleButton-C6hKc49t.js";import"./SuggestionItem-DkOZoD1a.js";import"./index-BU3s_1Ip.js";import"./Option-BhGVz_yi.js";import"./index-DdIT0IEq.js";import"./SegmentedButton-FB1pLwEh.js";import"./index-BUE39DSG.js";import"./Select-DGVfvIxr.js";import"./InvisibleMessage-DkTNwmO6.js";import"./slim-arrow-down-BbWvK7SD.js";import"./index-CnuUXHea.js";import"./index-C_nlngWN.js";import"./index-D_yNDnhr.js";import"./index-DXUHUv71.js";import"./IconDesign-DXd8PPVF.js";import"./filter-yxN8PX9Y.js";import"./group-2-DoGrMQPN.js";import"./sort-descending-C5L9Lo2Z.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DprFiL_z.js";import"./utils-BPFvLxt3.js";import"./index-DFCmj0mv.js";import"./index-DyfLxNJ7.js";import"./index-C4EDa0au.js";import"./navigation-down-arrow-BuZsOLrp.js";import"./navigation-right-arrow-CGDJY1aB.js";import"./navigation-right-arrow-GAvN6s_t.js";import"./useCurrentTheme-GbCKdsaA.js";import"./index-C5a3zBKu.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BmVGl_xM.js";import"./paper-plane-C4HjhJCN.js";import"./index-BeDOg-Ts.js";import"./less-m02jLT-2.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
