import{j as o}from"./iframe-5rXfnPaz.js";import{useMDXComponents as n}from"./index-BqyI3aT9.js";import{I as r,F as m}from"./CommandsAndQueries-Xz4gCbJR.js";import{M as p,C as s}from"./blocks-_HtGHxpQ.js";import"./Tag-BLU9xLwR.js";import"./index-TJORVIjM.js";import"./copy-3qQuBQub.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CcOUaagY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D3cU9WTA.js";import"./index-BB6TdVmi.js";import"./index-BgPkgqrz.js";import"./Link-IINvsuro.js";import"./index-X9fuUMPC.js";import"./index-DVjD8wbo.js";import"./index-Bna4bEkh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BikUYAZO.js";import"./addCustomCSSWithScoping-Cv8BQzm9.js";import"./index-DN9fi-2P.js";import"./information-C9cuRXqE.js";import"./sys-enter-2-y9J_ETy2.js";import"./alert-CnXddf7Q.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CnsKBKKm.js";import"./delete-CqVU8QSy.js";import"./settings-C6C2rMP5.js";import"./NoData-C6zrEqdJ.js";import"./IllustratedMessage-DVsNM8KB.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BY5FKPNb.js";import"./index-B2arcq-S.js";import"./index-Bxgt3Ou_.js";import"./slim-arrow-down-CG38GsAh.js";import"./Input-4O3kRwLq.js";import"./ResponsivePopoverCommon.css-C1xBOZoa.js";import"./ValueStateMessage.css-BdW6AGS6.js";import"./Suggestions.css-BLWo3F15.js";import"./ListBoxItemGroupTemplate-BZVK3C21.js";import"./ComboBoxItemGroup-BWv8Jfn6.js";import"./ListItemBaseTemplate-CP6xKZ4g.js";import"./Token-BUGkfYZH.js";import"./ScrollEnablement-C55G51IY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cua6cuRg.js";import"./ToggleButton-BeKGXq8p.js";import"./SuggestionItem-Cz6KMxHh.js";import"./index-Bij98Q-R.js";import"./Option-B7oChQ-z.js";import"./index-BQE7n4xd.js";import"./SegmentedButton-BsxmG9wr.js";import"./index-BmXkEItO.js";import"./Select-Cw6Szu5N.js";import"./InvisibleMessage-lYBgp4_P.js";import"./slim-arrow-down-BJXvyOyf.js";import"./index-0cRpwkC4.js";import"./index-VzaEEiDt.js";import"./index-B15VKN5k.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BzinyoGp.js";import"./group-2-BQu0Iyd9.js";import"./sort-descending-rgN241_I.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-ZZRaGFiZ.js";import"./utils-CkPWUOLN.js";import"./index-D0YwngEh.js";import"./index-DGROWVtJ.js";import"./index-Ct1kN3_s.js";import"./navigation-down-arrow-CN6lpdwx.js";import"./navigation-right-arrow-_aRbtzGU.js";import"./navigation-right-arrow-DxIZ5HVF.js";import"./useCurrentTheme-PC0lES2v.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B0PC4qEQ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cij_psQ1.js";import"./paper-plane-CpxuoSNW.js";import"./index-D89dDm_o.js";import"./less-arHg6uEN.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
