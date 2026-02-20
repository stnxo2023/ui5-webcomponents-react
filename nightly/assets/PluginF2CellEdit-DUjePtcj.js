import{j as e}from"./iframe-UvPIdInY.js";import{useMDXComponents as o}from"./index-C_wnFVs3.js";import{I as l,F as r}from"./CommandsAndQueries-aWAd2RXn.js";import{M as a,C as c}from"./blocks-D0ZGQgrL.js";import"./Tag-IR_ETKFS.js";import"./index-D9ZFZ6F-.js";import"./copy-BE3LAxqE.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-NClPDdr6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-O5JzLw5N.js";import"./index-Ba89z5vW.js";import"./index-mim0XNOQ.js";import"./Link-BLS11L9W.js";import"./index-B0iNMIwQ.js";import"./index-CXKBVYRd.js";import"./index-Bvo9-fQy.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BNxf-Cq6.js";import"./addCustomCSSWithScoping-7EyTrlnL.js";import"./index-D_al-J9d.js";import"./information-BPTpUfW-.js";import"./sys-enter-2-CWNypIDi.js";import"./alert-CSWOQ1yD.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DNZebN0l.js";import"./delete-Bym_CuQ_.js";import"./settings-jDUCJDFQ.js";import"./NoData-CBn9s1P8.js";import"./IllustratedMessage-B1dE8UDr.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DZ3pxCsC.js";import"./index-DO7Ar4RD.js";import"./index-BkfsPSLU.js";import"./slim-arrow-down-CRxJDNVT.js";import"./Input-Pl2nYyWp.js";import"./ResponsivePopoverCommon.css-BoaZ2bBu.js";import"./ValueStateMessage.css-byYAWo4s.js";import"./Suggestions.css-PTQQr1HI.js";import"./ListBoxItemGroupTemplate-DxT2oqBg.js";import"./ComboBoxItemGroup-CLKsYy_r.js";import"./ListItemBaseTemplate-Dx_Z0YEo.js";import"./Token-COE2mfsf.js";import"./ScrollEnablement-CroMdMI1.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-n4LvxKbk.js";import"./ToggleButton-BR5G7Qz8.js";import"./SuggestionItem-DktTsUPu.js";import"./index-CGnLWb7c.js";import"./Option-CjyU-APj.js";import"./index-Bd9J232t.js";import"./SegmentedButton-BAUcRfoB.js";import"./index-lHbjqnZy.js";import"./Select-CuymjFC1.js";import"./InvisibleMessage-BEHZLLTD.js";import"./slim-arrow-down-CVwAqm1x.js";import"./index-CGJMk3cv.js";import"./index-C5TAYWLJ.js";import"./index-DJo0pI-N.js";import"./index-C819hH3W.js";import"./IconDesign-DXd8PPVF.js";import"./filter-LoYXXqh9.js";import"./group-2-BDjs1tne.js";import"./sort-descending-C01UE9Ps.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DXPBHWGL.js";import"./utils-CkuEKQeg.js";import"./index-DeIw8vVn.js";import"./index-CkiSiMgq.js";import"./index-QMPfoD9h.js";import"./navigation-down-arrow-1mpPyuVY.js";import"./navigation-right-arrow-DS2ZZyTy.js";import"./navigation-right-arrow-CMjLnqRz.js";import"./useCurrentTheme-1LGZD4iD.js";import"./index-xGgYhz7_.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-58ApOM2Q.js";import"./paper-plane-HxkV1_E_.js";import"./index-Cu85sTvP.js";import"./less-BL-B7Va5.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
