import{j as t}from"./iframe-BfEtcTHs.js";import{useMDXComponents as n}from"./index-CPCxp1pX.js";import{I as i,F as m}from"./CommandsAndQueries-XBwAul-0.js";import{M as p,C as s}from"./blocks-BEk0eltt.js";import"./Tag-5zjMhKbj.js";import"./index-Cdy39dSN.js";import"./copy-CuNW8uGj.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-iqlA5Rsi.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CpslN8bF.js";import"./index-C2AzqXEp.js";import"./index-BoD67Q0d.js";import"./Link-Dx6E4Ul6.js";import"./index-zG-h4Dtj.js";import"./index-DZog4k2R.js";import"./index-SIE8WAww.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DzVstS1R.js";import"./addCustomCSSWithScoping-BOC9QupD.js";import"./index-BwoaU2AB.js";import"./information-DXNiXlp4.js";import"./sys-enter-2-Da7fZjtE.js";import"./alert-sulwnQm9.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DefV3fg4.js";import"./delete-DRp_vKLL.js";import"./settings-8cBiGhEo.js";import"./NoData-DRiCv3V7.js";import"./IllustratedMessage-BcierAe3.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DC3p8tpO.js";import"./index-BU6h6RcY.js";import"./index-inlCeEQP.js";import"./slim-arrow-down-PFXKhKTH.js";import"./Input-kpy9MJfL.js";import"./ResponsivePopoverCommon.css-DnHFDVo1.js";import"./ValueStateMessage.css-71Kwz1nQ.js";import"./Suggestions.css-CVcapq67.js";import"./ListBoxItemGroupTemplate-Yo3vvIxC.js";import"./ComboBoxItemGroup-CVRBhhBV.js";import"./ListItemBaseTemplate-BekWMZBh.js";import"./Token-jUwPkdch.js";import"./ScrollEnablement-CI0R8iiH.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CRg3tQau.js";import"./ToggleButton-C-eT4TLR.js";import"./SuggestionItem-BFsIrsax.js";import"./index-C-6LBD30.js";import"./Option-Bnm7Q230.js";import"./index-BbL5VZ3R.js";import"./SegmentedButton-CyHKGesR.js";import"./index-BX9NA7Ty.js";import"./Select-CHLFQnon.js";import"./InvisibleMessage-c4INzckP.js";import"./slim-arrow-down-C0u-ePLI.js";import"./index-CGv8fhvM.js";import"./index-oDy6hXsG.js";import"./index-BywWnLvF.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Ceyg-lSX.js";import"./group-2-DC-4yjr6.js";import"./sort-descending-C2KIxNMI.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bx6m_JwS.js";import"./utils-lSaTNz_p.js";import"./index-DKB6a4-7.js";import"./index-BKyhgX99.js";import"./index-B2EjrpGu.js";import"./navigation-down-arrow-BfqJo7nx.js";import"./navigation-right-arrow-BDRcromZ.js";import"./navigation-right-arrow-DPFdFbno.js";import"./useCurrentTheme-K8lHxNsa.js";import"./IndicationColor-DVw-fSM_.js";import"./index-SiSH1lpP.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DwLDEYmZ.js";import"./paper-plane-C_6zFKE6.js";import"./index-BlUB7lqP.js";import"./less-BJgq7N11.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
