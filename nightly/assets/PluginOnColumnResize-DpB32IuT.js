import{j as o}from"./iframe-BtOtRMtR.js";import{useMDXComponents as n}from"./index-CgtvsECt.js";import{I as r,F as m}from"./CommandsAndQueries-CKs7dFOK.js";import{M as p,C as s}from"./blocks-D9wmcLvH.js";import"./Tag-C9nMOu5c.js";import"./index-Cb_okFKb.js";import"./copy-CGNUo2FO.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DC1S45-c.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DyCpVDUu.js";import"./index-BG_zbJpP.js";import"./index-CSfaSQyt.js";import"./Link-BYt0ZGVT.js";import"./index-BRaE6xYn.js";import"./index-Ch2focQy.js";import"./index-Ddk7eeGJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-4u4TRFh7.js";import"./addCustomCSSWithScoping-Ji9yZ6HK.js";import"./index-B8f2IgEG.js";import"./information-D5w9Hrcs.js";import"./sys-enter-2-Bq4TRZEz.js";import"./alert-CYL_IdM5.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B5N0rpWl.js";import"./delete-Dzj5xyP-.js";import"./settings-C1l-VMhl.js";import"./NoData-CTl2bbKy.js";import"./IllustratedMessage-CyKYIGdr.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BlF0uNyR.js";import"./index-fgWDWmbq.js";import"./index-CguI4hxx.js";import"./slim-arrow-down-DmlnfCIk.js";import"./Input-DW6Mcq6Q.js";import"./ResponsivePopoverCommon.css-B0MfPGYJ.js";import"./ValueStateMessage.css-Cntln-gq.js";import"./Suggestions.css-C1P2f68k.js";import"./ListBoxItemGroupTemplate-Bu8Sz1bH.js";import"./ComboBoxItemGroup-B9ta1tYL.js";import"./ListItemBaseTemplate-PfJZ8SeL.js";import"./Token-jR5FcYSU.js";import"./ScrollEnablement-CNs89SnW.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DSZwl3pY.js";import"./ToggleButton-BD7M-6Sc.js";import"./SuggestionItem-0mZFDaLy.js";import"./index-DXTzsKvp.js";import"./Option-BymN5BMD.js";import"./index-Ch4bYq3S.js";import"./SegmentedButton-KViA7rXu.js";import"./index-Cba0AExI.js";import"./Select-aAJtN928.js";import"./InvisibleMessage-CJx3E7ve.js";import"./slim-arrow-down-jTdyHR1Z.js";import"./index-CwtPYikJ.js";import"./index-CQANsFRb.js";import"./index-DO0bWOhc.js";import"./index-Db2BTFt5.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DamfrtCC.js";import"./group-2-DpZVik8-.js";import"./sort-descending-B-A3hXvE.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B1qY8nay.js";import"./utils-CqrUR1Jn.js";import"./index-jphnT_hb.js";import"./index-C84K25j6.js";import"./index-DgTNmU-2.js";import"./navigation-down-arrow-BChKVsM3.js";import"./navigation-right-arrow-Fi9U-iyQ.js";import"./navigation-right-arrow-Du-S1bwS.js";import"./useCurrentTheme-BRCDCnqM.js";import"./index-c-S2g_Xv.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D6S1xN6P.js";import"./paper-plane-CzloYF4y.js";import"./index-C5HC-scy.js";import"./less-9cA8yvZw.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
