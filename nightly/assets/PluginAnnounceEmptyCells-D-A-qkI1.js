import{j as t}from"./iframe-Ra0xSmd4.js";import{useMDXComponents as i}from"./index-B1uewCO1.js";import{I as n}from"./CommandsAndQueries-BEtDWerI.js";import{M as m,C as p}from"./blocks-B8uzJZ3S.js";import"./Tag-vCzc8lpN.js";import"./index-DhDYAwwg.js";import"./copy-Cehqzola.js";import{F as s}from"./Footer-BXZI9V38.js";import"./PageNotFound-DAzm2SbT.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-ssQBIa1a.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-Cw9gqE6M.js";import"./index-UbhsERGe.js";import"./index-DxchSxRT.js";import"./index-BhvLG_bo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cr-PyOpa.js";import"./addCustomCSSWithScoping-CcLMh_2y.js";import"./index-CCqLDoAJ.js";import"./index-CiJZaHkZ.js";import"./index-Dh9i0xFK.js";import"./information-hzJ5lLQH.js";import"./sys-enter-2-weVfOb1a.js";import"./alert-BkoFHfp8.js";import"./index-BHry3UrI.js";import"./Illustrations-DuEXDQCv.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BzAfa2O0.js";import"./delete-BlJSnspk.js";import"./settings-CnhD6x-f.js";import"./NoData-BRWK73b6.js";import"./NoFilterResults-ByK9y8bo.js";import"./index-hlONtznb.js";import"./IllustratedMessage-DH81lWhH.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-DADJiQQB.js";import"./Input-hYN12Gd7.js";import"./ResponsivePopoverCommon.css-D79T12cj.js";import"./ValueStateMessage.css-BEyluAo8.js";import"./Suggestions.css-CZemgMCI.js";import"./ListBoxItemGroupTemplate-CkuipRkL.js";import"./ComboBoxItemGroup-BjqeHnC8.js";import"./ListItemBaseTemplate-DDF3F_sC.js";import"./Token-CsZP01nz.js";import"./ScrollEnablement-Dp-oqGSv.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CFffdE_7.js";import"./ToggleButton-BCMZO5K5.js";import"./multiselect-all-C9UpqjqM.js";import"./SuggestionItem-CRRSDxMr.js";import"./index-CgESqE8U.js";import"./Option-BToNbCEU.js";import"./index-BgXYskEj.js";import"./SegmentedButton-CdZJl0fK.js";import"./index-InyxuXtV.js";import"./Select-xNN_GioC.js";import"./InvisibleMessage-Nn0M2iFm.js";import"./index-CIhvul5w.js";import"./index-pIofiyof.js";import"./index-BBRryWn1.js";import"./index-C7nsWfZ0.js";import"./IconDesign-DXd8PPVF.js";import"./filter-7YCHc_s2.js";import"./group-2-BOcnnuw4.js";import"./sort-descending-Cgjiy5DM.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BodfA0Gi.js";import"./utils-BLx_e7Yk.js";import"./index-qcFZyMu_.js";import"./index-DYjZTUhi.js";import"./index-DjymOdJY.js";import"./navigation-down-arrow-BWhK4CvM.js";import"./navigation-right-arrow-eBw-UtsM.js";import"./navigation-right-arrow-Buva5oL1.js";import"./useCurrentTheme-BUBcvRiI.js";import"./index-mlILjk2I.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DQnXSe3U.js";import"./paper-plane-CivMq3tA.js";import"./index-BKI5E3Yv.js";import"./less-WQ1GwY14.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
