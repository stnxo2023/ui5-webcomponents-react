import{j as o}from"./iframe-Bf1hlxgS.js";import{useMDXComponents as n}from"./index-B002OMKA.js";import{I as r,F as m}from"./CommandsAndQueries-BEe5YBSl.js";import{M as p,C as s}from"./blocks-CF_xVWI_.js";import"./Tag-BHAjLoAY.js";import"./index-p22CRHMo.js";import"./copy-D5BVEzvy.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BSgEoKJz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D-S325RU.js";import"./index-BciJGkl8.js";import"./index-hDeN6gmj.js";import"./Link-Bn0GO4LF.js";import"./index-BqDvsFmr.js";import"./index-BjKEmns7.js";import"./index-DhV0sN_I.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D7KxqJSV.js";import"./addCustomCSSWithScoping-BIqc26fM.js";import"./index-2lJhwVzj.js";import"./information-BXU6Hxbd.js";import"./sys-enter-2-BvfgNwob.js";import"./alert-B3TgQjln.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cb0z8X09.js";import"./delete-D8DWeF7d.js";import"./settings-Dh74knWL.js";import"./NoData-PZMeGE26.js";import"./IllustratedMessage-h1DOAdex.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-C3l4wxGh.js";import"./index-C5eIYaqM.js";import"./index-Bk0S-jnY.js";import"./slim-arrow-down-C4-n4KwM.js";import"./Input-Dqxhrjvq.js";import"./ResponsivePopoverCommon.css-Df1YsyQx.js";import"./ValueStateMessage.css-DXAAF2dF.js";import"./Suggestions.css-DM_nm0RD.js";import"./ListBoxItemGroupTemplate-C5qHO486.js";import"./ComboBoxItemGroup-DPlsTSsl.js";import"./ListItemBaseTemplate-BqEI7cM7.js";import"./Token-CPH3EVcO.js";import"./ScrollEnablement-Dfx6-CYw.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B9ipNNEN.js";import"./ToggleButton-D_L21r0E.js";import"./SuggestionItem-AhhjJ8Mh.js";import"./index-TUCbMDvM.js";import"./Option-CqSMarpV.js";import"./index-zS-bN0DU.js";import"./SegmentedButton-BicHJo62.js";import"./index-BK2139LG.js";import"./Select-FKh8tKiT.js";import"./InvisibleMessage-BnSLCX5X.js";import"./slim-arrow-down-amOGocIG.js";import"./index-BmHDaJX3.js";import"./index-C-eVdq9L.js";import"./index-BC1Ed97q.js";import"./index-ChBbQCuo.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DjkvSi-l.js";import"./group-2-BBxRQHAf.js";import"./sort-descending-BoIXgBQJ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DtECT_FH.js";import"./utils-BC9PCMpX.js";import"./index-CszV8wTC.js";import"./index-CxOmA48X.js";import"./index-DNt1wk0D.js";import"./navigation-down-arrow-DmEpUMgP.js";import"./navigation-right-arrow-Bu3lyT6l.js";import"./navigation-right-arrow-BBudxr1z.js";import"./useCurrentTheme-gu6EY9KG.js";import"./index-VBVjOL-U.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D-Rd56YE.js";import"./paper-plane-CEqXSyIK.js";import"./index-CSGuzL_r.js";import"./less-C1jg6kBH.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
