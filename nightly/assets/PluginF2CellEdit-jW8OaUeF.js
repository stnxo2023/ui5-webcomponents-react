import{j as e}from"./iframe-DeMwMmGx.js";import{useMDXComponents as o}from"./index-CWwj9Mnl.js";import{I as l,F as r}from"./CommandsAndQueries-BBLmRDsb.js";import{M as a,C as c}from"./blocks-8D0p5thu.js";import"./Tag-CJlss1uo.js";import"./index-fzrObdgv.js";import"./copy-BgdiHhBm.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CWwR-y9u.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DaGO4DII.js";import"./index-CvQAJVIm.js";import"./index-CqRETC9D.js";import"./Link-DuK3KTb6.js";import"./index-x-nhhmJ1.js";import"./index-QSmrzR-p.js";import"./index-C3DV1EGu.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DJ0_IZyX.js";import"./addCustomCSSWithScoping-DmQSYZoL.js";import"./index-DwA6oYWp.js";import"./information-IgIWD04z.js";import"./sys-enter-2-B6dBkbbN.js";import"./alert-DXbxKJCI.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BgVD4qXY.js";import"./delete-mq69ob-m.js";import"./settings-DsHd3P0n.js";import"./NoData--TQXjPxp.js";import"./IllustratedMessage-q7ABRVJa.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DN8h-kj9.js";import"./index-Bqo4E53G.js";import"./index-Ce9C4-0M.js";import"./slim-arrow-down-CB1uueTx.js";import"./Input-DRHd5nbL.js";import"./ResponsivePopoverCommon.css-Nq-6b_ms.js";import"./ValueStateMessage.css-Tpbst_AR.js";import"./Suggestions.css-BcZrXAjC.js";import"./ListBoxItemGroupTemplate-DWp2fAWp.js";import"./ComboBoxItemGroup-B99x6mYV.js";import"./ListItemBaseTemplate-BE7nd5FZ.js";import"./Token-fAbSmEQt.js";import"./ScrollEnablement-BDJVsvmw.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-eMNK3qV1.js";import"./ToggleButton-DVIEs1wL.js";import"./SuggestionItem-C9Fa1J1D.js";import"./index-HyDyLjGn.js";import"./Option-C1H5Qp9e.js";import"./index-EGOdPRwf.js";import"./SegmentedButton-BLiDf_5M.js";import"./index-Cjfludll.js";import"./Select-BWPut0uV.js";import"./InvisibleMessage-RemLUX1t.js";import"./slim-arrow-down-Cavo_L7e.js";import"./index-BwxK2g44.js";import"./index-B0LvNv03.js";import"./index-5d-X9JJE.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B4tw820b.js";import"./group-2-DLLjtbHP.js";import"./sort-descending-DFffTKv8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-hbWTH7_c.js";import"./utils-mFF1dh2e.js";import"./index-DfGmmuHK.js";import"./index-CEQRcaEk.js";import"./index-BPZ4GFnq.js";import"./navigation-down-arrow-BQ77KqPN.js";import"./navigation-right-arrow-BckoNBw3.js";import"./navigation-right-arrow-F7WHq2_o.js";import"./useCurrentTheme-BnPNa_8f.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BXvWjhnt.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Dy9MOOru.js";import"./paper-plane-4ZqR7r5W.js";import"./index-BFzoLWvR.js";import"./less-DFrGBfi9.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
