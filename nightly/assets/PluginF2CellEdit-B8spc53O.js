import{j as e}from"./iframe-CGE6jX6t.js";import{useMDXComponents as o}from"./index-CnlF4PpM.js";import{I as r}from"./CommandsAndQueries-D_JGI6Ia.js";import{M as l,C as a}from"./blocks-C1wugZAv.js";import"./Tag-BT7c2k9t.js";import"./index-O5K3XRBn.js";import"./copy-ByAfyVz0.js";import{F as c}from"./Footer-BebX2FrJ.js";import"./PageNotFound-gkdNug7A.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DN55SoRt.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-B734PLKt.js";import"./index-D1hVPzQS.js";import"./index-WD-xjM3p.js";import"./index-DuWDlj0H.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-jWRCnrak.js";import"./addCustomCSSWithScoping-Bg1A5NWS.js";import"./index-CMs90z2F.js";import"./index-D4AJb6hG.js";import"./index-Bx2-sARl.js";import"./information-DjCg2NR8.js";import"./sys-enter-2-WI9s45tq.js";import"./alert-DkCV9tpB.js";import"./index-bjWm1Qbv.js";import"./Illustrations-DcoINpXf.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BdAOa6pX.js";import"./delete-DVSEwasX.js";import"./settings-DyAuU0nR.js";import"./NoData-BsxYtnRh.js";import"./NoFilterResults-C4DrdCVU.js";import"./index-CoW4a81M.js";import"./IllustratedMessage-Dlxr7mI5.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-lo9U6rw5.js";import"./Input-WMBW16LC.js";import"./ResponsivePopoverCommon.css-BdAey9nW.js";import"./ValueStateMessage.css-CXantPrh.js";import"./Suggestions.css-C3jx0r5H.js";import"./ListBoxItemGroupTemplate-CmwMoQVG.js";import"./ComboBoxItemGroup-Bc-DIORN.js";import"./ListItemBaseTemplate-Dx7gl5aW.js";import"./Token-CIFgetRy.js";import"./ScrollEnablement-CMpF8f9q.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dve_L83D.js";import"./ToggleButton-BmsIAL6q.js";import"./multiselect-all-C0EP75IP.js";import"./SuggestionItem-DkZnmDv0.js";import"./index-CUSQ5hC_.js";import"./Option-dcd03uYH.js";import"./index-CTUBFWCz.js";import"./SegmentedButton-d7mrBJIZ.js";import"./index-DG4Bts7Y.js";import"./Select-BMfjDvRC.js";import"./InvisibleMessage-DG05ioDr.js";import"./index-DGZZNJ5p.js";import"./index-D0Lm4r4_.js";import"./index-DFgUGNnk.js";import"./index-BF-516Y4.js";import"./IconDesign-DXd8PPVF.js";import"./filter-KLz0gUBW.js";import"./group-2-5QqJEoZA.js";import"./sort-descending-ghxeytqc.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CiV4PMwH.js";import"./utils-BLUFONTL.js";import"./index-gxg4Sry9.js";import"./index-BwLmagC2.js";import"./index-DouXrx1j.js";import"./navigation-down-arrow-EEiViiJ7.js";import"./navigation-right-arrow-DUtm-zLP.js";import"./navigation-right-arrow-DkDBuRJY.js";import"./useCurrentTheme-Ci3WGaWO.js";import"./index-CSbZISIN.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-sj-cJ_3l.js";import"./paper-plane-BxyaPnuX.js";import"./index-B-5DXRiN.js";import"./less-oZYALZR_.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
