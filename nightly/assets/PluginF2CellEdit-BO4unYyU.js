import{j as e}from"./iframe-DpyqAETS.js";import{useMDXComponents as o}from"./index-DokE1aPE.js";import{I as r}from"./CommandsAndQueries-DgdmOsaT.js";import{M as l,C as a}from"./blocks-PLzKwXGQ.js";import"./Tag-DKNf6AcV.js";import"./index-TIDQzFF1.js";import"./copy-Bdya3dKB.js";import{F as c}from"./Footer-B_kIXa7O.js";import"./PageNotFound-BN4cbSeC.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BDoJsWpF.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-Cygi3wLY.js";import"./index-B67fvT3R.js";import"./index-CnomjaBB.js";import"./index-I3HyyzwM.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DP11CHq4.js";import"./addCustomCSSWithScoping-Co67Uzxh.js";import"./index-B0Hg115V.js";import"./index-CiKduFiJ.js";import"./index-I3Bq7JP2.js";import"./information-99NDnz_N.js";import"./sys-enter-2-CaEWuWxX.js";import"./alert-L-6hDox8.js";import"./index-B8-2K5Ni.js";import"./Illustrations-Beru7cxi.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CaaaVZQA.js";import"./delete-BXUGnDKm.js";import"./settings-DrzuGCHX.js";import"./NoData-gBBZ_Wbs.js";import"./NoFilterResults-BxXVfs7J.js";import"./index-BNg5WP_7.js";import"./IllustratedMessage-QqLt7tsj.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-D_Bv5Pk4.js";import"./Input-WF7CT_uR.js";import"./ResponsivePopoverCommon.css-CMqfjYXO.js";import"./ValueStateMessage.css-Wupv_jGJ.js";import"./Suggestions.css-BVFzvbLq.js";import"./ListBoxItemGroupTemplate-dNP8oHGP.js";import"./ComboBoxItemGroup-C1_dhnPF.js";import"./ListItemBaseTemplate-Be9h2s8y.js";import"./Token-BEFEGWrk.js";import"./ScrollEnablement-cQ2m6PIi.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D5IRqJ4A.js";import"./ToggleButton-Dya_F0pD.js";import"./multiselect-all-0_IwdKza.js";import"./SuggestionItem-DeMwyYWk.js";import"./index-BnNEaiFq.js";import"./Option-BYL0UpNA.js";import"./index-k7lg1KnU.js";import"./SegmentedButton-BpDQdB-L.js";import"./index-DX7R1uAP.js";import"./Select-MzTCuHdz.js";import"./InvisibleMessage-dvUkP_Hh.js";import"./index-CCEqKFXe.js";import"./index-CKTtQJTk.js";import"./index-CZG3dmap.js";import"./index-Be45WFmK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CS1Hwtsk.js";import"./group-2-CAz_Zq6U.js";import"./sort-descending-DIRUxiNv.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-ByG9JROg.js";import"./utils-GKCuX9hZ.js";import"./index-DcZIfOhg.js";import"./index-pZ-yDWgG.js";import"./index-CrY6jiry.js";import"./navigation-down-arrow-UHkP0V-Q.js";import"./navigation-right-arrow-WWFFQj9u.js";import"./navigation-right-arrow-CDfDe0dR.js";import"./useCurrentTheme-CPbkxv-P.js";import"./index-Uncwm3va.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-kZVBuGuq.js";import"./paper-plane-chkECRdy.js";import"./index-CXUGpKft.js";import"./less-QAdmSHz4.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
