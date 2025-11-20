import{j as e}from"./iframe-HT1spLTi.js";import{useMDXComponents as o}from"./index-DBCrLany.js";import{I as l,F as r}from"./CommandsAndQueries-BbzR7uR6.js";import{M as a,C as c}from"./blocks-BHdc3k3Z.js";import"./Tag-D0fQ6cD9.js";import"./index-QNmDooaX.js";import"./copy-CRfxWZGx.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-iUJ8V_z6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BZj-Nofr.js";import"./index-gqzRfHPw.js";import"./index-CWHtqZOi.js";import"./Link-dxeMesAc.js";import"./index-ILnTo0yK.js";import"./index-CNJfOrlA.js";import"./index-CV40RAYh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-tr8O9Dg_.js";import"./addCustomCSSWithScoping-DOmP-F21.js";import"./index-BXPXbeEl.js";import"./information-BYNrnqUc.js";import"./sys-enter-2-D7etVCyM.js";import"./alert-D38Y2b3l.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DwM3SLbd.js";import"./delete-B4h0y0b6.js";import"./settings-OrML4UsD.js";import"./NoData-BOiGAXx7.js";import"./IllustratedMessage-CIWXNurR.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-DJEc1V4G.js";import"./index-CDNfdMib.js";import"./index-BooXjxoU.js";import"./slim-arrow-down-D7gKmzcO.js";import"./Input-CG3jepqS.js";import"./ResponsivePopoverCommon.css-DumVabDv.js";import"./ValueStateMessage.css-Dec25e9Z.js";import"./Suggestions.css-B7Xe6SyY.js";import"./ListBoxItemGroupTemplate-DLkL2x3G.js";import"./ComboBoxItemGroup-BKuEkjmd.js";import"./ListItemBaseTemplate-BJduEMQT.js";import"./Token-CJWVjFqm.js";import"./ScrollEnablement-COl_OArp.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B0rWPz1n.js";import"./ToggleButton-bT-nmWTF.js";import"./SuggestionItem-DlRh-CU9.js";import"./index-CAapkdBY.js";import"./Option-BJPjR69C.js";import"./index-DW6SW4K6.js";import"./SegmentedButton-BvcAggKa.js";import"./index-Bthc5YEN.js";import"./Select-yvOIU7AH.js";import"./InvisibleMessage-K2bP2Bc6.js";import"./slim-arrow-down-hfwx64af.js";import"./index-D8DCAi2g.js";import"./index-Bjt-sPUz.js";import"./index-DfU0YBTN.js";import"./IconDesign-DXd8PPVF.js";import"./filter-r_rnPDRk.js";import"./group-2-DtVNA77I.js";import"./sort-descending-DgqXD-Zl.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CpK1GvE-.js";import"./utils-BnqKx2k1.js";import"./index-D0O_r2Gf.js";import"./index-Cb097oS5.js";import"./index-BXOm-GNk.js";import"./navigation-down-arrow-DIWWzNLp.js";import"./navigation-right-arrow-FOKc4XUb.js";import"./navigation-right-arrow-BpHafmpc.js";import"./useCurrentTheme-CmCSQj3_.js";import"./IndicationColor-DVw-fSM_.js";import"./index-0CLxpaxv.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-lcSwUg68.js";import"./paper-plane-B1Mwkky7.js";import"./index-JqGFdXCE.js";import"./less-Di54MHdD.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
