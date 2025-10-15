import{j as o}from"./iframe-MOZTZvx5.js";import{useMDXComponents as n}from"./index-Dg_uAO8t.js";import{I as r,F as m}from"./CommandsAndQueries-D1cXr-nE.js";import{M as p,C as s}from"./blocks-OWx-zaQy.js";import"./Tag-D4CUHK9_.js";import"./index-BgV1CUPM.js";import"./copy-1ZgkFucr.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Cw0HPS5N.js";import"./preload-helper-PPVm8Dsz.js";import"./index-jWV64fa4.js";import"./index-Wo6cIUDI.js";import"./index-BVuz7GOm.js";import"./Link-D6y2NVEd.js";import"./index-D_H2FzQ8.js";import"./index-BfSH4rx9.js";import"./index-CT3JBxRK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DgDY8vOY.js";import"./addCustomCSSWithScoping-C-qiC_lj.js";import"./index-Vm6d87Cs.js";import"./information-BmrOjFlN.js";import"./sys-enter-2-CJ54mtHu.js";import"./alert-CvnXXdTy.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DhneGV7w.js";import"./delete-Bn5gdNgE.js";import"./settings-Cbx-epPE.js";import"./NoData-BJR7iwul.js";import"./IllustratedMessage-YE7gLYpT.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-Jm7E3NGo.js";import"./index-C8xadZxD.js";import"./index-BLa13CRy.js";import"./slim-arrow-down-Cc4bNxF2.js";import"./Input-VwoOlGdU.js";import"./ResponsivePopoverCommon.css-NhonNuZc.js";import"./ValueStateMessage.css-B4GAmP9X.js";import"./Suggestions.css-DA1a_gYi.js";import"./ListBoxItemGroupTemplate-Dx4qYl7E.js";import"./ComboBoxItemGroup-Bw3Iaycs.js";import"./ListItemBaseTemplate-BZSLWu4w.js";import"./Token-DbnH4QPK.js";import"./ScrollEnablement-BN64g5L9.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-3bCIQ3yY.js";import"./ToggleButton-OlwgaROV.js";import"./SuggestionItem-CQ-oefH8.js";import"./index-oXUFSANu.js";import"./Option-U0m19n5L.js";import"./index-CY3YewAo.js";import"./SegmentedButton-rkgekSAQ.js";import"./index-C9UJ92uP.js";import"./Select-HunAogfG.js";import"./InvisibleMessage-B6eggr2u.js";import"./slim-arrow-down-CSnytLmB.js";import"./index-DKau9-Kv.js";import"./index-CnG-Mf1G.js";import"./index-ChNWUHOB.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CNuVE1dN.js";import"./group-2-DYeh0LPK.js";import"./sort-descending-CVlDQhaZ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BcUA259N.js";import"./utils-BOAuSk9m.js";import"./index-BUkrgD3V.js";import"./index-BbzY9xji.js";import"./index-NwVlg13M.js";import"./navigation-down-arrow-Dw2CvikE.js";import"./navigation-right-arrow-DRazBLZW.js";import"./navigation-right-arrow-BxyRDEC9.js";import"./useCurrentTheme-wbA7IpXG.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Bdi_NLBI.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Csl6zSRf.js";import"./paper-plane-DH1_vU7X.js";import"./index-Bs-jL4oy.js";import"./less-DPf2C5zX.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
