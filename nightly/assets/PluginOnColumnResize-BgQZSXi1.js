import{j as o}from"./iframe-D_CdPJGB.js";import{useMDXComponents as n}from"./index-CU-ptlAE.js";import{I as r,F as m}from"./CommandsAndQueries-mK8OCXMD.js";import{M as p,C as s}from"./blocks-CCtPO9cz.js";import"./Tag-Bp64ITEl.js";import"./index-DvHG4NxR.js";import"./copy-BADAjupU.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DYjJZZgv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CZ_x4nC8.js";import"./index-px1zqH5W.js";import"./index-BjO8dbVD.js";import"./Link-D2G2Fur_.js";import"./index-rQn5W4JD.js";import"./index-BtAl8RaU.js";import"./index-Bp0lp_Bf.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CAznTGJj.js";import"./addCustomCSSWithScoping-CCFJUFLD.js";import"./index-C4kKrQ_A.js";import"./information-D72qH7xY.js";import"./sys-enter-2-hXCOpqjq.js";import"./alert-DtWkY9xa.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D_IhUX-d.js";import"./delete-7Ml3hpJC.js";import"./settings-zWMvdB3T.js";import"./NoData-B6osxBGy.js";import"./IllustratedMessage-BSFIsl3K.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-mv1-qqSd.js";import"./index-DdLYl7JB.js";import"./index-DU-QIP1X.js";import"./slim-arrow-down-DjB7mIxL.js";import"./Input-DDlyZUe3.js";import"./ResponsivePopoverCommon.css-BLJDaaVS.js";import"./ValueStateMessage.css-BCduw_aJ.js";import"./Suggestions.css-BidsuWHC.js";import"./ListBoxItemGroupTemplate-xzts4k2L.js";import"./ComboBoxItemGroup-CHXVN60o.js";import"./ListItemBaseTemplate-DxdVRh6Y.js";import"./Token-C48gjgFU.js";import"./ScrollEnablement-DdqyZen4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CKWpRsaf.js";import"./ToggleButton-D2rDUs9L.js";import"./SuggestionItem-DDpzUX_W.js";import"./index-B4aMp4lg.js";import"./Option-DUZ1b-TT.js";import"./index-B2ct1whH.js";import"./SegmentedButton-Do-ayQ2t.js";import"./index-D1WIrmAT.js";import"./Select-6cSgUjJb.js";import"./InvisibleMessage-C5We_rGd.js";import"./slim-arrow-down-CHdhic0E.js";import"./index-B4pCbKOH.js";import"./index-CVUQsMX1.js";import"./index-DPMPQ5O6.js";import"./index-DcE2qBtK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DlD1QirN.js";import"./group-2-Dor_fq4O.js";import"./sort-descending-DgbKssf5.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-L2EXVoeb.js";import"./utils-BUKq5qYC.js";import"./index-DKu9DJJF.js";import"./index-BV1E9Rhs.js";import"./index-BylnBWRJ.js";import"./navigation-down-arrow-DunPFpLG.js";import"./navigation-right-arrow-BwWM6KQQ.js";import"./navigation-right-arrow-D3e7CxpK.js";import"./useCurrentTheme-C6BNKx_P.js";import"./index-DeJpfMkF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D_nqdA78.js";import"./paper-plane-DQ1C_A2n.js";import"./index-BQbEiE4i.js";import"./less-bDMIhIOC.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
