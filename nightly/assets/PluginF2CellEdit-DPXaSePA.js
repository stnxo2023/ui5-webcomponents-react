import{j as e}from"./iframe-CJJIsx6F.js";import{u as o,M as l,C as r}from"./blocks-ChaXMZP5.js";import{I as a}from"./CommandsAndQueries-B6BpCs-M.js";import"./Tag-n7rERTqv.js";import"./index-C3WbBMZ1.js";import"./copy-CS6obn2m.js";import{F as c}from"./Footer-Ce6by-oH.js";import"./PageNotFound-BtSzGq-G.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CwHhua2M.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-GrYjVq0T.js";import"./index-BAPIP2EX.js";import"./index-CiQC7Mcr.js";import"./index-DWaBFkkI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CLM_ccAB.js";import"./addCustomCSSWithScoping-DH49qo7-.js";import"./index-8nS7lmoC.js";import"./index-qLq9B_00.js";import"./index-Comgbi1p.js";import"./information-DHzv4rEq.js";import"./sys-enter-2-DxE2QBT2.js";import"./alert-BgdGP7JP.js";import"./index-DqWhINqr.js";import"./Illustrations-BhBoWAi4.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DjANczir.js";import"./delete-iBMBoW9R.js";import"./settings-DrDadmIh.js";import"./NoData-CLaEuyBQ.js";import"./NoFilterResults-DJwtRche.js";import"./index-CIOABHCP.js";import"./IllustratedMessage-D4RUR_cG.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-C7pW_ymX.js";import"./Input-DsafznTO.js";import"./ResponsivePopoverCommon.css-ChLB8_9T.js";import"./ValueStateMessage.css-BLjLq8yr.js";import"./Suggestions.css-CqX3de1P.js";import"./ListBoxItemGroupTemplate-BSinwIEf.js";import"./ComboBoxItemGroup-Bc4DlTLD.js";import"./ListItemBaseTemplate-DaxiMu7F.js";import"./Token-DL4JI-jm.js";import"./ScrollEnablement-BtkDzK2q.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BESL8Ob4.js";import"./ToggleButton-Cnr9P6yJ.js";import"./multiselect-all-Bskqp-LX.js";import"./SuggestionItem-Cs3GRJFE.js";import"./index-C6tjcKY2.js";import"./Option-BxB-PkjK.js";import"./index-DGKNIxXV.js";import"./SegmentedButton-Bzt45PRO.js";import"./index-CdhWGsJy.js";import"./Select-DE4i9rKp.js";import"./InvisibleMessage-Cyxze3uu.js";import"./index-DGPTSllW.js";import"./index-DXlSvPUQ.js";import"./index-CXnZMaCF.js";import"./index-JFvXmi3y.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bo9w-30o.js";import"./group-2-BSryHq49.js";import"./sort-descending-s0zyZhYG.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BGeA_s_w.js";import"./utils-D0vF-SRs.js";import"./index-CGyGuqHJ.js";import"./index-ChV5JXtw.js";import"./index-B5SvgXn6.js";import"./navigation-down-arrow-C4Sf-qtS.js";import"./navigation-right-arrow-DQC4L2-T.js";import"./navigation-right-arrow-BuD6ryaO.js";import"./useCurrentTheme-iJZHQfRw.js";import"./index-BHQcIWf-.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-1-FsbUZP.js";import"./paper-plane-BSxU-RyY.js";import"./index-BR1QDb9u.js";import"./less-BBBCDqSd.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
`,e.jsx(n.h1,{id:"analyticaltable-plugin-usef2celledit",children:"AnalyticalTable Plugin: useF2CellEdit"}),`
`,e.jsx(a,{moduleNames:["AnalyticalTableHooks"],packageName:"@ui5/webcomponents-react"}),`
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
`,e.jsx(r,{of:s,sourceState:"none"}),`
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
`,e.jsx(c,{})]})}function _e(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{_e as default};
