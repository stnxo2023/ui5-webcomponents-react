import{j as o}from"./iframe-D9bwNIEw.js";import{useMDXComponents as r}from"./index-C7Zm3EXU.js";import{I as n}from"./CommandsAndQueries-C_WJZTxK.js";import{M as m,C as p}from"./blocks-CdTlBqmb.js";import"./Tag-nAJAFGwR.js";import"./index-v7UWUzZA.js";import"./copy-C4qxUcFd.js";import{F as s}from"./Footer-rCYhEoIf.js";import"./PageNotFound-C24XQEWZ.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CLnRqfAO.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-DLbf1NX7.js";import"./index-DiWu_OvK.js";import"./index-BWceQhWo.js";import"./index-DX-an7LC.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BYx-bkvu.js";import"./addCustomCSSWithScoping-CTtTC3T9.js";import"./index-DpP2zBoF.js";import"./index-B5Io8E3V.js";import"./index-DYbVUH4U.js";import"./information-BBRTwn-C.js";import"./sys-enter-2-BgYzXgjA.js";import"./alert-Dvz5ATv0.js";import"./index-B24aDDF0.js";import"./Illustrations-CAUI_mYY.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Czt5as8-.js";import"./delete-BNMsGxXn.js";import"./settings-D-Mp7imo.js";import"./NoData-DTpV-vmY.js";import"./NoFilterResults-CAt1ldiT.js";import"./index-Bz7cIJno.js";import"./IllustratedMessage-BZ0vFLV2.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CGD-1joK.js";import"./Input-CYuZcn_p.js";import"./ResponsivePopoverCommon.css-CkiXBi7B.js";import"./ValueStateMessage.css-oZNuDkL6.js";import"./Suggestions.css-CMZyvU-Z.js";import"./ListBoxItemGroupTemplate-D6WAuS51.js";import"./ComboBoxItemGroup-SbXrXIXH.js";import"./ListItemBaseTemplate-CuVwXQqy.js";import"./Token-DONenf2t.js";import"./ScrollEnablement-C9fhfdHG.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CLmJtC2x.js";import"./ToggleButton-Hap8L6WH.js";import"./multiselect-all-DA9VqXJi.js";import"./SuggestionItem-BeJwmeJ_.js";import"./index-B7JFUA5M.js";import"./Option-BoCXKUm2.js";import"./index-78TbmELJ.js";import"./SegmentedButton-CfF5Zavs.js";import"./index-CnThYA-n.js";import"./Select-BgIvcjPK.js";import"./InvisibleMessage-BbRDjx9q.js";import"./index-Cmx6PnM9.js";import"./index-pF_dZyqg.js";import"./index-CqsSgeDP.js";import"./index-CVcQTqV4.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BQ8RHn1K.js";import"./group-2-B5dpY6uH.js";import"./sort-descending-DDi3yN4n.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-8EuiRxkG.js";import"./utils-uqv3geid.js";import"./index-CxdTHADh.js";import"./index-D8i2I1pU.js";import"./index-CjyQYo-y.js";import"./navigation-down-arrow-Ds7Luypq.js";import"./navigation-right-arrow-B6z7lltw.js";import"./navigation-right-arrow-BSWKpFds.js";import"./useCurrentTheme-BeLIUtpu.js";import"./index-BzcMPirF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Df4rTIOc.js";import"./paper-plane-DcuCs8QG.js";import"./index-D9PFjJIf.js";import"./less-DhdsysxP.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
`,o.jsx(p,{sourceState:"none",of:l}),`
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
`,o.jsx(s,{})]})}function So(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{So as default};
