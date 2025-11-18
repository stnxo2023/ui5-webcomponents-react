import{j as e}from"./iframe-DMHzJZ-j.js";import{useMDXComponents as n}from"./index-C6fVjeP1.js";import{I as r,F as s}from"./CommandsAndQueries-DGQGLEXC.js";import{M as l,C as a}from"./blocks-BBNtOPy5.js";import"./Tag-CQITClqv.js";import"./index-C0eFSkjd.js";import"./copy-x3ZdDA2U.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CaT9r6rb.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DhIsFRFq.js";import"./index-B1RFmErt.js";import"./index-Cr6zAa1Q.js";import"./Link-DH5vJWVF.js";import"./index-DgEALGZi.js";import"./index-CqxeRCB-.js";import"./index-CEzdIVxS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-bWNLwVQr.js";import"./addCustomCSSWithScoping-Br9NkwKR.js";import"./index-BlloQ94B.js";import"./information-41_Ak17O.js";import"./sys-enter-2-YeOg860G.js";import"./alert-Dt7k-zHX.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BeCjkhT-.js";import"./delete-B3Zi7ci0.js";import"./settings-DpEAtvN4.js";import"./NoData-CMRDWD8S.js";import"./IllustratedMessage-ypMCec_7.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BAEmwexU.js";import"./index-BLZvKk1A.js";import"./index-DALZzsGY.js";import"./slim-arrow-down-IOQwWOJR.js";import"./Input-D0sQDQIP.js";import"./ResponsivePopoverCommon.css-BZuN8o2Z.js";import"./ValueStateMessage.css-Cu_y8whz.js";import"./Suggestions.css-Du7gKKRX.js";import"./ListBoxItemGroupTemplate-B0EOdTVM.js";import"./ComboBoxItemGroup-CHjUNt3f.js";import"./ListItemBaseTemplate-C5SCfjzM.js";import"./Token-DnzFeT9s.js";import"./ScrollEnablement-CIWRDRru.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CWeiqPrI.js";import"./ToggleButton-CBNvjcuG.js";import"./SuggestionItem-DyoT1JDI.js";import"./index-CMQmlJik.js";import"./Option-DWdsEKMy.js";import"./index-DIXxOC37.js";import"./SegmentedButton-BiHeLBaC.js";import"./index-B7KKnXVU.js";import"./Select-HM-omYP_.js";import"./InvisibleMessage-DHXVn91v.js";import"./slim-arrow-down-B6ZtTkOe.js";import"./index-Cu33fkQB.js";import"./index-BfuDz84Z.js";import"./index-uksb_LL1.js";import"./IconDesign-DXd8PPVF.js";import"./filter-e3XRiwh1.js";import"./group-2-BdpK5aV9.js";import"./sort-descending-BtXqYEdP.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DXKiXJss.js";import"./utils-DoNqiPbK.js";import"./index-BP4PKNEe.js";import"./index-CVjUPdda.js";import"./index-aypBjRie.js";import"./navigation-down-arrow-3r7pwMvO.js";import"./navigation-right-arrow-CqCWNsea.js";import"./navigation-right-arrow-B-wRit2V.js";import"./useCurrentTheme-fSV64WwT.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DNFK3A_E.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-zZAL_Iqq.js";import"./paper-plane-C9A5taeB.js";import"./index-CGpUpTTM.js";import"./less-DGQbhCVA.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(a,{sourceState:"none",of:m}),`
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
`,e.jsx(s,{})]})}function Xe(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Xe as default};
