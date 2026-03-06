import{j as e}from"./iframe-E6MBpCAt.js";import{useMDXComponents as o}from"./index-BRlgPkCG.js";import{I as r}from"./CommandsAndQueries-8ny61uxe.js";import{M as l,C as a}from"./blocks-WvceCUw-.js";import"./Tag-QOlCM1ZS.js";import"./index-BJtwwTA3.js";import"./copy-fO140460.js";import{F as c}from"./Footer-BLsFxTJ-.js";import"./PageNotFound-yO0YjSZG.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-3WGY_Sv8.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BKpa2-tj.js";import"./index-CzOa4uz9.js";import"./index-D8EadMTD.js";import"./index-C4VaG2ve.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-AugRixR5.js";import"./addCustomCSSWithScoping-B5scap8C.js";import"./index-D9THgfPW.js";import"./index-Bbo3k75A.js";import"./index-Cae4RJ4g.js";import"./information-CRaf149E.js";import"./sys-enter-2-61rHxTWm.js";import"./alert-CCfxXDIv.js";import"./index-B2yJC31G.js";import"./Illustrations-AQfBdOwC.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DDiz7W4Y.js";import"./delete-DyWtQ8v9.js";import"./settings-Cbn3T6Mx.js";import"./NoData-CtZtXwou.js";import"./NoFilterResults-B6R10kLg.js";import"./index-DsV7MKC8.js";import"./IllustratedMessage-Cs-cJ461.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-xfv3WGPy.js";import"./Input-CqRxWs6T.js";import"./ResponsivePopoverCommon.css-DTaErEQ_.js";import"./ValueStateMessage.css-BqIVd8me.js";import"./Suggestions.css-CcvXoNrX.js";import"./ListBoxItemGroupTemplate-ZWEg9Kwh.js";import"./ComboBoxItemGroup-BRsUx9Vu.js";import"./ListItemBaseTemplate-B16pPr0h.js";import"./Token-CtjOVKkz.js";import"./ScrollEnablement-Be3TO5d_.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CLkVuZpQ.js";import"./ToggleButton-pP-fjxvO.js";import"./multiselect-all-MRD8MY9n.js";import"./SuggestionItem-D_jhouUB.js";import"./index-eoNwP9LZ.js";import"./Option-YcQmhF0Q.js";import"./index-DtG_JeRQ.js";import"./SegmentedButton-BJA9KoKC.js";import"./index-PyVys7-g.js";import"./Select-Dfg1e6B2.js";import"./InvisibleMessage-DjQ_P1pD.js";import"./index-u_TZ6o1u.js";import"./index-BcHhd9JA.js";import"./index-Hz-7wqYf.js";import"./index-DEWKs-pp.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CE3S0Fdh.js";import"./group-2-Z21NISb5.js";import"./sort-descending-DGLIXonJ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CcrVqvMv.js";import"./utils-B83oV3Es.js";import"./index-gdkWggA6.js";import"./index-DFduNpb6.js";import"./index-CimvstOb.js";import"./navigation-down-arrow-BgwaJox2.js";import"./navigation-right-arrow-CNlAllMr.js";import"./navigation-right-arrow-6LbFyY1t.js";import"./useCurrentTheme-DnYQl_RE.js";import"./index-Cx4xZGwM.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DIRCSoA5.js";import"./paper-plane-B1UzQNaq.js";import"./index-CFs-Fzgi.js";import"./less-BXmJ-FBk.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
