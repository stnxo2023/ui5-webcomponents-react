import{j as o}from"./iframe-CMRYeg3m.js";import{useMDXComponents as n}from"./index-d3aogLFm.js";import{I as r,F as m}from"./CommandsAndQueries-DpsRc0ye.js";import{M as p,C as s}from"./blocks-B--XNN4Z.js";import"./Tag-DLJpwqrU.js";import"./index-X7c2uI6J.js";import"./copy-O4x8gwVx.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-NcPcxP0m.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dt6RwhRx.js";import"./index-BVsKPF1I.js";import"./index-csz7EJl3.js";import"./Link-Bxvjqypp.js";import"./index-PIXQ40x8.js";import"./index-Ca5PVHn4.js";import"./index-DVEpH7N4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-f1AMIobt.js";import"./addCustomCSSWithScoping-D9ZK4KgK.js";import"./index-TGfnZuTz.js";import"./information-2R4wAWn8.js";import"./sys-enter-2-h25AZJAc.js";import"./alert-EuMgWuer.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CbVSGA1k.js";import"./delete-1RwfcjcT.js";import"./settings-C5H9S65V.js";import"./NoData-CW7TgSmL.js";import"./IllustratedMessage-CGTR8uP0.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-DAZPTCPU.js";import"./index-Dq8e-1UW.js";import"./index-GkNgVDAt.js";import"./slim-arrow-down-CmvdQO7m.js";import"./Input-2Nygg4-q.js";import"./ResponsivePopoverCommon.css-CqBO6fZ3.js";import"./ValueStateMessage.css-D51R__Qj.js";import"./Suggestions.css-C4L82WYT.js";import"./ListBoxItemGroupTemplate-C-1UKkDb.js";import"./ComboBoxItemGroup-C51CY9Wh.js";import"./ListItemBaseTemplate-qOSQ4Fnc.js";import"./Token-CoqMARg0.js";import"./ScrollEnablement-CHUJ-chc.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ntD8YpfZ.js";import"./ToggleButton-DQ-1wEim.js";import"./SuggestionItem-BnR17Fyw.js";import"./index-BkexHsEY.js";import"./Option-DybeogHQ.js";import"./index-BHc0UMTZ.js";import"./SegmentedButton-Dezgm7cC.js";import"./index-BB_dZdK5.js";import"./Select-CAZuopb2.js";import"./InvisibleMessage-DVgio3fu.js";import"./slim-arrow-down-B1aQoQzR.js";import"./index-e5pHMgA1.js";import"./index-D_E6BFUk.js";import"./index-C1Exyb_f.js";import"./index-8DOGvRkG.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cb9Y6gPy.js";import"./group-2-Cea3ryU3.js";import"./sort-descending-rBOFvsCA.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-kdPvsB1k.js";import"./utils-CgBfQCBk.js";import"./index-jc4_TuNU.js";import"./index-BPBucl4y.js";import"./index-BewwXtWC.js";import"./navigation-down-arrow-BIKGPDMD.js";import"./navigation-right-arrow-gSRQ7cEs.js";import"./navigation-right-arrow-DT95PVm7.js";import"./useCurrentTheme-DhCErNXe.js";import"./index-QpjC2w_s.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-G_RHHN41.js";import"./paper-plane-DEFfxY-Y.js";import"./index-DTxz0DV7.js";import"./less-B-qcBapJ.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
