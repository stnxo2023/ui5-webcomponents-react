import{j as o}from"./iframe-eEgnsybz.js";import{useMDXComponents as n}from"./index-KUh3EncO.js";import{I as r,F as m}from"./CommandsAndQueries-Bkg2fbFD.js";import{M as p,C as s}from"./blocks-C6o1VobD.js";import"./Tag-CyCgeEFX.js";import"./index-DlBhGBWU.js";import"./copy-7FG8PsWo.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-5zkjYXUy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D9oALoTs.js";import"./index-BwSVcTHk.js";import"./index-0PjuM5S8.js";import"./Link-BuGrrtP2.js";import"./index-yhFX9aug.js";import"./index-Dc3QGU-g.js";import"./index-CGhTEkOT.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CH2VPx4y.js";import"./addCustomCSSWithScoping-DKRk5X62.js";import"./index-Pa5s-fex.js";import"./information-CKacNM7A.js";import"./sys-enter-2-D0fhmdQp.js";import"./alert-CxkpN3m7.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CzaZCJnb.js";import"./delete-irFC0K_n.js";import"./settings-D6sE3rZn.js";import"./NoData-CEs0myHh.js";import"./IllustratedMessage-BX1XofDb.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-Ceffab9D.js";import"./index-C7F47GNT.js";import"./index-r3V5CQu0.js";import"./slim-arrow-down-DZYetS2j.js";import"./Input-DKxPEOnV.js";import"./ResponsivePopoverCommon.css-CM05b5HY.js";import"./ValueStateMessage.css-qrxzD_3f.js";import"./Suggestions.css-CU6yhqWV.js";import"./ListBoxItemGroupTemplate-bJFFdWvz.js";import"./ComboBoxItemGroup-BirbcqPA.js";import"./ListItemBaseTemplate-CAjFk73p.js";import"./Token-B7VqEG9Z.js";import"./ScrollEnablement-Dj9e3xCo.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bv5pHXMI.js";import"./ToggleButton-D2k4wWl7.js";import"./SuggestionItem-aqON_76G.js";import"./index-DhUt20lO.js";import"./Option-DUm3mIhb.js";import"./index-B2x2MP6X.js";import"./SegmentedButton-CDk8cxu9.js";import"./index-BWQjygaM.js";import"./Select-D9goYstD.js";import"./InvisibleMessage-2xnh5Mfi.js";import"./slim-arrow-down-DUTlQ5v8.js";import"./index-Du8qhg8T.js";import"./index-CdnhyucW.js";import"./index-B0W8XC3p.js";import"./index-DYImmnpQ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BJuRHVvc.js";import"./group-2-DNitl-KP.js";import"./sort-descending-BJx8GPj8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CpWpj11z.js";import"./utils-CyuipnON.js";import"./index-DeVsfJce.js";import"./index-DXfAtOJv.js";import"./index-BIEBBMh8.js";import"./navigation-down-arrow-BDetjDEa.js";import"./navigation-right-arrow-SIiFeyVd.js";import"./navigation-right-arrow-U36zYERp.js";import"./useCurrentTheme-mfP2heJH.js";import"./index-BEbiu7Cw.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Dm7lVWDa.js";import"./paper-plane-iHPbU_pU.js";import"./index-BzLGb63M.js";import"./less-B0zSuI_N.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
