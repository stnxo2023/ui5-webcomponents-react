import{j as o}from"./iframe-D9-3X0JI.js";import{useMDXComponents as n}from"./index-dMdAMZT7.js";import{I as r,F as m}from"./CommandsAndQueries-Cnpdrmv-.js";import{M as p,C as s}from"./blocks-BYKnuPZj.js";import"./Tag-rAEScKNS.js";import"./index-DwPMNEU4.js";import"./copy-B87NDbR1.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BFQ_A00u.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B0kTLMxV.js";import"./index-Bo2p0dAu.js";import"./index-BC71hX7l.js";import"./Link-B5zjhOqH.js";import"./index-DhzIoMaL.js";import"./index-j1saZdO-.js";import"./index-CxPR9JIx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DORD8sYf.js";import"./addCustomCSSWithScoping-CDB2w5BM.js";import"./index-BjUikPJy.js";import"./information-e-gqJ6X6.js";import"./sys-enter-2-BhYBtaW9.js";import"./alert-XeF5lKFk.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DHZG-a9h.js";import"./delete-Cqn9h0fS.js";import"./settings-D0TIiCOY.js";import"./NoData-h_3BPE3I.js";import"./IllustratedMessage-DrYfSsmV.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BQhnxhD2.js";import"./index-BnP9b9Ky.js";import"./index-lEFQSdUo.js";import"./slim-arrow-down-B8HgmHUP.js";import"./Input-DADAhjMq.js";import"./ResponsivePopoverCommon.css-CWBdwhTg.js";import"./ValueStateMessage.css-BQV-lfyq.js";import"./Suggestions.css-RW7Qb5Rw.js";import"./ListBoxItemGroupTemplate-95aXC4Zd.js";import"./ComboBoxItemGroup-BmvBFBsQ.js";import"./ListItemBaseTemplate-CeEtHuiX.js";import"./Token-D4ouf1p4.js";import"./ScrollEnablement-C4sfEIZB.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DhetoAjI.js";import"./ToggleButton-Cf16CjNh.js";import"./SuggestionItem-BznSOywU.js";import"./index-a8oDzDPg.js";import"./Option-DuBZhqYX.js";import"./index-CS7_81Z1.js";import"./SegmentedButton-CrnUIMou.js";import"./index-BaqGrvUy.js";import"./Select-jAoE6kcO.js";import"./InvisibleMessage-B78hZJHf.js";import"./slim-arrow-down-DRw17b4-.js";import"./index-PO4-y7XB.js";import"./index-BwtfdfmC.js";import"./index-C3d2BxPO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DzvCSHnC.js";import"./group-2-DG9Xxc_K.js";import"./sort-descending-DQD9wlqN.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DakTmcy-.js";import"./utils-CCWGeWj_.js";import"./index-lNoXPje7.js";import"./index-B5sC3CbN.js";import"./index-CoAbgxwH.js";import"./navigation-down-arrow-BCk2Xe8o.js";import"./navigation-right-arrow-BcVav5TW.js";import"./navigation-right-arrow-DiWFJr_y.js";import"./useCurrentTheme-r_mdZh15.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DMLJfOS0.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Bu1wdE8w.js";import"./paper-plane-CSjFaLDV.js";import"./index-C6Aqw5an.js";import"./less-BQc0aqcX.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
