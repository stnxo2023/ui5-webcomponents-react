import{j as e}from"./iframe-0odebeya.js";import{useMDXComponents as o}from"./index-CqFbrvRl.js";import{I as l,F as r}from"./CommandsAndQueries-EL4jX5E-.js";import{M as a,C as c}from"./blocks-CZanU-Ia.js";import"./Tag-BUYfpKMM.js";import"./index-D9xNyPsZ.js";import"./copy-CT5RXkub.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DOi-Wnm_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-8HMofQBq.js";import"./index-Bj8LHsHM.js";import"./index-CaXXMvN7.js";import"./Link-BrHi8e0V.js";import"./index-frz6UFer.js";import"./index-tz56fx9f.js";import"./index-CWrbfQpH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BHrZH3Z4.js";import"./addCustomCSSWithScoping-Dp2j1Uki.js";import"./index-BINGVIRj.js";import"./information-CjkTzkFz.js";import"./sys-enter-2-DdZ_D29i.js";import"./alert-D-ynjdbk.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-xRjMB__s.js";import"./delete-fLvq34Jl.js";import"./settings-B4AOpzhv.js";import"./NoData-yaNyLcbB.js";import"./IllustratedMessage-C_hFkGWb.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-2a998mcO.js";import"./index-D8VPPfjQ.js";import"./index-BnCUL16H.js";import"./slim-arrow-down-BFjQhKte.js";import"./Input-CB7ibhwK.js";import"./ResponsivePopoverCommon.css-fLKohW0Q.js";import"./ValueStateMessage.css-C-9YoNH5.js";import"./Suggestions.css-CmFhhLzD.js";import"./ListBoxItemGroupTemplate-BT5gB5uM.js";import"./ComboBoxItemGroup-Du1B6a9S.js";import"./ListItemBaseTemplate-BJ16pLA5.js";import"./Token-Ch4ywBb0.js";import"./ScrollEnablement-CqQuXn0O.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B9R18C1J.js";import"./ToggleButton-PcgJOeQd.js";import"./SuggestionItem-D-h7iS1u.js";import"./index-CDM_4gIl.js";import"./Option-DYfARMYl.js";import"./index-BSUqgLJE.js";import"./SegmentedButton-BCHL45F3.js";import"./index-BzO5275T.js";import"./Select-Cc7eo2Px.js";import"./InvisibleMessage-DBSe1ewq.js";import"./slim-arrow-down-BrhmzZXI.js";import"./index-DQI_EJF_.js";import"./index-ClaOFseh.js";import"./index-XJJ-3YHL.js";import"./index-zsFPEOYy.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CMrG-M6g.js";import"./group-2-DCO1BTNo.js";import"./sort-descending-Cjurks9x.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BOtvtZYN.js";import"./utils-D6cGPaWL.js";import"./index-C9fKAKSL.js";import"./index-BsMffN5Y.js";import"./index-DFrOQYBP.js";import"./navigation-down-arrow-CxSCHjvh.js";import"./navigation-right-arrow-C1Z29n6I.js";import"./navigation-right-arrow-sQXzL3an.js";import"./useCurrentTheme-B4rbko8_.js";import"./index-GKaPWcp4.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-3MSrpeOV.js";import"./paper-plane-C4OvpktK.js";import"./index-B_3GzVsz.js";import"./less-BL1Txw-9.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
