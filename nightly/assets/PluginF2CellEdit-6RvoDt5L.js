import{j as e}from"./iframe-D-ZP0dY4.js";import{u as o,M as l,C as r}from"./blocks-DdKopPSC.js";import{I as a}from"./CommandsAndQueries-BDnj74c9.js";import"./Tag-CNlwwDmZ.js";import"./index-C04kZKw9.js";import"./copy-HW_Kxlr2.js";import{F as c}from"./Footer-BLTkp7nE.js";import"./PageNotFound-DiPPX7Ze.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CBJpaNlu.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-06g1SNw0.js";import"./index-CF2Hkn6J.js";import"./index-BAothMF0.js";import"./index-eZWdMAeg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DxeCNWRQ.js";import"./addCustomCSSWithScoping-DSa3TmU8.js";import"./index-BAH7VHrp.js";import"./index-U3Dsw_H6.js";import"./index-Dx3fp6V7.js";import"./information-BKIP_Ra_.js";import"./sys-enter-2-vX0Cm-qe.js";import"./alert-Bu79oBCI.js";import"./index-Tnz3nQrD.js";import"./Illustrations-DQsCRA8v.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CYYGY4rz.js";import"./delete-DE6k9FGx.js";import"./settings-DXtL0O5a.js";import"./NoData-osmgknU-.js";import"./NoFilterResults-UTGDt4U0.js";import"./index-8Ug6H22Q.js";import"./IllustratedMessage-oHRK-VY8.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-Dg-UkN-_.js";import"./Input-BOgGLefA.js";import"./ResponsivePopoverCommon.css-Dq17JFm7.js";import"./ValueStateMessage.css-CBH2VacG.js";import"./Suggestions.css-BN8N-6EC.js";import"./ListBoxItemGroupTemplate-C8lKTN_F.js";import"./ComboBoxItemGroup-q2JQ_mwf.js";import"./ListItemBaseTemplate-BFmgJ1Et.js";import"./Token-1FPkMzEf.js";import"./ScrollEnablement-DYOTGKWX.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ByPNXDkr.js";import"./ToggleButton-D3qWXGLv.js";import"./multiselect-all-BPnmvnbF.js";import"./SuggestionItem-FyzOwRj6.js";import"./index-DsejTE-e.js";import"./Option-CY78tL2o.js";import"./index-vIzRardY.js";import"./SegmentedButton-ClYWnXbK.js";import"./index-DR3J50VQ.js";import"./Select-BtxIe5EO.js";import"./InvisibleMessage-D_du7Nj7.js";import"./index-CT1QofI3.js";import"./index-Q4CSHOMB.js";import"./index-DKz3p5bK.js";import"./index-Boazbh6I.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D4gZdwex.js";import"./group-2-J8HA7VvZ.js";import"./sort-descending-BkEITgyL.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B4X1hHJn.js";import"./utils-CIzQ8GjY.js";import"./index-C63PUtVf.js";import"./index-qGydiAeZ.js";import"./index-D2n2OSAj.js";import"./navigation-down-arrow-CrAOUUYj.js";import"./navigation-right-arrow-D0CmuphO.js";import"./navigation-right-arrow-B4vNvT0x.js";import"./useCurrentTheme-CSv-SoqH.js";import"./index-D-CbqEME.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BuCIUNGJ.js";import"./paper-plane-C24W3EaW.js";import"./index-BRgqeqc7.js";import"./less-BGbU6Atk.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
`,e.jsx(n.h1,{id:"analyticaltable-plugin-usef2celledit",children:"AnalyticalTable Plugin: useF2CellEdit"}),`
`,e.jsx(a,{moduleNames:["AnalyticalTableHooks"],packageName:"@ui5/webcomponents-react"}),`
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
`,e.jsx(r,{of:s,sourceState:"none"}),`
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
`,e.jsx(c,{})]})}function _e(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{_e as default};
