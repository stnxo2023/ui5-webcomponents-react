import{j as e}from"./iframe-DZQsFHyF.js";import{useMDXComponents as n}from"./index-FeafUf3S.js";import{I as r}from"./CommandsAndQueries-Q7QL049M.js";import{M as s,C as l}from"./blocks-CCR5dlte.js";import"./Tag-njT3oUWj.js";import"./index-FZQI4JeT.js";import"./copy-B0ak1fDk.js";import{F as a}from"./Footer-1JL6Y-Rs.js";import"./PageNotFound-CAJJq4gT.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BuH-VEXs.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-Dy7YK0fU.js";import"./index-CmNuhxCj.js";import"./index-C2RcbU_s.js";import"./index-QENyXe96.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DsnnpcUC.js";import"./addCustomCSSWithScoping-BZT-QmME.js";import"./index-DGD79lBE.js";import"./index-CeHR91It.js";import"./index-JUdhH85j.js";import"./information-Byx_k42O.js";import"./sys-enter-2-CNKaU8fp.js";import"./alert-HiA3dax7.js";import"./index-CHkzxhcQ.js";import"./Illustrations-BlaFZAWE.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BJaohFVO.js";import"./delete-Bb9u1YlP.js";import"./settings-uxlfm5Eb.js";import"./NoData-DH1nVKCg.js";import"./NoFilterResults-CG83QGUe.js";import"./index-CKx2XrjC.js";import"./IllustratedMessage-8KXEKgMw.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-8Xbwx2Wl.js";import"./Input-DmDSg_Bp.js";import"./ResponsivePopoverCommon.css-CH3mALXJ.js";import"./ValueStateMessage.css-EXmMX5gs.js";import"./Suggestions.css-D2AfaPCJ.js";import"./ListBoxItemGroupTemplate-Ci0HBhCE.js";import"./ComboBoxItemGroup-nne4TIrE.js";import"./ListItemBaseTemplate-Ch_-zEJx.js";import"./Token-xIAyAS3n.js";import"./ScrollEnablement-Dl_lVbGP.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Du0wWGOA.js";import"./ToggleButton-CspSetq-.js";import"./multiselect-all-BaBAM3Qb.js";import"./SuggestionItem-CFEQvlUI.js";import"./index-BHH5WRWL.js";import"./Option-QnZNpfzw.js";import"./index-CvTa720j.js";import"./SegmentedButton-CEotyn2T.js";import"./index-CmxjBI6a.js";import"./Select-CJA0uPpx.js";import"./InvisibleMessage-BsWqZsBR.js";import"./index-sT6FfzL6.js";import"./index-C04kPmdl.js";import"./index-DvQYN9Bt.js";import"./index-YUMYtLpT.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DtCjc-pZ.js";import"./group-2-CWzLUS9i.js";import"./sort-descending-Brd47D1-.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-2s676dlH.js";import"./utils-CiQDjwNo.js";import"./index-BRePqaMI.js";import"./index-CAfOvHqP.js";import"./index-BY2jPfZG.js";import"./navigation-down-arrow-CkKFs3Xb.js";import"./navigation-right-arrow-BRDXxiyk.js";import"./navigation-right-arrow-CKEx--_J.js";import"./useCurrentTheme-CrJ4zyBU.js";import"./index-DCkgTfYz.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BHLafzmS.js";import"./paper-plane-21WFZ1Hz.js";import"./index-3r1XMCEK.js";import"./less-ByfJ7hLk.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
`,e.jsx(o.h1,{id:"analyticaltable-plugin-userowdisableselection",children:"AnalyticalTable Plugin: useRowDisableSelection"}),`
`,e.jsx(r,{moduleName:"useRowDisableSelection",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,e.jsx("hr",{}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Deprecated!"})," It is not recommended to disable table rows, mainly because of the following reasons:"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"Users are not informed why items cannot be selected."}),`
`,e.jsx(o.li,{children:"ARIA lacks built-in support for selective item selection, complicating accessibility."}),`
`,e.jsx(o.li,{children:"Consistency to other applications which do not offer disabled items."}),`
`]}),`
`,e.jsx("hr",{}),`
`,e.jsxs(o.p,{children:["With the ",e.jsx(o.code,{children:"useRowDisableSelection"})," it's possible to disable the selection of specific rows. It can receive two types of parameters:"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"string"}),": Defines the key in the dataset for disabling rows. If the value of the key is ",e.jsx(o.code,{children:"true"}),", then the row will not be selectable."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Function(row) => boolean"}),": Programmatically disable rows for selection. The function receives the current row as parameter."]}),`
`]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"}),' The "Select All" checkbox is not available with this hook.']}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"})," Using this hook in combination with the ",e.jsx(o.code,{children:"useIndeterminateRowSelection"})," hook is not supported!"]}),`
`,e.jsx(l,{sourceState:"none",of:m}),`
`,e.jsx(o.h2,{id:"example",children:"Example"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const disableRowFunc = (row) => row.original.age < 40;
const tableHooks = [useRowDisableSelection(disableRowFunc)]; // this array should be memoized

const WithFunctionParameter = () => {

  return (
    <AnalyticalTable
      data={data}
      columns={columns}
      selectionMode={AnalyticalTableSelectionMode.Multiple}
      tableHooks={tableHooks}
    />
  );
};

`})}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const data = [
  {
    name: "Peter Franco",
    age: 22,
    //...
    disableSelection: Math.random() < 0.5,
  },
  //...
];
const tableHooks = [useRowDisableSelection("disableSelection")]; // this array should be memoized

const WithStringParameter = () => {
  return (
    <AnalyticalTable
      data={data}
      columns={columns}
      selectionMode={AnalyticalTableSelectionMode.Multiple}
      tableHooks={tableHooks}
    />
  );
};
`})}),`
`,e.jsx(a,{})]})}function Ee(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ee as default};
