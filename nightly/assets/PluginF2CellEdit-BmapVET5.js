import{j as e}from"./iframe-Bx5nPEOl.js";import{useMDXComponents as o}from"./index-xw1HgrxR.js";import{I as l,F as r}from"./CommandsAndQueries-DQbk5l2-.js";import{M as a,C as c}from"./blocks-BnfvreJd.js";import"./Tag-Czmfabca.js";import"./index-DySSVXhZ.js";import"./copy-CNcXjyuB.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CrixVdQ8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BJ7q1nh3.js";import"./index-CHjTsZ6I.js";import"./index-DkrrTKjv.js";import"./Link-kOQVQryb.js";import"./index-DAgUYXjE.js";import"./index-EX-yWEKJ.js";import"./index-Bwj8Rahv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-4hIxCZ-4.js";import"./addCustomCSSWithScoping-BnQjkpis.js";import"./index-D030oFb6.js";import"./information-C_BRWXUj.js";import"./sys-enter-2-lnnKHtcu.js";import"./alert-CZSvHkOp.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BwNoBN7k.js";import"./delete-DojygiWC.js";import"./settings-CdO75LQa.js";import"./NoData-BxLSGnmz.js";import"./IllustratedMessage-CznMqB69.js";import"./i18n-defaults-BoKY-OR9.js";import"./parameters-bundle.css-B37gDvcF.js";import"./NoFilterResults-BIAQtnD-.js";import"./index-DV1-UqSW.js";import"./index-CpsQPo3e.js";import"./slim-arrow-down-eJKhvhkE.js";import"./Input-CxXLCf6q.js";import"./ResponsivePopoverCommon.css-CalmLiVM.js";import"./ValueStateMessage.css-BZ1EUbwN.js";import"./Suggestions.css-DQV6aIGz.js";import"./ListBoxItemGroupTemplate-VNyv00pZ.js";import"./ComboBoxItemGroup-jUyYtSAM.js";import"./ListItemBaseTemplate-Dykvp_EK.js";import"./Token-DhwxhKpj.js";import"./ScrollEnablement-DNpNAWna.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-zfIyxVpK.js";import"./ToggleButton-CQ5gk1wa.js";import"./SuggestionItem-CcFTbcr2.js";import"./index-MISqvFi7.js";import"./Option-DPppUzFK.js";import"./index-BfR1hjK_.js";import"./SegmentedButton-3fKGQQxX.js";import"./index-C4WckVVh.js";import"./Select-C1QLPr_H.js";import"./InvisibleMessage-CQ0u2q5u.js";import"./slim-arrow-down-CAhFqhr1.js";import"./index-FDm07H3e.js";import"./index-djmxjVZM.js";import"./index-8AWyZMWh.js";import"./index-AroNelzF.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cozu-6eK.js";import"./group-2-o5ZUKu4E.js";import"./sort-descending-BldoBMrB.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C6ekE9Pr.js";import"./utils-D64FTNul.js";import"./index-DBe8VqoY.js";import"./index-BK8Wq19O.js";import"./index-Cp2_alMF.js";import"./navigation-down-arrow-CRFET8c4.js";import"./navigation-right-arrow-BmtWA2-q.js";import"./navigation-right-arrow-JKoD_tiK.js";import"./useCurrentTheme-BTp0qmA6.js";import"./index-CiSPkYgk.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-wht3LnSl.js";import"./paper-plane-C5y4Nddn.js";import"./index-DH3g5PUN.js";import"./less-BXKa_8RC.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
