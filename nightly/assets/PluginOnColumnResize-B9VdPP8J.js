import{j as o}from"./iframe-CtwEriWb.js";import{useMDXComponents as n}from"./index-D-9u9m_4.js";import{I as r,F as m}from"./CommandsAndQueries-CD3VJPSk.js";import{M as p,C as s}from"./blocks-BFYACaFi.js";import"./Tag-Dp8ZKpct.js";import"./index-DaHRprUe.js";import"./copy-DmD13pno.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-D0QPuNZ6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C5ngcH8h.js";import"./index-Bt4v4M6X.js";import"./index-DDmWoC0P.js";import"./Link-D_PuN-3O.js";import"./index-zgbQGCMD.js";import"./index-C3uSNLH8.js";import"./index-wzivwl9m.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Lem94xA1.js";import"./addCustomCSSWithScoping-BBQMnugZ.js";import"./index-CeAyP2ez.js";import"./information-D5ukCsPX.js";import"./sys-enter-2-BPp72tdn.js";import"./alert-CQAVluiD.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-6iJPqvCF.js";import"./delete-CHjtmoxe.js";import"./settings-CJBNJogN.js";import"./NoData-DjTzPZvK.js";import"./IllustratedMessage-8ePIRJ01.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-D84oURGo.js";import"./index-Dz0HvdK8.js";import"./index-D9Ds84en.js";import"./slim-arrow-down-Dhjx46M4.js";import"./Input-Ey3vMJ2p.js";import"./ResponsivePopoverCommon.css-BlgaMAH_.js";import"./ValueStateMessage.css-BCs7SZVo.js";import"./Suggestions.css-Ca_9frEg.js";import"./ListBoxItemGroupTemplate-BmW_TD1a.js";import"./ComboBoxItemGroup-D9S-hZmS.js";import"./ListItemBaseTemplate-Dr-kfIJ7.js";import"./Token-C9kw3GgY.js";import"./ScrollEnablement-BQjS8DnP.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DRntQYAQ.js";import"./ToggleButton-Bf-SN9R0.js";import"./SuggestionItem-C8LVLSQl.js";import"./index-BF7FIsg5.js";import"./Option-D4al2hZS.js";import"./index-C_S6aGGA.js";import"./SegmentedButton-2upM-MiM.js";import"./index-DmNK5fut.js";import"./Select-BcqBMzHp.js";import"./InvisibleMessage-BGhqftdJ.js";import"./slim-arrow-down-C-J0cPgu.js";import"./index-DXGpSx7n.js";import"./index-C7Tf8xop.js";import"./index-Dx48TTVd.js";import"./IconDesign-DXd8PPVF.js";import"./filter-VUJDD7Ck.js";import"./group-2-CA3SU2Z-.js";import"./sort-descending-rYpXwTDK.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DkX--lPA.js";import"./utils-Ctkq60uV.js";import"./index-DOMVXnxq.js";import"./index-BrR9oCjZ.js";import"./index-DayvUZ6b.js";import"./navigation-down-arrow-QusIkm2p.js";import"./navigation-right-arrow-B5vKiLuI.js";import"./navigation-right-arrow-D8wA0KPb.js";import"./useCurrentTheme-BTKV_yhV.js";import"./IndicationColor-DVw-fSM_.js";import"./index-HRFMiwNd.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BtiMpto1.js";import"./paper-plane-DvM7Xu8p.js";import"./index-DXgoomGI.js";import"./less-Bi02PNvH.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
