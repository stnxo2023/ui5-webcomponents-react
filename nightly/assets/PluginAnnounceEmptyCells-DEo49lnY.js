import{j as t}from"./iframe-Qn10Vv46.js";import{useMDXComponents as n}from"./index-Dn_QNZXe.js";import{I as i,F as m}from"./CommandsAndQueries-BS5w0Fww.js";import{M as p,C as s}from"./blocks-CqvMe-zP.js";import"./Tag-D88IrP9Y.js";import"./index-CPne16Vl.js";import"./copy-CASyM-HB.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-H3_QwZfA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-1Dq2e1Fv.js";import"./index-D9ZF8-N2.js";import"./index-u07ulNkL.js";import"./Link-B9oRKMRP.js";import"./index-Btsu4EzQ.js";import"./index-D7W_CU3P.js";import"./index-Qf4zPxvx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DyNR1Lsa.js";import"./addCustomCSSWithScoping-BMEnUHPm.js";import"./index-BCXe2PbY.js";import"./information-BED9_Z-O.js";import"./sys-enter-2-DmPWvQNd.js";import"./alert-CtILWS1T.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DDGW3LlO.js";import"./delete-CwMLkwBl.js";import"./settings-D3w6QaCp.js";import"./NoData-DlAD3CDh.js";import"./IllustratedMessage-B5PXEdvM.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-D1-NKvrK.js";import"./index-DAtiHyZC.js";import"./index-BTxgNax-.js";import"./slim-arrow-down-DStIyIYv.js";import"./Input-JG6KYeb2.js";import"./ResponsivePopoverCommon.css-D30PmpG6.js";import"./ValueStateMessage.css-B1tOkt9X.js";import"./Suggestions.css-AZtlnByU.js";import"./ListBoxItemGroupTemplate-Ck_Tg_1E.js";import"./ComboBoxItemGroup-X4WYLtK7.js";import"./ListItemBaseTemplate-aIA1KjTO.js";import"./Token-B8pCzhwp.js";import"./ScrollEnablement-BI5-jdZK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bar0KGH4.js";import"./ToggleButton-CRT5W38j.js";import"./SuggestionItem-D11zz-CY.js";import"./index-CP1thd2f.js";import"./Option-C4JrqG_U.js";import"./index-C8dYCS08.js";import"./SegmentedButton-DrQ4e9ne.js";import"./index-BUBbEq2D.js";import"./Select-DLuDF3wk.js";import"./InvisibleMessage-BlyETXSd.js";import"./slim-arrow-down-BRQZce7U.js";import"./index-XwrFFEKH.js";import"./index-BXul6roJ.js";import"./index-BakmgRez.js";import"./index-BmRC0J2V.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DMRvgaWs.js";import"./group-2-C_NGD824.js";import"./sort-descending-BFLjgKM6.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DHB3H4fo.js";import"./utils-B-v7HQ2f.js";import"./index-B6IRXIFn.js";import"./index-BWjiDXwP.js";import"./index-7awi3J8u.js";import"./navigation-down-arrow-Coc2XK-B.js";import"./navigation-right-arrow-C5N9ABfy.js";import"./navigation-right-arrow-DMix7vwu.js";import"./useCurrentTheme-D9dDzE9L.js";import"./index-Bo0yjZ_x.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-0Grxk9f4.js";import"./paper-plane-Cf20vZx7.js";import"./index-BADkrGDt.js";import"./less-DtkLr4vn.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
