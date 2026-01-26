import{j as e}from"./iframe-vvFzJQsm.js";import{useMDXComponents as o}from"./index-mWjr9AFM.js";import{I as l,F as r}from"./CommandsAndQueries-8pSfE60h.js";import{M as a,C as c}from"./blocks-COsbTFiZ.js";import"./Tag-CSxd9Vy9.js";import"./index-CdSwAr1T.js";import"./copy-qs9aVbQg.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-B3ECgz-E.js";import"./preload-helper-PPVm8Dsz.js";import"./index-FWmQFiva.js";import"./index-DSMhm57i.js";import"./index-keBzjxCB.js";import"./Link-hAW6WURd.js";import"./index-CYjg-3sd.js";import"./index-bfJ02BDw.js";import"./index-BBX1dqjw.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BmD8Hqdt.js";import"./addCustomCSSWithScoping-Px-H63QY.js";import"./index-Ck5nT1M9.js";import"./information-CWYm1ZbR.js";import"./sys-enter-2-kpgYGCQC.js";import"./alert-Ba0jfTcX.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C9kK_LVq.js";import"./delete-D4XAzPaO.js";import"./settings-C8va5o-b.js";import"./NoData-5jtjQ5y7.js";import"./IllustratedMessage-B8VwOS63.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BPC0yP-u.js";import"./index-DRbu4jj1.js";import"./index-CLL1C2RL.js";import"./slim-arrow-down-D1045Dej.js";import"./Input-Bdz4QBIo.js";import"./ResponsivePopoverCommon.css-Baj0Epwl.js";import"./ValueStateMessage.css-4BAUMJYg.js";import"./Suggestions.css-3p3I60pl.js";import"./ListBoxItemGroupTemplate-BpiHCZsA.js";import"./ComboBoxItemGroup-BfSjrPkV.js";import"./ListItemBaseTemplate-B5P3HOKd.js";import"./Token-nR3AU3yg.js";import"./ScrollEnablement-DGKqDpbT.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bq3jzA--.js";import"./ToggleButton-D2c9Ioes.js";import"./SuggestionItem-D6PBycsg.js";import"./index-p75UYelA.js";import"./Option-m73man2m.js";import"./index-CEWT0FVs.js";import"./SegmentedButton-BHh8HeGl.js";import"./index-C5N6WMqm.js";import"./Select-Cvi-Tl5M.js";import"./InvisibleMessage-DfdHEKSG.js";import"./slim-arrow-down-BxUM_kC3.js";import"./index-Dbxl2QgS.js";import"./index-DNtC8pK0.js";import"./index-DkgHrAaT.js";import"./index-HICqIhxY.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dvyr9bkH.js";import"./group-2-CTXNR9Fa.js";import"./sort-descending-D9vZzYoL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DNIS43S0.js";import"./utils-DnHyYccE.js";import"./index-naNPIt8g.js";import"./index-lJc2O7eM.js";import"./index-CchiWT1q.js";import"./navigation-down-arrow-B3V1489R.js";import"./navigation-right-arrow-Dach_1y0.js";import"./navigation-right-arrow-BeI9ctVu.js";import"./useCurrentTheme-DNXu84CQ.js";import"./index-lCZJ1S5W.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BvMNZh4_.js";import"./paper-plane-wgrrkunQ.js";import"./index-DGYtHBaB.js";import"./less-D8pAxZdo.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
