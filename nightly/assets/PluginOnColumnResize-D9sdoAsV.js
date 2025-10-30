import{j as o}from"./iframe-JkIS1XbA.js";import{useMDXComponents as n}from"./index-s0dX5IQa.js";import{I as r,F as m}from"./CommandsAndQueries-t8PqdBYw.js";import{M as p,C as s}from"./blocks-DIFA4jfF.js";import"./Tag-CGYuzpRX.js";import"./index-Cki6PEzP.js";import"./copy-BpEy4GT_.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-zqPKIr8k.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CcRV2upd.js";import"./index-If9QK12V.js";import"./index-Cc6IDcWO.js";import"./Link-C8ljX_Jl.js";import"./index-BJe_Ldbq.js";import"./index-CIULjnJw.js";import"./index-D4k933VY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C6BvO_Mx.js";import"./addCustomCSSWithScoping-OrJPV9ed.js";import"./index-wV8mgQwM.js";import"./information-8O35dRa_.js";import"./sys-enter-2-BwjA-U8a.js";import"./alert-0nYrX8QQ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CXT2Cgk-.js";import"./delete-CIhDQEzl.js";import"./settings-D4GDgni6.js";import"./NoData-CGi4XDkU.js";import"./IllustratedMessage-Wq2Ul-i9.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-CeWFzWKq.js";import"./index-Ce7dmWA4.js";import"./index-DTso7Ssf.js";import"./slim-arrow-down-CxdQbgux.js";import"./Input-DAygltfI.js";import"./ResponsivePopoverCommon.css-DalBzcK6.js";import"./ValueStateMessage.css-DB31QG7j.js";import"./Suggestions.css-DDSHaogF.js";import"./ListBoxItemGroupTemplate-CU0DT1IQ.js";import"./ComboBoxItemGroup-spyevgsi.js";import"./ListItemBaseTemplate-DG-Nk2uN.js";import"./Token-BuJPwVWP.js";import"./ScrollEnablement-DgEc-4I0.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CBW51XFx.js";import"./ToggleButton-BQDsMvuW.js";import"./SuggestionItem-DcE8EEE7.js";import"./index-DRdjcI3a.js";import"./Option-BPjQvE5p.js";import"./index-D3fBZPmN.js";import"./SegmentedButton-ChWUymxG.js";import"./index-DdxRipET.js";import"./Select-DtPi2w1p.js";import"./InvisibleMessage-B2BhAQgi.js";import"./slim-arrow-down-DRq74hAW.js";import"./index-C-SFTGz_.js";import"./index-BgRffrdt.js";import"./index-bz7pM8qx.js";import"./IconDesign-DXd8PPVF.js";import"./filter-upsf-FbF.js";import"./group-2-B13YNGeD.js";import"./sort-descending-jvCE5ooF.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dk01B-cJ.js";import"./utils-OzEeB7Yk.js";import"./index-TTqlvXZi.js";import"./index-Y6bQjObX.js";import"./index-D0XJ_zxW.js";import"./navigation-down-arrow-BloNf-Qp.js";import"./navigation-right-arrow-D5wlsInA.js";import"./navigation-right-arrow-C2s_1KE8.js";import"./useCurrentTheme-DyiO6FGA.js";import"./IndicationColor-DVw-fSM_.js";import"./index-yDwJ49Kg.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-3MqpM2h7.js";import"./paper-plane-FRWsPWej.js";import"./index-by9B6z8d.js";import"./less-B2UjUmjt.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
