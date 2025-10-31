import{j as e}from"./iframe-CZzIPN_f.js";import{useMDXComponents as o}from"./index-BN7772Ln.js";import{I as l,F as r}from"./CommandsAndQueries-C_V-vyfI.js";import{M as a,C as c}from"./blocks-CpAefQ0F.js";import"./Tag-B8_XKizL.js";import"./index-CYLMYqU3.js";import"./copy-CFuW58eh.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-WHlqTwq6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-RbSpX7Av.js";import"./index-RQjAfURV.js";import"./index-CiiSHxVf.js";import"./Link-Fkmlwa07.js";import"./index-CCj5LB1a.js";import"./index-DMvyX2go.js";import"./index-c-1N-cez.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CmB6T7HK.js";import"./addCustomCSSWithScoping-DaZxNPdr.js";import"./index-TDczsIb0.js";import"./information-6G8KrWG0.js";import"./sys-enter-2-Blj9-cAn.js";import"./alert-BtpU_SH9.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-vUdfR6U_.js";import"./delete-BMEp91Mc.js";import"./settings-C8GSnPCs.js";import"./NoData-Bf4Yeihh.js";import"./IllustratedMessage-DrWwRU0b.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-BXzF_T72.js";import"./index-Bbxw8KqN.js";import"./index-zbybGof4.js";import"./slim-arrow-down-C428O546.js";import"./Input-BsrOTKjj.js";import"./ResponsivePopoverCommon.css-2Qlub-_h.js";import"./ValueStateMessage.css-hjeNdUqW.js";import"./Suggestions.css-DT4shfhc.js";import"./ListBoxItemGroupTemplate-CSR5ghpQ.js";import"./ComboBoxItemGroup-Cz3um4BI.js";import"./ListItemBaseTemplate-P74cAnZc.js";import"./Token-C3z9AeKo.js";import"./ScrollEnablement-C4qF1cK6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DAcFQW4k.js";import"./ToggleButton-CJ4dsJ-L.js";import"./SuggestionItem-Dno1ukWF.js";import"./index-CfuHgIJB.js";import"./Option-DZueQCXy.js";import"./index-HlkmFS4c.js";import"./SegmentedButton-87GWkDY0.js";import"./index-CnpeIdgj.js";import"./Select-bjAZ7WAd.js";import"./InvisibleMessage-DLMXXFNU.js";import"./slim-arrow-down-Bbr4LCWT.js";import"./index-DfVluAdc.js";import"./index-56rq3Xsn.js";import"./index-Htv8Knj7.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C4d-P2A4.js";import"./group-2-63bcV-_q.js";import"./sort-descending--Bt-86OL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-4WOx3kzp.js";import"./utils-B4X6J-Z9.js";import"./index-BigJjRDp.js";import"./index-C1J3MpNo.js";import"./index-D0gJWrcG.js";import"./navigation-down-arrow-DkBsnEWF.js";import"./navigation-right-arrow-DsJ6uoOM.js";import"./navigation-right-arrow-D15IFhwy.js";import"./useCurrentTheme-Dn8ivhT9.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CWbe83HO.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DjCnev_a.js";import"./paper-plane-BRbCLIHy.js";import"./index-3ZvOWv6T.js";import"./less-NC1u16Z9.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
