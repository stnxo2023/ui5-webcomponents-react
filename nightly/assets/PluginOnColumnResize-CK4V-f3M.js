import{j as o}from"./iframe-CJJIsx6F.js";import{u as n,M as r,C as m}from"./blocks-ChaXMZP5.js";import{I as p}from"./CommandsAndQueries-B6BpCs-M.js";import"./Tag-n7rERTqv.js";import"./index-C3WbBMZ1.js";import"./copy-CS6obn2m.js";import{F as s}from"./Footer-Ce6by-oH.js";import"./PageNotFound-BtSzGq-G.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CwHhua2M.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-GrYjVq0T.js";import"./index-BAPIP2EX.js";import"./index-CiQC7Mcr.js";import"./index-DWaBFkkI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CLM_ccAB.js";import"./addCustomCSSWithScoping-DH49qo7-.js";import"./index-8nS7lmoC.js";import"./index-qLq9B_00.js";import"./index-Comgbi1p.js";import"./information-DHzv4rEq.js";import"./sys-enter-2-DxE2QBT2.js";import"./alert-BgdGP7JP.js";import"./index-DqWhINqr.js";import"./Illustrations-BhBoWAi4.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DjANczir.js";import"./delete-iBMBoW9R.js";import"./settings-DrDadmIh.js";import"./NoData-CLaEuyBQ.js";import"./NoFilterResults-DJwtRche.js";import"./index-CIOABHCP.js";import"./IllustratedMessage-D4RUR_cG.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-C7pW_ymX.js";import"./Input-DsafznTO.js";import"./ResponsivePopoverCommon.css-ChLB8_9T.js";import"./ValueStateMessage.css-BLjLq8yr.js";import"./Suggestions.css-CqX3de1P.js";import"./ListBoxItemGroupTemplate-BSinwIEf.js";import"./ComboBoxItemGroup-Bc4DlTLD.js";import"./ListItemBaseTemplate-DaxiMu7F.js";import"./Token-DL4JI-jm.js";import"./ScrollEnablement-BtkDzK2q.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BESL8Ob4.js";import"./ToggleButton-Cnr9P6yJ.js";import"./multiselect-all-Bskqp-LX.js";import"./SuggestionItem-Cs3GRJFE.js";import"./index-C6tjcKY2.js";import"./Option-BxB-PkjK.js";import"./index-DGKNIxXV.js";import"./SegmentedButton-Bzt45PRO.js";import"./index-CdhWGsJy.js";import"./Select-DE4i9rKp.js";import"./InvisibleMessage-Cyxze3uu.js";import"./index-DGPTSllW.js";import"./index-DXlSvPUQ.js";import"./index-CXnZMaCF.js";import"./index-JFvXmi3y.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bo9w-30o.js";import"./group-2-BSryHq49.js";import"./sort-descending-s0zyZhYG.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BGeA_s_w.js";import"./utils-D0vF-SRs.js";import"./index-CGyGuqHJ.js";import"./index-ChV5JXtw.js";import"./index-B5SvgXn6.js";import"./navigation-down-arrow-C4Sf-qtS.js";import"./navigation-right-arrow-DQC4L2-T.js";import"./navigation-right-arrow-BuD6ryaO.js";import"./useCurrentTheme-iJZHQfRw.js";import"./index-BHQcIWf-.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-1-FsbUZP.js";import"./paper-plane-BSxU-RyY.js";import"./index-BR1QDb9u.js";import"./less-BBBCDqSd.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(r,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
