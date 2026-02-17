import{j as o}from"./iframe-DQUr2w9e.js";import{useMDXComponents as n}from"./index-uEfBZmVP.js";import{I as r,F as m}from"./CommandsAndQueries-BHqFNGC1.js";import{M as p,C as s}from"./blocks-CTU8TRaT.js";import"./Tag-CGtAgsci.js";import"./index-CHsUWkTe.js";import"./copy-DGFXVa9Z.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-SPeB0i7X.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BbVmwePH.js";import"./index-2aCTTGoH.js";import"./index-BtkqIySi.js";import"./Link-BHxA_VPp.js";import"./index-CSO1LyL1.js";import"./index-B4uSF3Nb.js";import"./index-CNdVS1MW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BpPxZFHh.js";import"./addCustomCSSWithScoping-CYkIrudw.js";import"./index-4ddJk1R_.js";import"./information-BjEP1Brt.js";import"./sys-enter-2-ByVlGYkM.js";import"./alert-B-w-1j20.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B0oXpXse.js";import"./delete-CKJlw0ul.js";import"./settings-BqZXbBzz.js";import"./NoData-CTfdrvzI.js";import"./IllustratedMessage-dFsirP1_.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-NmYqQAmV.js";import"./index-BfpPLO0z.js";import"./index-aZ35b9A0.js";import"./slim-arrow-down-BLkEvkYI.js";import"./Input-BJ886YXD.js";import"./ResponsivePopoverCommon.css-DUGj3C9j.js";import"./ValueStateMessage.css-DPUhzbsV.js";import"./Suggestions.css-CbdO06AC.js";import"./ListBoxItemGroupTemplate-C3D3SS1D.js";import"./ComboBoxItemGroup-Cal7Qapr.js";import"./ListItemBaseTemplate-LMCDkFyc.js";import"./Token-BqJOakxt.js";import"./ScrollEnablement-CQrRan6G.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-55PzQGAK.js";import"./ToggleButton-XKDt_BMd.js";import"./SuggestionItem-Bq6dqzFI.js";import"./index-BNBBhcR5.js";import"./Option-DSK6MS5F.js";import"./index-CoKAYfuw.js";import"./SegmentedButton-DyE0zOmq.js";import"./index-d-fBwfZp.js";import"./Select-DkZSi5CF.js";import"./InvisibleMessage-DVNnV7lb.js";import"./slim-arrow-down-DsQdRoV3.js";import"./index-DXtBm23l.js";import"./index-EOPyMVa_.js";import"./index-Cf9XpyMJ.js";import"./index-v9z5Zdm8.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DlQVZrE2.js";import"./group-2-BlX12n4R.js";import"./sort-descending-Dh1rcEGz.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CxR_3u2a.js";import"./utils-ru1t-ijs.js";import"./index-C3E04by4.js";import"./index-C9Yvpw-p.js";import"./index-D38IEv3D.js";import"./navigation-down-arrow-MdREaxMc.js";import"./navigation-right-arrow-VpBpYwUO.js";import"./navigation-right-arrow-D80pj5jS.js";import"./useCurrentTheme-DnzGvo4K.js";import"./index-NRqn2cP6.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-hjHvlJ0f.js";import"./paper-plane-dLhNd5G8.js";import"./index-D3fHXWzm.js";import"./less-CgyKfQmL.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
