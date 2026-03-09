import{j as o}from"./iframe-BdGmxA0i.js";import{useMDXComponents as r}from"./index-C_zfuZcr.js";import{I as n}from"./CommandsAndQueries-DPqSrKc7.js";import{M as m,C as p}from"./blocks-CvQb1zUF.js";import"./Tag-BZN3xK1V.js";import"./index-BNIHl_tg.js";import"./copy-uDMRF36v.js";import{F as s}from"./Footer-Do6hcOrL.js";import"./PageNotFound-CY9FLBWR.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-B8ML7JX1.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CQvrABtJ.js";import"./index-DweznLO9.js";import"./index-C9pyPHSx.js";import"./index-DNgHnsc0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-XhNISppA.js";import"./addCustomCSSWithScoping-CVesT24B.js";import"./index-DZ9SK43g.js";import"./index-B2qLcI40.js";import"./index-rE0jwRpd.js";import"./information-CGm_Wlhu.js";import"./sys-enter-2-ckHTVyHn.js";import"./alert-iCvnQY_C.js";import"./index-BdC4vT1G.js";import"./Illustrations-D5W8On_q.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ChIqXbcW.js";import"./delete-CTJk0IsQ.js";import"./settings-1l_UOAce.js";import"./NoData-Djl2JIk3.js";import"./NoFilterResults-DFkoAIau.js";import"./index-CfsWq6ap.js";import"./IllustratedMessage-BtAlBlE6.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-Dwbmm60M.js";import"./Input-C_M3LRG8.js";import"./ResponsivePopoverCommon.css-EBeNizWh.js";import"./ValueStateMessage.css-B4ysw5cr.js";import"./Suggestions.css-Dvu4kY1O.js";import"./ListBoxItemGroupTemplate-BOvb3JSv.js";import"./ComboBoxItemGroup-CGG0HGrS.js";import"./ListItemBaseTemplate-DmKob6Ye.js";import"./Token-YSryXaLU.js";import"./ScrollEnablement-Bx9yVDLi.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BDBEqEtu.js";import"./ToggleButton-J8mmndXN.js";import"./multiselect-all-Ly4Q_TyH.js";import"./SuggestionItem-Dym0n5j2.js";import"./index-CevOS8v4.js";import"./Option-DvimpLtc.js";import"./index-CGPpfces.js";import"./SegmentedButton-FdRkB1du.js";import"./index-Da-1EDwC.js";import"./Select-D5Nsgp52.js";import"./InvisibleMessage-moo-UDrP.js";import"./index-BE8W69-D.js";import"./index-DsUL3khw.js";import"./index-d6_tfAg9.js";import"./index-D5VX-3sq.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B4cujpVB.js";import"./group-2-Dkh6CIdZ.js";import"./sort-descending-BBVHoidp.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DrhR_CYD.js";import"./utils-DG7feN6u.js";import"./index-CGXbN4gw.js";import"./index-Bh3ez5ii.js";import"./index-CUQ38Ums.js";import"./navigation-down-arrow-BSMjHANS.js";import"./navigation-right-arrow-8rES_Lpx.js";import"./navigation-right-arrow-DLSm8pNj.js";import"./useCurrentTheme-DDtUANJS.js";import"./index-MAbIbvmC.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C8ybJVgJ.js";import"./paper-plane-Bst4p13C.js";import"./index-Cf38JKFu.js";import"./less-Bq49TC9A.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
