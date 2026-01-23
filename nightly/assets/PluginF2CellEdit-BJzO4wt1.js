import{j as e}from"./iframe-jtGuD92m.js";import{useMDXComponents as o}from"./index-DyF6GLYl.js";import{I as l,F as r}from"./CommandsAndQueries-BgMZZCcl.js";import{M as a,C as c}from"./blocks-BL9sBKUV.js";import"./Tag-Dpj_ZR-y.js";import"./index-l_17qA1t.js";import"./copy-Cn3-Cbk_.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-5Tk_lYY6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-6t-0TKBV.js";import"./index-D83RH-Pe.js";import"./index-BEvnvfMN.js";import"./Link-DNXoJofm.js";import"./index-C31MI_yM.js";import"./index-B03g8ajZ.js";import"./index-DtTTXQKH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BUd6X6mW.js";import"./addCustomCSSWithScoping-Bli4C3Yg.js";import"./index-DWeXgmyB.js";import"./information-DbZkMEoB.js";import"./sys-enter-2-K-A7BdiC.js";import"./alert-Csq7QRRu.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BWnXpevw.js";import"./delete-91MAIkTv.js";import"./settings-D-bW6kuF.js";import"./NoData-CzzIdr3g.js";import"./IllustratedMessage-C9-M-hdZ.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DqqtA8_P.js";import"./index-B3tdBbEs.js";import"./index-DHuy06ot.js";import"./slim-arrow-down-BXWYLP4S.js";import"./Input-CYGHSySa.js";import"./ResponsivePopoverCommon.css-CWePAE7F.js";import"./ValueStateMessage.css-BFBzO_xV.js";import"./Suggestions.css-DBI26x47.js";import"./ListBoxItemGroupTemplate-CsqKmRRZ.js";import"./ComboBoxItemGroup-CIWUs4af.js";import"./ListItemBaseTemplate-BqSygcyO.js";import"./Token-BHrN57pC.js";import"./ScrollEnablement-NU8w7nTv.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DhTllij2.js";import"./ToggleButton-hXSjriuS.js";import"./SuggestionItem-Dtkve2MA.js";import"./index-Cvp7efxq.js";import"./Option-Dcdi45sN.js";import"./index-DmozDhUV.js";import"./SegmentedButton-CQ1w3cR3.js";import"./index-Dwk6FeKM.js";import"./Select-CY97Kj_H.js";import"./InvisibleMessage-CjY7eeJ7.js";import"./slim-arrow-down-D05WhDba.js";import"./index-CCzWQSlv.js";import"./index-Cp9jM2Nb.js";import"./index-LE4ERw5Y.js";import"./index-C0ZVEY98.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D2cn45G_.js";import"./group-2-ByAZ2_iD.js";import"./sort-descending-BB9cOvuL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CTCTysJ9.js";import"./utils-DdgWIhzU.js";import"./index-BGvGmVJ6.js";import"./index-BUu3tjYA.js";import"./index-DrECakWL.js";import"./navigation-down-arrow-CGa1rkR6.js";import"./navigation-right-arrow-inY4KsbT.js";import"./navigation-right-arrow-CDKzHRuO.js";import"./useCurrentTheme-BdPm8Riw.js";import"./index-Cd3rxfas.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-_IURFj1j.js";import"./paper-plane-BU6zGRJF.js";import"./index-CX971ue9.js";import"./less-CRl1RWOh.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
