import{j as o}from"./iframe-HT1spLTi.js";import{useMDXComponents as n}from"./index-DBCrLany.js";import{I as r,F as m}from"./CommandsAndQueries-BbzR7uR6.js";import{M as p,C as s}from"./blocks-BHdc3k3Z.js";import"./Tag-D0fQ6cD9.js";import"./index-QNmDooaX.js";import"./copy-CRfxWZGx.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-iUJ8V_z6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BZj-Nofr.js";import"./index-gqzRfHPw.js";import"./index-CWHtqZOi.js";import"./Link-dxeMesAc.js";import"./index-ILnTo0yK.js";import"./index-CNJfOrlA.js";import"./index-CV40RAYh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-tr8O9Dg_.js";import"./addCustomCSSWithScoping-DOmP-F21.js";import"./index-BXPXbeEl.js";import"./information-BYNrnqUc.js";import"./sys-enter-2-D7etVCyM.js";import"./alert-D38Y2b3l.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DwM3SLbd.js";import"./delete-B4h0y0b6.js";import"./settings-OrML4UsD.js";import"./NoData-BOiGAXx7.js";import"./IllustratedMessage-CIWXNurR.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-DJEc1V4G.js";import"./index-CDNfdMib.js";import"./index-BooXjxoU.js";import"./slim-arrow-down-D7gKmzcO.js";import"./Input-CG3jepqS.js";import"./ResponsivePopoverCommon.css-DumVabDv.js";import"./ValueStateMessage.css-Dec25e9Z.js";import"./Suggestions.css-B7Xe6SyY.js";import"./ListBoxItemGroupTemplate-DLkL2x3G.js";import"./ComboBoxItemGroup-BKuEkjmd.js";import"./ListItemBaseTemplate-BJduEMQT.js";import"./Token-CJWVjFqm.js";import"./ScrollEnablement-COl_OArp.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B0rWPz1n.js";import"./ToggleButton-bT-nmWTF.js";import"./SuggestionItem-DlRh-CU9.js";import"./index-CAapkdBY.js";import"./Option-BJPjR69C.js";import"./index-DW6SW4K6.js";import"./SegmentedButton-BvcAggKa.js";import"./index-Bthc5YEN.js";import"./Select-yvOIU7AH.js";import"./InvisibleMessage-K2bP2Bc6.js";import"./slim-arrow-down-hfwx64af.js";import"./index-D8DCAi2g.js";import"./index-Bjt-sPUz.js";import"./index-DfU0YBTN.js";import"./IconDesign-DXd8PPVF.js";import"./filter-r_rnPDRk.js";import"./group-2-DtVNA77I.js";import"./sort-descending-DgqXD-Zl.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CpK1GvE-.js";import"./utils-BnqKx2k1.js";import"./index-D0O_r2Gf.js";import"./index-Cb097oS5.js";import"./index-BXOm-GNk.js";import"./navigation-down-arrow-DIWWzNLp.js";import"./navigation-right-arrow-FOKc4XUb.js";import"./navigation-right-arrow-BpHafmpc.js";import"./useCurrentTheme-CmCSQj3_.js";import"./IndicationColor-DVw-fSM_.js";import"./index-0CLxpaxv.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-lcSwUg68.js";import"./paper-plane-B1Mwkky7.js";import"./index-JqGFdXCE.js";import"./less-Di54MHdD.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
