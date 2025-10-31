import{j as o}from"./iframe-CZzIPN_f.js";import{useMDXComponents as n}from"./index-BN7772Ln.js";import{I as r,F as m}from"./CommandsAndQueries-C_V-vyfI.js";import{M as p,C as s}from"./blocks-CpAefQ0F.js";import"./Tag-B8_XKizL.js";import"./index-CYLMYqU3.js";import"./copy-CFuW58eh.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-WHlqTwq6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-RbSpX7Av.js";import"./index-RQjAfURV.js";import"./index-CiiSHxVf.js";import"./Link-Fkmlwa07.js";import"./index-CCj5LB1a.js";import"./index-DMvyX2go.js";import"./index-c-1N-cez.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CmB6T7HK.js";import"./addCustomCSSWithScoping-DaZxNPdr.js";import"./index-TDczsIb0.js";import"./information-6G8KrWG0.js";import"./sys-enter-2-Blj9-cAn.js";import"./alert-BtpU_SH9.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-vUdfR6U_.js";import"./delete-BMEp91Mc.js";import"./settings-C8GSnPCs.js";import"./NoData-Bf4Yeihh.js";import"./IllustratedMessage-DrWwRU0b.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-BXzF_T72.js";import"./index-Bbxw8KqN.js";import"./index-zbybGof4.js";import"./slim-arrow-down-C428O546.js";import"./Input-BsrOTKjj.js";import"./ResponsivePopoverCommon.css-2Qlub-_h.js";import"./ValueStateMessage.css-hjeNdUqW.js";import"./Suggestions.css-DT4shfhc.js";import"./ListBoxItemGroupTemplate-CSR5ghpQ.js";import"./ComboBoxItemGroup-Cz3um4BI.js";import"./ListItemBaseTemplate-P74cAnZc.js";import"./Token-C3z9AeKo.js";import"./ScrollEnablement-C4qF1cK6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DAcFQW4k.js";import"./ToggleButton-CJ4dsJ-L.js";import"./SuggestionItem-Dno1ukWF.js";import"./index-CfuHgIJB.js";import"./Option-DZueQCXy.js";import"./index-HlkmFS4c.js";import"./SegmentedButton-87GWkDY0.js";import"./index-CnpeIdgj.js";import"./Select-bjAZ7WAd.js";import"./InvisibleMessage-DLMXXFNU.js";import"./slim-arrow-down-Bbr4LCWT.js";import"./index-DfVluAdc.js";import"./index-56rq3Xsn.js";import"./index-Htv8Knj7.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C4d-P2A4.js";import"./group-2-63bcV-_q.js";import"./sort-descending--Bt-86OL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-4WOx3kzp.js";import"./utils-B4X6J-Z9.js";import"./index-BigJjRDp.js";import"./index-C1J3MpNo.js";import"./index-D0gJWrcG.js";import"./navigation-down-arrow-DkBsnEWF.js";import"./navigation-right-arrow-DsJ6uoOM.js";import"./navigation-right-arrow-D15IFhwy.js";import"./useCurrentTheme-Dn8ivhT9.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CWbe83HO.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DjCnev_a.js";import"./paper-plane-BRbCLIHy.js";import"./index-3ZvOWv6T.js";import"./less-NC1u16Z9.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
