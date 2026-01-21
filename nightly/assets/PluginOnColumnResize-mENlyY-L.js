import{j as o}from"./iframe-BFR-dU1l.js";import{useMDXComponents as n}from"./index-BRr5RSu7.js";import{I as r,F as m}from"./CommandsAndQueries-kf2pSDF5.js";import{M as p,C as s}from"./blocks-DTAC1Gxc.js";import"./Tag-Uk5Wz18b.js";import"./index-Dv1E9yaY.js";import"./copy-Cc7XHaG7.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-6WvMeLTE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CVrFyQhm.js";import"./index-CoobbAbb.js";import"./index-CvzwYeg1.js";import"./Link-DIc6gIaF.js";import"./index-C3CLOvIH.js";import"./index-CFDOjZnD.js";import"./index-VAuUAMe6.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C1LKO1Rr.js";import"./addCustomCSSWithScoping-BBCqvj7y.js";import"./index-BAzgfXr-.js";import"./information-BanFECND.js";import"./sys-enter-2-RSAR57lC.js";import"./alert-4GMQX2Dz.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bre5WKvO.js";import"./delete-Y4MN8EPb.js";import"./settings-C5PdrSD7.js";import"./NoData-D141lpVQ.js";import"./IllustratedMessage-BfK1-CBz.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-C5PgBu43.js";import"./index-CMwxuJux.js";import"./index-COniDLqo.js";import"./slim-arrow-down-CvKg8OAM.js";import"./Input-D0YvA3g2.js";import"./ResponsivePopoverCommon.css-ibscBu1F.js";import"./ValueStateMessage.css-C9lMAnB3.js";import"./Suggestions.css-C4f0pZkx.js";import"./ListBoxItemGroupTemplate-Dh4PKV-0.js";import"./ComboBoxItemGroup-rKpFlsYW.js";import"./ListItemBaseTemplate-D8Z5MxI5.js";import"./Token-BGFsQDvi.js";import"./ScrollEnablement-CfAnlfcJ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-M14QpxFJ.js";import"./ToggleButton-DGco4olw.js";import"./SuggestionItem-hWg0drFq.js";import"./index-DDITdqkG.js";import"./Option-Dwt0iGD4.js";import"./index-18hKTgX7.js";import"./SegmentedButton-CU3a8U94.js";import"./index-jGlg1Tpp.js";import"./Select-CJOaE89q.js";import"./InvisibleMessage-DJZlazdl.js";import"./slim-arrow-down-DT6ArkyX.js";import"./index-Bk51xnFB.js";import"./index-Cz9JInQX.js";import"./index-BJJoBJpU.js";import"./index-BQpDXUqr.js";import"./IconDesign-DXd8PPVF.js";import"./filter-vbZWVN7G.js";import"./group-2-CpnU8dYn.js";import"./sort-descending-CHWK_uwN.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D7t2vM4-.js";import"./utils-zLg6B11g.js";import"./index-DuHOFkjk.js";import"./index-JszbODGU.js";import"./index-BlP_k8BJ.js";import"./navigation-down-arrow-CEE7gple.js";import"./navigation-right-arrow-rNNmicl3.js";import"./navigation-right-arrow-BjgC-iOk.js";import"./useCurrentTheme-DOwAIF-p.js";import"./index-B9yIejFl.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BjUg15jO.js";import"./paper-plane-pcXL71Bw.js";import"./index-C7IQ_RM9.js";import"./less-Ygdngcc5.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
