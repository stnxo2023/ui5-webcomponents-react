import{j as e}from"./iframe-8VKaAWwE.js";import{useMDXComponents as o}from"./index-BiQxBi02.js";import{I as l,F as r}from"./CommandsAndQueries-Br8gYKlc.js";import{M as a,C as c}from"./blocks-D4P1btFV.js";import"./Tag-CAEVBdQF.js";import"./index-BMIVJ8fC.js";import"./copy-GTYDTz4M.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BERQNFQP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DeQFsrbp.js";import"./index-CG1tJmDp.js";import"./index-DjKsiZpu.js";import"./Link-Br8LM296.js";import"./index-Wr_VU4vx.js";import"./index--0IHLSpo.js";import"./index-G7mYvFlh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DS15uRtL.js";import"./addCustomCSSWithScoping-gm53ZH9E.js";import"./index-Bd8LmHtw.js";import"./information-Dxy_OYjg.js";import"./sys-enter-2-B9S9TtfQ.js";import"./alert-CW57s-T2.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DSRTNUO-.js";import"./delete-DnWD3Mq-.js";import"./settings-VKt-L-yH.js";import"./NoData-DDfv6RCL.js";import"./IllustratedMessage-Dr8guHqM.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-CpUJ40_F.js";import"./index-BVZi_tVP.js";import"./index-_vy-bJhX.js";import"./slim-arrow-down-CulswK7d.js";import"./Input-B5Wpiidi.js";import"./ResponsivePopoverCommon.css-B4U_I0dH.js";import"./ValueStateMessage.css-cYz9FUF7.js";import"./Suggestions.css-Z6CWuri5.js";import"./ListBoxItemGroupTemplate-C1lRcpbG.js";import"./ComboBoxItemGroup-C-hUUmdm.js";import"./ListItemBaseTemplate-BmD2uZ0g.js";import"./Token-BQ7R6PHh.js";import"./ScrollEnablement-CjnCh3Bs.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CACymtkK.js";import"./ToggleButton-u0UnHeJY.js";import"./SuggestionItem-C7KEv8FG.js";import"./index-CMbxs2W4.js";import"./Option-DOmelVgu.js";import"./index-B9H6XpWs.js";import"./SegmentedButton-3N38bHb8.js";import"./index-B8y-Fmz6.js";import"./Select-DtzGLi_j.js";import"./InvisibleMessage-CPZrrpNT.js";import"./slim-arrow-down-sBLB8zju.js";import"./index-DVQVneSw.js";import"./index-v7aOm5Jv.js";import"./index-C-Q_6JkP.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DjgLpVIw.js";import"./group-2-lPSSe0zs.js";import"./sort-descending-CS7wmhm4.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C-aC7Trz.js";import"./utils-96nz7lxB.js";import"./index-CAXoANqy.js";import"./index-JF3sM6PG.js";import"./index-Dw_SJKgF.js";import"./navigation-down-arrow-POZr2Ly1.js";import"./navigation-right-arrow-BStxgVlV.js";import"./navigation-right-arrow-BQknt-RQ.js";import"./useCurrentTheme-Dvt6ch19.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BRpZcEjH.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-8d_BW4ml.js";import"./paper-plane-BwV277z1.js";import"./index-CUAVuKcw.js";import"./less-BLTcp359.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
