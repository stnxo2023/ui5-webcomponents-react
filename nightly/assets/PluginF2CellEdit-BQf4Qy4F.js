import{j as e}from"./iframe-aKs2ZWAj.js";import{useMDXComponents as o}from"./index-c4zJYkcR.js";import{I as l,F as r}from"./CommandsAndQueries-IBiFSZr-.js";import{M as a,C as c}from"./blocks-fvCr5kp9.js";import"./Tag-DSoVP5MU.js";import"./index-CMRRcr14.js";import"./copy-D9idsxI8.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BaQwIBgF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DNGZMnOS.js";import"./index-9dBzyYap.js";import"./index-Bj8ei7PO.js";import"./Link--ytwK8Iw.js";import"./index-ChXUbPo1.js";import"./index-B_N5JODd.js";import"./index-MuWvZ7Ot.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C1lURHaG.js";import"./addCustomCSSWithScoping--I2WhUfl.js";import"./index-Dqo0aPAB.js";import"./information-CcxaAVSU.js";import"./sys-enter-2-DseuEdAf.js";import"./alert-DbU8Ao5u.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CxMI9gU-.js";import"./delete-BtFgIOxP.js";import"./settings-ZFHQhdsu.js";import"./NoData-DZS9Ur76.js";import"./IllustratedMessage-qSdTMbb_.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-B6-4gdXH.js";import"./index-CmhJUl_b.js";import"./index-DepEoVTO.js";import"./slim-arrow-down-Dxd3QVtv.js";import"./Input-C4wOVg4W.js";import"./ResponsivePopoverCommon.css-Dn8ntY67.js";import"./ValueStateMessage.css-BbNN49z9.js";import"./Suggestions.css-CJQWNtEa.js";import"./ListBoxItemGroupTemplate-BlE3pbv5.js";import"./ComboBoxItemGroup-tqMfhz0v.js";import"./ListItemBaseTemplate-CtNEmA22.js";import"./Token-B4ffJEtp.js";import"./ScrollEnablement-loPYCCzg.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-xWRY6uoX.js";import"./ToggleButton-CGCRf2qx.js";import"./SuggestionItem-C0HWDl10.js";import"./index-CUVmuYtL.js";import"./Option-78QXYTZI.js";import"./index-DwEarF4u.js";import"./SegmentedButton-Dcqh0APM.js";import"./index-DA1062Kq.js";import"./Select-D7DdaJ-R.js";import"./InvisibleMessage-DezkuNLo.js";import"./slim-arrow-down-BlGxKe2j.js";import"./index-CBIaN5fI.js";import"./index-DnUR33pO.js";import"./index-Czu_4IUB.js";import"./IconDesign-DXd8PPVF.js";import"./filter-rWMtqLgy.js";import"./group-2-CHhi29YF.js";import"./sort-descending-DHA1WIN6.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CLYrF4yE.js";import"./utils-B1uKdKfv.js";import"./index-3SWcYaJq.js";import"./index-B60Izm_h.js";import"./index-BFnuOW-D.js";import"./navigation-down-arrow-Cb1XkKbC.js";import"./navigation-right-arrow-CqaFjLeM.js";import"./navigation-right-arrow-Byp8Xbsp.js";import"./useCurrentTheme-RkZvjCi7.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CjjC7c0Q.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C1moqd-D.js";import"./paper-plane-CJQ7U-vp.js";import"./index-DQpXYUsU.js";import"./less-tAUMA1iF.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
