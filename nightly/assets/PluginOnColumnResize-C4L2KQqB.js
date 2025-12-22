import{j as o}from"./iframe-BsSawXP0.js";import{useMDXComponents as n}from"./index-DRH2teYu.js";import{I as r,F as m}from"./CommandsAndQueries-iaa-8XF0.js";import{M as p,C as s}from"./blocks-CXfuXrzt.js";import"./Tag-CNlUSOaG.js";import"./index-Dmc2-Gsy.js";import"./copy-DbiVl2cO.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DLYXARwu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DXS7E1yl.js";import"./index-BhcqlC9n.js";import"./index-Crhu2fjF.js";import"./Link-DnipqSX8.js";import"./index-ZJs7Cg1o.js";import"./index-ButdZwwN.js";import"./index-CaYKw0vF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Czipwrtn.js";import"./addCustomCSSWithScoping-BEgtXhqx.js";import"./index-BP2Csnbb.js";import"./information-BFVQ2hiO.js";import"./sys-enter-2-BXLoixfD.js";import"./alert-KY-hq2Su.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CEZH4ER0.js";import"./delete-ButlRKIL.js";import"./settings-DgaBkmev.js";import"./NoData-DyY0YPHN.js";import"./IllustratedMessage-DkFb21Jf.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-COTCkDuw.js";import"./index-Clu4yb0B.js";import"./index-CM8zKut5.js";import"./slim-arrow-down-BWzEg3vj.js";import"./Input-CHK-azg7.js";import"./ResponsivePopoverCommon.css-BuCRiGSq.js";import"./ValueStateMessage.css-CxbYYYMV.js";import"./Suggestions.css-DdsM6PD2.js";import"./ListBoxItemGroupTemplate-B-3mDJyE.js";import"./ComboBoxItemGroup-Dw_d3sOW.js";import"./ListItemBaseTemplate-CDcS09wQ.js";import"./Token-HmaRVBR5.js";import"./ScrollEnablement-D01WJw12.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DOvPo6gu.js";import"./ToggleButton-CxUiYm3U.js";import"./SuggestionItem-CbONpgrM.js";import"./index-BPcqLkVl.js";import"./Option-4QxAwSib.js";import"./index-DjGN7Yic.js";import"./SegmentedButton-gHDmBFsf.js";import"./index-BDNR9QnW.js";import"./Select-oYRWGBUT.js";import"./InvisibleMessage-B4KGUE1s.js";import"./slim-arrow-down-CJL4Ie8a.js";import"./index-BfglwwIM.js";import"./index-DtFzJEN2.js";import"./index-BsGDlDgM.js";import"./index-Weu8oCaJ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BanJ6C6c.js";import"./group-2-B-E_bDzf.js";import"./sort-descending-Cvr30z_m.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BSbJCBkK.js";import"./utils-D1-fGTJi.js";import"./index-DPM6PqHk.js";import"./index-BZY_Xaz9.js";import"./index-DG65F-rj.js";import"./navigation-down-arrow-CQzMrHK9.js";import"./navigation-right-arrow-Ezz6Fe0V.js";import"./navigation-right-arrow-PF4vsXVe.js";import"./useCurrentTheme-DCDo5qP3.js";import"./index-Cl3MWrIl.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D81DTT8f.js";import"./paper-plane-nbV5jTsh.js";import"./index-Cbnxib-d.js";import"./less-D0n2-PF4.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
