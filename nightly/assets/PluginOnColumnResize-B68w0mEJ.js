import{j as o}from"./iframe-DrnWJux_.js";import{useMDXComponents as n}from"./index-8FDMxm68.js";import{I as r,F as m}from"./CommandsAndQueries-CNfp17jg.js";import{M as p,C as s}from"./blocks-BFYkdnf5.js";import"./Tag-C0-SLfdZ.js";import"./index-e4jmEiJR.js";import"./copy-BxyqZoQq.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DgUCPkq2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CW1Fzcqx.js";import"./index-Cjg1iz22.js";import"./index-IUrjl9ty.js";import"./Link-DZzQtWK9.js";import"./index-DVoKYJte.js";import"./index-BNqm2zkD.js";import"./index-CBWW3th1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CDLiZVZl.js";import"./addCustomCSSWithScoping-CbplP-kx.js";import"./index-CvpE5smH.js";import"./information-Djf1EDVN.js";import"./sys-enter-2-BH66Bhis.js";import"./alert-DUpqB4cV.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-SPiIDSVL.js";import"./delete-5wIjYt_5.js";import"./settings-CAxNiiQH.js";import"./NoData-HSKDxZyT.js";import"./IllustratedMessage-DN8OF25b.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CyleH7Va.js";import"./index-xdLxPP_I.js";import"./index-Cx3nmWT2.js";import"./slim-arrow-down-DtR6poag.js";import"./Input-4ibVB00q.js";import"./ResponsivePopoverCommon.css-e_PJNQiz.js";import"./ValueStateMessage.css-CmtfF9l5.js";import"./Suggestions.css-CmamAcfO.js";import"./ListBoxItemGroupTemplate-8x1YZ5vn.js";import"./ComboBoxItemGroup-CIBhgpWG.js";import"./ListItemBaseTemplate-BtkgFioN.js";import"./Token-Zy1XachM.js";import"./ScrollEnablement-1d_YGRve.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-yRZvETLK.js";import"./ToggleButton-C23ah_yf.js";import"./SuggestionItem-CB5GR-P0.js";import"./index-wMa-vVtE.js";import"./Option-CqIki-Fh.js";import"./index--9-z_1Kd.js";import"./SegmentedButton-r0yGjI_-.js";import"./index-DDrFA_hE.js";import"./Select-BOTkrqM0.js";import"./InvisibleMessage-C0LEPWkX.js";import"./slim-arrow-down-CVB2vj5c.js";import"./index-M4vNGXYB.js";import"./index-D6NM4VIr.js";import"./index-DKmNv-fY.js";import"./index-ON4dRT-g.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DFUoYrZj.js";import"./group-2-DE19W3Nx.js";import"./sort-descending-DI4YTnq7.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BmAbNejI.js";import"./utils-EOKqhIpz.js";import"./index-Bm4VLMrF.js";import"./index-BC5oddu4.js";import"./index-DdJ94PAJ.js";import"./navigation-down-arrow-CVq5S1h3.js";import"./navigation-right-arrow-C068DZ1b.js";import"./navigation-right-arrow-CvUKgEjh.js";import"./useCurrentTheme-Co2qp8hO.js";import"./index-C4phtI-B.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BIBkdk-r.js";import"./paper-plane-Dk1M1e69.js";import"./index-DQW6kDtJ.js";import"./less-4cQ9RhUf.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
