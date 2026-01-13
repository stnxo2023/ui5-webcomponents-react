import{j as e}from"./iframe-BtOtRMtR.js";import{useMDXComponents as o}from"./index-CgtvsECt.js";import{I as l,F as r}from"./CommandsAndQueries-CKs7dFOK.js";import{M as a,C as c}from"./blocks-D9wmcLvH.js";import"./Tag-C9nMOu5c.js";import"./index-Cb_okFKb.js";import"./copy-CGNUo2FO.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DC1S45-c.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DyCpVDUu.js";import"./index-BG_zbJpP.js";import"./index-CSfaSQyt.js";import"./Link-BYt0ZGVT.js";import"./index-BRaE6xYn.js";import"./index-Ch2focQy.js";import"./index-Ddk7eeGJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-4u4TRFh7.js";import"./addCustomCSSWithScoping-Ji9yZ6HK.js";import"./index-B8f2IgEG.js";import"./information-D5w9Hrcs.js";import"./sys-enter-2-Bq4TRZEz.js";import"./alert-CYL_IdM5.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B5N0rpWl.js";import"./delete-Dzj5xyP-.js";import"./settings-C1l-VMhl.js";import"./NoData-CTl2bbKy.js";import"./IllustratedMessage-CyKYIGdr.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BlF0uNyR.js";import"./index-fgWDWmbq.js";import"./index-CguI4hxx.js";import"./slim-arrow-down-DmlnfCIk.js";import"./Input-DW6Mcq6Q.js";import"./ResponsivePopoverCommon.css-B0MfPGYJ.js";import"./ValueStateMessage.css-Cntln-gq.js";import"./Suggestions.css-C1P2f68k.js";import"./ListBoxItemGroupTemplate-Bu8Sz1bH.js";import"./ComboBoxItemGroup-B9ta1tYL.js";import"./ListItemBaseTemplate-PfJZ8SeL.js";import"./Token-jR5FcYSU.js";import"./ScrollEnablement-CNs89SnW.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DSZwl3pY.js";import"./ToggleButton-BD7M-6Sc.js";import"./SuggestionItem-0mZFDaLy.js";import"./index-DXTzsKvp.js";import"./Option-BymN5BMD.js";import"./index-Ch4bYq3S.js";import"./SegmentedButton-KViA7rXu.js";import"./index-Cba0AExI.js";import"./Select-aAJtN928.js";import"./InvisibleMessage-CJx3E7ve.js";import"./slim-arrow-down-jTdyHR1Z.js";import"./index-CwtPYikJ.js";import"./index-CQANsFRb.js";import"./index-DO0bWOhc.js";import"./index-Db2BTFt5.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DamfrtCC.js";import"./group-2-DpZVik8-.js";import"./sort-descending-B-A3hXvE.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B1qY8nay.js";import"./utils-CqrUR1Jn.js";import"./index-jphnT_hb.js";import"./index-C84K25j6.js";import"./index-DgTNmU-2.js";import"./navigation-down-arrow-BChKVsM3.js";import"./navigation-right-arrow-Fi9U-iyQ.js";import"./navigation-right-arrow-Du-S1bwS.js";import"./useCurrentTheme-BRCDCnqM.js";import"./index-c-S2g_Xv.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D6S1xN6P.js";import"./paper-plane-CzloYF4y.js";import"./index-C5HC-scy.js";import"./less-9cA8yvZw.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
