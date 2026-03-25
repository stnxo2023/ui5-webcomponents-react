import{j as t}from"./iframe-DNJyEiMc.js";import{useMDXComponents as i}from"./index-Buf0tSMZ.js";import{I as n}from"./CommandsAndQueries-Buhz4vLI.js";import{M as m,C as p}from"./blocks-Cd1leuxf.js";import"./Tag-D8I94QaD.js";import"./index-BGa7wgQo.js";import"./copy-DriogBoE.js";import{F as s}from"./Footer-DsUhWQr2.js";import"./PageNotFound-CGNJPiuA.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-C53u1_Kf.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CHa9FW0P.js";import"./index-bWFHrqMY.js";import"./index-DcpLgbSq.js";import"./index-BNiXpovA.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cm_sH4gX.js";import"./addCustomCSSWithScoping-QHxNEQro.js";import"./index-CRk1MYZt.js";import"./index-DfQ2RFhn.js";import"./index-C8jwJsjc.js";import"./information-CKmAqDt9.js";import"./sys-enter-2-D1jYlQdI.js";import"./alert-BbM4Afj3.js";import"./index-DbBWaCWe.js";import"./Illustrations-8c1koKlL.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-LDPF3a89.js";import"./delete-cDZQdjVT.js";import"./settings-1s8BgQ_X.js";import"./NoData-WB6dabXf.js";import"./NoFilterResults-C5qt1K5x.js";import"./index-B8R9QwDI.js";import"./IllustratedMessage-DYh6wrAv.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BRVCdBaU.js";import"./Input-BwK_QO9m.js";import"./ResponsivePopoverCommon.css-DxGEQbl-.js";import"./ValueStateMessage.css-CgtkZrlq.js";import"./Suggestions.css-BOqaBsuR.js";import"./ListBoxItemGroupTemplate-CG0K-vjN.js";import"./ComboBoxItemGroup-AEcqyCPy.js";import"./ListItemBaseTemplate-BaNeY2LZ.js";import"./Token-mARndugh.js";import"./ScrollEnablement-gz1VS6rK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-yQaKLV68.js";import"./ToggleButton-Dq2kuoFa.js";import"./multiselect-all-BO8qqm2c.js";import"./SuggestionItem-JF6p_ddH.js";import"./index-B1-VZ-EY.js";import"./Option-DgY580TS.js";import"./index-CKPijgn-.js";import"./SegmentedButton-BIM0H3kM.js";import"./index-8XBAuycd.js";import"./Select-Ck3oYLRD.js";import"./InvisibleMessage-BoXj5AU1.js";import"./index-DqeRRPs0.js";import"./index-BPOoRnkM.js";import"./index-BiBEuW4q.js";import"./index-C4LD5Tmv.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DpOwQjR3.js";import"./group-2-DsaYD9Xx.js";import"./sort-descending-24nWTAR8.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BHlBOYOF.js";import"./utils-Byp4P8ND.js";import"./index-7feJEYJZ.js";import"./index-DjOPjAc9.js";import"./index-D-ZU151A.js";import"./navigation-down-arrow-DxMMwmKX.js";import"./navigation-right-arrow-33R7yPM9.js";import"./navigation-right-arrow-e5CJ7iL-.js";import"./useCurrentTheme-Qx4N1zdR.js";import"./index-CwHknFYt.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Di8TIgI9.js";import"./paper-plane--oliTSv-.js";import"./index-CS9CmAAh.js";import"./less-CbU3wJ7O.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
