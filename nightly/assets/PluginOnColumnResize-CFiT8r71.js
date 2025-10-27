import{j as o}from"./iframe-CRoIzMtp.js";import{useMDXComponents as n}from"./index-uepxEeS1.js";import{I as r,F as m}from"./CommandsAndQueries-tg7iHgNo.js";import{M as p,C as s}from"./blocks-BWnl8hC4.js";import"./Tag-pVHInn9_.js";import"./index-l4qALITX.js";import"./copy-D8-Me-o2.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CFWmLjr3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C8wLfWwH.js";import"./index-BWA_OWVW.js";import"./index-83H_WNAi.js";import"./Link-ByRh7pJY.js";import"./index-DCZY0XoF.js";import"./index-BGCNx8iW.js";import"./index-Cq7XEcI3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbjPHeWw.js";import"./addCustomCSSWithScoping-DJ9mEG-L.js";import"./index-BY3Vu1_E.js";import"./information-DT5Qd4to.js";import"./sys-enter-2-DutWnZ3I.js";import"./alert-D-9oczO0.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CZqnIIDb.js";import"./delete-b07efbAK.js";import"./settings-BMkFX08h.js";import"./NoData-CDKe2yZc.js";import"./IllustratedMessage-C6IdXkA-.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-B1fpeMFI.js";import"./index-CBp7IYzb.js";import"./index-CZSKEI2W.js";import"./slim-arrow-down-unBoSxLD.js";import"./Input-BJBDq8St.js";import"./ResponsivePopoverCommon.css-CCSjtQV1.js";import"./ValueStateMessage.css-OSunxxtw.js";import"./Suggestions.css-Zd5amcux.js";import"./ListBoxItemGroupTemplate-Ds8yjX4l.js";import"./ComboBoxItemGroup-DiOTTndh.js";import"./ListItemBaseTemplate-Dz3w6gJ_.js";import"./Token-DCFzDq3v.js";import"./ScrollEnablement-Dou-HT1U.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DLhORhWI.js";import"./ToggleButton-CRShRO6E.js";import"./SuggestionItem-MyiIEE-9.js";import"./index-CXX4KfFH.js";import"./Option-D_d9kPGY.js";import"./index-C0WpXcs5.js";import"./SegmentedButton-BmVs9vUZ.js";import"./index-Ddvt-ojw.js";import"./Select-E89SNOl_.js";import"./InvisibleMessage-CVj8QPFw.js";import"./slim-arrow-down-CVzH-elm.js";import"./index-BHRAnYFD.js";import"./index-Bsq76fTK.js";import"./index-4w5klR-o.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DMv5uK1e.js";import"./group-2-DJZ5z-ec.js";import"./sort-descending-f3hJqn9w.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DSiKbX2_.js";import"./utils-DRJGxToW.js";import"./index-ClGjasHC.js";import"./index-Ctk0qYEi.js";import"./index-DdQaW95W.js";import"./navigation-down-arrow-BvO4V2br.js";import"./navigation-right-arrow-BxNbgTzH.js";import"./navigation-right-arrow-C9LVWiyw.js";import"./useCurrentTheme-CARlTKm9.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Bk8bTaJf.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CaAE0oF3.js";import"./paper-plane-CHOxtY5p.js";import"./index-o4QSdXmu.js";import"./less-CgZWCgqn.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
