import{j as t}from"./iframe-0odebeya.js";import{useMDXComponents as n}from"./index-CqFbrvRl.js";import{I as i,F as m}from"./CommandsAndQueries-EL4jX5E-.js";import{M as p,C as s}from"./blocks-CZanU-Ia.js";import"./Tag-BUYfpKMM.js";import"./index-D9xNyPsZ.js";import"./copy-CT5RXkub.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-DOi-Wnm_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-8HMofQBq.js";import"./index-Bj8LHsHM.js";import"./index-CaXXMvN7.js";import"./Link-BrHi8e0V.js";import"./index-frz6UFer.js";import"./index-tz56fx9f.js";import"./index-CWrbfQpH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BHrZH3Z4.js";import"./addCustomCSSWithScoping-Dp2j1Uki.js";import"./index-BINGVIRj.js";import"./information-CjkTzkFz.js";import"./sys-enter-2-DdZ_D29i.js";import"./alert-D-ynjdbk.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-xRjMB__s.js";import"./delete-fLvq34Jl.js";import"./settings-B4AOpzhv.js";import"./NoData-yaNyLcbB.js";import"./IllustratedMessage-C_hFkGWb.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-2a998mcO.js";import"./index-D8VPPfjQ.js";import"./index-BnCUL16H.js";import"./slim-arrow-down-BFjQhKte.js";import"./Input-CB7ibhwK.js";import"./ResponsivePopoverCommon.css-fLKohW0Q.js";import"./ValueStateMessage.css-C-9YoNH5.js";import"./Suggestions.css-CmFhhLzD.js";import"./ListBoxItemGroupTemplate-BT5gB5uM.js";import"./ComboBoxItemGroup-Du1B6a9S.js";import"./ListItemBaseTemplate-BJ16pLA5.js";import"./Token-Ch4ywBb0.js";import"./ScrollEnablement-CqQuXn0O.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B9R18C1J.js";import"./ToggleButton-PcgJOeQd.js";import"./SuggestionItem-D-h7iS1u.js";import"./index-CDM_4gIl.js";import"./Option-DYfARMYl.js";import"./index-BSUqgLJE.js";import"./SegmentedButton-BCHL45F3.js";import"./index-BzO5275T.js";import"./Select-Cc7eo2Px.js";import"./InvisibleMessage-DBSe1ewq.js";import"./slim-arrow-down-BrhmzZXI.js";import"./index-DQI_EJF_.js";import"./index-ClaOFseh.js";import"./index-XJJ-3YHL.js";import"./index-zsFPEOYy.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CMrG-M6g.js";import"./group-2-DCO1BTNo.js";import"./sort-descending-Cjurks9x.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BOtvtZYN.js";import"./utils-D6cGPaWL.js";import"./index-C9fKAKSL.js";import"./index-BsMffN5Y.js";import"./index-DFrOQYBP.js";import"./navigation-down-arrow-CxSCHjvh.js";import"./navigation-right-arrow-C1Z29n6I.js";import"./navigation-right-arrow-sQXzL3an.js";import"./useCurrentTheme-B4rbko8_.js";import"./index-GKaPWcp4.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-3MSrpeOV.js";import"./paper-plane-C4OvpktK.js";import"./index-B_3GzVsz.js";import"./less-BL1Txw-9.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
