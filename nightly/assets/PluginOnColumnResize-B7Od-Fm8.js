import{j as o}from"./iframe-CTCL6F1r.js";import{useMDXComponents as r}from"./index-COtiMl_W.js";import{I as n}from"./CommandsAndQueries-BsPL36Z9.js";import{M as m,C as p}from"./blocks-BWrgTR_X.js";import"./Tag-BL5Qfzs7.js";import"./index-DN-3xlKC.js";import"./copy-DEpsQlxb.js";import{F as s}from"./Footer-DeTYP8-R.js";import"./PageNotFound-D_xGTPNz.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-CC0OaYO6.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-A2IdBIvD.js";import"./index-CeDd6fzK.js";import"./index-Dj3jefRS.js";import"./index-ByW0PFuk.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bj5cLhE3.js";import"./addCustomCSSWithScoping-Bp0u_2pD.js";import"./index-BzwM6I24.js";import"./index-DWmGRAcl.js";import"./index-9E9I64Wt.js";import"./information-CiEkIJMA.js";import"./sys-enter-2-Cm5ZOXv2.js";import"./alert-CwDd6vfH.js";import"./index-D_vdDgjG.js";import"./Illustrations-GQ99oYm_.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-UhOOQ59H.js";import"./delete-BVyans79.js";import"./settings-BGGRR6oU.js";import"./NoData-DjKCJeL5.js";import"./NoFilterResults-KXdQvW0p.js";import"./index-Bbc0mtX6.js";import"./IllustratedMessage-oNHAfvQF.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-qKlu78ML.js";import"./Input-CskqmG-U.js";import"./ResponsivePopoverCommon.css-DqU8u_Xb.js";import"./ValueStateMessage.css-Dz2ZBT4Q.js";import"./Suggestions.css-pJEqYvzu.js";import"./ListBoxItemGroupTemplate-BWUUjUK6.js";import"./ComboBoxItemGroup-Ded9KrxA.js";import"./ListItemBaseTemplate-CAbiTx4K.js";import"./Token-CkMexFhY.js";import"./ScrollEnablement-B00j-Abc.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DzDcm21T.js";import"./ToggleButton-CGGo1Tc6.js";import"./multiselect-all-DXXVxUOw.js";import"./SuggestionItem-DluIx3Vy.js";import"./index-CDclxXJI.js";import"./Option-BPLDlZYg.js";import"./index-BJ3aDD5w.js";import"./SegmentedButton-Bzy-4e_3.js";import"./index-DkQ2VIB6.js";import"./Select-B9gMG-Mb.js";import"./InvisibleMessage-0vTx7A5o.js";import"./index-BvUve-In.js";import"./index-Co_AA59G.js";import"./index-CFfYMp7H.js";import"./index-BksCzbKY.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CLAP-CGA.js";import"./group-2-DFK22c05.js";import"./sort-descending-CAFmujKH.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CcZpUEcN.js";import"./utils-CrwAwKdr.js";import"./index-B0bfBcoV.js";import"./index-RisHXePe.js";import"./index-zpAMMNek.js";import"./navigation-down-arrow-wVevGwwX.js";import"./navigation-right-arrow-0lpCtsn6.js";import"./navigation-right-arrow-DF7UFLN2.js";import"./useCurrentTheme-Bmu75wPA.js";import"./index-pVHPziZI.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CVAaEzsl.js";import"./paper-plane-BLB4ESVt.js";import"./index-BslbOjMF.js";import"./less-CJ6uBOiE.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
