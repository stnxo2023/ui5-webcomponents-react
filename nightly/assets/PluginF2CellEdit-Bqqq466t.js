import{j as e}from"./iframe-BzFFzKD_.js";import{useMDXComponents as o}from"./index-CZpqZls8.js";import{I as l,F as r}from"./CommandsAndQueries-98tICPmn.js";import{M as a,C as c}from"./blocks-Dfn8aDA2.js";import"./Tag-Du7Hh6Mn.js";import"./index-BnnU1inb.js";import"./copy-CYosl6Ho.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BlawaMrj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-s8GS1odQ.js";import"./index-CjTZ8O9p.js";import"./index-BTogfKzr.js";import"./Link-CMUJ7C_U.js";import"./index-DDykH0pl.js";import"./index-DXrTedKP.js";import"./index-DWEvXFon.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DUUeXWCw.js";import"./addCustomCSSWithScoping-26WgEUoU.js";import"./index-BkRjFulW.js";import"./information-ItcJqxXi.js";import"./sys-enter-2-Y1mMTef-.js";import"./alert-BnuKtxZV.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CJxmxwdy.js";import"./delete-DvlzQjzU.js";import"./settings-BtDwJkQy.js";import"./NoData-RN4fv0I6.js";import"./IllustratedMessage-22prqt92.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-CuqFQkP0.js";import"./index-BZwhzjSN.js";import"./index-DeWW5-Td.js";import"./slim-arrow-down-CQstKHsd.js";import"./Input-DWRBGriJ.js";import"./ResponsivePopoverCommon.css-Dh0AbpYk.js";import"./ValueStateMessage.css-D95mkauN.js";import"./Suggestions.css-B-ge1jIP.js";import"./ListBoxItemGroupTemplate-Duu4RMpx.js";import"./ComboBoxItemGroup-C3kd4aNe.js";import"./ListItemBaseTemplate-25qboxfo.js";import"./Token-D-De-6_k.js";import"./ScrollEnablement-CN1jgR1Z.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CKrmQxvq.js";import"./ToggleButton-CD3XCDqC.js";import"./SuggestionItem-DfQZW9Bt.js";import"./index-DlK_9Aw2.js";import"./Option-DGgXyVE9.js";import"./index-kQWOveMj.js";import"./SegmentedButton-BD5wjYvX.js";import"./index-DPt3z0Xm.js";import"./Select-Biz1LhyR.js";import"./InvisibleMessage-DAn4ghj3.js";import"./slim-arrow-down-Dy8U4h34.js";import"./index-BpbvvaJA.js";import"./index-BNuehqek.js";import"./index-T2JpUHkX.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CXv10JXZ.js";import"./group-2-BaX0RAg9.js";import"./sort-descending-C1aqy8QD.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-HIY5U8Xd.js";import"./utils-BOfme5mX.js";import"./index-DEFnuKWD.js";import"./index-BqaTO31J.js";import"./index-lM2ViReC.js";import"./navigation-down-arrow-DyEHJO4J.js";import"./navigation-right-arrow-DOrImmdb.js";import"./navigation-right-arrow-XetH_fh1.js";import"./useCurrentTheme-KwChezx1.js";import"./IndicationColor-DVw-fSM_.js";import"./index-5mNQu9kN.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CtHY0-jf.js";import"./paper-plane-BYoF07I-.js";import"./index-BVE1VzVn.js";import"./less-BAX0c4ch.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
