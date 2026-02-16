import{j as o}from"./iframe-BQw543fO.js";import{useMDXComponents as n}from"./index-BxhW0hRZ.js";import{I as r,F as m}from"./CommandsAndQueries-C4NyJWbb.js";import{M as p,C as s}from"./blocks-DVt0JaPi.js";import"./Tag-sELDi5ig.js";import"./index-DRKxBO9I.js";import"./copy-9tJvlpXS.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-C2_U3nDd.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B2T-_GlF.js";import"./index-DlwOY2o8.js";import"./index-8hxRUREt.js";import"./Link-CGxFiH0u.js";import"./index-DqHN2E4G.js";import"./index-B74G-VBW.js";import"./index-B0V2Rdv7.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BUFLcfGV.js";import"./addCustomCSSWithScoping-JZmabDZV.js";import"./index-CButcFfg.js";import"./information-giMaU9kv.js";import"./sys-enter-2-8R25DHYh.js";import"./alert-DoRuAU1t.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CM2uzcB4.js";import"./delete-C24k1AlE.js";import"./settings-CGiD0aRJ.js";import"./NoData-DkFDQhZS.js";import"./IllustratedMessage-BHzFOR23.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-BzR8x5cH.js";import"./index-C6Gx5LBV.js";import"./index-I9qS98gj.js";import"./slim-arrow-down-Y3VcW7MM.js";import"./Input-Dqe9_Cgh.js";import"./ResponsivePopoverCommon.css-BUtvUiTp.js";import"./ValueStateMessage.css-B4a25LJP.js";import"./Suggestions.css-CWOCvyz5.js";import"./ListBoxItemGroupTemplate-Cjp35C8X.js";import"./ComboBoxItemGroup-Y846uSl7.js";import"./ListItemBaseTemplate-BydcNEAt.js";import"./Token-zZiPj9PM.js";import"./ScrollEnablement-C3bXHz1R.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Yv4CXx4-.js";import"./ToggleButton-BXvmSzD8.js";import"./SuggestionItem-C_wlXKJi.js";import"./index-DvR3wRKz.js";import"./Option-ezhIbOLI.js";import"./index-BWs4o4Dm.js";import"./SegmentedButton-CRv9M-40.js";import"./index-Cxe3oJI6.js";import"./Select-D4f1CrB5.js";import"./InvisibleMessage-DIaEl61G.js";import"./slim-arrow-down-6K51CIbd.js";import"./index-CzWzZBFG.js";import"./index-BCXvLyuV.js";import"./index-CVp7cd0k.js";import"./index-BbqsQoi1.js";import"./IconDesign-DXd8PPVF.js";import"./filter-t5x_Oax_.js";import"./group-2-CsbviiZ6.js";import"./sort-descending-FFgYtEEy.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CbS6xyk7.js";import"./utils-B51JP7MS.js";import"./index-Cyxa-Lg1.js";import"./index-ePsAp63A.js";import"./index-DgaKDpsv.js";import"./navigation-down-arrow-D3N52Tck.js";import"./navigation-right-arrow-C56keY6-.js";import"./navigation-right-arrow-DtVrQ57T.js";import"./useCurrentTheme-NBNMJ8GX.js";import"./index-DPNHq_j6.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B1lcnCzB.js";import"./paper-plane-CY_k9ZwL.js";import"./index-ZJKQMD2K.js";import"./less-BFId0QYp.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
