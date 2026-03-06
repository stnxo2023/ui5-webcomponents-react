import{j as e}from"./iframe-1PJgHZTG.js";import{useMDXComponents as o}from"./index-DQ8p-OUL.js";import{I as r}from"./CommandsAndQueries-CQXQgoMe.js";import{M as l,C as a}from"./blocks-BWdY__MG.js";import"./Tag-B40KCJnD.js";import"./index-C8yXoAsR.js";import"./copy-DV2HGm9x.js";import{F as c}from"./Footer-Dn-umaI8.js";import"./PageNotFound-BDu5VFGA.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Uck7FsnG.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-7AxyQCs2.js";import"./index-BQUqcZEd.js";import"./index-i1xIbWKA.js";import"./index-D-m_lTJG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DnF5TvKk.js";import"./addCustomCSSWithScoping-NZMltsez.js";import"./index-BhuvwaVu.js";import"./index-BpyshfBP.js";import"./index-ppU6pF9w.js";import"./information-DJc7dR8E.js";import"./sys-enter-2-C9tJiXDL.js";import"./alert-DYBuSdd9.js";import"./index-BIAg1r_N.js";import"./Illustrations-BZEV-hfk.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-izwhatPm.js";import"./delete-C5D2s8Ak.js";import"./settings-Bs8Htp6v.js";import"./NoData-DQ9X6gYh.js";import"./NoFilterResults-C4_WnkVU.js";import"./index-C2z4jgPp.js";import"./IllustratedMessage--5kFVM8I.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-DZqBJym4.js";import"./Input-CXFJmsc3.js";import"./ResponsivePopoverCommon.css-DL_QXptj.js";import"./ValueStateMessage.css-B7_HUMyf.js";import"./Suggestions.css-CKJ9ed6J.js";import"./ListBoxItemGroupTemplate-D5VYXEPs.js";import"./ComboBoxItemGroup-DBAC-JxZ.js";import"./ListItemBaseTemplate-5OahYJGz.js";import"./Token-DqC2yQ9K.js";import"./ScrollEnablement-CaJ2EN4H.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DwJ4wR2U.js";import"./ToggleButton-DgQxqUU_.js";import"./multiselect-all-DCb2TMLS.js";import"./SuggestionItem-GuXqHjCS.js";import"./index-DgtiDtM8.js";import"./Option-BOs3k1aM.js";import"./index-i9m_q-VY.js";import"./SegmentedButton-CkdgIHk7.js";import"./index-DGyBVUqn.js";import"./Select-DawqrssT.js";import"./InvisibleMessage-CMHHgpOp.js";import"./index-BUuVWqmv.js";import"./index-B22926Ud.js";import"./index-DQdq4IFP.js";import"./index-DcZPtEFB.js";import"./IconDesign-DXd8PPVF.js";import"./filter-QsCfk0fT.js";import"./group-2-CIcR_Yc_.js";import"./sort-descending-9Z_hUleg.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CLLV259a.js";import"./utils-5yXcyzO7.js";import"./index-B_CQz5B0.js";import"./index-BAc9VyuZ.js";import"./index-lR-STrLr.js";import"./navigation-down-arrow-CHCqyWX1.js";import"./navigation-right-arrow-DUxRui6p.js";import"./navigation-right-arrow-BVMvMFjo.js";import"./useCurrentTheme-Bytj-6td.js";import"./index-C9eyp_iT.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-ACr-zRT8.js";import"./paper-plane-BuXAAdlj.js";import"./index-7ZhckGC4.js";import"./less-DXmDlvC3.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
