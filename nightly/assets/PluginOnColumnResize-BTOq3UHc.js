import{j as o}from"./iframe-0odebeya.js";import{useMDXComponents as n}from"./index-CqFbrvRl.js";import{I as r,F as m}from"./CommandsAndQueries-EL4jX5E-.js";import{M as p,C as s}from"./blocks-CZanU-Ia.js";import"./Tag-BUYfpKMM.js";import"./index-D9xNyPsZ.js";import"./copy-CT5RXkub.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DOi-Wnm_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-8HMofQBq.js";import"./index-Bj8LHsHM.js";import"./index-CaXXMvN7.js";import"./Link-BrHi8e0V.js";import"./index-frz6UFer.js";import"./index-tz56fx9f.js";import"./index-CWrbfQpH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BHrZH3Z4.js";import"./addCustomCSSWithScoping-Dp2j1Uki.js";import"./index-BINGVIRj.js";import"./information-CjkTzkFz.js";import"./sys-enter-2-DdZ_D29i.js";import"./alert-D-ynjdbk.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-xRjMB__s.js";import"./delete-fLvq34Jl.js";import"./settings-B4AOpzhv.js";import"./NoData-yaNyLcbB.js";import"./IllustratedMessage-C_hFkGWb.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-2a998mcO.js";import"./index-D8VPPfjQ.js";import"./index-BnCUL16H.js";import"./slim-arrow-down-BFjQhKte.js";import"./Input-CB7ibhwK.js";import"./ResponsivePopoverCommon.css-fLKohW0Q.js";import"./ValueStateMessage.css-C-9YoNH5.js";import"./Suggestions.css-CmFhhLzD.js";import"./ListBoxItemGroupTemplate-BT5gB5uM.js";import"./ComboBoxItemGroup-Du1B6a9S.js";import"./ListItemBaseTemplate-BJ16pLA5.js";import"./Token-Ch4ywBb0.js";import"./ScrollEnablement-CqQuXn0O.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B9R18C1J.js";import"./ToggleButton-PcgJOeQd.js";import"./SuggestionItem-D-h7iS1u.js";import"./index-CDM_4gIl.js";import"./Option-DYfARMYl.js";import"./index-BSUqgLJE.js";import"./SegmentedButton-BCHL45F3.js";import"./index-BzO5275T.js";import"./Select-Cc7eo2Px.js";import"./InvisibleMessage-DBSe1ewq.js";import"./slim-arrow-down-BrhmzZXI.js";import"./index-DQI_EJF_.js";import"./index-ClaOFseh.js";import"./index-XJJ-3YHL.js";import"./index-zsFPEOYy.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CMrG-M6g.js";import"./group-2-DCO1BTNo.js";import"./sort-descending-Cjurks9x.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BOtvtZYN.js";import"./utils-D6cGPaWL.js";import"./index-C9fKAKSL.js";import"./index-BsMffN5Y.js";import"./index-DFrOQYBP.js";import"./navigation-down-arrow-CxSCHjvh.js";import"./navigation-right-arrow-C1Z29n6I.js";import"./navigation-right-arrow-sQXzL3an.js";import"./useCurrentTheme-B4rbko8_.js";import"./index-GKaPWcp4.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-3MSrpeOV.js";import"./paper-plane-C4OvpktK.js";import"./index-B_3GzVsz.js";import"./less-BL1Txw-9.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
