import{j as e}from"./iframe-C8JI7dEI.js";import{useMDXComponents as o}from"./index-Dy3dbavl.js";import{I as l,F as r}from"./CommandsAndQueries-CAJp8baB.js";import{M as a,C as c}from"./blocks-dOc4ZvhQ.js";import"./Tag-Bh9-KKtm.js";import"./index-BEdzbacm.js";import"./copy-vzDhs336.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DNrBsuYV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bk0DUMEL.js";import"./index-BeiYD_4I.js";import"./index-B3nw03BL.js";import"./Link-g_43hnwI.js";import"./index-x3EANzLS.js";import"./index-DM_OMODM.js";import"./index-BQN-IPa2.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DOnTZlr2.js";import"./addCustomCSSWithScoping-CSnh5KZm.js";import"./index-g7zsKBLX.js";import"./information-DGVxJHTG.js";import"./sys-enter-2-iEzb33ry.js";import"./alert-BG5FVPBd.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DfyBeYJW.js";import"./delete-CkvGN4OZ.js";import"./settings-DTnV51pQ.js";import"./NoData-C4moVh3C.js";import"./IllustratedMessage-Dz_KDnet.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BfTOhDS6.js";import"./index-DUcLpr5Z.js";import"./index-NkzgGKyJ.js";import"./slim-arrow-down-BHxd8Vqs.js";import"./Input-CWkKGtsV.js";import"./ResponsivePopoverCommon.css-CM_pgGQI.js";import"./ValueStateMessage.css-CpDWY9cw.js";import"./Suggestions.css-gOeHYbiv.js";import"./ListBoxItemGroupTemplate-CWnRQTn9.js";import"./ComboBoxItemGroup-DbaEJT2y.js";import"./ListItemBaseTemplate-DZdo7lxN.js";import"./Token-BGcNiMJN.js";import"./ScrollEnablement-C16y6Z4B.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-nR7zaAP7.js";import"./ToggleButton-CBJChvXE.js";import"./SuggestionItem-DQgH2h9g.js";import"./index-DVcqEpTx.js";import"./Option-CZqJWi3Y.js";import"./index-BQdPAoWH.js";import"./SegmentedButton-BRjgQDpe.js";import"./index-FYP3kV_G.js";import"./Select-CnZcEXKA.js";import"./InvisibleMessage-CdXIl2K3.js";import"./slim-arrow-down-D-3Ia4oG.js";import"./index-mMTThdtc.js";import"./index-Ca9TsDXb.js";import"./index-Cj7dIYUI.js";import"./index-B0N44tcI.js";import"./IconDesign-DXd8PPVF.js";import"./filter-6QwyGlxR.js";import"./group-2-BS-n-QGS.js";import"./sort-descending-DJuTnB3z.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CNbH8ce-.js";import"./utils-DR9e_77z.js";import"./index-Deuc0gVb.js";import"./index-BM_FCtPz.js";import"./index-Cg6f3q8s.js";import"./navigation-down-arrow-B0wv2RPc.js";import"./navigation-right-arrow-UvdD6bou.js";import"./navigation-right-arrow-CwFJJrbP.js";import"./useCurrentTheme-CgmTzasZ.js";import"./index-Ccr8UAcd.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DK7LFoXt.js";import"./paper-plane-jP92lQH-.js";import"./index-ISXhP0ey.js";import"./less-zqCYDGGq.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
