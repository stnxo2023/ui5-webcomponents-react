import{j as o}from"./iframe-DtD6gRbB.js";import{useMDXComponents as n}from"./index-BiO40HBX.js";import{I as r,F as m}from"./CommandsAndQueries-B26crKtq.js";import{M as p,C as s}from"./blocks-Ck7wLHdk.js";import"./Tag-CPFNFbnr.js";import"./index-BiosTbTI.js";import"./copy-DKyeVOxg.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Dmah3EWF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BSRohzC4.js";import"./index-CRlMy3bg.js";import"./index-pV_yzmY_.js";import"./Link-cYpkkuqp.js";import"./index-391GJ7ps.js";import"./index-DCELbeIn.js";import"./index-KaeBEDf1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DGQO4fMp.js";import"./addCustomCSSWithScoping-Bt7xCKzu.js";import"./index-CDW4JUA8.js";import"./information-uX8_TnNn.js";import"./sys-enter-2-CJJhzBhO.js";import"./alert-BmD5O1ac.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BXDuuJxS.js";import"./delete-BH_Ofluc.js";import"./settings-BOwjvOs-.js";import"./NoData-DAU8iV94.js";import"./IllustratedMessage-BdOpFcMu.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-D6IuGdJg.js";import"./index-8sZlfaIF.js";import"./index-C8a6NVMH.js";import"./slim-arrow-down-DjG80YJw.js";import"./Input-D-O_E4Pc.js";import"./ResponsivePopoverCommon.css-B045Nnj_.js";import"./ValueStateMessage.css-DpV5S_wa.js";import"./Suggestions.css-BvMw9k5F.js";import"./ListBoxItemGroupTemplate-o03o3K-I.js";import"./ComboBoxItemGroup-D7un_uFe.js";import"./ListItemBaseTemplate-DQCws7kn.js";import"./Token-D36n2Zus.js";import"./ScrollEnablement-QSFxM8aV.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CdwuH3bB.js";import"./ToggleButton-Cd5NUYjN.js";import"./SuggestionItem-AGh_Mf5H.js";import"./index-DbwyhNE4.js";import"./Option-CDh-ocF3.js";import"./index-C7kuhskk.js";import"./SegmentedButton-DEMlsUEh.js";import"./index-D1IFlFlx.js";import"./Select-DTxOAyO4.js";import"./InvisibleMessage-DU_sw7pv.js";import"./slim-arrow-down-DZcd6ZcC.js";import"./index-RfAAwJsf.js";import"./index-Bb0M5Coz.js";import"./index-DCwY0BNz.js";import"./index-C89pqI8n.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DKuclrLO.js";import"./group-2-C1B8sHxp.js";import"./sort-descending-CJ2KeZ-8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index--eFanla0.js";import"./utils-BQ9l0ZXj.js";import"./index-BgO6mcLt.js";import"./index-vZRCG4hQ.js";import"./index-CEJjFBjT.js";import"./navigation-down-arrow-nSfE-hjH.js";import"./navigation-right-arrow-ByC8k-O9.js";import"./navigation-right-arrow-DKjWi810.js";import"./useCurrentTheme-CcZ-F948.js";import"./index-DOX5DR-q.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CUn0jH8-.js";import"./paper-plane-DSmkYTvk.js";import"./index-BHAQBVRI.js";import"./less-Bjdjo6qR.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
