import{j as o}from"./iframe-BFfiCRAQ.js";import{useMDXComponents as r}from"./index-CnIchwG9.js";import{I as n}from"./CommandsAndQueries-D2e25SQ4.js";import{M as m,C as p}from"./blocks-D8UGMoOU.js";import"./Tag-D5_wJnae.js";import"./index-BvMEXi75.js";import"./copy-CbWPHS6-.js";import{F as s}from"./Footer-3U2rULEI.js";import"./PageNotFound-CAIx-1qq.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Cju8RjRZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BzXMrnu2.js";import"./index-Arv69njm.js";import"./index-BEK-Ecqi.js";import"./index-CX51hblh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-RE3-w7CJ.js";import"./addCustomCSSWithScoping-rUi9bOzC.js";import"./index-De1oz68R.js";import"./index-C_tePRTa.js";import"./index-BsyXKf0m.js";import"./information-mHfS5cWl.js";import"./sys-enter-2-BfeK50PI.js";import"./alert-DGgnTy1o.js";import"./index-stFY49PR.js";import"./Illustrations-DMZSmuvx.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DaxjLmz-.js";import"./delete-HE9f-xbA.js";import"./settings-nYLXQZ59.js";import"./NoData-D-G6iKM6.js";import"./NoFilterResults-DPpLw_XE.js";import"./index-DxmJnuS8.js";import"./IllustratedMessage-BUkhLd6d.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-DpuJyxUQ.js";import"./Input-BSDYELEx.js";import"./ResponsivePopoverCommon.css-D4YzLUeU.js";import"./ValueStateMessage.css-CZS8cQna.js";import"./Suggestions.css-BRZ_skiF.js";import"./ListBoxItemGroupTemplate-B9xYubZz.js";import"./ComboBoxItemGroup-zb3CXtQM.js";import"./ListItemBaseTemplate-BM8be-0F.js";import"./Token-BROk1qEI.js";import"./ScrollEnablement-BWSWkQKK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-xVznhyAm.js";import"./ToggleButton-QD-qILMO.js";import"./multiselect-all-BI6jGZO9.js";import"./SuggestionItem-D45_KCqM.js";import"./index-DxNz8cxh.js";import"./Option-nJWI7L3J.js";import"./index-Yf53TJNt.js";import"./SegmentedButton-C1RsLFa5.js";import"./index-CRSZng-3.js";import"./Select-Bn7-Juol.js";import"./InvisibleMessage-C0rjjrR1.js";import"./index-CnNyMgdN.js";import"./index-CGKXgT7t.js";import"./index-DtGyYGMv.js";import"./index-D4r21y2V.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DeErRayA.js";import"./group-2-CcbLqHZL.js";import"./sort-descending-5U4Cc-Io.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-rwYIjJnj.js";import"./utils-B3YyPFzV.js";import"./index-dSthqGSi.js";import"./index-Dato8t9q.js";import"./index-BoRvqz2r.js";import"./navigation-down-arrow-ByE_fRjG.js";import"./navigation-right-arrow-Dn0VM6Bb.js";import"./navigation-right-arrow-Czbs9gPV.js";import"./useCurrentTheme-BiekrNKv.js";import"./index-CnomUQWd.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C_1zrNbW.js";import"./paper-plane-S0TbXz67.js";import"./index-BFtFKw4r.js";import"./less-C3-m2tND.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
`,o.jsx(e.h1,{id:"analyticaltable-plugin-useoncolumnresize",children:"AnalyticalTable Plugin: useOnColumnResize"}),`
`,o.jsx(n,{moduleName:"useOnColumnResize",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx(e.code,{children:"useOnColumnResize"}),` plugin hook allows firing a callback when a columns size has changed by dragging the "Resizer".
The first parameter is the callback itself (`,o.jsx(e.code,{children:"e: { columnWidth: number; header: Record<string, any> }) => void;"}),"), the second one are the optional ",o.jsx(e.code,{children:"options"})," for controlling how often the callback should fire."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"options"}),":"]}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"liveUpdate"}),": If ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),", the resize function will fire every time the width has changed depending on the ",o.jsx(e.code,{children:"options.wait"})," delay."]}),`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"wait"}),": The number of milliseconds for which the calls are to be delayed. ",o.jsxs(e.strong,{children:["Defaults to ",o.jsx(e.code,{children:"100"})]}),". (Only has an effect if ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),")"]}),`
`]}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(p,{sourceState:"none",of:l}),`
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
`,o.jsx(s,{})]})}function So(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{So as default};
