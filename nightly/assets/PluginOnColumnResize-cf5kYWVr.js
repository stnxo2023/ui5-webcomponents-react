import{j as o}from"./iframe-DE39xjY3.js";import{useMDXComponents as n}from"./index-B1qSHwoi.js";import{I as r,F as m}from"./CommandsAndQueries-wC1q0WhV.js";import{M as p,C as s}from"./blocks-Cj7tOVqz.js";import"./Tag-BcxJDVC2.js";import"./index-C8AzPoWi.js";import"./copy-SEjk-khs.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Dm3vFAGq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dsw7NAug.js";import"./index-BNYAB6MW.js";import"./index-BytuhZWp.js";import"./Link-hO4SGyLs.js";import"./index-HOUf-EPf.js";import"./index-Di0pge-x.js";import"./index-Crm_KYfs.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B-k5eDoZ.js";import"./addCustomCSSWithScoping-DCdxMV4u.js";import"./index-BUS86rTR.js";import"./information-D52A35LG.js";import"./sys-enter-2-7R5MTao8.js";import"./alert-jxZm3lXE.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CdKgUR62.js";import"./delete-T1M_hPVY.js";import"./settings-XWWzFZWZ.js";import"./NoData-BNLEFYaI.js";import"./IllustratedMessage-0CDzNeqq.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-4G5p8MTf.js";import"./index-CqckHJYn.js";import"./index-BmDqxMXN.js";import"./slim-arrow-down-vZvcV55c.js";import"./Input-CDMm82xo.js";import"./ResponsivePopoverCommon.css-DaP0rv_w.js";import"./ValueStateMessage.css-Bvo1cNpH.js";import"./Suggestions.css-1EDkOxF1.js";import"./ListBoxItemGroupTemplate-CUQfeUJ-.js";import"./ComboBoxItemGroup-BIc4wSHj.js";import"./ListItemBaseTemplate-0o_W1vV3.js";import"./Token-quGRFBgA.js";import"./ScrollEnablement-hjYz1q63.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CEgmb2VH.js";import"./ToggleButton-B6AmBWfy.js";import"./SuggestionItem-CSHXkULE.js";import"./index-DuKoEI6Y.js";import"./Option-BmVldsJm.js";import"./index-GTGNu_hG.js";import"./SegmentedButton-aldcdMHp.js";import"./index-BBixzXs5.js";import"./Select-BgNYkp7a.js";import"./InvisibleMessage-Bo13I8mP.js";import"./slim-arrow-down-P7fnq_jn.js";import"./index-iZDIdJI7.js";import"./index-RO4633KM.js";import"./index-BcBVfEn1.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B-mQ8wvX.js";import"./group-2-siU1eXmx.js";import"./sort-descending-3jJw3NoM.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DBKL-rtx.js";import"./utils-C2TjvMrQ.js";import"./index-BT2WMOZw.js";import"./index-uMqGW6va.js";import"./index-DtdnKfDC.js";import"./navigation-down-arrow-BajRWoAT.js";import"./navigation-right-arrow-DZoWocnv.js";import"./navigation-right-arrow-X0_-tw_X.js";import"./useCurrentTheme-CpMEMe1l.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D2kS9nAL.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-rImD7_or.js";import"./paper-plane-DPstJvtB.js";import"./index-CPZM_tz3.js";import"./less-JTA9sx1u.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
