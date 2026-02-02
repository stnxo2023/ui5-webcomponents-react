import{j as t}from"./iframe-DtD6gRbB.js";import{useMDXComponents as n}from"./index-BiO40HBX.js";import{I as i,F as m}from"./CommandsAndQueries-B26crKtq.js";import{M as p,C as s}from"./blocks-Ck7wLHdk.js";import"./Tag-CPFNFbnr.js";import"./index-BiosTbTI.js";import"./copy-DKyeVOxg.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-Dmah3EWF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BSRohzC4.js";import"./index-CRlMy3bg.js";import"./index-pV_yzmY_.js";import"./Link-cYpkkuqp.js";import"./index-391GJ7ps.js";import"./index-DCELbeIn.js";import"./index-KaeBEDf1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DGQO4fMp.js";import"./addCustomCSSWithScoping-Bt7xCKzu.js";import"./index-CDW4JUA8.js";import"./information-uX8_TnNn.js";import"./sys-enter-2-CJJhzBhO.js";import"./alert-BmD5O1ac.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BXDuuJxS.js";import"./delete-BH_Ofluc.js";import"./settings-BOwjvOs-.js";import"./NoData-DAU8iV94.js";import"./IllustratedMessage-BdOpFcMu.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-D6IuGdJg.js";import"./index-8sZlfaIF.js";import"./index-C8a6NVMH.js";import"./slim-arrow-down-DjG80YJw.js";import"./Input-D-O_E4Pc.js";import"./ResponsivePopoverCommon.css-B045Nnj_.js";import"./ValueStateMessage.css-DpV5S_wa.js";import"./Suggestions.css-BvMw9k5F.js";import"./ListBoxItemGroupTemplate-o03o3K-I.js";import"./ComboBoxItemGroup-D7un_uFe.js";import"./ListItemBaseTemplate-DQCws7kn.js";import"./Token-D36n2Zus.js";import"./ScrollEnablement-QSFxM8aV.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CdwuH3bB.js";import"./ToggleButton-Cd5NUYjN.js";import"./SuggestionItem-AGh_Mf5H.js";import"./index-DbwyhNE4.js";import"./Option-CDh-ocF3.js";import"./index-C7kuhskk.js";import"./SegmentedButton-DEMlsUEh.js";import"./index-D1IFlFlx.js";import"./Select-DTxOAyO4.js";import"./InvisibleMessage-DU_sw7pv.js";import"./slim-arrow-down-DZcd6ZcC.js";import"./index-RfAAwJsf.js";import"./index-Bb0M5Coz.js";import"./index-DCwY0BNz.js";import"./index-C89pqI8n.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DKuclrLO.js";import"./group-2-C1B8sHxp.js";import"./sort-descending-CJ2KeZ-8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index--eFanla0.js";import"./utils-BQ9l0ZXj.js";import"./index-BgO6mcLt.js";import"./index-vZRCG4hQ.js";import"./index-CEJjFBjT.js";import"./navigation-down-arrow-nSfE-hjH.js";import"./navigation-right-arrow-ByC8k-O9.js";import"./navigation-right-arrow-DKjWi810.js";import"./useCurrentTheme-CcZ-F948.js";import"./index-DOX5DR-q.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CUn0jH8-.js";import"./paper-plane-DSmkYTvk.js";import"./index-BHAQBVRI.js";import"./less-Bjdjo6qR.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
