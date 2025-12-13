import{j as e}from"./iframe-eEgnsybz.js";import{useMDXComponents as o}from"./index-KUh3EncO.js";import{I as l,F as r}from"./CommandsAndQueries-Bkg2fbFD.js";import{M as a,C as c}from"./blocks-C6o1VobD.js";import"./Tag-CyCgeEFX.js";import"./index-DlBhGBWU.js";import"./copy-7FG8PsWo.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-5zkjYXUy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D9oALoTs.js";import"./index-BwSVcTHk.js";import"./index-0PjuM5S8.js";import"./Link-BuGrrtP2.js";import"./index-yhFX9aug.js";import"./index-Dc3QGU-g.js";import"./index-CGhTEkOT.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CH2VPx4y.js";import"./addCustomCSSWithScoping-DKRk5X62.js";import"./index-Pa5s-fex.js";import"./information-CKacNM7A.js";import"./sys-enter-2-D0fhmdQp.js";import"./alert-CxkpN3m7.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CzaZCJnb.js";import"./delete-irFC0K_n.js";import"./settings-D6sE3rZn.js";import"./NoData-CEs0myHh.js";import"./IllustratedMessage-BX1XofDb.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-Ceffab9D.js";import"./index-C7F47GNT.js";import"./index-r3V5CQu0.js";import"./slim-arrow-down-DZYetS2j.js";import"./Input-DKxPEOnV.js";import"./ResponsivePopoverCommon.css-CM05b5HY.js";import"./ValueStateMessage.css-qrxzD_3f.js";import"./Suggestions.css-CU6yhqWV.js";import"./ListBoxItemGroupTemplate-bJFFdWvz.js";import"./ComboBoxItemGroup-BirbcqPA.js";import"./ListItemBaseTemplate-CAjFk73p.js";import"./Token-B7VqEG9Z.js";import"./ScrollEnablement-Dj9e3xCo.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bv5pHXMI.js";import"./ToggleButton-D2k4wWl7.js";import"./SuggestionItem-aqON_76G.js";import"./index-DhUt20lO.js";import"./Option-DUm3mIhb.js";import"./index-B2x2MP6X.js";import"./SegmentedButton-CDk8cxu9.js";import"./index-BWQjygaM.js";import"./Select-D9goYstD.js";import"./InvisibleMessage-2xnh5Mfi.js";import"./slim-arrow-down-DUTlQ5v8.js";import"./index-Du8qhg8T.js";import"./index-CdnhyucW.js";import"./index-B0W8XC3p.js";import"./index-DYImmnpQ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BJuRHVvc.js";import"./group-2-DNitl-KP.js";import"./sort-descending-BJx8GPj8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CpWpj11z.js";import"./utils-CyuipnON.js";import"./index-DeVsfJce.js";import"./index-DXfAtOJv.js";import"./index-BIEBBMh8.js";import"./navigation-down-arrow-BDetjDEa.js";import"./navigation-right-arrow-SIiFeyVd.js";import"./navigation-right-arrow-U36zYERp.js";import"./useCurrentTheme-mfP2heJH.js";import"./index-BEbiu7Cw.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Dm7lVWDa.js";import"./paper-plane-iHPbU_pU.js";import"./index-BzLGb63M.js";import"./less-B0zSuI_N.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
