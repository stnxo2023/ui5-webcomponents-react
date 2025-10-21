import{j as t}from"./iframe-Bb0HmHnB.js";import{useMDXComponents as n}from"./index-Meo06HOS.js";import{I as i,F as m}from"./CommandsAndQueries-tR4iht-v.js";import{M as p,C as s}from"./blocks-CgyFha0p.js";import"./Tag-CkJgtMYU.js";import"./index-e-oHYPrA.js";import"./copy-ClXY_Ebg.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CVCqajEn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BUHcje1a.js";import"./index-ujA-0uQD.js";import"./index-DRj5BOAv.js";import"./Link-Ctr6McPA.js";import"./index-DamhzNr0.js";import"./index-kXJ0csex.js";import"./index-DkF-cfFa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DmK6tfuz.js";import"./addCustomCSSWithScoping-DZsYEWJZ.js";import"./index-CCkcOLyJ.js";import"./information-CuEP2--w.js";import"./sys-enter-2-BxgOL3Cz.js";import"./alert-CRFvm_h4.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B3EdkcTs.js";import"./delete-DNvu7cli.js";import"./settings-X_qufnfv.js";import"./NoData-Be80XLqg.js";import"./IllustratedMessage-DD1_V1fS.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-YoedeCQZ.js";import"./index-CEumqWwt.js";import"./index-Ctco8NFr.js";import"./slim-arrow-down-BK6_kW2_.js";import"./Input-8EIzHHn6.js";import"./ResponsivePopoverCommon.css-CYHZGTr6.js";import"./ValueStateMessage.css-DQVkNKvB.js";import"./Suggestions.css-jL9cJ0bK.js";import"./ListBoxItemGroupTemplate-F9IXXChP.js";import"./ComboBoxItemGroup-rVDs3n5k.js";import"./ListItemBaseTemplate-DGXYw3IB.js";import"./Token-plZfxczM.js";import"./ScrollEnablement-CtICbC2N.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DRloOdH2.js";import"./ToggleButton-CIurin5E.js";import"./SuggestionItem-wc2mHVyx.js";import"./index-BaTE6PUT.js";import"./Option-CpLfiC8k.js";import"./index-IAfope6S.js";import"./SegmentedButton-BNh0v1Zf.js";import"./index-D8FXkeK7.js";import"./Select-DIxLDO_Y.js";import"./InvisibleMessage-BuHDtcTe.js";import"./slim-arrow-down-DOc9_ecn.js";import"./index-CN5pxO6-.js";import"./index-DD32uJSt.js";import"./index-wp5LnE7o.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CG2Pz_ak.js";import"./group-2-DRBOUlKY.js";import"./sort-descending-pJBX6NsG.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C4pQrK8W.js";import"./utils-DT171g7R.js";import"./index-BHDfFIKl.js";import"./index-COKyuEqS.js";import"./index-DnLo1BZO.js";import"./navigation-down-arrow-DQURBlhq.js";import"./navigation-right-arrow-BBRYGBWr.js";import"./navigation-right-arrow-DbJe2FI5.js";import"./useCurrentTheme-DeBv9RCX.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BllQlQx0.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-fxo11iCx.js";import"./paper-plane-BLDEhHRM.js";import"./index-DgN_PFsx.js";import"./less-B_rvZNau.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
