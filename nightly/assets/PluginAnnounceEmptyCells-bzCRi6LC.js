import{j as t}from"./iframe-BBABn56p.js";import{useMDXComponents as n}from"./index-JaA5rKoZ.js";import{I as i,F as m}from"./CommandsAndQueries-BQ3fu09v.js";import{M as p,C as s}from"./blocks-C48pq8eI.js";import"./Tag-2o8WwGUn.js";import"./index-CDfsiwkh.js";import"./copy-DZ9Ywk1q.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DkIX-1rK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-J2oyeWCO.js";import"./index-CKtBuMmX.js";import"./index-DWO5htBk.js";import"./Link-Ber6JvTK.js";import"./index-bK0pQ8Eu.js";import"./index-D_78KBK9.js";import"./index-BkrG37On.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BGZzwSbc.js";import"./addCustomCSSWithScoping-BtxahzH2.js";import"./index-Ckf8DLFv.js";import"./information-BZFlG9j_.js";import"./sys-enter-2-DjgAxbYG.js";import"./alert-CS_Fjm7A.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BAH4TUxy.js";import"./delete-DsWdS96_.js";import"./settings-Df6DL7Gq.js";import"./NoData-BNjlB7uw.js";import"./IllustratedMessage-Di319cue.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-BsO5uN5a.js";import"./index-DhLGJCjj.js";import"./index-BqTDCnco.js";import"./slim-arrow-down-BG1nt-P_.js";import"./Input-CYLSHt27.js";import"./ResponsivePopoverCommon.css-BpyfczN_.js";import"./ValueStateMessage.css-B7LgM9S6.js";import"./Suggestions.css-CEnMSpxy.js";import"./ListBoxItemGroupTemplate-DMJ27KCA.js";import"./ComboBoxItemGroup-DdXTq1Vh.js";import"./ListItemBaseTemplate-DaYbGn7R.js";import"./Token-CJDolX8T.js";import"./ScrollEnablement-BLTuKYfn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B5ygJNfI.js";import"./ToggleButton-7E3RKcQ8.js";import"./SuggestionItem-Bine1zmz.js";import"./index-B6Q789ah.js";import"./Option-BjUcgJcl.js";import"./index-Ch7wW-jX.js";import"./SegmentedButton-DhLiQXqU.js";import"./index-6d4BSX0F.js";import"./Select-BKOJ5f1a.js";import"./InvisibleMessage-W81utmZk.js";import"./slim-arrow-down-CNYLbtEw.js";import"./index-BEp2nlaX.js";import"./index-CPKR6tvC.js";import"./index-BCqZx7KV.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bg-CqXDw.js";import"./group-2-UoqYeskz.js";import"./sort-descending-BBmoGOXL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BJgZ-Sj2.js";import"./utils-CQ2iljMS.js";import"./index-BlzTje2S.js";import"./index-10H1aut2.js";import"./index-CJlMvGeI.js";import"./navigation-down-arrow-CZ7v8mT2.js";import"./navigation-right-arrow-GIyVM7JZ.js";import"./navigation-right-arrow-BtregVCK.js";import"./useCurrentTheme-CTzRqOqk.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BfiFzDtl.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BoTjglKk.js";import"./paper-plane-D5Xcc4aT.js";import"./index-FOPI05Cv.js";import"./less-DX_0GEda.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
