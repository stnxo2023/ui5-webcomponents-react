import{j as t}from"./iframe-DFi9UtKE.js";import{useMDXComponents as n}from"./index-PehDt-ON.js";import{I as i,F as m}from"./CommandsAndQueries-BgA_2y6P.js";import{M as p,C as s}from"./blocks-BZiPfi5R.js";import"./Tag-DyC770Wv.js";import"./index-DRo_4cI_.js";import"./copy-BtJq9lRd.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BH6xSE6g.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BlgbWjqC.js";import"./index-mz_qMVbD.js";import"./index-Bj7syw50.js";import"./Link-CKaRASof.js";import"./index-hjE9MH8j.js";import"./index-CgUZ8Jrz.js";import"./index-C91-M52B.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-QdlayBuh.js";import"./addCustomCSSWithScoping-C-Twfd1m.js";import"./index-BVIBsTLM.js";import"./information-C2fQMAhn.js";import"./sys-enter-2-C-DHMglr.js";import"./alert-Do2a0hn1.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DGUruPrM.js";import"./delete-DnjgQmJs.js";import"./settings-tQnYQhED.js";import"./NoData-Cvn2BBQC.js";import"./IllustratedMessage-CWKDl7hN.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CnHwZ3TE.js";import"./index-_Ri4cZaB.js";import"./index-BuaB4iYp.js";import"./slim-arrow-down-BnAZSFTD.js";import"./Input-CnIKzm01.js";import"./ResponsivePopoverCommon.css-CTa7xzuq.js";import"./ValueStateMessage.css-CK9Tsjr5.js";import"./Suggestions.css-CKUgORQE.js";import"./ListBoxItemGroupTemplate-CwYyaj2Y.js";import"./ComboBoxItemGroup-ap13ELrg.js";import"./ListItemBaseTemplate-DLVnCBxv.js";import"./Token-BvOFy9vC.js";import"./ScrollEnablement-CctDMVQ2.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cocq2_my.js";import"./ToggleButton-B3acrASm.js";import"./SuggestionItem-BtRBHRZ3.js";import"./index-CzNkF4P7.js";import"./Option-CJrXuDru.js";import"./index-CgtODsdA.js";import"./SegmentedButton-C3Uwsy12.js";import"./index-CLrfWu0q.js";import"./Select-B3hk7S5M.js";import"./InvisibleMessage-Bx6P5Mxd.js";import"./slim-arrow-down-BaBVBPPF.js";import"./index-ClKsX4f6.js";import"./index-CnYJlaUy.js";import"./index-Bw-4XbFY.js";import"./index-Bl4FUUb0.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ZLAIgZY3.js";import"./group-2-CfKb4jtJ.js";import"./sort-descending-BiejtERO.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BKsuI6BF.js";import"./utils-ZPoy0Ic4.js";import"./index-CsP7hgLG.js";import"./index-Bl1zXw1e.js";import"./index-BTA4KG7R.js";import"./navigation-down-arrow-CqGMawe5.js";import"./navigation-right-arrow-BdCckcZj.js";import"./navigation-right-arrow-B3mRpH6q.js";import"./useCurrentTheme-DNJ4oWB7.js";import"./index-Bsk6bWqP.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CgMIeq-k.js";import"./paper-plane-D5b3pIt_.js";import"./index-DafdWF5y.js";import"./less-CCPciuoh.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
