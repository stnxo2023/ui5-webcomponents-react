import{j as t}from"./iframe-D1jKIypo.js";import{useMDXComponents as n}from"./index-M1_DZHmj.js";import{I as i,F as m}from"./CommandsAndQueries-BkaxH0BE.js";import{M as p,C as s}from"./blocks-BvvvBGFc.js";import"./Tag-BqsbpO_s.js";import"./index-ClSanEKt.js";import"./copy-DgqWK_AB.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BxN-8nyj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BBeTD3z6.js";import"./index-T4x6aH8D.js";import"./index-DHEWI2kL.js";import"./Link-BTNp59uu.js";import"./index-C7kBl8gS.js";import"./index-BKZiIOM7.js";import"./index-D6PVc_6_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DRCEREPf.js";import"./addCustomCSSWithScoping-BmLQ2iz1.js";import"./index-C56hzs5D.js";import"./information-B8vikb0m.js";import"./sys-enter-2-DByg53Ih.js";import"./alert-D9Mn7721.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bisacz7e.js";import"./delete-DBpx9Uar.js";import"./settings-DT6vtujH.js";import"./NoData-Dbt8BAMA.js";import"./IllustratedMessage-Cc1RezPx.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-BxR36E9a.js";import"./index-DMuI27Hv.js";import"./index-Cg8oYFax.js";import"./slim-arrow-down-GqbbmAYy.js";import"./Input-D4NDzfB_.js";import"./ResponsivePopoverCommon.css-DN-Rc-d6.js";import"./ValueStateMessage.css-CbVwogXq.js";import"./Suggestions.css-BT6tIfnI.js";import"./ListBoxItemGroupTemplate-DH951dKz.js";import"./ComboBoxItemGroup-BkDWNxnF.js";import"./ListItemBaseTemplate-Cb9CjRMA.js";import"./Token-Bx0zxJB1.js";import"./ScrollEnablement-Duxr6xMC.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DQRvO6kb.js";import"./ToggleButton-BC4YqGk8.js";import"./SuggestionItem-DisQaTGu.js";import"./index-Bbr0CVuQ.js";import"./Option-C3-dRc9X.js";import"./index-v4ksQ3mX.js";import"./SegmentedButton-Bi6AlYab.js";import"./index-Dhc01gl4.js";import"./Select-DLU6kJay.js";import"./InvisibleMessage-DNz0AAuG.js";import"./slim-arrow-down-CPVmWMXv.js";import"./index-DtOdn5nS.js";import"./index-B0YcVQvO.js";import"./index-lQPSd5CQ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BDm3RZ5s.js";import"./group-2-sEBl_tJy.js";import"./sort-descending-CHOZqwWH.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CmFHmOLh.js";import"./utils-BMxMzzUu.js";import"./index-9CYjSZBT.js";import"./index-C-bA5g6R.js";import"./index-eeZV0lom.js";import"./navigation-down-arrow-WO_dZjFi.js";import"./navigation-right-arrow-BFrOVRzy.js";import"./navigation-right-arrow-Ct4noKTB.js";import"./useCurrentTheme-BD5qUSES.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C01Owi4P.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Ds7nh71L.js";import"./paper-plane-DnsrmLa8.js";import"./index-XD1hamhe.js";import"./less-uxHdLqH7.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
