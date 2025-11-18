import{j as e}from"./iframe-GIjPgZz_.js";import{useMDXComponents as o}from"./index-Q5qZCDzK.js";import{I as l,F as r}from"./CommandsAndQueries-DAsamt73.js";import{M as a,C as c}from"./blocks-Brju_yKM.js";import"./Tag-CRHSyhrL.js";import"./index-BF6G6ZOp.js";import"./copy-DMIRXvtR.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BmLNZ8hu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BnsMKJYG.js";import"./index-ByWeYssR.js";import"./index-ChNOA-bd.js";import"./Link-CUZ6JL-B.js";import"./index-V5lDTiuM.js";import"./index-BiD4GApv.js";import"./index-Xvv35NLG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dpx1zyp1.js";import"./addCustomCSSWithScoping-zdxF42yG.js";import"./index-DYv3qsbi.js";import"./information-C_h8A4lQ.js";import"./sys-enter-2-CoTdl5fW.js";import"./alert-DH_fdUZB.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CfpH1xFo.js";import"./delete-C-T01lLr.js";import"./settings-BnzBZ0lV.js";import"./NoData-BG6uVDAU.js";import"./IllustratedMessage-2JZ8q5L8.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-CqR8UELm.js";import"./index-CMian285.js";import"./index-CYHTRK1L.js";import"./slim-arrow-down-BHOwA7DG.js";import"./Input-CO8cUSWP.js";import"./ResponsivePopoverCommon.css-Dg5kCeR8.js";import"./ValueStateMessage.css-ByTQt8zp.js";import"./Suggestions.css-KU_u1XlD.js";import"./ListBoxItemGroupTemplate-C8z3ly7J.js";import"./ComboBoxItemGroup-CaK2hUsm.js";import"./ListItemBaseTemplate-2unCupVB.js";import"./Token-vTv9qWj-.js";import"./ScrollEnablement-BoZvgjLJ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CUnytT-Q.js";import"./ToggleButton-t1GK7a4c.js";import"./SuggestionItem-D4GQqs9D.js";import"./index-Booxjpxp.js";import"./Option-CLaJv9Lf.js";import"./index-B5cPbpB3.js";import"./SegmentedButton-MYaX8HFF.js";import"./index-C5rN46vA.js";import"./Select-DgEbc0sd.js";import"./InvisibleMessage-DE2IJQx3.js";import"./slim-arrow-down-BfhdSO50.js";import"./index-aXzni-kK.js";import"./index-CHYlEZPx.js";import"./index-DVRaig0H.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CbB12dqr.js";import"./group-2-Y0F9rU1V.js";import"./sort-descending-CYDDdi_E.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-XIfZZvDx.js";import"./utils-BdyEyvAN.js";import"./index-Br6ahyAe.js";import"./index-C4IL_GaS.js";import"./index-DGm9tOTO.js";import"./navigation-down-arrow-CDRhyDRq.js";import"./navigation-right-arrow-D1sC2HOI.js";import"./navigation-right-arrow-D_7sv2xN.js";import"./useCurrentTheme-BXWde22w.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CQxy6kwu.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DE6ac6kW.js";import"./paper-plane-0HnsvUce.js";import"./index-BzjyVP51.js";import"./less-COhi_etz.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
