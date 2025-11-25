import{j as e}from"./iframe-DqhX_Hdp.js";import{useMDXComponents as o}from"./index-B-LlaBAd.js";import{I as l,F as r}from"./CommandsAndQueries-Ctn2WqFW.js";import{M as a,C as c}from"./blocks-BTKPnx40.js";import"./Tag-t-9sbcO3.js";import"./index-eBm8t70p.js";import"./copy-BkBAOPVd.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DrWG1jWH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BeJ9wz7o.js";import"./index-DCixdKQP.js";import"./index-BJOWTBa5.js";import"./Link-KAeBCRn4.js";import"./index-CZfYA9Jl.js";import"./index-D2G6pSj4.js";import"./index-CqRqJjYx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Duf1worp.js";import"./addCustomCSSWithScoping-BTNZ7_2D.js";import"./index-CuoIUeLC.js";import"./information-DBUGylnd.js";import"./sys-enter-2-CQyTlO0m.js";import"./alert-OnHFbpl_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BpMc5M9M.js";import"./delete-C7JHot2N.js";import"./settings-SKzIyHSS.js";import"./NoData-CX7evjUT.js";import"./IllustratedMessage-CqLVEv_t.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-DAqM8TO4.js";import"./index-BzlXpFoZ.js";import"./index-BtdQUBMJ.js";import"./slim-arrow-down-B4S7UH3-.js";import"./Input-Bip1JtLT.js";import"./ResponsivePopoverCommon.css-B62B-Zvc.js";import"./ValueStateMessage.css-D02law6b.js";import"./Suggestions.css-CSoreWx6.js";import"./ListBoxItemGroupTemplate-DHoLoT8x.js";import"./ComboBoxItemGroup-C5WDhKir.js";import"./ListItemBaseTemplate-OClf921P.js";import"./Token-BLU09JyB.js";import"./ScrollEnablement-B9Jmoik0.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D7vVDnmd.js";import"./ToggleButton-D53MHrW_.js";import"./SuggestionItem-BeURI2s8.js";import"./index-C9P_P9K4.js";import"./Option-CHApBvDG.js";import"./index-DAJXbvOW.js";import"./SegmentedButton-DeqHvB3C.js";import"./index-BCK2EVsS.js";import"./Select-Be7QzEWT.js";import"./InvisibleMessage-Bdbv9Ef9.js";import"./slim-arrow-down-CarTb4uE.js";import"./index-BIu9-7Rg.js";import"./index-BCh3t8Up.js";import"./index-DxAT9tTr.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CtE2b9bq.js";import"./group-2-eAJtoAsZ.js";import"./sort-descending-Cx0p3NMy.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DDEoRTFB.js";import"./utils-BSyH8VJa.js";import"./index-BkR8Kcfn.js";import"./index-CfGNWRnm.js";import"./index-DNTS6-c1.js";import"./navigation-down-arrow-ahG-gz6o.js";import"./navigation-right-arrow-A7nXgQLK.js";import"./navigation-right-arrow-C6E29xwI.js";import"./useCurrentTheme-gRxjNOgY.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D-Tz76DO.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DHOA1SXn.js";import"./paper-plane-Bzfws6My.js";import"./index-DrsUiW4k.js";import"./less-CCPik5WH.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
