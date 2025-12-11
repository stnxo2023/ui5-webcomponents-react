import{j as e}from"./iframe-D74d3IUT.js";import{useMDXComponents as o}from"./index-BzFpXofy.js";import{I as l,F as r}from"./CommandsAndQueries-CXtjs1YA.js";import{M as a,C as c}from"./blocks-CXGWO-SS.js";import"./Tag-CGDi5rN6.js";import"./index-D9Jimze5.js";import"./copy-B52gZhj1.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CRUZhyOz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dp6BwZZH.js";import"./index-BAV2Dqb-.js";import"./index-nz5M1FvK.js";import"./Link-BnKuAsKS.js";import"./index-CGofV6Bd.js";import"./index-CBnDxC_O.js";import"./index-CUp4_VMY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DI0ZtE-_.js";import"./addCustomCSSWithScoping-DX0DY0tV.js";import"./index-B6nGMvY0.js";import"./information-CzZVG8MP.js";import"./sys-enter-2-Bo9ZeWqv.js";import"./alert-BpouBdE8.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BP3F7SzG.js";import"./delete-YUY4KlW5.js";import"./settings-DpOnwkHb.js";import"./NoData-B2ZeHRsw.js";import"./IllustratedMessage-CD7-3bUQ.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-D8YrAv4w.js";import"./index-B4EupoFR.js";import"./index-GzctAGg6.js";import"./slim-arrow-down-CJ7jhAk1.js";import"./Input-D3Xm66Jc.js";import"./ResponsivePopoverCommon.css-Bm5g59rh.js";import"./ValueStateMessage.css-CNhskv9k.js";import"./Suggestions.css-BammTqMf.js";import"./ListBoxItemGroupTemplate-Bnq694A2.js";import"./ComboBoxItemGroup-CTUZloft.js";import"./ListItemBaseTemplate-BtNRlpdq.js";import"./Token-9UX-S350.js";import"./ScrollEnablement-Bvs_TGN7.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-S82lpBYr.js";import"./ToggleButton-BCthjRIl.js";import"./SuggestionItem-BD6hvrsk.js";import"./index-BTq-cNvk.js";import"./Option-c6rQ8KOO.js";import"./index-BeFwl-qO.js";import"./SegmentedButton-DsOBeHfP.js";import"./index-C2WGUbBO.js";import"./Select-Bl9KvdRX.js";import"./InvisibleMessage-BT-HA0qk.js";import"./slim-arrow-down-DDEX6AaA.js";import"./index-BGhEWWIW.js";import"./index-Bj1y_nF2.js";import"./index-BAajSuv0.js";import"./index-BJZ4mF5F.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CZdxiPUv.js";import"./group-2-x2wNxahT.js";import"./sort-descending-DblnClo_.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CoiaLP2s.js";import"./utils-BPA4Vsqc.js";import"./index-DrVyi1bm.js";import"./index-Db-Q1TXS.js";import"./index-C1aOp4aZ.js";import"./navigation-down-arrow-ACQ1IIiZ.js";import"./navigation-right-arrow-C6rkELWM.js";import"./navigation-right-arrow-DRqzrNVR.js";import"./useCurrentTheme-DcwwM3Ir.js";import"./index-DelixGbO.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D2mdH9Ar.js";import"./paper-plane-BAJmhSNp.js";import"./index-DmuQ-N4b.js";import"./less-DFyAY_Yv.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
