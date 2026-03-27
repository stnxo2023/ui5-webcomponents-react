import{j as o}from"./iframe-J46VriOb.js";import{useMDXComponents as r}from"./index-CBla0wLi.js";import{I as n}from"./CommandsAndQueries-BzSXHbZJ.js";import{M as m,C as p}from"./blocks-beoBu_qL.js";import"./Tag-DrBKyONn.js";import"./index-_u-v5yqi.js";import"./copy-_0TxAB6h.js";import{F as s}from"./Footer-CEGsJe_E.js";import"./PageNotFound-D29obeve.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-XTlMfWCW.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-B4FJ2xg8.js";import"./index-Dw3YBt24.js";import"./index-D6itq-2d.js";import"./index-aps2uNQB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DxsI6DA6.js";import"./addCustomCSSWithScoping-Dl6_6-AL.js";import"./index-BrGkrW3e.js";import"./index-Dt6WNWTR.js";import"./index-CT7sD2iL.js";import"./information-CATkPoRV.js";import"./sys-enter-2-Cc8Mj3l6.js";import"./alert-BWP7y2xA.js";import"./index-BkIHYavW.js";import"./Illustrations-D_iUtabn.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-btyj-n1J.js";import"./delete-w_D0ZxLs.js";import"./settings-CHNKlAkf.js";import"./NoData-B7hCCw2Z.js";import"./NoFilterResults-TM2aQCOr.js";import"./index-CvMK6PYJ.js";import"./IllustratedMessage-wrAyyr2h.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BFOs-Db_.js";import"./Input-Ba21Wr_4.js";import"./ResponsivePopoverCommon.css-jKJxzQ6F.js";import"./ValueStateMessage.css-DSOKYmKE.js";import"./Suggestions.css-Dd_ULqQN.js";import"./ListBoxItemGroupTemplate-CJFWume4.js";import"./ComboBoxItemGroup-DHNlD9r0.js";import"./ListItemBaseTemplate-Y3fZL33H.js";import"./Token-By8nCId5.js";import"./ScrollEnablement-DNtDiy2E.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DkLkb57T.js";import"./ToggleButton-BxPz-GTU.js";import"./multiselect-all-DC8IMVm_.js";import"./SuggestionItem-0qJhTGlF.js";import"./index-EIhpcBKD.js";import"./Option-85_JDqIM.js";import"./index-DndhKC0q.js";import"./SegmentedButton-Bu_1Yz2B.js";import"./index-CdHvy4_O.js";import"./Select-lRdI9G8v.js";import"./InvisibleMessage-BkeQHp1j.js";import"./index-DVv2dwtw.js";import"./index-C0C2EsKY.js";import"./index-l12WwH3D.js";import"./index-Pf84_VDN.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BL1LVhNe.js";import"./group-2-CtFUB3dY.js";import"./sort-descending-DzIXikcM.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-nxr8rbf1.js";import"./utils-q85ajM_8.js";import"./index-D3xzwzot.js";import"./index-Czrl39Ja.js";import"./index-DgMAqzON.js";import"./navigation-down-arrow-DM7-1YlX.js";import"./navigation-right-arrow-C2J9fEdo.js";import"./navigation-right-arrow-D_foC3d9.js";import"./useCurrentTheme-jWg-wmyT.js";import"./index-Bb5UG2kc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CWARZAlF.js";import"./paper-plane-BymcWAKh.js";import"./index-BTeoJAdU.js";import"./less-61CakwDD.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
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
