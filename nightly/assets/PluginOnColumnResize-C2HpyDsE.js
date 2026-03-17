import{j as o}from"./iframe-CGE6jX6t.js";import{useMDXComponents as r}from"./index-CnlF4PpM.js";import{I as n}from"./CommandsAndQueries-D_JGI6Ia.js";import{M as m,C as p}from"./blocks-C1wugZAv.js";import"./Tag-BT7c2k9t.js";import"./index-O5K3XRBn.js";import"./copy-ByAfyVz0.js";import{F as s}from"./Footer-BebX2FrJ.js";import"./PageNotFound-gkdNug7A.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DN55SoRt.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-B734PLKt.js";import"./index-D1hVPzQS.js";import"./index-WD-xjM3p.js";import"./index-DuWDlj0H.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-jWRCnrak.js";import"./addCustomCSSWithScoping-Bg1A5NWS.js";import"./index-CMs90z2F.js";import"./index-D4AJb6hG.js";import"./index-Bx2-sARl.js";import"./information-DjCg2NR8.js";import"./sys-enter-2-WI9s45tq.js";import"./alert-DkCV9tpB.js";import"./index-bjWm1Qbv.js";import"./Illustrations-DcoINpXf.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BdAOa6pX.js";import"./delete-DVSEwasX.js";import"./settings-DyAuU0nR.js";import"./NoData-BsxYtnRh.js";import"./NoFilterResults-C4DrdCVU.js";import"./index-CoW4a81M.js";import"./IllustratedMessage-Dlxr7mI5.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-lo9U6rw5.js";import"./Input-WMBW16LC.js";import"./ResponsivePopoverCommon.css-BdAey9nW.js";import"./ValueStateMessage.css-CXantPrh.js";import"./Suggestions.css-C3jx0r5H.js";import"./ListBoxItemGroupTemplate-CmwMoQVG.js";import"./ComboBoxItemGroup-Bc-DIORN.js";import"./ListItemBaseTemplate-Dx7gl5aW.js";import"./Token-CIFgetRy.js";import"./ScrollEnablement-CMpF8f9q.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dve_L83D.js";import"./ToggleButton-BmsIAL6q.js";import"./multiselect-all-C0EP75IP.js";import"./SuggestionItem-DkZnmDv0.js";import"./index-CUSQ5hC_.js";import"./Option-dcd03uYH.js";import"./index-CTUBFWCz.js";import"./SegmentedButton-d7mrBJIZ.js";import"./index-DG4Bts7Y.js";import"./Select-BMfjDvRC.js";import"./InvisibleMessage-DG05ioDr.js";import"./index-DGZZNJ5p.js";import"./index-D0Lm4r4_.js";import"./index-DFgUGNnk.js";import"./index-BF-516Y4.js";import"./IconDesign-DXd8PPVF.js";import"./filter-KLz0gUBW.js";import"./group-2-5QqJEoZA.js";import"./sort-descending-ghxeytqc.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CiV4PMwH.js";import"./utils-BLUFONTL.js";import"./index-gxg4Sry9.js";import"./index-BwLmagC2.js";import"./index-DouXrx1j.js";import"./navigation-down-arrow-EEiViiJ7.js";import"./navigation-right-arrow-DUtm-zLP.js";import"./navigation-right-arrow-DkDBuRJY.js";import"./useCurrentTheme-Ci3WGaWO.js";import"./index-CSbZISIN.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-sj-cJ_3l.js";import"./paper-plane-BxyaPnuX.js";import"./index-B-5DXRiN.js";import"./less-oZYALZR_.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
