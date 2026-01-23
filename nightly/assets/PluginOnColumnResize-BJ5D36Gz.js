import{j as o}from"./iframe-jtGuD92m.js";import{useMDXComponents as n}from"./index-DyF6GLYl.js";import{I as r,F as m}from"./CommandsAndQueries-BgMZZCcl.js";import{M as p,C as s}from"./blocks-BL9sBKUV.js";import"./Tag-Dpj_ZR-y.js";import"./index-l_17qA1t.js";import"./copy-Cn3-Cbk_.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-5Tk_lYY6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-6t-0TKBV.js";import"./index-D83RH-Pe.js";import"./index-BEvnvfMN.js";import"./Link-DNXoJofm.js";import"./index-C31MI_yM.js";import"./index-B03g8ajZ.js";import"./index-DtTTXQKH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BUd6X6mW.js";import"./addCustomCSSWithScoping-Bli4C3Yg.js";import"./index-DWeXgmyB.js";import"./information-DbZkMEoB.js";import"./sys-enter-2-K-A7BdiC.js";import"./alert-Csq7QRRu.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BWnXpevw.js";import"./delete-91MAIkTv.js";import"./settings-D-bW6kuF.js";import"./NoData-CzzIdr3g.js";import"./IllustratedMessage-C9-M-hdZ.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DqqtA8_P.js";import"./index-B3tdBbEs.js";import"./index-DHuy06ot.js";import"./slim-arrow-down-BXWYLP4S.js";import"./Input-CYGHSySa.js";import"./ResponsivePopoverCommon.css-CWePAE7F.js";import"./ValueStateMessage.css-BFBzO_xV.js";import"./Suggestions.css-DBI26x47.js";import"./ListBoxItemGroupTemplate-CsqKmRRZ.js";import"./ComboBoxItemGroup-CIWUs4af.js";import"./ListItemBaseTemplate-BqSygcyO.js";import"./Token-BHrN57pC.js";import"./ScrollEnablement-NU8w7nTv.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DhTllij2.js";import"./ToggleButton-hXSjriuS.js";import"./SuggestionItem-Dtkve2MA.js";import"./index-Cvp7efxq.js";import"./Option-Dcdi45sN.js";import"./index-DmozDhUV.js";import"./SegmentedButton-CQ1w3cR3.js";import"./index-Dwk6FeKM.js";import"./Select-CY97Kj_H.js";import"./InvisibleMessage-CjY7eeJ7.js";import"./slim-arrow-down-D05WhDba.js";import"./index-CCzWQSlv.js";import"./index-Cp9jM2Nb.js";import"./index-LE4ERw5Y.js";import"./index-C0ZVEY98.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D2cn45G_.js";import"./group-2-ByAZ2_iD.js";import"./sort-descending-BB9cOvuL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CTCTysJ9.js";import"./utils-DdgWIhzU.js";import"./index-BGvGmVJ6.js";import"./index-BUu3tjYA.js";import"./index-DrECakWL.js";import"./navigation-down-arrow-CGa1rkR6.js";import"./navigation-right-arrow-inY4KsbT.js";import"./navigation-right-arrow-CDKzHRuO.js";import"./useCurrentTheme-BdPm8Riw.js";import"./index-Cd3rxfas.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-_IURFj1j.js";import"./paper-plane-BU6zGRJF.js";import"./index-CX971ue9.js";import"./less-CRl1RWOh.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
