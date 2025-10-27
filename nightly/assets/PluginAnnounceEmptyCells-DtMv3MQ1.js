import{j as t}from"./iframe-CRoIzMtp.js";import{useMDXComponents as n}from"./index-uepxEeS1.js";import{I as i,F as m}from"./CommandsAndQueries-tg7iHgNo.js";import{M as p,C as s}from"./blocks-BWnl8hC4.js";import"./Tag-pVHInn9_.js";import"./index-l4qALITX.js";import"./copy-D8-Me-o2.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CFWmLjr3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C8wLfWwH.js";import"./index-BWA_OWVW.js";import"./index-83H_WNAi.js";import"./Link-ByRh7pJY.js";import"./index-DCZY0XoF.js";import"./index-BGCNx8iW.js";import"./index-Cq7XEcI3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbjPHeWw.js";import"./addCustomCSSWithScoping-DJ9mEG-L.js";import"./index-BY3Vu1_E.js";import"./information-DT5Qd4to.js";import"./sys-enter-2-DutWnZ3I.js";import"./alert-D-9oczO0.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CZqnIIDb.js";import"./delete-b07efbAK.js";import"./settings-BMkFX08h.js";import"./NoData-CDKe2yZc.js";import"./IllustratedMessage-C6IdXkA-.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-B1fpeMFI.js";import"./index-CBp7IYzb.js";import"./index-CZSKEI2W.js";import"./slim-arrow-down-unBoSxLD.js";import"./Input-BJBDq8St.js";import"./ResponsivePopoverCommon.css-CCSjtQV1.js";import"./ValueStateMessage.css-OSunxxtw.js";import"./Suggestions.css-Zd5amcux.js";import"./ListBoxItemGroupTemplate-Ds8yjX4l.js";import"./ComboBoxItemGroup-DiOTTndh.js";import"./ListItemBaseTemplate-Dz3w6gJ_.js";import"./Token-DCFzDq3v.js";import"./ScrollEnablement-Dou-HT1U.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DLhORhWI.js";import"./ToggleButton-CRShRO6E.js";import"./SuggestionItem-MyiIEE-9.js";import"./index-CXX4KfFH.js";import"./Option-D_d9kPGY.js";import"./index-C0WpXcs5.js";import"./SegmentedButton-BmVs9vUZ.js";import"./index-Ddvt-ojw.js";import"./Select-E89SNOl_.js";import"./InvisibleMessage-CVj8QPFw.js";import"./slim-arrow-down-CVzH-elm.js";import"./index-BHRAnYFD.js";import"./index-Bsq76fTK.js";import"./index-4w5klR-o.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DMv5uK1e.js";import"./group-2-DJZ5z-ec.js";import"./sort-descending-f3hJqn9w.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DSiKbX2_.js";import"./utils-DRJGxToW.js";import"./index-ClGjasHC.js";import"./index-Ctk0qYEi.js";import"./index-DdQaW95W.js";import"./navigation-down-arrow-BvO4V2br.js";import"./navigation-right-arrow-BxNbgTzH.js";import"./navigation-right-arrow-C9LVWiyw.js";import"./useCurrentTheme-CARlTKm9.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Bk8bTaJf.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CaAE0oF3.js";import"./paper-plane-CHOxtY5p.js";import"./index-o4QSdXmu.js";import"./less-CgZWCgqn.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
