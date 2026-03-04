import{j as t}from"./iframe-BCeV4J61.js";import{useMDXComponents as n}from"./index-DQSXUrY-.js";import{I as i,F as m}from"./CommandsAndQueries-BMt6Du51.js";import{M as p,C as s}from"./blocks-BaqdfAa9.js";import"./Tag-Bzl_4yyv.js";import"./index-DSCCKcvn.js";import"./copy-BLLS_Koh.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-p2TBitSL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D6AOhQcP.js";import"./index-BqI0DRaf.js";import"./index-CTun36xm.js";import"./Link-C83i_H7y.js";import"./index-BaMmnI_0.js";import"./index-Dd7n1xMP.js";import"./index-C_9CrSf5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-xuzVGY3l.js";import"./addCustomCSSWithScoping-Bz6BhAjV.js";import"./index-MH0uXub1.js";import"./information-DsxmrLjJ.js";import"./sys-enter-2-DTJ11PLs.js";import"./alert-BPfUUxXP.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DepvYq9l.js";import"./delete-DVWCX9kC.js";import"./settings-CsQavQXZ.js";import"./NoData-B5oeo5kD.js";import"./IllustratedMessage-KukoJbKs.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-BPCWQtRS.js";import"./index-CoJmn4Yy.js";import"./index-DWP4Fzr6.js";import"./slim-arrow-down-BbmvWyWt.js";import"./Input-BdR3eabn.js";import"./ResponsivePopoverCommon.css-C2w1fqZM.js";import"./ValueStateMessage.css-CWUCP2jh.js";import"./Suggestions.css-Jm5XbPUR.js";import"./ListBoxItemGroupTemplate-DoQGXH2K.js";import"./ComboBoxItemGroup-SSqFciiI.js";import"./ListItemBaseTemplate-B-HxI0mr.js";import"./Token-CVeMAn7C.js";import"./ScrollEnablement-D6HdbXM3.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CtPLPajr.js";import"./ToggleButton-cGf9jpQr.js";import"./SuggestionItem-lE3aTa1o.js";import"./index-Cuu5RXhJ.js";import"./Option-O-FsfY6r.js";import"./index-e3RQM6ba.js";import"./SegmentedButton-YPERwD_1.js";import"./index-BVgvpLqI.js";import"./Select-BDp6Bw0F.js";import"./InvisibleMessage-D4FAyCwP.js";import"./slim-arrow-down-ClrsC2ro.js";import"./index-BxOecRVs.js";import"./index-Ch8eD88C.js";import"./index-DaqBjD0S.js";import"./index-J52IetZK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-H3EEYKpA.js";import"./group-2-DnxmYItq.js";import"./sort-descending-B08sQLL8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-pwQzdFN3.js";import"./utils-CsNciHqm.js";import"./index-jccjEr8p.js";import"./index-DYxx-EtR.js";import"./index-BkYe_VJy.js";import"./navigation-down-arrow-BlqpuI4E.js";import"./navigation-right-arrow-ClXC1YSw.js";import"./navigation-right-arrow-B8F7f_GM.js";import"./useCurrentTheme-8k0wl0rJ.js";import"./index-aypRBSpr.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BbNqKuvZ.js";import"./paper-plane-BDKzrgnv.js";import"./index-CvRy4k66.js";import"./less-0SXq5Fj1.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
