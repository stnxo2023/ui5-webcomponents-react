import{j as e}from"./iframe-Cv2DxGxx.js";import{useMDXComponents as o}from"./index-DJcSDbNR.js";import{I as l,F as r}from"./CommandsAndQueries-bS4Yf-ej.js";import{M as a,C as c}from"./blocks-ugoI9X9t.js";import"./Tag-Coz7RYuP.js";import"./index-D_TtcnwQ.js";import"./copy-CqIWY1yr.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Bzu6OElq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-mHVz6rF3.js";import"./index-CInTOaEh.js";import"./index-B09eBGHl.js";import"./Link-BduAs2w5.js";import"./index-DUYUZ9D7.js";import"./index-Gpf6Q-KM.js";import"./index-BniFx0GW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-0lPpvscI.js";import"./addCustomCSSWithScoping-Bw7ry9Qy.js";import"./index-C0_2Dkpw.js";import"./information-DWd1dkKI.js";import"./sys-enter-2-DDyu9UHI.js";import"./alert-3r0WRbjT.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CaCjLhwG.js";import"./delete-DA30Vb_3.js";import"./settings-DPcZjvrc.js";import"./NoData-CkwFywRp.js";import"./IllustratedMessage-CAb2xgRr.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-CpZwDGYv.js";import"./index-Ba-Eubsl.js";import"./index-CdW_heB4.js";import"./slim-arrow-down-BTvRdwWq.js";import"./Input-C1lqpYg3.js";import"./ResponsivePopoverCommon.css-D3KSXKvs.js";import"./ValueStateMessage.css-CZDTXdiA.js";import"./Suggestions.css-Cw7wY2ht.js";import"./ListBoxItemGroupTemplate-Waem1Q61.js";import"./ComboBoxItemGroup-DSnMrpI-.js";import"./ListItemBaseTemplate-CXI8xke2.js";import"./Token-CoSFdHdR.js";import"./ScrollEnablement-D_FfjNHJ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C1pGRTma.js";import"./ToggleButton-mckNH_TC.js";import"./SuggestionItem-BQNyHhBv.js";import"./index-Bo2NWm1F.js";import"./Option-BuJ-tVWb.js";import"./index-DIyggbSr.js";import"./SegmentedButton-75RA8p3W.js";import"./index-FkfgVmhN.js";import"./Select-944-A8Kx.js";import"./InvisibleMessage-DWFrz2m3.js";import"./slim-arrow-down-sehS3JFD.js";import"./index-V4LMPnG-.js";import"./index-BFYwVfb0.js";import"./index-BCQ2rtHe.js";import"./IconDesign-DXd8PPVF.js";import"./filter-4kPRahty.js";import"./group-2-Bg2BOQ3d.js";import"./sort-descending-B6JANGfX.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D4tiooQx.js";import"./utils-DdfwhCCt.js";import"./index-WPe-KT9J.js";import"./index-Br9lY8SV.js";import"./index-m0ZtgUtd.js";import"./navigation-down-arrow-0n0msI0k.js";import"./navigation-right-arrow-DrgYv11d.js";import"./navigation-right-arrow-D__Tv4vy.js";import"./useCurrentTheme-BaNC1vQQ.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D7LRyA5h.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Hq2jb4tD.js";import"./paper-plane-DSa5GeV2.js";import"./index-CU0aCIvN.js";import"./less-C0w2VPH4.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
