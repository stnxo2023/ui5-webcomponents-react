import{j as t}from"./iframe-CZzIPN_f.js";import{useMDXComponents as n}from"./index-BN7772Ln.js";import{I as i,F as m}from"./CommandsAndQueries-C_V-vyfI.js";import{M as p,C as s}from"./blocks-CpAefQ0F.js";import"./Tag-B8_XKizL.js";import"./index-CYLMYqU3.js";import"./copy-CFuW58eh.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-WHlqTwq6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-RbSpX7Av.js";import"./index-RQjAfURV.js";import"./index-CiiSHxVf.js";import"./Link-Fkmlwa07.js";import"./index-CCj5LB1a.js";import"./index-DMvyX2go.js";import"./index-c-1N-cez.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CmB6T7HK.js";import"./addCustomCSSWithScoping-DaZxNPdr.js";import"./index-TDczsIb0.js";import"./information-6G8KrWG0.js";import"./sys-enter-2-Blj9-cAn.js";import"./alert-BtpU_SH9.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-vUdfR6U_.js";import"./delete-BMEp91Mc.js";import"./settings-C8GSnPCs.js";import"./NoData-Bf4Yeihh.js";import"./IllustratedMessage-DrWwRU0b.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-BXzF_T72.js";import"./index-Bbxw8KqN.js";import"./index-zbybGof4.js";import"./slim-arrow-down-C428O546.js";import"./Input-BsrOTKjj.js";import"./ResponsivePopoverCommon.css-2Qlub-_h.js";import"./ValueStateMessage.css-hjeNdUqW.js";import"./Suggestions.css-DT4shfhc.js";import"./ListBoxItemGroupTemplate-CSR5ghpQ.js";import"./ComboBoxItemGroup-Cz3um4BI.js";import"./ListItemBaseTemplate-P74cAnZc.js";import"./Token-C3z9AeKo.js";import"./ScrollEnablement-C4qF1cK6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DAcFQW4k.js";import"./ToggleButton-CJ4dsJ-L.js";import"./SuggestionItem-Dno1ukWF.js";import"./index-CfuHgIJB.js";import"./Option-DZueQCXy.js";import"./index-HlkmFS4c.js";import"./SegmentedButton-87GWkDY0.js";import"./index-CnpeIdgj.js";import"./Select-bjAZ7WAd.js";import"./InvisibleMessage-DLMXXFNU.js";import"./slim-arrow-down-Bbr4LCWT.js";import"./index-DfVluAdc.js";import"./index-56rq3Xsn.js";import"./index-Htv8Knj7.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C4d-P2A4.js";import"./group-2-63bcV-_q.js";import"./sort-descending--Bt-86OL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-4WOx3kzp.js";import"./utils-B4X6J-Z9.js";import"./index-BigJjRDp.js";import"./index-C1J3MpNo.js";import"./index-D0gJWrcG.js";import"./navigation-down-arrow-DkBsnEWF.js";import"./navigation-right-arrow-DsJ6uoOM.js";import"./navigation-right-arrow-D15IFhwy.js";import"./useCurrentTheme-Dn8ivhT9.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CWbe83HO.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DjCnev_a.js";import"./paper-plane-BRbCLIHy.js";import"./index-3ZvOWv6T.js";import"./less-NC1u16Z9.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
