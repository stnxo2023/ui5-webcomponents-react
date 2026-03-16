import{j as e}from"./iframe-BFfiCRAQ.js";import{useMDXComponents as o}from"./index-CnIchwG9.js";import{I as r}from"./CommandsAndQueries-D2e25SQ4.js";import{M as l,C as a}from"./blocks-D8UGMoOU.js";import"./Tag-D5_wJnae.js";import"./index-BvMEXi75.js";import"./copy-CbWPHS6-.js";import{F as c}from"./Footer-3U2rULEI.js";import"./PageNotFound-CAIx-1qq.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Cju8RjRZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BzXMrnu2.js";import"./index-Arv69njm.js";import"./index-BEK-Ecqi.js";import"./index-CX51hblh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-RE3-w7CJ.js";import"./addCustomCSSWithScoping-rUi9bOzC.js";import"./index-De1oz68R.js";import"./index-C_tePRTa.js";import"./index-BsyXKf0m.js";import"./information-mHfS5cWl.js";import"./sys-enter-2-BfeK50PI.js";import"./alert-DGgnTy1o.js";import"./index-stFY49PR.js";import"./Illustrations-DMZSmuvx.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DaxjLmz-.js";import"./delete-HE9f-xbA.js";import"./settings-nYLXQZ59.js";import"./NoData-D-G6iKM6.js";import"./NoFilterResults-DPpLw_XE.js";import"./index-DxmJnuS8.js";import"./IllustratedMessage-BUkhLd6d.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-DpuJyxUQ.js";import"./Input-BSDYELEx.js";import"./ResponsivePopoverCommon.css-D4YzLUeU.js";import"./ValueStateMessage.css-CZS8cQna.js";import"./Suggestions.css-BRZ_skiF.js";import"./ListBoxItemGroupTemplate-B9xYubZz.js";import"./ComboBoxItemGroup-zb3CXtQM.js";import"./ListItemBaseTemplate-BM8be-0F.js";import"./Token-BROk1qEI.js";import"./ScrollEnablement-BWSWkQKK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-xVznhyAm.js";import"./ToggleButton-QD-qILMO.js";import"./multiselect-all-BI6jGZO9.js";import"./SuggestionItem-D45_KCqM.js";import"./index-DxNz8cxh.js";import"./Option-nJWI7L3J.js";import"./index-Yf53TJNt.js";import"./SegmentedButton-C1RsLFa5.js";import"./index-CRSZng-3.js";import"./Select-Bn7-Juol.js";import"./InvisibleMessage-C0rjjrR1.js";import"./index-CnNyMgdN.js";import"./index-CGKXgT7t.js";import"./index-DtGyYGMv.js";import"./index-D4r21y2V.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DeErRayA.js";import"./group-2-CcbLqHZL.js";import"./sort-descending-5U4Cc-Io.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-rwYIjJnj.js";import"./utils-B3YyPFzV.js";import"./index-dSthqGSi.js";import"./index-Dato8t9q.js";import"./index-BoRvqz2r.js";import"./navigation-down-arrow-ByE_fRjG.js";import"./navigation-right-arrow-Dn0VM6Bb.js";import"./navigation-right-arrow-Czbs9gPV.js";import"./useCurrentTheme-BiekrNKv.js";import"./index-CnomUQWd.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C_1zrNbW.js";import"./paper-plane-S0TbXz67.js";import"./index-BFtFKw4r.js";import"./less-C3-m2tND.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
`,e.jsx(n.h1,{id:"analyticaltable-plugin-usef2celledit",children:"AnalyticalTable Plugin: useF2CellEdit"}),`
`,e.jsx(r,{moduleNames:["AnalyticalTableHooks"],packageName:"@ui5/webcomponents-react"}),`
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
`,e.jsx(a,{of:s,sourceState:"none"}),`
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
`,e.jsx(c,{})]})}function Xe(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{Xe as default};
