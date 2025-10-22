import{j as t}from"./iframe-aKs2ZWAj.js";import{useMDXComponents as n}from"./index-c4zJYkcR.js";import{I as i,F as m}from"./CommandsAndQueries-IBiFSZr-.js";import{M as p,C as s}from"./blocks-fvCr5kp9.js";import"./Tag-DSoVP5MU.js";import"./index-CMRRcr14.js";import"./copy-D9idsxI8.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BaQwIBgF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DNGZMnOS.js";import"./index-9dBzyYap.js";import"./index-Bj8ei7PO.js";import"./Link--ytwK8Iw.js";import"./index-ChXUbPo1.js";import"./index-B_N5JODd.js";import"./index-MuWvZ7Ot.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C1lURHaG.js";import"./addCustomCSSWithScoping--I2WhUfl.js";import"./index-Dqo0aPAB.js";import"./information-CcxaAVSU.js";import"./sys-enter-2-DseuEdAf.js";import"./alert-DbU8Ao5u.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CxMI9gU-.js";import"./delete-BtFgIOxP.js";import"./settings-ZFHQhdsu.js";import"./NoData-DZS9Ur76.js";import"./IllustratedMessage-qSdTMbb_.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-B6-4gdXH.js";import"./index-CmhJUl_b.js";import"./index-DepEoVTO.js";import"./slim-arrow-down-Dxd3QVtv.js";import"./Input-C4wOVg4W.js";import"./ResponsivePopoverCommon.css-Dn8ntY67.js";import"./ValueStateMessage.css-BbNN49z9.js";import"./Suggestions.css-CJQWNtEa.js";import"./ListBoxItemGroupTemplate-BlE3pbv5.js";import"./ComboBoxItemGroup-tqMfhz0v.js";import"./ListItemBaseTemplate-CtNEmA22.js";import"./Token-B4ffJEtp.js";import"./ScrollEnablement-loPYCCzg.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-xWRY6uoX.js";import"./ToggleButton-CGCRf2qx.js";import"./SuggestionItem-C0HWDl10.js";import"./index-CUVmuYtL.js";import"./Option-78QXYTZI.js";import"./index-DwEarF4u.js";import"./SegmentedButton-Dcqh0APM.js";import"./index-DA1062Kq.js";import"./Select-D7DdaJ-R.js";import"./InvisibleMessage-DezkuNLo.js";import"./slim-arrow-down-BlGxKe2j.js";import"./index-CBIaN5fI.js";import"./index-DnUR33pO.js";import"./index-Czu_4IUB.js";import"./IconDesign-DXd8PPVF.js";import"./filter-rWMtqLgy.js";import"./group-2-CHhi29YF.js";import"./sort-descending-DHA1WIN6.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CLYrF4yE.js";import"./utils-B1uKdKfv.js";import"./index-3SWcYaJq.js";import"./index-B60Izm_h.js";import"./index-BFnuOW-D.js";import"./navigation-down-arrow-Cb1XkKbC.js";import"./navigation-right-arrow-CqaFjLeM.js";import"./navigation-right-arrow-Byp8Xbsp.js";import"./useCurrentTheme-RkZvjCi7.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CjjC7c0Q.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C1moqd-D.js";import"./paper-plane-CJQ7U-vp.js";import"./index-DQpXYUsU.js";import"./less-tAUMA1iF.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
`,t.jsx(o.h1,{id:"analyticaltable-plugin-useannounceemptycells",children:"AnalyticalTable Plugin: useAnnounceEmptyCells"}),`
`,t.jsx(i,{moduleName:"useAnnounceEmptyCells",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"useAnnounceEmptyCells"})," plugin hook adds screen reader announcements for empty cells."]}),`
`,t.jsxs(o.p,{children:[t.jsx(o.strong,{children:"Note:"})," Some screen readers (depending on their configuration) automatically detect empty cells, potentially resulting in duplicate announcements of empty cells."]}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(s,{sourceState:"none",of:l}),`
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
`,t.jsx(m,{})]})}function Rt(r={}){const{wrapper:o}={...n(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{Rt as default};
