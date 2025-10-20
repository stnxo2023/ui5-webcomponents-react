import{j as o}from"./iframe-D7LtZGbE.js";import{useMDXComponents as n}from"./index-DPe-hK9n.js";import{I as r,F as m}from"./CommandsAndQueries-16gk4cWC.js";import{M as p,C as s}from"./blocks-pr2PodND.js";import"./Tag-CAGvJLHq.js";import"./index-8IYrQOsB.js";import"./copy-irE93QLw.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-B9VjvtYg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CTJj7zal.js";import"./index-CQrPSC4r.js";import"./index-DCDoujQt.js";import"./Link-DR-Yc_uT.js";import"./index-D9f7QWgZ.js";import"./index-7y0cv8s8.js";import"./index-B5kVVFk8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D0rw92sk.js";import"./addCustomCSSWithScoping-Q6oWMzUs.js";import"./index-nlmJusRV.js";import"./information-DGR9jLKW.js";import"./sys-enter-2-pukk9ibo.js";import"./alert-ltuZ9R-x.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C2wuCET-.js";import"./delete-BsnXpo15.js";import"./settings-18EA03mw.js";import"./NoData-DD1I2RW2.js";import"./IllustratedMessage-GNJtNDK1.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DbgaenG_.js";import"./index-Cvm9n84J.js";import"./index-CONzwepJ.js";import"./slim-arrow-down-CSg5EB5A.js";import"./Input-smzufGTw.js";import"./ResponsivePopoverCommon.css-BuYzr302.js";import"./ValueStateMessage.css-B17FpIm5.js";import"./Suggestions.css-D7t7e06T.js";import"./ListBoxItemGroupTemplate-D6TYIJcU.js";import"./ComboBoxItemGroup-DVpFxRma.js";import"./ListItemBaseTemplate-DPI4cuqZ.js";import"./Token-DsqCbMj8.js";import"./ScrollEnablement-BHoJsn2l.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DJhw0qF_.js";import"./ToggleButton-c8Z5hSFG.js";import"./SuggestionItem-Ccdg184n.js";import"./index-CyQ4JYW2.js";import"./Option-DijjA4Vk.js";import"./index-DtP90_Pc.js";import"./SegmentedButton-6lreoM-F.js";import"./index-DvCsGyO6.js";import"./Select-BbkKcK4f.js";import"./InvisibleMessage-Cv3DnnE8.js";import"./slim-arrow-down-CRqqmTAd.js";import"./index-DWNwOieW.js";import"./index-Ce0fYx_h.js";import"./index-DOsdkp8m.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BcZJAP96.js";import"./group-2-MIHTxi8_.js";import"./sort-descending-BXMcQwtn.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-1VTd4aoY.js";import"./utils-aOFiSUxD.js";import"./index-Q9bXyf1m.js";import"./index-BpcjvSLQ.js";import"./index-B66V5vGh.js";import"./navigation-down-arrow-CJtYN5Co.js";import"./navigation-right-arrow-IFUe67pQ.js";import"./navigation-right-arrow-LlpQSEVq.js";import"./useCurrentTheme-D1sCc5b1.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DZFiI2KH.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BMbyDpGC.js";import"./paper-plane-C_ZVdgGb.js";import"./index-CdvQl7dB.js";import"./less-DCpc4-xW.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
