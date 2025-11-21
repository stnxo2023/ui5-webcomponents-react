import{j as t}from"./iframe-DVV5VFB7.js";import{useMDXComponents as n}from"./index-qyzUrO0d.js";import{I as i,F as m}from"./CommandsAndQueries-lBZKGmp7.js";import{M as p,C as s}from"./blocks-D1E9_7c3.js";import"./Tag-CQyymDzh.js";import"./index-Bn7PyzsE.js";import"./copy-Cn3WomF2.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-8wFH9WTq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dqdoz1dV.js";import"./index-BkDm8D7N.js";import"./index-gDTG9hvV.js";import"./Link-DfNmKUcn.js";import"./index-gNtvK5Wx.js";import"./index-ZnLduBLK.js";import"./index-BHIms4DS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B_xwBI5c.js";import"./addCustomCSSWithScoping-DOzeCYXW.js";import"./index-DCIIs4BW.js";import"./information-rc4de9km.js";import"./sys-enter-2-DXmpS6_D.js";import"./alert-DByE3GtL.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-s9VskAhU.js";import"./delete-CgivBeZ4.js";import"./settings-CK2OfFA6.js";import"./NoData-DxLA3V-q.js";import"./IllustratedMessage-DQuWY2vM.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-BLT6QU8O.js";import"./index-j-oJ2Ibk.js";import"./index-9zpcVlZY.js";import"./slim-arrow-down-DEwtX93l.js";import"./Input-Bcwk4klZ.js";import"./ResponsivePopoverCommon.css-D_3NdHu-.js";import"./ValueStateMessage.css-CTyww1Cy.js";import"./Suggestions.css-_wFG5-Dq.js";import"./ListBoxItemGroupTemplate-DmAn1Srm.js";import"./ComboBoxItemGroup-Cqu9NEa3.js";import"./ListItemBaseTemplate-7WJ7iCbr.js";import"./Token-K0CZHa6Z.js";import"./ScrollEnablement-D9nrHUMi.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-g5MAuYgn.js";import"./ToggleButton-DW6jAKtP.js";import"./SuggestionItem-CWxMLjlC.js";import"./index-BZgPzTwo.js";import"./Option-DWq_yYfl.js";import"./index-BmV7OUNq.js";import"./SegmentedButton-BJTPiUGO.js";import"./index-C5tIVlnD.js";import"./Select-BMXrr-12.js";import"./InvisibleMessage-D0yEGssO.js";import"./slim-arrow-down-DH4qIoze.js";import"./index-DwbiADyX.js";import"./index-Co5rF_Rr.js";import"./index-BeQBrD2O.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D8sf2cJm.js";import"./group-2-DPk6j2HH.js";import"./sort-descending-5IRe054w.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Imht7Owq.js";import"./utils-Dn8MODVh.js";import"./index-D24dphxh.js";import"./index-WcUeGWn8.js";import"./index-5P6_7SIE.js";import"./navigation-down-arrow-C5SV30gd.js";import"./navigation-right-arrow-D7hf5-64.js";import"./navigation-right-arrow-CDfIknCA.js";import"./useCurrentTheme-DO8jocYJ.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CnFm52uS.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BHovj_YO.js";import"./paper-plane-BbjknDKE.js";import"./index-pF5ldAnN.js";import"./less-CtNkBeC3.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
