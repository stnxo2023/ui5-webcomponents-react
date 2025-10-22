import{j as o}from"./iframe-aKs2ZWAj.js";import{useMDXComponents as n}from"./index-c4zJYkcR.js";import{I as r,F as m}from"./CommandsAndQueries-IBiFSZr-.js";import{M as p,C as s}from"./blocks-fvCr5kp9.js";import"./Tag-DSoVP5MU.js";import"./index-CMRRcr14.js";import"./copy-D9idsxI8.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BaQwIBgF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DNGZMnOS.js";import"./index-9dBzyYap.js";import"./index-Bj8ei7PO.js";import"./Link--ytwK8Iw.js";import"./index-ChXUbPo1.js";import"./index-B_N5JODd.js";import"./index-MuWvZ7Ot.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C1lURHaG.js";import"./addCustomCSSWithScoping--I2WhUfl.js";import"./index-Dqo0aPAB.js";import"./information-CcxaAVSU.js";import"./sys-enter-2-DseuEdAf.js";import"./alert-DbU8Ao5u.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CxMI9gU-.js";import"./delete-BtFgIOxP.js";import"./settings-ZFHQhdsu.js";import"./NoData-DZS9Ur76.js";import"./IllustratedMessage-qSdTMbb_.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-B6-4gdXH.js";import"./index-CmhJUl_b.js";import"./index-DepEoVTO.js";import"./slim-arrow-down-Dxd3QVtv.js";import"./Input-C4wOVg4W.js";import"./ResponsivePopoverCommon.css-Dn8ntY67.js";import"./ValueStateMessage.css-BbNN49z9.js";import"./Suggestions.css-CJQWNtEa.js";import"./ListBoxItemGroupTemplate-BlE3pbv5.js";import"./ComboBoxItemGroup-tqMfhz0v.js";import"./ListItemBaseTemplate-CtNEmA22.js";import"./Token-B4ffJEtp.js";import"./ScrollEnablement-loPYCCzg.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-xWRY6uoX.js";import"./ToggleButton-CGCRf2qx.js";import"./SuggestionItem-C0HWDl10.js";import"./index-CUVmuYtL.js";import"./Option-78QXYTZI.js";import"./index-DwEarF4u.js";import"./SegmentedButton-Dcqh0APM.js";import"./index-DA1062Kq.js";import"./Select-D7DdaJ-R.js";import"./InvisibleMessage-DezkuNLo.js";import"./slim-arrow-down-BlGxKe2j.js";import"./index-CBIaN5fI.js";import"./index-DnUR33pO.js";import"./index-Czu_4IUB.js";import"./IconDesign-DXd8PPVF.js";import"./filter-rWMtqLgy.js";import"./group-2-CHhi29YF.js";import"./sort-descending-DHA1WIN6.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CLYrF4yE.js";import"./utils-B1uKdKfv.js";import"./index-3SWcYaJq.js";import"./index-B60Izm_h.js";import"./index-BFnuOW-D.js";import"./navigation-down-arrow-Cb1XkKbC.js";import"./navigation-right-arrow-CqaFjLeM.js";import"./navigation-right-arrow-Byp8Xbsp.js";import"./useCurrentTheme-RkZvjCi7.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CjjC7c0Q.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C1moqd-D.js";import"./paper-plane-CJQ7U-vp.js";import"./index-DQpXYUsU.js";import"./less-tAUMA1iF.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
