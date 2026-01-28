import{j as t}from"./iframe-Bqqr6LRd.js";import{useMDXComponents as n}from"./index-Br4hcxKx.js";import{I as i,F as m}from"./CommandsAndQueries-18MjfAFY.js";import{M as p,C as s}from"./blocks-Cu3AJo0i.js";import"./Tag-CwbUvZ-m.js";import"./index-B04Rzf_f.js";import"./copy-Bhrou6qI.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-vtE8StoO.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Eu6KN1OU.js";import"./index-DkY4sX_i.js";import"./index-B4-rpm-y.js";import"./Link-1XxvN6x_.js";import"./index-uP3qKYkO.js";import"./index-CFiaIaQb.js";import"./index-BFr0IkwM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-_soG_jSZ.js";import"./addCustomCSSWithScoping-DM5M0hyQ.js";import"./index-JLAmYdlt.js";import"./information-BWf6xVI-.js";import"./sys-enter-2-NBiqC5e1.js";import"./alert-eITYjrPF.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B7kkSgms.js";import"./delete-FfRmnN9Y.js";import"./settings-DlvvQWHj.js";import"./NoData-Cnw4Kevx.js";import"./IllustratedMessage-lIXFssI-.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-CLTUfrTe.js";import"./index-BNj-eJpZ.js";import"./index-3uq2_G_9.js";import"./slim-arrow-down-BZm47vFp.js";import"./Input-vcWbAoGp.js";import"./ResponsivePopoverCommon.css-DVi9wNNs.js";import"./ValueStateMessage.css-DbIMxrdT.js";import"./Suggestions.css-Co8vDkCG.js";import"./ListBoxItemGroupTemplate-uy6aJTW5.js";import"./ComboBoxItemGroup-BTvCb2Kc.js";import"./ListItemBaseTemplate-blGXO2lB.js";import"./Token-Bae9FhVJ.js";import"./ScrollEnablement-Cxy5Bzo0.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Hnm9afMy.js";import"./ToggleButton-BgVCtHZJ.js";import"./SuggestionItem-D9DXt2U6.js";import"./index-ByYfrQl-.js";import"./Option-DOx9ZJ94.js";import"./index-DVPlV14N.js";import"./SegmentedButton-Bh--EjsV.js";import"./index-DtQZgkhi.js";import"./Select-BdSnKAc1.js";import"./InvisibleMessage-Bp5Ok78e.js";import"./slim-arrow-down-DZ6p3Bwi.js";import"./index-C4tZRj-d.js";import"./index-CwgCLf6W.js";import"./index-CJC3e2m0.js";import"./index-RQz2GPrc.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BwEOts-V.js";import"./group-2-CDRA2oju.js";import"./sort-descending-CUlou7JN.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-bVqMVufC.js";import"./utils-BMPv-A8F.js";import"./index-BgEIZIwU.js";import"./index-CKnDUyrg.js";import"./index-DCQPDRVf.js";import"./navigation-down-arrow-CxlZv9_c.js";import"./navigation-right-arrow-Wb7vj7-O.js";import"./navigation-right-arrow-83NG2uzj.js";import"./useCurrentTheme-dPM8OGfa.js";import"./index-DMlsPBCZ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-5BH4o7Dk.js";import"./paper-plane-Abb2eC1B.js";import"./index-BeQjUBuP.js";import"./less-DEcTl8Yh.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
