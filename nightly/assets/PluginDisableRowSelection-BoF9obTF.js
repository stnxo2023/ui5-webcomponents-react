import{j as e}from"./iframe-sceg0YFv.js";import{useMDXComponents as n}from"./index-Dd71zBof.js";import{I as r,F as s}from"./CommandsAndQueries-DKneq4GY.js";import{M as l,C as a}from"./blocks-DYuUqipq.js";import"./Tag-CeuATfsT.js";import"./index-D3F4cwyn.js";import"./copy-BMdV5CCm.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-D9V3hbO9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-8sMjurJr.js";import"./index-DSENQiVR.js";import"./index-F95KXh_C.js";import"./Link-DWrZ8VdK.js";import"./index-Bk8MfuNW.js";import"./index-CEhCU38B.js";import"./index-DAUv-Nz3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BrlG2Z_i.js";import"./addCustomCSSWithScoping-CcKa_wrj.js";import"./index-B8FjapMT.js";import"./information-BKrgGcb8.js";import"./sys-enter-2-t67Ok8iZ.js";import"./alert-DGYqNpWm.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-pBbQnN3Z.js";import"./delete-BcYS3_de.js";import"./settings-DrHuTXnI.js";import"./NoData-BwUWak2R.js";import"./IllustratedMessage-CcQlEZMH.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Va26yAXy.js";import"./index-C4VdLOMW.js";import"./slim-arrow-down-B5pvNBWL.js";import"./Input-BzfDni2m.js";import"./ResponsivePopoverCommon.css-nC5XMOBp.js";import"./ValueStateMessage.css-DoUgf-5j.js";import"./Suggestions.css-BM83gU06.js";import"./ListBoxItemGroupTemplate-BqRj3VE-.js";import"./ComboBoxItemGroup-Cs6EfPox.js";import"./ListItemBaseTemplate-DRhEz-gw.js";import"./Token-CMcoBKOf.js";import"./ScrollEnablement-D3zh3Kdj.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B6k3txAq.js";import"./ToggleButton-DvFeI1Lt.js";import"./SuggestionItem-pUR3Pu7g.js";import"./index-DhvsTyd-.js";import"./Option-g5dMk_Dv.js";import"./index-M3RgBHzH.js";import"./SegmentedButton-u8O6wtdn.js";import"./index-CfnPZ09d.js";import"./Select-ByBsloVO.js";import"./InvisibleMessage-BWbsBg6p.js";import"./slim-arrow-down-BMGSx_7g.js";import"./index-NnSPlH_p.js";import"./index-CZeNbB2P.js";import"./IconDesign-DXd8PPVF.js";import"./filter-zkm8V6wo.js";import"./group-2-C-nKwgK2.js";import"./sort-descending-DgIX2NPP.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B8uJhRMm.js";import"./utils-DWNV0P4_.js";import"./index-BbsMwmmG.js";import"./index-CPOk0n0E.js";import"./index-LxsB8pJ3.js";import"./navigation-down-arrow-DeNM6o9T.js";import"./navigation-right-arrow-B8ciO61d.js";import"./navigation-right-arrow-Cpbh-nxP.js";import"./useCurrentTheme-BACbWtxM.js";import"./IndicationColor-DVw-fSM_.js";import"./index-PhsavknA.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-2UKl6MPc.js";import"./paper-plane-B69Ziwxr.js";import"./index-Dnv3XQPA.js";import"./less-Byh4l9lP.js";import"./index-DPuz9km0.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(s,{})]})}function Ue(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ue as default};
