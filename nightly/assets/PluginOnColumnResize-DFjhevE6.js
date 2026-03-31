import{j as o}from"./iframe-D-ZP0dY4.js";import{u as n,M as r,C as m}from"./blocks-DdKopPSC.js";import{I as p}from"./CommandsAndQueries-BDnj74c9.js";import"./Tag-CNlwwDmZ.js";import"./index-C04kZKw9.js";import"./copy-HW_Kxlr2.js";import{F as s}from"./Footer-BLTkp7nE.js";import"./PageNotFound-DiPPX7Ze.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CBJpaNlu.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-06g1SNw0.js";import"./index-CF2Hkn6J.js";import"./index-BAothMF0.js";import"./index-eZWdMAeg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DxeCNWRQ.js";import"./addCustomCSSWithScoping-DSa3TmU8.js";import"./index-BAH7VHrp.js";import"./index-U3Dsw_H6.js";import"./index-Dx3fp6V7.js";import"./information-BKIP_Ra_.js";import"./sys-enter-2-vX0Cm-qe.js";import"./alert-Bu79oBCI.js";import"./index-Tnz3nQrD.js";import"./Illustrations-DQsCRA8v.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CYYGY4rz.js";import"./delete-DE6k9FGx.js";import"./settings-DXtL0O5a.js";import"./NoData-osmgknU-.js";import"./NoFilterResults-UTGDt4U0.js";import"./index-8Ug6H22Q.js";import"./IllustratedMessage-oHRK-VY8.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-Dg-UkN-_.js";import"./Input-BOgGLefA.js";import"./ResponsivePopoverCommon.css-Dq17JFm7.js";import"./ValueStateMessage.css-CBH2VacG.js";import"./Suggestions.css-BN8N-6EC.js";import"./ListBoxItemGroupTemplate-C8lKTN_F.js";import"./ComboBoxItemGroup-q2JQ_mwf.js";import"./ListItemBaseTemplate-BFmgJ1Et.js";import"./Token-1FPkMzEf.js";import"./ScrollEnablement-DYOTGKWX.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ByPNXDkr.js";import"./ToggleButton-D3qWXGLv.js";import"./multiselect-all-BPnmvnbF.js";import"./SuggestionItem-FyzOwRj6.js";import"./index-DsejTE-e.js";import"./Option-CY78tL2o.js";import"./index-vIzRardY.js";import"./SegmentedButton-ClYWnXbK.js";import"./index-DR3J50VQ.js";import"./Select-BtxIe5EO.js";import"./InvisibleMessage-D_du7Nj7.js";import"./index-CT1QofI3.js";import"./index-Q4CSHOMB.js";import"./index-DKz3p5bK.js";import"./index-Boazbh6I.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D4gZdwex.js";import"./group-2-J8HA7VvZ.js";import"./sort-descending-BkEITgyL.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B4X1hHJn.js";import"./utils-CIzQ8GjY.js";import"./index-C63PUtVf.js";import"./index-qGydiAeZ.js";import"./index-D2n2OSAj.js";import"./navigation-down-arrow-CrAOUUYj.js";import"./navigation-right-arrow-D0CmuphO.js";import"./navigation-right-arrow-B4vNvT0x.js";import"./useCurrentTheme-CSv-SoqH.js";import"./index-D-CbqEME.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BuCIUNGJ.js";import"./paper-plane-C24W3EaW.js";import"./index-BRgqeqc7.js";import"./less-BGbU6Atk.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(r,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
`,o.jsx(e.h1,{id:"analyticaltable-plugin-useoncolumnresize",children:"AnalyticalTable Plugin: useOnColumnResize"}),`
`,o.jsx(p,{moduleName:"useOnColumnResize",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx(e.code,{children:"useOnColumnResize"}),` plugin hook allows firing a callback when a columns size has changed by dragging the "Resizer".
The first parameter is the callback itself (`,o.jsx(e.code,{children:"e: { columnWidth: number; header: Record<string, any> }) => void;"}),"), the second one are the optional ",o.jsx(e.code,{children:"options"})," for controlling how often the callback should fire."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"options"}),":"]}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"liveUpdate"}),": If ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),", the resize function will fire every time the width has changed depending on the ",o.jsx(e.code,{children:"options.wait"})," delay."]}),`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"wait"}),": The number of milliseconds for which the calls are to be delayed. ",o.jsxs(e.strong,{children:["Defaults to ",o.jsx(e.code,{children:"100"})]}),". (Only has an effect if ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),")"]}),`
`]}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(m,{sourceState:"none",of:l}),`
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
`,o.jsx(s,{})]})}function Eo(i={}){const{wrapper:e}={...n(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{Eo as default};
