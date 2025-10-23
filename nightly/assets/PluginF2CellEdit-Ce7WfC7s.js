import{j as e}from"./iframe-DJ3L9Q7k.js";import{useMDXComponents as o}from"./index-CgKASuks.js";import{I as l,F as r}from"./CommandsAndQueries-J0DynbNC.js";import{M as a,C as c}from"./blocks-CtbNLxKJ.js";import"./Tag-dHoy1aOg.js";import"./index-Drb2TrHE.js";import"./copy-dl-GArcT.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-XmI_OBRf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BiXweYzS.js";import"./index-4H2gG8m_.js";import"./index-DQGcZUo3.js";import"./Link-CI3a-uZg.js";import"./index-DDFmE4EA.js";import"./index-BTen11gj.js";import"./index-C_wfJoh6.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BifEEb3N.js";import"./addCustomCSSWithScoping-BamJJJtZ.js";import"./index-DJdHB7_b.js";import"./information-1qu8opp4.js";import"./sys-enter-2-Cu2hBGrK.js";import"./alert-Bssjvu3J.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ZogVh3-n.js";import"./delete-DJWhYD8C.js";import"./settings-NgS7zej6.js";import"./NoData-CmcwKAsS.js";import"./IllustratedMessage-BquGAG1y.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-6m67jwsT.js";import"./index-BMmEn-9e.js";import"./index-DHWps5pX.js";import"./slim-arrow-down-CD5MJjlC.js";import"./Input-BTxUiPoF.js";import"./ResponsivePopoverCommon.css-DAHQOPQC.js";import"./ValueStateMessage.css-C1vUk4m-.js";import"./Suggestions.css-AC0gY3Q2.js";import"./ListBoxItemGroupTemplate-BKr03FZt.js";import"./ComboBoxItemGroup-DmnfwRXO.js";import"./ListItemBaseTemplate-C7qYhT1t.js";import"./Token-Bh6SaF3b.js";import"./ScrollEnablement-BgeY4u8Z.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DMcqHDTj.js";import"./ToggleButton-Bq8xm8nS.js";import"./SuggestionItem-CmXkyaku.js";import"./index-DuEKvhcf.js";import"./Option-asFhuENp.js";import"./index-BVPkbHHt.js";import"./SegmentedButton-DmsFvxo8.js";import"./index-B_gzg89D.js";import"./Select-Cpy_GAyA.js";import"./InvisibleMessage-DIaqYHhI.js";import"./slim-arrow-down-BphH8SC0.js";import"./index-DvC78ri4.js";import"./index-QxoMqp8P.js";import"./index-BElugJkH.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BBj9Wq0r.js";import"./group-2-Bclkbxf6.js";import"./sort-descending-Qi2aeWer.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dx8gVwDW.js";import"./utils-AbgTTf_S.js";import"./index-BftjTv9E.js";import"./index-kkvWmntR.js";import"./index-f5CXzuCL.js";import"./navigation-down-arrow-Cn34Yi42.js";import"./navigation-right-arrow-BdYlSoky.js";import"./navigation-right-arrow-ZjAJAoPG.js";import"./useCurrentTheme-Dv8It12u.js";import"./IndicationColor-DVw-fSM_.js";import"./index-gUd0jpcr.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-g4vzgofK.js";import"./paper-plane-DR2uxcqx.js";import"./index-BTrtIEWf.js";import"./less-DMzNG9tV.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
