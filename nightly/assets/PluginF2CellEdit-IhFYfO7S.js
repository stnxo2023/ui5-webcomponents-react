import{j as e}from"./iframe-u8FS7fYy.js";import{useMDXComponents as o}from"./index-C5mdpSHf.js";import{I as l,F as r}from"./CommandsAndQueries-q_IHoPaq.js";import{M as a,C as c}from"./blocks-CA6IPYk4.js";import"./Tag-DslDE0Bb.js";import"./index-feIb_zWP.js";import"./copy-DnscT9w9.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-G0EhQtQ2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dm5-M5Tp.js";import"./index-BLjc-MlZ.js";import"./index-Dt8N5TZZ.js";import"./Link-B1qI_6K5.js";import"./index-B2lRXwRR.js";import"./index-Ck97t6iE.js";import"./index-Cr0S2U_P.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-VZfInv7D.js";import"./addCustomCSSWithScoping-Bi-KBOqo.js";import"./index-39vhHnbo.js";import"./information-eayia0M9.js";import"./sys-enter-2-Bq8G42J8.js";import"./alert-C2jJRi0I.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-IUrgbwed.js";import"./delete-Cy6nStvu.js";import"./settings-CsmDkRWR.js";import"./NoData-Dl4cDDvc.js";import"./IllustratedMessage-DJn7OKbx.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-WNq2o82Q.js";import"./index-B8Yw7-ed.js";import"./index-DoELuHg5.js";import"./slim-arrow-down-BzdglbBq.js";import"./Input-BzkAXBhe.js";import"./ResponsivePopoverCommon.css-B6vVrffQ.js";import"./ValueStateMessage.css-Dzp1zAdp.js";import"./Suggestions.css-CAMRCZc2.js";import"./ListBoxItemGroupTemplate-Do83mcvC.js";import"./ComboBoxItemGroup-DHIXSohN.js";import"./ListItemBaseTemplate-Bwno4fVU.js";import"./Token-3SQMJSyT.js";import"./ScrollEnablement-DD98dGgr.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BMXLX1H8.js";import"./ToggleButton-C6hKc49t.js";import"./SuggestionItem-DkOZoD1a.js";import"./index-BU3s_1Ip.js";import"./Option-BhGVz_yi.js";import"./index-DdIT0IEq.js";import"./SegmentedButton-FB1pLwEh.js";import"./index-BUE39DSG.js";import"./Select-DGVfvIxr.js";import"./InvisibleMessage-DkTNwmO6.js";import"./slim-arrow-down-BbWvK7SD.js";import"./index-CnuUXHea.js";import"./index-C_nlngWN.js";import"./index-D_yNDnhr.js";import"./index-DXUHUv71.js";import"./IconDesign-DXd8PPVF.js";import"./filter-yxN8PX9Y.js";import"./group-2-DoGrMQPN.js";import"./sort-descending-C5L9Lo2Z.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DprFiL_z.js";import"./utils-BPFvLxt3.js";import"./index-DFCmj0mv.js";import"./index-DyfLxNJ7.js";import"./index-C4EDa0au.js";import"./navigation-down-arrow-BuZsOLrp.js";import"./navigation-right-arrow-CGDJY1aB.js";import"./navigation-right-arrow-GAvN6s_t.js";import"./useCurrentTheme-GbCKdsaA.js";import"./index-C5a3zBKu.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BmVGl_xM.js";import"./paper-plane-C4HjhJCN.js";import"./index-BeDOg-Ts.js";import"./less-m02jLT-2.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
