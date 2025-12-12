import{j as t}from"./iframe-5Ai_0qn6.js";import{useMDXComponents as n}from"./index-B7f66Dmz.js";import{I as i,F as m}from"./CommandsAndQueries-JQTwJq8J.js";import{M as p,C as s}from"./blocks-B56i3DPI.js";import"./Tag-COMV1q97.js";import"./index-DmI0q2i9.js";import"./copy-DNLRE2WL.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Cly1OFy0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ce1oa-YM.js";import"./index-q1btkUh6.js";import"./index-BRDhzPf9.js";import"./Link-D--4KGaX.js";import"./index-B-uO6_4g.js";import"./index-D661wfa7.js";import"./index-Bq31yNzK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-COAGvdy_.js";import"./addCustomCSSWithScoping-DYNqCkls.js";import"./index-BkdUYSuU.js";import"./information-D04M7OHu.js";import"./sys-enter-2-1BgXqzpT.js";import"./alert-BhFUrxxf.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DptVgLxH.js";import"./delete-BKhqWRT0.js";import"./settings-C7ek-hnD.js";import"./NoData-wohXKQfm.js";import"./IllustratedMessage-CPRROUzO.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-DbUMx87M.js";import"./index-CWkjXrf_.js";import"./index-DZC-KX_7.js";import"./slim-arrow-down-CVsfCMuZ.js";import"./Input-irwstt8P.js";import"./ResponsivePopoverCommon.css-C3FRXGqL.js";import"./ValueStateMessage.css-CE7fKOnd.js";import"./Suggestions.css-Dq5Dns8R.js";import"./ListBoxItemGroupTemplate-DBU-Amvn.js";import"./ComboBoxItemGroup-Bq4VJjC4.js";import"./ListItemBaseTemplate-D2M6voVm.js";import"./Token-PzQXz8IW.js";import"./ScrollEnablement-BpTg3nyv.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BzBCEa9G.js";import"./ToggleButton-ietgb841.js";import"./SuggestionItem-DlAE1lsO.js";import"./index-DEaM6HA1.js";import"./Option-9p-hiMpG.js";import"./index-br9mqeEo.js";import"./SegmentedButton-AE0tpI52.js";import"./index-BFBqEJBM.js";import"./Select-DeIsnLIh.js";import"./InvisibleMessage-CmGdQZT2.js";import"./slim-arrow-down-ZE4Gr-dz.js";import"./index-B-aNjF0L.js";import"./index-CoK8JjT_.js";import"./index-O_J6wUes.js";import"./index-Cyt6o_O8.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BpA9S_eu.js";import"./group-2-DpjVfqgj.js";import"./sort-descending-BGJJks9P.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bx98osqc.js";import"./utils-BOfVxA4M.js";import"./index-Cb8kvc5z.js";import"./index-S4uAEFIo.js";import"./index-DwAuXlyS.js";import"./navigation-down-arrow-DfJbyOqR.js";import"./navigation-right-arrow-B-Vhmt5L.js";import"./navigation-right-arrow-D1zxr9Vh.js";import"./useCurrentTheme-DiluXBTF.js";import"./index-CcKvpDiG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B0oo9ftu.js";import"./paper-plane-C_f61Wz0.js";import"./index-Dae_Omsb.js";import"./less-fRAvhj5N.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
