import{j as t}from"./iframe-DeqKlIRG.js";import{useMDXComponents as n}from"./index-BkEa29Df.js";import{I as i,F as m}from"./CommandsAndQueries-BK0G3Pqq.js";import{M as p,C as s}from"./blocks-C1D2jvVQ.js";import"./Tag-EQmX-47F.js";import"./index-CW-zKJIF.js";import"./copy-DS8sFIJH.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Z7tjv5z3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BnqCxbWG.js";import"./index-D3fIG7Vo.js";import"./index-vsoaIVfP.js";import"./Link-DmriJHN9.js";import"./index-DZSRf0vt.js";import"./index-CUp9ZC_J.js";import"./index-BjGpgXu_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CD5youlR.js";import"./addCustomCSSWithScoping-W7fjoweE.js";import"./index-CNR4ri7j.js";import"./information-BKTQWge_.js";import"./sys-enter-2-qREtxQiM.js";import"./alert-J7MXwQPX.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DcfttK52.js";import"./delete-CzjS8jKj.js";import"./settings-BFTpzi3p.js";import"./NoData-DdbvMWeu.js";import"./IllustratedMessage-CwaNkNxb.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BrUTDG_M.js";import"./index-BJzWWHia.js";import"./index-DQNorMfg.js";import"./slim-arrow-down--R6acl1m.js";import"./Input-CTbiGavu.js";import"./ResponsivePopoverCommon.css-Dch4WVjM.js";import"./ValueStateMessage.css-DQDynnzI.js";import"./Suggestions.css-CqAFo46i.js";import"./ListBoxItemGroupTemplate-UGwk5YiJ.js";import"./ComboBoxItemGroup-DEdZ8U8Z.js";import"./ListItemBaseTemplate-D5-84s4y.js";import"./Token-ZAjnmiMh.js";import"./ScrollEnablement-C5rzfotJ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B8djI9Ll.js";import"./ToggleButton-BzmaRDgs.js";import"./SuggestionItem-DHUQVhWq.js";import"./index-Bm1-k_-z.js";import"./Option-CmUx6ft0.js";import"./index-CNAnBr4X.js";import"./SegmentedButton-DpjYxYdV.js";import"./index-DQlxzy1B.js";import"./Select-DC3vLiGW.js";import"./InvisibleMessage-BnUatQiz.js";import"./slim-arrow-down-BD3ZShnB.js";import"./index-BWbOjgM2.js";import"./index-DkHfyO0R.js";import"./index-CSAT2Cv9.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DqGeWKN9.js";import"./group-2-CtuKuo3j.js";import"./sort-descending-e-Z9IEx-.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DpduKTu4.js";import"./utils-DFYX2ngj.js";import"./index-x8ATXu-z.js";import"./index-0XnoPyy6.js";import"./index-BvUS6apf.js";import"./navigation-down-arrow-C1Mzx0eB.js";import"./navigation-right-arrow-Dfh_jGI5.js";import"./navigation-right-arrow-Cc3Z_knn.js";import"./useCurrentTheme-DWe2YqPm.js";import"./IndicationColor-DVw-fSM_.js";import"./index-UBCMfYla.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B59bvvXz.js";import"./paper-plane-DJj7TsmY.js";import"./index-BGawmT5r.js";import"./less-DyqqT9US.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
