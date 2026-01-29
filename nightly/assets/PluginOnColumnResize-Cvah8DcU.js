import{j as o}from"./iframe-Qn10Vv46.js";import{useMDXComponents as n}from"./index-Dn_QNZXe.js";import{I as r,F as m}from"./CommandsAndQueries-BS5w0Fww.js";import{M as p,C as s}from"./blocks-CqvMe-zP.js";import"./Tag-D88IrP9Y.js";import"./index-CPne16Vl.js";import"./copy-CASyM-HB.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-H3_QwZfA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-1Dq2e1Fv.js";import"./index-D9ZF8-N2.js";import"./index-u07ulNkL.js";import"./Link-B9oRKMRP.js";import"./index-Btsu4EzQ.js";import"./index-D7W_CU3P.js";import"./index-Qf4zPxvx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DyNR1Lsa.js";import"./addCustomCSSWithScoping-BMEnUHPm.js";import"./index-BCXe2PbY.js";import"./information-BED9_Z-O.js";import"./sys-enter-2-DmPWvQNd.js";import"./alert-CtILWS1T.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DDGW3LlO.js";import"./delete-CwMLkwBl.js";import"./settings-D3w6QaCp.js";import"./NoData-DlAD3CDh.js";import"./IllustratedMessage-B5PXEdvM.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-D1-NKvrK.js";import"./index-DAtiHyZC.js";import"./index-BTxgNax-.js";import"./slim-arrow-down-DStIyIYv.js";import"./Input-JG6KYeb2.js";import"./ResponsivePopoverCommon.css-D30PmpG6.js";import"./ValueStateMessage.css-B1tOkt9X.js";import"./Suggestions.css-AZtlnByU.js";import"./ListBoxItemGroupTemplate-Ck_Tg_1E.js";import"./ComboBoxItemGroup-X4WYLtK7.js";import"./ListItemBaseTemplate-aIA1KjTO.js";import"./Token-B8pCzhwp.js";import"./ScrollEnablement-BI5-jdZK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bar0KGH4.js";import"./ToggleButton-CRT5W38j.js";import"./SuggestionItem-D11zz-CY.js";import"./index-CP1thd2f.js";import"./Option-C4JrqG_U.js";import"./index-C8dYCS08.js";import"./SegmentedButton-DrQ4e9ne.js";import"./index-BUBbEq2D.js";import"./Select-DLuDF3wk.js";import"./InvisibleMessage-BlyETXSd.js";import"./slim-arrow-down-BRQZce7U.js";import"./index-XwrFFEKH.js";import"./index-BXul6roJ.js";import"./index-BakmgRez.js";import"./index-BmRC0J2V.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DMRvgaWs.js";import"./group-2-C_NGD824.js";import"./sort-descending-BFLjgKM6.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DHB3H4fo.js";import"./utils-B-v7HQ2f.js";import"./index-B6IRXIFn.js";import"./index-BWjiDXwP.js";import"./index-7awi3J8u.js";import"./navigation-down-arrow-Coc2XK-B.js";import"./navigation-right-arrow-C5N9ABfy.js";import"./navigation-right-arrow-DMix7vwu.js";import"./useCurrentTheme-D9dDzE9L.js";import"./index-Bo0yjZ_x.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-0Grxk9f4.js";import"./paper-plane-Cf20vZx7.js";import"./index-BADkrGDt.js";import"./less-DtkLr4vn.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
