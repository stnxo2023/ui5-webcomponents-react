import{j as o}from"./iframe-DBm0KKUf.js";import{useMDXComponents as n}from"./index-Cb8BN12q.js";import{I as r,F as m}from"./CommandsAndQueries-CpqOMU0z.js";import{M as p,C as s}from"./blocks-FcKewvzz.js";import"./Tag-DHtv4MjB.js";import"./index-D7OJqnCE.js";import"./copy-CNODe6O-.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BLgNBJMA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C_dJ2uG6.js";import"./index-DSRVWdNr.js";import"./index-4ENMwVth.js";import"./Link-Ct9C2jWR.js";import"./index-T96p6BIB.js";import"./index-DM0eg3qI.js";import"./index-Ccfulnyg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BPyGpBqG.js";import"./addCustomCSSWithScoping-DI0oMdV8.js";import"./index-BAUdr3me.js";import"./information-BXDVlLxS.js";import"./sys-enter-2-B25DXxek.js";import"./alert-ia9fKkJ9.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B_Jzu1HO.js";import"./delete-BY36aH4u.js";import"./settings-CQc9w4bD.js";import"./NoData-CViU0Ozk.js";import"./IllustratedMessage-MjiMC3xO.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-eL9Z4FLY.js";import"./index-De7LfL69.js";import"./index-D_cxxf2Z.js";import"./slim-arrow-down-Cowwh0_-.js";import"./Input-Cfy0dJpQ.js";import"./ResponsivePopoverCommon.css-CRVvh9cv.js";import"./ValueStateMessage.css-C2gzUKxC.js";import"./Suggestions.css-DL6rQFj9.js";import"./ListBoxItemGroupTemplate-BZry8l0p.js";import"./ComboBoxItemGroup-CFPpIkre.js";import"./ListItemBaseTemplate-szCNoKvB.js";import"./Token-DTTQs5IV.js";import"./ScrollEnablement-BmlbbPDx.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BCbp7Udb.js";import"./ToggleButton-Mf6uWEVu.js";import"./SuggestionItem-C7a_40Ak.js";import"./index-DynyRFQt.js";import"./Option-CiNmJ5BU.js";import"./index-BwSqZNPb.js";import"./SegmentedButton-BZBdQYL3.js";import"./index-DokMIoCV.js";import"./Select-BWNl-hA7.js";import"./InvisibleMessage-yauS0ttk.js";import"./slim-arrow-down-DTR_Gkm6.js";import"./index-BTj_7a8m.js";import"./index-BWmDHky_.js";import"./index-CvZtp7o3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BaMtSB4y.js";import"./group-2-DOmGtWHP.js";import"./sort-descending-hllpiI0c.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BuVBMWqW.js";import"./utils-CYtcnYeu.js";import"./index-D1sExh_N.js";import"./index-SQvWNwud.js";import"./index-CfFC_XPL.js";import"./navigation-down-arrow-CsEzXbPX.js";import"./navigation-right-arrow-Cdvo4nV_.js";import"./navigation-right-arrow-CbShz5Fd.js";import"./useCurrentTheme-BKGNtfIr.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D2OeM_OL.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DB-7ieif.js";import"./paper-plane-C7mdkPbA.js";import"./index-Cm-cbULR.js";import"./less-CYPnM2pk.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
