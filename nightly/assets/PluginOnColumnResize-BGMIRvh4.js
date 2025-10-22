import{j as o}from"./iframe-BfEtcTHs.js";import{useMDXComponents as n}from"./index-CPCxp1pX.js";import{I as r,F as m}from"./CommandsAndQueries-XBwAul-0.js";import{M as p,C as s}from"./blocks-BEk0eltt.js";import"./Tag-5zjMhKbj.js";import"./index-Cdy39dSN.js";import"./copy-CuNW8uGj.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-iqlA5Rsi.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CpslN8bF.js";import"./index-C2AzqXEp.js";import"./index-BoD67Q0d.js";import"./Link-Dx6E4Ul6.js";import"./index-zG-h4Dtj.js";import"./index-DZog4k2R.js";import"./index-SIE8WAww.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DzVstS1R.js";import"./addCustomCSSWithScoping-BOC9QupD.js";import"./index-BwoaU2AB.js";import"./information-DXNiXlp4.js";import"./sys-enter-2-Da7fZjtE.js";import"./alert-sulwnQm9.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DefV3fg4.js";import"./delete-DRp_vKLL.js";import"./settings-8cBiGhEo.js";import"./NoData-DRiCv3V7.js";import"./IllustratedMessage-BcierAe3.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DC3p8tpO.js";import"./index-BU6h6RcY.js";import"./index-inlCeEQP.js";import"./slim-arrow-down-PFXKhKTH.js";import"./Input-kpy9MJfL.js";import"./ResponsivePopoverCommon.css-DnHFDVo1.js";import"./ValueStateMessage.css-71Kwz1nQ.js";import"./Suggestions.css-CVcapq67.js";import"./ListBoxItemGroupTemplate-Yo3vvIxC.js";import"./ComboBoxItemGroup-CVRBhhBV.js";import"./ListItemBaseTemplate-BekWMZBh.js";import"./Token-jUwPkdch.js";import"./ScrollEnablement-CI0R8iiH.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CRg3tQau.js";import"./ToggleButton-C-eT4TLR.js";import"./SuggestionItem-BFsIrsax.js";import"./index-C-6LBD30.js";import"./Option-Bnm7Q230.js";import"./index-BbL5VZ3R.js";import"./SegmentedButton-CyHKGesR.js";import"./index-BX9NA7Ty.js";import"./Select-CHLFQnon.js";import"./InvisibleMessage-c4INzckP.js";import"./slim-arrow-down-C0u-ePLI.js";import"./index-CGv8fhvM.js";import"./index-oDy6hXsG.js";import"./index-BywWnLvF.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Ceyg-lSX.js";import"./group-2-DC-4yjr6.js";import"./sort-descending-C2KIxNMI.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bx6m_JwS.js";import"./utils-lSaTNz_p.js";import"./index-DKB6a4-7.js";import"./index-BKyhgX99.js";import"./index-B2EjrpGu.js";import"./navigation-down-arrow-BfqJo7nx.js";import"./navigation-right-arrow-BDRcromZ.js";import"./navigation-right-arrow-DPFdFbno.js";import"./useCurrentTheme-K8lHxNsa.js";import"./IndicationColor-DVw-fSM_.js";import"./index-SiSH1lpP.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DwLDEYmZ.js";import"./paper-plane-C_6zFKE6.js";import"./index-BlUB7lqP.js";import"./less-BJgq7N11.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
