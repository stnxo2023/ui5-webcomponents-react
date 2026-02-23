import{j as e}from"./iframe-4UX9zVtN.js";import{useMDXComponents as o}from"./index-BBCkKRvO.js";import{I as l,F as r}from"./CommandsAndQueries-DudJ8lrA.js";import{M as a,C as c}from"./blocks-BFxvjNAv.js";import"./Tag-B3FvlNgH.js";import"./index-BXHIuf-D.js";import"./copy-Cyt5Uff4.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BeOdInDA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-S5ZW1bjA.js";import"./index-CXoNptYK.js";import"./index-DctXwSyI.js";import"./Link-fA-SeXAj.js";import"./index-C3GdV3vE.js";import"./index-De4g9Au_.js";import"./index-DnrxmRVZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-rUq1jEzN.js";import"./addCustomCSSWithScoping-DCDZu8w8.js";import"./index-oGM8b9YF.js";import"./information-WWzzOZjz.js";import"./sys-enter-2-CaiZT1Nw.js";import"./alert-G68zeMJP.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BFQW1jvL.js";import"./delete-CPKq1-iv.js";import"./settings-BeAaSNnX.js";import"./NoData-CU3h5MDZ.js";import"./IllustratedMessage-gFd3OmYv.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-ZSvcbIjO.js";import"./index-QNs_CVCy.js";import"./index-BhSpDM5B.js";import"./slim-arrow-down-BheOSzby.js";import"./Input-CtYIRUY4.js";import"./ResponsivePopoverCommon.css-D8f7fYw-.js";import"./ValueStateMessage.css-BaAl7IoW.js";import"./Suggestions.css-BO3NfIZR.js";import"./ListBoxItemGroupTemplate-DmypcSPh.js";import"./ComboBoxItemGroup-tnGGzqCQ.js";import"./ListItemBaseTemplate-qK1e_MJK.js";import"./Token-BUnyf5To.js";import"./ScrollEnablement-0B710n07.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CK8Tux93.js";import"./ToggleButton-CN__x2LS.js";import"./SuggestionItem-ChOawdH9.js";import"./index-Bsid_d0h.js";import"./Option-BzI4AWst.js";import"./index-BcgU9rpx.js";import"./SegmentedButton-BNYfI6jW.js";import"./index-BBRP-eLa.js";import"./Select-BflInANe.js";import"./InvisibleMessage-D3fa-sIT.js";import"./slim-arrow-down-6GOcwo6b.js";import"./index-Bjl35UV4.js";import"./index-CodV0zr0.js";import"./index-Dc1dnONs.js";import"./index-CPXil7Dy.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BV09TBnF.js";import"./group-2-tHCPmnSd.js";import"./sort-descending-6ECAK0fQ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D7pVLkOw.js";import"./utils-BL-JB8rb.js";import"./index-18NioiXD.js";import"./index-CTTeQqwG.js";import"./index-B9dyUeRS.js";import"./navigation-down-arrow-BFC6z2qR.js";import"./navigation-right-arrow-D7uahuKZ.js";import"./navigation-right-arrow-s6C2P9I8.js";import"./useCurrentTheme-9YePhqUt.js";import"./index-BFekAKgk.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Bs2Ad4ZO.js";import"./paper-plane-DkaqpPYC.js";import"./index-DiVVQKHa.js";import"./less-jLdy7f8K.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
