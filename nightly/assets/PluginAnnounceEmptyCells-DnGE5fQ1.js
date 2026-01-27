import{j as t}from"./iframe-CB_qmYI8.js";import{useMDXComponents as n}from"./index-CUbKt2T4.js";import{I as i,F as m}from"./CommandsAndQueries-HFp-4-55.js";import{M as p,C as s}from"./blocks-DzH1842d.js";import"./Tag-BYvfvCLi.js";import"./index-BfAPJluR.js";import"./copy-DF2Z1I-X.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-23cGt9Fu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-R89IEGRw.js";import"./index-SxWu56C4.js";import"./index-DE9gqn8Y.js";import"./Link-BRHRm_Z2.js";import"./index-C0flI_9Q.js";import"./index-At4nCxiD.js";import"./index-6WmsPmX0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ClKIXNm7.js";import"./addCustomCSSWithScoping-9v1tewFq.js";import"./index-03LyQe5H.js";import"./information-CRpELSoZ.js";import"./sys-enter-2-DeQtcYtY.js";import"./alert-Bc8RvQjV.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DoIcej0d.js";import"./delete-h5Qd2W2H.js";import"./settings-CSx4aPPi.js";import"./NoData-BrRr6rJG.js";import"./IllustratedMessage-P-eTSBPb.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-C4AhZadB.js";import"./index-BecbeCsX.js";import"./index-4XDdM9qY.js";import"./slim-arrow-down-COs4Wkey.js";import"./Input-C9UjHzpz.js";import"./ResponsivePopoverCommon.css-DeWNHY7M.js";import"./ValueStateMessage.css-C_C4YLjN.js";import"./Suggestions.css-BiWmWxsR.js";import"./ListBoxItemGroupTemplate-CMTiHLs-.js";import"./ComboBoxItemGroup-CO3bHj-e.js";import"./ListItemBaseTemplate-DB4BankB.js";import"./Token-Bn2Z9z3x.js";import"./ScrollEnablement-zi7znCts.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cv8isNSi.js";import"./ToggleButton-CS3KiBib.js";import"./SuggestionItem-CS7L8vuq.js";import"./index-BmjeN9M0.js";import"./Option-DDYwfZPs.js";import"./index-BiQ1de6A.js";import"./SegmentedButton-B8To13C-.js";import"./index-MDU9FtHu.js";import"./Select-DhuDrd7S.js";import"./InvisibleMessage-Ds6r8Hv8.js";import"./slim-arrow-down-jIayUIlb.js";import"./index-DDk-oOqz.js";import"./index-CTC0a4Ev.js";import"./index-BvRf3EEd.js";import"./index-D2nb9FR-.js";import"./IconDesign-DXd8PPVF.js";import"./filter-J7STKAsw.js";import"./group-2-bvY_SkSU.js";import"./sort-descending-7NVh3v7n.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BUpkmw30.js";import"./utils-D98SoFu_.js";import"./index-CN6SBPye.js";import"./index-BhZzLROS.js";import"./index-Y1-1V0is.js";import"./navigation-down-arrow-BV093n8q.js";import"./navigation-right-arrow-hA-Kw1uy.js";import"./navigation-right-arrow-BYDjRs4q.js";import"./useCurrentTheme-C9z11eLv.js";import"./index-CPVT_XbL.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-NAZbOjtu.js";import"./paper-plane-DaL2oIMz.js";import"./index-B9MOWJBA.js";import"./less-CxZT17u6.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
