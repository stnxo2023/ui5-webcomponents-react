import{j as o}from"./iframe-HNnxxD_z.js";import{useMDXComponents as r}from"./index-DMbTStZf.js";import{I as n,F as m}from"./CommandsAndQueries-10i8xq6U.js";import{M as p,C as s}from"./blocks-CCejLYgP.js";import"./Tag-C_XEAXfN.js";import"./index-sOkH0Wf9.js";import"./copy-DRw12hkD.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CpTx4Bpa.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BN0PdEk3.js";import"./index-DoZC0kx0.js";import"./index-B_Z8tqtL.js";import"./Link-CqZZKZ0X.js";import"./index-Bmalf1dG.js";import"./index-CbtLCQbD.js";import"./index-BNjcdWK4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-7TcfhjQy.js";import"./addCustomCSSWithScoping-BgldszW1.js";import"./index-B3Qe_MYG.js";import"./information-BWoF60GS.js";import"./sys-enter-2-BmofK6wa.js";import"./alert-qoF8AI7R.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DG4syGbT.js";import"./delete-BPWmFB0A.js";import"./settings-5OpdjY_e.js";import"./NoData-BG8FU6B9.js";import"./IllustratedMessage-Buk6a2Wh.js";import"./i18n-defaults-iunXW1RU.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./NoFilterResults-CWMznFAT.js";import"./sapIllus-Dialog-NoFilterResults-BO45-LjK.js";import"./sapIllus-Scene-NoFilterResults-CuaKNEnS.js";import"./sapIllus-Spot-NoFilterResults-Bp3R-TVD.js";import"./sapIllus-Dot-NoFilterResults-DxDedFzw.js";import"./index-DE5GHUxQ.js";import"./index-CubNug0w.js";import"./slim-arrow-down-07s9YRQj.js";import"./Input-CcjBHqVO.js";import"./ResponsivePopoverCommon.css-NA3QCBzV.js";import"./ValueStateMessage.css-CvcEC4Dw.js";import"./Suggestions.css-wUtJMfNH.js";import"./ListBoxItemGroupTemplate-Bk5DJdTL.js";import"./ComboBoxItemGroup-xxUN5ZVS.js";import"./ListItemBaseTemplate-tdZrPwi8.js";import"./Token-BDt9FIHE.js";import"./ScrollEnablement-HfpHMe0e.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-oPCc0Uwz.js";import"./ToggleButton-jCoBkBYu.js";import"./SuggestionItem-rXnc-dLm.js";import"./index-B-fo21n3.js";import"./Option-BIZDWBBb.js";import"./index-U-5mF94y.js";import"./SegmentedButton-By7wzTHR.js";import"./index-BtrqzYy6.js";import"./Select-YbUlEasc.js";import"./InvisibleMessage-AaTAMOh4.js";import"./slim-arrow-down-Bs9LULDq.js";import"./index-DfrQCW3n.js";import"./index-CcUUZ0p1.js";import"./index-CiE6BBc9.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CfJnBW4O.js";import"./group-2-VDO6zSGN.js";import"./sort-descending-C1DE_nl-.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-7SvSBgJ9.js";import"./utils-BmeCqfm7.js";import"./index-CjfdEX9X.js";import"./index-gA-WanCe.js";import"./index-FhSs3lIN.js";import"./navigation-down-arrow-rKWSg6ke.js";import"./navigation-right-arrow-CA3cIlRb.js";import"./navigation-right-arrow-DfJT8U7i.js";import"./useCurrentTheme-DEDGfjP3.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BVWTeGXA.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CNF2o9Zu.js";import"./paper-plane-BYrTW1Cg.js";import"./index-B9X03XgD.js";import"./less-DZo91l5W.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
`,o.jsx(m,{})]})}function Go(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{Go as default};
