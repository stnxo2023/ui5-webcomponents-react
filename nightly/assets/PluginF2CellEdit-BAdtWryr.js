import{j as e}from"./iframe-DjfYWB_-.js";import{useMDXComponents as o}from"./index-CNEMb-s-.js";import{I as l,F as r}from"./CommandsAndQueries-BsOJw-5f.js";import{M as a,C as c}from"./blocks-nmBdCmu5.js";import"./Tag-BYbOAHsQ.js";import"./index-Cv9LJBlx.js";import"./copy-DOQqskn1.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Bx8L5gGw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cwo-vKel.js";import"./index-B3I7HtBx.js";import"./index-CkJ-GMHH.js";import"./Link-CGcb-hqt.js";import"./index-3-iEB97a.js";import"./index-Blql2ABB.js";import"./index-B4phfj74.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-M6waVzUY.js";import"./addCustomCSSWithScoping-Bm9f8w42.js";import"./index-CPQFexs4.js";import"./information-6Bx96viV.js";import"./sys-enter-2-Dkjyf6Zz.js";import"./alert-Cr4CwR6P.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dg2EcDm-.js";import"./delete-Dn4VRsBO.js";import"./settings-Bqn2drvn.js";import"./NoData-BrXPHqk9.js";import"./IllustratedMessage-bJRZPLTh.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-Bij97oPM.js";import"./index-CGkDrGvP.js";import"./index-BvLI0S8J.js";import"./slim-arrow-down-swQTdSNw.js";import"./Input-CJfaU7cK.js";import"./ResponsivePopoverCommon.css-DpaN_G4_.js";import"./ValueStateMessage.css-DaYi5Bjt.js";import"./Suggestions.css-CNISWm9D.js";import"./ListBoxItemGroupTemplate-BQ40pZer.js";import"./ComboBoxItemGroup-o1GMSWgz.js";import"./ListItemBaseTemplate-DNfVXr3f.js";import"./Token-D9FthG2R.js";import"./ScrollEnablement-B4FaEPu4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DkthL8Bg.js";import"./ToggleButton-DPum5vk_.js";import"./SuggestionItem-CF8875wi.js";import"./index-BRPIgwS4.js";import"./Option-3-roLoVF.js";import"./index-Bs2a6dx4.js";import"./SegmentedButton-B7RnWeGJ.js";import"./index-CpZsNdqM.js";import"./Select-CpnB3P08.js";import"./InvisibleMessage-BuBF9yqs.js";import"./slim-arrow-down-DNZp2sIO.js";import"./index-BZ-x6-Bx.js";import"./index-BFkrGCCz.js";import"./index-B_HRORUp.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DD4TJf9R.js";import"./group-2-ARDd1dPZ.js";import"./sort-descending-Bm1JystE.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-7WbgYwtx.js";import"./utils-B_rTI3PV.js";import"./index-0H0qN1a3.js";import"./index-k3f5SVhd.js";import"./index-B-bcUYN5.js";import"./navigation-down-arrow-BXADmo6h.js";import"./navigation-right-arrow-K_bO6q0G.js";import"./navigation-right-arrow-Bg66dsed.js";import"./useCurrentTheme-C9aR5EtN.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B14eBFuc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DoJ7z7ik.js";import"./paper-plane-KU6AFQvR.js";import"./index-BB7Dlsa8.js";import"./less-BADhD7u_.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
