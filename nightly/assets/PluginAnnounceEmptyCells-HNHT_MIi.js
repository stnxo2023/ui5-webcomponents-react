import{j as t}from"./iframe-1PJgHZTG.js";import{useMDXComponents as i}from"./index-DQ8p-OUL.js";import{I as n}from"./CommandsAndQueries-CQXQgoMe.js";import{M as m,C as p}from"./blocks-BWdY__MG.js";import"./Tag-B40KCJnD.js";import"./index-C8yXoAsR.js";import"./copy-DV2HGm9x.js";import{F as s}from"./Footer-Dn-umaI8.js";import"./PageNotFound-BDu5VFGA.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Uck7FsnG.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-7AxyQCs2.js";import"./index-BQUqcZEd.js";import"./index-i1xIbWKA.js";import"./index-D-m_lTJG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DnF5TvKk.js";import"./addCustomCSSWithScoping-NZMltsez.js";import"./index-BhuvwaVu.js";import"./index-BpyshfBP.js";import"./index-ppU6pF9w.js";import"./information-DJc7dR8E.js";import"./sys-enter-2-C9tJiXDL.js";import"./alert-DYBuSdd9.js";import"./index-BIAg1r_N.js";import"./Illustrations-BZEV-hfk.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-izwhatPm.js";import"./delete-C5D2s8Ak.js";import"./settings-Bs8Htp6v.js";import"./NoData-DQ9X6gYh.js";import"./NoFilterResults-C4_WnkVU.js";import"./index-C2z4jgPp.js";import"./IllustratedMessage--5kFVM8I.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-DZqBJym4.js";import"./Input-CXFJmsc3.js";import"./ResponsivePopoverCommon.css-DL_QXptj.js";import"./ValueStateMessage.css-B7_HUMyf.js";import"./Suggestions.css-CKJ9ed6J.js";import"./ListBoxItemGroupTemplate-D5VYXEPs.js";import"./ComboBoxItemGroup-DBAC-JxZ.js";import"./ListItemBaseTemplate-5OahYJGz.js";import"./Token-DqC2yQ9K.js";import"./ScrollEnablement-CaJ2EN4H.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DwJ4wR2U.js";import"./ToggleButton-DgQxqUU_.js";import"./multiselect-all-DCb2TMLS.js";import"./SuggestionItem-GuXqHjCS.js";import"./index-DgtiDtM8.js";import"./Option-BOs3k1aM.js";import"./index-i9m_q-VY.js";import"./SegmentedButton-CkdgIHk7.js";import"./index-DGyBVUqn.js";import"./Select-DawqrssT.js";import"./InvisibleMessage-CMHHgpOp.js";import"./index-BUuVWqmv.js";import"./index-B22926Ud.js";import"./index-DQdq4IFP.js";import"./index-DcZPtEFB.js";import"./IconDesign-DXd8PPVF.js";import"./filter-QsCfk0fT.js";import"./group-2-CIcR_Yc_.js";import"./sort-descending-9Z_hUleg.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CLLV259a.js";import"./utils-5yXcyzO7.js";import"./index-B_CQz5B0.js";import"./index-BAc9VyuZ.js";import"./index-lR-STrLr.js";import"./navigation-down-arrow-CHCqyWX1.js";import"./navigation-right-arrow-DUxRui6p.js";import"./navigation-right-arrow-BVMvMFjo.js";import"./useCurrentTheme-Bytj-6td.js";import"./index-C9eyp_iT.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-ACr-zRT8.js";import"./paper-plane-BuXAAdlj.js";import"./index-7ZhckGC4.js";import"./less-DXmDlvC3.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
