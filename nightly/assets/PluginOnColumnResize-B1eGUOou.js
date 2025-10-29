import{j as o}from"./iframe-D1jKIypo.js";import{useMDXComponents as n}from"./index-M1_DZHmj.js";import{I as r,F as m}from"./CommandsAndQueries-BkaxH0BE.js";import{M as p,C as s}from"./blocks-BvvvBGFc.js";import"./Tag-BqsbpO_s.js";import"./index-ClSanEKt.js";import"./copy-DgqWK_AB.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BxN-8nyj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BBeTD3z6.js";import"./index-T4x6aH8D.js";import"./index-DHEWI2kL.js";import"./Link-BTNp59uu.js";import"./index-C7kBl8gS.js";import"./index-BKZiIOM7.js";import"./index-D6PVc_6_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DRCEREPf.js";import"./addCustomCSSWithScoping-BmLQ2iz1.js";import"./index-C56hzs5D.js";import"./information-B8vikb0m.js";import"./sys-enter-2-DByg53Ih.js";import"./alert-D9Mn7721.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bisacz7e.js";import"./delete-DBpx9Uar.js";import"./settings-DT6vtujH.js";import"./NoData-Dbt8BAMA.js";import"./IllustratedMessage-Cc1RezPx.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-BxR36E9a.js";import"./index-DMuI27Hv.js";import"./index-Cg8oYFax.js";import"./slim-arrow-down-GqbbmAYy.js";import"./Input-D4NDzfB_.js";import"./ResponsivePopoverCommon.css-DN-Rc-d6.js";import"./ValueStateMessage.css-CbVwogXq.js";import"./Suggestions.css-BT6tIfnI.js";import"./ListBoxItemGroupTemplate-DH951dKz.js";import"./ComboBoxItemGroup-BkDWNxnF.js";import"./ListItemBaseTemplate-Cb9CjRMA.js";import"./Token-Bx0zxJB1.js";import"./ScrollEnablement-Duxr6xMC.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DQRvO6kb.js";import"./ToggleButton-BC4YqGk8.js";import"./SuggestionItem-DisQaTGu.js";import"./index-Bbr0CVuQ.js";import"./Option-C3-dRc9X.js";import"./index-v4ksQ3mX.js";import"./SegmentedButton-Bi6AlYab.js";import"./index-Dhc01gl4.js";import"./Select-DLU6kJay.js";import"./InvisibleMessage-DNz0AAuG.js";import"./slim-arrow-down-CPVmWMXv.js";import"./index-DtOdn5nS.js";import"./index-B0YcVQvO.js";import"./index-lQPSd5CQ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BDm3RZ5s.js";import"./group-2-sEBl_tJy.js";import"./sort-descending-CHOZqwWH.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CmFHmOLh.js";import"./utils-BMxMzzUu.js";import"./index-9CYjSZBT.js";import"./index-C-bA5g6R.js";import"./index-eeZV0lom.js";import"./navigation-down-arrow-WO_dZjFi.js";import"./navigation-right-arrow-BFrOVRzy.js";import"./navigation-right-arrow-Ct4noKTB.js";import"./useCurrentTheme-BD5qUSES.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C01Owi4P.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Ds7nh71L.js";import"./paper-plane-DnsrmLa8.js";import"./index-XD1hamhe.js";import"./less-uxHdLqH7.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
