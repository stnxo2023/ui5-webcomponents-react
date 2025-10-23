import{j as o}from"./iframe-DJ3L9Q7k.js";import{useMDXComponents as n}from"./index-CgKASuks.js";import{I as r,F as m}from"./CommandsAndQueries-J0DynbNC.js";import{M as p,C as s}from"./blocks-CtbNLxKJ.js";import"./Tag-dHoy1aOg.js";import"./index-Drb2TrHE.js";import"./copy-dl-GArcT.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-XmI_OBRf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BiXweYzS.js";import"./index-4H2gG8m_.js";import"./index-DQGcZUo3.js";import"./Link-CI3a-uZg.js";import"./index-DDFmE4EA.js";import"./index-BTen11gj.js";import"./index-C_wfJoh6.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BifEEb3N.js";import"./addCustomCSSWithScoping-BamJJJtZ.js";import"./index-DJdHB7_b.js";import"./information-1qu8opp4.js";import"./sys-enter-2-Cu2hBGrK.js";import"./alert-Bssjvu3J.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ZogVh3-n.js";import"./delete-DJWhYD8C.js";import"./settings-NgS7zej6.js";import"./NoData-CmcwKAsS.js";import"./IllustratedMessage-BquGAG1y.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-6m67jwsT.js";import"./index-BMmEn-9e.js";import"./index-DHWps5pX.js";import"./slim-arrow-down-CD5MJjlC.js";import"./Input-BTxUiPoF.js";import"./ResponsivePopoverCommon.css-DAHQOPQC.js";import"./ValueStateMessage.css-C1vUk4m-.js";import"./Suggestions.css-AC0gY3Q2.js";import"./ListBoxItemGroupTemplate-BKr03FZt.js";import"./ComboBoxItemGroup-DmnfwRXO.js";import"./ListItemBaseTemplate-C7qYhT1t.js";import"./Token-Bh6SaF3b.js";import"./ScrollEnablement-BgeY4u8Z.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DMcqHDTj.js";import"./ToggleButton-Bq8xm8nS.js";import"./SuggestionItem-CmXkyaku.js";import"./index-DuEKvhcf.js";import"./Option-asFhuENp.js";import"./index-BVPkbHHt.js";import"./SegmentedButton-DmsFvxo8.js";import"./index-B_gzg89D.js";import"./Select-Cpy_GAyA.js";import"./InvisibleMessage-DIaqYHhI.js";import"./slim-arrow-down-BphH8SC0.js";import"./index-DvC78ri4.js";import"./index-QxoMqp8P.js";import"./index-BElugJkH.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BBj9Wq0r.js";import"./group-2-Bclkbxf6.js";import"./sort-descending-Qi2aeWer.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dx8gVwDW.js";import"./utils-AbgTTf_S.js";import"./index-BftjTv9E.js";import"./index-kkvWmntR.js";import"./index-f5CXzuCL.js";import"./navigation-down-arrow-Cn34Yi42.js";import"./navigation-right-arrow-BdYlSoky.js";import"./navigation-right-arrow-ZjAJAoPG.js";import"./useCurrentTheme-Dv8It12u.js";import"./IndicationColor-DVw-fSM_.js";import"./index-gUd0jpcr.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-g4vzgofK.js";import"./paper-plane-DR2uxcqx.js";import"./index-BTrtIEWf.js";import"./less-DMzNG9tV.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
