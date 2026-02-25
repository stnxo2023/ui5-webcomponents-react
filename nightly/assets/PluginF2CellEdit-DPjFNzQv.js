import{j as e}from"./iframe-BHlEgbZD.js";import{useMDXComponents as o}from"./index-DuWPJPdo.js";import{I as l,F as r}from"./CommandsAndQueries-CRy7DgFq.js";import{M as a,C as c}from"./blocks-BZ1_Gb0n.js";import"./Tag-CUIBDfjO.js";import"./index-DMcN3ohr.js";import"./copy-Ds19teD5.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-ByzE4p5Q.js";import"./preload-helper-PPVm8Dsz.js";import"./index-57xnhTbk.js";import"./index-D8Q0xw5Q.js";import"./index-CPQEcn_1.js";import"./Link-DdeM_yx0.js";import"./index-DXZq7O0l.js";import"./index-COEmfUFW.js";import"./index-x01lEzby.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbwzLluT.js";import"./addCustomCSSWithScoping-BezKsk6D.js";import"./index-2QbIapUz.js";import"./information-Cbg1Tz52.js";import"./sys-enter-2-Z2Vy22vQ.js";import"./alert-BcFaqecl.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CC6hyO-N.js";import"./delete-4ZvrUKjO.js";import"./settings-DG_uwOtb.js";import"./NoData-DYxHoJfA.js";import"./IllustratedMessage-udF9mWrD.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CbnIbvhX.js";import"./index-DN6hq5_h.js";import"./index-BT3cRVz2.js";import"./slim-arrow-down-36KS2JIw.js";import"./Input-BOFtXl-H.js";import"./ResponsivePopoverCommon.css-DVGkEwPu.js";import"./ValueStateMessage.css-BcukUnSJ.js";import"./Suggestions.css-oxI77au-.js";import"./ListBoxItemGroupTemplate-CEjJ4Crf.js";import"./ComboBoxItemGroup-C_SgaNix.js";import"./ListItemBaseTemplate-D1qgX7Z0.js";import"./Token-BULKmOKE.js";import"./ScrollEnablement-Cu7uqZ0X.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CeF-gQpE.js";import"./ToggleButton-DYZAZrxx.js";import"./SuggestionItem-BZywVYEn.js";import"./index-BEzWpt9n.js";import"./Option-DaLzGShP.js";import"./index-BTRoGroB.js";import"./SegmentedButton-DcSgMcr8.js";import"./index-BP72XLPJ.js";import"./Select-zEDuWLFW.js";import"./InvisibleMessage-OeUWQ5Ye.js";import"./slim-arrow-down-DLrArs5r.js";import"./index-DCYT0nIY.js";import"./index-CvJhvJHe.js";import"./index-D4qBUSpf.js";import"./index-C57Z4SS3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CC3D5stC.js";import"./group-2-CAC2yRw6.js";import"./sort-descending-Ct46rwrC.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B3QDW9YY.js";import"./utils-Bkxa81Gm.js";import"./index-h4KD2Npg.js";import"./index-ChBdg0CU.js";import"./index-Dxaffyfy.js";import"./navigation-down-arrow-CUMLWhBn.js";import"./navigation-right-arrow-D2ty4le0.js";import"./navigation-right-arrow-DEzFZZdH.js";import"./useCurrentTheme-CTTdfk_h.js";import"./index-Db_zW0W2.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Dp2bM3ZO.js";import"./paper-plane-wrAGSNsE.js";import"./index-0vEfSv_1.js";import"./less-D9a_VPsv.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
