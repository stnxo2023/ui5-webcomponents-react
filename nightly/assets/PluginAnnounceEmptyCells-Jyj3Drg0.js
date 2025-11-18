import{j as t}from"./iframe-DMHzJZ-j.js";import{useMDXComponents as n}from"./index-C6fVjeP1.js";import{I as i,F as m}from"./CommandsAndQueries-DGQGLEXC.js";import{M as p,C as s}from"./blocks-BBNtOPy5.js";import"./Tag-CQITClqv.js";import"./index-C0eFSkjd.js";import"./copy-x3ZdDA2U.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CaT9r6rb.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DhIsFRFq.js";import"./index-B1RFmErt.js";import"./index-Cr6zAa1Q.js";import"./Link-DH5vJWVF.js";import"./index-DgEALGZi.js";import"./index-CqxeRCB-.js";import"./index-CEzdIVxS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-bWNLwVQr.js";import"./addCustomCSSWithScoping-Br9NkwKR.js";import"./index-BlloQ94B.js";import"./information-41_Ak17O.js";import"./sys-enter-2-YeOg860G.js";import"./alert-Dt7k-zHX.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BeCjkhT-.js";import"./delete-B3Zi7ci0.js";import"./settings-DpEAtvN4.js";import"./NoData-CMRDWD8S.js";import"./IllustratedMessage-ypMCec_7.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BAEmwexU.js";import"./index-BLZvKk1A.js";import"./index-DALZzsGY.js";import"./slim-arrow-down-IOQwWOJR.js";import"./Input-D0sQDQIP.js";import"./ResponsivePopoverCommon.css-BZuN8o2Z.js";import"./ValueStateMessage.css-Cu_y8whz.js";import"./Suggestions.css-Du7gKKRX.js";import"./ListBoxItemGroupTemplate-B0EOdTVM.js";import"./ComboBoxItemGroup-CHjUNt3f.js";import"./ListItemBaseTemplate-C5SCfjzM.js";import"./Token-DnzFeT9s.js";import"./ScrollEnablement-CIWRDRru.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CWeiqPrI.js";import"./ToggleButton-CBNvjcuG.js";import"./SuggestionItem-DyoT1JDI.js";import"./index-CMQmlJik.js";import"./Option-DWdsEKMy.js";import"./index-DIXxOC37.js";import"./SegmentedButton-BiHeLBaC.js";import"./index-B7KKnXVU.js";import"./Select-HM-omYP_.js";import"./InvisibleMessage-DHXVn91v.js";import"./slim-arrow-down-B6ZtTkOe.js";import"./index-Cu33fkQB.js";import"./index-BfuDz84Z.js";import"./index-uksb_LL1.js";import"./IconDesign-DXd8PPVF.js";import"./filter-e3XRiwh1.js";import"./group-2-BdpK5aV9.js";import"./sort-descending-BtXqYEdP.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DXKiXJss.js";import"./utils-DoNqiPbK.js";import"./index-BP4PKNEe.js";import"./index-CVjUPdda.js";import"./index-aypBjRie.js";import"./navigation-down-arrow-3r7pwMvO.js";import"./navigation-right-arrow-CqCWNsea.js";import"./navigation-right-arrow-B-wRit2V.js";import"./useCurrentTheme-fSV64WwT.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DNFK3A_E.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-zZAL_Iqq.js";import"./paper-plane-C9A5taeB.js";import"./index-CGpUpTTM.js";import"./less-DGQbhCVA.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
