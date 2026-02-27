import{j as e}from"./iframe-DwL_U_4M.js";import{useMDXComponents as o}from"./index-DF1KaKr-.js";import{I as l,F as r}from"./CommandsAndQueries-Dz5IdIhG.js";import{M as a,C as c}from"./blocks-BkbxlrC9.js";import"./Tag-DWzoI0ag.js";import"./index-DgsDGr1U.js";import"./copy-Ds9kRn1x.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CDXE8hi2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BOSg5TA3.js";import"./index-Dqsw9_lb.js";import"./index-Db6l5aQj.js";import"./Link-BdX-3dcl.js";import"./index-Vi2IbP0J.js";import"./index-DOHiCVZ-.js";import"./index-DKq2OUSi.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dkqe7TGi.js";import"./addCustomCSSWithScoping-CE7eblPA.js";import"./index-ak-yAlnV.js";import"./information-BVmVMqd7.js";import"./sys-enter-2-B94IC9Xo.js";import"./alert-q5IjkK7H.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BzDfrn-5.js";import"./delete-B6I0mZbY.js";import"./settings-D0VDSh3d.js";import"./NoData-C5CH-fWN.js";import"./IllustratedMessage-D15Dg6tX.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-Demdetfk.js";import"./index-avC49Qb6.js";import"./index-DDkyeSI8.js";import"./slim-arrow-down-ByCeMr4H.js";import"./Input-usKDjDSg.js";import"./ResponsivePopoverCommon.css-CYR3rAjO.js";import"./ValueStateMessage.css-B8AI8KQ2.js";import"./Suggestions.css-CUQOIKID.js";import"./ListBoxItemGroupTemplate-DY25tZlO.js";import"./ComboBoxItemGroup-C3uToiVo.js";import"./ListItemBaseTemplate-BG93_W6E.js";import"./Token-CPniK2MA.js";import"./ScrollEnablement-CXLtDDEy.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-XOt9jxnj.js";import"./ToggleButton-CqFkZEKu.js";import"./SuggestionItem-B6ABjz01.js";import"./index-CPQ3riJn.js";import"./Option-CcfnhX8_.js";import"./index-BSRLtlm8.js";import"./SegmentedButton-m10F3ec1.js";import"./index-CGjb2kw-.js";import"./Select-BAca3Q1U.js";import"./InvisibleMessage-CeA3DNW4.js";import"./slim-arrow-down-BrKYHwbw.js";import"./index-BuK1gME8.js";import"./index-DMl1Ef82.js";import"./index-Dfj6plRX.js";import"./index-DHJJGQ-p.js";import"./IconDesign-DXd8PPVF.js";import"./filter-7bwVwAS4.js";import"./group-2-DskrB8ej.js";import"./sort-descending-BXTEYcEJ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CxZSpw0g.js";import"./utils-SlffE8vX.js";import"./index-dMrvblLs.js";import"./index-Q2HLxENY.js";import"./index-B699imMP.js";import"./navigation-down-arrow-DQDDNWpd.js";import"./navigation-right-arrow-vbFYChxY.js";import"./navigation-right-arrow-BD_93O6z.js";import"./useCurrentTheme-Cixk1FnX.js";import"./index-CsMOgL6c.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-ABDzzkNE.js";import"./paper-plane-DcKv8aMK.js";import"./index-C3qjnFkq.js";import"./less-BreB1OVM.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
