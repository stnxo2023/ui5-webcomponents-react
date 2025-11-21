import{j as o}from"./iframe-DVV5VFB7.js";import{useMDXComponents as n}from"./index-qyzUrO0d.js";import{I as r,F as m}from"./CommandsAndQueries-lBZKGmp7.js";import{M as p,C as s}from"./blocks-D1E9_7c3.js";import"./Tag-CQyymDzh.js";import"./index-Bn7PyzsE.js";import"./copy-Cn3WomF2.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-8wFH9WTq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dqdoz1dV.js";import"./index-BkDm8D7N.js";import"./index-gDTG9hvV.js";import"./Link-DfNmKUcn.js";import"./index-gNtvK5Wx.js";import"./index-ZnLduBLK.js";import"./index-BHIms4DS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B_xwBI5c.js";import"./addCustomCSSWithScoping-DOzeCYXW.js";import"./index-DCIIs4BW.js";import"./information-rc4de9km.js";import"./sys-enter-2-DXmpS6_D.js";import"./alert-DByE3GtL.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-s9VskAhU.js";import"./delete-CgivBeZ4.js";import"./settings-CK2OfFA6.js";import"./NoData-DxLA3V-q.js";import"./IllustratedMessage-DQuWY2vM.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-BLT6QU8O.js";import"./index-j-oJ2Ibk.js";import"./index-9zpcVlZY.js";import"./slim-arrow-down-DEwtX93l.js";import"./Input-Bcwk4klZ.js";import"./ResponsivePopoverCommon.css-D_3NdHu-.js";import"./ValueStateMessage.css-CTyww1Cy.js";import"./Suggestions.css-_wFG5-Dq.js";import"./ListBoxItemGroupTemplate-DmAn1Srm.js";import"./ComboBoxItemGroup-Cqu9NEa3.js";import"./ListItemBaseTemplate-7WJ7iCbr.js";import"./Token-K0CZHa6Z.js";import"./ScrollEnablement-D9nrHUMi.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-g5MAuYgn.js";import"./ToggleButton-DW6jAKtP.js";import"./SuggestionItem-CWxMLjlC.js";import"./index-BZgPzTwo.js";import"./Option-DWq_yYfl.js";import"./index-BmV7OUNq.js";import"./SegmentedButton-BJTPiUGO.js";import"./index-C5tIVlnD.js";import"./Select-BMXrr-12.js";import"./InvisibleMessage-D0yEGssO.js";import"./slim-arrow-down-DH4qIoze.js";import"./index-DwbiADyX.js";import"./index-Co5rF_Rr.js";import"./index-BeQBrD2O.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D8sf2cJm.js";import"./group-2-DPk6j2HH.js";import"./sort-descending-5IRe054w.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Imht7Owq.js";import"./utils-Dn8MODVh.js";import"./index-D24dphxh.js";import"./index-WcUeGWn8.js";import"./index-5P6_7SIE.js";import"./navigation-down-arrow-C5SV30gd.js";import"./navigation-right-arrow-D7hf5-64.js";import"./navigation-right-arrow-CDfIknCA.js";import"./useCurrentTheme-DO8jocYJ.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CnFm52uS.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BHovj_YO.js";import"./paper-plane-BbjknDKE.js";import"./index-pF5ldAnN.js";import"./less-CtNkBeC3.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
