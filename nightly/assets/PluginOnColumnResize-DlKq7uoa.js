import{j as o}from"./iframe-CJIrZBlB.js";import{useMDXComponents as n}from"./index-xKVU5ZCd.js";import{I as r,F as m}from"./CommandsAndQueries-C3g74-RT.js";import{M as p,C as s}from"./blocks-C-1O0LRm.js";import"./Tag-BNlwFAFY.js";import"./index-DmJ7zXRW.js";import"./copy-DR5Kv1Iv.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Coh8XRhB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BGOwz-CM.js";import"./index-YnpVhHMg.js";import"./index-CEkWgGTS.js";import"./Link-BElCP5h1.js";import"./index-BhZheF80.js";import"./index-DmwyQtvi.js";import"./index-BCwOIMZp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bf32rwnZ.js";import"./addCustomCSSWithScoping-CPo-hqqQ.js";import"./index-EdNUKN4_.js";import"./information-BaxJEMV7.js";import"./sys-enter-2-COh9WNy8.js";import"./alert-BkaLAKBd.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BA0xOeEx.js";import"./delete-C9vBXGAH.js";import"./settings-BAZbIl4B.js";import"./NoData-D1WCCIr-.js";import"./IllustratedMessage-BSOmXBM5.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-DvcJ3TrS.js";import"./index-2aQZOvza.js";import"./index-B5XNfqqK.js";import"./slim-arrow-down-CdpV3nE0.js";import"./Input-Btf27YOr.js";import"./ResponsivePopoverCommon.css-xGlWqU9B.js";import"./ValueStateMessage.css-MyCATZT_.js";import"./Suggestions.css-Cy-COfO3.js";import"./ListBoxItemGroupTemplate-DXkWU2-0.js";import"./ComboBoxItemGroup-CYzVMS6G.js";import"./ListItemBaseTemplate-C5F3HCqR.js";import"./Token-BNv4B9pp.js";import"./ScrollEnablement-CKbJdcjA.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CHoTFWQP.js";import"./ToggleButton-CFOd-MDd.js";import"./SuggestionItem-BI-IC1_F.js";import"./index-BOVwts_X.js";import"./Option-DuZb6gan.js";import"./index-DJqLFHqT.js";import"./SegmentedButton-D8Yf4_Qw.js";import"./index-BLHzNls7.js";import"./Select-D5EHVEMo.js";import"./InvisibleMessage-PB9O_FfW.js";import"./slim-arrow-down-BTXWHLy9.js";import"./index-CKVmIBse.js";import"./index-N6T3kPeD.js";import"./index-BPZe2Mw9.js";import"./IconDesign-DXd8PPVF.js";import"./filter-mMtT2jHR.js";import"./group-2-De9ft9J6.js";import"./sort-descending-BIwXsoMH.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DYDQ7rpc.js";import"./utils-CvOOfhDf.js";import"./index-DV5RwOKW.js";import"./index-Cfv_e0qb.js";import"./index-BKekFUxh.js";import"./navigation-down-arrow-B14ig-WM.js";import"./navigation-right-arrow-BtI2EckR.js";import"./navigation-right-arrow-CrzwDQrl.js";import"./useCurrentTheme-CJMp3CMu.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Dq6Z1nja.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Bb4BnNpy.js";import"./paper-plane-BzrDh65i.js";import"./index-D9LH8SsC.js";import"./less-Cb2Bvewk.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
