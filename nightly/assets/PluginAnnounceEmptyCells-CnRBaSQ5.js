import{j as t}from"./iframe-BzFFzKD_.js";import{useMDXComponents as n}from"./index-CZpqZls8.js";import{I as i,F as m}from"./CommandsAndQueries-98tICPmn.js";import{M as p,C as s}from"./blocks-Dfn8aDA2.js";import"./Tag-Du7Hh6Mn.js";import"./index-BnnU1inb.js";import"./copy-CYosl6Ho.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BlawaMrj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-s8GS1odQ.js";import"./index-CjTZ8O9p.js";import"./index-BTogfKzr.js";import"./Link-CMUJ7C_U.js";import"./index-DDykH0pl.js";import"./index-DXrTedKP.js";import"./index-DWEvXFon.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DUUeXWCw.js";import"./addCustomCSSWithScoping-26WgEUoU.js";import"./index-BkRjFulW.js";import"./information-ItcJqxXi.js";import"./sys-enter-2-Y1mMTef-.js";import"./alert-BnuKtxZV.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CJxmxwdy.js";import"./delete-DvlzQjzU.js";import"./settings-BtDwJkQy.js";import"./NoData-RN4fv0I6.js";import"./IllustratedMessage-22prqt92.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-CuqFQkP0.js";import"./index-BZwhzjSN.js";import"./index-DeWW5-Td.js";import"./slim-arrow-down-CQstKHsd.js";import"./Input-DWRBGriJ.js";import"./ResponsivePopoverCommon.css-Dh0AbpYk.js";import"./ValueStateMessage.css-D95mkauN.js";import"./Suggestions.css-B-ge1jIP.js";import"./ListBoxItemGroupTemplate-Duu4RMpx.js";import"./ComboBoxItemGroup-C3kd4aNe.js";import"./ListItemBaseTemplate-25qboxfo.js";import"./Token-D-De-6_k.js";import"./ScrollEnablement-CN1jgR1Z.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CKrmQxvq.js";import"./ToggleButton-CD3XCDqC.js";import"./SuggestionItem-DfQZW9Bt.js";import"./index-DlK_9Aw2.js";import"./Option-DGgXyVE9.js";import"./index-kQWOveMj.js";import"./SegmentedButton-BD5wjYvX.js";import"./index-DPt3z0Xm.js";import"./Select-Biz1LhyR.js";import"./InvisibleMessage-DAn4ghj3.js";import"./slim-arrow-down-Dy8U4h34.js";import"./index-BpbvvaJA.js";import"./index-BNuehqek.js";import"./index-T2JpUHkX.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CXv10JXZ.js";import"./group-2-BaX0RAg9.js";import"./sort-descending-C1aqy8QD.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-HIY5U8Xd.js";import"./utils-BOfme5mX.js";import"./index-DEFnuKWD.js";import"./index-BqaTO31J.js";import"./index-lM2ViReC.js";import"./navigation-down-arrow-DyEHJO4J.js";import"./navigation-right-arrow-DOrImmdb.js";import"./navigation-right-arrow-XetH_fh1.js";import"./useCurrentTheme-KwChezx1.js";import"./IndicationColor-DVw-fSM_.js";import"./index-5mNQu9kN.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CtHY0-jf.js";import"./paper-plane-BYoF07I-.js";import"./index-BVE1VzVn.js";import"./less-BAX0c4ch.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
