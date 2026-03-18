import{j as e}from"./iframe-BWTquNFU.js";import{useMDXComponents as o}from"./index-CkXQL6rW.js";import{I as r}from"./CommandsAndQueries-Cu22SJgH.js";import{M as l,C as a}from"./blocks-24keuhPe.js";import"./Tag-DhoajqAo.js";import"./index-B59i8xiW.js";import"./copy-iNwkfzwy.js";import{F as c}from"./Footer-BPNOTf-P.js";import"./PageNotFound-CJcyxQek.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CceKJBUk.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BecYEhoc.js";import"./index-BTohTOow.js";import"./index-scscec-x.js";import"./index-CKCv8CV3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Byoi_UeP.js";import"./addCustomCSSWithScoping-DP3CaadD.js";import"./index-ChJmkZbc.js";import"./index-NVW8xIV5.js";import"./index-kSfV8vRJ.js";import"./information-DMtPZuOJ.js";import"./sys-enter-2-C7vs2MPC.js";import"./alert-CcklZ67u.js";import"./index-DVrCMdXJ.js";import"./Illustrations-CJfJJGnG.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B6ivdHEj.js";import"./delete-BNE5XMIg.js";import"./settings-CGivgX1w.js";import"./NoData-CwgA4KNO.js";import"./NoFilterResults-CjGZNsJH.js";import"./index-7QDuP57_.js";import"./IllustratedMessage-KAkdjXyB.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BTVzNzNo.js";import"./Input-EE71Gmfs.js";import"./ResponsivePopoverCommon.css-BbZHRZZG.js";import"./ValueStateMessage.css-CUwbWuU7.js";import"./Suggestions.css-FQe1Xc9l.js";import"./ListBoxItemGroupTemplate-DAbpQNBX.js";import"./ComboBoxItemGroup-uxvAKKGS.js";import"./ListItemBaseTemplate-BRrEqjCC.js";import"./Token-DxQtXUKH.js";import"./ScrollEnablement-BoYZgYHz.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DbGrkhZV.js";import"./ToggleButton-DBro7jvb.js";import"./multiselect-all-UT7N0_Ik.js";import"./SuggestionItem-CUIZagcj.js";import"./index-cRHDVvDp.js";import"./Option-IvW7tMmY.js";import"./index-C0JhBXt8.js";import"./SegmentedButton-BRJfaiG-.js";import"./index-BEM4UPY5.js";import"./Select-CL4tjDW6.js";import"./InvisibleMessage-D7OVBpmG.js";import"./index-Byo4t2sh.js";import"./index-C8s3OvV9.js";import"./index-C99f75Vc.js";import"./index-B1xXM3b0.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DlTD91fV.js";import"./group-2-C6DMt6zv.js";import"./sort-descending-D1j_C10r.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CcsrfPcf.js";import"./utils-HKL5q2BK.js";import"./index-Bw8aKIth.js";import"./index-BOJiPgTr.js";import"./index-CiXNavjP.js";import"./navigation-down-arrow-BnFi5ZgR.js";import"./navigation-right-arrow-KPC1gtG0.js";import"./navigation-right-arrow-C9M9ERbI.js";import"./useCurrentTheme-DeEojqvR.js";import"./index-C_SzIttf.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D1j5P2oj.js";import"./paper-plane-Dnn16QvC.js";import"./index-C8RmX3Qo.js";import"./less-rIvjl3NN.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
`,e.jsx(n.h1,{id:"analyticaltable-plugin-usef2celledit",children:"AnalyticalTable Plugin: useF2CellEdit"}),`
`,e.jsx(r,{moduleNames:["AnalyticalTableHooks"],packageName:"@ui5/webcomponents-react"}),`
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
`,e.jsx(a,{of:s,sourceState:"none"}),`
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
`,e.jsx(c,{})]})}function Xe(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{Xe as default};
