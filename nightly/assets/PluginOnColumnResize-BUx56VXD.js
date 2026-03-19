import{j as o}from"./iframe-bPNgMO5h.js";import{useMDXComponents as r}from"./index-C4j4ILCK.js";import{I as n}from"./CommandsAndQueries-CzGU51jX.js";import{M as m,C as p}from"./blocks-DApk4By0.js";import"./Tag-eZA227UP.js";import"./index-CuRLQ5dh.js";import"./copy-DSB5O1lX.js";import{F as s}from"./Footer-Bh2hTs_t.js";import"./PageNotFound-Dw8P7BXA.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DjvL60Qy.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-ZXYeKMWB.js";import"./index-4UioHVXW.js";import"./index-CcoeKc2Y.js";import"./index-CjQWdaPL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbYGGim3.js";import"./addCustomCSSWithScoping-BM8ISZdO.js";import"./index-QMND5HNb.js";import"./index-5px67lZR.js";import"./index-mw4j7xrs.js";import"./information-C2d19MHy.js";import"./sys-enter-2-D4Z01vRG.js";import"./alert-Ct4GAPph.js";import"./index-D8vCUd0L.js";import"./Illustrations--EfuNW2c.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bp92srSy.js";import"./delete-CZaWvsw2.js";import"./settings-yWmyjAh_.js";import"./NoData-tuasnKt_.js";import"./NoFilterResults-DJYt6ITG.js";import"./index-DfjjeQhE.js";import"./IllustratedMessage-D45xyK5E.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-Bug9Y4_C.js";import"./Input--k2fVCdQ.js";import"./ResponsivePopoverCommon.css-C9m2n_WO.js";import"./ValueStateMessage.css-5RYJguS7.js";import"./Suggestions.css-kgVEttjd.js";import"./ListBoxItemGroupTemplate-D17nKtUN.js";import"./ComboBoxItemGroup-DtEK8K2r.js";import"./ListItemBaseTemplate-DOCzUHDT.js";import"./Token-DK_BK7Xd.js";import"./ScrollEnablement-0saldGDB.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DqDMg7f9.js";import"./ToggleButton-oLAt7dS0.js";import"./multiselect-all-DOxz8ncZ.js";import"./SuggestionItem-DATbDIak.js";import"./index-DwTOmRJC.js";import"./Option-DjwKEC0h.js";import"./index-C9e7sFCK.js";import"./SegmentedButton-Dw3GdGu8.js";import"./index-C8DOH3y9.js";import"./Select-DqepO6nd.js";import"./InvisibleMessage-CiSDUG8R.js";import"./index-C43v6hU6.js";import"./index-ve0FQzF0.js";import"./index-SeTeuHTC.js";import"./index-CCfS2xdR.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BpeMjZpa.js";import"./group-2-DKJR9cs7.js";import"./sort-descending-DvmMzoJz.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D2nJf9Zv.js";import"./utils-BldSJTDV.js";import"./index-CIZr7faC.js";import"./index-D_m5mtxi.js";import"./index-yfJAvgK-.js";import"./navigation-down-arrow-B9_zRrcu.js";import"./navigation-right-arrow-Dj2eD2zH.js";import"./navigation-right-arrow-sjpm_efd.js";import"./useCurrentTheme-jpUiEjmR.js";import"./index-C_ntH17V.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DkBNoMcS.js";import"./paper-plane-CvTWiV4j.js";import"./index-CPV1ISqE.js";import"./less-Dh8-HrfA.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
