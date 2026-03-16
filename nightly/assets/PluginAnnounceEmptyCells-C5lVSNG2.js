import{j as t}from"./iframe-B7xuoxGk.js";import{useMDXComponents as i}from"./index-D6aSzRGN.js";import{I as n}from"./CommandsAndQueries-DKcdQNlV.js";import{M as m,C as p}from"./blocks-DZ0Vo0vM.js";import"./Tag-CtaADOFc.js";import"./index-BzZxDoNe.js";import"./copy-h55QeB4j.js";import{F as s}from"./Footer--uD18Qhj.js";import"./PageNotFound-DygNwEfd.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-_V-bjxAy.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-YW7Wqeu4.js";import"./index-wxY5XpWW.js";import"./index-D_A15Zs0.js";import"./index-Bimscpqo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CZFeJY_e.js";import"./addCustomCSSWithScoping-1uVBaclk.js";import"./index-BXMXe_Dr.js";import"./index-B_T64Hn2.js";import"./index-DmGPBpXp.js";import"./information-BW_uN0gP.js";import"./sys-enter-2-BoXj1fRr.js";import"./alert-Cl-xvHRs.js";import"./index-B7nFcBs2.js";import"./Illustrations-w0lfALHe.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BMY85eGk.js";import"./delete-BZYoynTQ.js";import"./settings-BT8RMABZ.js";import"./NoData-DCXoweTu.js";import"./NoFilterResults-CTa6GhkU.js";import"./index-Btar0bdN.js";import"./IllustratedMessage-BMgQN3i0.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CmLLJCw5.js";import"./Input-eFb_xp2M.js";import"./ResponsivePopoverCommon.css-CyKUqKvQ.js";import"./ValueStateMessage.css-Df99lQxg.js";import"./Suggestions.css-CBArPh6-.js";import"./ListBoxItemGroupTemplate-Ck1L8wBF.js";import"./ComboBoxItemGroup-DBiEhs-6.js";import"./ListItemBaseTemplate-CdxCA_p4.js";import"./Token-7wluFBu-.js";import"./ScrollEnablement-GVTwnxGd.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CqEt74g6.js";import"./ToggleButton-B0icUcy1.js";import"./multiselect-all-D1l0l24Z.js";import"./SuggestionItem-CjJX54Hb.js";import"./index-Br4lwsUM.js";import"./Option-D2JWHiJc.js";import"./index-V-jrGxWl.js";import"./SegmentedButton-DtXKlJOH.js";import"./index-DT47A1KM.js";import"./Select--WbYe-2b.js";import"./InvisibleMessage-eHM0y0K2.js";import"./index-BI9cMLrH.js";import"./index-vwowG4sE.js";import"./index-moYCi4PG.js";import"./index-uphkaPTP.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D9JfcWH8.js";import"./group-2-CCjKuAg3.js";import"./sort-descending-CqVtGwCo.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DFpdt6Cf.js";import"./utils-tHXepICV.js";import"./index-DFh3r5xg.js";import"./index-CzWHYSkB.js";import"./index-CiGgrWQa.js";import"./navigation-down-arrow-DcCyevym.js";import"./navigation-right-arrow-tle3a_t5.js";import"./navigation-right-arrow-BmYFt5sl.js";import"./useCurrentTheme-D-RTnzmW.js";import"./index-8jzzOxCB.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D8gGRGzd.js";import"./paper-plane-BgRj4P-o.js";import"./index-RI2zEDO5.js";import"./less-Cwfab_yz.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
`,t.jsx(o.h1,{id:"analyticaltable-plugin-useannounceemptycells",children:"AnalyticalTable Plugin: useAnnounceEmptyCells"}),`
`,t.jsx(n,{moduleName:"useAnnounceEmptyCells",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"useAnnounceEmptyCells"})," plugin hook adds screen reader announcements for empty cells."]}),`
`,t.jsxs(o.p,{children:[t.jsx(o.strong,{children:"Note:"})," Some screen readers (depending on their configuration) automatically detect empty cells, potentially resulting in duplicate announcements of empty cells."]}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(p,{sourceState:"none",of:l}),`
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
`,t.jsx(s,{})]})}function zt(r={}){const{wrapper:o}={...i(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(e,{...r})}):e(r)}export{zt as default};
