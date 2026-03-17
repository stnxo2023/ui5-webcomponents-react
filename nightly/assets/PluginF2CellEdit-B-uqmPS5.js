import{j as e}from"./iframe-30LZfzOw.js";import{useMDXComponents as o}from"./index-9hK3vCGp.js";import{I as r}from"./CommandsAndQueries-B3tX98p8.js";import{M as l,C as a}from"./blocks-C0vZ6D8t.js";import"./Tag-Dtxkyswp.js";import"./index-CjMm9yFV.js";import"./copy-BDfV85Pd.js";import{F as c}from"./Footer-BNR5gUPY.js";import"./PageNotFound-yG6M5MId.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-B3-rzdQd.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CPAvZ0M5.js";import"./index-BqAk99uF.js";import"./index-orHhnsuM.js";import"./index-DNQEiveD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dl3uWGQL.js";import"./addCustomCSSWithScoping-DtBGS5Q4.js";import"./index-CqMGZXJd.js";import"./index-DBMP_Ccw.js";import"./index-CZwEe_4d.js";import"./information-BQPccwsM.js";import"./sys-enter-2-CbSQlHDF.js";import"./alert-BwFRRuyW.js";import"./index-CFfbQ4H0.js";import"./Illustrations-BGO-1oHt.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D4Ny2Qqv.js";import"./delete-C23RyoNS.js";import"./settings-vCvKKELE.js";import"./NoData-BYjwPDGX.js";import"./NoFilterResults-CCvr_mGb.js";import"./index-HraqqLCL.js";import"./IllustratedMessage-B21zxjt4.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-Cnc3ng8i.js";import"./Input-C9d7fki7.js";import"./ResponsivePopoverCommon.css-COYnkjUj.js";import"./ValueStateMessage.css-BtsWCoC_.js";import"./Suggestions.css-BIuoYk1E.js";import"./ListBoxItemGroupTemplate-CkL-FEGQ.js";import"./ComboBoxItemGroup-gJ9bF5Mf.js";import"./ListItemBaseTemplate-CbFyC0Bd.js";import"./Token-6w1_tPy9.js";import"./ScrollEnablement-BtBhqt6G.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DUX806d8.js";import"./ToggleButton-DLpAZcDf.js";import"./multiselect-all-3L7ChLWO.js";import"./SuggestionItem-aIZEKOnW.js";import"./index-BZL0dq0V.js";import"./Option-CtcuoPzM.js";import"./index-DTQROv24.js";import"./SegmentedButton-B_fnwh2s.js";import"./index-B1i_wN68.js";import"./Select-l4rVM2RI.js";import"./InvisibleMessage-IbisIrn1.js";import"./index-qMyxaARO.js";import"./index-ByDJh9XY.js";import"./index-DkQqnEjC.js";import"./index-Dn9Dy3ZO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DUmOK15y.js";import"./group-2-Cm3-VEfC.js";import"./sort-descending-D91blpVD.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B3GhDGHr.js";import"./utils-IkNb-DUU.js";import"./index-5e0OL3tH.js";import"./index-Kunnu4JS.js";import"./index-CS-7xh0w.js";import"./navigation-down-arrow-C1y2H9vH.js";import"./navigation-right-arrow-BjkMCO6q.js";import"./navigation-right-arrow-xyDtPWf6.js";import"./useCurrentTheme-D3OuI6Tp.js";import"./index-Dxoj_xD_.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CVz-G4WN.js";import"./paper-plane-Dl39-tzB.js";import"./index-BWQnImub.js";import"./less-Cg3ABqJp.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
