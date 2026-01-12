import{j as o}from"./iframe-BWwaFrUe.js";import{useMDXComponents as n}from"./index-YNaFuKct.js";import{I as r,F as m}from"./CommandsAndQueries-BTZsnlDx.js";import{M as p,C as s}from"./blocks-CUOVkMW1.js";import"./Tag-C1jS-OQM.js";import"./index-D57lmYpc.js";import"./copy-CotvDhWa.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BMcdVAna.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DWyfCle9.js";import"./index-CPNWsz0F.js";import"./index-D2byHvrl.js";import"./Link-BKxr4_LG.js";import"./index-CjEjkqT0.js";import"./index-BHGImwbL.js";import"./index-CZL1WN1v.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B9SYXEMy.js";import"./addCustomCSSWithScoping-DT9AYQXn.js";import"./index-B87YjzNM.js";import"./information-DMTe0ysY.js";import"./sys-enter-2-DQvPI1W2.js";import"./alert-BsvI3BFP.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ZJM36qku.js";import"./delete-DOgupLX8.js";import"./settings-4vio0KZw.js";import"./NoData-CX6GFhcP.js";import"./IllustratedMessage-DQsQaQ5a.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-C-6BQoNw.js";import"./index-B9Gz8ycv.js";import"./index-CN1ndyZW.js";import"./slim-arrow-down-CmSn7Sik.js";import"./Input-CY2_jO7N.js";import"./ResponsivePopoverCommon.css-DLB8912B.js";import"./ValueStateMessage.css-BD8m1HnI.js";import"./Suggestions.css-BBBvQtOR.js";import"./ListBoxItemGroupTemplate-yf3HFsAX.js";import"./ComboBoxItemGroup-D2AL_rCQ.js";import"./ListItemBaseTemplate-QNOu6P8O.js";import"./Token-DzMcWdi_.js";import"./ScrollEnablement-JdqAnokE.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D-3ZFt0p.js";import"./ToggleButton-Cf5cO5pE.js";import"./SuggestionItem-RvTEtoqI.js";import"./index-V1xW8ahy.js";import"./Option-tKeldczj.js";import"./index-BwnRWUYP.js";import"./SegmentedButton-SW6UDtT6.js";import"./index-DMORvkBO.js";import"./Select-DMl3Tw2N.js";import"./InvisibleMessage-C817vP8u.js";import"./slim-arrow-down-DkhplX3E.js";import"./index-c5nDhqAm.js";import"./index-C8H6ETRj.js";import"./index-MtPA4SgJ.js";import"./index-BD5bs7yp.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ClKCT9rN.js";import"./group-2-Dpay8E0t.js";import"./sort-descending-DyGsNaKs.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-vQwIUp-n.js";import"./utils-CdBNuaY-.js";import"./index-BDRKN7at.js";import"./index-BXKFr2l-.js";import"./index-mG3R14Tg.js";import"./navigation-down-arrow-BHHjgb5v.js";import"./navigation-right-arrow-CsvEnEN9.js";import"./navigation-right-arrow-Bmpxqsod.js";import"./useCurrentTheme-DCWBN9yR.js";import"./index-BuCzF1I2.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Ccg0UGwD.js";import"./paper-plane-o_qW1OCn.js";import"./index-BmyR6abe.js";import"./less-BiUEcVEK.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
