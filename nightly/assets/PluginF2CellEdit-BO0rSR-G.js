import{j as e}from"./iframe-D7LtZGbE.js";import{useMDXComponents as o}from"./index-DPe-hK9n.js";import{I as l,F as r}from"./CommandsAndQueries-16gk4cWC.js";import{M as a,C as c}from"./blocks-pr2PodND.js";import"./Tag-CAGvJLHq.js";import"./index-8IYrQOsB.js";import"./copy-irE93QLw.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-B9VjvtYg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CTJj7zal.js";import"./index-CQrPSC4r.js";import"./index-DCDoujQt.js";import"./Link-DR-Yc_uT.js";import"./index-D9f7QWgZ.js";import"./index-7y0cv8s8.js";import"./index-B5kVVFk8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D0rw92sk.js";import"./addCustomCSSWithScoping-Q6oWMzUs.js";import"./index-nlmJusRV.js";import"./information-DGR9jLKW.js";import"./sys-enter-2-pukk9ibo.js";import"./alert-ltuZ9R-x.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C2wuCET-.js";import"./delete-BsnXpo15.js";import"./settings-18EA03mw.js";import"./NoData-DD1I2RW2.js";import"./IllustratedMessage-GNJtNDK1.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DbgaenG_.js";import"./index-Cvm9n84J.js";import"./index-CONzwepJ.js";import"./slim-arrow-down-CSg5EB5A.js";import"./Input-smzufGTw.js";import"./ResponsivePopoverCommon.css-BuYzr302.js";import"./ValueStateMessage.css-B17FpIm5.js";import"./Suggestions.css-D7t7e06T.js";import"./ListBoxItemGroupTemplate-D6TYIJcU.js";import"./ComboBoxItemGroup-DVpFxRma.js";import"./ListItemBaseTemplate-DPI4cuqZ.js";import"./Token-DsqCbMj8.js";import"./ScrollEnablement-BHoJsn2l.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DJhw0qF_.js";import"./ToggleButton-c8Z5hSFG.js";import"./SuggestionItem-Ccdg184n.js";import"./index-CyQ4JYW2.js";import"./Option-DijjA4Vk.js";import"./index-DtP90_Pc.js";import"./SegmentedButton-6lreoM-F.js";import"./index-DvCsGyO6.js";import"./Select-BbkKcK4f.js";import"./InvisibleMessage-Cv3DnnE8.js";import"./slim-arrow-down-CRqqmTAd.js";import"./index-DWNwOieW.js";import"./index-Ce0fYx_h.js";import"./index-DOsdkp8m.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BcZJAP96.js";import"./group-2-MIHTxi8_.js";import"./sort-descending-BXMcQwtn.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-1VTd4aoY.js";import"./utils-aOFiSUxD.js";import"./index-Q9bXyf1m.js";import"./index-BpcjvSLQ.js";import"./index-B66V5vGh.js";import"./navigation-down-arrow-CJtYN5Co.js";import"./navigation-right-arrow-IFUe67pQ.js";import"./navigation-right-arrow-LlpQSEVq.js";import"./useCurrentTheme-D1sCc5b1.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DZFiI2KH.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BMbyDpGC.js";import"./paper-plane-C_ZVdgGb.js";import"./index-CdvQl7dB.js";import"./less-DCpc4-xW.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
