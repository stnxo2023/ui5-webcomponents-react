import{j as t}from"./iframe-BSil-P7u.js";import{useMDXComponents as n}from"./index-vt-1HXZR.js";import{I as i,F as m}from"./CommandsAndQueries-D6srY1_t.js";import{M as p,C as s}from"./blocks-DAd1jcGX.js";import"./Tag-C9JFY3U3.js";import"./index-DHsON_5K.js";import"./copy-CwHd1VH0.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Bxr1oTwn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-FBl5xz3h.js";import"./index-TzMEaDq9.js";import"./index-CoIXLnKn.js";import"./Link-qL_T98pU.js";import"./index-DYtE3L5B.js";import"./index-BEx2FW11.js";import"./index-DzdENY0T.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bp27VxQp.js";import"./addCustomCSSWithScoping-BLX4O9b7.js";import"./index-CM8rBgl_.js";import"./information-BmoL6a_m.js";import"./sys-enter-2-CRjOI67W.js";import"./alert-B93IgYs6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CoH36o8l.js";import"./delete-BI-937IP.js";import"./settings-CuEyn2tk.js";import"./NoData-CGFrF-GJ.js";import"./IllustratedMessage-bk9jckQm.js";import"./i18n-defaults-BTYpTGpY.js";import"./parameters-bundle.css-B37gDvcF.js";import"./NoFilterResults-DJ4x8n8R.js";import"./index-DM1cWKd-.js";import"./index-BAOnjwgh.js";import"./slim-arrow-down-CceGcM8g.js";import"./Input-Brq604ts.js";import"./ResponsivePopoverCommon.css-D6ugJ8J6.js";import"./ValueStateMessage.css-Bl9ehnfn.js";import"./Suggestions.css-DL5LMP4f.js";import"./ListBoxItemGroupTemplate-DTEnhQcP.js";import"./ComboBoxItemGroup-D278rfHD.js";import"./ListItemBaseTemplate-XePtjjIP.js";import"./Token-BjQ1h7zj.js";import"./ScrollEnablement-BseTvxzn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Co9OiWLE.js";import"./ToggleButton-CucfFvuo.js";import"./SuggestionItem-D-NzBmhj.js";import"./index-x2opHf5c.js";import"./Option-D_fhd8yQ.js";import"./index-0XEIKLHq.js";import"./SegmentedButton-CxPgyCvs.js";import"./index-B4ETCzn3.js";import"./Select-DIzgGRIh.js";import"./InvisibleMessage-8W7RFh9p.js";import"./slim-arrow-down-CEMmPYc4.js";import"./index-dpHfrh8L.js";import"./index-B81hxV8d.js";import"./index-BSCj-pol.js";import"./index-BxBIGX03.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DDvkMb7O.js";import"./group-2-B3KKCYd6.js";import"./sort-descending-xaSeLobU.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CwWYxgbu.js";import"./utils-BC-DJmvs.js";import"./index-BosJcweM.js";import"./index-BDjwx27j.js";import"./index-BBoe6R2N.js";import"./navigation-down-arrow-DZHe0qjz.js";import"./navigation-right-arrow-B-M3EsUK.js";import"./navigation-right-arrow-Caxsuv4H.js";import"./useCurrentTheme-BWoqnafC.js";import"./index-BbeYWMcG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B8wJR6kV.js";import"./paper-plane-CJEv3WjG.js";import"./index-CBHCu-XZ.js";import"./less-Cu4-mAFi.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
