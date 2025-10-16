import{j as o}from"./iframe-DLLHCOr5.js";import{useMDXComponents as n}from"./index-DJhuuP5S.js";import{I as r,F as m}from"./CommandsAndQueries-CaYUL-bi.js";import{M as p,C as s}from"./blocks-D_qB0yom.js";import"./Tag-CGNpKNva.js";import"./index-Cv7FhAKP.js";import"./copy-Cys4niF0.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-C_Xeoikx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DWbKcn7h.js";import"./index-Da6fGSa9.js";import"./index-DrM1gAbM.js";import"./Link-8v74zIQt.js";import"./index-A4gWreS6.js";import"./index-CpOm_QTG.js";import"./index-C8Oz3tPU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DI75F9lq.js";import"./addCustomCSSWithScoping-B4YqD5EP.js";import"./index-CfRl_je5.js";import"./information-CmFfgInF.js";import"./sys-enter-2-DHyR85OV.js";import"./alert-CdfvMLA2.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dussxg8w.js";import"./delete-sg9kZ7wW.js";import"./settings-DMO8138H.js";import"./NoData-CNlEMyLx.js";import"./IllustratedMessage-CvqifGlG.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DrzNpyj0.js";import"./index-Bwzn6FzT.js";import"./index-BvVGqagu.js";import"./slim-arrow-down-CdVgRYVm.js";import"./Input-Dujkp-iG.js";import"./ResponsivePopoverCommon.css-BSzQP8E5.js";import"./ValueStateMessage.css-RpMFN1vW.js";import"./Suggestions.css-DD57I6JF.js";import"./ListBoxItemGroupTemplate-B8PxB8_d.js";import"./ComboBoxItemGroup-CpB2o6WI.js";import"./ListItemBaseTemplate-CH4UuuJP.js";import"./Token-Bbru9m6C.js";import"./ScrollEnablement-Dc6bPMsH.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CNuJB7qv.js";import"./ToggleButton-BvQG1Cyr.js";import"./SuggestionItem-CSPitdTc.js";import"./index-Bi8_wr8a.js";import"./Option-DP4TAxPx.js";import"./index-DgfU8C4H.js";import"./SegmentedButton-Cxyiwfcn.js";import"./index-BLApOYZ_.js";import"./Select-BcMsd1Hx.js";import"./InvisibleMessage-D48crmcJ.js";import"./slim-arrow-down-WuQVzVSs.js";import"./index-WosK8S_T.js";import"./index-D46dhIkG.js";import"./index-C58XlVcT.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BIBokY0Z.js";import"./group-2-COjXW71M.js";import"./sort-descending-v_uWiTl6.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-lil2fbr_.js";import"./utils-DVYbWfL1.js";import"./index-BSuhLTnR.js";import"./index-CHwyvDxc.js";import"./index-pyj4fbNH.js";import"./navigation-down-arrow-D-443grP.js";import"./navigation-right-arrow-DaMq1CEM.js";import"./navigation-right-arrow-jZ7_AnUt.js";import"./useCurrentTheme-Bw6oliQZ.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BHpA8ui8.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DDSow5dA.js";import"./paper-plane-sDJVh0wP.js";import"./index-CiP8FaDh.js";import"./less-DJz-Rwf2.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
