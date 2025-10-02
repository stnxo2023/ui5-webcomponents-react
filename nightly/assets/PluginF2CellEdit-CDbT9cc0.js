import{j as e}from"./iframe-B-pj6tCi.js";import{useMDXComponents as o}from"./index-CV4vE3wQ.js";import{I as r,F as l}from"./CommandsAndQueries-D5MjQxKD.js";import{M as a,C as c}from"./blocks-HpriUj6L.js";import"./Tag-BGSRXwU9.js";import"./index-BjTnndjj.js";import"./copy-DztVyiyp.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BK8uysVc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C-xz_U36.js";import"./index-CBj2QVaO.js";import"./index-BuYTxKvQ.js";import"./Link-C2AEvOhf.js";import"./index-BJS1VYKy.js";import"./index-C-cxTaDk.js";import"./index-etFlaHh7.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-zIVJXLqJ.js";import"./addCustomCSSWithScoping-NTHEVFVs.js";import"./index-BOWgSpCi.js";import"./information-D4Uxy2_-.js";import"./sys-enter-2-dO_KPcSs.js";import"./alert-DoolSfaJ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CXj0uEXT.js";import"./delete-BnYHOY2E.js";import"./settings-uSbSIQHU.js";import"./NoData-DMPDFl_l.js";import"./IllustratedMessage-C4cgVVAn.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-1DtyXPj6.js";import"./index-DkYSANwf.js";import"./slim-arrow-down-26t7D4j9.js";import"./Input-DmrlR0kq.js";import"./ResponsivePopoverCommon.css-CE7mr_pS.js";import"./ValueStateMessage.css-tXcATjqT.js";import"./Suggestions.css-CniPwVQQ.js";import"./ListBoxItemGroupTemplate-BFTUBHkW.js";import"./ComboBoxItemGroup-CkQyHkRa.js";import"./ListItemBaseTemplate-Cci8iryR.js";import"./Token-CxMiOAAC.js";import"./ScrollEnablement-D-n-HsWC.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DZ46rijL.js";import"./ToggleButton-4_Ru-zex.js";import"./SuggestionItem-BQ13UCwK.js";import"./index-ByOJ1YLH.js";import"./Option-CaNpJRmR.js";import"./index-DtsHJXJf.js";import"./SegmentedButton-B14_njt4.js";import"./index-CoWsLfrh.js";import"./Select-DbUQ6bw8.js";import"./InvisibleMessage-QwxdDQeA.js";import"./slim-arrow-down-BOPKijzV.js";import"./index-DJqVwyD9.js";import"./index-BQ49BgDg.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bi23S08g.js";import"./group-2-Cm9rVH12.js";import"./sort-descending-Dj82RQGa.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C_rwdTta.js";import"./utils-dtTM_TEW.js";import"./index-B_v9zx4p.js";import"./index-CJOQ4d67.js";import"./index-CC2eGnfy.js";import"./navigation-down-arrow-CpReOOXl.js";import"./navigation-right-arrow-DLC8Xg5V.js";import"./navigation-right-arrow-RgTlgqvQ.js";import"./useCurrentTheme-BwLBQ8nO.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BaaVPMC7.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-wViExLAn.js";import"./paper-plane-Bt6zz62V.js";import"./index-Dcyd7m_C.js";import"./less-BTlYxKnD.js";import"./index-C3ng40gn.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
