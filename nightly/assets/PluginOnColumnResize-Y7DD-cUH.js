import{j as o}from"./iframe-BzFFzKD_.js";import{useMDXComponents as n}from"./index-CZpqZls8.js";import{I as r,F as m}from"./CommandsAndQueries-98tICPmn.js";import{M as p,C as s}from"./blocks-Dfn8aDA2.js";import"./Tag-Du7Hh6Mn.js";import"./index-BnnU1inb.js";import"./copy-CYosl6Ho.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BlawaMrj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-s8GS1odQ.js";import"./index-CjTZ8O9p.js";import"./index-BTogfKzr.js";import"./Link-CMUJ7C_U.js";import"./index-DDykH0pl.js";import"./index-DXrTedKP.js";import"./index-DWEvXFon.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DUUeXWCw.js";import"./addCustomCSSWithScoping-26WgEUoU.js";import"./index-BkRjFulW.js";import"./information-ItcJqxXi.js";import"./sys-enter-2-Y1mMTef-.js";import"./alert-BnuKtxZV.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CJxmxwdy.js";import"./delete-DvlzQjzU.js";import"./settings-BtDwJkQy.js";import"./NoData-RN4fv0I6.js";import"./IllustratedMessage-22prqt92.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-CuqFQkP0.js";import"./index-BZwhzjSN.js";import"./index-DeWW5-Td.js";import"./slim-arrow-down-CQstKHsd.js";import"./Input-DWRBGriJ.js";import"./ResponsivePopoverCommon.css-Dh0AbpYk.js";import"./ValueStateMessage.css-D95mkauN.js";import"./Suggestions.css-B-ge1jIP.js";import"./ListBoxItemGroupTemplate-Duu4RMpx.js";import"./ComboBoxItemGroup-C3kd4aNe.js";import"./ListItemBaseTemplate-25qboxfo.js";import"./Token-D-De-6_k.js";import"./ScrollEnablement-CN1jgR1Z.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CKrmQxvq.js";import"./ToggleButton-CD3XCDqC.js";import"./SuggestionItem-DfQZW9Bt.js";import"./index-DlK_9Aw2.js";import"./Option-DGgXyVE9.js";import"./index-kQWOveMj.js";import"./SegmentedButton-BD5wjYvX.js";import"./index-DPt3z0Xm.js";import"./Select-Biz1LhyR.js";import"./InvisibleMessage-DAn4ghj3.js";import"./slim-arrow-down-Dy8U4h34.js";import"./index-BpbvvaJA.js";import"./index-BNuehqek.js";import"./index-T2JpUHkX.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CXv10JXZ.js";import"./group-2-BaX0RAg9.js";import"./sort-descending-C1aqy8QD.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-HIY5U8Xd.js";import"./utils-BOfme5mX.js";import"./index-DEFnuKWD.js";import"./index-BqaTO31J.js";import"./index-lM2ViReC.js";import"./navigation-down-arrow-DyEHJO4J.js";import"./navigation-right-arrow-DOrImmdb.js";import"./navigation-right-arrow-XetH_fh1.js";import"./useCurrentTheme-KwChezx1.js";import"./IndicationColor-DVw-fSM_.js";import"./index-5mNQu9kN.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CtHY0-jf.js";import"./paper-plane-BYoF07I-.js";import"./index-BVE1VzVn.js";import"./less-BAX0c4ch.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
