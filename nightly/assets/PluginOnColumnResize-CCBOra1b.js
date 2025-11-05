import{j as o}from"./iframe-CRwp3Tpg.js";import{useMDXComponents as n}from"./index-COIro8D8.js";import{I as r,F as m}from"./CommandsAndQueries-BOt8E6ok.js";import{M as p,C as s}from"./blocks-C4HsTNIO.js";import"./Tag-tfloHdXZ.js";import"./index-B8mUtBGn.js";import"./copy-DIWKtK23.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BkiRgwtD.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DtgT2jRs.js";import"./index-B3NhI5Qb.js";import"./index-Cv51gsI_.js";import"./Link-Dtv1Hpbf.js";import"./index-DIEFvDQl.js";import"./index-DzYDiZvU.js";import"./index-DYA05DWY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D0x12wWs.js";import"./addCustomCSSWithScoping-Dv4ZSX5E.js";import"./index-C0aL9woL.js";import"./information-MlnnkJju.js";import"./sys-enter-2-DNoGuffO.js";import"./alert-aDgjp5mZ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BIKVWOiQ.js";import"./delete-BsiUWMyb.js";import"./settings-sxQzjKnN.js";import"./NoData-BdJ39RdV.js";import"./IllustratedMessage-D4izY5uv.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-BQNjO2jS.js";import"./index-COdypGT7.js";import"./index-DbsdpZ0s.js";import"./slim-arrow-down-C-sQkdwh.js";import"./Input-CKqAaoJh.js";import"./ResponsivePopoverCommon.css-TNg_0n0_.js";import"./ValueStateMessage.css-CYdcHCck.js";import"./Suggestions.css-BAVf_4rH.js";import"./ListBoxItemGroupTemplate-CqtX5gL_.js";import"./ComboBoxItemGroup-XlcjepWp.js";import"./ListItemBaseTemplate-DNSZp8wv.js";import"./Token-CSx3lX-3.js";import"./ScrollEnablement-CzlDnCBe.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CG69oYew.js";import"./ToggleButton-8cblrt3F.js";import"./SuggestionItem-XM4Pz9fl.js";import"./index-CRs2PjFa.js";import"./Option-y4L7YpM6.js";import"./index-DRJHyZv9.js";import"./SegmentedButton-CDx2wd85.js";import"./index-BfNpixh1.js";import"./Select-BYSDq3x_.js";import"./InvisibleMessage-BMQ2txcL.js";import"./slim-arrow-down-DDdekocZ.js";import"./index-DEay9TCB.js";import"./index-BMcRBVTx.js";import"./index-WpAbWfDk.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DBC-rl-6.js";import"./group-2-D2J0_DJH.js";import"./sort-descending-DZsOcrOl.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-xFdAYmE4.js";import"./utils-rzD3DZ3e.js";import"./index-Bmk_6Mqn.js";import"./index-BHqYfiWu.js";import"./index-C9fmCLaq.js";import"./navigation-down-arrow-DTNzqgNt.js";import"./navigation-right-arrow-DL5KfXIw.js";import"./navigation-right-arrow-CDwfvJNR.js";import"./useCurrentTheme-BsJOJC7B.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CbdzFybD.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DAMtZyo0.js";import"./paper-plane-E8fm-GBo.js";import"./index-Dzeoy_HR.js";import"./less-xMOC9uh_.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
