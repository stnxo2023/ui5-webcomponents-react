import{j as t}from"./iframe-MOZTZvx5.js";import{useMDXComponents as n}from"./index-Dg_uAO8t.js";import{I as i,F as m}from"./CommandsAndQueries-D1cXr-nE.js";import{M as p,C as s}from"./blocks-OWx-zaQy.js";import"./Tag-D4CUHK9_.js";import"./index-BgV1CUPM.js";import"./copy-1ZgkFucr.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Cw0HPS5N.js";import"./preload-helper-PPVm8Dsz.js";import"./index-jWV64fa4.js";import"./index-Wo6cIUDI.js";import"./index-BVuz7GOm.js";import"./Link-D6y2NVEd.js";import"./index-D_H2FzQ8.js";import"./index-BfSH4rx9.js";import"./index-CT3JBxRK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DgDY8vOY.js";import"./addCustomCSSWithScoping-C-qiC_lj.js";import"./index-Vm6d87Cs.js";import"./information-BmrOjFlN.js";import"./sys-enter-2-CJ54mtHu.js";import"./alert-CvnXXdTy.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DhneGV7w.js";import"./delete-Bn5gdNgE.js";import"./settings-Cbx-epPE.js";import"./NoData-BJR7iwul.js";import"./IllustratedMessage-YE7gLYpT.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-Jm7E3NGo.js";import"./index-C8xadZxD.js";import"./index-BLa13CRy.js";import"./slim-arrow-down-Cc4bNxF2.js";import"./Input-VwoOlGdU.js";import"./ResponsivePopoverCommon.css-NhonNuZc.js";import"./ValueStateMessage.css-B4GAmP9X.js";import"./Suggestions.css-DA1a_gYi.js";import"./ListBoxItemGroupTemplate-Dx4qYl7E.js";import"./ComboBoxItemGroup-Bw3Iaycs.js";import"./ListItemBaseTemplate-BZSLWu4w.js";import"./Token-DbnH4QPK.js";import"./ScrollEnablement-BN64g5L9.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-3bCIQ3yY.js";import"./ToggleButton-OlwgaROV.js";import"./SuggestionItem-CQ-oefH8.js";import"./index-oXUFSANu.js";import"./Option-U0m19n5L.js";import"./index-CY3YewAo.js";import"./SegmentedButton-rkgekSAQ.js";import"./index-C9UJ92uP.js";import"./Select-HunAogfG.js";import"./InvisibleMessage-B6eggr2u.js";import"./slim-arrow-down-CSnytLmB.js";import"./index-DKau9-Kv.js";import"./index-CnG-Mf1G.js";import"./index-ChNWUHOB.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CNuVE1dN.js";import"./group-2-DYeh0LPK.js";import"./sort-descending-CVlDQhaZ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BcUA259N.js";import"./utils-BOAuSk9m.js";import"./index-BUkrgD3V.js";import"./index-BbzY9xji.js";import"./index-NwVlg13M.js";import"./navigation-down-arrow-Dw2CvikE.js";import"./navigation-right-arrow-DRazBLZW.js";import"./navigation-right-arrow-BxyRDEC9.js";import"./useCurrentTheme-wbA7IpXG.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Bdi_NLBI.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Csl6zSRf.js";import"./paper-plane-DH1_vU7X.js";import"./index-Bs-jL4oy.js";import"./less-DPf2C5zX.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
