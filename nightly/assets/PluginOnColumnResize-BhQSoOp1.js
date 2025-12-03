import{j as o}from"./iframe-tj1IXK49.js";import{useMDXComponents as n}from"./index-BnfY_9Nm.js";import{I as r,F as m}from"./CommandsAndQueries-BjstQSnK.js";import{M as p,C as s}from"./blocks-B5RuKJh5.js";import"./Tag-DQ_YqxY9.js";import"./index-BScgQgkK.js";import"./copy-7hwn-SEF.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-B7q_Qref.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BZJK_qmM.js";import"./index-CG8SFQa2.js";import"./index-BINOQQsd.js";import"./Link-OqvTbJ_m.js";import"./index--qIKxsMf.js";import"./index-yAmFIL7x.js";import"./index-DPa2AXHs.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DtbFBLyL.js";import"./addCustomCSSWithScoping-DTX7qnOW.js";import"./index-BSv7hb7A.js";import"./information-7IX06_U3.js";import"./sys-enter-2-lbz-PkIt.js";import"./alert-BrK48pCK.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CNmav4uw.js";import"./delete-BJCcrEo8.js";import"./settings-B4r0uagp.js";import"./NoData-D1wg2ZjH.js";import"./IllustratedMessage-DtQEbzMl.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-CYdJZ1Fa.js";import"./index-zy6Z6fzh.js";import"./index-BHfvcuXR.js";import"./slim-arrow-down-3Bp4HO9L.js";import"./Input-DyMVldoQ.js";import"./ResponsivePopoverCommon.css-B7sBPpGT.js";import"./ValueStateMessage.css-BOXCyn5o.js";import"./Suggestions.css-qhb-jRVq.js";import"./ListBoxItemGroupTemplate-B5kCf4FY.js";import"./ComboBoxItemGroup-DjqHpR4q.js";import"./ListItemBaseTemplate-CZ5gJcTc.js";import"./Token-DiUPhPVy.js";import"./ScrollEnablement-C1DMpgda.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BSxtlPA8.js";import"./ToggleButton-CLkDo8Zi.js";import"./SuggestionItem-fPrWfpXj.js";import"./index-DHAsISTr.js";import"./Option-Cw8wFm8J.js";import"./index-DlxkxtJl.js";import"./SegmentedButton-TpTrNTvw.js";import"./index-CB88dHgs.js";import"./Select-_lEfRkl9.js";import"./InvisibleMessage-DqI98h3N.js";import"./slim-arrow-down-Pg-mR8x6.js";import"./index-C-he-_F8.js";import"./index-ALFTWpOD.js";import"./index-DqQsnaMw.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D313vNRh.js";import"./group-2-DVW5e3Di.js";import"./sort-descending-CZWlqs0g.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-l3FXy0fA.js";import"./utils-BO0Wywqo.js";import"./index-CDt63173.js";import"./index-BrVm2JNm.js";import"./index-CFNZtnKn.js";import"./navigation-down-arrow-Bb0O9CDG.js";import"./navigation-right-arrow-iBxRGUGq.js";import"./navigation-right-arrow-qIgwnOYY.js";import"./useCurrentTheme-C1ygFUZ9.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DXYI5egs.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BXFoHGh1.js";import"./paper-plane-BEYLmZQj.js";import"./index-XdCx1c8d.js";import"./less-Cnus0AYW.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
