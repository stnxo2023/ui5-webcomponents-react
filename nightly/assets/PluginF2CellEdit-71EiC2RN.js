import{j as e}from"./iframe-CtwEriWb.js";import{useMDXComponents as o}from"./index-D-9u9m_4.js";import{I as l,F as r}from"./CommandsAndQueries-CD3VJPSk.js";import{M as a,C as c}from"./blocks-BFYACaFi.js";import"./Tag-Dp8ZKpct.js";import"./index-DaHRprUe.js";import"./copy-DmD13pno.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-D0QPuNZ6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C5ngcH8h.js";import"./index-Bt4v4M6X.js";import"./index-DDmWoC0P.js";import"./Link-D_PuN-3O.js";import"./index-zgbQGCMD.js";import"./index-C3uSNLH8.js";import"./index-wzivwl9m.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Lem94xA1.js";import"./addCustomCSSWithScoping-BBQMnugZ.js";import"./index-CeAyP2ez.js";import"./information-D5ukCsPX.js";import"./sys-enter-2-BPp72tdn.js";import"./alert-CQAVluiD.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-6iJPqvCF.js";import"./delete-CHjtmoxe.js";import"./settings-CJBNJogN.js";import"./NoData-DjTzPZvK.js";import"./IllustratedMessage-8ePIRJ01.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-D84oURGo.js";import"./index-Dz0HvdK8.js";import"./index-D9Ds84en.js";import"./slim-arrow-down-Dhjx46M4.js";import"./Input-Ey3vMJ2p.js";import"./ResponsivePopoverCommon.css-BlgaMAH_.js";import"./ValueStateMessage.css-BCs7SZVo.js";import"./Suggestions.css-Ca_9frEg.js";import"./ListBoxItemGroupTemplate-BmW_TD1a.js";import"./ComboBoxItemGroup-D9S-hZmS.js";import"./ListItemBaseTemplate-Dr-kfIJ7.js";import"./Token-C9kw3GgY.js";import"./ScrollEnablement-BQjS8DnP.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DRntQYAQ.js";import"./ToggleButton-Bf-SN9R0.js";import"./SuggestionItem-C8LVLSQl.js";import"./index-BF7FIsg5.js";import"./Option-D4al2hZS.js";import"./index-C_S6aGGA.js";import"./SegmentedButton-2upM-MiM.js";import"./index-DmNK5fut.js";import"./Select-BcqBMzHp.js";import"./InvisibleMessage-BGhqftdJ.js";import"./slim-arrow-down-C-J0cPgu.js";import"./index-DXGpSx7n.js";import"./index-C7Tf8xop.js";import"./index-Dx48TTVd.js";import"./IconDesign-DXd8PPVF.js";import"./filter-VUJDD7Ck.js";import"./group-2-CA3SU2Z-.js";import"./sort-descending-rYpXwTDK.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DkX--lPA.js";import"./utils-Ctkq60uV.js";import"./index-DOMVXnxq.js";import"./index-BrR9oCjZ.js";import"./index-DayvUZ6b.js";import"./navigation-down-arrow-QusIkm2p.js";import"./navigation-right-arrow-B5vKiLuI.js";import"./navigation-right-arrow-D8wA0KPb.js";import"./useCurrentTheme-BTKV_yhV.js";import"./IndicationColor-DVw-fSM_.js";import"./index-HRFMiwNd.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BtiMpto1.js";import"./paper-plane-DvM7Xu8p.js";import"./index-DXgoomGI.js";import"./less-Bi02PNvH.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
