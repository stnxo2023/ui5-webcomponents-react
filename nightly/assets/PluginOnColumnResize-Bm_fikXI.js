import{j as o}from"./iframe-DAr0L7Ho.js";import{useMDXComponents as n}from"./index-BXrVHVZ0.js";import{I as r,F as m}from"./CommandsAndQueries-BeoYsWXv.js";import{M as p,C as s}from"./blocks-n6i-MeAx.js";import"./Tag-D2SjXRRM.js";import"./index-BGz6B31k.js";import"./copy-C6zsdfpy.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-C9SbKhrV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-M443-WMN.js";import"./index-BtwPOFH6.js";import"./index-C9NDTaZE.js";import"./Link-QVFDyIvP.js";import"./index-Dnii_wG6.js";import"./index-DrSpdpj3.js";import"./index-BaCg4RzE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CqKvYjZH.js";import"./addCustomCSSWithScoping-C9FZ5V1h.js";import"./index-Cs5MEWFI.js";import"./information-C8Iia5pL.js";import"./sys-enter-2-DFDqDf9l.js";import"./alert-CWzLh45M.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-vwvMnJ1M.js";import"./delete-BrugbK3m.js";import"./settings-CLh5qR-P.js";import"./NoData-CtmD2qQW.js";import"./IllustratedMessage-CsWaV4UX.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-Df7CNS72.js";import"./index-D3xQZHsc.js";import"./index-DSQJdXON.js";import"./slim-arrow-down-nCdA9ato.js";import"./Input-FYQ1lVZC.js";import"./ResponsivePopoverCommon.css-B_B3XVCO.js";import"./ValueStateMessage.css-BKph1edC.js";import"./Suggestions.css-B5wtwLdE.js";import"./ListBoxItemGroupTemplate-CToQv3CG.js";import"./ComboBoxItemGroup-K7uaKsRv.js";import"./ListItemBaseTemplate-z4dCCnJ_.js";import"./Token-BwpnemjP.js";import"./ScrollEnablement-BCyvLKHN.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B0DQtofr.js";import"./ToggleButton-D5V4_j9v.js";import"./SuggestionItem-BjLJwrjn.js";import"./index-KG7JmM-m.js";import"./Option-kFmvtdj7.js";import"./index-DcDEIoyS.js";import"./SegmentedButton-CtPD7--4.js";import"./index-qAMqYJh8.js";import"./Select-BBSIqCO7.js";import"./InvisibleMessage-B7Fzvrpv.js";import"./slim-arrow-down-CmpYS2rT.js";import"./index-DGrjxxz-.js";import"./index-BVhiHYP4.js";import"./index-B4_IFOpM.js";import"./index-BUYWOW0O.js";import"./IconDesign-DXd8PPVF.js";import"./filter-M721LxgO.js";import"./group-2-CK-kp2Q-.js";import"./sort-descending-DI7NHhBm.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CaWLfx7-.js";import"./utils-CBU--jiJ.js";import"./index-C8mXVD-G.js";import"./index-DApcbHtK.js";import"./index-FvIchgpB.js";import"./navigation-down-arrow-bmtoD8GV.js";import"./navigation-right-arrow-DwuLZ8mF.js";import"./navigation-right-arrow-FbjwtCoS.js";import"./useCurrentTheme-BvDyIKbt.js";import"./index-DJzsGgTL.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BiIhYZmc.js";import"./paper-plane-BqYVZpon.js";import"./index-CDbXcF1o.js";import"./less-CxH7033X.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
