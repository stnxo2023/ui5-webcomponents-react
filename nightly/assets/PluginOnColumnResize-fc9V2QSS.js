import{j as o}from"./iframe-28qsVqoa.js";import{useMDXComponents as n}from"./index-BFNvmwXu.js";import{I as r,F as m}from"./CommandsAndQueries-BfKaGYgk.js";import{M as p,C as s}from"./blocks-BNVDqSKu.js";import"./Tag-CLPhNAjj.js";import"./index-SsxmriuV.js";import"./copy-D8k23l_a.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Cg1NtmUY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BaQxmIN-.js";import"./index-QZ0q645F.js";import"./index-CWduGffo.js";import"./Link-DXcAF61b.js";import"./index-BSTD78ro.js";import"./index-Ca0DqgDv.js";import"./index-DL1oyV4a.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BDZLmGFA.js";import"./addCustomCSSWithScoping-BQde53eT.js";import"./index-CLPTUIfm.js";import"./information-DHvzqwV5.js";import"./sys-enter-2-BKUUSCT4.js";import"./alert-D4ecQurj.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-COPcPnn5.js";import"./delete-D6n8l8UK.js";import"./settings-KfG2DgI0.js";import"./NoData-BHcK-Aul.js";import"./IllustratedMessage-CGHyK5ha.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-BFsCnHXw.js";import"./index-CK3Laxke.js";import"./index-CxlikhWp.js";import"./slim-arrow-down-2lG3bKMG.js";import"./Input-CrBqW3Ot.js";import"./ResponsivePopoverCommon.css-DsOR_HfQ.js";import"./ValueStateMessage.css-Dvyiq9XB.js";import"./Suggestions.css-CdBr9Iyq.js";import"./ListBoxItemGroupTemplate-D6s9h6mp.js";import"./ComboBoxItemGroup-BSE1TSV-.js";import"./ListItemBaseTemplate-DQ-a9maQ.js";import"./Token-Bg0__rMF.js";import"./ScrollEnablement-D20yGFFj.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BH9JzmU2.js";import"./ToggleButton-DnstKIPi.js";import"./SuggestionItem-BYGj_peP.js";import"./index-C5RB-L2O.js";import"./Option-CBaHN4ua.js";import"./index-DTixF4LF.js";import"./SegmentedButton-BE8yfTm6.js";import"./index-CQtjld3i.js";import"./Select-CdXPeKkl.js";import"./InvisibleMessage-c9pOv6Ax.js";import"./slim-arrow-down-nj_KPop2.js";import"./index-Ak3FL7pI.js";import"./index-D9_Z31ZG.js";import"./index-Bq1PEsv_.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Ch2Rtr4k.js";import"./group-2-Ca0UP8Bj.js";import"./sort-descending-D3OEeGWP.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CD3TL1kj.js";import"./utils-DHg3ikqn.js";import"./index-CC-MGg2L.js";import"./index-CjppD4GJ.js";import"./index-BzTqkFjE.js";import"./navigation-down-arrow-DwBdfM0k.js";import"./navigation-right-arrow-CasD3Mbg.js";import"./navigation-right-arrow-FCQDrhAi.js";import"./useCurrentTheme-67g0YI4J.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BFx0BUYp.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B2mIAyDi.js";import"./paper-plane-CpCfXY5u.js";import"./index-CGLvNCn3.js";import"./less-4GZTBVpK.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
