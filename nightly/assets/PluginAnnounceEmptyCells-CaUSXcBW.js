import{j as t}from"./iframe-J46VriOb.js";import{useMDXComponents as i}from"./index-CBla0wLi.js";import{I as n}from"./CommandsAndQueries-BzSXHbZJ.js";import{M as m,C as p}from"./blocks-beoBu_qL.js";import"./Tag-DrBKyONn.js";import"./index-_u-v5yqi.js";import"./copy-_0TxAB6h.js";import{F as s}from"./Footer-CEGsJe_E.js";import"./PageNotFound-D29obeve.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-XTlMfWCW.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-B4FJ2xg8.js";import"./index-Dw3YBt24.js";import"./index-D6itq-2d.js";import"./index-aps2uNQB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DxsI6DA6.js";import"./addCustomCSSWithScoping-Dl6_6-AL.js";import"./index-BrGkrW3e.js";import"./index-Dt6WNWTR.js";import"./index-CT7sD2iL.js";import"./information-CATkPoRV.js";import"./sys-enter-2-Cc8Mj3l6.js";import"./alert-BWP7y2xA.js";import"./index-BkIHYavW.js";import"./Illustrations-D_iUtabn.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-btyj-n1J.js";import"./delete-w_D0ZxLs.js";import"./settings-CHNKlAkf.js";import"./NoData-B7hCCw2Z.js";import"./NoFilterResults-TM2aQCOr.js";import"./index-CvMK6PYJ.js";import"./IllustratedMessage-wrAyyr2h.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BFOs-Db_.js";import"./Input-Ba21Wr_4.js";import"./ResponsivePopoverCommon.css-jKJxzQ6F.js";import"./ValueStateMessage.css-DSOKYmKE.js";import"./Suggestions.css-Dd_ULqQN.js";import"./ListBoxItemGroupTemplate-CJFWume4.js";import"./ComboBoxItemGroup-DHNlD9r0.js";import"./ListItemBaseTemplate-Y3fZL33H.js";import"./Token-By8nCId5.js";import"./ScrollEnablement-DNtDiy2E.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DkLkb57T.js";import"./ToggleButton-BxPz-GTU.js";import"./multiselect-all-DC8IMVm_.js";import"./SuggestionItem-0qJhTGlF.js";import"./index-EIhpcBKD.js";import"./Option-85_JDqIM.js";import"./index-DndhKC0q.js";import"./SegmentedButton-Bu_1Yz2B.js";import"./index-CdHvy4_O.js";import"./Select-lRdI9G8v.js";import"./InvisibleMessage-BkeQHp1j.js";import"./index-DVv2dwtw.js";import"./index-C0C2EsKY.js";import"./index-l12WwH3D.js";import"./index-Pf84_VDN.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BL1LVhNe.js";import"./group-2-CtFUB3dY.js";import"./sort-descending-DzIXikcM.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-nxr8rbf1.js";import"./utils-q85ajM_8.js";import"./index-D3xzwzot.js";import"./index-Czrl39Ja.js";import"./index-DgMAqzON.js";import"./navigation-down-arrow-DM7-1YlX.js";import"./navigation-right-arrow-C2J9fEdo.js";import"./navigation-right-arrow-D_foC3d9.js";import"./useCurrentTheme-jWg-wmyT.js";import"./index-Bb5UG2kc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CWARZAlF.js";import"./paper-plane-BymcWAKh.js";import"./index-BTeoJAdU.js";import"./less-61CakwDD.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
