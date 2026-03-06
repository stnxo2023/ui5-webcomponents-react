import{j as o}from"./iframe-1PJgHZTG.js";import{useMDXComponents as r}from"./index-DQ8p-OUL.js";import{I as n}from"./CommandsAndQueries-CQXQgoMe.js";import{M as m,C as p}from"./blocks-BWdY__MG.js";import"./Tag-B40KCJnD.js";import"./index-C8yXoAsR.js";import"./copy-DV2HGm9x.js";import{F as s}from"./Footer-Dn-umaI8.js";import"./PageNotFound-BDu5VFGA.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-Uck7FsnG.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-7AxyQCs2.js";import"./index-BQUqcZEd.js";import"./index-i1xIbWKA.js";import"./index-D-m_lTJG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DnF5TvKk.js";import"./addCustomCSSWithScoping-NZMltsez.js";import"./index-BhuvwaVu.js";import"./index-BpyshfBP.js";import"./index-ppU6pF9w.js";import"./information-DJc7dR8E.js";import"./sys-enter-2-C9tJiXDL.js";import"./alert-DYBuSdd9.js";import"./index-BIAg1r_N.js";import"./Illustrations-BZEV-hfk.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-izwhatPm.js";import"./delete-C5D2s8Ak.js";import"./settings-Bs8Htp6v.js";import"./NoData-DQ9X6gYh.js";import"./NoFilterResults-C4_WnkVU.js";import"./index-C2z4jgPp.js";import"./IllustratedMessage--5kFVM8I.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-DZqBJym4.js";import"./Input-CXFJmsc3.js";import"./ResponsivePopoverCommon.css-DL_QXptj.js";import"./ValueStateMessage.css-B7_HUMyf.js";import"./Suggestions.css-CKJ9ed6J.js";import"./ListBoxItemGroupTemplate-D5VYXEPs.js";import"./ComboBoxItemGroup-DBAC-JxZ.js";import"./ListItemBaseTemplate-5OahYJGz.js";import"./Token-DqC2yQ9K.js";import"./ScrollEnablement-CaJ2EN4H.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DwJ4wR2U.js";import"./ToggleButton-DgQxqUU_.js";import"./multiselect-all-DCb2TMLS.js";import"./SuggestionItem-GuXqHjCS.js";import"./index-DgtiDtM8.js";import"./Option-BOs3k1aM.js";import"./index-i9m_q-VY.js";import"./SegmentedButton-CkdgIHk7.js";import"./index-DGyBVUqn.js";import"./Select-DawqrssT.js";import"./InvisibleMessage-CMHHgpOp.js";import"./index-BUuVWqmv.js";import"./index-B22926Ud.js";import"./index-DQdq4IFP.js";import"./index-DcZPtEFB.js";import"./IconDesign-DXd8PPVF.js";import"./filter-QsCfk0fT.js";import"./group-2-CIcR_Yc_.js";import"./sort-descending-9Z_hUleg.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CLLV259a.js";import"./utils-5yXcyzO7.js";import"./index-B_CQz5B0.js";import"./index-BAc9VyuZ.js";import"./index-lR-STrLr.js";import"./navigation-down-arrow-CHCqyWX1.js";import"./navigation-right-arrow-DUxRui6p.js";import"./navigation-right-arrow-BVMvMFjo.js";import"./useCurrentTheme-Bytj-6td.js";import"./index-C9eyp_iT.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-ACr-zRT8.js";import"./paper-plane-BuXAAdlj.js";import"./index-7ZhckGC4.js";import"./less-DXmDlvC3.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
