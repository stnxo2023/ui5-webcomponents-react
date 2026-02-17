import{j as e}from"./iframe-DFi9UtKE.js";import{useMDXComponents as o}from"./index-PehDt-ON.js";import{I as l,F as r}from"./CommandsAndQueries-BgA_2y6P.js";import{M as a,C as c}from"./blocks-BZiPfi5R.js";import"./Tag-DyC770Wv.js";import"./index-DRo_4cI_.js";import"./copy-BtJq9lRd.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BH6xSE6g.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BlgbWjqC.js";import"./index-mz_qMVbD.js";import"./index-Bj7syw50.js";import"./Link-CKaRASof.js";import"./index-hjE9MH8j.js";import"./index-CgUZ8Jrz.js";import"./index-C91-M52B.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-QdlayBuh.js";import"./addCustomCSSWithScoping-C-Twfd1m.js";import"./index-BVIBsTLM.js";import"./information-C2fQMAhn.js";import"./sys-enter-2-C-DHMglr.js";import"./alert-Do2a0hn1.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DGUruPrM.js";import"./delete-DnjgQmJs.js";import"./settings-tQnYQhED.js";import"./NoData-Cvn2BBQC.js";import"./IllustratedMessage-CWKDl7hN.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CnHwZ3TE.js";import"./index-_Ri4cZaB.js";import"./index-BuaB4iYp.js";import"./slim-arrow-down-BnAZSFTD.js";import"./Input-CnIKzm01.js";import"./ResponsivePopoverCommon.css-CTa7xzuq.js";import"./ValueStateMessage.css-CK9Tsjr5.js";import"./Suggestions.css-CKUgORQE.js";import"./ListBoxItemGroupTemplate-CwYyaj2Y.js";import"./ComboBoxItemGroup-ap13ELrg.js";import"./ListItemBaseTemplate-DLVnCBxv.js";import"./Token-BvOFy9vC.js";import"./ScrollEnablement-CctDMVQ2.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cocq2_my.js";import"./ToggleButton-B3acrASm.js";import"./SuggestionItem-BtRBHRZ3.js";import"./index-CzNkF4P7.js";import"./Option-CJrXuDru.js";import"./index-CgtODsdA.js";import"./SegmentedButton-C3Uwsy12.js";import"./index-CLrfWu0q.js";import"./Select-B3hk7S5M.js";import"./InvisibleMessage-Bx6P5Mxd.js";import"./slim-arrow-down-BaBVBPPF.js";import"./index-ClKsX4f6.js";import"./index-CnYJlaUy.js";import"./index-Bw-4XbFY.js";import"./index-Bl4FUUb0.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ZLAIgZY3.js";import"./group-2-CfKb4jtJ.js";import"./sort-descending-BiejtERO.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BKsuI6BF.js";import"./utils-ZPoy0Ic4.js";import"./index-CsP7hgLG.js";import"./index-Bl1zXw1e.js";import"./index-BTA4KG7R.js";import"./navigation-down-arrow-CqGMawe5.js";import"./navigation-right-arrow-BdCckcZj.js";import"./navigation-right-arrow-B3mRpH6q.js";import"./useCurrentTheme-DNJ4oWB7.js";import"./index-Bsk6bWqP.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CgMIeq-k.js";import"./paper-plane-D5b3pIt_.js";import"./index-DafdWF5y.js";import"./less-CCPciuoh.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
