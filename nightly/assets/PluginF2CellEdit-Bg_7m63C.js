import{j as e}from"./iframe-C8VIz1cN.js";import{useMDXComponents as o}from"./index-DF3oZ9DD.js";import{I as l,F as r}from"./CommandsAndQueries-D_HB_HX-.js";import{M as a,C as c}from"./blocks-D-v6PHKz.js";import"./Tag-Ce9kI3uB.js";import"./index-W-CFrWn1.js";import"./copy-ChBzOjSf.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-D67qtk91.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CK3WOJt5.js";import"./index-IuSSn5Ye.js";import"./index-zu9Y-W0w.js";import"./Link-8iQqMH3R.js";import"./index-DVHGI5Hf.js";import"./index-CQjs21SR.js";import"./index-D5h2jV28.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-VSpt3ox9.js";import"./addCustomCSSWithScoping-BS3ufxCI.js";import"./index-C3PbHa_S.js";import"./information-Hi7RSuvY.js";import"./sys-enter-2-CeqtRGpA.js";import"./alert-DDLVUdt7.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ZkSj7f1q.js";import"./delete-BWsK_VKH.js";import"./settings-qFLjUWC6.js";import"./NoData-DAp2SfGX.js";import"./IllustratedMessage-C9PLoYct.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-5yNQCTB4.js";import"./index-KVQaVP4s.js";import"./index-B_1MGVU1.js";import"./slim-arrow-down-B8cEuo7F.js";import"./Input-CLlxaT1e.js";import"./ResponsivePopoverCommon.css-DqUNlHfC.js";import"./ValueStateMessage.css-B6YWQgJF.js";import"./Suggestions.css-D8Fz_6MJ.js";import"./ListBoxItemGroupTemplate-1p3uTFvN.js";import"./ComboBoxItemGroup-QPslV6ya.js";import"./ListItemBaseTemplate-Cvw5qOo6.js";import"./Token-Dn9Ptobu.js";import"./ScrollEnablement-BP5kJ35e.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BNEO49EL.js";import"./ToggleButton-B3yNtFBm.js";import"./SuggestionItem-DmgDiYJY.js";import"./index-DoGJ2Ola.js";import"./Option-SB8hrn2i.js";import"./index-9KOufAY0.js";import"./SegmentedButton-Cf4ggFUf.js";import"./index-C4x3d45G.js";import"./Select-DBK-52OP.js";import"./InvisibleMessage-CFIf5I9Q.js";import"./slim-arrow-down-Dfenv5Nd.js";import"./index-Mp4sU-yf.js";import"./index-D3UqCt3j.js";import"./index-DrJkgPlY.js";import"./index-DmUuUpYf.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dj5ZiNQS.js";import"./group-2-DgejC8Se.js";import"./sort-descending-BfqjNPRC.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CQqved4K.js";import"./utils-DXFoFOug.js";import"./index-BXRJsEsZ.js";import"./index-BVP8su8Y.js";import"./index-Cnckaa8J.js";import"./navigation-down-arrow-BzgaFSOU.js";import"./navigation-right-arrow-BnQ-O_WA.js";import"./navigation-right-arrow-CKh4AD9z.js";import"./useCurrentTheme-BDG1chbv.js";import"./index-CJGGUyAX.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-74j_AZIC.js";import"./paper-plane-DxPVmNKd.js";import"./index-Ds5HV4bS.js";import"./less-Cqps4E0U.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
