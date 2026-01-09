import{j as e}from"./iframe-D_CdPJGB.js";import{useMDXComponents as o}from"./index-CU-ptlAE.js";import{I as l,F as r}from"./CommandsAndQueries-mK8OCXMD.js";import{M as a,C as c}from"./blocks-CCtPO9cz.js";import"./Tag-Bp64ITEl.js";import"./index-DvHG4NxR.js";import"./copy-BADAjupU.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DYjJZZgv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CZ_x4nC8.js";import"./index-px1zqH5W.js";import"./index-BjO8dbVD.js";import"./Link-D2G2Fur_.js";import"./index-rQn5W4JD.js";import"./index-BtAl8RaU.js";import"./index-Bp0lp_Bf.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CAznTGJj.js";import"./addCustomCSSWithScoping-CCFJUFLD.js";import"./index-C4kKrQ_A.js";import"./information-D72qH7xY.js";import"./sys-enter-2-hXCOpqjq.js";import"./alert-DtWkY9xa.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D_IhUX-d.js";import"./delete-7Ml3hpJC.js";import"./settings-zWMvdB3T.js";import"./NoData-B6osxBGy.js";import"./IllustratedMessage-BSFIsl3K.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-mv1-qqSd.js";import"./index-DdLYl7JB.js";import"./index-DU-QIP1X.js";import"./slim-arrow-down-DjB7mIxL.js";import"./Input-DDlyZUe3.js";import"./ResponsivePopoverCommon.css-BLJDaaVS.js";import"./ValueStateMessage.css-BCduw_aJ.js";import"./Suggestions.css-BidsuWHC.js";import"./ListBoxItemGroupTemplate-xzts4k2L.js";import"./ComboBoxItemGroup-CHXVN60o.js";import"./ListItemBaseTemplate-DxdVRh6Y.js";import"./Token-C48gjgFU.js";import"./ScrollEnablement-DdqyZen4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CKWpRsaf.js";import"./ToggleButton-D2rDUs9L.js";import"./SuggestionItem-DDpzUX_W.js";import"./index-B4aMp4lg.js";import"./Option-DUZ1b-TT.js";import"./index-B2ct1whH.js";import"./SegmentedButton-Do-ayQ2t.js";import"./index-D1WIrmAT.js";import"./Select-6cSgUjJb.js";import"./InvisibleMessage-C5We_rGd.js";import"./slim-arrow-down-CHdhic0E.js";import"./index-B4pCbKOH.js";import"./index-CVUQsMX1.js";import"./index-DPMPQ5O6.js";import"./index-DcE2qBtK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DlD1QirN.js";import"./group-2-Dor_fq4O.js";import"./sort-descending-DgbKssf5.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-L2EXVoeb.js";import"./utils-BUKq5qYC.js";import"./index-DKu9DJJF.js";import"./index-BV1E9Rhs.js";import"./index-BylnBWRJ.js";import"./navigation-down-arrow-DunPFpLG.js";import"./navigation-right-arrow-BwWM6KQQ.js";import"./navigation-right-arrow-D3e7CxpK.js";import"./useCurrentTheme-C6BNKx_P.js";import"./index-DeJpfMkF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D_nqdA78.js";import"./paper-plane-DQ1C_A2n.js";import"./index-BQbEiE4i.js";import"./less-bDMIhIOC.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
