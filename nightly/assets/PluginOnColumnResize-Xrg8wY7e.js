import{j as o}from"./iframe-CuVq63aR.js";import{useMDXComponents as n}from"./index-0t9brk-b.js";import{I as r,F as m}from"./CommandsAndQueries-Ca8tTwEu.js";import{M as p,C as s}from"./blocks-Cc_3mMVm.js";import"./Tag-Dg3yp9Ne.js";import"./index-CzEXcp-Y.js";import"./copy-B33m91ys.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CQ8uPA3L.js";import"./preload-helper-PPVm8Dsz.js";import"./index-wXdy4JWU.js";import"./index-BxKmXxxw.js";import"./index-KhF7LlaL.js";import"./Link-CIBW5Nwu.js";import"./index-Bncw1rp-.js";import"./index-CTTCfriq.js";import"./index-CNebcKEn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CmxSnjHn.js";import"./addCustomCSSWithScoping-C8i5UOAF.js";import"./index-B7_hFjeD.js";import"./information-DZp5RqnQ.js";import"./sys-enter-2-CNKv6pdA.js";import"./alert-7PGhDeFz.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BUTeCcsm.js";import"./delete-ctqT1k32.js";import"./settings-BlGasMPb.js";import"./NoData-B4qjQOP9.js";import"./IllustratedMessage-Dx5bOO0b.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-RTNt-sqx.js";import"./index-DNtyE7Tf.js";import"./index-CyQxDGbx.js";import"./slim-arrow-down-Df_1rhWQ.js";import"./Input-BPkYam4a.js";import"./ResponsivePopoverCommon.css-CoaP-B_2.js";import"./ValueStateMessage.css-CiGME_0H.js";import"./Suggestions.css-C6D57ItQ.js";import"./ListBoxItemGroupTemplate-Cnml-jV3.js";import"./ComboBoxItemGroup-Ck56pMKA.js";import"./ListItemBaseTemplate-B7HCXwDc.js";import"./Token-BoF8gI7v.js";import"./ScrollEnablement-DzyyEcpH.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DVdmxQUQ.js";import"./ToggleButton-vxPiqrWZ.js";import"./SuggestionItem-D09qkYgU.js";import"./index-BtHyX5_Y.js";import"./Option-Dpfgd9IN.js";import"./index-BTZ1Q1Qt.js";import"./SegmentedButton-Dp0F9lUa.js";import"./index-CYXbTMeF.js";import"./Select-wajBJflJ.js";import"./InvisibleMessage-DX2fP_3y.js";import"./slim-arrow-down-4yhTg3ae.js";import"./index-FN0CAgw1.js";import"./index-DqqzPQVu.js";import"./index-QDr3UQtb.js";import"./index-BhS6UWMS.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ThOPmQi4.js";import"./group-2-DZoGw3jS.js";import"./sort-descending-D4HKH5sT.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CbRTpC6F.js";import"./utils-Dk_P20L2.js";import"./index-CtIA8VPH.js";import"./index-DXqJthz9.js";import"./index-DTgqJJJQ.js";import"./navigation-down-arrow-O_bSI2G2.js";import"./navigation-right-arrow-BX8UrvSq.js";import"./navigation-right-arrow-v_EVNqHP.js";import"./useCurrentTheme-v99UfhTF.js";import"./index-tYGt_G7s.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DqK0RzMa.js";import"./paper-plane-2lg_ymEl.js";import"./index-CR4SU2MA.js";import"./less-cuFYL3WR.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
