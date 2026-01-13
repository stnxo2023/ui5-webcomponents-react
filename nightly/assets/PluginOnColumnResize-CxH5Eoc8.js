import{j as o}from"./iframe-BkU8WQpb.js";import{useMDXComponents as n}from"./index-BeG8GrN5.js";import{I as r,F as m}from"./CommandsAndQueries-DetvrItO.js";import{M as p,C as s}from"./blocks-CLMMfPPt.js";import"./Tag-Cih70sHI.js";import"./index-DnBqZpyB.js";import"./copy-B4HTDbaZ.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BvLI3kX2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dj6CZlQQ.js";import"./index-f6jDEWAh.js";import"./index-eFI2U8Up.js";import"./Link-DLFy93gF.js";import"./index-D4xCyo8q.js";import"./index-DWR5LsZZ.js";import"./index-BysDONg4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Fp7idO2l.js";import"./addCustomCSSWithScoping-CehjyWVu.js";import"./index-DATmYB4_.js";import"./information-CjNccefj.js";import"./sys-enter-2-RLTSxo4s.js";import"./alert-DdBYY2qU.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CsenYKF8.js";import"./delete-B_OD3K68.js";import"./settings-CJS1NR3M.js";import"./NoData-AjIR6FXV.js";import"./IllustratedMessage-DUpdSioN.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DmtWxoyx.js";import"./index-B_Lo1ajO.js";import"./index-CRA6hnYw.js";import"./slim-arrow-down-BTmhvktL.js";import"./Input-LLlRvrNn.js";import"./ResponsivePopoverCommon.css-NpFXxOXP.js";import"./ValueStateMessage.css-BdFRF0eK.js";import"./Suggestions.css-Dl4BPrxO.js";import"./ListBoxItemGroupTemplate-DEE5SIID.js";import"./ComboBoxItemGroup-BWN-cMPv.js";import"./ListItemBaseTemplate-B2kevfSs.js";import"./Token-BQND7Ztt.js";import"./ScrollEnablement-BpahqvCY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BgczD3q6.js";import"./ToggleButton-CDkfCjtp.js";import"./SuggestionItem-CrbDQNDp.js";import"./index-BCLLjiA_.js";import"./Option-DModAxyu.js";import"./index-CXuec-HL.js";import"./SegmentedButton-DfLnf31k.js";import"./index-D4IOGR9a.js";import"./Select-D4yKPFL9.js";import"./InvisibleMessage-52jPagfA.js";import"./slim-arrow-down-CpyZ1Zfr.js";import"./index-B49HkTlG.js";import"./index-DHOtv1YS.js";import"./index-v2LmQFFt.js";import"./index-D2fRocR2.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DhKFVNcX.js";import"./group-2-CYuJGq9D.js";import"./sort-descending-GfYRxa9q.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BqWvECKK.js";import"./utils-CekyTbg1.js";import"./index-BJRBwXE4.js";import"./index-Fsnq8hnt.js";import"./index-lT6ku5Z4.js";import"./navigation-down-arrow-CfiNm6dT.js";import"./navigation-right-arrow-UY7xGVP3.js";import"./navigation-right-arrow-DgO3Fp25.js";import"./useCurrentTheme-hKMovh50.js";import"./index-Dm5lGjM9.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DlWYfZgO.js";import"./paper-plane-DxMEXvmI.js";import"./index-D1dGw7D4.js";import"./less-DRAo-dZd.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
