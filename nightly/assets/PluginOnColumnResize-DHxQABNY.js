import{j as o}from"./iframe-C8VIz1cN.js";import{useMDXComponents as n}from"./index-DF3oZ9DD.js";import{I as r,F as m}from"./CommandsAndQueries-D_HB_HX-.js";import{M as p,C as s}from"./blocks-D-v6PHKz.js";import"./Tag-Ce9kI3uB.js";import"./index-W-CFrWn1.js";import"./copy-ChBzOjSf.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-D67qtk91.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CK3WOJt5.js";import"./index-IuSSn5Ye.js";import"./index-zu9Y-W0w.js";import"./Link-8iQqMH3R.js";import"./index-DVHGI5Hf.js";import"./index-CQjs21SR.js";import"./index-D5h2jV28.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-VSpt3ox9.js";import"./addCustomCSSWithScoping-BS3ufxCI.js";import"./index-C3PbHa_S.js";import"./information-Hi7RSuvY.js";import"./sys-enter-2-CeqtRGpA.js";import"./alert-DDLVUdt7.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ZkSj7f1q.js";import"./delete-BWsK_VKH.js";import"./settings-qFLjUWC6.js";import"./NoData-DAp2SfGX.js";import"./IllustratedMessage-C9PLoYct.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-5yNQCTB4.js";import"./index-KVQaVP4s.js";import"./index-B_1MGVU1.js";import"./slim-arrow-down-B8cEuo7F.js";import"./Input-CLlxaT1e.js";import"./ResponsivePopoverCommon.css-DqUNlHfC.js";import"./ValueStateMessage.css-B6YWQgJF.js";import"./Suggestions.css-D8Fz_6MJ.js";import"./ListBoxItemGroupTemplate-1p3uTFvN.js";import"./ComboBoxItemGroup-QPslV6ya.js";import"./ListItemBaseTemplate-Cvw5qOo6.js";import"./Token-Dn9Ptobu.js";import"./ScrollEnablement-BP5kJ35e.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BNEO49EL.js";import"./ToggleButton-B3yNtFBm.js";import"./SuggestionItem-DmgDiYJY.js";import"./index-DoGJ2Ola.js";import"./Option-SB8hrn2i.js";import"./index-9KOufAY0.js";import"./SegmentedButton-Cf4ggFUf.js";import"./index-C4x3d45G.js";import"./Select-DBK-52OP.js";import"./InvisibleMessage-CFIf5I9Q.js";import"./slim-arrow-down-Dfenv5Nd.js";import"./index-Mp4sU-yf.js";import"./index-D3UqCt3j.js";import"./index-DrJkgPlY.js";import"./index-DmUuUpYf.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dj5ZiNQS.js";import"./group-2-DgejC8Se.js";import"./sort-descending-BfqjNPRC.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CQqved4K.js";import"./utils-DXFoFOug.js";import"./index-BXRJsEsZ.js";import"./index-BVP8su8Y.js";import"./index-Cnckaa8J.js";import"./navigation-down-arrow-BzgaFSOU.js";import"./navigation-right-arrow-BnQ-O_WA.js";import"./navigation-right-arrow-CKh4AD9z.js";import"./useCurrentTheme-BDG1chbv.js";import"./index-CJGGUyAX.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-74j_AZIC.js";import"./paper-plane-DxPVmNKd.js";import"./index-Ds5HV4bS.js";import"./less-Cqps4E0U.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
