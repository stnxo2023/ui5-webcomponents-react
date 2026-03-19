import{j as t}from"./iframe-DZQsFHyF.js";import{useMDXComponents as i}from"./index-FeafUf3S.js";import{I as n}from"./CommandsAndQueries-Q7QL049M.js";import{M as m,C as p}from"./blocks-CCR5dlte.js";import"./Tag-njT3oUWj.js";import"./index-FZQI4JeT.js";import"./copy-B0ak1fDk.js";import{F as s}from"./Footer-1JL6Y-Rs.js";import"./PageNotFound-CAJJq4gT.js";import{PluginAnnounceEmptyCells as l}from"./AnalyticalTableHooks.stories-BuH-VEXs.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-Dy7YK0fU.js";import"./index-CmNuhxCj.js";import"./index-C2RcbU_s.js";import"./index-QENyXe96.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DsnnpcUC.js";import"./addCustomCSSWithScoping-BZT-QmME.js";import"./index-DGD79lBE.js";import"./index-CeHR91It.js";import"./index-JUdhH85j.js";import"./information-Byx_k42O.js";import"./sys-enter-2-CNKaU8fp.js";import"./alert-HiA3dax7.js";import"./index-CHkzxhcQ.js";import"./Illustrations-BlaFZAWE.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BJaohFVO.js";import"./delete-Bb9u1YlP.js";import"./settings-uxlfm5Eb.js";import"./NoData-DH1nVKCg.js";import"./NoFilterResults-CG83QGUe.js";import"./index-CKx2XrjC.js";import"./IllustratedMessage-8KXEKgMw.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-8Xbwx2Wl.js";import"./Input-DmDSg_Bp.js";import"./ResponsivePopoverCommon.css-CH3mALXJ.js";import"./ValueStateMessage.css-EXmMX5gs.js";import"./Suggestions.css-D2AfaPCJ.js";import"./ListBoxItemGroupTemplate-Ci0HBhCE.js";import"./ComboBoxItemGroup-nne4TIrE.js";import"./ListItemBaseTemplate-Ch_-zEJx.js";import"./Token-xIAyAS3n.js";import"./ScrollEnablement-Dl_lVbGP.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Du0wWGOA.js";import"./ToggleButton-CspSetq-.js";import"./multiselect-all-BaBAM3Qb.js";import"./SuggestionItem-CFEQvlUI.js";import"./index-BHH5WRWL.js";import"./Option-QnZNpfzw.js";import"./index-CvTa720j.js";import"./SegmentedButton-CEotyn2T.js";import"./index-CmxjBI6a.js";import"./Select-CJA0uPpx.js";import"./InvisibleMessage-BsWqZsBR.js";import"./index-sT6FfzL6.js";import"./index-C04kPmdl.js";import"./index-DvQYN9Bt.js";import"./index-YUMYtLpT.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DtCjc-pZ.js";import"./group-2-CWzLUS9i.js";import"./sort-descending-Brd47D1-.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-2s676dlH.js";import"./utils-CiQDjwNo.js";import"./index-BRePqaMI.js";import"./index-CAfOvHqP.js";import"./index-BY2jPfZG.js";import"./navigation-down-arrow-CkKFs3Xb.js";import"./navigation-right-arrow-BRDXxiyk.js";import"./navigation-right-arrow-CKEx--_J.js";import"./useCurrentTheme-CrJ4zyBU.js";import"./index-DCkgTfYz.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BHLafzmS.js";import"./paper-plane-21WFZ1Hz.js";import"./index-3r1XMCEK.js";import"./less-ByfJ7hLk.js";function e(r){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useAnnounceEmptyCells"}),`
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
