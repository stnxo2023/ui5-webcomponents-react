import{j as o}from"./iframe-BliOtBpf.js";import{useMDXComponents as n}from"./index-Cfm9mwpf.js";import{I as r,F as m}from"./CommandsAndQueries-BFQnO0Kc.js";import{M as p,C as s}from"./blocks-DFxqqk7r.js";import"./Tag-slUCA2Mk.js";import"./index-B1gTXVZK.js";import"./copy-Co-SMUUy.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-UaxsE2L5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CljUsgff.js";import"./index-DtASDt-o.js";import"./index-BpaxVzpl.js";import"./Link-AWzdE9bP.js";import"./index-B5gV3DVy.js";import"./index-D6Ss-oF4.js";import"./index-riDZyvDO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BuCRse4K.js";import"./addCustomCSSWithScoping-CtbnqYJf.js";import"./index-Dq7D7J3c.js";import"./information-0hx7iK2K.js";import"./sys-enter-2-CKBXubjR.js";import"./alert-DPJIvRdz.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CzSx9BSc.js";import"./delete-BAKYftsy.js";import"./settings--3ZxUOpw.js";import"./NoData-B5uAOIws.js";import"./IllustratedMessage-Dgh84RpM.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-Bk2zxQjJ.js";import"./index-2GHHQCcG.js";import"./index-SPs9Bq6c.js";import"./slim-arrow-down-BaX0Om3C.js";import"./Input-BJthTOz5.js";import"./ResponsivePopoverCommon.css-m2t9TZaE.js";import"./ValueStateMessage.css-CdBoC1bH.js";import"./Suggestions.css-CtAAVjVZ.js";import"./ListBoxItemGroupTemplate-BwSthZB6.js";import"./ComboBoxItemGroup-BAlpXruZ.js";import"./ListItemBaseTemplate-DfgzIweD.js";import"./Token-WshlA1RE.js";import"./ScrollEnablement-VwJkenso.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bfo68tSl.js";import"./ToggleButton-B0wgBzO_.js";import"./SuggestionItem-Cx4QFGUe.js";import"./index-CCUcUAYq.js";import"./Option-DWUsGFP0.js";import"./index-D3hBYyPJ.js";import"./SegmentedButton-Dadeaudg.js";import"./index-BsDhDrjf.js";import"./Select-Dsi_WDA5.js";import"./InvisibleMessage-B2hidsMu.js";import"./slim-arrow-down-DODTVyKq.js";import"./index-CsWitsoB.js";import"./index-Bj3TIez2.js";import"./index-BHkeFt_0.js";import"./index-CRM_hxbu.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DlRoUKXb.js";import"./group-2-Wzqe8kOu.js";import"./sort-descending-BtwzdLhc.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-304L1YOg.js";import"./utils-C4J9K8Pj.js";import"./index-ex6RM4xz.js";import"./index-BwzMcLPF.js";import"./index-ZYmLwwKJ.js";import"./navigation-down-arrow-B4INFMdI.js";import"./navigation-right-arrow-BpdCpvV-.js";import"./navigation-right-arrow-CVR_Dlxl.js";import"./useCurrentTheme-C0qBvptG.js";import"./index-CSnn3rsq.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-nTnNpDkc.js";import"./paper-plane-CH-qxYcc.js";import"./index-DEa7pMZH.js";import"./less-CUNTC7tA.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
