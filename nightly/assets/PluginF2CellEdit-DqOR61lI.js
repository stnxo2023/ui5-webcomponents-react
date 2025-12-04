import{j as e}from"./iframe-DE39xjY3.js";import{useMDXComponents as o}from"./index-B1qSHwoi.js";import{I as l,F as r}from"./CommandsAndQueries-wC1q0WhV.js";import{M as a,C as c}from"./blocks-Cj7tOVqz.js";import"./Tag-BcxJDVC2.js";import"./index-C8AzPoWi.js";import"./copy-SEjk-khs.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Dm3vFAGq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dsw7NAug.js";import"./index-BNYAB6MW.js";import"./index-BytuhZWp.js";import"./Link-hO4SGyLs.js";import"./index-HOUf-EPf.js";import"./index-Di0pge-x.js";import"./index-Crm_KYfs.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B-k5eDoZ.js";import"./addCustomCSSWithScoping-DCdxMV4u.js";import"./index-BUS86rTR.js";import"./information-D52A35LG.js";import"./sys-enter-2-7R5MTao8.js";import"./alert-jxZm3lXE.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CdKgUR62.js";import"./delete-T1M_hPVY.js";import"./settings-XWWzFZWZ.js";import"./NoData-BNLEFYaI.js";import"./IllustratedMessage-0CDzNeqq.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-4G5p8MTf.js";import"./index-CqckHJYn.js";import"./index-BmDqxMXN.js";import"./slim-arrow-down-vZvcV55c.js";import"./Input-CDMm82xo.js";import"./ResponsivePopoverCommon.css-DaP0rv_w.js";import"./ValueStateMessage.css-Bvo1cNpH.js";import"./Suggestions.css-1EDkOxF1.js";import"./ListBoxItemGroupTemplate-CUQfeUJ-.js";import"./ComboBoxItemGroup-BIc4wSHj.js";import"./ListItemBaseTemplate-0o_W1vV3.js";import"./Token-quGRFBgA.js";import"./ScrollEnablement-hjYz1q63.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CEgmb2VH.js";import"./ToggleButton-B6AmBWfy.js";import"./SuggestionItem-CSHXkULE.js";import"./index-DuKoEI6Y.js";import"./Option-BmVldsJm.js";import"./index-GTGNu_hG.js";import"./SegmentedButton-aldcdMHp.js";import"./index-BBixzXs5.js";import"./Select-BgNYkp7a.js";import"./InvisibleMessage-Bo13I8mP.js";import"./slim-arrow-down-P7fnq_jn.js";import"./index-iZDIdJI7.js";import"./index-RO4633KM.js";import"./index-BcBVfEn1.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B-mQ8wvX.js";import"./group-2-siU1eXmx.js";import"./sort-descending-3jJw3NoM.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DBKL-rtx.js";import"./utils-C2TjvMrQ.js";import"./index-BT2WMOZw.js";import"./index-uMqGW6va.js";import"./index-DtdnKfDC.js";import"./navigation-down-arrow-BajRWoAT.js";import"./navigation-right-arrow-DZoWocnv.js";import"./navigation-right-arrow-X0_-tw_X.js";import"./useCurrentTheme-CpMEMe1l.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D2kS9nAL.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-rImD7_or.js";import"./paper-plane-DPstJvtB.js";import"./index-CPZM_tz3.js";import"./less-JTA9sx1u.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
