import{j as o}from"./iframe-C3aU9yO2.js";import{useMDXComponents as n}from"./index-DcLDqK7w.js";import{I as r,F as m}from"./CommandsAndQueries-D0nTXU9T.js";import{M as p,C as s}from"./blocks-B9oc031V.js";import"./Tag-CNw53_eT.js";import"./index-i1N6ua_w.js";import"./copy-D_R4P06r.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BwxHOvH5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CfpqN5Id.js";import"./index-g0B9jrXN.js";import"./index-DKI76k_B.js";import"./Link-BnEnKAv3.js";import"./index-DBwKQ69N.js";import"./index-D8QgyDbC.js";import"./index-CPcH_eI_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CPfGSaYG.js";import"./addCustomCSSWithScoping-C73QrPVQ.js";import"./index-BU0JfJz1.js";import"./information-B-Ns6m0d.js";import"./sys-enter-2-D_Kaw-gu.js";import"./alert-7z2pNDRB.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DnUmXdKQ.js";import"./delete-DmCWbdAi.js";import"./settings-1nFL_G7A.js";import"./NoData-vppJJq2k.js";import"./IllustratedMessage-BIRyOBBo.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-CtRAMKvF.js";import"./index-DEu9ukF7.js";import"./index-BJ4JqDZt.js";import"./slim-arrow-down-B-t7KMm_.js";import"./Input-Cfbtnwg6.js";import"./ResponsivePopoverCommon.css-BiqlokwB.js";import"./ValueStateMessage.css-BCiC-Blk.js";import"./Suggestions.css-DhC4w4Fb.js";import"./ListBoxItemGroupTemplate-C7SkMpNF.js";import"./ComboBoxItemGroup-CIO6k5QH.js";import"./ListItemBaseTemplate-C7NEMs7Q.js";import"./Token-D-8TO1My.js";import"./ScrollEnablement-B-ve8lNO.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BPLw0fnj.js";import"./ToggleButton--U2n7cRR.js";import"./SuggestionItem-B5fupWrO.js";import"./index-DrHO_6Yk.js";import"./Option-CeOJa7O5.js";import"./index-haCaBy7F.js";import"./SegmentedButton-DasYM7ls.js";import"./index-BHr0wFPK.js";import"./Select-C8enezS2.js";import"./InvisibleMessage-Ce5yXPOl.js";import"./slim-arrow-down-gN-yvIKk.js";import"./index-DcrniWqF.js";import"./index-ATxduGAU.js";import"./index-HMHM8G5Q.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BV4nhufn.js";import"./group-2-DXTcSu-3.js";import"./sort-descending-_zxdumlM.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DbNwybSm.js";import"./utils-HF4Qfx7C.js";import"./index-D4SYQI3K.js";import"./index-BFaqayaE.js";import"./index-CJWdScx6.js";import"./navigation-down-arrow-D4g4EBUf.js";import"./navigation-right-arrow-C2JbsM5-.js";import"./navigation-right-arrow-DER4Cb5G.js";import"./useCurrentTheme-CNp62qcx.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C_6DRLOc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CyLBUYXb.js";import"./paper-plane-CRXLbten.js";import"./index-DiOVCr3o.js";import"./less-C2uRyvrb.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
