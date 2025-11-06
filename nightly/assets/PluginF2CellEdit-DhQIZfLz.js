import{j as e}from"./iframe-DBm0KKUf.js";import{useMDXComponents as o}from"./index-Cb8BN12q.js";import{I as l,F as r}from"./CommandsAndQueries-CpqOMU0z.js";import{M as a,C as c}from"./blocks-FcKewvzz.js";import"./Tag-DHtv4MjB.js";import"./index-D7OJqnCE.js";import"./copy-CNODe6O-.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BLgNBJMA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C_dJ2uG6.js";import"./index-DSRVWdNr.js";import"./index-4ENMwVth.js";import"./Link-Ct9C2jWR.js";import"./index-T96p6BIB.js";import"./index-DM0eg3qI.js";import"./index-Ccfulnyg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BPyGpBqG.js";import"./addCustomCSSWithScoping-DI0oMdV8.js";import"./index-BAUdr3me.js";import"./information-BXDVlLxS.js";import"./sys-enter-2-B25DXxek.js";import"./alert-ia9fKkJ9.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B_Jzu1HO.js";import"./delete-BY36aH4u.js";import"./settings-CQc9w4bD.js";import"./NoData-CViU0Ozk.js";import"./IllustratedMessage-MjiMC3xO.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-eL9Z4FLY.js";import"./index-De7LfL69.js";import"./index-D_cxxf2Z.js";import"./slim-arrow-down-Cowwh0_-.js";import"./Input-Cfy0dJpQ.js";import"./ResponsivePopoverCommon.css-CRVvh9cv.js";import"./ValueStateMessage.css-C2gzUKxC.js";import"./Suggestions.css-DL6rQFj9.js";import"./ListBoxItemGroupTemplate-BZry8l0p.js";import"./ComboBoxItemGroup-CFPpIkre.js";import"./ListItemBaseTemplate-szCNoKvB.js";import"./Token-DTTQs5IV.js";import"./ScrollEnablement-BmlbbPDx.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BCbp7Udb.js";import"./ToggleButton-Mf6uWEVu.js";import"./SuggestionItem-C7a_40Ak.js";import"./index-DynyRFQt.js";import"./Option-CiNmJ5BU.js";import"./index-BwSqZNPb.js";import"./SegmentedButton-BZBdQYL3.js";import"./index-DokMIoCV.js";import"./Select-BWNl-hA7.js";import"./InvisibleMessage-yauS0ttk.js";import"./slim-arrow-down-DTR_Gkm6.js";import"./index-BTj_7a8m.js";import"./index-BWmDHky_.js";import"./index-CvZtp7o3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BaMtSB4y.js";import"./group-2-DOmGtWHP.js";import"./sort-descending-hllpiI0c.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BuVBMWqW.js";import"./utils-CYtcnYeu.js";import"./index-D1sExh_N.js";import"./index-SQvWNwud.js";import"./index-CfFC_XPL.js";import"./navigation-down-arrow-CsEzXbPX.js";import"./navigation-right-arrow-Cdvo4nV_.js";import"./navigation-right-arrow-CbShz5Fd.js";import"./useCurrentTheme-BKGNtfIr.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D2OeM_OL.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DB-7ieif.js";import"./paper-plane-C7mdkPbA.js";import"./index-Cm-cbULR.js";import"./less-CYPnM2pk.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
