import{j as o}from"./iframe-bao9qRDH.js";import{useMDXComponents as r}from"./index-D58rFl3P.js";import{I as n}from"./CommandsAndQueries-Bg8yb33a.js";import{M as m,C as p}from"./blocks-uUz_WETG.js";import"./Tag-DnPLRNDs.js";import"./index-B3NnTsyp.js";import"./copy-jfQcw6pd.js";import{F as s}from"./Footer-WVPZdxr3.js";import"./PageNotFound-sLpD2w2i.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-D8DfZE8Y.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-ZWtIcHaY.js";import"./index-BNO-qx4N.js";import"./index-Dl2g3tcZ.js";import"./index-DOBS9bga.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-L1xKvRVU.js";import"./addCustomCSSWithScoping-D0v__xyi.js";import"./index-DPEMBgxp.js";import"./index-5JMcfQSp.js";import"./index-CwfO5OAT.js";import"./information-DbPZ0LCP.js";import"./sys-enter-2-Ch2YqKTp.js";import"./alert-CeM8CijD.js";import"./index-D32QYjx2.js";import"./Illustrations-BL_lLuOy.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DKlJM-ya.js";import"./delete-B4gN8aLw.js";import"./settings-DtxXcVBU.js";import"./NoData-xbyYJYqd.js";import"./NoFilterResults-rv2yTnQi.js";import"./index-Cq3Mz4O1.js";import"./IllustratedMessage-DduXifRX.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BASehbAX.js";import"./Input-B4vfEymz.js";import"./ResponsivePopoverCommon.css-boUjI9kL.js";import"./ValueStateMessage.css-Betpi1RU.js";import"./Suggestions.css-Czb7XS0g.js";import"./ListBoxItemGroupTemplate-Dxoq36lY.js";import"./ComboBoxItemGroup-BUGeYATz.js";import"./ListItemBaseTemplate-RRyIrX0q.js";import"./Token-CmOxgLRY.js";import"./ScrollEnablement-DTj4JYqk.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-_fmCfmaL.js";import"./ToggleButton-y0YtkiXF.js";import"./multiselect-all-BxizFlon.js";import"./SuggestionItem-rNzbWoyR.js";import"./index-vSP-bfQy.js";import"./Option-DAUEl0Pa.js";import"./index-BZpv7IWE.js";import"./SegmentedButton-JBMqYtuM.js";import"./index-WWi3sBsb.js";import"./Select-BY45_jlB.js";import"./InvisibleMessage-lmhcQGzA.js";import"./index-BGpmUKYQ.js";import"./index-CnrqoCE-.js";import"./index-CLyNAv9_.js";import"./index-C8x-DaOR.js";import"./IconDesign-DXd8PPVF.js";import"./filter-vG2O0XVd.js";import"./group-2-Cn2rIsnU.js";import"./sort-descending-Dbm-NR0R.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BBPmP6UZ.js";import"./utils-CPXWtj8G.js";import"./index--h_XAmYP.js";import"./index-BLVSX5Bx.js";import"./index-1cD6iEHz.js";import"./navigation-down-arrow-DkqjrQmu.js";import"./navigation-right-arrow-DBBJoASN.js";import"./navigation-right-arrow-l91271wa.js";import"./useCurrentTheme-Cu36YjS3.js";import"./index-ReeUPo0U.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BuL1NiTR.js";import"./paper-plane-C0i82_xb.js";import"./index-CQKF89is.js";import"./less-ps9JngL0.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
