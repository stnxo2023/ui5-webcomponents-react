import{j as o}from"./iframe-DT7hQ3AG.js";import{useMDXComponents as n}from"./index-DTdIoXIV.js";import{I as r,F as m}from"./CommandsAndQueries-yjo1_LDl.js";import{M as p,C as s}from"./blocks-JRrvULZW.js";import"./Tag-DiLaQDn-.js";import"./index-B-uTHhu7.js";import"./copy-BZt3PDtc.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DJf1Cndu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CddBOV7O.js";import"./index-C77H1xG_.js";import"./index-DnmZF6f8.js";import"./Link-G5lQtbW1.js";import"./index-DOozC4VO.js";import"./index-RcOcV3SW.js";import"./index-BT5-01iU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CVNusK2J.js";import"./addCustomCSSWithScoping-BEpn4Gqh.js";import"./index-BRw-bjcq.js";import"./information-BTX-CwCK.js";import"./sys-enter-2-Ckqh2Zib.js";import"./alert-j2_xvgwV.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BQysclUq.js";import"./delete-CeyxsMhm.js";import"./settings-DNzL1VLp.js";import"./NoData-D55CCIT8.js";import"./IllustratedMessage-DdOGU8iu.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DEWd1NOO.js";import"./index-Cvz-A2Iy.js";import"./index-CMxGkooZ.js";import"./slim-arrow-down-D50am5_P.js";import"./Input-CiFaXTlp.js";import"./ResponsivePopoverCommon.css-K8_QNK7m.js";import"./ValueStateMessage.css-C74mOLeC.js";import"./Suggestions.css-Cd_sUhjR.js";import"./ListBoxItemGroupTemplate-MrpowO6L.js";import"./ComboBoxItemGroup-JHT7eKkU.js";import"./ListItemBaseTemplate-cYuiWrew.js";import"./Token-74hpwmue.js";import"./ScrollEnablement-C3Wt9Cue.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DUKcPDwc.js";import"./ToggleButton-YrPJ68bM.js";import"./SuggestionItem-CihSCUQE.js";import"./index-Bq6tT57Z.js";import"./Option-Bhgcb91O.js";import"./index-CQXfWENp.js";import"./SegmentedButton-wIlHxxU5.js";import"./index-Bah3sHAa.js";import"./Select-BAJF9MUA.js";import"./InvisibleMessage-D4QZC_oh.js";import"./slim-arrow-down-Ddzx8t1A.js";import"./index-B9SneDxK.js";import"./index-CjyRf1Rx.js";import"./index-DZrXzplx.js";import"./index-BJs3_1HF.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B45Yx_uW.js";import"./group-2-xTMpIWf0.js";import"./sort-descending-o9PDLWx6.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CUBCEi1k.js";import"./utils-MrKqThPe.js";import"./index-BO3xCydK.js";import"./index-BLjdJn29.js";import"./index-BGk70aYe.js";import"./navigation-down-arrow-DJEikV3a.js";import"./navigation-right-arrow-BNlj3PDZ.js";import"./navigation-right-arrow-C-qFNytF.js";import"./useCurrentTheme-DR--wRSh.js";import"./index-D1b27DJe.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BIZQiftC.js";import"./paper-plane-GTcq8Dwh.js";import"./index-8AKQM2r8.js";import"./less-BZfAkQR5.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
