import{j as o}from"./iframe-4UX9zVtN.js";import{useMDXComponents as n}from"./index-BBCkKRvO.js";import{I as r,F as m}from"./CommandsAndQueries-DudJ8lrA.js";import{M as p,C as s}from"./blocks-BFxvjNAv.js";import"./Tag-B3FvlNgH.js";import"./index-BXHIuf-D.js";import"./copy-Cyt5Uff4.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BeOdInDA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-S5ZW1bjA.js";import"./index-CXoNptYK.js";import"./index-DctXwSyI.js";import"./Link-fA-SeXAj.js";import"./index-C3GdV3vE.js";import"./index-De4g9Au_.js";import"./index-DnrxmRVZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-rUq1jEzN.js";import"./addCustomCSSWithScoping-DCDZu8w8.js";import"./index-oGM8b9YF.js";import"./information-WWzzOZjz.js";import"./sys-enter-2-CaiZT1Nw.js";import"./alert-G68zeMJP.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BFQW1jvL.js";import"./delete-CPKq1-iv.js";import"./settings-BeAaSNnX.js";import"./NoData-CU3h5MDZ.js";import"./IllustratedMessage-gFd3OmYv.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-ZSvcbIjO.js";import"./index-QNs_CVCy.js";import"./index-BhSpDM5B.js";import"./slim-arrow-down-BheOSzby.js";import"./Input-CtYIRUY4.js";import"./ResponsivePopoverCommon.css-D8f7fYw-.js";import"./ValueStateMessage.css-BaAl7IoW.js";import"./Suggestions.css-BO3NfIZR.js";import"./ListBoxItemGroupTemplate-DmypcSPh.js";import"./ComboBoxItemGroup-tnGGzqCQ.js";import"./ListItemBaseTemplate-qK1e_MJK.js";import"./Token-BUnyf5To.js";import"./ScrollEnablement-0B710n07.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CK8Tux93.js";import"./ToggleButton-CN__x2LS.js";import"./SuggestionItem-ChOawdH9.js";import"./index-Bsid_d0h.js";import"./Option-BzI4AWst.js";import"./index-BcgU9rpx.js";import"./SegmentedButton-BNYfI6jW.js";import"./index-BBRP-eLa.js";import"./Select-BflInANe.js";import"./InvisibleMessage-D3fa-sIT.js";import"./slim-arrow-down-6GOcwo6b.js";import"./index-Bjl35UV4.js";import"./index-CodV0zr0.js";import"./index-Dc1dnONs.js";import"./index-CPXil7Dy.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BV09TBnF.js";import"./group-2-tHCPmnSd.js";import"./sort-descending-6ECAK0fQ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D7pVLkOw.js";import"./utils-BL-JB8rb.js";import"./index-18NioiXD.js";import"./index-CTTeQqwG.js";import"./index-B9dyUeRS.js";import"./navigation-down-arrow-BFC6z2qR.js";import"./navigation-right-arrow-D7uahuKZ.js";import"./navigation-right-arrow-s6C2P9I8.js";import"./useCurrentTheme-9YePhqUt.js";import"./index-BFekAKgk.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Bs2Ad4ZO.js";import"./paper-plane-DkaqpPYC.js";import"./index-DiVVQKHa.js";import"./less-jLdy7f8K.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
