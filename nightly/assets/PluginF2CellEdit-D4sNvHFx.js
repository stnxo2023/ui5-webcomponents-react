import{j as e}from"./iframe-dhwXAt1u.js";import{useMDXComponents as o}from"./index-DImPBCtJ.js";import{I as l,F as r}from"./CommandsAndQueries-BiJh2_dH.js";import{M as a,C as c}from"./blocks-CTyxDY6f.js";import"./Tag-BG2XjNSs.js";import"./index-B1ZC6OTg.js";import"./copy-WVaPICqB.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-NobErNiv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DEgKjCYL.js";import"./index-C7W-OT1T.js";import"./index-3eryvK5U.js";import"./Link-Cd_dPy_Q.js";import"./index-CAgLAQbh.js";import"./index-T43jgYfn.js";import"./index-CdiB3Os4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BR_2w1_J.js";import"./addCustomCSSWithScoping-cc9WpAMd.js";import"./index-BPFGYJtx.js";import"./information-hzaD6T-d.js";import"./sys-enter-2-B2YAXpf0.js";import"./alert-DeSP_HIc.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BQJ9_hXc.js";import"./delete-ColCegI9.js";import"./settings-BKxUXi_G.js";import"./NoData-DE4p_qfr.js";import"./IllustratedMessage-IVjS-cFc.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-BYHaslJ3.js";import"./index-BdKfj6BP.js";import"./index-Bo0SF_w8.js";import"./slim-arrow-down-RFEatmWJ.js";import"./Input-Dhh001VP.js";import"./ResponsivePopoverCommon.css-byQMK4lk.js";import"./ValueStateMessage.css-7UGm8ZKL.js";import"./Suggestions.css-ChcbQr92.js";import"./ListBoxItemGroupTemplate-6OIAemZH.js";import"./ComboBoxItemGroup-BfFjklB8.js";import"./ListItemBaseTemplate-D31ELJez.js";import"./Token-9QLbAU5H.js";import"./ScrollEnablement-Bjuu67w6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BwVKYcla.js";import"./ToggleButton-D60jws_T.js";import"./SuggestionItem-BY0B1lvJ.js";import"./index-DFsd0zaO.js";import"./Option-Blnne7RQ.js";import"./index-DdMJqEp5.js";import"./SegmentedButton-DUCC8xz-.js";import"./index-hsE4BZb-.js";import"./Select-VK7jMl2Q.js";import"./InvisibleMessage-aNho_UJn.js";import"./slim-arrow-down-CHcSrWyO.js";import"./index-_A95DrSO.js";import"./index-xhEmKt2i.js";import"./index-C-LnOqtr.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D5RqGlQv.js";import"./group-2-CYR4pn1M.js";import"./sort-descending-Dqk7kt1w.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DFpmbe8i.js";import"./utils-bFJ73DdM.js";import"./index-B4TolNq1.js";import"./index-kxgSnLRw.js";import"./index-Dae02is2.js";import"./navigation-down-arrow-zUd6dVMN.js";import"./navigation-right-arrow-DHvkUpoR.js";import"./navigation-right-arrow-5cHWwAFo.js";import"./useCurrentTheme-Ecq0NIxs.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DuHZ_byj.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-xQaBj4C2.js";import"./paper-plane-BQm487K_.js";import"./index-CEgJEyfN.js";import"./less-DyOzkEyI.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
