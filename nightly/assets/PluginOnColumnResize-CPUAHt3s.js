import{j as o}from"./iframe-DBRigOoU.js";import{useMDXComponents as r}from"./index-apRVXKap.js";import{I as n}from"./CommandsAndQueries-CSuPwIuY.js";import{M as m,C as p}from"./blocks-BfIRBmeA.js";import"./Tag-DEWl5_iK.js";import"./index-CtZlHOCH.js";import"./copy-D7myjbZ2.js";import{F as s}from"./Footer-C0l-yj0s.js";import"./PageNotFound-CQZvX7Tj.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-B11QIys0.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-WDyL8T_Q.js";import"./index-NhTjO4vR.js";import"./index-BAsbE3_A.js";import"./index-u05fNeKh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bc6gryl9.js";import"./addCustomCSSWithScoping-Oz7AbKTz.js";import"./index-DxEJ2UxM.js";import"./index-DybExlT-.js";import"./index-DWKSf_OJ.js";import"./information-Di_zbJNn.js";import"./sys-enter-2-CpC_ZrXX.js";import"./alert-CuS5B2OC.js";import"./index-C-7GLaxU.js";import"./Illustrations-aiaUW8Wr.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-7qA_JtjR.js";import"./delete-CTGykAkJ.js";import"./settings-Dg8O-66-.js";import"./NoData-DguEQNRg.js";import"./NoFilterResults-DtRFGhMh.js";import"./index-BhR_yJpK.js";import"./IllustratedMessage-ByVRx6RQ.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-D6CltELs.js";import"./Input-CtHTs60C.js";import"./ResponsivePopoverCommon.css-Da1SZvGe.js";import"./ValueStateMessage.css-nbS3DH35.js";import"./Suggestions.css-W26MlxzS.js";import"./ListBoxItemGroupTemplate-C6kkFi_o.js";import"./ComboBoxItemGroup-BElYaVDv.js";import"./ListItemBaseTemplate-CQKCVtx8.js";import"./Token-sjwuvo1P.js";import"./ScrollEnablement-D2Hwnqmj.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BfX1rpOQ.js";import"./ToggleButton-CBS-G2ZN.js";import"./multiselect-all-DN-bH4h7.js";import"./SuggestionItem-BdsM9iKO.js";import"./index-DtdveVs3.js";import"./Option-BiUpRTT7.js";import"./index-BRz6iuWA.js";import"./SegmentedButton-Bi1zUA1m.js";import"./index-DWQUGHoP.js";import"./Select-ozqLHBcF.js";import"./InvisibleMessage-CdaXnoMp.js";import"./index-BSmsbgeq.js";import"./index-caETFkvA.js";import"./index-Dg9lVvz1.js";import"./index-BFhPQQPD.js";import"./IconDesign-DXd8PPVF.js";import"./filter-p9qYgOWh.js";import"./group-2-BnNeS8WE.js";import"./sort-descending-DdagI1nq.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-rB7yhNqF.js";import"./utils-CCmbeTCZ.js";import"./index-BqTTgId_.js";import"./index-CrXK0vZY.js";import"./index-aJnjZLGo.js";import"./navigation-down-arrow-BFJ7Hu2K.js";import"./navigation-right-arrow-82Tpqbaq.js";import"./navigation-right-arrow-DkEC0vdN.js";import"./useCurrentTheme-CD182pcz.js";import"./index-CNAb_u8i.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CEAvFyV7.js";import"./paper-plane-CREdbXKT.js";import"./index-C4eTaivo.js";import"./less-W_1D3jc4.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
