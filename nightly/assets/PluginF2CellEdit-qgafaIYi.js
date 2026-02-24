import{j as e}from"./iframe-QhtzJj2F.js";import{useMDXComponents as o}from"./index-B3k8-Qk3.js";import{I as l,F as r}from"./CommandsAndQueries-CNzXbMAv.js";import{M as a,C as c}from"./blocks-DDXzLSfl.js";import"./Tag-CoHKtk39.js";import"./index-xaayqokA.js";import"./copy-CTybEZjn.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-D1l57mWN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BrUnaB-V.js";import"./index-CitIem69.js";import"./index-CiXnBbg7.js";import"./Link-Dwkzs0Lw.js";import"./index-DIdyzBPI.js";import"./index-DFHNTg_F.js";import"./index-D3ZVhFJ7.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ltT42hBg.js";import"./addCustomCSSWithScoping-BX9baLRL.js";import"./index-Dg_bnA2j.js";import"./information-LovaJps-.js";import"./sys-enter-2-BHgG_M7J.js";import"./alert-CuMg9P4f.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CNpHgrLb.js";import"./delete-BaT0QUP6.js";import"./settings-uhyiirG0.js";import"./NoData-CkfOfgCO.js";import"./IllustratedMessage-CV4N09cG.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-GNa2en7q.js";import"./index-CN13WjEC.js";import"./index-KbEvRCiP.js";import"./slim-arrow-down-xCHM9F0i.js";import"./Input-DTQqZq-A.js";import"./ResponsivePopoverCommon.css-piC5h4jL.js";import"./ValueStateMessage.css-DBagYbRC.js";import"./Suggestions.css-CejvJKBZ.js";import"./ListBoxItemGroupTemplate-DepFnNxx.js";import"./ComboBoxItemGroup-D38Wr8qS.js";import"./ListItemBaseTemplate-Cos5K4ap.js";import"./Token-Bgmtsg6b.js";import"./ScrollEnablement-DtNx2cEd.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CQNcnXqt.js";import"./ToggleButton-DyuD2XUy.js";import"./SuggestionItem-BtJ4t_fT.js";import"./index-BhyD8HLz.js";import"./Option-DlUUMMtd.js";import"./index-M2h8-I4o.js";import"./SegmentedButton-ZCdQ95nb.js";import"./index-CxE_8jTO.js";import"./Select-pjdp6Rwf.js";import"./InvisibleMessage-BRwaHpiH.js";import"./slim-arrow-down-gvx2dpNQ.js";import"./index-DcsO_iRE.js";import"./index-BpM7KJ_2.js";import"./index-BID1hoZg.js";import"./index-B1HjRcua.js";import"./IconDesign-DXd8PPVF.js";import"./filter-IsgdBqo4.js";import"./group-2-D9cCDLqP.js";import"./sort-descending-DuSbLhoV.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Ss9rnYj6.js";import"./utils-erb1VNk7.js";import"./index-Cl6iRk1J.js";import"./index--_SNBdoM.js";import"./index-CBrrpGGF.js";import"./navigation-down-arrow-D-Z8F_4d.js";import"./navigation-right-arrow-yCklUeEk.js";import"./navigation-right-arrow-dDT8HKVJ.js";import"./useCurrentTheme-DmGtj7Uk.js";import"./index-BwddXk7L.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CSPv66kJ.js";import"./paper-plane-q_I3mXRA.js";import"./index-B_hiW_oO.js";import"./less-KsTjEaWT.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
