import{j as e}from"./iframe-CMRYeg3m.js";import{useMDXComponents as o}from"./index-d3aogLFm.js";import{I as l,F as r}from"./CommandsAndQueries-DpsRc0ye.js";import{M as a,C as c}from"./blocks-B--XNN4Z.js";import"./Tag-DLJpwqrU.js";import"./index-X7c2uI6J.js";import"./copy-O4x8gwVx.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-NcPcxP0m.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dt6RwhRx.js";import"./index-BVsKPF1I.js";import"./index-csz7EJl3.js";import"./Link-Bxvjqypp.js";import"./index-PIXQ40x8.js";import"./index-Ca5PVHn4.js";import"./index-DVEpH7N4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-f1AMIobt.js";import"./addCustomCSSWithScoping-D9ZK4KgK.js";import"./index-TGfnZuTz.js";import"./information-2R4wAWn8.js";import"./sys-enter-2-h25AZJAc.js";import"./alert-EuMgWuer.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CbVSGA1k.js";import"./delete-1RwfcjcT.js";import"./settings-C5H9S65V.js";import"./NoData-CW7TgSmL.js";import"./IllustratedMessage-CGTR8uP0.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-DAZPTCPU.js";import"./index-Dq8e-1UW.js";import"./index-GkNgVDAt.js";import"./slim-arrow-down-CmvdQO7m.js";import"./Input-2Nygg4-q.js";import"./ResponsivePopoverCommon.css-CqBO6fZ3.js";import"./ValueStateMessage.css-D51R__Qj.js";import"./Suggestions.css-C4L82WYT.js";import"./ListBoxItemGroupTemplate-C-1UKkDb.js";import"./ComboBoxItemGroup-C51CY9Wh.js";import"./ListItemBaseTemplate-qOSQ4Fnc.js";import"./Token-CoqMARg0.js";import"./ScrollEnablement-CHUJ-chc.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ntD8YpfZ.js";import"./ToggleButton-DQ-1wEim.js";import"./SuggestionItem-BnR17Fyw.js";import"./index-BkexHsEY.js";import"./Option-DybeogHQ.js";import"./index-BHc0UMTZ.js";import"./SegmentedButton-Dezgm7cC.js";import"./index-BB_dZdK5.js";import"./Select-CAZuopb2.js";import"./InvisibleMessage-DVgio3fu.js";import"./slim-arrow-down-B1aQoQzR.js";import"./index-e5pHMgA1.js";import"./index-D_E6BFUk.js";import"./index-C1Exyb_f.js";import"./index-8DOGvRkG.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cb9Y6gPy.js";import"./group-2-Cea3ryU3.js";import"./sort-descending-rBOFvsCA.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-kdPvsB1k.js";import"./utils-CgBfQCBk.js";import"./index-jc4_TuNU.js";import"./index-BPBucl4y.js";import"./index-BewwXtWC.js";import"./navigation-down-arrow-BIKGPDMD.js";import"./navigation-right-arrow-gSRQ7cEs.js";import"./navigation-right-arrow-DT95PVm7.js";import"./useCurrentTheme-DhCErNXe.js";import"./index-QpjC2w_s.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-G_RHHN41.js";import"./paper-plane-DEFfxY-Y.js";import"./index-DTxz0DV7.js";import"./less-B-qcBapJ.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
