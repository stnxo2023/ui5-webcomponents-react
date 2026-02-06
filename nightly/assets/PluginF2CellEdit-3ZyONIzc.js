import{j as e}from"./iframe-DrnWJux_.js";import{useMDXComponents as o}from"./index-8FDMxm68.js";import{I as l,F as r}from"./CommandsAndQueries-CNfp17jg.js";import{M as a,C as c}from"./blocks-BFYkdnf5.js";import"./Tag-C0-SLfdZ.js";import"./index-e4jmEiJR.js";import"./copy-BxyqZoQq.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DgUCPkq2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CW1Fzcqx.js";import"./index-Cjg1iz22.js";import"./index-IUrjl9ty.js";import"./Link-DZzQtWK9.js";import"./index-DVoKYJte.js";import"./index-BNqm2zkD.js";import"./index-CBWW3th1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CDLiZVZl.js";import"./addCustomCSSWithScoping-CbplP-kx.js";import"./index-CvpE5smH.js";import"./information-Djf1EDVN.js";import"./sys-enter-2-BH66Bhis.js";import"./alert-DUpqB4cV.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-SPiIDSVL.js";import"./delete-5wIjYt_5.js";import"./settings-CAxNiiQH.js";import"./NoData-HSKDxZyT.js";import"./IllustratedMessage-DN8OF25b.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CyleH7Va.js";import"./index-xdLxPP_I.js";import"./index-Cx3nmWT2.js";import"./slim-arrow-down-DtR6poag.js";import"./Input-4ibVB00q.js";import"./ResponsivePopoverCommon.css-e_PJNQiz.js";import"./ValueStateMessage.css-CmtfF9l5.js";import"./Suggestions.css-CmamAcfO.js";import"./ListBoxItemGroupTemplate-8x1YZ5vn.js";import"./ComboBoxItemGroup-CIBhgpWG.js";import"./ListItemBaseTemplate-BtkgFioN.js";import"./Token-Zy1XachM.js";import"./ScrollEnablement-1d_YGRve.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-yRZvETLK.js";import"./ToggleButton-C23ah_yf.js";import"./SuggestionItem-CB5GR-P0.js";import"./index-wMa-vVtE.js";import"./Option-CqIki-Fh.js";import"./index--9-z_1Kd.js";import"./SegmentedButton-r0yGjI_-.js";import"./index-DDrFA_hE.js";import"./Select-BOTkrqM0.js";import"./InvisibleMessage-C0LEPWkX.js";import"./slim-arrow-down-CVB2vj5c.js";import"./index-M4vNGXYB.js";import"./index-D6NM4VIr.js";import"./index-DKmNv-fY.js";import"./index-ON4dRT-g.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DFUoYrZj.js";import"./group-2-DE19W3Nx.js";import"./sort-descending-DI4YTnq7.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BmAbNejI.js";import"./utils-EOKqhIpz.js";import"./index-Bm4VLMrF.js";import"./index-BC5oddu4.js";import"./index-DdJ94PAJ.js";import"./navigation-down-arrow-CVq5S1h3.js";import"./navigation-right-arrow-C068DZ1b.js";import"./navigation-right-arrow-CvUKgEjh.js";import"./useCurrentTheme-Co2qp8hO.js";import"./index-C4phtI-B.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BIBkdk-r.js";import"./paper-plane-Dk1M1e69.js";import"./index-DQW6kDtJ.js";import"./less-4cQ9RhUf.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
