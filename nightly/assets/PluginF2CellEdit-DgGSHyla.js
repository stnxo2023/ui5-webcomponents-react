import{j as e}from"./iframe-BAeEsjGg.js";import{useMDXComponents as o}from"./index-Bq0E1dsP.js";import{I as l,F as r}from"./CommandsAndQueries-BmSS4dsr.js";import{M as a,C as c}from"./blocks-BgvPFJNP.js";import"./Tag-C0AbLWiC.js";import"./index-CofNVADY.js";import"./copy-AboRjUVj.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CFI9VGkd.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BbgOEhgO.js";import"./index-CdyvC-L0.js";import"./index-D8OEyr8Q.js";import"./Link-C-dbgRnK.js";import"./index-B1MvTI4o.js";import"./index-Bh0rKKOG.js";import"./index-DTbJ3L--.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-j4KshgYu.js";import"./addCustomCSSWithScoping-dmB8rtW3.js";import"./index-BcBOqS22.js";import"./information-DWcYA3Ge.js";import"./sys-enter-2-CQUiiR68.js";import"./alert-DfrSfG2k.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C01vq_tG.js";import"./delete-B-vJcZEa.js";import"./settings-C9s2yLAD.js";import"./NoData-C_OT3nkl.js";import"./IllustratedMessage-Bw6CCqa1.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-CeOc3m_6.js";import"./index-BtfUZD9l.js";import"./index-bKb7cC61.js";import"./slim-arrow-down-plIUNiIv.js";import"./Input-BqTefG9q.js";import"./ResponsivePopoverCommon.css-CaExEbcN.js";import"./ValueStateMessage.css-j0uXhKgp.js";import"./Suggestions.css-LZu9AJzQ.js";import"./ListBoxItemGroupTemplate-CA08nrMV.js";import"./ComboBoxItemGroup-DSvJ8fHP.js";import"./ListItemBaseTemplate-PmrEhlyw.js";import"./Token-Dae4rL70.js";import"./ScrollEnablement-B_VGa692.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DkifgMKf.js";import"./ToggleButton-7zmtTUNl.js";import"./SuggestionItem-DyFoeHZd.js";import"./index-CIveRvMm.js";import"./Option-BddoQSs-.js";import"./index-C7Cx90Bv.js";import"./SegmentedButton-DFR9vAuR.js";import"./index-BeVxZxme.js";import"./Select-D8r9sg-T.js";import"./InvisibleMessage-BamEjZig.js";import"./slim-arrow-down-DPB1_EKt.js";import"./index-BK8lvVbF.js";import"./index-COe7AG8n.js";import"./index-BEoChkv9.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B3GX0NY1.js";import"./group-2-Ck2TlhgN.js";import"./sort-descending-Bcg2xsEH.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DnyBfK-i.js";import"./utils-C1cOCLNW.js";import"./index-Co1haORi.js";import"./index-Bn4aUwEb.js";import"./index-CJ_qaT_q.js";import"./navigation-down-arrow-Ch-dz918.js";import"./navigation-right-arrow-nGujzQ0V.js";import"./navigation-right-arrow-DJO4C4Vi.js";import"./useCurrentTheme-CgyKYq3h.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BS5kb7Yk.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CkDYu-F2.js";import"./paper-plane-DNrev12r.js";import"./index-qCY9xvvQ.js";import"./less-CUB-bYbC.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
