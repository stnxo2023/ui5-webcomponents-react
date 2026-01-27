import{j as e}from"./iframe-CB_qmYI8.js";import{useMDXComponents as o}from"./index-CUbKt2T4.js";import{I as l,F as r}from"./CommandsAndQueries-HFp-4-55.js";import{M as a,C as c}from"./blocks-DzH1842d.js";import"./Tag-BYvfvCLi.js";import"./index-BfAPJluR.js";import"./copy-DF2Z1I-X.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-23cGt9Fu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-R89IEGRw.js";import"./index-SxWu56C4.js";import"./index-DE9gqn8Y.js";import"./Link-BRHRm_Z2.js";import"./index-C0flI_9Q.js";import"./index-At4nCxiD.js";import"./index-6WmsPmX0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ClKIXNm7.js";import"./addCustomCSSWithScoping-9v1tewFq.js";import"./index-03LyQe5H.js";import"./information-CRpELSoZ.js";import"./sys-enter-2-DeQtcYtY.js";import"./alert-Bc8RvQjV.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DoIcej0d.js";import"./delete-h5Qd2W2H.js";import"./settings-CSx4aPPi.js";import"./NoData-BrRr6rJG.js";import"./IllustratedMessage-P-eTSBPb.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-C4AhZadB.js";import"./index-BecbeCsX.js";import"./index-4XDdM9qY.js";import"./slim-arrow-down-COs4Wkey.js";import"./Input-C9UjHzpz.js";import"./ResponsivePopoverCommon.css-DeWNHY7M.js";import"./ValueStateMessage.css-C_C4YLjN.js";import"./Suggestions.css-BiWmWxsR.js";import"./ListBoxItemGroupTemplate-CMTiHLs-.js";import"./ComboBoxItemGroup-CO3bHj-e.js";import"./ListItemBaseTemplate-DB4BankB.js";import"./Token-Bn2Z9z3x.js";import"./ScrollEnablement-zi7znCts.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cv8isNSi.js";import"./ToggleButton-CS3KiBib.js";import"./SuggestionItem-CS7L8vuq.js";import"./index-BmjeN9M0.js";import"./Option-DDYwfZPs.js";import"./index-BiQ1de6A.js";import"./SegmentedButton-B8To13C-.js";import"./index-MDU9FtHu.js";import"./Select-DhuDrd7S.js";import"./InvisibleMessage-Ds6r8Hv8.js";import"./slim-arrow-down-jIayUIlb.js";import"./index-DDk-oOqz.js";import"./index-CTC0a4Ev.js";import"./index-BvRf3EEd.js";import"./index-D2nb9FR-.js";import"./IconDesign-DXd8PPVF.js";import"./filter-J7STKAsw.js";import"./group-2-bvY_SkSU.js";import"./sort-descending-7NVh3v7n.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BUpkmw30.js";import"./utils-D98SoFu_.js";import"./index-CN6SBPye.js";import"./index-BhZzLROS.js";import"./index-Y1-1V0is.js";import"./navigation-down-arrow-BV093n8q.js";import"./navigation-right-arrow-hA-Kw1uy.js";import"./navigation-right-arrow-BYDjRs4q.js";import"./useCurrentTheme-C9z11eLv.js";import"./index-CPVT_XbL.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-NAZbOjtu.js";import"./paper-plane-DaL2oIMz.js";import"./index-B9MOWJBA.js";import"./less-CxZT17u6.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
