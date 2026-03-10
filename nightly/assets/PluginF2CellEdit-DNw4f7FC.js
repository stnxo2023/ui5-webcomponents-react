import{j as e}from"./iframe-D9bwNIEw.js";import{useMDXComponents as o}from"./index-C7Zm3EXU.js";import{I as r}from"./CommandsAndQueries-C_WJZTxK.js";import{M as l,C as a}from"./blocks-CdTlBqmb.js";import"./Tag-nAJAFGwR.js";import"./index-v7UWUzZA.js";import"./copy-C4qxUcFd.js";import{F as c}from"./Footer-rCYhEoIf.js";import"./PageNotFound-C24XQEWZ.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CLnRqfAO.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-DLbf1NX7.js";import"./index-DiWu_OvK.js";import"./index-BWceQhWo.js";import"./index-DX-an7LC.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BYx-bkvu.js";import"./addCustomCSSWithScoping-CTtTC3T9.js";import"./index-DpP2zBoF.js";import"./index-B5Io8E3V.js";import"./index-DYbVUH4U.js";import"./information-BBRTwn-C.js";import"./sys-enter-2-BgYzXgjA.js";import"./alert-Dvz5ATv0.js";import"./index-B24aDDF0.js";import"./Illustrations-CAUI_mYY.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Czt5as8-.js";import"./delete-BNMsGxXn.js";import"./settings-D-Mp7imo.js";import"./NoData-DTpV-vmY.js";import"./NoFilterResults-CAt1ldiT.js";import"./index-Bz7cIJno.js";import"./IllustratedMessage-BZ0vFLV2.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CGD-1joK.js";import"./Input-CYuZcn_p.js";import"./ResponsivePopoverCommon.css-CkiXBi7B.js";import"./ValueStateMessage.css-oZNuDkL6.js";import"./Suggestions.css-CMZyvU-Z.js";import"./ListBoxItemGroupTemplate-D6WAuS51.js";import"./ComboBoxItemGroup-SbXrXIXH.js";import"./ListItemBaseTemplate-CuVwXQqy.js";import"./Token-DONenf2t.js";import"./ScrollEnablement-C9fhfdHG.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CLmJtC2x.js";import"./ToggleButton-Hap8L6WH.js";import"./multiselect-all-DA9VqXJi.js";import"./SuggestionItem-BeJwmeJ_.js";import"./index-B7JFUA5M.js";import"./Option-BoCXKUm2.js";import"./index-78TbmELJ.js";import"./SegmentedButton-CfF5Zavs.js";import"./index-CnThYA-n.js";import"./Select-BgIvcjPK.js";import"./InvisibleMessage-BbRDjx9q.js";import"./index-Cmx6PnM9.js";import"./index-pF_dZyqg.js";import"./index-CqsSgeDP.js";import"./index-CVcQTqV4.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BQ8RHn1K.js";import"./group-2-B5dpY6uH.js";import"./sort-descending-DDi3yN4n.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-8EuiRxkG.js";import"./utils-uqv3geid.js";import"./index-CxdTHADh.js";import"./index-D8i2I1pU.js";import"./index-CjyQYo-y.js";import"./navigation-down-arrow-Ds7Luypq.js";import"./navigation-right-arrow-B6z7lltw.js";import"./navigation-right-arrow-BSWKpFds.js";import"./useCurrentTheme-BeLIUtpu.js";import"./index-BzcMPirF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Df4rTIOc.js";import"./paper-plane-DcuCs8QG.js";import"./index-D9PFjJIf.js";import"./less-DhdsysxP.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
