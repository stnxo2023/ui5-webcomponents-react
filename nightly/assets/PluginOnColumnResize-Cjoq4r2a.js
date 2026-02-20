import{j as o}from"./iframe-UvPIdInY.js";import{useMDXComponents as n}from"./index-C_wnFVs3.js";import{I as r,F as m}from"./CommandsAndQueries-aWAd2RXn.js";import{M as p,C as s}from"./blocks-D0ZGQgrL.js";import"./Tag-IR_ETKFS.js";import"./index-D9ZFZ6F-.js";import"./copy-BE3LAxqE.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-NClPDdr6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-O5JzLw5N.js";import"./index-Ba89z5vW.js";import"./index-mim0XNOQ.js";import"./Link-BLS11L9W.js";import"./index-B0iNMIwQ.js";import"./index-CXKBVYRd.js";import"./index-Bvo9-fQy.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BNxf-Cq6.js";import"./addCustomCSSWithScoping-7EyTrlnL.js";import"./index-D_al-J9d.js";import"./information-BPTpUfW-.js";import"./sys-enter-2-CWNypIDi.js";import"./alert-CSWOQ1yD.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DNZebN0l.js";import"./delete-Bym_CuQ_.js";import"./settings-jDUCJDFQ.js";import"./NoData-CBn9s1P8.js";import"./IllustratedMessage-B1dE8UDr.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DZ3pxCsC.js";import"./index-DO7Ar4RD.js";import"./index-BkfsPSLU.js";import"./slim-arrow-down-CRxJDNVT.js";import"./Input-Pl2nYyWp.js";import"./ResponsivePopoverCommon.css-BoaZ2bBu.js";import"./ValueStateMessage.css-byYAWo4s.js";import"./Suggestions.css-PTQQr1HI.js";import"./ListBoxItemGroupTemplate-DxT2oqBg.js";import"./ComboBoxItemGroup-CLKsYy_r.js";import"./ListItemBaseTemplate-Dx_Z0YEo.js";import"./Token-COE2mfsf.js";import"./ScrollEnablement-CroMdMI1.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-n4LvxKbk.js";import"./ToggleButton-BR5G7Qz8.js";import"./SuggestionItem-DktTsUPu.js";import"./index-CGnLWb7c.js";import"./Option-CjyU-APj.js";import"./index-Bd9J232t.js";import"./SegmentedButton-BAUcRfoB.js";import"./index-lHbjqnZy.js";import"./Select-CuymjFC1.js";import"./InvisibleMessage-BEHZLLTD.js";import"./slim-arrow-down-CVwAqm1x.js";import"./index-CGJMk3cv.js";import"./index-C5TAYWLJ.js";import"./index-DJo0pI-N.js";import"./index-C819hH3W.js";import"./IconDesign-DXd8PPVF.js";import"./filter-LoYXXqh9.js";import"./group-2-BDjs1tne.js";import"./sort-descending-C01UE9Ps.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DXPBHWGL.js";import"./utils-CkuEKQeg.js";import"./index-DeIw8vVn.js";import"./index-CkiSiMgq.js";import"./index-QMPfoD9h.js";import"./navigation-down-arrow-1mpPyuVY.js";import"./navigation-right-arrow-DS2ZZyTy.js";import"./navigation-right-arrow-CMjLnqRz.js";import"./useCurrentTheme-1LGZD4iD.js";import"./index-xGgYhz7_.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-58ApOM2Q.js";import"./paper-plane-HxkV1_E_.js";import"./index-Cu85sTvP.js";import"./less-BL-B7Va5.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
