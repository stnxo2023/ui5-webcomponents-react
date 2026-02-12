import{j as e}from"./iframe-DQ6p6C4w.js";import{useMDXComponents as n}from"./index-PJ7eIANP.js";import{I as r,F as s}from"./CommandsAndQueries-D4Earqxe.js";import{M as l,C as a}from"./blocks-DzLxfDF_.js";import"./Tag-maX3wI_O.js";import"./index-DMdtpgB4.js";import"./copy-DK9nMyWi.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-7SKfaEhF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DyLo2c5y.js";import"./index-BX38vZ_H.js";import"./index-Crvp2P38.js";import"./Link-C5vNyymE.js";import"./index-BTeE4XW8.js";import"./index-GGF-6yBD.js";import"./index-BiYiYWPU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DEFxvwKp.js";import"./addCustomCSSWithScoping-D-NBvgXV.js";import"./index-BBaHTUom.js";import"./information-DP-BBVKe.js";import"./sys-enter-2-CHLEBxpk.js";import"./alert-DwSet8Gr.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BM0AAgbR.js";import"./delete-DMRotf9j.js";import"./settings-Qlfl2--E.js";import"./NoData-CG8Gfnlk.js";import"./IllustratedMessage-Bk7WaAKk.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-C6kdXBz1.js";import"./index-Be9p3z4u.js";import"./index-SfO0yU3c.js";import"./slim-arrow-down-I4aiGrie.js";import"./Input-9nOAsBMy.js";import"./ResponsivePopoverCommon.css-MVZLdMIH.js";import"./ValueStateMessage.css-CkUI3rSD.js";import"./Suggestions.css-Aftn0Ezj.js";import"./ListBoxItemGroupTemplate-CGyPTJpI.js";import"./ComboBoxItemGroup-DzFWuHFZ.js";import"./ListItemBaseTemplate-BQzetuJF.js";import"./Token-BvnOnelq.js";import"./ScrollEnablement-B8wTVu_K.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CNdPnkVA.js";import"./ToggleButton-FZnOi6HL.js";import"./SuggestionItem-B0rlLjtX.js";import"./index-DeVILtND.js";import"./Option-CqqhCzJo.js";import"./index-CWil2bGL.js";import"./SegmentedButton-BexC6deI.js";import"./index-BDyF9JTe.js";import"./Select-BaxOqbyI.js";import"./InvisibleMessage-24SaMl40.js";import"./slim-arrow-down-BD-D-jTM.js";import"./index-CqeSCPN8.js";import"./index-CSCE2WuM.js";import"./index-CafJ-VFs.js";import"./index-BFcP-RXU.js";import"./IconDesign-DXd8PPVF.js";import"./filter-EKKbfFKu.js";import"./group-2-BNxeZZD0.js";import"./sort-descending-h8gj2BbX.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DlP9LYsR.js";import"./utils-CjCmjhy5.js";import"./index-DDn9deUd.js";import"./index-B8YKbRO9.js";import"./index-YsTawKKr.js";import"./navigation-down-arrow-CrnE_ZSF.js";import"./navigation-right-arrow-BufBbj_8.js";import"./navigation-right-arrow-fYJGhKbp.js";import"./useCurrentTheme-B7yEjOjC.js";import"./index-COiOOqBC.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DUgzYJYd.js";import"./paper-plane-BuT7OBrZ.js";import"./index-iSaIGODj.js";import"./less-CywBv2zo.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
