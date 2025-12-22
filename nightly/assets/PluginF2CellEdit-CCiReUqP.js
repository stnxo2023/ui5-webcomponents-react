import{j as e}from"./iframe-BsSawXP0.js";import{useMDXComponents as o}from"./index-DRH2teYu.js";import{I as l,F as r}from"./CommandsAndQueries-iaa-8XF0.js";import{M as a,C as c}from"./blocks-CXfuXrzt.js";import"./Tag-CNlUSOaG.js";import"./index-Dmc2-Gsy.js";import"./copy-DbiVl2cO.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DLYXARwu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DXS7E1yl.js";import"./index-BhcqlC9n.js";import"./index-Crhu2fjF.js";import"./Link-DnipqSX8.js";import"./index-ZJs7Cg1o.js";import"./index-ButdZwwN.js";import"./index-CaYKw0vF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Czipwrtn.js";import"./addCustomCSSWithScoping-BEgtXhqx.js";import"./index-BP2Csnbb.js";import"./information-BFVQ2hiO.js";import"./sys-enter-2-BXLoixfD.js";import"./alert-KY-hq2Su.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CEZH4ER0.js";import"./delete-ButlRKIL.js";import"./settings-DgaBkmev.js";import"./NoData-DyY0YPHN.js";import"./IllustratedMessage-DkFb21Jf.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-COTCkDuw.js";import"./index-Clu4yb0B.js";import"./index-CM8zKut5.js";import"./slim-arrow-down-BWzEg3vj.js";import"./Input-CHK-azg7.js";import"./ResponsivePopoverCommon.css-BuCRiGSq.js";import"./ValueStateMessage.css-CxbYYYMV.js";import"./Suggestions.css-DdsM6PD2.js";import"./ListBoxItemGroupTemplate-B-3mDJyE.js";import"./ComboBoxItemGroup-Dw_d3sOW.js";import"./ListItemBaseTemplate-CDcS09wQ.js";import"./Token-HmaRVBR5.js";import"./ScrollEnablement-D01WJw12.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DOvPo6gu.js";import"./ToggleButton-CxUiYm3U.js";import"./SuggestionItem-CbONpgrM.js";import"./index-BPcqLkVl.js";import"./Option-4QxAwSib.js";import"./index-DjGN7Yic.js";import"./SegmentedButton-gHDmBFsf.js";import"./index-BDNR9QnW.js";import"./Select-oYRWGBUT.js";import"./InvisibleMessage-B4KGUE1s.js";import"./slim-arrow-down-CJL4Ie8a.js";import"./index-BfglwwIM.js";import"./index-DtFzJEN2.js";import"./index-BsGDlDgM.js";import"./index-Weu8oCaJ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BanJ6C6c.js";import"./group-2-B-E_bDzf.js";import"./sort-descending-Cvr30z_m.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BSbJCBkK.js";import"./utils-D1-fGTJi.js";import"./index-DPM6PqHk.js";import"./index-BZY_Xaz9.js";import"./index-DG65F-rj.js";import"./navigation-down-arrow-CQzMrHK9.js";import"./navigation-right-arrow-Ezz6Fe0V.js";import"./navigation-right-arrow-PF4vsXVe.js";import"./useCurrentTheme-DCDo5qP3.js";import"./index-Cl3MWrIl.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D81DTT8f.js";import"./paper-plane-nbV5jTsh.js";import"./index-Cbnxib-d.js";import"./less-D0n2-PF4.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
