import{j as e}from"./iframe-BCeV4J61.js";import{useMDXComponents as o}from"./index-DQSXUrY-.js";import{I as l,F as r}from"./CommandsAndQueries-BMt6Du51.js";import{M as a,C as c}from"./blocks-BaqdfAa9.js";import"./Tag-Bzl_4yyv.js";import"./index-DSCCKcvn.js";import"./copy-BLLS_Koh.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-p2TBitSL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D6AOhQcP.js";import"./index-BqI0DRaf.js";import"./index-CTun36xm.js";import"./Link-C83i_H7y.js";import"./index-BaMmnI_0.js";import"./index-Dd7n1xMP.js";import"./index-C_9CrSf5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-xuzVGY3l.js";import"./addCustomCSSWithScoping-Bz6BhAjV.js";import"./index-MH0uXub1.js";import"./information-DsxmrLjJ.js";import"./sys-enter-2-DTJ11PLs.js";import"./alert-BPfUUxXP.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DepvYq9l.js";import"./delete-DVWCX9kC.js";import"./settings-CsQavQXZ.js";import"./NoData-B5oeo5kD.js";import"./IllustratedMessage-KukoJbKs.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-BPCWQtRS.js";import"./index-CoJmn4Yy.js";import"./index-DWP4Fzr6.js";import"./slim-arrow-down-BbmvWyWt.js";import"./Input-BdR3eabn.js";import"./ResponsivePopoverCommon.css-C2w1fqZM.js";import"./ValueStateMessage.css-CWUCP2jh.js";import"./Suggestions.css-Jm5XbPUR.js";import"./ListBoxItemGroupTemplate-DoQGXH2K.js";import"./ComboBoxItemGroup-SSqFciiI.js";import"./ListItemBaseTemplate-B-HxI0mr.js";import"./Token-CVeMAn7C.js";import"./ScrollEnablement-D6HdbXM3.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CtPLPajr.js";import"./ToggleButton-cGf9jpQr.js";import"./SuggestionItem-lE3aTa1o.js";import"./index-Cuu5RXhJ.js";import"./Option-O-FsfY6r.js";import"./index-e3RQM6ba.js";import"./SegmentedButton-YPERwD_1.js";import"./index-BVgvpLqI.js";import"./Select-BDp6Bw0F.js";import"./InvisibleMessage-D4FAyCwP.js";import"./slim-arrow-down-ClrsC2ro.js";import"./index-BxOecRVs.js";import"./index-Ch8eD88C.js";import"./index-DaqBjD0S.js";import"./index-J52IetZK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-H3EEYKpA.js";import"./group-2-DnxmYItq.js";import"./sort-descending-B08sQLL8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-pwQzdFN3.js";import"./utils-CsNciHqm.js";import"./index-jccjEr8p.js";import"./index-DYxx-EtR.js";import"./index-BkYe_VJy.js";import"./navigation-down-arrow-BlqpuI4E.js";import"./navigation-right-arrow-ClXC1YSw.js";import"./navigation-right-arrow-B8F7f_GM.js";import"./useCurrentTheme-8k0wl0rJ.js";import"./index-aypRBSpr.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BbNqKuvZ.js";import"./paper-plane-BDKzrgnv.js";import"./index-CvRy4k66.js";import"./less-0SXq5Fj1.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
