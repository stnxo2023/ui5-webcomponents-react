import{j as o}from"./iframe-BvHqSIyK.js";import{useMDXComponents as n}from"./index-C9vrwz77.js";import{I as r,F as m}from"./CommandsAndQueries-B3hUlog3.js";import{M as p,C as s}from"./blocks-BxoU3Yu6.js";import"./Tag-99RoGaFy.js";import"./index-BB14dXBi.js";import"./copy-BP-1S5h9.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BzEtAFg2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DAufjIqI.js";import"./index-Cb6d5Ui8.js";import"./index-Dvhux2R5.js";import"./Link-CgDmPG1r.js";import"./index-BX2w3DS0.js";import"./index-lpb4Baiz.js";import"./index--L__lImq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C3VWoxNN.js";import"./addCustomCSSWithScoping-Bvbl39sy.js";import"./index-B7BXsln5.js";import"./information-zngl4LUv.js";import"./sys-enter-2-D9Z1FJcM.js";import"./alert-F1tFIdLT.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CnXdKyTy.js";import"./delete-CuG3RM5m.js";import"./settings-D_BTzOE6.js";import"./NoData-lpA7htfb.js";import"./IllustratedMessage-Cf-o6GMJ.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DVGSOjnh.js";import"./index-Bow0_lnK.js";import"./index-DrmQroFf.js";import"./slim-arrow-down-C2UZE7h0.js";import"./Input-Br-sY9ky.js";import"./ResponsivePopoverCommon.css-sekIyiK-.js";import"./ValueStateMessage.css-BRJx2fcS.js";import"./Suggestions.css-CV4MjGEF.js";import"./ListBoxItemGroupTemplate-B-OeNXtJ.js";import"./ComboBoxItemGroup-B2NxOsQm.js";import"./ListItemBaseTemplate-BWetPhdo.js";import"./Token-6nUBCvO_.js";import"./ScrollEnablement-HwiTsDO2.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-WAmqQIXu.js";import"./ToggleButton-bhikrMK7.js";import"./SuggestionItem-_aBHJoN3.js";import"./index-DnkLMjxR.js";import"./Option-fB_CKO8N.js";import"./index-OFuAM7HC.js";import"./SegmentedButton-df2qYRN0.js";import"./index-BjZ8DHVA.js";import"./Select-BaeqruA9.js";import"./InvisibleMessage-BSe3iB9m.js";import"./slim-arrow-down-BORyrk-u.js";import"./index-DqS5V8WW.js";import"./index-KF0fvs5m.js";import"./index-C71q_atH.js";import"./index-DRekqyHy.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BXvWevTj.js";import"./group-2-DOLgcJ-T.js";import"./sort-descending-CxAjsNpq.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D39_iadB.js";import"./utils-Bm3EbaDm.js";import"./index-DVh5GQMZ.js";import"./index-C_6rr-HH.js";import"./index-BW296Krt.js";import"./navigation-down-arrow-DT5dtpnO.js";import"./navigation-right-arrow-PuFMbFjH.js";import"./navigation-right-arrow-I9zR3Bwc.js";import"./useCurrentTheme-BLBS4rCs.js";import"./index-B5WxCuR5.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DlCv73Ap.js";import"./paper-plane-CSXFE3V8.js";import"./index-Cxmpze17.js";import"./less-BtNTjp5U.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
