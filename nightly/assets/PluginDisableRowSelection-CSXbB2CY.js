import{j as e}from"./iframe-Bf1hlxgS.js";import{useMDXComponents as n}from"./index-B002OMKA.js";import{I as r,F as s}from"./CommandsAndQueries-BEe5YBSl.js";import{M as l,C as a}from"./blocks-CF_xVWI_.js";import"./Tag-BHAjLoAY.js";import"./index-p22CRHMo.js";import"./copy-D5BVEzvy.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BSgEoKJz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D-S325RU.js";import"./index-BciJGkl8.js";import"./index-hDeN6gmj.js";import"./Link-Bn0GO4LF.js";import"./index-BqDvsFmr.js";import"./index-BjKEmns7.js";import"./index-DhV0sN_I.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D7KxqJSV.js";import"./addCustomCSSWithScoping-BIqc26fM.js";import"./index-2lJhwVzj.js";import"./information-BXU6Hxbd.js";import"./sys-enter-2-BvfgNwob.js";import"./alert-B3TgQjln.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cb0z8X09.js";import"./delete-D8DWeF7d.js";import"./settings-Dh74knWL.js";import"./NoData-PZMeGE26.js";import"./IllustratedMessage-h1DOAdex.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-C3l4wxGh.js";import"./index-C5eIYaqM.js";import"./index-Bk0S-jnY.js";import"./slim-arrow-down-C4-n4KwM.js";import"./Input-Dqxhrjvq.js";import"./ResponsivePopoverCommon.css-Df1YsyQx.js";import"./ValueStateMessage.css-DXAAF2dF.js";import"./Suggestions.css-DM_nm0RD.js";import"./ListBoxItemGroupTemplate-C5qHO486.js";import"./ComboBoxItemGroup-DPlsTSsl.js";import"./ListItemBaseTemplate-BqEI7cM7.js";import"./Token-CPH3EVcO.js";import"./ScrollEnablement-Dfx6-CYw.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B9ipNNEN.js";import"./ToggleButton-D_L21r0E.js";import"./SuggestionItem-AhhjJ8Mh.js";import"./index-TUCbMDvM.js";import"./Option-CqSMarpV.js";import"./index-zS-bN0DU.js";import"./SegmentedButton-BicHJo62.js";import"./index-BK2139LG.js";import"./Select-FKh8tKiT.js";import"./InvisibleMessage-BnSLCX5X.js";import"./slim-arrow-down-amOGocIG.js";import"./index-BmHDaJX3.js";import"./index-C-eVdq9L.js";import"./index-BC1Ed97q.js";import"./index-ChBbQCuo.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DjkvSi-l.js";import"./group-2-BBxRQHAf.js";import"./sort-descending-BoIXgBQJ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DtECT_FH.js";import"./utils-BC9PCMpX.js";import"./index-CszV8wTC.js";import"./index-CxOmA48X.js";import"./index-DNt1wk0D.js";import"./navigation-down-arrow-DmEpUMgP.js";import"./navigation-right-arrow-Bu3lyT6l.js";import"./navigation-right-arrow-BBudxr1z.js";import"./useCurrentTheme-gu6EY9KG.js";import"./index-VBVjOL-U.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D-Rd56YE.js";import"./paper-plane-CEqXSyIK.js";import"./index-CSGuzL_r.js";import"./less-C1jg6kBH.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
