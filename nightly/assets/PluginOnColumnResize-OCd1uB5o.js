import{j as o}from"./iframe-D2NU56Rf.js";import{useMDXComponents as n}from"./index-PnjEbenM.js";import{I as r,F as m}from"./CommandsAndQueries-29xiV4Jg.js";import{M as p,C as s}from"./blocks-DZ0UXwr1.js";import"./Tag-gDuKwEK0.js";import"./index-BUSq7sbq.js";import"./copy-2VqtSmY4.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-ZbakYZtm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B7GdD8iT.js";import"./index-B9i47eba.js";import"./index-Un1NcZ-Y.js";import"./Link-O92RF9SA.js";import"./index-Dje3V7QZ.js";import"./index-4WW0oGrP.js";import"./index-CgZch3zg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CHOcvBV5.js";import"./addCustomCSSWithScoping-CUv8r2Rw.js";import"./index-jUVFgVlz.js";import"./information-D0vbTy2i.js";import"./sys-enter-2-VpvNFzz0.js";import"./alert-BQIN7sJt.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C-w4OQT-.js";import"./delete-C7Xgu3fR.js";import"./settings-C9R5wtHO.js";import"./NoData-Cq6XCPbf.js";import"./IllustratedMessage-SMl1msrS.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-Qm3Bc51e.js";import"./index-CXQ9TlNQ.js";import"./index-nEIt-vae.js";import"./slim-arrow-down-CM6lEZEE.js";import"./Input-DaL4-DtU.js";import"./ResponsivePopoverCommon.css-BiNMVLeP.js";import"./ValueStateMessage.css-CuKAeQ_D.js";import"./Suggestions.css-RnxMuMvw.js";import"./ListBoxItemGroupTemplate-Dz3TXsUQ.js";import"./ComboBoxItemGroup-BXCWC692.js";import"./ListItemBaseTemplate-BbOMO38P.js";import"./Token-CTqQ2vo2.js";import"./ScrollEnablement-B2R8AjnU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BIEX9q1d.js";import"./ToggleButton-zJBrjEVR.js";import"./SuggestionItem-2sr87sHw.js";import"./index-Iu7bkkY4.js";import"./Option-BiKS04Lw.js";import"./index-WvKxdzdh.js";import"./SegmentedButton-BQz7Epju.js";import"./index-Bu0JLayq.js";import"./Select-ree90dyr.js";import"./InvisibleMessage-DXtpTzED.js";import"./slim-arrow-down-BnBg9S_U.js";import"./index-CxXm1z84.js";import"./index-D9jywx_4.js";import"./index-BdNQFRAd.js";import"./index-CoXQm9zc.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dm126kNX.js";import"./group-2-BkGRWPAG.js";import"./sort-descending-BxfyQJVH.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DCiN1loq.js";import"./utils-o-V_reuI.js";import"./index-CleMm7uf.js";import"./index-Bo5Haci7.js";import"./index-D4iqPqxf.js";import"./navigation-down-arrow-BYO53pAx.js";import"./navigation-right-arrow-C6Zb3cwl.js";import"./navigation-right-arrow-IKuy3H_N.js";import"./useCurrentTheme-ttlaH6tG.js";import"./index-V5WOMRHm.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BmdyIu_o.js";import"./paper-plane-6KY-vdDs.js";import"./index-B40iZj12.js";import"./less-CwcF3uHB.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
