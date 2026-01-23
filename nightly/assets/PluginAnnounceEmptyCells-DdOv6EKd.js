import{j as t}from"./iframe-jtGuD92m.js";import{useMDXComponents as n}from"./index-DyF6GLYl.js";import{I as i,F as m}from"./CommandsAndQueries-BgMZZCcl.js";import{M as p,C as s}from"./blocks-BL9sBKUV.js";import"./Tag-Dpj_ZR-y.js";import"./index-l_17qA1t.js";import"./copy-Cn3-Cbk_.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-5Tk_lYY6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-6t-0TKBV.js";import"./index-D83RH-Pe.js";import"./index-BEvnvfMN.js";import"./Link-DNXoJofm.js";import"./index-C31MI_yM.js";import"./index-B03g8ajZ.js";import"./index-DtTTXQKH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BUd6X6mW.js";import"./addCustomCSSWithScoping-Bli4C3Yg.js";import"./index-DWeXgmyB.js";import"./information-DbZkMEoB.js";import"./sys-enter-2-K-A7BdiC.js";import"./alert-Csq7QRRu.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BWnXpevw.js";import"./delete-91MAIkTv.js";import"./settings-D-bW6kuF.js";import"./NoData-CzzIdr3g.js";import"./IllustratedMessage-C9-M-hdZ.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DqqtA8_P.js";import"./index-B3tdBbEs.js";import"./index-DHuy06ot.js";import"./slim-arrow-down-BXWYLP4S.js";import"./Input-CYGHSySa.js";import"./ResponsivePopoverCommon.css-CWePAE7F.js";import"./ValueStateMessage.css-BFBzO_xV.js";import"./Suggestions.css-DBI26x47.js";import"./ListBoxItemGroupTemplate-CsqKmRRZ.js";import"./ComboBoxItemGroup-CIWUs4af.js";import"./ListItemBaseTemplate-BqSygcyO.js";import"./Token-BHrN57pC.js";import"./ScrollEnablement-NU8w7nTv.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DhTllij2.js";import"./ToggleButton-hXSjriuS.js";import"./SuggestionItem-Dtkve2MA.js";import"./index-Cvp7efxq.js";import"./Option-Dcdi45sN.js";import"./index-DmozDhUV.js";import"./SegmentedButton-CQ1w3cR3.js";import"./index-Dwk6FeKM.js";import"./Select-CY97Kj_H.js";import"./InvisibleMessage-CjY7eeJ7.js";import"./slim-arrow-down-D05WhDba.js";import"./index-CCzWQSlv.js";import"./index-Cp9jM2Nb.js";import"./index-LE4ERw5Y.js";import"./index-C0ZVEY98.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D2cn45G_.js";import"./group-2-ByAZ2_iD.js";import"./sort-descending-BB9cOvuL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CTCTysJ9.js";import"./utils-DdgWIhzU.js";import"./index-BGvGmVJ6.js";import"./index-BUu3tjYA.js";import"./index-DrECakWL.js";import"./navigation-down-arrow-CGa1rkR6.js";import"./navigation-right-arrow-inY4KsbT.js";import"./navigation-right-arrow-CDKzHRuO.js";import"./useCurrentTheme-BdPm8Riw.js";import"./index-Cd3rxfas.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-_IURFj1j.js";import"./paper-plane-BU6zGRJF.js";import"./index-CX971ue9.js";import"./less-CRl1RWOh.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
