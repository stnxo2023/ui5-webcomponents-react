import{j as e}from"./iframe-BdGmxA0i.js";import{useMDXComponents as o}from"./index-C_zfuZcr.js";import{I as r}from"./CommandsAndQueries-DPqSrKc7.js";import{M as l,C as a}from"./blocks-CvQb1zUF.js";import"./Tag-BZN3xK1V.js";import"./index-BNIHl_tg.js";import"./copy-uDMRF36v.js";import{F as c}from"./Footer-Do6hcOrL.js";import"./PageNotFound-CY9FLBWR.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-B8ML7JX1.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CQvrABtJ.js";import"./index-DweznLO9.js";import"./index-C9pyPHSx.js";import"./index-DNgHnsc0.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-XhNISppA.js";import"./addCustomCSSWithScoping-CVesT24B.js";import"./index-DZ9SK43g.js";import"./index-B2qLcI40.js";import"./index-rE0jwRpd.js";import"./information-CGm_Wlhu.js";import"./sys-enter-2-ckHTVyHn.js";import"./alert-iCvnQY_C.js";import"./index-BdC4vT1G.js";import"./Illustrations-D5W8On_q.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ChIqXbcW.js";import"./delete-CTJk0IsQ.js";import"./settings-1l_UOAce.js";import"./NoData-Djl2JIk3.js";import"./NoFilterResults-DFkoAIau.js";import"./index-CfsWq6ap.js";import"./IllustratedMessage-BtAlBlE6.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-Dwbmm60M.js";import"./Input-C_M3LRG8.js";import"./ResponsivePopoverCommon.css-EBeNizWh.js";import"./ValueStateMessage.css-B4ysw5cr.js";import"./Suggestions.css-Dvu4kY1O.js";import"./ListBoxItemGroupTemplate-BOvb3JSv.js";import"./ComboBoxItemGroup-CGG0HGrS.js";import"./ListItemBaseTemplate-DmKob6Ye.js";import"./Token-YSryXaLU.js";import"./ScrollEnablement-Bx9yVDLi.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BDBEqEtu.js";import"./ToggleButton-J8mmndXN.js";import"./multiselect-all-Ly4Q_TyH.js";import"./SuggestionItem-Dym0n5j2.js";import"./index-CevOS8v4.js";import"./Option-DvimpLtc.js";import"./index-CGPpfces.js";import"./SegmentedButton-FdRkB1du.js";import"./index-Da-1EDwC.js";import"./Select-D5Nsgp52.js";import"./InvisibleMessage-moo-UDrP.js";import"./index-BE8W69-D.js";import"./index-DsUL3khw.js";import"./index-d6_tfAg9.js";import"./index-D5VX-3sq.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B4cujpVB.js";import"./group-2-Dkh6CIdZ.js";import"./sort-descending-BBVHoidp.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DrhR_CYD.js";import"./utils-DG7feN6u.js";import"./index-CGXbN4gw.js";import"./index-Bh3ez5ii.js";import"./index-CUQ38Ums.js";import"./navigation-down-arrow-BSMjHANS.js";import"./navigation-right-arrow-8rES_Lpx.js";import"./navigation-right-arrow-DLSm8pNj.js";import"./useCurrentTheme-DDtUANJS.js";import"./index-MAbIbvmC.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C8ybJVgJ.js";import"./paper-plane-Bst4p13C.js";import"./index-Cf38JKFu.js";import"./less-Bq49TC9A.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
