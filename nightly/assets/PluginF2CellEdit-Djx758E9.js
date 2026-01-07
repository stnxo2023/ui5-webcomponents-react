import{j as e}from"./iframe-DAr0L7Ho.js";import{useMDXComponents as o}from"./index-BXrVHVZ0.js";import{I as l,F as r}from"./CommandsAndQueries-BeoYsWXv.js";import{M as a,C as c}from"./blocks-n6i-MeAx.js";import"./Tag-D2SjXRRM.js";import"./index-BGz6B31k.js";import"./copy-C6zsdfpy.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-C9SbKhrV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-M443-WMN.js";import"./index-BtwPOFH6.js";import"./index-C9NDTaZE.js";import"./Link-QVFDyIvP.js";import"./index-Dnii_wG6.js";import"./index-DrSpdpj3.js";import"./index-BaCg4RzE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CqKvYjZH.js";import"./addCustomCSSWithScoping-C9FZ5V1h.js";import"./index-Cs5MEWFI.js";import"./information-C8Iia5pL.js";import"./sys-enter-2-DFDqDf9l.js";import"./alert-CWzLh45M.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-vwvMnJ1M.js";import"./delete-BrugbK3m.js";import"./settings-CLh5qR-P.js";import"./NoData-CtmD2qQW.js";import"./IllustratedMessage-CsWaV4UX.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-Df7CNS72.js";import"./index-D3xQZHsc.js";import"./index-DSQJdXON.js";import"./slim-arrow-down-nCdA9ato.js";import"./Input-FYQ1lVZC.js";import"./ResponsivePopoverCommon.css-B_B3XVCO.js";import"./ValueStateMessage.css-BKph1edC.js";import"./Suggestions.css-B5wtwLdE.js";import"./ListBoxItemGroupTemplate-CToQv3CG.js";import"./ComboBoxItemGroup-K7uaKsRv.js";import"./ListItemBaseTemplate-z4dCCnJ_.js";import"./Token-BwpnemjP.js";import"./ScrollEnablement-BCyvLKHN.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B0DQtofr.js";import"./ToggleButton-D5V4_j9v.js";import"./SuggestionItem-BjLJwrjn.js";import"./index-KG7JmM-m.js";import"./Option-kFmvtdj7.js";import"./index-DcDEIoyS.js";import"./SegmentedButton-CtPD7--4.js";import"./index-qAMqYJh8.js";import"./Select-BBSIqCO7.js";import"./InvisibleMessage-B7Fzvrpv.js";import"./slim-arrow-down-CmpYS2rT.js";import"./index-DGrjxxz-.js";import"./index-BVhiHYP4.js";import"./index-B4_IFOpM.js";import"./index-BUYWOW0O.js";import"./IconDesign-DXd8PPVF.js";import"./filter-M721LxgO.js";import"./group-2-CK-kp2Q-.js";import"./sort-descending-DI7NHhBm.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CaWLfx7-.js";import"./utils-CBU--jiJ.js";import"./index-C8mXVD-G.js";import"./index-DApcbHtK.js";import"./index-FvIchgpB.js";import"./navigation-down-arrow-bmtoD8GV.js";import"./navigation-right-arrow-DwuLZ8mF.js";import"./navigation-right-arrow-FbjwtCoS.js";import"./useCurrentTheme-BvDyIKbt.js";import"./index-DJzsGgTL.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BiIhYZmc.js";import"./paper-plane-BqYVZpon.js";import"./index-CDbXcF1o.js";import"./less-CxH7033X.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
