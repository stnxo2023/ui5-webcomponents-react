import{j as o}from"./iframe-Bb0HmHnB.js";import{useMDXComponents as n}from"./index-Meo06HOS.js";import{I as r,F as m}from"./CommandsAndQueries-tR4iht-v.js";import{M as p,C as s}from"./blocks-CgyFha0p.js";import"./Tag-CkJgtMYU.js";import"./index-e-oHYPrA.js";import"./copy-ClXY_Ebg.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CVCqajEn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BUHcje1a.js";import"./index-ujA-0uQD.js";import"./index-DRj5BOAv.js";import"./Link-Ctr6McPA.js";import"./index-DamhzNr0.js";import"./index-kXJ0csex.js";import"./index-DkF-cfFa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DmK6tfuz.js";import"./addCustomCSSWithScoping-DZsYEWJZ.js";import"./index-CCkcOLyJ.js";import"./information-CuEP2--w.js";import"./sys-enter-2-BxgOL3Cz.js";import"./alert-CRFvm_h4.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B3EdkcTs.js";import"./delete-DNvu7cli.js";import"./settings-X_qufnfv.js";import"./NoData-Be80XLqg.js";import"./IllustratedMessage-DD1_V1fS.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-YoedeCQZ.js";import"./index-CEumqWwt.js";import"./index-Ctco8NFr.js";import"./slim-arrow-down-BK6_kW2_.js";import"./Input-8EIzHHn6.js";import"./ResponsivePopoverCommon.css-CYHZGTr6.js";import"./ValueStateMessage.css-DQVkNKvB.js";import"./Suggestions.css-jL9cJ0bK.js";import"./ListBoxItemGroupTemplate-F9IXXChP.js";import"./ComboBoxItemGroup-rVDs3n5k.js";import"./ListItemBaseTemplate-DGXYw3IB.js";import"./Token-plZfxczM.js";import"./ScrollEnablement-CtICbC2N.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DRloOdH2.js";import"./ToggleButton-CIurin5E.js";import"./SuggestionItem-wc2mHVyx.js";import"./index-BaTE6PUT.js";import"./Option-CpLfiC8k.js";import"./index-IAfope6S.js";import"./SegmentedButton-BNh0v1Zf.js";import"./index-D8FXkeK7.js";import"./Select-DIxLDO_Y.js";import"./InvisibleMessage-BuHDtcTe.js";import"./slim-arrow-down-DOc9_ecn.js";import"./index-CN5pxO6-.js";import"./index-DD32uJSt.js";import"./index-wp5LnE7o.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CG2Pz_ak.js";import"./group-2-DRBOUlKY.js";import"./sort-descending-pJBX6NsG.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C4pQrK8W.js";import"./utils-DT171g7R.js";import"./index-BHDfFIKl.js";import"./index-COKyuEqS.js";import"./index-DnLo1BZO.js";import"./navigation-down-arrow-DQURBlhq.js";import"./navigation-right-arrow-BBRYGBWr.js";import"./navigation-right-arrow-DbJe2FI5.js";import"./useCurrentTheme-DeBv9RCX.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BllQlQx0.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-fxo11iCx.js";import"./paper-plane-BLDEhHRM.js";import"./index-DgN_PFsx.js";import"./less-B_rvZNau.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
