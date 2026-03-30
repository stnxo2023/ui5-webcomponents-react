import{j as o}from"./iframe-BXb_n64_.js";import{u as n,M as r,C as m}from"./blocks-9VP231tA.js";import{I as p}from"./CommandsAndQueries-BI-RA2OZ.js";import"./Tag-CRNARXt6.js";import"./index-BL83g4Fz.js";import"./copy-BBKTKpbi.js";import{F as s}from"./Footer-DPPwB2I6.js";import"./PageNotFound-CZrojxwO.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BKWnHpAq.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BUcKjx9R.js";import"./index-D10d9Tlr.js";import"./index-B22x7h0Z.js";import"./index-Ju3FGlVf.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Mi2Syuqb.js";import"./addCustomCSSWithScoping-F8HAuIL-.js";import"./index-BD_xT1Nj.js";import"./index-DqAHmx0d.js";import"./index-BNBy1IQK.js";import"./information-C2n1oeWx.js";import"./sys-enter-2-BNeNMeW8.js";import"./alert-DXZPI1Fp.js";import"./index-BSoVaSRp.js";import"./Illustrations-ks8TfsTU.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-wgYgfTj9.js";import"./delete-Csnjywyc.js";import"./settings-NI8fkDUM.js";import"./NoData-En3Nogfa.js";import"./NoFilterResults-Dhcwn1zt.js";import"./index-BOdF7LF9.js";import"./IllustratedMessage-Doboq85l.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-DO2GHw1V.js";import"./Input-B1pV19yo.js";import"./ResponsivePopoverCommon.css-DMiEES2t.js";import"./ValueStateMessage.css-YCjELpnO.js";import"./Suggestions.css-BZAnlsRN.js";import"./ListBoxItemGroupTemplate-5-RLXPsG.js";import"./ComboBoxItemGroup-DfJF5BDs.js";import"./ListItemBaseTemplate-CL-9zx8x.js";import"./Token-C7CCdRfL.js";import"./ScrollEnablement-CdFwVVtK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-dvvLOc5F.js";import"./ToggleButton-REMyBJsR.js";import"./multiselect-all-Ch1Qp7qR.js";import"./SuggestionItem-CuJ_PC3L.js";import"./index-COeWnEcb.js";import"./Option-DDwjJ3Kz.js";import"./index-CAhGtq2M.js";import"./SegmentedButton-Cg1f73_M.js";import"./index-Bnp975NP.js";import"./Select-DjVfX_jp.js";import"./InvisibleMessage-tI82KiTk.js";import"./index-BXr-yJYg.js";import"./index-YKbtChLI.js";import"./index-D9WU53Lw.js";import"./index-DrzieGlz.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BRQYQGhf.js";import"./group-2-DS1ObAk7.js";import"./sort-descending-Cj6QG_j1.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BGaKo2kM.js";import"./utils-B78a72Xy.js";import"./index-CEFR42mv.js";import"./index-BBdTafaa.js";import"./index-70052kQG.js";import"./navigation-down-arrow-C-XIYlAc.js";import"./navigation-right-arrow-DvOid56m.js";import"./navigation-right-arrow-b4NzmHT7.js";import"./useCurrentTheme-DoV6h_Xa.js";import"./index-BW8nkbFg.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BJ6r15BN.js";import"./paper-plane-YWK2QeBd.js";import"./index-DL4fpI_G.js";import"./less-0zzPWnhW.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(r,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
`,o.jsx(e.h1,{id:"analyticaltable-plugin-useoncolumnresize",children:"AnalyticalTable Plugin: useOnColumnResize"}),`
`,o.jsx(p,{moduleName:"useOnColumnResize",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx(e.code,{children:"useOnColumnResize"}),` plugin hook allows firing a callback when a columns size has changed by dragging the "Resizer".
The first parameter is the callback itself (`,o.jsx(e.code,{children:"e: { columnWidth: number; header: Record<string, any> }) => void;"}),"), the second one are the optional ",o.jsx(e.code,{children:"options"})," for controlling how often the callback should fire."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"options"}),":"]}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"liveUpdate"}),": If ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),", the resize function will fire every time the width has changed depending on the ",o.jsx(e.code,{children:"options.wait"})," delay."]}),`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"wait"}),": The number of milliseconds for which the calls are to be delayed. ",o.jsxs(e.strong,{children:["Defaults to ",o.jsx(e.code,{children:"100"})]}),". (Only has an effect if ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),")"]}),`
`]}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(m,{sourceState:"none",of:l}),`
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
`,o.jsx(s,{})]})}function Eo(i={}){const{wrapper:e}={...n(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{Eo as default};
