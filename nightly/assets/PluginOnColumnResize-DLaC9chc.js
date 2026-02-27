import{j as o}from"./iframe-DwL_U_4M.js";import{useMDXComponents as n}from"./index-DF1KaKr-.js";import{I as r,F as m}from"./CommandsAndQueries-Dz5IdIhG.js";import{M as p,C as s}from"./blocks-BkbxlrC9.js";import"./Tag-DWzoI0ag.js";import"./index-DgsDGr1U.js";import"./copy-Ds9kRn1x.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CDXE8hi2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BOSg5TA3.js";import"./index-Dqsw9_lb.js";import"./index-Db6l5aQj.js";import"./Link-BdX-3dcl.js";import"./index-Vi2IbP0J.js";import"./index-DOHiCVZ-.js";import"./index-DKq2OUSi.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dkqe7TGi.js";import"./addCustomCSSWithScoping-CE7eblPA.js";import"./index-ak-yAlnV.js";import"./information-BVmVMqd7.js";import"./sys-enter-2-B94IC9Xo.js";import"./alert-q5IjkK7H.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BzDfrn-5.js";import"./delete-B6I0mZbY.js";import"./settings-D0VDSh3d.js";import"./NoData-C5CH-fWN.js";import"./IllustratedMessage-D15Dg6tX.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-Demdetfk.js";import"./index-avC49Qb6.js";import"./index-DDkyeSI8.js";import"./slim-arrow-down-ByCeMr4H.js";import"./Input-usKDjDSg.js";import"./ResponsivePopoverCommon.css-CYR3rAjO.js";import"./ValueStateMessage.css-B8AI8KQ2.js";import"./Suggestions.css-CUQOIKID.js";import"./ListBoxItemGroupTemplate-DY25tZlO.js";import"./ComboBoxItemGroup-C3uToiVo.js";import"./ListItemBaseTemplate-BG93_W6E.js";import"./Token-CPniK2MA.js";import"./ScrollEnablement-CXLtDDEy.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-XOt9jxnj.js";import"./ToggleButton-CqFkZEKu.js";import"./SuggestionItem-B6ABjz01.js";import"./index-CPQ3riJn.js";import"./Option-CcfnhX8_.js";import"./index-BSRLtlm8.js";import"./SegmentedButton-m10F3ec1.js";import"./index-CGjb2kw-.js";import"./Select-BAca3Q1U.js";import"./InvisibleMessage-CeA3DNW4.js";import"./slim-arrow-down-BrKYHwbw.js";import"./index-BuK1gME8.js";import"./index-DMl1Ef82.js";import"./index-Dfj6plRX.js";import"./index-DHJJGQ-p.js";import"./IconDesign-DXd8PPVF.js";import"./filter-7bwVwAS4.js";import"./group-2-DskrB8ej.js";import"./sort-descending-BXTEYcEJ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CxZSpw0g.js";import"./utils-SlffE8vX.js";import"./index-dMrvblLs.js";import"./index-Q2HLxENY.js";import"./index-B699imMP.js";import"./navigation-down-arrow-DQDDNWpd.js";import"./navigation-right-arrow-vbFYChxY.js";import"./navigation-right-arrow-BD_93O6z.js";import"./useCurrentTheme-Cixk1FnX.js";import"./index-CsMOgL6c.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-ABDzzkNE.js";import"./paper-plane-DcKv8aMK.js";import"./index-C3qjnFkq.js";import"./less-BreB1OVM.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
