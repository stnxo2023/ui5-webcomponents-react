import{j as o}from"./iframe-BBABn56p.js";import{useMDXComponents as n}from"./index-JaA5rKoZ.js";import{I as r,F as m}from"./CommandsAndQueries-BQ3fu09v.js";import{M as p,C as s}from"./blocks-C48pq8eI.js";import"./Tag-2o8WwGUn.js";import"./index-CDfsiwkh.js";import"./copy-DZ9Ywk1q.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-DkIX-1rK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-J2oyeWCO.js";import"./index-CKtBuMmX.js";import"./index-DWO5htBk.js";import"./Link-Ber6JvTK.js";import"./index-bK0pQ8Eu.js";import"./index-D_78KBK9.js";import"./index-BkrG37On.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BGZzwSbc.js";import"./addCustomCSSWithScoping-BtxahzH2.js";import"./index-Ckf8DLFv.js";import"./information-BZFlG9j_.js";import"./sys-enter-2-DjgAxbYG.js";import"./alert-CS_Fjm7A.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BAH4TUxy.js";import"./delete-DsWdS96_.js";import"./settings-Df6DL7Gq.js";import"./NoData-BNjlB7uw.js";import"./IllustratedMessage-Di319cue.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-BsO5uN5a.js";import"./index-DhLGJCjj.js";import"./index-BqTDCnco.js";import"./slim-arrow-down-BG1nt-P_.js";import"./Input-CYLSHt27.js";import"./ResponsivePopoverCommon.css-BpyfczN_.js";import"./ValueStateMessage.css-B7LgM9S6.js";import"./Suggestions.css-CEnMSpxy.js";import"./ListBoxItemGroupTemplate-DMJ27KCA.js";import"./ComboBoxItemGroup-DdXTq1Vh.js";import"./ListItemBaseTemplate-DaYbGn7R.js";import"./Token-CJDolX8T.js";import"./ScrollEnablement-BLTuKYfn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B5ygJNfI.js";import"./ToggleButton-7E3RKcQ8.js";import"./SuggestionItem-Bine1zmz.js";import"./index-B6Q789ah.js";import"./Option-BjUcgJcl.js";import"./index-Ch7wW-jX.js";import"./SegmentedButton-DhLiQXqU.js";import"./index-6d4BSX0F.js";import"./Select-BKOJ5f1a.js";import"./InvisibleMessage-W81utmZk.js";import"./slim-arrow-down-CNYLbtEw.js";import"./index-BEp2nlaX.js";import"./index-CPKR6tvC.js";import"./index-BCqZx7KV.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bg-CqXDw.js";import"./group-2-UoqYeskz.js";import"./sort-descending-BBmoGOXL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BJgZ-Sj2.js";import"./utils-CQ2iljMS.js";import"./index-BlzTje2S.js";import"./index-10H1aut2.js";import"./index-CJlMvGeI.js";import"./navigation-down-arrow-CZ7v8mT2.js";import"./navigation-right-arrow-GIyVM7JZ.js";import"./navigation-right-arrow-BtregVCK.js";import"./useCurrentTheme-CTzRqOqk.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BfiFzDtl.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BoTjglKk.js";import"./paper-plane-D5Xcc4aT.js";import"./index-FOPI05Cv.js";import"./less-DX_0GEda.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
