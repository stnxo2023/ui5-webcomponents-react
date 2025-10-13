import{j as o}from"./iframe-mZIFexBi.js";import{useMDXComponents as n}from"./index-CSeyhL4L.js";import{I as r,F as m}from"./CommandsAndQueries-_DqxABXw.js";import{M as p,C as s}from"./blocks-pMMBqTak.js";import"./Tag-C5S5wO6X.js";import"./index-CY-KcLEe.js";import"./copy-CK4YnSbS.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BoAMcLKN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bym-t_ma.js";import"./index-BFs_s1ec.js";import"./index-CPook487.js";import"./Link-Dky_yGkw.js";import"./index-BbeYDVUM.js";import"./index-DCVKeCrB.js";import"./index-B61-jGoN.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B9FjHI5t.js";import"./addCustomCSSWithScoping-BJ-ZUtqt.js";import"./index-DbDxOjYs.js";import"./information-CuCRdO66.js";import"./sys-enter-2-Da-bg0qX.js";import"./alert-4bZr7bHx.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-8CMZVnD3.js";import"./delete-DgxKkLgT.js";import"./settings-CyhNrSEc.js";import"./NoData-CX0o0XVo.js";import"./IllustratedMessage-Dz80uH_8.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-bMeRj9cL.js";import"./index--VBMnPTW.js";import"./index-BY9PhD7r.js";import"./slim-arrow-down-CoGBvzbB.js";import"./Input-DjI1lAlw.js";import"./ResponsivePopoverCommon.css-caZWKg7m.js";import"./ValueStateMessage.css-ZpzMuhyf.js";import"./Suggestions.css-BNm2UgCq.js";import"./ListBoxItemGroupTemplate-BHiiI4XH.js";import"./ComboBoxItemGroup-DuYnLx9L.js";import"./ListItemBaseTemplate-Bo0wwbfF.js";import"./Token-BepZXm1A.js";import"./ScrollEnablement-C8KKYJfQ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BsmNnGjy.js";import"./ToggleButton-PXrRdKUI.js";import"./SuggestionItem-DBDH_Z95.js";import"./index-BeLlboZI.js";import"./Option-DS0ajgcB.js";import"./index-D2shRfFO.js";import"./SegmentedButton-gpHzBIZT.js";import"./index-BilcGZ4z.js";import"./Select-BbAKcpZr.js";import"./InvisibleMessage-D8WcmxR1.js";import"./slim-arrow-down-C4kKcs0A.js";import"./index-ClKkYnAD.js";import"./index-BDLJAHfH.js";import"./index-Bdr-0gsP.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DmZ5vjU1.js";import"./group-2-C25AltrU.js";import"./sort-descending-Baid0H05.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C63IWCLZ.js";import"./utils-KJEZQBk-.js";import"./index-C2MqkFzJ.js";import"./index-BjtYM8CZ.js";import"./index-BY87GbXm.js";import"./navigation-down-arrow-BYh6gvU2.js";import"./navigation-right-arrow-Bahnb797.js";import"./navigation-right-arrow-BsXFygcD.js";import"./useCurrentTheme-BuH74dbv.js";import"./IndicationColor-DVw-fSM_.js";import"./index-COLPdMln.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-7fZVXrnl.js";import"./paper-plane-uFnaxlDc.js";import"./index-ClRWdTR1.js";import"./less-CfJ4xBPp.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
