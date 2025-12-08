import{j as t}from"./iframe-C4t4IgBC.js";import{useMDXComponents as n}from"./index-Mw7OJb9H.js";import{I as i,F as m}from"./CommandsAndQueries-D8F1OdPA.js";import{M as p,C as s}from"./blocks-BBLZG0oz.js";import"./Tag-CDNtFOv1.js";import"./index-Dn3tX0-p.js";import"./copy-Cuc5dF6S.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-V6ifSjCg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C_e2hqHh.js";import"./index-DHWon9Pg.js";import"./index-CWVWkCUh.js";import"./Link-DmVNlXZz.js";import"./index-BTZMG5sJ.js";import"./index-DoEQkKHr.js";import"./index-B9hc6QqK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BVHmgfEk.js";import"./addCustomCSSWithScoping-BpxylvhK.js";import"./index-nQT45DkO.js";import"./information-ChMVL_f6.js";import"./sys-enter-2-qiLZ6lMH.js";import"./alert-CRjt_mFI.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-oxvyxDGg.js";import"./delete-D2fGGkgG.js";import"./settings-BzwMkjoZ.js";import"./NoData-svbafsAZ.js";import"./IllustratedMessage-CgB73CZ_.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-B1hxL8l_.js";import"./index-CE4-T5o8.js";import"./index-BVxOFa0i.js";import"./slim-arrow-down-C7wr2wWx.js";import"./Input-Cwg3cKtN.js";import"./ResponsivePopoverCommon.css-BxW6PWv_.js";import"./ValueStateMessage.css-BgyK2iA6.js";import"./Suggestions.css-Dcdd-5zD.js";import"./ListBoxItemGroupTemplate-CxNkfiJO.js";import"./ComboBoxItemGroup-_wxpn53X.js";import"./ListItemBaseTemplate-BbBKRL88.js";import"./Token-qGW5fzs1.js";import"./ScrollEnablement-36SXz3Hc.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Ct25_r8s.js";import"./ToggleButton-CfDXNWyK.js";import"./SuggestionItem-CJwimrS_.js";import"./index-CPA6F2o0.js";import"./Option-BqPc7Xaz.js";import"./index-Daus8hUA.js";import"./SegmentedButton-E0ssPtu-.js";import"./index-CKAEMoq5.js";import"./Select-C-ie4pXP.js";import"./InvisibleMessage-Cy5GYkqO.js";import"./slim-arrow-down-CSCnEpSC.js";import"./index-BssGtCQL.js";import"./index-ChIKHgsp.js";import"./index-aUdUg_A0.js";import"./index-CHTmrhF4.js";import"./IconDesign-DXd8PPVF.js";import"./filter--qgSY2tr.js";import"./group-2-AzeUAacZ.js";import"./sort-descending-C8HEqCX3.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-bUr-dgTA.js";import"./utils-C40Oa032.js";import"./index-C6p9FXGA.js";import"./index-CJmM4Vgv.js";import"./index-BwGmy4E4.js";import"./navigation-down-arrow-D-VRAhaE.js";import"./navigation-right-arrow-BeV5rlT5.js";import"./navigation-right-arrow-CkaVVkuI.js";import"./useCurrentTheme-w37MUDwR.js";import"./index-BmlceBp1.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-w_ivh6EU.js";import"./paper-plane-Dc-sk_g4.js";import"./index-BBX-5EM_.js";import"./less-D5VcceqT.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
