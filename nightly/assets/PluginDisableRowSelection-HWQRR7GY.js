import{j as e}from"./iframe-Qn10Vv46.js";import{useMDXComponents as n}from"./index-Dn_QNZXe.js";import{I as r,F as s}from"./CommandsAndQueries-BS5w0Fww.js";import{M as l,C as a}from"./blocks-CqvMe-zP.js";import"./Tag-D88IrP9Y.js";import"./index-CPne16Vl.js";import"./copy-CASyM-HB.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-H3_QwZfA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-1Dq2e1Fv.js";import"./index-D9ZF8-N2.js";import"./index-u07ulNkL.js";import"./Link-B9oRKMRP.js";import"./index-Btsu4EzQ.js";import"./index-D7W_CU3P.js";import"./index-Qf4zPxvx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DyNR1Lsa.js";import"./addCustomCSSWithScoping-BMEnUHPm.js";import"./index-BCXe2PbY.js";import"./information-BED9_Z-O.js";import"./sys-enter-2-DmPWvQNd.js";import"./alert-CtILWS1T.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DDGW3LlO.js";import"./delete-CwMLkwBl.js";import"./settings-D3w6QaCp.js";import"./NoData-DlAD3CDh.js";import"./IllustratedMessage-B5PXEdvM.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-D1-NKvrK.js";import"./index-DAtiHyZC.js";import"./index-BTxgNax-.js";import"./slim-arrow-down-DStIyIYv.js";import"./Input-JG6KYeb2.js";import"./ResponsivePopoverCommon.css-D30PmpG6.js";import"./ValueStateMessage.css-B1tOkt9X.js";import"./Suggestions.css-AZtlnByU.js";import"./ListBoxItemGroupTemplate-Ck_Tg_1E.js";import"./ComboBoxItemGroup-X4WYLtK7.js";import"./ListItemBaseTemplate-aIA1KjTO.js";import"./Token-B8pCzhwp.js";import"./ScrollEnablement-BI5-jdZK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bar0KGH4.js";import"./ToggleButton-CRT5W38j.js";import"./SuggestionItem-D11zz-CY.js";import"./index-CP1thd2f.js";import"./Option-C4JrqG_U.js";import"./index-C8dYCS08.js";import"./SegmentedButton-DrQ4e9ne.js";import"./index-BUBbEq2D.js";import"./Select-DLuDF3wk.js";import"./InvisibleMessage-BlyETXSd.js";import"./slim-arrow-down-BRQZce7U.js";import"./index-XwrFFEKH.js";import"./index-BXul6roJ.js";import"./index-BakmgRez.js";import"./index-BmRC0J2V.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DMRvgaWs.js";import"./group-2-C_NGD824.js";import"./sort-descending-BFLjgKM6.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DHB3H4fo.js";import"./utils-B-v7HQ2f.js";import"./index-B6IRXIFn.js";import"./index-BWjiDXwP.js";import"./index-7awi3J8u.js";import"./navigation-down-arrow-Coc2XK-B.js";import"./navigation-right-arrow-C5N9ABfy.js";import"./navigation-right-arrow-DMix7vwu.js";import"./useCurrentTheme-D9dDzE9L.js";import"./index-Bo0yjZ_x.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-0Grxk9f4.js";import"./paper-plane-Cf20vZx7.js";import"./index-BADkrGDt.js";import"./less-DtkLr4vn.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
