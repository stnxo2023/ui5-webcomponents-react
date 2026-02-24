import{j as t}from"./iframe-QhtzJj2F.js";import{useMDXComponents as n}from"./index-B3k8-Qk3.js";import{I as i,F as m}from"./CommandsAndQueries-CNzXbMAv.js";import{M as p,C as s}from"./blocks-DDXzLSfl.js";import"./Tag-CoHKtk39.js";import"./index-xaayqokA.js";import"./copy-CTybEZjn.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-D1l57mWN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BrUnaB-V.js";import"./index-CitIem69.js";import"./index-CiXnBbg7.js";import"./Link-Dwkzs0Lw.js";import"./index-DIdyzBPI.js";import"./index-DFHNTg_F.js";import"./index-D3ZVhFJ7.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ltT42hBg.js";import"./addCustomCSSWithScoping-BX9baLRL.js";import"./index-Dg_bnA2j.js";import"./information-LovaJps-.js";import"./sys-enter-2-BHgG_M7J.js";import"./alert-CuMg9P4f.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CNpHgrLb.js";import"./delete-BaT0QUP6.js";import"./settings-uhyiirG0.js";import"./NoData-CkfOfgCO.js";import"./IllustratedMessage-CV4N09cG.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-GNa2en7q.js";import"./index-CN13WjEC.js";import"./index-KbEvRCiP.js";import"./slim-arrow-down-xCHM9F0i.js";import"./Input-DTQqZq-A.js";import"./ResponsivePopoverCommon.css-piC5h4jL.js";import"./ValueStateMessage.css-DBagYbRC.js";import"./Suggestions.css-CejvJKBZ.js";import"./ListBoxItemGroupTemplate-DepFnNxx.js";import"./ComboBoxItemGroup-D38Wr8qS.js";import"./ListItemBaseTemplate-Cos5K4ap.js";import"./Token-Bgmtsg6b.js";import"./ScrollEnablement-DtNx2cEd.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CQNcnXqt.js";import"./ToggleButton-DyuD2XUy.js";import"./SuggestionItem-BtJ4t_fT.js";import"./index-BhyD8HLz.js";import"./Option-DlUUMMtd.js";import"./index-M2h8-I4o.js";import"./SegmentedButton-ZCdQ95nb.js";import"./index-CxE_8jTO.js";import"./Select-pjdp6Rwf.js";import"./InvisibleMessage-BRwaHpiH.js";import"./slim-arrow-down-gvx2dpNQ.js";import"./index-DcsO_iRE.js";import"./index-BpM7KJ_2.js";import"./index-BID1hoZg.js";import"./index-B1HjRcua.js";import"./IconDesign-DXd8PPVF.js";import"./filter-IsgdBqo4.js";import"./group-2-D9cCDLqP.js";import"./sort-descending-DuSbLhoV.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Ss9rnYj6.js";import"./utils-erb1VNk7.js";import"./index-Cl6iRk1J.js";import"./index--_SNBdoM.js";import"./index-CBrrpGGF.js";import"./navigation-down-arrow-D-Z8F_4d.js";import"./navigation-right-arrow-yCklUeEk.js";import"./navigation-right-arrow-dDT8HKVJ.js";import"./useCurrentTheme-DmGtj7Uk.js";import"./index-BwddXk7L.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CSPv66kJ.js";import"./paper-plane-q_I3mXRA.js";import"./index-B_hiW_oO.js";import"./less-KsTjEaWT.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
