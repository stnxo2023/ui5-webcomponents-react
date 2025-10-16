import{j as e}from"./iframe-DLLHCOr5.js";import{useMDXComponents as o}from"./index-DJhuuP5S.js";import{I as l,F as r}from"./CommandsAndQueries-CaYUL-bi.js";import{M as a,C as c}from"./blocks-D_qB0yom.js";import"./Tag-CGNpKNva.js";import"./index-Cv7FhAKP.js";import"./copy-Cys4niF0.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-C_Xeoikx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DWbKcn7h.js";import"./index-Da6fGSa9.js";import"./index-DrM1gAbM.js";import"./Link-8v74zIQt.js";import"./index-A4gWreS6.js";import"./index-CpOm_QTG.js";import"./index-C8Oz3tPU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DI75F9lq.js";import"./addCustomCSSWithScoping-B4YqD5EP.js";import"./index-CfRl_je5.js";import"./information-CmFfgInF.js";import"./sys-enter-2-DHyR85OV.js";import"./alert-CdfvMLA2.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dussxg8w.js";import"./delete-sg9kZ7wW.js";import"./settings-DMO8138H.js";import"./NoData-CNlEMyLx.js";import"./IllustratedMessage-CvqifGlG.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DrzNpyj0.js";import"./index-Bwzn6FzT.js";import"./index-BvVGqagu.js";import"./slim-arrow-down-CdVgRYVm.js";import"./Input-Dujkp-iG.js";import"./ResponsivePopoverCommon.css-BSzQP8E5.js";import"./ValueStateMessage.css-RpMFN1vW.js";import"./Suggestions.css-DD57I6JF.js";import"./ListBoxItemGroupTemplate-B8PxB8_d.js";import"./ComboBoxItemGroup-CpB2o6WI.js";import"./ListItemBaseTemplate-CH4UuuJP.js";import"./Token-Bbru9m6C.js";import"./ScrollEnablement-Dc6bPMsH.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CNuJB7qv.js";import"./ToggleButton-BvQG1Cyr.js";import"./SuggestionItem-CSPitdTc.js";import"./index-Bi8_wr8a.js";import"./Option-DP4TAxPx.js";import"./index-DgfU8C4H.js";import"./SegmentedButton-Cxyiwfcn.js";import"./index-BLApOYZ_.js";import"./Select-BcMsd1Hx.js";import"./InvisibleMessage-D48crmcJ.js";import"./slim-arrow-down-WuQVzVSs.js";import"./index-WosK8S_T.js";import"./index-D46dhIkG.js";import"./index-C58XlVcT.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BIBokY0Z.js";import"./group-2-COjXW71M.js";import"./sort-descending-v_uWiTl6.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-lil2fbr_.js";import"./utils-DVYbWfL1.js";import"./index-BSuhLTnR.js";import"./index-CHwyvDxc.js";import"./index-pyj4fbNH.js";import"./navigation-down-arrow-D-443grP.js";import"./navigation-right-arrow-DaMq1CEM.js";import"./navigation-right-arrow-jZ7_AnUt.js";import"./useCurrentTheme-Bw6oliQZ.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BHpA8ui8.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DDSow5dA.js";import"./paper-plane-sDJVh0wP.js";import"./index-CiP8FaDh.js";import"./less-DJz-Rwf2.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
