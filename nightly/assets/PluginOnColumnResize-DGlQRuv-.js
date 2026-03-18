import{j as o}from"./iframe-BWTquNFU.js";import{useMDXComponents as r}from"./index-CkXQL6rW.js";import{I as n}from"./CommandsAndQueries-Cu22SJgH.js";import{M as m,C as p}from"./blocks-24keuhPe.js";import"./Tag-DhoajqAo.js";import"./index-B59i8xiW.js";import"./copy-iNwkfzwy.js";import{F as s}from"./Footer-BPNOTf-P.js";import"./PageNotFound-CJcyxQek.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CceKJBUk.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BecYEhoc.js";import"./index-BTohTOow.js";import"./index-scscec-x.js";import"./index-CKCv8CV3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Byoi_UeP.js";import"./addCustomCSSWithScoping-DP3CaadD.js";import"./index-ChJmkZbc.js";import"./index-NVW8xIV5.js";import"./index-kSfV8vRJ.js";import"./information-DMtPZuOJ.js";import"./sys-enter-2-C7vs2MPC.js";import"./alert-CcklZ67u.js";import"./index-DVrCMdXJ.js";import"./Illustrations-CJfJJGnG.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B6ivdHEj.js";import"./delete-BNE5XMIg.js";import"./settings-CGivgX1w.js";import"./NoData-CwgA4KNO.js";import"./NoFilterResults-CjGZNsJH.js";import"./index-7QDuP57_.js";import"./IllustratedMessage-KAkdjXyB.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BTVzNzNo.js";import"./Input-EE71Gmfs.js";import"./ResponsivePopoverCommon.css-BbZHRZZG.js";import"./ValueStateMessage.css-CUwbWuU7.js";import"./Suggestions.css-FQe1Xc9l.js";import"./ListBoxItemGroupTemplate-DAbpQNBX.js";import"./ComboBoxItemGroup-uxvAKKGS.js";import"./ListItemBaseTemplate-BRrEqjCC.js";import"./Token-DxQtXUKH.js";import"./ScrollEnablement-BoYZgYHz.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DbGrkhZV.js";import"./ToggleButton-DBro7jvb.js";import"./multiselect-all-UT7N0_Ik.js";import"./SuggestionItem-CUIZagcj.js";import"./index-cRHDVvDp.js";import"./Option-IvW7tMmY.js";import"./index-C0JhBXt8.js";import"./SegmentedButton-BRJfaiG-.js";import"./index-BEM4UPY5.js";import"./Select-CL4tjDW6.js";import"./InvisibleMessage-D7OVBpmG.js";import"./index-Byo4t2sh.js";import"./index-C8s3OvV9.js";import"./index-C99f75Vc.js";import"./index-B1xXM3b0.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DlTD91fV.js";import"./group-2-C6DMt6zv.js";import"./sort-descending-D1j_C10r.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CcsrfPcf.js";import"./utils-HKL5q2BK.js";import"./index-Bw8aKIth.js";import"./index-BOJiPgTr.js";import"./index-CiXNavjP.js";import"./navigation-down-arrow-BnFi5ZgR.js";import"./navigation-right-arrow-KPC1gtG0.js";import"./navigation-right-arrow-C9M9ERbI.js";import"./useCurrentTheme-DeEojqvR.js";import"./index-C_SzIttf.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D1j5P2oj.js";import"./paper-plane-Dnn16QvC.js";import"./index-C8RmX3Qo.js";import"./less-rIvjl3NN.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
