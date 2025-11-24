import{j as e}from"./iframe-D7AtRUpE.js";import{useMDXComponents as o}from"./index-DRFX2LG8.js";import{I as l,F as r}from"./CommandsAndQueries-BtIPK2kL.js";import{M as a,C as c}from"./blocks-DtVmZnZe.js";import"./Tag-DZXgvHmp.js";import"./index-ehmuZHI1.js";import"./copy-BpQCF5oY.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-C8-IDFGy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CCJ9pFYK.js";import"./index-BGkf-dJq.js";import"./index-Dd6OnJpC.js";import"./Link-DWIR53PW.js";import"./index-CjaPk49X.js";import"./index-CH_KzusP.js";import"./index-54VAs-Li.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-RhrsIb0U.js";import"./addCustomCSSWithScoping-C2Eje0Og.js";import"./index-BWvZCzda.js";import"./information-D-fAW1gu.js";import"./sys-enter-2-DRPF_4qy.js";import"./alert-fnVpcWPE.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BecdAPGm.js";import"./delete-BIPIzrZS.js";import"./settings-DmIbC4ht.js";import"./NoData-EkhAAOIw.js";import"./IllustratedMessage-BdbwIayy.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-BlO2CkwR.js";import"./index-BxDxP0Wt.js";import"./index-zp7M-Hgb.js";import"./slim-arrow-down-DhUBKwq5.js";import"./Input-BNhpkyEe.js";import"./ResponsivePopoverCommon.css-C_ECllnd.js";import"./ValueStateMessage.css-AtrprVNc.js";import"./Suggestions.css-CrAZUaHe.js";import"./ListBoxItemGroupTemplate-DVPT-6e2.js";import"./ComboBoxItemGroup-JbQ_GC3z.js";import"./ListItemBaseTemplate-B8mCobtS.js";import"./Token-Bn9BgD8D.js";import"./ScrollEnablement-DFMfFOOU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dkffh3P6.js";import"./ToggleButton-CzxwP7cy.js";import"./SuggestionItem-BRpUqzth.js";import"./index-MmfJ-udd.js";import"./Option-GuUiDPkM.js";import"./index-CTMtFbt2.js";import"./SegmentedButton-CA3GNGc8.js";import"./index-Dfah0KCS.js";import"./Select-Uv1fBISx.js";import"./InvisibleMessage-BJQIWg2w.js";import"./slim-arrow-down-gQRYAOdn.js";import"./index-C8-WBKC9.js";import"./index-vY1U5G9O.js";import"./index-BViGaWYT.js";import"./IconDesign-DXd8PPVF.js";import"./filter-gJxBGSRQ.js";import"./group-2-B6wj3ZWV.js";import"./sort-descending-JTCNKPca.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-XI1WfX02.js";import"./utils-By-8NwbJ.js";import"./index-C0mqrK_u.js";import"./index-VhkSZqEG.js";import"./index-DyzGdEk8.js";import"./navigation-down-arrow-Cfi1KmUR.js";import"./navigation-right-arrow-CYpfcLCR.js";import"./navigation-right-arrow-Bhbe0IU9.js";import"./useCurrentTheme-a_GAr54p.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CGVcTX0I.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Ck-SQTsB.js";import"./paper-plane-QmuJkXHS.js";import"./index-DUFp6-MR.js";import"./less-CskDW-lD.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
