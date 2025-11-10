import{j as e}from"./iframe-5rXfnPaz.js";import{useMDXComponents as n}from"./index-BqyI3aT9.js";import{I as r,F as s}from"./CommandsAndQueries-Xz4gCbJR.js";import{M as l,C as a}from"./blocks-_HtGHxpQ.js";import"./Tag-BLU9xLwR.js";import"./index-TJORVIjM.js";import"./copy-3qQuBQub.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CcOUaagY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D3cU9WTA.js";import"./index-BB6TdVmi.js";import"./index-BgPkgqrz.js";import"./Link-IINvsuro.js";import"./index-X9fuUMPC.js";import"./index-DVjD8wbo.js";import"./index-Bna4bEkh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BikUYAZO.js";import"./addCustomCSSWithScoping-Cv8BQzm9.js";import"./index-DN9fi-2P.js";import"./information-C9cuRXqE.js";import"./sys-enter-2-y9J_ETy2.js";import"./alert-CnXddf7Q.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CnsKBKKm.js";import"./delete-CqVU8QSy.js";import"./settings-C6C2rMP5.js";import"./NoData-C6zrEqdJ.js";import"./IllustratedMessage-DVsNM8KB.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BY5FKPNb.js";import"./index-B2arcq-S.js";import"./index-Bxgt3Ou_.js";import"./slim-arrow-down-CG38GsAh.js";import"./Input-4O3kRwLq.js";import"./ResponsivePopoverCommon.css-C1xBOZoa.js";import"./ValueStateMessage.css-BdW6AGS6.js";import"./Suggestions.css-BLWo3F15.js";import"./ListBoxItemGroupTemplate-BZVK3C21.js";import"./ComboBoxItemGroup-BWv8Jfn6.js";import"./ListItemBaseTemplate-CP6xKZ4g.js";import"./Token-BUGkfYZH.js";import"./ScrollEnablement-C55G51IY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cua6cuRg.js";import"./ToggleButton-BeKGXq8p.js";import"./SuggestionItem-Cz6KMxHh.js";import"./index-Bij98Q-R.js";import"./Option-B7oChQ-z.js";import"./index-BQE7n4xd.js";import"./SegmentedButton-BsxmG9wr.js";import"./index-BmXkEItO.js";import"./Select-Cw6Szu5N.js";import"./InvisibleMessage-lYBgp4_P.js";import"./slim-arrow-down-BJXvyOyf.js";import"./index-0cRpwkC4.js";import"./index-VzaEEiDt.js";import"./index-B15VKN5k.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BzinyoGp.js";import"./group-2-BQu0Iyd9.js";import"./sort-descending-rgN241_I.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-ZZRaGFiZ.js";import"./utils-CkPWUOLN.js";import"./index-D0YwngEh.js";import"./index-DGROWVtJ.js";import"./index-Ct1kN3_s.js";import"./navigation-down-arrow-CN6lpdwx.js";import"./navigation-right-arrow-_aRbtzGU.js";import"./navigation-right-arrow-DxIZ5HVF.js";import"./useCurrentTheme-PC0lES2v.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B0PC4qEQ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cij_psQ1.js";import"./paper-plane-CpxuoSNW.js";import"./index-D89dDm_o.js";import"./less-arHg6uEN.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
