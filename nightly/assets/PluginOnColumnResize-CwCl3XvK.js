import{j as o}from"./iframe-BCeV4J61.js";import{useMDXComponents as n}from"./index-DQSXUrY-.js";import{I as r,F as m}from"./CommandsAndQueries-BMt6Du51.js";import{M as p,C as s}from"./blocks-BaqdfAa9.js";import"./Tag-Bzl_4yyv.js";import"./index-DSCCKcvn.js";import"./copy-BLLS_Koh.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-p2TBitSL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D6AOhQcP.js";import"./index-BqI0DRaf.js";import"./index-CTun36xm.js";import"./Link-C83i_H7y.js";import"./index-BaMmnI_0.js";import"./index-Dd7n1xMP.js";import"./index-C_9CrSf5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-xuzVGY3l.js";import"./addCustomCSSWithScoping-Bz6BhAjV.js";import"./index-MH0uXub1.js";import"./information-DsxmrLjJ.js";import"./sys-enter-2-DTJ11PLs.js";import"./alert-BPfUUxXP.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DepvYq9l.js";import"./delete-DVWCX9kC.js";import"./settings-CsQavQXZ.js";import"./NoData-B5oeo5kD.js";import"./IllustratedMessage-KukoJbKs.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-BPCWQtRS.js";import"./index-CoJmn4Yy.js";import"./index-DWP4Fzr6.js";import"./slim-arrow-down-BbmvWyWt.js";import"./Input-BdR3eabn.js";import"./ResponsivePopoverCommon.css-C2w1fqZM.js";import"./ValueStateMessage.css-CWUCP2jh.js";import"./Suggestions.css-Jm5XbPUR.js";import"./ListBoxItemGroupTemplate-DoQGXH2K.js";import"./ComboBoxItemGroup-SSqFciiI.js";import"./ListItemBaseTemplate-B-HxI0mr.js";import"./Token-CVeMAn7C.js";import"./ScrollEnablement-D6HdbXM3.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CtPLPajr.js";import"./ToggleButton-cGf9jpQr.js";import"./SuggestionItem-lE3aTa1o.js";import"./index-Cuu5RXhJ.js";import"./Option-O-FsfY6r.js";import"./index-e3RQM6ba.js";import"./SegmentedButton-YPERwD_1.js";import"./index-BVgvpLqI.js";import"./Select-BDp6Bw0F.js";import"./InvisibleMessage-D4FAyCwP.js";import"./slim-arrow-down-ClrsC2ro.js";import"./index-BxOecRVs.js";import"./index-Ch8eD88C.js";import"./index-DaqBjD0S.js";import"./index-J52IetZK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-H3EEYKpA.js";import"./group-2-DnxmYItq.js";import"./sort-descending-B08sQLL8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-pwQzdFN3.js";import"./utils-CsNciHqm.js";import"./index-jccjEr8p.js";import"./index-DYxx-EtR.js";import"./index-BkYe_VJy.js";import"./navigation-down-arrow-BlqpuI4E.js";import"./navigation-right-arrow-ClXC1YSw.js";import"./navigation-right-arrow-B8F7f_GM.js";import"./useCurrentTheme-8k0wl0rJ.js";import"./index-aypRBSpr.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BbNqKuvZ.js";import"./paper-plane-BDKzrgnv.js";import"./index-CvRy4k66.js";import"./less-0SXq5Fj1.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
