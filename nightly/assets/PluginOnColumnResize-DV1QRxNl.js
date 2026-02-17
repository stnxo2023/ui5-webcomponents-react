import{j as o}from"./iframe-DFi9UtKE.js";import{useMDXComponents as n}from"./index-PehDt-ON.js";import{I as r,F as m}from"./CommandsAndQueries-BgA_2y6P.js";import{M as p,C as s}from"./blocks-BZiPfi5R.js";import"./Tag-DyC770Wv.js";import"./index-DRo_4cI_.js";import"./copy-BtJq9lRd.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BH6xSE6g.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BlgbWjqC.js";import"./index-mz_qMVbD.js";import"./index-Bj7syw50.js";import"./Link-CKaRASof.js";import"./index-hjE9MH8j.js";import"./index-CgUZ8Jrz.js";import"./index-C91-M52B.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-QdlayBuh.js";import"./addCustomCSSWithScoping-C-Twfd1m.js";import"./index-BVIBsTLM.js";import"./information-C2fQMAhn.js";import"./sys-enter-2-C-DHMglr.js";import"./alert-Do2a0hn1.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DGUruPrM.js";import"./delete-DnjgQmJs.js";import"./settings-tQnYQhED.js";import"./NoData-Cvn2BBQC.js";import"./IllustratedMessage-CWKDl7hN.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CnHwZ3TE.js";import"./index-_Ri4cZaB.js";import"./index-BuaB4iYp.js";import"./slim-arrow-down-BnAZSFTD.js";import"./Input-CnIKzm01.js";import"./ResponsivePopoverCommon.css-CTa7xzuq.js";import"./ValueStateMessage.css-CK9Tsjr5.js";import"./Suggestions.css-CKUgORQE.js";import"./ListBoxItemGroupTemplate-CwYyaj2Y.js";import"./ComboBoxItemGroup-ap13ELrg.js";import"./ListItemBaseTemplate-DLVnCBxv.js";import"./Token-BvOFy9vC.js";import"./ScrollEnablement-CctDMVQ2.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cocq2_my.js";import"./ToggleButton-B3acrASm.js";import"./SuggestionItem-BtRBHRZ3.js";import"./index-CzNkF4P7.js";import"./Option-CJrXuDru.js";import"./index-CgtODsdA.js";import"./SegmentedButton-C3Uwsy12.js";import"./index-CLrfWu0q.js";import"./Select-B3hk7S5M.js";import"./InvisibleMessage-Bx6P5Mxd.js";import"./slim-arrow-down-BaBVBPPF.js";import"./index-ClKsX4f6.js";import"./index-CnYJlaUy.js";import"./index-Bw-4XbFY.js";import"./index-Bl4FUUb0.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ZLAIgZY3.js";import"./group-2-CfKb4jtJ.js";import"./sort-descending-BiejtERO.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BKsuI6BF.js";import"./utils-ZPoy0Ic4.js";import"./index-CsP7hgLG.js";import"./index-Bl1zXw1e.js";import"./index-BTA4KG7R.js";import"./navigation-down-arrow-CqGMawe5.js";import"./navigation-right-arrow-BdCckcZj.js";import"./navigation-right-arrow-B3mRpH6q.js";import"./useCurrentTheme-DNJ4oWB7.js";import"./index-Bsk6bWqP.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CgMIeq-k.js";import"./paper-plane-D5b3pIt_.js";import"./index-DafdWF5y.js";import"./less-CCPciuoh.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
