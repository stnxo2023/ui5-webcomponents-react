import{j as o}from"./iframe-DMHzJZ-j.js";import{useMDXComponents as n}from"./index-C6fVjeP1.js";import{I as r,F as m}from"./CommandsAndQueries-DGQGLEXC.js";import{M as p,C as s}from"./blocks-BBNtOPy5.js";import"./Tag-CQITClqv.js";import"./index-C0eFSkjd.js";import"./copy-x3ZdDA2U.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CaT9r6rb.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DhIsFRFq.js";import"./index-B1RFmErt.js";import"./index-Cr6zAa1Q.js";import"./Link-DH5vJWVF.js";import"./index-DgEALGZi.js";import"./index-CqxeRCB-.js";import"./index-CEzdIVxS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-bWNLwVQr.js";import"./addCustomCSSWithScoping-Br9NkwKR.js";import"./index-BlloQ94B.js";import"./information-41_Ak17O.js";import"./sys-enter-2-YeOg860G.js";import"./alert-Dt7k-zHX.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BeCjkhT-.js";import"./delete-B3Zi7ci0.js";import"./settings-DpEAtvN4.js";import"./NoData-CMRDWD8S.js";import"./IllustratedMessage-ypMCec_7.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BAEmwexU.js";import"./index-BLZvKk1A.js";import"./index-DALZzsGY.js";import"./slim-arrow-down-IOQwWOJR.js";import"./Input-D0sQDQIP.js";import"./ResponsivePopoverCommon.css-BZuN8o2Z.js";import"./ValueStateMessage.css-Cu_y8whz.js";import"./Suggestions.css-Du7gKKRX.js";import"./ListBoxItemGroupTemplate-B0EOdTVM.js";import"./ComboBoxItemGroup-CHjUNt3f.js";import"./ListItemBaseTemplate-C5SCfjzM.js";import"./Token-DnzFeT9s.js";import"./ScrollEnablement-CIWRDRru.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CWeiqPrI.js";import"./ToggleButton-CBNvjcuG.js";import"./SuggestionItem-DyoT1JDI.js";import"./index-CMQmlJik.js";import"./Option-DWdsEKMy.js";import"./index-DIXxOC37.js";import"./SegmentedButton-BiHeLBaC.js";import"./index-B7KKnXVU.js";import"./Select-HM-omYP_.js";import"./InvisibleMessage-DHXVn91v.js";import"./slim-arrow-down-B6ZtTkOe.js";import"./index-Cu33fkQB.js";import"./index-BfuDz84Z.js";import"./index-uksb_LL1.js";import"./IconDesign-DXd8PPVF.js";import"./filter-e3XRiwh1.js";import"./group-2-BdpK5aV9.js";import"./sort-descending-BtXqYEdP.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DXKiXJss.js";import"./utils-DoNqiPbK.js";import"./index-BP4PKNEe.js";import"./index-CVjUPdda.js";import"./index-aypBjRie.js";import"./navigation-down-arrow-3r7pwMvO.js";import"./navigation-right-arrow-CqCWNsea.js";import"./navigation-right-arrow-B-wRit2V.js";import"./useCurrentTheme-fSV64WwT.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DNFK3A_E.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-zZAL_Iqq.js";import"./paper-plane-C9A5taeB.js";import"./index-CGpUpTTM.js";import"./less-DGQbhCVA.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
