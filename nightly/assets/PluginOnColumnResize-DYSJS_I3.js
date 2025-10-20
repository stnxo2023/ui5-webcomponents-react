import{j as o}from"./iframe-7SE3nFh2.js";import{useMDXComponents as n}from"./index-C0FWbpZL.js";import{I as r,F as m}from"./CommandsAndQueries-BztwtTDr.js";import{M as p,C as s}from"./blocks-BJKQ4CAZ.js";import"./Tag-CAr8yJM3.js";import"./index-DcFj-mpl.js";import"./copy-CDZIXxHa.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-5KmaRjUl.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BdnA4cG1.js";import"./index-DZIYhziJ.js";import"./index-BH5SLEfd.js";import"./Link-DJshYrFL.js";import"./index-CJza0w__.js";import"./index-CHnd9ZVx.js";import"./index-cZBRAzkp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bx3Mb7HN.js";import"./addCustomCSSWithScoping-CrtLyOIc.js";import"./index-CZm6iJJ6.js";import"./information-CEHY-zK8.js";import"./sys-enter-2-Db6aMDI3.js";import"./alert-iGUotenY.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DX_cHiRh.js";import"./delete-DvpuJF5J.js";import"./settings-D2UzRPAT.js";import"./NoData-BCcG8w18.js";import"./IllustratedMessage-Dil2N_hm.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-CbSgwdhQ.js";import"./index-Bu5BEf5E.js";import"./index-CvKc0QoP.js";import"./slim-arrow-down-BERkBWfL.js";import"./Input-kEzXj9c6.js";import"./ResponsivePopoverCommon.css-DqKEq-kc.js";import"./ValueStateMessage.css-wZQPf3zp.js";import"./Suggestions.css-DT0Rp6yR.js";import"./ListBoxItemGroupTemplate-mAb34mFu.js";import"./ComboBoxItemGroup-D6FTKSzF.js";import"./ListItemBaseTemplate-bpaX827C.js";import"./Token-D_Njw8ms.js";import"./ScrollEnablement-u1O_vcM6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-5gZgEeYH.js";import"./ToggleButton-Cdz6JUWa.js";import"./SuggestionItem-Cqdhpmzk.js";import"./index-B9dV6-hD.js";import"./Option-CLrwwL2p.js";import"./index-eRJ2H-45.js";import"./SegmentedButton-Bj_PgquH.js";import"./index-CehLK0E0.js";import"./Select-dx2eK6Cc.js";import"./InvisibleMessage-BpijQ7HL.js";import"./slim-arrow-down-BKj1QpKR.js";import"./index-C_8wufNy.js";import"./index-DRT-RGQF.js";import"./index-Dx0AFnS0.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DlvRaiGC.js";import"./group-2-Bh0Ip3fO.js";import"./sort-descending-C2lI-VAa.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BzfZ0HZ7.js";import"./utils-7WkdhtMP.js";import"./index-Bk-K0ke_.js";import"./index-C14sIMtK.js";import"./index-r--j9iEI.js";import"./navigation-down-arrow-Bok7EDK6.js";import"./navigation-right-arrow-CSEs046N.js";import"./navigation-right-arrow-Cssv535x.js";import"./useCurrentTheme-CSmhjyR7.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DKaDhcRF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DTz5BFmM.js";import"./paper-plane-CNwDjI7Y.js";import"./index-dbJ2BFy5.js";import"./less-D_HisN9f.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
