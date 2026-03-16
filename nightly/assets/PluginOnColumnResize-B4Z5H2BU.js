import{j as o}from"./iframe-B7xuoxGk.js";import{useMDXComponents as r}from"./index-D6aSzRGN.js";import{I as n}from"./CommandsAndQueries-DKcdQNlV.js";import{M as m,C as p}from"./blocks-DZ0Vo0vM.js";import"./Tag-CtaADOFc.js";import"./index-BzZxDoNe.js";import"./copy-h55QeB4j.js";import{F as s}from"./Footer--uD18Qhj.js";import"./PageNotFound-DygNwEfd.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-_V-bjxAy.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-YW7Wqeu4.js";import"./index-wxY5XpWW.js";import"./index-D_A15Zs0.js";import"./index-Bimscpqo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CZFeJY_e.js";import"./addCustomCSSWithScoping-1uVBaclk.js";import"./index-BXMXe_Dr.js";import"./index-B_T64Hn2.js";import"./index-DmGPBpXp.js";import"./information-BW_uN0gP.js";import"./sys-enter-2-BoXj1fRr.js";import"./alert-Cl-xvHRs.js";import"./index-B7nFcBs2.js";import"./Illustrations-w0lfALHe.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BMY85eGk.js";import"./delete-BZYoynTQ.js";import"./settings-BT8RMABZ.js";import"./NoData-DCXoweTu.js";import"./NoFilterResults-CTa6GhkU.js";import"./index-Btar0bdN.js";import"./IllustratedMessage-BMgQN3i0.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CmLLJCw5.js";import"./Input-eFb_xp2M.js";import"./ResponsivePopoverCommon.css-CyKUqKvQ.js";import"./ValueStateMessage.css-Df99lQxg.js";import"./Suggestions.css-CBArPh6-.js";import"./ListBoxItemGroupTemplate-Ck1L8wBF.js";import"./ComboBoxItemGroup-DBiEhs-6.js";import"./ListItemBaseTemplate-CdxCA_p4.js";import"./Token-7wluFBu-.js";import"./ScrollEnablement-GVTwnxGd.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CqEt74g6.js";import"./ToggleButton-B0icUcy1.js";import"./multiselect-all-D1l0l24Z.js";import"./SuggestionItem-CjJX54Hb.js";import"./index-Br4lwsUM.js";import"./Option-D2JWHiJc.js";import"./index-V-jrGxWl.js";import"./SegmentedButton-DtXKlJOH.js";import"./index-DT47A1KM.js";import"./Select--WbYe-2b.js";import"./InvisibleMessage-eHM0y0K2.js";import"./index-BI9cMLrH.js";import"./index-vwowG4sE.js";import"./index-moYCi4PG.js";import"./index-uphkaPTP.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D9JfcWH8.js";import"./group-2-CCjKuAg3.js";import"./sort-descending-CqVtGwCo.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DFpdt6Cf.js";import"./utils-tHXepICV.js";import"./index-DFh3r5xg.js";import"./index-CzWHYSkB.js";import"./index-CiGgrWQa.js";import"./navigation-down-arrow-DcCyevym.js";import"./navigation-right-arrow-tle3a_t5.js";import"./navigation-right-arrow-BmYFt5sl.js";import"./useCurrentTheme-D-RTnzmW.js";import"./index-8jzzOxCB.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D8gGRGzd.js";import"./paper-plane-BgRj4P-o.js";import"./index-RI2zEDO5.js";import"./less-Cwfab_yz.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
