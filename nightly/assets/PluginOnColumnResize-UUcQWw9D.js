import{j as o}from"./iframe-D-7Wdns9.js";import{useMDXComponents as r}from"./index-DvD8yUkt.js";import{I as n}from"./CommandsAndQueries-DtEJSw4R.js";import{M as m,C as p}from"./blocks-DbRPcZc3.js";import"./Tag-CnF9nKkB.js";import"./index-Be6zsFxp.js";import"./copy-eIAIBU-7.js";import{F as s}from"./Footer-M_QXWpzq.js";import"./PageNotFound-C1UEztRs.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DCWjplL6.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-B-zN_JAi.js";import"./index-DvVefbTP.js";import"./index-Bj1jARrT.js";import"./index-Xz-lwjQC.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CyP71rSn.js";import"./addCustomCSSWithScoping-DvzvYvm_.js";import"./index-IYXWglY5.js";import"./index-D18p9Zu8.js";import"./index-jYQjsDyG.js";import"./information-DJAFTTyQ.js";import"./sys-enter-2-CY8szrdt.js";import"./alert-B0l8ygN-.js";import"./index-BwYsEJM0.js";import"./Illustrations-BvGUWHq-.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-xnkjzkNM.js";import"./delete-CTm07_I6.js";import"./settings-Dera6BUq.js";import"./NoData-DhYwOlVJ.js";import"./NoFilterResults-BzCKWE4q.js";import"./index-BO4WdR2c.js";import"./IllustratedMessage-q392qVc7.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-DANBiJYI.js";import"./Input-Cp96Jnd7.js";import"./ResponsivePopoverCommon.css-Sl7osct5.js";import"./ValueStateMessage.css-gHfjldlM.js";import"./Suggestions.css-BDE0tH2L.js";import"./ListBoxItemGroupTemplate-UuY21VMH.js";import"./ComboBoxItemGroup-BpTqaFWD.js";import"./ListItemBaseTemplate-BNrzSWz7.js";import"./Token-D687qbiA.js";import"./ScrollEnablement-U6Xzy_Kr.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CB-iQ9fV.js";import"./ToggleButton-DChenGu9.js";import"./multiselect-all-DZsJihlM.js";import"./SuggestionItem-CoXh7lo4.js";import"./index-CCg5QgLJ.js";import"./Option-BkY44RQX.js";import"./index-B09Whsxr.js";import"./SegmentedButton-BKJR91WQ.js";import"./index-vOadrNEy.js";import"./Select-CUKOY9zK.js";import"./InvisibleMessage-D8eqIb81.js";import"./index-CsAfykCl.js";import"./index--ZEFn26I.js";import"./index-D2yuBR4r.js";import"./index-CAqW3SuX.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BJ54auiG.js";import"./group-2-CpFk6_lc.js";import"./sort-descending-BeLPS0WX.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-H-O4wn2B.js";import"./utils-DyIZyrE-.js";import"./index-DN8JrYBf.js";import"./index-CMjatJ1L.js";import"./index-D4V_2-aN.js";import"./navigation-down-arrow-BbsuHHwf.js";import"./navigation-right-arrow-DYYtY0JW.js";import"./navigation-right-arrow-P062IBqh.js";import"./useCurrentTheme-ChSiS0ST.js";import"./index-BAR7WUDu.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Ba3nL1b4.js";import"./paper-plane-mdEDK4gR.js";import"./index-B-U-wWOK.js";import"./less-Cbo4vjAe.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
