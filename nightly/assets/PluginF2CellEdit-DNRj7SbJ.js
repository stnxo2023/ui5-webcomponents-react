import{j as e}from"./iframe-JkIS1XbA.js";import{useMDXComponents as o}from"./index-s0dX5IQa.js";import{I as l,F as r}from"./CommandsAndQueries-t8PqdBYw.js";import{M as a,C as c}from"./blocks-DIFA4jfF.js";import"./Tag-CGYuzpRX.js";import"./index-Cki6PEzP.js";import"./copy-BpEy4GT_.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-zqPKIr8k.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CcRV2upd.js";import"./index-If9QK12V.js";import"./index-Cc6IDcWO.js";import"./Link-C8ljX_Jl.js";import"./index-BJe_Ldbq.js";import"./index-CIULjnJw.js";import"./index-D4k933VY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C6BvO_Mx.js";import"./addCustomCSSWithScoping-OrJPV9ed.js";import"./index-wV8mgQwM.js";import"./information-8O35dRa_.js";import"./sys-enter-2-BwjA-U8a.js";import"./alert-0nYrX8QQ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CXT2Cgk-.js";import"./delete-CIhDQEzl.js";import"./settings-D4GDgni6.js";import"./NoData-CGi4XDkU.js";import"./IllustratedMessage-Wq2Ul-i9.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-CeWFzWKq.js";import"./index-Ce7dmWA4.js";import"./index-DTso7Ssf.js";import"./slim-arrow-down-CxdQbgux.js";import"./Input-DAygltfI.js";import"./ResponsivePopoverCommon.css-DalBzcK6.js";import"./ValueStateMessage.css-DB31QG7j.js";import"./Suggestions.css-DDSHaogF.js";import"./ListBoxItemGroupTemplate-CU0DT1IQ.js";import"./ComboBoxItemGroup-spyevgsi.js";import"./ListItemBaseTemplate-DG-Nk2uN.js";import"./Token-BuJPwVWP.js";import"./ScrollEnablement-DgEc-4I0.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CBW51XFx.js";import"./ToggleButton-BQDsMvuW.js";import"./SuggestionItem-DcE8EEE7.js";import"./index-DRdjcI3a.js";import"./Option-BPjQvE5p.js";import"./index-D3fBZPmN.js";import"./SegmentedButton-ChWUymxG.js";import"./index-DdxRipET.js";import"./Select-DtPi2w1p.js";import"./InvisibleMessage-B2BhAQgi.js";import"./slim-arrow-down-DRq74hAW.js";import"./index-C-SFTGz_.js";import"./index-BgRffrdt.js";import"./index-bz7pM8qx.js";import"./IconDesign-DXd8PPVF.js";import"./filter-upsf-FbF.js";import"./group-2-B13YNGeD.js";import"./sort-descending-jvCE5ooF.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dk01B-cJ.js";import"./utils-OzEeB7Yk.js";import"./index-TTqlvXZi.js";import"./index-Y6bQjObX.js";import"./index-D0XJ_zxW.js";import"./navigation-down-arrow-BloNf-Qp.js";import"./navigation-right-arrow-D5wlsInA.js";import"./navigation-right-arrow-C2s_1KE8.js";import"./useCurrentTheme-DyiO6FGA.js";import"./IndicationColor-DVw-fSM_.js";import"./index-yDwJ49Kg.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-3MqpM2h7.js";import"./paper-plane-FRWsPWej.js";import"./index-by9B6z8d.js";import"./less-B2UjUmjt.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
