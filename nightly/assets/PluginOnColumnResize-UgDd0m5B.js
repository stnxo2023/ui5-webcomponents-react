import{j as o}from"./iframe-C8JI7dEI.js";import{useMDXComponents as n}from"./index-Dy3dbavl.js";import{I as r,F as m}from"./CommandsAndQueries-CAJp8baB.js";import{M as p,C as s}from"./blocks-dOc4ZvhQ.js";import"./Tag-Bh9-KKtm.js";import"./index-BEdzbacm.js";import"./copy-vzDhs336.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DNrBsuYV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bk0DUMEL.js";import"./index-BeiYD_4I.js";import"./index-B3nw03BL.js";import"./Link-g_43hnwI.js";import"./index-x3EANzLS.js";import"./index-DM_OMODM.js";import"./index-BQN-IPa2.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DOnTZlr2.js";import"./addCustomCSSWithScoping-CSnh5KZm.js";import"./index-g7zsKBLX.js";import"./information-DGVxJHTG.js";import"./sys-enter-2-iEzb33ry.js";import"./alert-BG5FVPBd.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DfyBeYJW.js";import"./delete-CkvGN4OZ.js";import"./settings-DTnV51pQ.js";import"./NoData-C4moVh3C.js";import"./IllustratedMessage-Dz_KDnet.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BfTOhDS6.js";import"./index-DUcLpr5Z.js";import"./index-NkzgGKyJ.js";import"./slim-arrow-down-BHxd8Vqs.js";import"./Input-CWkKGtsV.js";import"./ResponsivePopoverCommon.css-CM_pgGQI.js";import"./ValueStateMessage.css-CpDWY9cw.js";import"./Suggestions.css-gOeHYbiv.js";import"./ListBoxItemGroupTemplate-CWnRQTn9.js";import"./ComboBoxItemGroup-DbaEJT2y.js";import"./ListItemBaseTemplate-DZdo7lxN.js";import"./Token-BGcNiMJN.js";import"./ScrollEnablement-C16y6Z4B.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-nR7zaAP7.js";import"./ToggleButton-CBJChvXE.js";import"./SuggestionItem-DQgH2h9g.js";import"./index-DVcqEpTx.js";import"./Option-CZqJWi3Y.js";import"./index-BQdPAoWH.js";import"./SegmentedButton-BRjgQDpe.js";import"./index-FYP3kV_G.js";import"./Select-CnZcEXKA.js";import"./InvisibleMessage-CdXIl2K3.js";import"./slim-arrow-down-D-3Ia4oG.js";import"./index-mMTThdtc.js";import"./index-Ca9TsDXb.js";import"./index-Cj7dIYUI.js";import"./index-B0N44tcI.js";import"./IconDesign-DXd8PPVF.js";import"./filter-6QwyGlxR.js";import"./group-2-BS-n-QGS.js";import"./sort-descending-DJuTnB3z.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CNbH8ce-.js";import"./utils-DR9e_77z.js";import"./index-Deuc0gVb.js";import"./index-BM_FCtPz.js";import"./index-Cg6f3q8s.js";import"./navigation-down-arrow-B0wv2RPc.js";import"./navigation-right-arrow-UvdD6bou.js";import"./navigation-right-arrow-CwFJJrbP.js";import"./useCurrentTheme-CgmTzasZ.js";import"./index-Ccr8UAcd.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DK7LFoXt.js";import"./paper-plane-jP92lQH-.js";import"./index-ISXhP0ey.js";import"./less-zqCYDGGq.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
