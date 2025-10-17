import{j as e}from"./iframe-28qsVqoa.js";import{useMDXComponents as o}from"./index-BFNvmwXu.js";import{I as l,F as r}from"./CommandsAndQueries-BfKaGYgk.js";import{M as a,C as c}from"./blocks-BNVDqSKu.js";import"./Tag-CLPhNAjj.js";import"./index-SsxmriuV.js";import"./copy-D8k23l_a.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Cg1NtmUY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BaQxmIN-.js";import"./index-QZ0q645F.js";import"./index-CWduGffo.js";import"./Link-DXcAF61b.js";import"./index-BSTD78ro.js";import"./index-Ca0DqgDv.js";import"./index-DL1oyV4a.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BDZLmGFA.js";import"./addCustomCSSWithScoping-BQde53eT.js";import"./index-CLPTUIfm.js";import"./information-DHvzqwV5.js";import"./sys-enter-2-BKUUSCT4.js";import"./alert-D4ecQurj.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-COPcPnn5.js";import"./delete-D6n8l8UK.js";import"./settings-KfG2DgI0.js";import"./NoData-BHcK-Aul.js";import"./IllustratedMessage-CGHyK5ha.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-BFsCnHXw.js";import"./index-CK3Laxke.js";import"./index-CxlikhWp.js";import"./slim-arrow-down-2lG3bKMG.js";import"./Input-CrBqW3Ot.js";import"./ResponsivePopoverCommon.css-DsOR_HfQ.js";import"./ValueStateMessage.css-Dvyiq9XB.js";import"./Suggestions.css-CdBr9Iyq.js";import"./ListBoxItemGroupTemplate-D6s9h6mp.js";import"./ComboBoxItemGroup-BSE1TSV-.js";import"./ListItemBaseTemplate-DQ-a9maQ.js";import"./Token-Bg0__rMF.js";import"./ScrollEnablement-D20yGFFj.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BH9JzmU2.js";import"./ToggleButton-DnstKIPi.js";import"./SuggestionItem-BYGj_peP.js";import"./index-C5RB-L2O.js";import"./Option-CBaHN4ua.js";import"./index-DTixF4LF.js";import"./SegmentedButton-BE8yfTm6.js";import"./index-CQtjld3i.js";import"./Select-CdXPeKkl.js";import"./InvisibleMessage-c9pOv6Ax.js";import"./slim-arrow-down-nj_KPop2.js";import"./index-Ak3FL7pI.js";import"./index-D9_Z31ZG.js";import"./index-Bq1PEsv_.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Ch2Rtr4k.js";import"./group-2-Ca0UP8Bj.js";import"./sort-descending-D3OEeGWP.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CD3TL1kj.js";import"./utils-DHg3ikqn.js";import"./index-CC-MGg2L.js";import"./index-CjppD4GJ.js";import"./index-BzTqkFjE.js";import"./navigation-down-arrow-DwBdfM0k.js";import"./navigation-right-arrow-CasD3Mbg.js";import"./navigation-right-arrow-FCQDrhAi.js";import"./useCurrentTheme-67g0YI4J.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BFx0BUYp.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B2mIAyDi.js";import"./paper-plane-CpCfXY5u.js";import"./index-CGLvNCn3.js";import"./less-4GZTBVpK.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
