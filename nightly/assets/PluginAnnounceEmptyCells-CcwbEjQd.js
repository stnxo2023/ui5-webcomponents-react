import{j as t}from"./iframe-BWwaFrUe.js";import{useMDXComponents as n}from"./index-YNaFuKct.js";import{I as i,F as m}from"./CommandsAndQueries-BTZsnlDx.js";import{M as p,C as s}from"./blocks-CUOVkMW1.js";import"./Tag-C1jS-OQM.js";import"./index-D57lmYpc.js";import"./copy-CotvDhWa.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BMcdVAna.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DWyfCle9.js";import"./index-CPNWsz0F.js";import"./index-D2byHvrl.js";import"./Link-BKxr4_LG.js";import"./index-CjEjkqT0.js";import"./index-BHGImwbL.js";import"./index-CZL1WN1v.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B9SYXEMy.js";import"./addCustomCSSWithScoping-DT9AYQXn.js";import"./index-B87YjzNM.js";import"./information-DMTe0ysY.js";import"./sys-enter-2-DQvPI1W2.js";import"./alert-BsvI3BFP.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ZJM36qku.js";import"./delete-DOgupLX8.js";import"./settings-4vio0KZw.js";import"./NoData-CX6GFhcP.js";import"./IllustratedMessage-DQsQaQ5a.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-C-6BQoNw.js";import"./index-B9Gz8ycv.js";import"./index-CN1ndyZW.js";import"./slim-arrow-down-CmSn7Sik.js";import"./Input-CY2_jO7N.js";import"./ResponsivePopoverCommon.css-DLB8912B.js";import"./ValueStateMessage.css-BD8m1HnI.js";import"./Suggestions.css-BBBvQtOR.js";import"./ListBoxItemGroupTemplate-yf3HFsAX.js";import"./ComboBoxItemGroup-D2AL_rCQ.js";import"./ListItemBaseTemplate-QNOu6P8O.js";import"./Token-DzMcWdi_.js";import"./ScrollEnablement-JdqAnokE.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D-3ZFt0p.js";import"./ToggleButton-Cf5cO5pE.js";import"./SuggestionItem-RvTEtoqI.js";import"./index-V1xW8ahy.js";import"./Option-tKeldczj.js";import"./index-BwnRWUYP.js";import"./SegmentedButton-SW6UDtT6.js";import"./index-DMORvkBO.js";import"./Select-DMl3Tw2N.js";import"./InvisibleMessage-C817vP8u.js";import"./slim-arrow-down-DkhplX3E.js";import"./index-c5nDhqAm.js";import"./index-C8H6ETRj.js";import"./index-MtPA4SgJ.js";import"./index-BD5bs7yp.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ClKCT9rN.js";import"./group-2-Dpay8E0t.js";import"./sort-descending-DyGsNaKs.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-vQwIUp-n.js";import"./utils-CdBNuaY-.js";import"./index-BDRKN7at.js";import"./index-BXKFr2l-.js";import"./index-mG3R14Tg.js";import"./navigation-down-arrow-BHHjgb5v.js";import"./navigation-right-arrow-CsvEnEN9.js";import"./navigation-right-arrow-Bmpxqsod.js";import"./useCurrentTheme-DCWBN9yR.js";import"./index-BuCzF1I2.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Ccg0UGwD.js";import"./paper-plane-o_qW1OCn.js";import"./index-BmyR6abe.js";import"./less-BiUEcVEK.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
