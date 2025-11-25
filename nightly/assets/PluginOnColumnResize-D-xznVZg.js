import{j as o}from"./iframe-DqhX_Hdp.js";import{useMDXComponents as n}from"./index-B-LlaBAd.js";import{I as r,F as m}from"./CommandsAndQueries-Ctn2WqFW.js";import{M as p,C as s}from"./blocks-BTKPnx40.js";import"./Tag-t-9sbcO3.js";import"./index-eBm8t70p.js";import"./copy-BkBAOPVd.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DrWG1jWH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BeJ9wz7o.js";import"./index-DCixdKQP.js";import"./index-BJOWTBa5.js";import"./Link-KAeBCRn4.js";import"./index-CZfYA9Jl.js";import"./index-D2G6pSj4.js";import"./index-CqRqJjYx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Duf1worp.js";import"./addCustomCSSWithScoping-BTNZ7_2D.js";import"./index-CuoIUeLC.js";import"./information-DBUGylnd.js";import"./sys-enter-2-CQyTlO0m.js";import"./alert-OnHFbpl_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BpMc5M9M.js";import"./delete-C7JHot2N.js";import"./settings-SKzIyHSS.js";import"./NoData-CX7evjUT.js";import"./IllustratedMessage-CqLVEv_t.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-DAqM8TO4.js";import"./index-BzlXpFoZ.js";import"./index-BtdQUBMJ.js";import"./slim-arrow-down-B4S7UH3-.js";import"./Input-Bip1JtLT.js";import"./ResponsivePopoverCommon.css-B62B-Zvc.js";import"./ValueStateMessage.css-D02law6b.js";import"./Suggestions.css-CSoreWx6.js";import"./ListBoxItemGroupTemplate-DHoLoT8x.js";import"./ComboBoxItemGroup-C5WDhKir.js";import"./ListItemBaseTemplate-OClf921P.js";import"./Token-BLU09JyB.js";import"./ScrollEnablement-B9Jmoik0.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D7vVDnmd.js";import"./ToggleButton-D53MHrW_.js";import"./SuggestionItem-BeURI2s8.js";import"./index-C9P_P9K4.js";import"./Option-CHApBvDG.js";import"./index-DAJXbvOW.js";import"./SegmentedButton-DeqHvB3C.js";import"./index-BCK2EVsS.js";import"./Select-Be7QzEWT.js";import"./InvisibleMessage-Bdbv9Ef9.js";import"./slim-arrow-down-CarTb4uE.js";import"./index-BIu9-7Rg.js";import"./index-BCh3t8Up.js";import"./index-DxAT9tTr.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CtE2b9bq.js";import"./group-2-eAJtoAsZ.js";import"./sort-descending-Cx0p3NMy.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DDEoRTFB.js";import"./utils-BSyH8VJa.js";import"./index-BkR8Kcfn.js";import"./index-CfGNWRnm.js";import"./index-DNTS6-c1.js";import"./navigation-down-arrow-ahG-gz6o.js";import"./navigation-right-arrow-A7nXgQLK.js";import"./navigation-right-arrow-C6E29xwI.js";import"./useCurrentTheme-gRxjNOgY.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D-Tz76DO.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DHOA1SXn.js";import"./paper-plane-Bzfws6My.js";import"./index-DrsUiW4k.js";import"./less-CCPik5WH.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
