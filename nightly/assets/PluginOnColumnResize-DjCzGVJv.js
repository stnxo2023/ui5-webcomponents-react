import{j as o}from"./iframe-D7AtRUpE.js";import{useMDXComponents as n}from"./index-DRFX2LG8.js";import{I as r,F as m}from"./CommandsAndQueries-BtIPK2kL.js";import{M as p,C as s}from"./blocks-DtVmZnZe.js";import"./Tag-DZXgvHmp.js";import"./index-ehmuZHI1.js";import"./copy-BpQCF5oY.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-C8-IDFGy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CCJ9pFYK.js";import"./index-BGkf-dJq.js";import"./index-Dd6OnJpC.js";import"./Link-DWIR53PW.js";import"./index-CjaPk49X.js";import"./index-CH_KzusP.js";import"./index-54VAs-Li.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-RhrsIb0U.js";import"./addCustomCSSWithScoping-C2Eje0Og.js";import"./index-BWvZCzda.js";import"./information-D-fAW1gu.js";import"./sys-enter-2-DRPF_4qy.js";import"./alert-fnVpcWPE.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BecdAPGm.js";import"./delete-BIPIzrZS.js";import"./settings-DmIbC4ht.js";import"./NoData-EkhAAOIw.js";import"./IllustratedMessage-BdbwIayy.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-BlO2CkwR.js";import"./index-BxDxP0Wt.js";import"./index-zp7M-Hgb.js";import"./slim-arrow-down-DhUBKwq5.js";import"./Input-BNhpkyEe.js";import"./ResponsivePopoverCommon.css-C_ECllnd.js";import"./ValueStateMessage.css-AtrprVNc.js";import"./Suggestions.css-CrAZUaHe.js";import"./ListBoxItemGroupTemplate-DVPT-6e2.js";import"./ComboBoxItemGroup-JbQ_GC3z.js";import"./ListItemBaseTemplate-B8mCobtS.js";import"./Token-Bn9BgD8D.js";import"./ScrollEnablement-DFMfFOOU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dkffh3P6.js";import"./ToggleButton-CzxwP7cy.js";import"./SuggestionItem-BRpUqzth.js";import"./index-MmfJ-udd.js";import"./Option-GuUiDPkM.js";import"./index-CTMtFbt2.js";import"./SegmentedButton-CA3GNGc8.js";import"./index-Dfah0KCS.js";import"./Select-Uv1fBISx.js";import"./InvisibleMessage-BJQIWg2w.js";import"./slim-arrow-down-gQRYAOdn.js";import"./index-C8-WBKC9.js";import"./index-vY1U5G9O.js";import"./index-BViGaWYT.js";import"./IconDesign-DXd8PPVF.js";import"./filter-gJxBGSRQ.js";import"./group-2-B6wj3ZWV.js";import"./sort-descending-JTCNKPca.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-XI1WfX02.js";import"./utils-By-8NwbJ.js";import"./index-C0mqrK_u.js";import"./index-VhkSZqEG.js";import"./index-DyzGdEk8.js";import"./navigation-down-arrow-Cfi1KmUR.js";import"./navigation-right-arrow-CYpfcLCR.js";import"./navigation-right-arrow-Bhbe0IU9.js";import"./useCurrentTheme-a_GAr54p.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CGVcTX0I.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Ck-SQTsB.js";import"./paper-plane-QmuJkXHS.js";import"./index-DUFp6-MR.js";import"./less-CskDW-lD.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
