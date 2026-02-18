import{j as e}from"./iframe-Dk0n26L0.js";import{useMDXComponents as o}from"./index-GonNK-F8.js";import{I as l,F as r}from"./CommandsAndQueries-C5xq4Qip.js";import{M as a,C as c}from"./blocks-Do665btL.js";import"./Tag-DHDcW-fI.js";import"./index-zII-B7tZ.js";import"./copy-DI2yzFNj.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CDVHvZJu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BOuRbWlk.js";import"./index-DZcV0iyk.js";import"./index-Dww5FXQ1.js";import"./Link-CiqsvlwF.js";import"./index-BYI0Uf8A.js";import"./index-A7L-MktQ.js";import"./index-DuchmHxs.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-WCv2CDBA.js";import"./addCustomCSSWithScoping-C7tuYiM4.js";import"./index-DVvxIcdz.js";import"./information-CyaCviRw.js";import"./sys-enter-2-BeHXFnMA.js";import"./alert-CjBv8gy0.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BGSne0t9.js";import"./delete-Wr4GKhKk.js";import"./settings-CTkQY05A.js";import"./NoData-DN-HgX0w.js";import"./IllustratedMessage-WiIf7tiQ.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CsDkGDUR.js";import"./index-BEOp2Qs8.js";import"./index-DkDwXcnb.js";import"./slim-arrow-down-oRzOUke0.js";import"./Input-BrteEEfL.js";import"./ResponsivePopoverCommon.css-B_3MTk0W.js";import"./ValueStateMessage.css-DW6dpdMx.js";import"./Suggestions.css-BKD2VSge.js";import"./ListBoxItemGroupTemplate-DphDFimI.js";import"./ComboBoxItemGroup-CfpmoNkX.js";import"./ListItemBaseTemplate-BW6zm8tA.js";import"./Token-fVkVNRGm.js";import"./ScrollEnablement-BDIo3BIe.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-8LD2v8AG.js";import"./ToggleButton-lLT-pIBz.js";import"./SuggestionItem-BgHqUSrH.js";import"./index-BakJLASc.js";import"./Option-Bs3lQB5f.js";import"./index-BfchdiDe.js";import"./SegmentedButton-kL0-alOP.js";import"./index-WaTuFDqY.js";import"./Select-CgcyfRGV.js";import"./InvisibleMessage-DxH_2GsR.js";import"./slim-arrow-down-Buf41Nuz.js";import"./index-DHKtmYan.js";import"./index-CO1j-MpK.js";import"./index-BbjMprDv.js";import"./index-BGwOxs0U.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CWCwhs_t.js";import"./group-2-DBqLD-HP.js";import"./sort-descending-NSp7tyQ0.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Blitw6nk.js";import"./utils-BVujrbxV.js";import"./index-D4w2TJZn.js";import"./index-g0v-MWQC.js";import"./index-Dvotll0l.js";import"./navigation-down-arrow-C3npHCkQ.js";import"./navigation-right-arrow-DIlKpP0p.js";import"./navigation-right-arrow-CfXHjg3k.js";import"./useCurrentTheme-K0AsAVmL.js";import"./index-BZVSQdFq.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cr1Ieyfb.js";import"./paper-plane-DShcb0AZ.js";import"./index-ufKMWArj.js";import"./less-znGJqNXZ.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
