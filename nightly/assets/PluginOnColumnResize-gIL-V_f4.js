import{j as o}from"./iframe-CB_qmYI8.js";import{useMDXComponents as n}from"./index-CUbKt2T4.js";import{I as r,F as m}from"./CommandsAndQueries-HFp-4-55.js";import{M as p,C as s}from"./blocks-DzH1842d.js";import"./Tag-BYvfvCLi.js";import"./index-BfAPJluR.js";import"./copy-DF2Z1I-X.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-23cGt9Fu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-R89IEGRw.js";import"./index-SxWu56C4.js";import"./index-DE9gqn8Y.js";import"./Link-BRHRm_Z2.js";import"./index-C0flI_9Q.js";import"./index-At4nCxiD.js";import"./index-6WmsPmX0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ClKIXNm7.js";import"./addCustomCSSWithScoping-9v1tewFq.js";import"./index-03LyQe5H.js";import"./information-CRpELSoZ.js";import"./sys-enter-2-DeQtcYtY.js";import"./alert-Bc8RvQjV.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DoIcej0d.js";import"./delete-h5Qd2W2H.js";import"./settings-CSx4aPPi.js";import"./NoData-BrRr6rJG.js";import"./IllustratedMessage-P-eTSBPb.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-C4AhZadB.js";import"./index-BecbeCsX.js";import"./index-4XDdM9qY.js";import"./slim-arrow-down-COs4Wkey.js";import"./Input-C9UjHzpz.js";import"./ResponsivePopoverCommon.css-DeWNHY7M.js";import"./ValueStateMessage.css-C_C4YLjN.js";import"./Suggestions.css-BiWmWxsR.js";import"./ListBoxItemGroupTemplate-CMTiHLs-.js";import"./ComboBoxItemGroup-CO3bHj-e.js";import"./ListItemBaseTemplate-DB4BankB.js";import"./Token-Bn2Z9z3x.js";import"./ScrollEnablement-zi7znCts.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cv8isNSi.js";import"./ToggleButton-CS3KiBib.js";import"./SuggestionItem-CS7L8vuq.js";import"./index-BmjeN9M0.js";import"./Option-DDYwfZPs.js";import"./index-BiQ1de6A.js";import"./SegmentedButton-B8To13C-.js";import"./index-MDU9FtHu.js";import"./Select-DhuDrd7S.js";import"./InvisibleMessage-Ds6r8Hv8.js";import"./slim-arrow-down-jIayUIlb.js";import"./index-DDk-oOqz.js";import"./index-CTC0a4Ev.js";import"./index-BvRf3EEd.js";import"./index-D2nb9FR-.js";import"./IconDesign-DXd8PPVF.js";import"./filter-J7STKAsw.js";import"./group-2-bvY_SkSU.js";import"./sort-descending-7NVh3v7n.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BUpkmw30.js";import"./utils-D98SoFu_.js";import"./index-CN6SBPye.js";import"./index-BhZzLROS.js";import"./index-Y1-1V0is.js";import"./navigation-down-arrow-BV093n8q.js";import"./navigation-right-arrow-hA-Kw1uy.js";import"./navigation-right-arrow-BYDjRs4q.js";import"./useCurrentTheme-C9z11eLv.js";import"./index-CPVT_XbL.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-NAZbOjtu.js";import"./paper-plane-DaL2oIMz.js";import"./index-B9MOWJBA.js";import"./less-CxZT17u6.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
