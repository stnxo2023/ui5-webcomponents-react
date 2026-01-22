import{j as t}from"./iframe-CuVq63aR.js";import{useMDXComponents as n}from"./index-0t9brk-b.js";import{I as i,F as m}from"./CommandsAndQueries-Ca8tTwEu.js";import{M as p,C as s}from"./blocks-Cc_3mMVm.js";import"./Tag-Dg3yp9Ne.js";import"./index-CzEXcp-Y.js";import"./copy-B33m91ys.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-CQ8uPA3L.js";import"./preload-helper-PPVm8Dsz.js";import"./index-wXdy4JWU.js";import"./index-BxKmXxxw.js";import"./index-KhF7LlaL.js";import"./Link-CIBW5Nwu.js";import"./index-Bncw1rp-.js";import"./index-CTTCfriq.js";import"./index-CNebcKEn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CmxSnjHn.js";import"./addCustomCSSWithScoping-C8i5UOAF.js";import"./index-B7_hFjeD.js";import"./information-DZp5RqnQ.js";import"./sys-enter-2-CNKv6pdA.js";import"./alert-7PGhDeFz.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BUTeCcsm.js";import"./delete-ctqT1k32.js";import"./settings-BlGasMPb.js";import"./NoData-B4qjQOP9.js";import"./IllustratedMessage-Dx5bOO0b.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-RTNt-sqx.js";import"./index-DNtyE7Tf.js";import"./index-CyQxDGbx.js";import"./slim-arrow-down-Df_1rhWQ.js";import"./Input-BPkYam4a.js";import"./ResponsivePopoverCommon.css-CoaP-B_2.js";import"./ValueStateMessage.css-CiGME_0H.js";import"./Suggestions.css-C6D57ItQ.js";import"./ListBoxItemGroupTemplate-Cnml-jV3.js";import"./ComboBoxItemGroup-Ck56pMKA.js";import"./ListItemBaseTemplate-B7HCXwDc.js";import"./Token-BoF8gI7v.js";import"./ScrollEnablement-DzyyEcpH.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DVdmxQUQ.js";import"./ToggleButton-vxPiqrWZ.js";import"./SuggestionItem-D09qkYgU.js";import"./index-BtHyX5_Y.js";import"./Option-Dpfgd9IN.js";import"./index-BTZ1Q1Qt.js";import"./SegmentedButton-Dp0F9lUa.js";import"./index-CYXbTMeF.js";import"./Select-wajBJflJ.js";import"./InvisibleMessage-DX2fP_3y.js";import"./slim-arrow-down-4yhTg3ae.js";import"./index-FN0CAgw1.js";import"./index-DqqzPQVu.js";import"./index-QDr3UQtb.js";import"./index-BhS6UWMS.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ThOPmQi4.js";import"./group-2-DZoGw3jS.js";import"./sort-descending-D4HKH5sT.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CbRTpC6F.js";import"./utils-Dk_P20L2.js";import"./index-CtIA8VPH.js";import"./index-DXqJthz9.js";import"./index-DTgqJJJQ.js";import"./navigation-down-arrow-O_bSI2G2.js";import"./navigation-right-arrow-BX8UrvSq.js";import"./navigation-right-arrow-v_EVNqHP.js";import"./useCurrentTheme-v99UfhTF.js";import"./index-tYGt_G7s.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DqK0RzMa.js";import"./paper-plane-2lg_ymEl.js";import"./index-CR4SU2MA.js";import"./less-cuFYL3WR.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
