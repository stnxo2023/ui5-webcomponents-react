import{j as o}from"./iframe-Cu2r5DBt.js";import{useMDXComponents as n}from"./index-DsEnC-S2.js";import{I as r,F as m}from"./CommandsAndQueries-DfbTmmri.js";import{M as p,C as s}from"./blocks-DrEEcrJV.js";import"./Tag-BfeG-i6G.js";import"./index-DcYlZ6P4.js";import"./copy-D0JAZV9l.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BiMefP11.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BCrFY3fH.js";import"./index-BlqIDgbk.js";import"./index-Os4Zeg9n.js";import"./Link-DyRt210A.js";import"./index-DiFMEeWS.js";import"./index-CMEHSo2E.js";import"./index-COwVlcqf.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CO5icxsl.js";import"./addCustomCSSWithScoping-81SqKEKs.js";import"./index-DacMIu3h.js";import"./information-Bxm8KRwL.js";import"./sys-enter-2-f8dz7x8Q.js";import"./alert-848W8p-Q.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D76FbZtk.js";import"./delete-B-IsQiZR.js";import"./settings-CD2c-woD.js";import"./NoData-DTI18JF6.js";import"./IllustratedMessage-DX1YYOhS.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CmTEtjIx.js";import"./index-DoOj6a-I.js";import"./index-BfnkmY72.js";import"./slim-arrow-down-QBkKAVhi.js";import"./Input-D3OZDz2j.js";import"./ResponsivePopoverCommon.css-D6DQUrFO.js";import"./ValueStateMessage.css-DVAUVrF2.js";import"./Suggestions.css-D_7WvW8J.js";import"./ListBoxItemGroupTemplate-CAqv16Vd.js";import"./ComboBoxItemGroup-Bkl0glqF.js";import"./ListItemBaseTemplate-B36zIliD.js";import"./Token-czU1vG1J.js";import"./ScrollEnablement-bEoR-zYl.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BjU2dKNl.js";import"./ToggleButton-K4-PXkOC.js";import"./SuggestionItem-DpYfRwX3.js";import"./index-Bc3rhNIn.js";import"./Option-ylN_TdkI.js";import"./index-9JKg4cbf.js";import"./SegmentedButton-CJfA1Mtn.js";import"./index-O_QxZdYN.js";import"./Select-DHUaUoMk.js";import"./InvisibleMessage-BUdS_g5o.js";import"./slim-arrow-down-BHYyEM1X.js";import"./index-l2pP1Xti.js";import"./index-t_6EW66R.js";import"./index-CoFRC52-.js";import"./index-DWSSjAYi.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bsoqp3td.js";import"./group-2-wbi_dpVE.js";import"./sort-descending-DNwrriud.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BajIgag2.js";import"./utils-Gj7QsPnx.js";import"./index-B-UkReOd.js";import"./index-_95c2mxo.js";import"./index-CeTtedVZ.js";import"./navigation-down-arrow-ofZN1zUz.js";import"./navigation-right-arrow-Dj5fUfjl.js";import"./navigation-right-arrow-BCtmnaF7.js";import"./useCurrentTheme-DNnBzfxG.js";import"./index-qksCzBH3.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-l2Qw6S3S.js";import"./paper-plane-ArZYudnw.js";import"./index-C37vfn-j.js";import"./less-DAgDXDNb.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
