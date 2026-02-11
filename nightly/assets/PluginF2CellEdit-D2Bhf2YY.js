import{j as e}from"./iframe-BvHqSIyK.js";import{useMDXComponents as o}from"./index-C9vrwz77.js";import{I as l,F as r}from"./CommandsAndQueries-B3hUlog3.js";import{M as a,C as c}from"./blocks-BxoU3Yu6.js";import"./Tag-99RoGaFy.js";import"./index-BB14dXBi.js";import"./copy-BP-1S5h9.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BzEtAFg2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DAufjIqI.js";import"./index-Cb6d5Ui8.js";import"./index-Dvhux2R5.js";import"./Link-CgDmPG1r.js";import"./index-BX2w3DS0.js";import"./index-lpb4Baiz.js";import"./index--L__lImq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C3VWoxNN.js";import"./addCustomCSSWithScoping-Bvbl39sy.js";import"./index-B7BXsln5.js";import"./information-zngl4LUv.js";import"./sys-enter-2-D9Z1FJcM.js";import"./alert-F1tFIdLT.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CnXdKyTy.js";import"./delete-CuG3RM5m.js";import"./settings-D_BTzOE6.js";import"./NoData-lpA7htfb.js";import"./IllustratedMessage-Cf-o6GMJ.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DVGSOjnh.js";import"./index-Bow0_lnK.js";import"./index-DrmQroFf.js";import"./slim-arrow-down-C2UZE7h0.js";import"./Input-Br-sY9ky.js";import"./ResponsivePopoverCommon.css-sekIyiK-.js";import"./ValueStateMessage.css-BRJx2fcS.js";import"./Suggestions.css-CV4MjGEF.js";import"./ListBoxItemGroupTemplate-B-OeNXtJ.js";import"./ComboBoxItemGroup-B2NxOsQm.js";import"./ListItemBaseTemplate-BWetPhdo.js";import"./Token-6nUBCvO_.js";import"./ScrollEnablement-HwiTsDO2.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-WAmqQIXu.js";import"./ToggleButton-bhikrMK7.js";import"./SuggestionItem-_aBHJoN3.js";import"./index-DnkLMjxR.js";import"./Option-fB_CKO8N.js";import"./index-OFuAM7HC.js";import"./SegmentedButton-df2qYRN0.js";import"./index-BjZ8DHVA.js";import"./Select-BaeqruA9.js";import"./InvisibleMessage-BSe3iB9m.js";import"./slim-arrow-down-BORyrk-u.js";import"./index-DqS5V8WW.js";import"./index-KF0fvs5m.js";import"./index-C71q_atH.js";import"./index-DRekqyHy.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BXvWevTj.js";import"./group-2-DOLgcJ-T.js";import"./sort-descending-CxAjsNpq.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D39_iadB.js";import"./utils-Bm3EbaDm.js";import"./index-DVh5GQMZ.js";import"./index-C_6rr-HH.js";import"./index-BW296Krt.js";import"./navigation-down-arrow-DT5dtpnO.js";import"./navigation-right-arrow-PuFMbFjH.js";import"./navigation-right-arrow-I9zR3Bwc.js";import"./useCurrentTheme-BLBS4rCs.js";import"./index-B5WxCuR5.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DlCv73Ap.js";import"./paper-plane-CSXFE3V8.js";import"./index-Cxmpze17.js";import"./less-BtNTjp5U.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
