import{j as e}from"./iframe-BWwaFrUe.js";import{useMDXComponents as o}from"./index-YNaFuKct.js";import{I as l,F as r}from"./CommandsAndQueries-BTZsnlDx.js";import{M as a,C as c}from"./blocks-CUOVkMW1.js";import"./Tag-C1jS-OQM.js";import"./index-D57lmYpc.js";import"./copy-CotvDhWa.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BMcdVAna.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DWyfCle9.js";import"./index-CPNWsz0F.js";import"./index-D2byHvrl.js";import"./Link-BKxr4_LG.js";import"./index-CjEjkqT0.js";import"./index-BHGImwbL.js";import"./index-CZL1WN1v.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B9SYXEMy.js";import"./addCustomCSSWithScoping-DT9AYQXn.js";import"./index-B87YjzNM.js";import"./information-DMTe0ysY.js";import"./sys-enter-2-DQvPI1W2.js";import"./alert-BsvI3BFP.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ZJM36qku.js";import"./delete-DOgupLX8.js";import"./settings-4vio0KZw.js";import"./NoData-CX6GFhcP.js";import"./IllustratedMessage-DQsQaQ5a.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-C-6BQoNw.js";import"./index-B9Gz8ycv.js";import"./index-CN1ndyZW.js";import"./slim-arrow-down-CmSn7Sik.js";import"./Input-CY2_jO7N.js";import"./ResponsivePopoverCommon.css-DLB8912B.js";import"./ValueStateMessage.css-BD8m1HnI.js";import"./Suggestions.css-BBBvQtOR.js";import"./ListBoxItemGroupTemplate-yf3HFsAX.js";import"./ComboBoxItemGroup-D2AL_rCQ.js";import"./ListItemBaseTemplate-QNOu6P8O.js";import"./Token-DzMcWdi_.js";import"./ScrollEnablement-JdqAnokE.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D-3ZFt0p.js";import"./ToggleButton-Cf5cO5pE.js";import"./SuggestionItem-RvTEtoqI.js";import"./index-V1xW8ahy.js";import"./Option-tKeldczj.js";import"./index-BwnRWUYP.js";import"./SegmentedButton-SW6UDtT6.js";import"./index-DMORvkBO.js";import"./Select-DMl3Tw2N.js";import"./InvisibleMessage-C817vP8u.js";import"./slim-arrow-down-DkhplX3E.js";import"./index-c5nDhqAm.js";import"./index-C8H6ETRj.js";import"./index-MtPA4SgJ.js";import"./index-BD5bs7yp.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ClKCT9rN.js";import"./group-2-Dpay8E0t.js";import"./sort-descending-DyGsNaKs.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-vQwIUp-n.js";import"./utils-CdBNuaY-.js";import"./index-BDRKN7at.js";import"./index-BXKFr2l-.js";import"./index-mG3R14Tg.js";import"./navigation-down-arrow-BHHjgb5v.js";import"./navigation-right-arrow-CsvEnEN9.js";import"./navigation-right-arrow-Bmpxqsod.js";import"./useCurrentTheme-DCWBN9yR.js";import"./index-BuCzF1I2.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Ccg0UGwD.js";import"./paper-plane-o_qW1OCn.js";import"./index-BmyR6abe.js";import"./less-BiUEcVEK.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
