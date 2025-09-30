import{j as o}from"./iframe-sceg0YFv.js";import{useMDXComponents as r}from"./index-Dd71zBof.js";import{I as n,F as m}from"./CommandsAndQueries-DKneq4GY.js";import{M as p,C as s}from"./blocks-DYuUqipq.js";import"./Tag-CeuATfsT.js";import"./index-D3F4cwyn.js";import"./copy-BMdV5CCm.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-D9V3hbO9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-8sMjurJr.js";import"./index-DSENQiVR.js";import"./index-F95KXh_C.js";import"./Link-DWrZ8VdK.js";import"./index-Bk8MfuNW.js";import"./index-CEhCU38B.js";import"./index-DAUv-Nz3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BrlG2Z_i.js";import"./addCustomCSSWithScoping-CcKa_wrj.js";import"./index-B8FjapMT.js";import"./information-BKrgGcb8.js";import"./sys-enter-2-t67Ok8iZ.js";import"./alert-DGYqNpWm.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-pBbQnN3Z.js";import"./delete-BcYS3_de.js";import"./settings-DrHuTXnI.js";import"./NoData-BwUWak2R.js";import"./IllustratedMessage-CcQlEZMH.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Va26yAXy.js";import"./index-C4VdLOMW.js";import"./slim-arrow-down-B5pvNBWL.js";import"./Input-BzfDni2m.js";import"./ResponsivePopoverCommon.css-nC5XMOBp.js";import"./ValueStateMessage.css-DoUgf-5j.js";import"./Suggestions.css-BM83gU06.js";import"./ListBoxItemGroupTemplate-BqRj3VE-.js";import"./ComboBoxItemGroup-Cs6EfPox.js";import"./ListItemBaseTemplate-DRhEz-gw.js";import"./Token-CMcoBKOf.js";import"./ScrollEnablement-D3zh3Kdj.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B6k3txAq.js";import"./ToggleButton-DvFeI1Lt.js";import"./SuggestionItem-pUR3Pu7g.js";import"./index-DhvsTyd-.js";import"./Option-g5dMk_Dv.js";import"./index-M3RgBHzH.js";import"./SegmentedButton-u8O6wtdn.js";import"./index-CfnPZ09d.js";import"./Select-ByBsloVO.js";import"./InvisibleMessage-BWbsBg6p.js";import"./slim-arrow-down-BMGSx_7g.js";import"./index-NnSPlH_p.js";import"./index-CZeNbB2P.js";import"./IconDesign-DXd8PPVF.js";import"./filter-zkm8V6wo.js";import"./group-2-C-nKwgK2.js";import"./sort-descending-DgIX2NPP.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B8uJhRMm.js";import"./utils-DWNV0P4_.js";import"./index-BbsMwmmG.js";import"./index-CPOk0n0E.js";import"./index-LxsB8pJ3.js";import"./navigation-down-arrow-DeNM6o9T.js";import"./navigation-right-arrow-B8ciO61d.js";import"./navigation-right-arrow-Cpbh-nxP.js";import"./useCurrentTheme-BACbWtxM.js";import"./IndicationColor-DVw-fSM_.js";import"./index-PhsavknA.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-2UKl6MPc.js";import"./paper-plane-B69Ziwxr.js";import"./index-Dnv3XQPA.js";import"./less-Byh4l9lP.js";import"./index-DPuz9km0.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
`,o.jsx(m,{})]})}function Wo(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{Wo as default};
