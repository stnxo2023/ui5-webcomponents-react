import{j as e}from"./iframe-CL0E0PWh.js";import{useMDXComponents as o}from"./index-Deybi7Kf.js";import{I as l,F as r}from"./CommandsAndQueries-CS7a2Ny4.js";import{M as a,C as c}from"./blocks-D7bkOkCE.js";import"./Tag-DqkevlzV.js";import"./index-CnAIuZ6O.js";import"./copy-ZUxcJ4wZ.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DzqTEMVF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CjZThSgP.js";import"./index-ChvCHLyh.js";import"./index-DKGx2Tou.js";import"./Link-opqw9zLH.js";import"./index-BmAVbjyV.js";import"./index-DNHIOaVp.js";import"./index-BjeAAycA.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C2NuoADq.js";import"./addCustomCSSWithScoping-nc0b1DpN.js";import"./index-CDhMu5B6.js";import"./information-B3nD7cls.js";import"./sys-enter-2-C4Y2Nq9D.js";import"./alert-Dw8v7tUg.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CnAxgAVj.js";import"./delete-CEucf5yG.js";import"./settings-DZKOIFbW.js";import"./NoData-El9prw2w.js";import"./IllustratedMessage-D0QYzomd.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DQRO6FcQ.js";import"./index-CghszLxp.js";import"./index-BbltPikc.js";import"./slim-arrow-down-DhSa9dLQ.js";import"./Input-DUkmGF5S.js";import"./ResponsivePopoverCommon.css-CGTYgw9i.js";import"./ValueStateMessage.css-C7zqpLFs.js";import"./Suggestions.css-D1MvItNb.js";import"./ListBoxItemGroupTemplate-DduLgS-n.js";import"./ComboBoxItemGroup-B3VqZwL7.js";import"./ListItemBaseTemplate-DcYxvehU.js";import"./Token-CHhkGCwz.js";import"./ScrollEnablement-DJDUaKRX.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BFyRiZ3I.js";import"./ToggleButton-nPzNF8JZ.js";import"./SuggestionItem-dwEDuAnB.js";import"./index-CWugch4w.js";import"./Option-YfFjlyIk.js";import"./index-ChNtVMH3.js";import"./SegmentedButton-BGPljDMM.js";import"./index-DuGAOmpy.js";import"./Select-BcB_Egz7.js";import"./InvisibleMessage-To8J9FEL.js";import"./slim-arrow-down-DsQgB3Sq.js";import"./index-Bw1B3i5S.js";import"./index-BvecTUj_.js";import"./index-CWBSa9lg.js";import"./index-DyNXbAXI.js";import"./IconDesign-DXd8PPVF.js";import"./filter-pPFeO57V.js";import"./group-2-DswFkUgQ.js";import"./sort-descending-Cp4PHVoq.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BFAZrbzu.js";import"./utils-C6v86EjJ.js";import"./index-xBWwCLsb.js";import"./index-Ds_mffnJ.js";import"./index-CSOTLQaF.js";import"./navigation-down-arrow-BBpx7i5v.js";import"./navigation-right-arrow-BtI6edzV.js";import"./navigation-right-arrow-BjmboBdq.js";import"./useCurrentTheme-BWHA45hS.js";import"./index-E4EGWXgk.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-g6jee3iH.js";import"./paper-plane-9DGcdM4H.js";import"./index-CwsNlV8s.js";import"./less-DCgV-mbR.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
