import{j as t}from"./iframe-Bf1hlxgS.js";import{useMDXComponents as n}from"./index-B002OMKA.js";import{I as i,F as m}from"./CommandsAndQueries-BEe5YBSl.js";import{M as p,C as s}from"./blocks-CF_xVWI_.js";import"./Tag-BHAjLoAY.js";import"./index-p22CRHMo.js";import"./copy-D5BVEzvy.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BSgEoKJz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D-S325RU.js";import"./index-BciJGkl8.js";import"./index-hDeN6gmj.js";import"./Link-Bn0GO4LF.js";import"./index-BqDvsFmr.js";import"./index-BjKEmns7.js";import"./index-DhV0sN_I.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D7KxqJSV.js";import"./addCustomCSSWithScoping-BIqc26fM.js";import"./index-2lJhwVzj.js";import"./information-BXU6Hxbd.js";import"./sys-enter-2-BvfgNwob.js";import"./alert-B3TgQjln.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cb0z8X09.js";import"./delete-D8DWeF7d.js";import"./settings-Dh74knWL.js";import"./NoData-PZMeGE26.js";import"./IllustratedMessage-h1DOAdex.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-C3l4wxGh.js";import"./index-C5eIYaqM.js";import"./index-Bk0S-jnY.js";import"./slim-arrow-down-C4-n4KwM.js";import"./Input-Dqxhrjvq.js";import"./ResponsivePopoverCommon.css-Df1YsyQx.js";import"./ValueStateMessage.css-DXAAF2dF.js";import"./Suggestions.css-DM_nm0RD.js";import"./ListBoxItemGroupTemplate-C5qHO486.js";import"./ComboBoxItemGroup-DPlsTSsl.js";import"./ListItemBaseTemplate-BqEI7cM7.js";import"./Token-CPH3EVcO.js";import"./ScrollEnablement-Dfx6-CYw.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B9ipNNEN.js";import"./ToggleButton-D_L21r0E.js";import"./SuggestionItem-AhhjJ8Mh.js";import"./index-TUCbMDvM.js";import"./Option-CqSMarpV.js";import"./index-zS-bN0DU.js";import"./SegmentedButton-BicHJo62.js";import"./index-BK2139LG.js";import"./Select-FKh8tKiT.js";import"./InvisibleMessage-BnSLCX5X.js";import"./slim-arrow-down-amOGocIG.js";import"./index-BmHDaJX3.js";import"./index-C-eVdq9L.js";import"./index-BC1Ed97q.js";import"./index-ChBbQCuo.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DjkvSi-l.js";import"./group-2-BBxRQHAf.js";import"./sort-descending-BoIXgBQJ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DtECT_FH.js";import"./utils-BC9PCMpX.js";import"./index-CszV8wTC.js";import"./index-CxOmA48X.js";import"./index-DNt1wk0D.js";import"./navigation-down-arrow-DmEpUMgP.js";import"./navigation-right-arrow-Bu3lyT6l.js";import"./navigation-right-arrow-BBudxr1z.js";import"./useCurrentTheme-gu6EY9KG.js";import"./index-VBVjOL-U.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D-Rd56YE.js";import"./paper-plane-CEqXSyIK.js";import"./index-CSGuzL_r.js";import"./less-C1jg6kBH.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
