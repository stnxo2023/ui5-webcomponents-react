import{j as e}from"./iframe-m3wgL8DO.js";import{useMDXComponents as o}from"./index-BDA4Q--W.js";import{I as l,F as r}from"./CommandsAndQueries-DJJG77Q0.js";import{M as a,C as c}from"./blocks-CkTarMgO.js";import"./Tag-tSZf1-5X.js";import"./index-XwYlDB9P.js";import"./copy-CODhXho7.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-uoQ6fw54.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BhmtIGIH.js";import"./index-D9MBfHQe.js";import"./index-CVyBcJoi.js";import"./Link-BBA1fpnp.js";import"./index-CLINieEb.js";import"./index-00DfGzTS.js";import"./index-B7uA3u-p.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C6f_OpFu.js";import"./addCustomCSSWithScoping-D1ffFiBE.js";import"./index-BSNngnc7.js";import"./information-DsCCxR_j.js";import"./sys-enter-2-3GVzqOhh.js";import"./alert-CYqVZ7NL.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CM97FBcw.js";import"./delete-Bf921CWr.js";import"./settings-BYe7f3tO.js";import"./NoData-Dh7joJIl.js";import"./IllustratedMessage-CxQCJ2ay.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-CTWxVoyD.js";import"./index-ljJh2mXy.js";import"./index-DdE1XOTZ.js";import"./slim-arrow-down-8v6NvsKW.js";import"./Input-Cs15w5r3.js";import"./ResponsivePopoverCommon.css-C9hxCvuP.js";import"./ValueStateMessage.css-z6jg6mGY.js";import"./Suggestions.css-DbjXinA2.js";import"./ListBoxItemGroupTemplate-9uh1HRli.js";import"./ComboBoxItemGroup-BqRSt8o0.js";import"./ListItemBaseTemplate-BAr1QC4e.js";import"./Token-DRcSqql8.js";import"./ScrollEnablement-Dlq8aT82.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DGziFzMo.js";import"./ToggleButton-sEBB_MTe.js";import"./SuggestionItem-Cc8TNMCR.js";import"./index-CxG5u9XF.js";import"./Option-QpRjKkO3.js";import"./index-CXyubNwj.js";import"./SegmentedButton-BflLR7ZS.js";import"./index-D17ZhWQV.js";import"./Select-Cp0iaTMd.js";import"./InvisibleMessage-BUt-p4eg.js";import"./slim-arrow-down-BxbuKxeo.js";import"./index-CKvze9UP.js";import"./index-DaG3SG7b.js";import"./index-Bt_KiuWe.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BM91Z3C5.js";import"./group-2-BwsR6O4m.js";import"./sort-descending-BqWoToib.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Cl9chJaT.js";import"./utils-DiSEeJmV.js";import"./index-vic8-m6V.js";import"./index-J2w0B87P.js";import"./index-Bcls0r_S.js";import"./navigation-down-arrow-DD0yo9R6.js";import"./navigation-right-arrow-D4MH6EAI.js";import"./navigation-right-arrow-Vgro8iwV.js";import"./useCurrentTheme-Cx5Llmvy.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BW_d6Mec.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-NbRukm78.js";import"./paper-plane-Bod-WMHa.js";import"./index-CIqeAo6O.js";import"./less-jU3EhTke.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
