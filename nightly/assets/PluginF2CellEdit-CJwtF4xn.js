import{j as e}from"./iframe-BXb_n64_.js";import{u as o,M as l,C as r}from"./blocks-9VP231tA.js";import{I as a}from"./CommandsAndQueries-BI-RA2OZ.js";import"./Tag-CRNARXt6.js";import"./index-BL83g4Fz.js";import"./copy-BBKTKpbi.js";import{F as c}from"./Footer-DPPwB2I6.js";import"./PageNotFound-CZrojxwO.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BKWnHpAq.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BUcKjx9R.js";import"./index-D10d9Tlr.js";import"./index-B22x7h0Z.js";import"./index-Ju3FGlVf.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Mi2Syuqb.js";import"./addCustomCSSWithScoping-F8HAuIL-.js";import"./index-BD_xT1Nj.js";import"./index-DqAHmx0d.js";import"./index-BNBy1IQK.js";import"./information-C2n1oeWx.js";import"./sys-enter-2-BNeNMeW8.js";import"./alert-DXZPI1Fp.js";import"./index-BSoVaSRp.js";import"./Illustrations-ks8TfsTU.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-wgYgfTj9.js";import"./delete-Csnjywyc.js";import"./settings-NI8fkDUM.js";import"./NoData-En3Nogfa.js";import"./NoFilterResults-Dhcwn1zt.js";import"./index-BOdF7LF9.js";import"./IllustratedMessage-Doboq85l.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-DO2GHw1V.js";import"./Input-B1pV19yo.js";import"./ResponsivePopoverCommon.css-DMiEES2t.js";import"./ValueStateMessage.css-YCjELpnO.js";import"./Suggestions.css-BZAnlsRN.js";import"./ListBoxItemGroupTemplate-5-RLXPsG.js";import"./ComboBoxItemGroup-DfJF5BDs.js";import"./ListItemBaseTemplate-CL-9zx8x.js";import"./Token-C7CCdRfL.js";import"./ScrollEnablement-CdFwVVtK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-dvvLOc5F.js";import"./ToggleButton-REMyBJsR.js";import"./multiselect-all-Ch1Qp7qR.js";import"./SuggestionItem-CuJ_PC3L.js";import"./index-COeWnEcb.js";import"./Option-DDwjJ3Kz.js";import"./index-CAhGtq2M.js";import"./SegmentedButton-Cg1f73_M.js";import"./index-Bnp975NP.js";import"./Select-DjVfX_jp.js";import"./InvisibleMessage-tI82KiTk.js";import"./index-BXr-yJYg.js";import"./index-YKbtChLI.js";import"./index-D9WU53Lw.js";import"./index-DrzieGlz.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BRQYQGhf.js";import"./group-2-DS1ObAk7.js";import"./sort-descending-Cj6QG_j1.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BGaKo2kM.js";import"./utils-B78a72Xy.js";import"./index-CEFR42mv.js";import"./index-BBdTafaa.js";import"./index-70052kQG.js";import"./navigation-down-arrow-C-XIYlAc.js";import"./navigation-right-arrow-DvOid56m.js";import"./navigation-right-arrow-b4NzmHT7.js";import"./useCurrentTheme-DoV6h_Xa.js";import"./index-BW8nkbFg.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BJ6r15BN.js";import"./paper-plane-YWK2QeBd.js";import"./index-DL4fpI_G.js";import"./less-0zzPWnhW.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
`,e.jsx(n.h1,{id:"analyticaltable-plugin-usef2celledit",children:"AnalyticalTable Plugin: useF2CellEdit"}),`
`,e.jsx(a,{moduleNames:["AnalyticalTableHooks"],packageName:"@ui5/webcomponents-react"}),`
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
`,e.jsx(r,{of:s,sourceState:"none"}),`
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
`,e.jsx(c,{})]})}function _e(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{_e as default};
