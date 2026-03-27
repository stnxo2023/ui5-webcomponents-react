import{j as o}from"./iframe-Ra0xSmd4.js";import{useMDXComponents as r}from"./index-B1uewCO1.js";import{I as n}from"./CommandsAndQueries-BEtDWerI.js";import{M as m,C as p}from"./blocks-B8uzJZ3S.js";import"./Tag-vCzc8lpN.js";import"./index-DhDYAwwg.js";import"./copy-Cehqzola.js";import{F as s}from"./Footer-BXZI9V38.js";import"./PageNotFound-DAzm2SbT.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-ssQBIa1a.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-Cw9gqE6M.js";import"./index-UbhsERGe.js";import"./index-DxchSxRT.js";import"./index-BhvLG_bo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cr-PyOpa.js";import"./addCustomCSSWithScoping-CcLMh_2y.js";import"./index-CCqLDoAJ.js";import"./index-CiJZaHkZ.js";import"./index-Dh9i0xFK.js";import"./information-hzJ5lLQH.js";import"./sys-enter-2-weVfOb1a.js";import"./alert-BkoFHfp8.js";import"./index-BHry3UrI.js";import"./Illustrations-DuEXDQCv.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BzAfa2O0.js";import"./delete-BlJSnspk.js";import"./settings-CnhD6x-f.js";import"./NoData-BRWK73b6.js";import"./NoFilterResults-ByK9y8bo.js";import"./index-hlONtznb.js";import"./IllustratedMessage-DH81lWhH.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-DADJiQQB.js";import"./Input-hYN12Gd7.js";import"./ResponsivePopoverCommon.css-D79T12cj.js";import"./ValueStateMessage.css-BEyluAo8.js";import"./Suggestions.css-CZemgMCI.js";import"./ListBoxItemGroupTemplate-CkuipRkL.js";import"./ComboBoxItemGroup-BjqeHnC8.js";import"./ListItemBaseTemplate-DDF3F_sC.js";import"./Token-CsZP01nz.js";import"./ScrollEnablement-Dp-oqGSv.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CFffdE_7.js";import"./ToggleButton-BCMZO5K5.js";import"./multiselect-all-C9UpqjqM.js";import"./SuggestionItem-CRRSDxMr.js";import"./index-CgESqE8U.js";import"./Option-BToNbCEU.js";import"./index-BgXYskEj.js";import"./SegmentedButton-CdZJl0fK.js";import"./index-InyxuXtV.js";import"./Select-xNN_GioC.js";import"./InvisibleMessage-Nn0M2iFm.js";import"./index-CIhvul5w.js";import"./index-pIofiyof.js";import"./index-BBRryWn1.js";import"./index-C7nsWfZ0.js";import"./IconDesign-DXd8PPVF.js";import"./filter-7YCHc_s2.js";import"./group-2-BOcnnuw4.js";import"./sort-descending-Cgjiy5DM.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BodfA0Gi.js";import"./utils-BLx_e7Yk.js";import"./index-qcFZyMu_.js";import"./index-DYjZTUhi.js";import"./index-DjymOdJY.js";import"./navigation-down-arrow-BWhK4CvM.js";import"./navigation-right-arrow-eBw-UtsM.js";import"./navigation-right-arrow-Buva5oL1.js";import"./useCurrentTheme-BUBcvRiI.js";import"./index-mlILjk2I.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DQnXSe3U.js";import"./paper-plane-CivMq3tA.js";import"./index-BKI5E3Yv.js";import"./less-WQ1GwY14.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
`,o.jsx(e.h1,{id:"analyticaltable-plugin-useoncolumnresize",children:"AnalyticalTable Plugin: useOnColumnResize"}),`
`,o.jsx(n,{moduleName:"useOnColumnResize",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx(e.code,{children:"useOnColumnResize"}),` plugin hook allows firing a callback when a columns size has changed by dragging the "Resizer".
The first parameter is the callback itself (`,o.jsx(e.code,{children:"e: { columnWidth: number; header: Record<string, any> }) => void;"}),"), the second one are the optional ",o.jsx(e.code,{children:"options"})," for controlling how often the callback should fire."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"options"}),":"]}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"liveUpdate"}),": If ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),", the resize function will fire every time the width has changed depending on the ",o.jsx(e.code,{children:"options.wait"})," delay."]}),`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"wait"}),": The number of milliseconds for which the calls are to be delayed. ",o.jsxs(e.strong,{children:["Defaults to ",o.jsx(e.code,{children:"100"})]}),". (Only has an effect if ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),")"]}),`
`]}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(p,{sourceState:"none",of:l}),`
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
`,o.jsx(s,{})]})}function So(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{So as default};
