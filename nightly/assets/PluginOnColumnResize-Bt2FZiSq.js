import{j as o}from"./iframe-QhtzJj2F.js";import{useMDXComponents as n}from"./index-B3k8-Qk3.js";import{I as r,F as m}from"./CommandsAndQueries-CNzXbMAv.js";import{M as p,C as s}from"./blocks-DDXzLSfl.js";import"./Tag-CoHKtk39.js";import"./index-xaayqokA.js";import"./copy-CTybEZjn.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-D1l57mWN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BrUnaB-V.js";import"./index-CitIem69.js";import"./index-CiXnBbg7.js";import"./Link-Dwkzs0Lw.js";import"./index-DIdyzBPI.js";import"./index-DFHNTg_F.js";import"./index-D3ZVhFJ7.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ltT42hBg.js";import"./addCustomCSSWithScoping-BX9baLRL.js";import"./index-Dg_bnA2j.js";import"./information-LovaJps-.js";import"./sys-enter-2-BHgG_M7J.js";import"./alert-CuMg9P4f.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CNpHgrLb.js";import"./delete-BaT0QUP6.js";import"./settings-uhyiirG0.js";import"./NoData-CkfOfgCO.js";import"./IllustratedMessage-CV4N09cG.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-GNa2en7q.js";import"./index-CN13WjEC.js";import"./index-KbEvRCiP.js";import"./slim-arrow-down-xCHM9F0i.js";import"./Input-DTQqZq-A.js";import"./ResponsivePopoverCommon.css-piC5h4jL.js";import"./ValueStateMessage.css-DBagYbRC.js";import"./Suggestions.css-CejvJKBZ.js";import"./ListBoxItemGroupTemplate-DepFnNxx.js";import"./ComboBoxItemGroup-D38Wr8qS.js";import"./ListItemBaseTemplate-Cos5K4ap.js";import"./Token-Bgmtsg6b.js";import"./ScrollEnablement-DtNx2cEd.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CQNcnXqt.js";import"./ToggleButton-DyuD2XUy.js";import"./SuggestionItem-BtJ4t_fT.js";import"./index-BhyD8HLz.js";import"./Option-DlUUMMtd.js";import"./index-M2h8-I4o.js";import"./SegmentedButton-ZCdQ95nb.js";import"./index-CxE_8jTO.js";import"./Select-pjdp6Rwf.js";import"./InvisibleMessage-BRwaHpiH.js";import"./slim-arrow-down-gvx2dpNQ.js";import"./index-DcsO_iRE.js";import"./index-BpM7KJ_2.js";import"./index-BID1hoZg.js";import"./index-B1HjRcua.js";import"./IconDesign-DXd8PPVF.js";import"./filter-IsgdBqo4.js";import"./group-2-D9cCDLqP.js";import"./sort-descending-DuSbLhoV.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Ss9rnYj6.js";import"./utils-erb1VNk7.js";import"./index-Cl6iRk1J.js";import"./index--_SNBdoM.js";import"./index-CBrrpGGF.js";import"./navigation-down-arrow-D-Z8F_4d.js";import"./navigation-right-arrow-yCklUeEk.js";import"./navigation-right-arrow-dDT8HKVJ.js";import"./useCurrentTheme-DmGtj7Uk.js";import"./index-BwddXk7L.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CSPv66kJ.js";import"./paper-plane-q_I3mXRA.js";import"./index-B_hiW_oO.js";import"./less-KsTjEaWT.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
