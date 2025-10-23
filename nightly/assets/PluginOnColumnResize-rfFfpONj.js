import{j as o}from"./iframe-dhwXAt1u.js";import{useMDXComponents as n}from"./index-DImPBCtJ.js";import{I as r,F as m}from"./CommandsAndQueries-BiJh2_dH.js";import{M as p,C as s}from"./blocks-CTyxDY6f.js";import"./Tag-BG2XjNSs.js";import"./index-B1ZC6OTg.js";import"./copy-WVaPICqB.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-NobErNiv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DEgKjCYL.js";import"./index-C7W-OT1T.js";import"./index-3eryvK5U.js";import"./Link-Cd_dPy_Q.js";import"./index-CAgLAQbh.js";import"./index-T43jgYfn.js";import"./index-CdiB3Os4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BR_2w1_J.js";import"./addCustomCSSWithScoping-cc9WpAMd.js";import"./index-BPFGYJtx.js";import"./information-hzaD6T-d.js";import"./sys-enter-2-B2YAXpf0.js";import"./alert-DeSP_HIc.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BQJ9_hXc.js";import"./delete-ColCegI9.js";import"./settings-BKxUXi_G.js";import"./NoData-DE4p_qfr.js";import"./IllustratedMessage-IVjS-cFc.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-BYHaslJ3.js";import"./index-BdKfj6BP.js";import"./index-Bo0SF_w8.js";import"./slim-arrow-down-RFEatmWJ.js";import"./Input-Dhh001VP.js";import"./ResponsivePopoverCommon.css-byQMK4lk.js";import"./ValueStateMessage.css-7UGm8ZKL.js";import"./Suggestions.css-ChcbQr92.js";import"./ListBoxItemGroupTemplate-6OIAemZH.js";import"./ComboBoxItemGroup-BfFjklB8.js";import"./ListItemBaseTemplate-D31ELJez.js";import"./Token-9QLbAU5H.js";import"./ScrollEnablement-Bjuu67w6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BwVKYcla.js";import"./ToggleButton-D60jws_T.js";import"./SuggestionItem-BY0B1lvJ.js";import"./index-DFsd0zaO.js";import"./Option-Blnne7RQ.js";import"./index-DdMJqEp5.js";import"./SegmentedButton-DUCC8xz-.js";import"./index-hsE4BZb-.js";import"./Select-VK7jMl2Q.js";import"./InvisibleMessage-aNho_UJn.js";import"./slim-arrow-down-CHcSrWyO.js";import"./index-_A95DrSO.js";import"./index-xhEmKt2i.js";import"./index-C-LnOqtr.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D5RqGlQv.js";import"./group-2-CYR4pn1M.js";import"./sort-descending-Dqk7kt1w.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DFpmbe8i.js";import"./utils-bFJ73DdM.js";import"./index-B4TolNq1.js";import"./index-kxgSnLRw.js";import"./index-Dae02is2.js";import"./navigation-down-arrow-zUd6dVMN.js";import"./navigation-right-arrow-DHvkUpoR.js";import"./navigation-right-arrow-5cHWwAFo.js";import"./useCurrentTheme-Ecq0NIxs.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DuHZ_byj.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-xQaBj4C2.js";import"./paper-plane-BQm487K_.js";import"./index-CEgJEyfN.js";import"./less-DyOzkEyI.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
