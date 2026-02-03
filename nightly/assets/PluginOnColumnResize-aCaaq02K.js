import{j as o}from"./iframe-CL0E0PWh.js";import{useMDXComponents as n}from"./index-Deybi7Kf.js";import{I as r,F as m}from"./CommandsAndQueries-CS7a2Ny4.js";import{M as p,C as s}from"./blocks-D7bkOkCE.js";import"./Tag-DqkevlzV.js";import"./index-CnAIuZ6O.js";import"./copy-ZUxcJ4wZ.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DzqTEMVF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CjZThSgP.js";import"./index-ChvCHLyh.js";import"./index-DKGx2Tou.js";import"./Link-opqw9zLH.js";import"./index-BmAVbjyV.js";import"./index-DNHIOaVp.js";import"./index-BjeAAycA.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C2NuoADq.js";import"./addCustomCSSWithScoping-nc0b1DpN.js";import"./index-CDhMu5B6.js";import"./information-B3nD7cls.js";import"./sys-enter-2-C4Y2Nq9D.js";import"./alert-Dw8v7tUg.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CnAxgAVj.js";import"./delete-CEucf5yG.js";import"./settings-DZKOIFbW.js";import"./NoData-El9prw2w.js";import"./IllustratedMessage-D0QYzomd.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DQRO6FcQ.js";import"./index-CghszLxp.js";import"./index-BbltPikc.js";import"./slim-arrow-down-DhSa9dLQ.js";import"./Input-DUkmGF5S.js";import"./ResponsivePopoverCommon.css-CGTYgw9i.js";import"./ValueStateMessage.css-C7zqpLFs.js";import"./Suggestions.css-D1MvItNb.js";import"./ListBoxItemGroupTemplate-DduLgS-n.js";import"./ComboBoxItemGroup-B3VqZwL7.js";import"./ListItemBaseTemplate-DcYxvehU.js";import"./Token-CHhkGCwz.js";import"./ScrollEnablement-DJDUaKRX.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BFyRiZ3I.js";import"./ToggleButton-nPzNF8JZ.js";import"./SuggestionItem-dwEDuAnB.js";import"./index-CWugch4w.js";import"./Option-YfFjlyIk.js";import"./index-ChNtVMH3.js";import"./SegmentedButton-BGPljDMM.js";import"./index-DuGAOmpy.js";import"./Select-BcB_Egz7.js";import"./InvisibleMessage-To8J9FEL.js";import"./slim-arrow-down-DsQgB3Sq.js";import"./index-Bw1B3i5S.js";import"./index-BvecTUj_.js";import"./index-CWBSa9lg.js";import"./index-DyNXbAXI.js";import"./IconDesign-DXd8PPVF.js";import"./filter-pPFeO57V.js";import"./group-2-DswFkUgQ.js";import"./sort-descending-Cp4PHVoq.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BFAZrbzu.js";import"./utils-C6v86EjJ.js";import"./index-xBWwCLsb.js";import"./index-Ds_mffnJ.js";import"./index-CSOTLQaF.js";import"./navigation-down-arrow-BBpx7i5v.js";import"./navigation-right-arrow-BtI6edzV.js";import"./navigation-right-arrow-BjmboBdq.js";import"./useCurrentTheme-BWHA45hS.js";import"./index-E4EGWXgk.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-g6jee3iH.js";import"./paper-plane-9DGcdM4H.js";import"./index-CwsNlV8s.js";import"./less-DCgV-mbR.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
