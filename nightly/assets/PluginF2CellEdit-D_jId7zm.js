import{j as e}from"./iframe-DtedCjfy.js";import{useMDXComponents as o}from"./index-CHHTCtpJ.js";import{I as l,F as r}from"./CommandsAndQueries-CefMw8Tu.js";import{M as a,C as c}from"./blocks-B76JpcnK.js";import"./Tag-UovGhxml.js";import"./index-DKt9EK6E.js";import"./copy-YvtV-MwK.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DaFgOxon.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DX3eFopX.js";import"./index-DeLaWQId.js";import"./index-B_rkL0I7.js";import"./Link-DZXvuASQ.js";import"./index-CYjF7K0n.js";import"./index-BwT8h001.js";import"./index-CSzpUMpn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BDJ7Ajcv.js";import"./addCustomCSSWithScoping-ClguXaul.js";import"./index-Np4eK1ew.js";import"./information-Dgg1zzf6.js";import"./sys-enter-2-BS_wAjUh.js";import"./alert-DCJXRL-H.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CYN8eos6.js";import"./delete-C1Wyhlth.js";import"./settings-CptqO7gs.js";import"./NoData-F4hYh7Ek.js";import"./IllustratedMessage-C5F6SUC6.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BJoCUYm7.js";import"./index-s9vdjwfk.js";import"./index-D10KU1Ta.js";import"./slim-arrow-down-B5bCreHk.js";import"./Input-Dl-5sLwa.js";import"./ResponsivePopoverCommon.css-82X5LMAI.js";import"./ValueStateMessage.css-BmfTYgl7.js";import"./Suggestions.css-D0hxhwDs.js";import"./ListBoxItemGroupTemplate-DVxNdcM2.js";import"./ComboBoxItemGroup-DLcad7ol.js";import"./ListItemBaseTemplate-vodsce4v.js";import"./Token-dHSL_sqK.js";import"./ScrollEnablement-CJ3-LAJa.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BKpRxXOc.js";import"./ToggleButton-D-pV1m-u.js";import"./SuggestionItem-DNzNqXr6.js";import"./index-CX53ZjFD.js";import"./Option-1uoBZugc.js";import"./index-CPryGVXA.js";import"./SegmentedButton-aUT_BGJH.js";import"./index-DOcX0ZLa.js";import"./Select-Dv5jHc6p.js";import"./InvisibleMessage-CMofOcZ8.js";import"./slim-arrow-down-DO0xZWHM.js";import"./index-DgAPvGu_.js";import"./index-BTiCeD2_.js";import"./index-ymNZsoic.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cm-ygou4.js";import"./group-2-DGbAk6nr.js";import"./sort-descending-C2Qum4wS.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Doqujavl.js";import"./utils-C_iBhdzJ.js";import"./index--q_AhH3V.js";import"./index-DWer0OoI.js";import"./index-DR8LVVUU.js";import"./navigation-down-arrow-DjGJNutR.js";import"./navigation-right-arrow-CXzg5gO0.js";import"./navigation-right-arrow-C4yN2OeR.js";import"./useCurrentTheme-B3YW7Vit.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CAokvEvK.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BGj6VAfy.js";import"./paper-plane-tyKPIBAt.js";import"./index-C0v4tUQf.js";import"./less-CM7xB0tS.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
`,e.jsx(n.h1,{id:"analyticaltable-plugin-usef2celledit",children:"AnalyticalTable Plugin: useF2CellEdit"}),`
`,e.jsx(l,{moduleNames:["AnalyticalTableHooks"],packageName:"@ui5/webcomponents-react"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Since: v2.14.0"})}),`
`,e.jsx(n.p,{children:"A plugin hook that enables F2-based cell editing for interactive elements inside a cell."}),`
`,e.jsxs(n.p,{children:["To ",e.jsx(n.strong,{children:"ensure the hook works correctly"}),", make sure that:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Each column containing interactive elements has the ",e.jsx(n.code,{children:"interactiveElementName"})," property set. ",e.jsx(n.strong,{children:"Note:"})," This property is also used to describe the cell's content for screen readers."]}),`
`,e.jsxs(n.li,{children:["The callback Ref returned by ",e.jsx(n.code,{children:"useF2CellEdit.useCallbackRef"})," is attached to every interactive element within the cell."]}),`
`]}),`
`,e.jsxs(n.p,{children:["The hook manages focus, keyboard navigation, and ",e.jsx(n.code,{children:"tabindex"})," for cells with interactive content:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Pressing ",e.jsx(n.code,{children:"F2"})," moves focus between the cell container and its first interactive element."]}),`
`,e.jsxs(n.li,{children:["Updates the cell's ",e.jsx(n.code,{children:"aria-label"})," with the interactive element's name for accessibility."]}),`
`,e.jsx(n.li,{children:"Prevents standard navigation keys from interfering when editing a cell."}),`
`]}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(c,{of:s,sourceState:"none"}),`
`,e.jsx(n.h3,{id:"code",children:"Code"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import type {
  AnalyticalTableCellInstance,
  AnalyticalTableColumnDefinition,
  InputDomRef,
  AnalyticalTablePropTypes,
} from '@ui5/webcomponents-react';
import { AnalyticalTableHooks, AnalyticalTable, Button, CheckBox, Input, Switch, Tag } from '@ui5/webcomponents-react';
import paperPlaneIcon from '@ui5/webcomponents-icons/dist/paper-plane';

const { useF2CellEdit } = AnalyticalTableHooks;

const columns: AnalyticalTableColumnDefinition[] = [
  {
    Header: 'Input',
    id: 'input',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<InputDomRef>(props);
      return <Input ref={callbackRef} />;
    },
    interactiveElementName: 'Input',
  },
  {
    Header: 'Input & Button',
    id: 'input_btn',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef(props);
      return (
        <>
          <Input ref={callbackRef} />
          <Button ref={callbackRef} icon={paperPlaneIcon} tooltip="Submit" accessibleName="Submit" />
        </>
      );
    },
    interactiveElementName: 'Input and Button',
  },
  {
    Header: 'Text',
    accessor: 'name',
  },
  {
    Header: 'Button',
    id: 'btn',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef(props);
      return <Button ref={callbackRef}>Button</Button>;
    },
    interactiveElementName: () => 'Button',
  },
  {
    Header: 'Non-interactive custom content',
    accessor: 'friend.name',
    Cell: (props: AnalyticalTableCellInstance) => {
      return <Tag>{props.value}</Tag>;
    },
  },
  {
    Header: 'Switch or CheckBox',
    id: 'switch_checkbox',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef(props);
      if (props.row.index % 2) {
        return <CheckBox ref={callbackRef} accessibleName="Dummy CheckBox" />;
      }
      return <Switch ref={callbackRef} accessibleName="Dummy Switch" />;
    },
    interactiveElementName: (props: AnalyticalTableCellInstance) => {
      if (props.row.index % 2) {
        return 'CheckBox';
      }
      return 'Switch';
    },
  },
];

const tableHooks: AnalyticalTablePropTypes['tableHooks'] = [useF2CellEdit];

function TableWithInputs({ data }) {
  return <AnalyticalTable data={data} columns={columns} tableHooks={tableHooks} visibleRows={5} />;
}
`})}),`
`,e.jsx(r,{})]})}function Me(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{Me as default};
