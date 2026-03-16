import{j as t}from"./iframe-BFfiCRAQ.js";import{useMDXComponents as i}from"./index-CnIchwG9.js";import{I as n}from"./CommandsAndQueries-D2e25SQ4.js";import{M as m,C as p}from"./blocks-D8UGMoOU.js";import"./Tag-D5_wJnae.js";import"./index-BvMEXi75.js";import"./copy-CbWPHS6-.js";import{F as s}from"./Footer-3U2rULEI.js";import"./PageNotFound-CAIx-1qq.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Cju8RjRZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BzXMrnu2.js";import"./index-Arv69njm.js";import"./index-BEK-Ecqi.js";import"./index-CX51hblh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-RE3-w7CJ.js";import"./addCustomCSSWithScoping-rUi9bOzC.js";import"./index-De1oz68R.js";import"./index-C_tePRTa.js";import"./index-BsyXKf0m.js";import"./information-mHfS5cWl.js";import"./sys-enter-2-BfeK50PI.js";import"./alert-DGgnTy1o.js";import"./index-stFY49PR.js";import"./Illustrations-DMZSmuvx.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DaxjLmz-.js";import"./delete-HE9f-xbA.js";import"./settings-nYLXQZ59.js";import"./NoData-D-G6iKM6.js";import"./NoFilterResults-DPpLw_XE.js";import"./index-DxmJnuS8.js";import"./IllustratedMessage-BUkhLd6d.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-DpuJyxUQ.js";import"./Input-BSDYELEx.js";import"./ResponsivePopoverCommon.css-D4YzLUeU.js";import"./ValueStateMessage.css-CZS8cQna.js";import"./Suggestions.css-BRZ_skiF.js";import"./ListBoxItemGroupTemplate-B9xYubZz.js";import"./ComboBoxItemGroup-zb3CXtQM.js";import"./ListItemBaseTemplate-BM8be-0F.js";import"./Token-BROk1qEI.js";import"./ScrollEnablement-BWSWkQKK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-xVznhyAm.js";import"./ToggleButton-QD-qILMO.js";import"./multiselect-all-BI6jGZO9.js";import"./SuggestionItem-D45_KCqM.js";import"./index-DxNz8cxh.js";import"./Option-nJWI7L3J.js";import"./index-Yf53TJNt.js";import"./SegmentedButton-C1RsLFa5.js";import"./index-CRSZng-3.js";import"./Select-Bn7-Juol.js";import"./InvisibleMessage-C0rjjrR1.js";import"./index-CnNyMgdN.js";import"./index-CGKXgT7t.js";import"./index-DtGyYGMv.js";import"./index-D4r21y2V.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DeErRayA.js";import"./group-2-CcbLqHZL.js";import"./sort-descending-5U4Cc-Io.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-rwYIjJnj.js";import"./utils-B3YyPFzV.js";import"./index-dSthqGSi.js";import"./index-Dato8t9q.js";import"./index-BoRvqz2r.js";import"./navigation-down-arrow-ByE_fRjG.js";import"./navigation-right-arrow-Dn0VM6Bb.js";import"./navigation-right-arrow-Czbs9gPV.js";import"./useCurrentTheme-BiekrNKv.js";import"./index-CnomUQWd.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C_1zrNbW.js";import"./paper-plane-S0TbXz67.js";import"./index-BFtFKw4r.js";import"./less-C3-m2tND.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
