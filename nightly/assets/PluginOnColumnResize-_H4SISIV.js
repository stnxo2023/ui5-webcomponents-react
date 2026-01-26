import{j as o}from"./iframe-vvFzJQsm.js";import{useMDXComponents as n}from"./index-mWjr9AFM.js";import{I as r,F as m}from"./CommandsAndQueries-8pSfE60h.js";import{M as p,C as s}from"./blocks-COsbTFiZ.js";import"./Tag-CSxd9Vy9.js";import"./index-CdSwAr1T.js";import"./copy-qs9aVbQg.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-B3ECgz-E.js";import"./preload-helper-PPVm8Dsz.js";import"./index-FWmQFiva.js";import"./index-DSMhm57i.js";import"./index-keBzjxCB.js";import"./Link-hAW6WURd.js";import"./index-CYjg-3sd.js";import"./index-bfJ02BDw.js";import"./index-BBX1dqjw.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BmD8Hqdt.js";import"./addCustomCSSWithScoping-Px-H63QY.js";import"./index-Ck5nT1M9.js";import"./information-CWYm1ZbR.js";import"./sys-enter-2-kpgYGCQC.js";import"./alert-Ba0jfTcX.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C9kK_LVq.js";import"./delete-D4XAzPaO.js";import"./settings-C8va5o-b.js";import"./NoData-5jtjQ5y7.js";import"./IllustratedMessage-B8VwOS63.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BPC0yP-u.js";import"./index-DRbu4jj1.js";import"./index-CLL1C2RL.js";import"./slim-arrow-down-D1045Dej.js";import"./Input-Bdz4QBIo.js";import"./ResponsivePopoverCommon.css-Baj0Epwl.js";import"./ValueStateMessage.css-4BAUMJYg.js";import"./Suggestions.css-3p3I60pl.js";import"./ListBoxItemGroupTemplate-BpiHCZsA.js";import"./ComboBoxItemGroup-BfSjrPkV.js";import"./ListItemBaseTemplate-B5P3HOKd.js";import"./Token-nR3AU3yg.js";import"./ScrollEnablement-DGKqDpbT.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bq3jzA--.js";import"./ToggleButton-D2c9Ioes.js";import"./SuggestionItem-D6PBycsg.js";import"./index-p75UYelA.js";import"./Option-m73man2m.js";import"./index-CEWT0FVs.js";import"./SegmentedButton-BHh8HeGl.js";import"./index-C5N6WMqm.js";import"./Select-Cvi-Tl5M.js";import"./InvisibleMessage-DfdHEKSG.js";import"./slim-arrow-down-BxUM_kC3.js";import"./index-Dbxl2QgS.js";import"./index-DNtC8pK0.js";import"./index-DkgHrAaT.js";import"./index-HICqIhxY.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dvyr9bkH.js";import"./group-2-CTXNR9Fa.js";import"./sort-descending-D9vZzYoL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DNIS43S0.js";import"./utils-DnHyYccE.js";import"./index-naNPIt8g.js";import"./index-lJc2O7eM.js";import"./index-CchiWT1q.js";import"./navigation-down-arrow-B3V1489R.js";import"./navigation-right-arrow-Dach_1y0.js";import"./navigation-right-arrow-BeI9ctVu.js";import"./useCurrentTheme-DNXu84CQ.js";import"./index-lCZJ1S5W.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BvMNZh4_.js";import"./paper-plane-wgrrkunQ.js";import"./index-DGYtHBaB.js";import"./less-D8pAxZdo.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
