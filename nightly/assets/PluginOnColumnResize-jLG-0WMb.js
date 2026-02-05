import{j as o}from"./iframe-D2RmpAtO.js";import{useMDXComponents as n}from"./index-DiCnj7u5.js";import{I as r,F as m}from"./CommandsAndQueries-DvQ8BP-Z.js";import{M as p,C as s}from"./blocks-B4Ev-YXh.js";import"./Tag-BWvTCWNx.js";import"./index-chYDxilS.js";import"./copy-BW6gA-qB.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-in5GCq84.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BmyeAcwI.js";import"./index-D_sGGZyZ.js";import"./index-i343fVly.js";import"./Link-BzydKqDb.js";import"./index-Cm3TMOjS.js";import"./index-BeHBKa6s.js";import"./index-B2C__dDn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-fsmSjvJs.js";import"./addCustomCSSWithScoping-BvD5X_dz.js";import"./index-BieATUAG.js";import"./information-DyTRt78C.js";import"./sys-enter-2-BwNIaTDW.js";import"./alert-DiSc05uc.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Db38Z4Pj.js";import"./delete-DXJZ50Ci.js";import"./settings-BpqXPtye.js";import"./NoData-ChGvGCJu.js";import"./IllustratedMessage-SNT48L7A.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DBajHU1V.js";import"./index-Bz7BBt1U.js";import"./index-CaYBagE_.js";import"./slim-arrow-down-BwUXjubF.js";import"./Input-0ALk-Ulf.js";import"./ResponsivePopoverCommon.css-Bu5Qc2tF.js";import"./ValueStateMessage.css-CBAbMCri.js";import"./Suggestions.css-C02nfz6y.js";import"./ListBoxItemGroupTemplate-CQ-G_Pqg.js";import"./ComboBoxItemGroup-DdwIQLIR.js";import"./ListItemBaseTemplate-DRnGHt_8.js";import"./Token-DYfjH-EW.js";import"./ScrollEnablement-Cm66ONH8.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BXwMpDTl.js";import"./ToggleButton-I7SxqJxx.js";import"./SuggestionItem-DhOTrIOf.js";import"./index-2Qoy0_XG.js";import"./Option-CMZEceos.js";import"./index-CJS4plQE.js";import"./SegmentedButton-DCg5Kbga.js";import"./index-D7uSjRf5.js";import"./Select-0CvvSnwM.js";import"./InvisibleMessage-CtMSUBcM.js";import"./slim-arrow-down-DBeujC-e.js";import"./index-b3oa9-sK.js";import"./index-B6DGWZKt.js";import"./index-BfnbleU3.js";import"./index-C_50PDoe.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DMBb2cz_.js";import"./group-2-BliQX8hG.js";import"./sort-descending-a4FwLL9N.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-owAeJ2tr.js";import"./utils-DpDD1Kik.js";import"./index-CLQQIqtQ.js";import"./index-B7nTnMBS.js";import"./index-DutVsOSq.js";import"./navigation-down-arrow-4ifYH4EI.js";import"./navigation-right-arrow-BZw6OC7t.js";import"./navigation-right-arrow-DPuDFCzF.js";import"./useCurrentTheme-DFOB5aNG.js";import"./index-B1sF1lOb.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-y3GnqRIn.js";import"./paper-plane-DyqWmJB4.js";import"./index-DuNaoNls.js";import"./less-BWoqsgqa.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
