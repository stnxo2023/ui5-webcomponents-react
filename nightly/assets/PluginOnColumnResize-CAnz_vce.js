import{j as o}from"./iframe-OU-rKGVl.js";import{useMDXComponents as n}from"./index-BdFoQaN_.js";import{I as r,F as m}from"./CommandsAndQueries-1YsKNX6u.js";import{M as p,C as s}from"./blocks-90C6s9DB.js";import"./Tag-BGeGdyvC.js";import"./index-CvYMziHu.js";import"./copy-ukTvQIks.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CCULtsWI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BlWEaWz4.js";import"./index-B5S-I-wQ.js";import"./index-BCzS-sMX.js";import"./Link-DUV5jdr_.js";import"./index-Cy3EQ66_.js";import"./index-M6X6hbjk.js";import"./index-CvP3_iIG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DeGn29mr.js";import"./addCustomCSSWithScoping-BqWgeVkc.js";import"./index-CvIaP9X3.js";import"./information-DJNA9m3t.js";import"./sys-enter-2-Cr3cjNlh.js";import"./alert-Czqp44ew.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BGo6vKhl.js";import"./delete-_xztDnX7.js";import"./settings-CwmWqfy-.js";import"./NoData-BNu6Ou9F.js";import"./IllustratedMessage-Du7cTspw.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-B8-nnn9a.js";import"./index-BY5HHzcI.js";import"./index-Cq-fj5gm.js";import"./slim-arrow-down-vaMbUVTQ.js";import"./Input-B4YLSXwH.js";import"./ResponsivePopoverCommon.css-Bzv7nheL.js";import"./ValueStateMessage.css-UI9OOvTY.js";import"./Suggestions.css-BymAQ3Y4.js";import"./ListBoxItemGroupTemplate-DvCKbQ3V.js";import"./ComboBoxItemGroup-CKFYNVAp.js";import"./ListItemBaseTemplate-eGcqzXUs.js";import"./Token-DMjAKD8x.js";import"./ScrollEnablement-C7rUKtrC.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CxAFUNDr.js";import"./ToggleButton-EwMGFEkd.js";import"./SuggestionItem-CvAGY5Sq.js";import"./index-DTRkoFlC.js";import"./Option-DtkTSrk6.js";import"./index-Cf-s1qG0.js";import"./SegmentedButton-C67q4Csu.js";import"./index-C8V2aso4.js";import"./Select-DGZ5ZJGF.js";import"./InvisibleMessage-Dv2nzf5u.js";import"./slim-arrow-down-DxmGsJVh.js";import"./index-Dy0XpXnL.js";import"./index-DY2olzvX.js";import"./index-BOHa5n-X.js";import"./index-Bv6B9-dk.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BtBGaZRL.js";import"./group-2-CfykcAeN.js";import"./sort-descending-BtOSPJ2K.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DzoQYUdz.js";import"./utils-C0mg2yQM.js";import"./index-CXggoDTH.js";import"./index-B8n4hNMo.js";import"./index-BWr4kG0m.js";import"./navigation-down-arrow-V4PkR50p.js";import"./navigation-right-arrow-CDyYktkW.js";import"./navigation-right-arrow-CH-kCDBe.js";import"./useCurrentTheme-BcmpDbsZ.js";import"./index-Dh82-zLH.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BiiM2WaD.js";import"./paper-plane-C06ESYz6.js";import"./index-Bjb9tiJS.js";import"./less-aYFPVRCg.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
