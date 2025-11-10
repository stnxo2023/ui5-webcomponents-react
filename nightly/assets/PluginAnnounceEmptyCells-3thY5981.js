import{j as t}from"./iframe-5rXfnPaz.js";import{useMDXComponents as n}from"./index-BqyI3aT9.js";import{I as i,F as m}from"./CommandsAndQueries-Xz4gCbJR.js";import{M as p,C as s}from"./blocks-_HtGHxpQ.js";import"./Tag-BLU9xLwR.js";import"./index-TJORVIjM.js";import"./copy-3qQuBQub.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CcOUaagY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D3cU9WTA.js";import"./index-BB6TdVmi.js";import"./index-BgPkgqrz.js";import"./Link-IINvsuro.js";import"./index-X9fuUMPC.js";import"./index-DVjD8wbo.js";import"./index-Bna4bEkh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BikUYAZO.js";import"./addCustomCSSWithScoping-Cv8BQzm9.js";import"./index-DN9fi-2P.js";import"./information-C9cuRXqE.js";import"./sys-enter-2-y9J_ETy2.js";import"./alert-CnXddf7Q.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CnsKBKKm.js";import"./delete-CqVU8QSy.js";import"./settings-C6C2rMP5.js";import"./NoData-C6zrEqdJ.js";import"./IllustratedMessage-DVsNM8KB.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BY5FKPNb.js";import"./index-B2arcq-S.js";import"./index-Bxgt3Ou_.js";import"./slim-arrow-down-CG38GsAh.js";import"./Input-4O3kRwLq.js";import"./ResponsivePopoverCommon.css-C1xBOZoa.js";import"./ValueStateMessage.css-BdW6AGS6.js";import"./Suggestions.css-BLWo3F15.js";import"./ListBoxItemGroupTemplate-BZVK3C21.js";import"./ComboBoxItemGroup-BWv8Jfn6.js";import"./ListItemBaseTemplate-CP6xKZ4g.js";import"./Token-BUGkfYZH.js";import"./ScrollEnablement-C55G51IY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cua6cuRg.js";import"./ToggleButton-BeKGXq8p.js";import"./SuggestionItem-Cz6KMxHh.js";import"./index-Bij98Q-R.js";import"./Option-B7oChQ-z.js";import"./index-BQE7n4xd.js";import"./SegmentedButton-BsxmG9wr.js";import"./index-BmXkEItO.js";import"./Select-Cw6Szu5N.js";import"./InvisibleMessage-lYBgp4_P.js";import"./slim-arrow-down-BJXvyOyf.js";import"./index-0cRpwkC4.js";import"./index-VzaEEiDt.js";import"./index-B15VKN5k.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BzinyoGp.js";import"./group-2-BQu0Iyd9.js";import"./sort-descending-rgN241_I.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-ZZRaGFiZ.js";import"./utils-CkPWUOLN.js";import"./index-D0YwngEh.js";import"./index-DGROWVtJ.js";import"./index-Ct1kN3_s.js";import"./navigation-down-arrow-CN6lpdwx.js";import"./navigation-right-arrow-_aRbtzGU.js";import"./navigation-right-arrow-DxIZ5HVF.js";import"./useCurrentTheme-PC0lES2v.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B0PC4qEQ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cij_psQ1.js";import"./paper-plane-CpxuoSNW.js";import"./index-D89dDm_o.js";import"./less-arHg6uEN.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
