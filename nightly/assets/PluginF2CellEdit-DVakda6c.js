import{j as e}from"./iframe-J46VriOb.js";import{useMDXComponents as o}from"./index-CBla0wLi.js";import{I as r}from"./CommandsAndQueries-BzSXHbZJ.js";import{M as l,C as a}from"./blocks-beoBu_qL.js";import"./Tag-DrBKyONn.js";import"./index-_u-v5yqi.js";import"./copy-_0TxAB6h.js";import{F as c}from"./Footer-CEGsJe_E.js";import"./PageNotFound-D29obeve.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-XTlMfWCW.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-B4FJ2xg8.js";import"./index-Dw3YBt24.js";import"./index-D6itq-2d.js";import"./index-aps2uNQB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DxsI6DA6.js";import"./addCustomCSSWithScoping-Dl6_6-AL.js";import"./index-BrGkrW3e.js";import"./index-Dt6WNWTR.js";import"./index-CT7sD2iL.js";import"./information-CATkPoRV.js";import"./sys-enter-2-Cc8Mj3l6.js";import"./alert-BWP7y2xA.js";import"./index-BkIHYavW.js";import"./Illustrations-D_iUtabn.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-btyj-n1J.js";import"./delete-w_D0ZxLs.js";import"./settings-CHNKlAkf.js";import"./NoData-B7hCCw2Z.js";import"./NoFilterResults-TM2aQCOr.js";import"./index-CvMK6PYJ.js";import"./IllustratedMessage-wrAyyr2h.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BFOs-Db_.js";import"./Input-Ba21Wr_4.js";import"./ResponsivePopoverCommon.css-jKJxzQ6F.js";import"./ValueStateMessage.css-DSOKYmKE.js";import"./Suggestions.css-Dd_ULqQN.js";import"./ListBoxItemGroupTemplate-CJFWume4.js";import"./ComboBoxItemGroup-DHNlD9r0.js";import"./ListItemBaseTemplate-Y3fZL33H.js";import"./Token-By8nCId5.js";import"./ScrollEnablement-DNtDiy2E.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DkLkb57T.js";import"./ToggleButton-BxPz-GTU.js";import"./multiselect-all-DC8IMVm_.js";import"./SuggestionItem-0qJhTGlF.js";import"./index-EIhpcBKD.js";import"./Option-85_JDqIM.js";import"./index-DndhKC0q.js";import"./SegmentedButton-Bu_1Yz2B.js";import"./index-CdHvy4_O.js";import"./Select-lRdI9G8v.js";import"./InvisibleMessage-BkeQHp1j.js";import"./index-DVv2dwtw.js";import"./index-C0C2EsKY.js";import"./index-l12WwH3D.js";import"./index-Pf84_VDN.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BL1LVhNe.js";import"./group-2-CtFUB3dY.js";import"./sort-descending-DzIXikcM.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-nxr8rbf1.js";import"./utils-q85ajM_8.js";import"./index-D3xzwzot.js";import"./index-Czrl39Ja.js";import"./index-DgMAqzON.js";import"./navigation-down-arrow-DM7-1YlX.js";import"./navigation-right-arrow-C2J9fEdo.js";import"./navigation-right-arrow-D_foC3d9.js";import"./useCurrentTheme-jWg-wmyT.js";import"./index-Bb5UG2kc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CWARZAlF.js";import"./paper-plane-BymcWAKh.js";import"./index-BTeoJAdU.js";import"./less-61CakwDD.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
