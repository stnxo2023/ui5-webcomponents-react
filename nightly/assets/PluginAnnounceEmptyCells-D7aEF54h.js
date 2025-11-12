import{j as t}from"./iframe-m3wgL8DO.js";import{useMDXComponents as n}from"./index-BDA4Q--W.js";import{I as i,F as m}from"./CommandsAndQueries-DJJG77Q0.js";import{M as p,C as s}from"./blocks-CkTarMgO.js";import"./Tag-tSZf1-5X.js";import"./index-XwYlDB9P.js";import"./copy-CODhXho7.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-uoQ6fw54.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BhmtIGIH.js";import"./index-D9MBfHQe.js";import"./index-CVyBcJoi.js";import"./Link-BBA1fpnp.js";import"./index-CLINieEb.js";import"./index-00DfGzTS.js";import"./index-B7uA3u-p.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C6f_OpFu.js";import"./addCustomCSSWithScoping-D1ffFiBE.js";import"./index-BSNngnc7.js";import"./information-DsCCxR_j.js";import"./sys-enter-2-3GVzqOhh.js";import"./alert-CYqVZ7NL.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CM97FBcw.js";import"./delete-Bf921CWr.js";import"./settings-BYe7f3tO.js";import"./NoData-Dh7joJIl.js";import"./IllustratedMessage-CxQCJ2ay.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-CTWxVoyD.js";import"./index-ljJh2mXy.js";import"./index-DdE1XOTZ.js";import"./slim-arrow-down-8v6NvsKW.js";import"./Input-Cs15w5r3.js";import"./ResponsivePopoverCommon.css-C9hxCvuP.js";import"./ValueStateMessage.css-z6jg6mGY.js";import"./Suggestions.css-DbjXinA2.js";import"./ListBoxItemGroupTemplate-9uh1HRli.js";import"./ComboBoxItemGroup-BqRSt8o0.js";import"./ListItemBaseTemplate-BAr1QC4e.js";import"./Token-DRcSqql8.js";import"./ScrollEnablement-Dlq8aT82.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DGziFzMo.js";import"./ToggleButton-sEBB_MTe.js";import"./SuggestionItem-Cc8TNMCR.js";import"./index-CxG5u9XF.js";import"./Option-QpRjKkO3.js";import"./index-CXyubNwj.js";import"./SegmentedButton-BflLR7ZS.js";import"./index-D17ZhWQV.js";import"./Select-Cp0iaTMd.js";import"./InvisibleMessage-BUt-p4eg.js";import"./slim-arrow-down-BxbuKxeo.js";import"./index-CKvze9UP.js";import"./index-DaG3SG7b.js";import"./index-Bt_KiuWe.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BM91Z3C5.js";import"./group-2-BwsR6O4m.js";import"./sort-descending-BqWoToib.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Cl9chJaT.js";import"./utils-DiSEeJmV.js";import"./index-vic8-m6V.js";import"./index-J2w0B87P.js";import"./index-Bcls0r_S.js";import"./navigation-down-arrow-DD0yo9R6.js";import"./navigation-right-arrow-D4MH6EAI.js";import"./navigation-right-arrow-Vgro8iwV.js";import"./useCurrentTheme-Cx5Llmvy.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BW_d6Mec.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-NbRukm78.js";import"./paper-plane-Bod-WMHa.js";import"./index-CIqeAo6O.js";import"./less-jU3EhTke.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
