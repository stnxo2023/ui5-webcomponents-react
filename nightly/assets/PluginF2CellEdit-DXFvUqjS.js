import{j as e}from"./iframe-Qn10Vv46.js";import{useMDXComponents as o}from"./index-Dn_QNZXe.js";import{I as l,F as r}from"./CommandsAndQueries-BS5w0Fww.js";import{M as a,C as c}from"./blocks-CqvMe-zP.js";import"./Tag-D88IrP9Y.js";import"./index-CPne16Vl.js";import"./copy-CASyM-HB.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-H3_QwZfA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-1Dq2e1Fv.js";import"./index-D9ZF8-N2.js";import"./index-u07ulNkL.js";import"./Link-B9oRKMRP.js";import"./index-Btsu4EzQ.js";import"./index-D7W_CU3P.js";import"./index-Qf4zPxvx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DyNR1Lsa.js";import"./addCustomCSSWithScoping-BMEnUHPm.js";import"./index-BCXe2PbY.js";import"./information-BED9_Z-O.js";import"./sys-enter-2-DmPWvQNd.js";import"./alert-CtILWS1T.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DDGW3LlO.js";import"./delete-CwMLkwBl.js";import"./settings-D3w6QaCp.js";import"./NoData-DlAD3CDh.js";import"./IllustratedMessage-B5PXEdvM.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-D1-NKvrK.js";import"./index-DAtiHyZC.js";import"./index-BTxgNax-.js";import"./slim-arrow-down-DStIyIYv.js";import"./Input-JG6KYeb2.js";import"./ResponsivePopoverCommon.css-D30PmpG6.js";import"./ValueStateMessage.css-B1tOkt9X.js";import"./Suggestions.css-AZtlnByU.js";import"./ListBoxItemGroupTemplate-Ck_Tg_1E.js";import"./ComboBoxItemGroup-X4WYLtK7.js";import"./ListItemBaseTemplate-aIA1KjTO.js";import"./Token-B8pCzhwp.js";import"./ScrollEnablement-BI5-jdZK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bar0KGH4.js";import"./ToggleButton-CRT5W38j.js";import"./SuggestionItem-D11zz-CY.js";import"./index-CP1thd2f.js";import"./Option-C4JrqG_U.js";import"./index-C8dYCS08.js";import"./SegmentedButton-DrQ4e9ne.js";import"./index-BUBbEq2D.js";import"./Select-DLuDF3wk.js";import"./InvisibleMessage-BlyETXSd.js";import"./slim-arrow-down-BRQZce7U.js";import"./index-XwrFFEKH.js";import"./index-BXul6roJ.js";import"./index-BakmgRez.js";import"./index-BmRC0J2V.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DMRvgaWs.js";import"./group-2-C_NGD824.js";import"./sort-descending-BFLjgKM6.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DHB3H4fo.js";import"./utils-B-v7HQ2f.js";import"./index-B6IRXIFn.js";import"./index-BWjiDXwP.js";import"./index-7awi3J8u.js";import"./navigation-down-arrow-Coc2XK-B.js";import"./navigation-right-arrow-C5N9ABfy.js";import"./navigation-right-arrow-DMix7vwu.js";import"./useCurrentTheme-D9dDzE9L.js";import"./index-Bo0yjZ_x.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-0Grxk9f4.js";import"./paper-plane-Cf20vZx7.js";import"./index-BADkrGDt.js";import"./less-DtkLr4vn.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
