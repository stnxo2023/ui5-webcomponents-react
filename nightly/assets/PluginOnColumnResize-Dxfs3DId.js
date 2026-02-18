import{j as o}from"./iframe-Dk0n26L0.js";import{useMDXComponents as n}from"./index-GonNK-F8.js";import{I as r,F as m}from"./CommandsAndQueries-C5xq4Qip.js";import{M as p,C as s}from"./blocks-Do665btL.js";import"./Tag-DHDcW-fI.js";import"./index-zII-B7tZ.js";import"./copy-DI2yzFNj.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CDVHvZJu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BOuRbWlk.js";import"./index-DZcV0iyk.js";import"./index-Dww5FXQ1.js";import"./Link-CiqsvlwF.js";import"./index-BYI0Uf8A.js";import"./index-A7L-MktQ.js";import"./index-DuchmHxs.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-WCv2CDBA.js";import"./addCustomCSSWithScoping-C7tuYiM4.js";import"./index-DVvxIcdz.js";import"./information-CyaCviRw.js";import"./sys-enter-2-BeHXFnMA.js";import"./alert-CjBv8gy0.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BGSne0t9.js";import"./delete-Wr4GKhKk.js";import"./settings-CTkQY05A.js";import"./NoData-DN-HgX0w.js";import"./IllustratedMessage-WiIf7tiQ.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CsDkGDUR.js";import"./index-BEOp2Qs8.js";import"./index-DkDwXcnb.js";import"./slim-arrow-down-oRzOUke0.js";import"./Input-BrteEEfL.js";import"./ResponsivePopoverCommon.css-B_3MTk0W.js";import"./ValueStateMessage.css-DW6dpdMx.js";import"./Suggestions.css-BKD2VSge.js";import"./ListBoxItemGroupTemplate-DphDFimI.js";import"./ComboBoxItemGroup-CfpmoNkX.js";import"./ListItemBaseTemplate-BW6zm8tA.js";import"./Token-fVkVNRGm.js";import"./ScrollEnablement-BDIo3BIe.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-8LD2v8AG.js";import"./ToggleButton-lLT-pIBz.js";import"./SuggestionItem-BgHqUSrH.js";import"./index-BakJLASc.js";import"./Option-Bs3lQB5f.js";import"./index-BfchdiDe.js";import"./SegmentedButton-kL0-alOP.js";import"./index-WaTuFDqY.js";import"./Select-CgcyfRGV.js";import"./InvisibleMessage-DxH_2GsR.js";import"./slim-arrow-down-Buf41Nuz.js";import"./index-DHKtmYan.js";import"./index-CO1j-MpK.js";import"./index-BbjMprDv.js";import"./index-BGwOxs0U.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CWCwhs_t.js";import"./group-2-DBqLD-HP.js";import"./sort-descending-NSp7tyQ0.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Blitw6nk.js";import"./utils-BVujrbxV.js";import"./index-D4w2TJZn.js";import"./index-g0v-MWQC.js";import"./index-Dvotll0l.js";import"./navigation-down-arrow-C3npHCkQ.js";import"./navigation-right-arrow-DIlKpP0p.js";import"./navigation-right-arrow-CfXHjg3k.js";import"./useCurrentTheme-K0AsAVmL.js";import"./index-BZVSQdFq.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cr1Ieyfb.js";import"./paper-plane-DShcb0AZ.js";import"./index-ufKMWArj.js";import"./less-znGJqNXZ.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
