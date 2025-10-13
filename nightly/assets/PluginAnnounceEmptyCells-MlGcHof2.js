import{j as t}from"./iframe-mZIFexBi.js";import{useMDXComponents as n}from"./index-CSeyhL4L.js";import{I as i,F as m}from"./CommandsAndQueries-_DqxABXw.js";import{M as p,C as s}from"./blocks-pMMBqTak.js";import"./Tag-C5S5wO6X.js";import"./index-CY-KcLEe.js";import"./copy-CK4YnSbS.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BoAMcLKN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bym-t_ma.js";import"./index-BFs_s1ec.js";import"./index-CPook487.js";import"./Link-Dky_yGkw.js";import"./index-BbeYDVUM.js";import"./index-DCVKeCrB.js";import"./index-B61-jGoN.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B9FjHI5t.js";import"./addCustomCSSWithScoping-BJ-ZUtqt.js";import"./index-DbDxOjYs.js";import"./information-CuCRdO66.js";import"./sys-enter-2-Da-bg0qX.js";import"./alert-4bZr7bHx.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-8CMZVnD3.js";import"./delete-DgxKkLgT.js";import"./settings-CyhNrSEc.js";import"./NoData-CX0o0XVo.js";import"./IllustratedMessage-Dz80uH_8.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-bMeRj9cL.js";import"./index--VBMnPTW.js";import"./index-BY9PhD7r.js";import"./slim-arrow-down-CoGBvzbB.js";import"./Input-DjI1lAlw.js";import"./ResponsivePopoverCommon.css-caZWKg7m.js";import"./ValueStateMessage.css-ZpzMuhyf.js";import"./Suggestions.css-BNm2UgCq.js";import"./ListBoxItemGroupTemplate-BHiiI4XH.js";import"./ComboBoxItemGroup-DuYnLx9L.js";import"./ListItemBaseTemplate-Bo0wwbfF.js";import"./Token-BepZXm1A.js";import"./ScrollEnablement-C8KKYJfQ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BsmNnGjy.js";import"./ToggleButton-PXrRdKUI.js";import"./SuggestionItem-DBDH_Z95.js";import"./index-BeLlboZI.js";import"./Option-DS0ajgcB.js";import"./index-D2shRfFO.js";import"./SegmentedButton-gpHzBIZT.js";import"./index-BilcGZ4z.js";import"./Select-BbAKcpZr.js";import"./InvisibleMessage-D8WcmxR1.js";import"./slim-arrow-down-C4kKcs0A.js";import"./index-ClKkYnAD.js";import"./index-BDLJAHfH.js";import"./index-Bdr-0gsP.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DmZ5vjU1.js";import"./group-2-C25AltrU.js";import"./sort-descending-Baid0H05.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C63IWCLZ.js";import"./utils-KJEZQBk-.js";import"./index-C2MqkFzJ.js";import"./index-BjtYM8CZ.js";import"./index-BY87GbXm.js";import"./navigation-down-arrow-BYh6gvU2.js";import"./navigation-right-arrow-Bahnb797.js";import"./navigation-right-arrow-BsXFygcD.js";import"./useCurrentTheme-BuH74dbv.js";import"./IndicationColor-DVw-fSM_.js";import"./index-COLPdMln.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-7fZVXrnl.js";import"./paper-plane-uFnaxlDc.js";import"./index-ClRWdTR1.js";import"./less-CfJ4xBPp.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
