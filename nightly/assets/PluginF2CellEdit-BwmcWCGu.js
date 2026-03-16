import{j as e}from"./iframe-B7xuoxGk.js";import{useMDXComponents as o}from"./index-D6aSzRGN.js";import{I as r}from"./CommandsAndQueries-DKcdQNlV.js";import{M as l,C as a}from"./blocks-DZ0Vo0vM.js";import"./Tag-CtaADOFc.js";import"./index-BzZxDoNe.js";import"./copy-h55QeB4j.js";import{F as c}from"./Footer--uD18Qhj.js";import"./PageNotFound-DygNwEfd.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-_V-bjxAy.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-YW7Wqeu4.js";import"./index-wxY5XpWW.js";import"./index-D_A15Zs0.js";import"./index-Bimscpqo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CZFeJY_e.js";import"./addCustomCSSWithScoping-1uVBaclk.js";import"./index-BXMXe_Dr.js";import"./index-B_T64Hn2.js";import"./index-DmGPBpXp.js";import"./information-BW_uN0gP.js";import"./sys-enter-2-BoXj1fRr.js";import"./alert-Cl-xvHRs.js";import"./index-B7nFcBs2.js";import"./Illustrations-w0lfALHe.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BMY85eGk.js";import"./delete-BZYoynTQ.js";import"./settings-BT8RMABZ.js";import"./NoData-DCXoweTu.js";import"./NoFilterResults-CTa6GhkU.js";import"./index-Btar0bdN.js";import"./IllustratedMessage-BMgQN3i0.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-CmLLJCw5.js";import"./Input-eFb_xp2M.js";import"./ResponsivePopoverCommon.css-CyKUqKvQ.js";import"./ValueStateMessage.css-Df99lQxg.js";import"./Suggestions.css-CBArPh6-.js";import"./ListBoxItemGroupTemplate-Ck1L8wBF.js";import"./ComboBoxItemGroup-DBiEhs-6.js";import"./ListItemBaseTemplate-CdxCA_p4.js";import"./Token-7wluFBu-.js";import"./ScrollEnablement-GVTwnxGd.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CqEt74g6.js";import"./ToggleButton-B0icUcy1.js";import"./multiselect-all-D1l0l24Z.js";import"./SuggestionItem-CjJX54Hb.js";import"./index-Br4lwsUM.js";import"./Option-D2JWHiJc.js";import"./index-V-jrGxWl.js";import"./SegmentedButton-DtXKlJOH.js";import"./index-DT47A1KM.js";import"./Select--WbYe-2b.js";import"./InvisibleMessage-eHM0y0K2.js";import"./index-BI9cMLrH.js";import"./index-vwowG4sE.js";import"./index-moYCi4PG.js";import"./index-uphkaPTP.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D9JfcWH8.js";import"./group-2-CCjKuAg3.js";import"./sort-descending-CqVtGwCo.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DFpdt6Cf.js";import"./utils-tHXepICV.js";import"./index-DFh3r5xg.js";import"./index-CzWHYSkB.js";import"./index-CiGgrWQa.js";import"./navigation-down-arrow-DcCyevym.js";import"./navigation-right-arrow-tle3a_t5.js";import"./navigation-right-arrow-BmYFt5sl.js";import"./useCurrentTheme-D-RTnzmW.js";import"./index-8jzzOxCB.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D8gGRGzd.js";import"./paper-plane-BgRj4P-o.js";import"./index-RI2zEDO5.js";import"./less-Cwfab_yz.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
