import{j as e}from"./iframe-D2RmpAtO.js";import{useMDXComponents as o}from"./index-DiCnj7u5.js";import{I as l,F as r}from"./CommandsAndQueries-DvQ8BP-Z.js";import{M as a,C as c}from"./blocks-B4Ev-YXh.js";import"./Tag-BWvTCWNx.js";import"./index-chYDxilS.js";import"./copy-BW6gA-qB.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-in5GCq84.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BmyeAcwI.js";import"./index-D_sGGZyZ.js";import"./index-i343fVly.js";import"./Link-BzydKqDb.js";import"./index-Cm3TMOjS.js";import"./index-BeHBKa6s.js";import"./index-B2C__dDn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-fsmSjvJs.js";import"./addCustomCSSWithScoping-BvD5X_dz.js";import"./index-BieATUAG.js";import"./information-DyTRt78C.js";import"./sys-enter-2-BwNIaTDW.js";import"./alert-DiSc05uc.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Db38Z4Pj.js";import"./delete-DXJZ50Ci.js";import"./settings-BpqXPtye.js";import"./NoData-ChGvGCJu.js";import"./IllustratedMessage-SNT48L7A.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DBajHU1V.js";import"./index-Bz7BBt1U.js";import"./index-CaYBagE_.js";import"./slim-arrow-down-BwUXjubF.js";import"./Input-0ALk-Ulf.js";import"./ResponsivePopoverCommon.css-Bu5Qc2tF.js";import"./ValueStateMessage.css-CBAbMCri.js";import"./Suggestions.css-C02nfz6y.js";import"./ListBoxItemGroupTemplate-CQ-G_Pqg.js";import"./ComboBoxItemGroup-DdwIQLIR.js";import"./ListItemBaseTemplate-DRnGHt_8.js";import"./Token-DYfjH-EW.js";import"./ScrollEnablement-Cm66ONH8.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BXwMpDTl.js";import"./ToggleButton-I7SxqJxx.js";import"./SuggestionItem-DhOTrIOf.js";import"./index-2Qoy0_XG.js";import"./Option-CMZEceos.js";import"./index-CJS4plQE.js";import"./SegmentedButton-DCg5Kbga.js";import"./index-D7uSjRf5.js";import"./Select-0CvvSnwM.js";import"./InvisibleMessage-CtMSUBcM.js";import"./slim-arrow-down-DBeujC-e.js";import"./index-b3oa9-sK.js";import"./index-B6DGWZKt.js";import"./index-BfnbleU3.js";import"./index-C_50PDoe.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DMBb2cz_.js";import"./group-2-BliQX8hG.js";import"./sort-descending-a4FwLL9N.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-owAeJ2tr.js";import"./utils-DpDD1Kik.js";import"./index-CLQQIqtQ.js";import"./index-B7nTnMBS.js";import"./index-DutVsOSq.js";import"./navigation-down-arrow-4ifYH4EI.js";import"./navigation-right-arrow-BZw6OC7t.js";import"./navigation-right-arrow-DPuDFCzF.js";import"./useCurrentTheme-DFOB5aNG.js";import"./index-B1sF1lOb.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-y3GnqRIn.js";import"./paper-plane-DyqWmJB4.js";import"./index-DuNaoNls.js";import"./less-BWoqsgqa.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
