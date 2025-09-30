import{j as e}from"./iframe-sceg0YFv.js";import{useMDXComponents as o}from"./index-Dd71zBof.js";import{I as r,F as l}from"./CommandsAndQueries-DKneq4GY.js";import{M as a,C as c}from"./blocks-DYuUqipq.js";import"./Tag-CeuATfsT.js";import"./index-D3F4cwyn.js";import"./copy-BMdV5CCm.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-D9V3hbO9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-8sMjurJr.js";import"./index-DSENQiVR.js";import"./index-F95KXh_C.js";import"./Link-DWrZ8VdK.js";import"./index-Bk8MfuNW.js";import"./index-CEhCU38B.js";import"./index-DAUv-Nz3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BrlG2Z_i.js";import"./addCustomCSSWithScoping-CcKa_wrj.js";import"./index-B8FjapMT.js";import"./information-BKrgGcb8.js";import"./sys-enter-2-t67Ok8iZ.js";import"./alert-DGYqNpWm.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-pBbQnN3Z.js";import"./delete-BcYS3_de.js";import"./settings-DrHuTXnI.js";import"./NoData-BwUWak2R.js";import"./IllustratedMessage-CcQlEZMH.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-Va26yAXy.js";import"./index-C4VdLOMW.js";import"./slim-arrow-down-B5pvNBWL.js";import"./Input-BzfDni2m.js";import"./ResponsivePopoverCommon.css-nC5XMOBp.js";import"./ValueStateMessage.css-DoUgf-5j.js";import"./Suggestions.css-BM83gU06.js";import"./ListBoxItemGroupTemplate-BqRj3VE-.js";import"./ComboBoxItemGroup-Cs6EfPox.js";import"./ListItemBaseTemplate-DRhEz-gw.js";import"./Token-CMcoBKOf.js";import"./ScrollEnablement-D3zh3Kdj.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B6k3txAq.js";import"./ToggleButton-DvFeI1Lt.js";import"./SuggestionItem-pUR3Pu7g.js";import"./index-DhvsTyd-.js";import"./Option-g5dMk_Dv.js";import"./index-M3RgBHzH.js";import"./SegmentedButton-u8O6wtdn.js";import"./index-CfnPZ09d.js";import"./Select-ByBsloVO.js";import"./InvisibleMessage-BWbsBg6p.js";import"./slim-arrow-down-BMGSx_7g.js";import"./index-NnSPlH_p.js";import"./index-CZeNbB2P.js";import"./IconDesign-DXd8PPVF.js";import"./filter-zkm8V6wo.js";import"./group-2-C-nKwgK2.js";import"./sort-descending-DgIX2NPP.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B8uJhRMm.js";import"./utils-DWNV0P4_.js";import"./index-BbsMwmmG.js";import"./index-CPOk0n0E.js";import"./index-LxsB8pJ3.js";import"./navigation-down-arrow-DeNM6o9T.js";import"./navigation-right-arrow-B8ciO61d.js";import"./navigation-right-arrow-Cpbh-nxP.js";import"./useCurrentTheme-BACbWtxM.js";import"./IndicationColor-DVw-fSM_.js";import"./index-PhsavknA.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-2UKl6MPc.js";import"./paper-plane-B69Ziwxr.js";import"./index-Dnv3XQPA.js";import"./less-Byh4l9lP.js";import"./index-DPuz9km0.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
`,e.jsx(l,{})]})}function Le(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{Le as default};
