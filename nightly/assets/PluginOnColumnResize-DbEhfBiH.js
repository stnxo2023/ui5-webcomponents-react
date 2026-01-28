import{j as o}from"./iframe-Bqqr6LRd.js";import{useMDXComponents as n}from"./index-Br4hcxKx.js";import{I as r,F as m}from"./CommandsAndQueries-18MjfAFY.js";import{M as p,C as s}from"./blocks-Cu3AJo0i.js";import"./Tag-CwbUvZ-m.js";import"./index-B04Rzf_f.js";import"./copy-Bhrou6qI.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-vtE8StoO.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Eu6KN1OU.js";import"./index-DkY4sX_i.js";import"./index-B4-rpm-y.js";import"./Link-1XxvN6x_.js";import"./index-uP3qKYkO.js";import"./index-CFiaIaQb.js";import"./index-BFr0IkwM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-_soG_jSZ.js";import"./addCustomCSSWithScoping-DM5M0hyQ.js";import"./index-JLAmYdlt.js";import"./information-BWf6xVI-.js";import"./sys-enter-2-NBiqC5e1.js";import"./alert-eITYjrPF.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B7kkSgms.js";import"./delete-FfRmnN9Y.js";import"./settings-DlvvQWHj.js";import"./NoData-Cnw4Kevx.js";import"./IllustratedMessage-lIXFssI-.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-CLTUfrTe.js";import"./index-BNj-eJpZ.js";import"./index-3uq2_G_9.js";import"./slim-arrow-down-BZm47vFp.js";import"./Input-vcWbAoGp.js";import"./ResponsivePopoverCommon.css-DVi9wNNs.js";import"./ValueStateMessage.css-DbIMxrdT.js";import"./Suggestions.css-Co8vDkCG.js";import"./ListBoxItemGroupTemplate-uy6aJTW5.js";import"./ComboBoxItemGroup-BTvCb2Kc.js";import"./ListItemBaseTemplate-blGXO2lB.js";import"./Token-Bae9FhVJ.js";import"./ScrollEnablement-Cxy5Bzo0.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Hnm9afMy.js";import"./ToggleButton-BgVCtHZJ.js";import"./SuggestionItem-D9DXt2U6.js";import"./index-ByYfrQl-.js";import"./Option-DOx9ZJ94.js";import"./index-DVPlV14N.js";import"./SegmentedButton-Bh--EjsV.js";import"./index-DtQZgkhi.js";import"./Select-BdSnKAc1.js";import"./InvisibleMessage-Bp5Ok78e.js";import"./slim-arrow-down-DZ6p3Bwi.js";import"./index-C4tZRj-d.js";import"./index-CwgCLf6W.js";import"./index-CJC3e2m0.js";import"./index-RQz2GPrc.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BwEOts-V.js";import"./group-2-CDRA2oju.js";import"./sort-descending-CUlou7JN.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-bVqMVufC.js";import"./utils-BMPv-A8F.js";import"./index-BgEIZIwU.js";import"./index-CKnDUyrg.js";import"./index-DCQPDRVf.js";import"./navigation-down-arrow-CxlZv9_c.js";import"./navigation-right-arrow-Wb7vj7-O.js";import"./navigation-right-arrow-83NG2uzj.js";import"./useCurrentTheme-dPM8OGfa.js";import"./index-DMlsPBCZ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-5BH4o7Dk.js";import"./paper-plane-Abb2eC1B.js";import"./index-BeQjUBuP.js";import"./less-DEcTl8Yh.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
