import{j as t}from"./iframe-BvHqSIyK.js";import{useMDXComponents as n}from"./index-C9vrwz77.js";import{I as i,F as m}from"./CommandsAndQueries-B3hUlog3.js";import{M as p,C as s}from"./blocks-BxoU3Yu6.js";import"./Tag-99RoGaFy.js";import"./index-BB14dXBi.js";import"./copy-BP-1S5h9.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BzEtAFg2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DAufjIqI.js";import"./index-Cb6d5Ui8.js";import"./index-Dvhux2R5.js";import"./Link-CgDmPG1r.js";import"./index-BX2w3DS0.js";import"./index-lpb4Baiz.js";import"./index--L__lImq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C3VWoxNN.js";import"./addCustomCSSWithScoping-Bvbl39sy.js";import"./index-B7BXsln5.js";import"./information-zngl4LUv.js";import"./sys-enter-2-D9Z1FJcM.js";import"./alert-F1tFIdLT.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CnXdKyTy.js";import"./delete-CuG3RM5m.js";import"./settings-D_BTzOE6.js";import"./NoData-lpA7htfb.js";import"./IllustratedMessage-Cf-o6GMJ.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DVGSOjnh.js";import"./index-Bow0_lnK.js";import"./index-DrmQroFf.js";import"./slim-arrow-down-C2UZE7h0.js";import"./Input-Br-sY9ky.js";import"./ResponsivePopoverCommon.css-sekIyiK-.js";import"./ValueStateMessage.css-BRJx2fcS.js";import"./Suggestions.css-CV4MjGEF.js";import"./ListBoxItemGroupTemplate-B-OeNXtJ.js";import"./ComboBoxItemGroup-B2NxOsQm.js";import"./ListItemBaseTemplate-BWetPhdo.js";import"./Token-6nUBCvO_.js";import"./ScrollEnablement-HwiTsDO2.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-WAmqQIXu.js";import"./ToggleButton-bhikrMK7.js";import"./SuggestionItem-_aBHJoN3.js";import"./index-DnkLMjxR.js";import"./Option-fB_CKO8N.js";import"./index-OFuAM7HC.js";import"./SegmentedButton-df2qYRN0.js";import"./index-BjZ8DHVA.js";import"./Select-BaeqruA9.js";import"./InvisibleMessage-BSe3iB9m.js";import"./slim-arrow-down-BORyrk-u.js";import"./index-DqS5V8WW.js";import"./index-KF0fvs5m.js";import"./index-C71q_atH.js";import"./index-DRekqyHy.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BXvWevTj.js";import"./group-2-DOLgcJ-T.js";import"./sort-descending-CxAjsNpq.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D39_iadB.js";import"./utils-Bm3EbaDm.js";import"./index-DVh5GQMZ.js";import"./index-C_6rr-HH.js";import"./index-BW296Krt.js";import"./navigation-down-arrow-DT5dtpnO.js";import"./navigation-right-arrow-PuFMbFjH.js";import"./navigation-right-arrow-I9zR3Bwc.js";import"./useCurrentTheme-BLBS4rCs.js";import"./index-B5WxCuR5.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DlCv73Ap.js";import"./paper-plane-CSXFE3V8.js";import"./index-Cxmpze17.js";import"./less-BtNTjp5U.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
