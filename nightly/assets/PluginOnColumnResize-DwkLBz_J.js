import{j as o}from"./iframe-CojmUvbr.js";import{useMDXComponents as n}from"./index-yNE59oSe.js";import{I as r,F as m}from"./CommandsAndQueries-aZHAlwyo.js";import{M as p,C as s}from"./blocks-CCIsbg9K.js";import"./Tag-Dsf3IOJa.js";import"./index-Brr98IUO.js";import"./copy-BaosELJI.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CG_nlWId.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DWXpW2Nz.js";import"./index-CJ7ufDVc.js";import"./index-YKIZAZmt.js";import"./Link-DrGCnOch.js";import"./index-DSq2zmmv.js";import"./index-n-K8h2zA.js";import"./index-BIRLYBEm.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CBX4KpMg.js";import"./addCustomCSSWithScoping-IwiFNes4.js";import"./index-CW7nJiyw.js";import"./information-BEykFvbu.js";import"./sys-enter-2-BjWZZR70.js";import"./alert-CeJt7tDB.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CscadejP.js";import"./delete-BrCc2tej.js";import"./settings-rTgMGjKN.js";import"./NoData-3cxxI4xB.js";import"./IllustratedMessage-DbYC26wy.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-UIvAx6KX.js";import"./index-Ca07kfjm.js";import"./index-Wu8As2d7.js";import"./slim-arrow-down-CnEombk5.js";import"./Input-CMo9bLuk.js";import"./ResponsivePopoverCommon.css-DnVyVoGn.js";import"./ValueStateMessage.css-awQruozh.js";import"./Suggestions.css-CNoZckwt.js";import"./ListBoxItemGroupTemplate-B7epaTRM.js";import"./ComboBoxItemGroup-CcEHTpa7.js";import"./ListItemBaseTemplate-BhUR_jwE.js";import"./Token-BNQ0MNpG.js";import"./ScrollEnablement-CsFUE6Hy.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-x9obTEZ-.js";import"./ToggleButton-B6FN-zj3.js";import"./SuggestionItem-BgJHRloZ.js";import"./index-CshUp08T.js";import"./Option-CcKhKS8d.js";import"./index-DNSi3hz_.js";import"./SegmentedButton-QKVFOy33.js";import"./index-Bw1q_xPl.js";import"./Select-DbE_8KmI.js";import"./InvisibleMessage-C9kaBW3M.js";import"./slim-arrow-down-CmTsJEng.js";import"./index-s2T_O_TR.js";import"./index-BnQtKf9Y.js";import"./index-fxNkC4ZC.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BapWlnQS.js";import"./group-2-BCIyFqCc.js";import"./sort-descending-DCnBtPjC.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BTW6f1H7.js";import"./utils-BOJTBdKc.js";import"./index-CGQmGuch.js";import"./index-Bf-N28hY.js";import"./index-k6h4lExd.js";import"./navigation-down-arrow-LIHAsR-b.js";import"./navigation-right-arrow-BaaRnnci.js";import"./navigation-right-arrow-Dej95qlj.js";import"./useCurrentTheme-iOMvhnFg.js";import"./IndicationColor-DVw-fSM_.js";import"./index-9IGeFUbL.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BjmSWWr0.js";import"./paper-plane-j8ePWbJq.js";import"./index-C9WiPxnz.js";import"./less-OV79TxhL.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
