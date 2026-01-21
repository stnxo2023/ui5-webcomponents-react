import{j as e}from"./iframe-BFR-dU1l.js";import{useMDXComponents as o}from"./index-BRr5RSu7.js";import{I as l,F as r}from"./CommandsAndQueries-kf2pSDF5.js";import{M as a,C as c}from"./blocks-DTAC1Gxc.js";import"./Tag-Uk5Wz18b.js";import"./index-Dv1E9yaY.js";import"./copy-Cc7XHaG7.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-6WvMeLTE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CVrFyQhm.js";import"./index-CoobbAbb.js";import"./index-CvzwYeg1.js";import"./Link-DIc6gIaF.js";import"./index-C3CLOvIH.js";import"./index-CFDOjZnD.js";import"./index-VAuUAMe6.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C1LKO1Rr.js";import"./addCustomCSSWithScoping-BBCqvj7y.js";import"./index-BAzgfXr-.js";import"./information-BanFECND.js";import"./sys-enter-2-RSAR57lC.js";import"./alert-4GMQX2Dz.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bre5WKvO.js";import"./delete-Y4MN8EPb.js";import"./settings-C5PdrSD7.js";import"./NoData-D141lpVQ.js";import"./IllustratedMessage-BfK1-CBz.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-C5PgBu43.js";import"./index-CMwxuJux.js";import"./index-COniDLqo.js";import"./slim-arrow-down-CvKg8OAM.js";import"./Input-D0YvA3g2.js";import"./ResponsivePopoverCommon.css-ibscBu1F.js";import"./ValueStateMessage.css-C9lMAnB3.js";import"./Suggestions.css-C4f0pZkx.js";import"./ListBoxItemGroupTemplate-Dh4PKV-0.js";import"./ComboBoxItemGroup-rKpFlsYW.js";import"./ListItemBaseTemplate-D8Z5MxI5.js";import"./Token-BGFsQDvi.js";import"./ScrollEnablement-CfAnlfcJ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-M14QpxFJ.js";import"./ToggleButton-DGco4olw.js";import"./SuggestionItem-hWg0drFq.js";import"./index-DDITdqkG.js";import"./Option-Dwt0iGD4.js";import"./index-18hKTgX7.js";import"./SegmentedButton-CU3a8U94.js";import"./index-jGlg1Tpp.js";import"./Select-CJOaE89q.js";import"./InvisibleMessage-DJZlazdl.js";import"./slim-arrow-down-DT6ArkyX.js";import"./index-Bk51xnFB.js";import"./index-Cz9JInQX.js";import"./index-BJJoBJpU.js";import"./index-BQpDXUqr.js";import"./IconDesign-DXd8PPVF.js";import"./filter-vbZWVN7G.js";import"./group-2-CpnU8dYn.js";import"./sort-descending-CHWK_uwN.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D7t2vM4-.js";import"./utils-zLg6B11g.js";import"./index-DuHOFkjk.js";import"./index-JszbODGU.js";import"./index-BlP_k8BJ.js";import"./navigation-down-arrow-CEE7gple.js";import"./navigation-right-arrow-rNNmicl3.js";import"./navigation-right-arrow-BjgC-iOk.js";import"./useCurrentTheme-DOwAIF-p.js";import"./index-B9yIejFl.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BjUg15jO.js";import"./paper-plane-pcXL71Bw.js";import"./index-C7IQ_RM9.js";import"./less-Ygdngcc5.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
