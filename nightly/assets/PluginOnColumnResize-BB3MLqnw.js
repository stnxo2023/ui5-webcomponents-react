import{j as o}from"./iframe-IArRSqE_.js";import{useMDXComponents as n}from"./index-j7nsZpBW.js";import{I as r,F as m}from"./CommandsAndQueries-Y7cLRyXq.js";import{M as p,C as s}from"./blocks-uZpIO_b1.js";import"./Tag-y4SxBR_K.js";import"./index-BxBWQyES.js";import"./copy-7xAa2gpG.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BkqA6iXe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-AiAyIf9Q.js";import"./index-C0j3-f_Y.js";import"./index-gakMtpus.js";import"./Link-Ba0uGRWm.js";import"./index-NrHuYdPm.js";import"./index-Cs2OWExd.js";import"./index-DL3EiYIa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Gn0YqzQq.js";import"./addCustomCSSWithScoping-DtA6p3SW.js";import"./index-Dxbh4gdX.js";import"./information-CXNknbN_.js";import"./sys-enter-2-ByYwkCyE.js";import"./alert-ryPoEChu.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-1N0Eq8bh.js";import"./delete-BpYGCW93.js";import"./settings-QUtefwRO.js";import"./NoData-BfNcqfUs.js";import"./IllustratedMessage-DbI5RVEz.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DdOfsEgr.js";import"./index-DAEebFt6.js";import"./index-CvKfJEnX.js";import"./slim-arrow-down-CSyKASAS.js";import"./Input-cW7JJ7b6.js";import"./ResponsivePopoverCommon.css-DVDWeT9K.js";import"./ValueStateMessage.css-W9SPqd3S.js";import"./Suggestions.css-DAgR6HvO.js";import"./ListBoxItemGroupTemplate-DiENw7p6.js";import"./ComboBoxItemGroup-QFrY2sVI.js";import"./ListItemBaseTemplate-C6zWgODK.js";import"./Token-Cd_Fzg2A.js";import"./ScrollEnablement-n9c5FDfp.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C2IILuHn.js";import"./ToggleButton-B-umBxz3.js";import"./SuggestionItem-BGp5wTE2.js";import"./index-PCqe8LzU.js";import"./Option-DNXns7Qu.js";import"./index-CPuaLVo-.js";import"./SegmentedButton-g_x-Qdey.js";import"./index-DzjJZIQt.js";import"./Select-Fl9If8OF.js";import"./InvisibleMessage-CvbQRyy5.js";import"./slim-arrow-down-CDqB4_RO.js";import"./index-BHZkDumw.js";import"./index-CplVzSTZ.js";import"./index-BIoXLnZD.js";import"./index-CXKXn_sm.js";import"./IconDesign-DXd8PPVF.js";import"./filter-2Icy2qTG.js";import"./group-2-CbKDFJtT.js";import"./sort-descending-CC3WileJ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-ebj139yB.js";import"./utils-wGJGGLR4.js";import"./index-DfFr6hKm.js";import"./index-DE-yEL4-.js";import"./index-Bl053VFJ.js";import"./navigation-down-arrow-BfaasJa4.js";import"./navigation-right-arrow-D98pnN-Z.js";import"./navigation-right-arrow-O-4HQyyY.js";import"./useCurrentTheme-BaKmNskh.js";import"./index-DpTPjJsC.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BRehkAZJ.js";import"./paper-plane-logWDsxf.js";import"./index-PtMah9EX.js";import"./less-Crcn7S2y.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
