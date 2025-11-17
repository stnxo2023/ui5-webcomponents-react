import{j as o}from"./iframe-DeqKlIRG.js";import{useMDXComponents as n}from"./index-BkEa29Df.js";import{I as r,F as m}from"./CommandsAndQueries-BK0G3Pqq.js";import{M as p,C as s}from"./blocks-C1D2jvVQ.js";import"./Tag-EQmX-47F.js";import"./index-CW-zKJIF.js";import"./copy-DS8sFIJH.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Z7tjv5z3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BnqCxbWG.js";import"./index-D3fIG7Vo.js";import"./index-vsoaIVfP.js";import"./Link-DmriJHN9.js";import"./index-DZSRf0vt.js";import"./index-CUp9ZC_J.js";import"./index-BjGpgXu_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CD5youlR.js";import"./addCustomCSSWithScoping-W7fjoweE.js";import"./index-CNR4ri7j.js";import"./information-BKTQWge_.js";import"./sys-enter-2-qREtxQiM.js";import"./alert-J7MXwQPX.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DcfttK52.js";import"./delete-CzjS8jKj.js";import"./settings-BFTpzi3p.js";import"./NoData-DdbvMWeu.js";import"./IllustratedMessage-CwaNkNxb.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BrUTDG_M.js";import"./index-BJzWWHia.js";import"./index-DQNorMfg.js";import"./slim-arrow-down--R6acl1m.js";import"./Input-CTbiGavu.js";import"./ResponsivePopoverCommon.css-Dch4WVjM.js";import"./ValueStateMessage.css-DQDynnzI.js";import"./Suggestions.css-CqAFo46i.js";import"./ListBoxItemGroupTemplate-UGwk5YiJ.js";import"./ComboBoxItemGroup-DEdZ8U8Z.js";import"./ListItemBaseTemplate-D5-84s4y.js";import"./Token-ZAjnmiMh.js";import"./ScrollEnablement-C5rzfotJ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B8djI9Ll.js";import"./ToggleButton-BzmaRDgs.js";import"./SuggestionItem-DHUQVhWq.js";import"./index-Bm1-k_-z.js";import"./Option-CmUx6ft0.js";import"./index-CNAnBr4X.js";import"./SegmentedButton-DpjYxYdV.js";import"./index-DQlxzy1B.js";import"./Select-DC3vLiGW.js";import"./InvisibleMessage-BnUatQiz.js";import"./slim-arrow-down-BD3ZShnB.js";import"./index-BWbOjgM2.js";import"./index-DkHfyO0R.js";import"./index-CSAT2Cv9.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DqGeWKN9.js";import"./group-2-CtuKuo3j.js";import"./sort-descending-e-Z9IEx-.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DpduKTu4.js";import"./utils-DFYX2ngj.js";import"./index-x8ATXu-z.js";import"./index-0XnoPyy6.js";import"./index-BvUS6apf.js";import"./navigation-down-arrow-C1Mzx0eB.js";import"./navigation-right-arrow-Dfh_jGI5.js";import"./navigation-right-arrow-Cc3Z_knn.js";import"./useCurrentTheme-DWe2YqPm.js";import"./IndicationColor-DVw-fSM_.js";import"./index-UBCMfYla.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B59bvvXz.js";import"./paper-plane-DJj7TsmY.js";import"./index-BGawmT5r.js";import"./less-DyqqT9US.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
