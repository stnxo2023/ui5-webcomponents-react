import{j as e}from"./iframe-DeqKlIRG.js";import{useMDXComponents as o}from"./index-BkEa29Df.js";import{I as l,F as r}from"./CommandsAndQueries-BK0G3Pqq.js";import{M as a,C as c}from"./blocks-C1D2jvVQ.js";import"./Tag-EQmX-47F.js";import"./index-CW-zKJIF.js";import"./copy-DS8sFIJH.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Z7tjv5z3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BnqCxbWG.js";import"./index-D3fIG7Vo.js";import"./index-vsoaIVfP.js";import"./Link-DmriJHN9.js";import"./index-DZSRf0vt.js";import"./index-CUp9ZC_J.js";import"./index-BjGpgXu_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CD5youlR.js";import"./addCustomCSSWithScoping-W7fjoweE.js";import"./index-CNR4ri7j.js";import"./information-BKTQWge_.js";import"./sys-enter-2-qREtxQiM.js";import"./alert-J7MXwQPX.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DcfttK52.js";import"./delete-CzjS8jKj.js";import"./settings-BFTpzi3p.js";import"./NoData-DdbvMWeu.js";import"./IllustratedMessage-CwaNkNxb.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BrUTDG_M.js";import"./index-BJzWWHia.js";import"./index-DQNorMfg.js";import"./slim-arrow-down--R6acl1m.js";import"./Input-CTbiGavu.js";import"./ResponsivePopoverCommon.css-Dch4WVjM.js";import"./ValueStateMessage.css-DQDynnzI.js";import"./Suggestions.css-CqAFo46i.js";import"./ListBoxItemGroupTemplate-UGwk5YiJ.js";import"./ComboBoxItemGroup-DEdZ8U8Z.js";import"./ListItemBaseTemplate-D5-84s4y.js";import"./Token-ZAjnmiMh.js";import"./ScrollEnablement-C5rzfotJ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B8djI9Ll.js";import"./ToggleButton-BzmaRDgs.js";import"./SuggestionItem-DHUQVhWq.js";import"./index-Bm1-k_-z.js";import"./Option-CmUx6ft0.js";import"./index-CNAnBr4X.js";import"./SegmentedButton-DpjYxYdV.js";import"./index-DQlxzy1B.js";import"./Select-DC3vLiGW.js";import"./InvisibleMessage-BnUatQiz.js";import"./slim-arrow-down-BD3ZShnB.js";import"./index-BWbOjgM2.js";import"./index-DkHfyO0R.js";import"./index-CSAT2Cv9.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DqGeWKN9.js";import"./group-2-CtuKuo3j.js";import"./sort-descending-e-Z9IEx-.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DpduKTu4.js";import"./utils-DFYX2ngj.js";import"./index-x8ATXu-z.js";import"./index-0XnoPyy6.js";import"./index-BvUS6apf.js";import"./navigation-down-arrow-C1Mzx0eB.js";import"./navigation-right-arrow-Dfh_jGI5.js";import"./navigation-right-arrow-Cc3Z_knn.js";import"./useCurrentTheme-DWe2YqPm.js";import"./IndicationColor-DVw-fSM_.js";import"./index-UBCMfYla.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B59bvvXz.js";import"./paper-plane-DJj7TsmY.js";import"./index-BGawmT5r.js";import"./less-DyqqT9US.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
