import{j as t}from"./iframe-30LZfzOw.js";import{useMDXComponents as i}from"./index-9hK3vCGp.js";import{I as n}from"./CommandsAndQueries-B3tX98p8.js";import{M as m,C as p}from"./blocks-C0vZ6D8t.js";import"./Tag-Dtxkyswp.js";import"./index-CjMm9yFV.js";import"./copy-BDfV85Pd.js";import{F as s}from"./Footer-BNR5gUPY.js";import"./PageNotFound-yG6M5MId.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-B3-rzdQd.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CPAvZ0M5.js";import"./index-BqAk99uF.js";import"./index-orHhnsuM.js";import"./index-DNQEiveD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dl3uWGQL.js";import"./addCustomCSSWithScoping-DtBGS5Q4.js";import"./index-CqMGZXJd.js";import"./index-DBMP_Ccw.js";import"./index-CZwEe_4d.js";import"./information-BQPccwsM.js";import"./sys-enter-2-CbSQlHDF.js";import"./alert-BwFRRuyW.js";import"./index-CFfbQ4H0.js";import"./Illustrations-BGO-1oHt.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D4Ny2Qqv.js";import"./delete-C23RyoNS.js";import"./settings-vCvKKELE.js";import"./NoData-BYjwPDGX.js";import"./NoFilterResults-CCvr_mGb.js";import"./index-HraqqLCL.js";import"./IllustratedMessage-B21zxjt4.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-Cnc3ng8i.js";import"./Input-C9d7fki7.js";import"./ResponsivePopoverCommon.css-COYnkjUj.js";import"./ValueStateMessage.css-BtsWCoC_.js";import"./Suggestions.css-BIuoYk1E.js";import"./ListBoxItemGroupTemplate-CkL-FEGQ.js";import"./ComboBoxItemGroup-gJ9bF5Mf.js";import"./ListItemBaseTemplate-CbFyC0Bd.js";import"./Token-6w1_tPy9.js";import"./ScrollEnablement-BtBhqt6G.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DUX806d8.js";import"./ToggleButton-DLpAZcDf.js";import"./multiselect-all-3L7ChLWO.js";import"./SuggestionItem-aIZEKOnW.js";import"./index-BZL0dq0V.js";import"./Option-CtcuoPzM.js";import"./index-DTQROv24.js";import"./SegmentedButton-B_fnwh2s.js";import"./index-B1i_wN68.js";import"./Select-l4rVM2RI.js";import"./InvisibleMessage-IbisIrn1.js";import"./index-qMyxaARO.js";import"./index-ByDJh9XY.js";import"./index-DkQqnEjC.js";import"./index-Dn9Dy3ZO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DUmOK15y.js";import"./group-2-Cm3-VEfC.js";import"./sort-descending-D91blpVD.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B3GhDGHr.js";import"./utils-IkNb-DUU.js";import"./index-5e0OL3tH.js";import"./index-Kunnu4JS.js";import"./index-CS-7xh0w.js";import"./navigation-down-arrow-C1y2H9vH.js";import"./navigation-right-arrow-BjkMCO6q.js";import"./navigation-right-arrow-xyDtPWf6.js";import"./useCurrentTheme-D3OuI6Tp.js";import"./index-Dxoj_xD_.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CVz-G4WN.js";import"./paper-plane-Dl39-tzB.js";import"./index-BWQnImub.js";import"./less-Cg3ABqJp.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
`,t.jsx(o.h1,{id:"analyticaltable-plugin-useannounceemptycells",children:"AnalyticalTable Plugin: useAnnounceEmptyCells"}),`
`,t.jsx(n,{moduleName:"useAnnounceEmptyCells",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"useAnnounceEmptyCells"})," plugin hook adds screen reader announcements for empty cells."]}),`
`,t.jsxs(o.p,{children:[t.jsx(o.strong,{children:"Note:"})," Some screen readers (depending on their configuration) automatically detect empty cells, potentially resulting in duplicate announcements of empty cells."]}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(p,{sourceState:"none",of:l}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`const tableHooks = [useAnnounceEmptyCells] // this array should be memoized

<AnalyticalTable
  data={data}
  columns={columns}
  visibleRows={5}
  tableHooks={tableHooks}
/>
`})}),`
`,t.jsx(o.p,{children:t.jsx(o.strong,{children:"First data entry with empty values or undefined fields:"})}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-js",children:`{
  age: undefined,
  friend: {
    name: '',
    age: 0
  },
  status: 'Error'
}
`})}),`
`,t.jsx(s,{})]})}function zt(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{zt as default};
