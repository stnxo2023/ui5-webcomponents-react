import{j as t}from"./iframe-JkIS1XbA.js";import{useMDXComponents as n}from"./index-s0dX5IQa.js";import{I as i,F as m}from"./CommandsAndQueries-t8PqdBYw.js";import{M as p,C as s}from"./blocks-DIFA4jfF.js";import"./Tag-CGYuzpRX.js";import"./index-Cki6PEzP.js";import"./copy-BpEy4GT_.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-zqPKIr8k.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CcRV2upd.js";import"./index-If9QK12V.js";import"./index-Cc6IDcWO.js";import"./Link-C8ljX_Jl.js";import"./index-BJe_Ldbq.js";import"./index-CIULjnJw.js";import"./index-D4k933VY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C6BvO_Mx.js";import"./addCustomCSSWithScoping-OrJPV9ed.js";import"./index-wV8mgQwM.js";import"./information-8O35dRa_.js";import"./sys-enter-2-BwjA-U8a.js";import"./alert-0nYrX8QQ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CXT2Cgk-.js";import"./delete-CIhDQEzl.js";import"./settings-D4GDgni6.js";import"./NoData-CGi4XDkU.js";import"./IllustratedMessage-Wq2Ul-i9.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-CeWFzWKq.js";import"./index-Ce7dmWA4.js";import"./index-DTso7Ssf.js";import"./slim-arrow-down-CxdQbgux.js";import"./Input-DAygltfI.js";import"./ResponsivePopoverCommon.css-DalBzcK6.js";import"./ValueStateMessage.css-DB31QG7j.js";import"./Suggestions.css-DDSHaogF.js";import"./ListBoxItemGroupTemplate-CU0DT1IQ.js";import"./ComboBoxItemGroup-spyevgsi.js";import"./ListItemBaseTemplate-DG-Nk2uN.js";import"./Token-BuJPwVWP.js";import"./ScrollEnablement-DgEc-4I0.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CBW51XFx.js";import"./ToggleButton-BQDsMvuW.js";import"./SuggestionItem-DcE8EEE7.js";import"./index-DRdjcI3a.js";import"./Option-BPjQvE5p.js";import"./index-D3fBZPmN.js";import"./SegmentedButton-ChWUymxG.js";import"./index-DdxRipET.js";import"./Select-DtPi2w1p.js";import"./InvisibleMessage-B2BhAQgi.js";import"./slim-arrow-down-DRq74hAW.js";import"./index-C-SFTGz_.js";import"./index-BgRffrdt.js";import"./index-bz7pM8qx.js";import"./IconDesign-DXd8PPVF.js";import"./filter-upsf-FbF.js";import"./group-2-B13YNGeD.js";import"./sort-descending-jvCE5ooF.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dk01B-cJ.js";import"./utils-OzEeB7Yk.js";import"./index-TTqlvXZi.js";import"./index-Y6bQjObX.js";import"./index-D0XJ_zxW.js";import"./navigation-down-arrow-BloNf-Qp.js";import"./navigation-right-arrow-D5wlsInA.js";import"./navigation-right-arrow-C2s_1KE8.js";import"./useCurrentTheme-DyiO6FGA.js";import"./IndicationColor-DVw-fSM_.js";import"./index-yDwJ49Kg.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-3MqpM2h7.js";import"./paper-plane-FRWsPWej.js";import"./index-by9B6z8d.js";import"./less-B2UjUmjt.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
