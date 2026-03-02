import{j as e}from"./iframe-Cu2r5DBt.js";import{useMDXComponents as o}from"./index-DsEnC-S2.js";import{I as l,F as r}from"./CommandsAndQueries-DfbTmmri.js";import{M as a,C as c}from"./blocks-DrEEcrJV.js";import"./Tag-BfeG-i6G.js";import"./index-DcYlZ6P4.js";import"./copy-D0JAZV9l.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BiMefP11.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BCrFY3fH.js";import"./index-BlqIDgbk.js";import"./index-Os4Zeg9n.js";import"./Link-DyRt210A.js";import"./index-DiFMEeWS.js";import"./index-CMEHSo2E.js";import"./index-COwVlcqf.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CO5icxsl.js";import"./addCustomCSSWithScoping-81SqKEKs.js";import"./index-DacMIu3h.js";import"./information-Bxm8KRwL.js";import"./sys-enter-2-f8dz7x8Q.js";import"./alert-848W8p-Q.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D76FbZtk.js";import"./delete-B-IsQiZR.js";import"./settings-CD2c-woD.js";import"./NoData-DTI18JF6.js";import"./IllustratedMessage-DX1YYOhS.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CmTEtjIx.js";import"./index-DoOj6a-I.js";import"./index-BfnkmY72.js";import"./slim-arrow-down-QBkKAVhi.js";import"./Input-D3OZDz2j.js";import"./ResponsivePopoverCommon.css-D6DQUrFO.js";import"./ValueStateMessage.css-DVAUVrF2.js";import"./Suggestions.css-D_7WvW8J.js";import"./ListBoxItemGroupTemplate-CAqv16Vd.js";import"./ComboBoxItemGroup-Bkl0glqF.js";import"./ListItemBaseTemplate-B36zIliD.js";import"./Token-czU1vG1J.js";import"./ScrollEnablement-bEoR-zYl.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BjU2dKNl.js";import"./ToggleButton-K4-PXkOC.js";import"./SuggestionItem-DpYfRwX3.js";import"./index-Bc3rhNIn.js";import"./Option-ylN_TdkI.js";import"./index-9JKg4cbf.js";import"./SegmentedButton-CJfA1Mtn.js";import"./index-O_QxZdYN.js";import"./Select-DHUaUoMk.js";import"./InvisibleMessage-BUdS_g5o.js";import"./slim-arrow-down-BHYyEM1X.js";import"./index-l2pP1Xti.js";import"./index-t_6EW66R.js";import"./index-CoFRC52-.js";import"./index-DWSSjAYi.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bsoqp3td.js";import"./group-2-wbi_dpVE.js";import"./sort-descending-DNwrriud.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BajIgag2.js";import"./utils-Gj7QsPnx.js";import"./index-B-UkReOd.js";import"./index-_95c2mxo.js";import"./index-CeTtedVZ.js";import"./navigation-down-arrow-ofZN1zUz.js";import"./navigation-right-arrow-Dj5fUfjl.js";import"./navigation-right-arrow-BCtmnaF7.js";import"./useCurrentTheme-DNnBzfxG.js";import"./index-qksCzBH3.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-l2Qw6S3S.js";import"./paper-plane-ArZYudnw.js";import"./index-C37vfn-j.js";import"./less-DAgDXDNb.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
