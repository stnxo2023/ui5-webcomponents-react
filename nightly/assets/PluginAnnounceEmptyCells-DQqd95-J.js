import{j as t}from"./iframe-GIjPgZz_.js";import{useMDXComponents as n}from"./index-Q5qZCDzK.js";import{I as i,F as m}from"./CommandsAndQueries-DAsamt73.js";import{M as p,C as s}from"./blocks-Brju_yKM.js";import"./Tag-CRHSyhrL.js";import"./index-BF6G6ZOp.js";import"./copy-DMIRXvtR.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BmLNZ8hu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BnsMKJYG.js";import"./index-ByWeYssR.js";import"./index-ChNOA-bd.js";import"./Link-CUZ6JL-B.js";import"./index-V5lDTiuM.js";import"./index-BiD4GApv.js";import"./index-Xvv35NLG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dpx1zyp1.js";import"./addCustomCSSWithScoping-zdxF42yG.js";import"./index-DYv3qsbi.js";import"./information-C_h8A4lQ.js";import"./sys-enter-2-CoTdl5fW.js";import"./alert-DH_fdUZB.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CfpH1xFo.js";import"./delete-C-T01lLr.js";import"./settings-BnzBZ0lV.js";import"./NoData-BG6uVDAU.js";import"./IllustratedMessage-2JZ8q5L8.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-CqR8UELm.js";import"./index-CMian285.js";import"./index-CYHTRK1L.js";import"./slim-arrow-down-BHOwA7DG.js";import"./Input-CO8cUSWP.js";import"./ResponsivePopoverCommon.css-Dg5kCeR8.js";import"./ValueStateMessage.css-ByTQt8zp.js";import"./Suggestions.css-KU_u1XlD.js";import"./ListBoxItemGroupTemplate-C8z3ly7J.js";import"./ComboBoxItemGroup-CaK2hUsm.js";import"./ListItemBaseTemplate-2unCupVB.js";import"./Token-vTv9qWj-.js";import"./ScrollEnablement-BoZvgjLJ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CUnytT-Q.js";import"./ToggleButton-t1GK7a4c.js";import"./SuggestionItem-D4GQqs9D.js";import"./index-Booxjpxp.js";import"./Option-CLaJv9Lf.js";import"./index-B5cPbpB3.js";import"./SegmentedButton-MYaX8HFF.js";import"./index-C5rN46vA.js";import"./Select-DgEbc0sd.js";import"./InvisibleMessage-DE2IJQx3.js";import"./slim-arrow-down-BfhdSO50.js";import"./index-aXzni-kK.js";import"./index-CHYlEZPx.js";import"./index-DVRaig0H.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CbB12dqr.js";import"./group-2-Y0F9rU1V.js";import"./sort-descending-CYDDdi_E.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-XIfZZvDx.js";import"./utils-BdyEyvAN.js";import"./index-Br6ahyAe.js";import"./index-C4IL_GaS.js";import"./index-DGm9tOTO.js";import"./navigation-down-arrow-CDRhyDRq.js";import"./navigation-right-arrow-D1sC2HOI.js";import"./navigation-right-arrow-D_7sv2xN.js";import"./useCurrentTheme-BXWde22w.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CQxy6kwu.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DE6ac6kW.js";import"./paper-plane-0HnsvUce.js";import"./index-BzjyVP51.js";import"./less-COhi_etz.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
