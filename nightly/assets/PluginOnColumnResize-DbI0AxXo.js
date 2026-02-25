import{j as o}from"./iframe-BHlEgbZD.js";import{useMDXComponents as n}from"./index-DuWPJPdo.js";import{I as r,F as m}from"./CommandsAndQueries-CRy7DgFq.js";import{M as p,C as s}from"./blocks-BZ1_Gb0n.js";import"./Tag-CUIBDfjO.js";import"./index-DMcN3ohr.js";import"./copy-Ds19teD5.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-ByzE4p5Q.js";import"./preload-helper-PPVm8Dsz.js";import"./index-57xnhTbk.js";import"./index-D8Q0xw5Q.js";import"./index-CPQEcn_1.js";import"./Link-DdeM_yx0.js";import"./index-DXZq7O0l.js";import"./index-COEmfUFW.js";import"./index-x01lEzby.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbwzLluT.js";import"./addCustomCSSWithScoping-BezKsk6D.js";import"./index-2QbIapUz.js";import"./information-Cbg1Tz52.js";import"./sys-enter-2-Z2Vy22vQ.js";import"./alert-BcFaqecl.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CC6hyO-N.js";import"./delete-4ZvrUKjO.js";import"./settings-DG_uwOtb.js";import"./NoData-DYxHoJfA.js";import"./IllustratedMessage-udF9mWrD.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CbnIbvhX.js";import"./index-DN6hq5_h.js";import"./index-BT3cRVz2.js";import"./slim-arrow-down-36KS2JIw.js";import"./Input-BOFtXl-H.js";import"./ResponsivePopoverCommon.css-DVGkEwPu.js";import"./ValueStateMessage.css-BcukUnSJ.js";import"./Suggestions.css-oxI77au-.js";import"./ListBoxItemGroupTemplate-CEjJ4Crf.js";import"./ComboBoxItemGroup-C_SgaNix.js";import"./ListItemBaseTemplate-D1qgX7Z0.js";import"./Token-BULKmOKE.js";import"./ScrollEnablement-Cu7uqZ0X.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CeF-gQpE.js";import"./ToggleButton-DYZAZrxx.js";import"./SuggestionItem-BZywVYEn.js";import"./index-BEzWpt9n.js";import"./Option-DaLzGShP.js";import"./index-BTRoGroB.js";import"./SegmentedButton-DcSgMcr8.js";import"./index-BP72XLPJ.js";import"./Select-zEDuWLFW.js";import"./InvisibleMessage-OeUWQ5Ye.js";import"./slim-arrow-down-DLrArs5r.js";import"./index-DCYT0nIY.js";import"./index-CvJhvJHe.js";import"./index-D4qBUSpf.js";import"./index-C57Z4SS3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CC3D5stC.js";import"./group-2-CAC2yRw6.js";import"./sort-descending-Ct46rwrC.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B3QDW9YY.js";import"./utils-Bkxa81Gm.js";import"./index-h4KD2Npg.js";import"./index-ChBdg0CU.js";import"./index-Dxaffyfy.js";import"./navigation-down-arrow-CUMLWhBn.js";import"./navigation-right-arrow-D2ty4le0.js";import"./navigation-right-arrow-DEzFZZdH.js";import"./useCurrentTheme-CTTdfk_h.js";import"./index-Db_zW0W2.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Dp2bM3ZO.js";import"./paper-plane-wrAGSNsE.js";import"./index-0vEfSv_1.js";import"./less-D9a_VPsv.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
