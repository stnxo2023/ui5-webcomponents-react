import{j as e}from"./iframe-Di0CnA8S.js";import{useMDXComponents as o}from"./index-D1yNQJed.js";import{I as l,F as r}from"./CommandsAndQueries-zSui8mFJ.js";import{M as a,C as c}from"./blocks-CQfV0luP.js";import"./Tag-YM6QkIty.js";import"./index-Cv974V6E.js";import"./copy-BnyBSvmF.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CaMp0239.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bkm6KJyR.js";import"./index-FrAwh-uI.js";import"./index-CX_Pkcfg.js";import"./Link-WIuadCnC.js";import"./index-Bms_gXSs.js";import"./index-DEJJ6ZVN.js";import"./index-DChMCwxZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BL09SrHJ.js";import"./addCustomCSSWithScoping-D9ak18Ev.js";import"./index-C4vcrMlE.js";import"./information-DzISr5a2.js";import"./sys-enter-2-Vd3zyEtx.js";import"./alert-DaK0qpmR.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BkjZN1m5.js";import"./delete-CkgveXZV.js";import"./settings-O_SqiOO8.js";import"./NoData-Cm3Sgky-.js";import"./IllustratedMessage-BkwPs3fv.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BXEHKTVt.js";import"./index-D5FQCJ2w.js";import"./index-DWNbjlf6.js";import"./slim-arrow-down-bK9T7o5_.js";import"./Input-BMxXpEmu.js";import"./ResponsivePopoverCommon.css--b7te08F.js";import"./ValueStateMessage.css-wgmiBQCU.js";import"./Suggestions.css-Bkytjk5E.js";import"./ListBoxItemGroupTemplate-DvN0aU6B.js";import"./ComboBoxItemGroup-N1tLGR-W.js";import"./ListItemBaseTemplate-0lg9M0fM.js";import"./Token-CZDcEwHC.js";import"./ScrollEnablement-DhAJ5JnK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D4_pyZ43.js";import"./ToggleButton-qVqa-FdV.js";import"./SuggestionItem-CDxntgT5.js";import"./index-XMMJdMJi.js";import"./Option-DNM61xVD.js";import"./index-nh3D4sX1.js";import"./SegmentedButton-DLLN3073.js";import"./index-D4LgD8pt.js";import"./Select-CSvcStkQ.js";import"./InvisibleMessage-CA5l1OrC.js";import"./slim-arrow-down-BZ32OfT-.js";import"./index-jyrIbm7X.js";import"./index-jLe1V_0t.js";import"./index-BCKZ26pG.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CSxtsdcS.js";import"./group-2-D_KQdcyc.js";import"./sort-descending-CVK6o8y6.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Cn-IKnzn.js";import"./utils-CA_s0xCU.js";import"./index-Dj5ZK7Jm.js";import"./index-SGAGbvBy.js";import"./index-BY5Nj2YC.js";import"./navigation-down-arrow-Cn2Pb-ac.js";import"./navigation-right-arrow-BM8i-tol.js";import"./navigation-right-arrow-qgiVcRku.js";import"./useCurrentTheme-DDCiNxpb.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CdwOc6CH.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DMJx-Dqa.js";import"./paper-plane-BU5KNFmh.js";import"./index-Dtz3OPe1.js";import"./less-DIBO8ral.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
