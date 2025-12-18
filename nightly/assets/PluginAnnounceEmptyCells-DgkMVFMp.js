import{j as t}from"./iframe-DE5WqRSI.js";import{useMDXComponents as n}from"./index-DVGykmsi.js";import{I as i,F as m}from"./CommandsAndQueries-CT_qy-L6.js";import{M as p,C as s}from"./blocks-CybNjylu.js";import"./Tag-DXduP7K6.js";import"./index-BqsIcBTd.js";import"./copy-CmTK1gpG.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-C3OL6pAr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C3HZg113.js";import"./index-Bo0MdSU9.js";import"./index-CxE79HQo.js";import"./Link-BcyJtysS.js";import"./index-EXtiqGa7.js";import"./index-DF_fIzZz.js";import"./index-BoscFH1P.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CURCJNNc.js";import"./addCustomCSSWithScoping-CHzs5Kt8.js";import"./index-C1194UdL.js";import"./information-CfYTqUOR.js";import"./sys-enter-2-Dqu1QcV8.js";import"./alert-Dotce8LG.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D8bIdqWY.js";import"./delete-DoYichJ9.js";import"./settings-CZU_ZJ1W.js";import"./NoData-CZpLmT-x.js";import"./IllustratedMessage-LENPWSEm.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-BgR1eZwE.js";import"./index-B3Xqsb1Q.js";import"./index-R106sdPA.js";import"./slim-arrow-down-C4VKqtzG.js";import"./Input-DlArSVkv.js";import"./ResponsivePopoverCommon.css-Cq6LxgIa.js";import"./ValueStateMessage.css-Cn051aSB.js";import"./Suggestions.css-Bdq3EXqW.js";import"./ListBoxItemGroupTemplate-CyrDSXZo.js";import"./ComboBoxItemGroup-TKl3BoRz.js";import"./ListItemBaseTemplate-B03-wmFo.js";import"./Token-Dg7qiry7.js";import"./ScrollEnablement-B1rg2zRK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CFNpTG6Z.js";import"./ToggleButton-Zt7gvlFv.js";import"./SuggestionItem-D5tKUGZ0.js";import"./index-DiH8R-tE.js";import"./Option-CXIWrKVD.js";import"./index-BQ0OFhZj.js";import"./SegmentedButton-CcDlKKiv.js";import"./index-C0g5pUuk.js";import"./Select-BvpJxR_5.js";import"./InvisibleMessage-BlCBqyND.js";import"./slim-arrow-down-DEwJBIUS.js";import"./index-mUAstY9h.js";import"./index-B9aDXKRc.js";import"./index-CqMTF644.js";import"./index-BcVPuJ_0.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DttNweVC.js";import"./group-2-C61vdaG7.js";import"./sort-descending-MtSyw_8y.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CUv9Snax.js";import"./utils-B-5aInVE.js";import"./index-DcmdwFOG.js";import"./index-CIbFjeJU.js";import"./index-kbflT9HY.js";import"./navigation-down-arrow-D2MASbC_.js";import"./navigation-right-arrow-DYEDqb8B.js";import"./navigation-right-arrow-Ba2Y3uGG.js";import"./useCurrentTheme-CKsG-a7q.js";import"./index-DnEL084z.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BThYFQYx.js";import"./paper-plane-CxhIT5X8.js";import"./index-CyZOZ66H.js";import"./less-BXwZj-_-.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
