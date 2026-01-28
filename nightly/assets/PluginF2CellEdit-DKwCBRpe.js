import{j as e}from"./iframe-Bqqr6LRd.js";import{useMDXComponents as o}from"./index-Br4hcxKx.js";import{I as l,F as r}from"./CommandsAndQueries-18MjfAFY.js";import{M as a,C as c}from"./blocks-Cu3AJo0i.js";import"./Tag-CwbUvZ-m.js";import"./index-B04Rzf_f.js";import"./copy-Bhrou6qI.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-vtE8StoO.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Eu6KN1OU.js";import"./index-DkY4sX_i.js";import"./index-B4-rpm-y.js";import"./Link-1XxvN6x_.js";import"./index-uP3qKYkO.js";import"./index-CFiaIaQb.js";import"./index-BFr0IkwM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-_soG_jSZ.js";import"./addCustomCSSWithScoping-DM5M0hyQ.js";import"./index-JLAmYdlt.js";import"./information-BWf6xVI-.js";import"./sys-enter-2-NBiqC5e1.js";import"./alert-eITYjrPF.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B7kkSgms.js";import"./delete-FfRmnN9Y.js";import"./settings-DlvvQWHj.js";import"./NoData-Cnw4Kevx.js";import"./IllustratedMessage-lIXFssI-.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-CLTUfrTe.js";import"./index-BNj-eJpZ.js";import"./index-3uq2_G_9.js";import"./slim-arrow-down-BZm47vFp.js";import"./Input-vcWbAoGp.js";import"./ResponsivePopoverCommon.css-DVi9wNNs.js";import"./ValueStateMessage.css-DbIMxrdT.js";import"./Suggestions.css-Co8vDkCG.js";import"./ListBoxItemGroupTemplate-uy6aJTW5.js";import"./ComboBoxItemGroup-BTvCb2Kc.js";import"./ListItemBaseTemplate-blGXO2lB.js";import"./Token-Bae9FhVJ.js";import"./ScrollEnablement-Cxy5Bzo0.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Hnm9afMy.js";import"./ToggleButton-BgVCtHZJ.js";import"./SuggestionItem-D9DXt2U6.js";import"./index-ByYfrQl-.js";import"./Option-DOx9ZJ94.js";import"./index-DVPlV14N.js";import"./SegmentedButton-Bh--EjsV.js";import"./index-DtQZgkhi.js";import"./Select-BdSnKAc1.js";import"./InvisibleMessage-Bp5Ok78e.js";import"./slim-arrow-down-DZ6p3Bwi.js";import"./index-C4tZRj-d.js";import"./index-CwgCLf6W.js";import"./index-CJC3e2m0.js";import"./index-RQz2GPrc.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BwEOts-V.js";import"./group-2-CDRA2oju.js";import"./sort-descending-CUlou7JN.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-bVqMVufC.js";import"./utils-BMPv-A8F.js";import"./index-BgEIZIwU.js";import"./index-CKnDUyrg.js";import"./index-DCQPDRVf.js";import"./navigation-down-arrow-CxlZv9_c.js";import"./navigation-right-arrow-Wb7vj7-O.js";import"./navigation-right-arrow-83NG2uzj.js";import"./useCurrentTheme-dPM8OGfa.js";import"./index-DMlsPBCZ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-5BH4o7Dk.js";import"./paper-plane-Abb2eC1B.js";import"./index-BeQjUBuP.js";import"./less-DEcTl8Yh.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
