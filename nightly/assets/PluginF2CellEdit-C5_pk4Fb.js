import{j as e}from"./iframe-BQw543fO.js";import{useMDXComponents as o}from"./index-BxhW0hRZ.js";import{I as l,F as r}from"./CommandsAndQueries-C4NyJWbb.js";import{M as a,C as c}from"./blocks-DVt0JaPi.js";import"./Tag-sELDi5ig.js";import"./index-DRKxBO9I.js";import"./copy-9tJvlpXS.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-C2_U3nDd.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B2T-_GlF.js";import"./index-DlwOY2o8.js";import"./index-8hxRUREt.js";import"./Link-CGxFiH0u.js";import"./index-DqHN2E4G.js";import"./index-B74G-VBW.js";import"./index-B0V2Rdv7.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BUFLcfGV.js";import"./addCustomCSSWithScoping-JZmabDZV.js";import"./index-CButcFfg.js";import"./information-giMaU9kv.js";import"./sys-enter-2-8R25DHYh.js";import"./alert-DoRuAU1t.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CM2uzcB4.js";import"./delete-C24k1AlE.js";import"./settings-CGiD0aRJ.js";import"./NoData-DkFDQhZS.js";import"./IllustratedMessage-BHzFOR23.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-BzR8x5cH.js";import"./index-C6Gx5LBV.js";import"./index-I9qS98gj.js";import"./slim-arrow-down-Y3VcW7MM.js";import"./Input-Dqe9_Cgh.js";import"./ResponsivePopoverCommon.css-BUtvUiTp.js";import"./ValueStateMessage.css-B4a25LJP.js";import"./Suggestions.css-CWOCvyz5.js";import"./ListBoxItemGroupTemplate-Cjp35C8X.js";import"./ComboBoxItemGroup-Y846uSl7.js";import"./ListItemBaseTemplate-BydcNEAt.js";import"./Token-zZiPj9PM.js";import"./ScrollEnablement-C3bXHz1R.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Yv4CXx4-.js";import"./ToggleButton-BXvmSzD8.js";import"./SuggestionItem-C_wlXKJi.js";import"./index-DvR3wRKz.js";import"./Option-ezhIbOLI.js";import"./index-BWs4o4Dm.js";import"./SegmentedButton-CRv9M-40.js";import"./index-Cxe3oJI6.js";import"./Select-D4f1CrB5.js";import"./InvisibleMessage-DIaEl61G.js";import"./slim-arrow-down-6K51CIbd.js";import"./index-CzWzZBFG.js";import"./index-BCXvLyuV.js";import"./index-CVp7cd0k.js";import"./index-BbqsQoi1.js";import"./IconDesign-DXd8PPVF.js";import"./filter-t5x_Oax_.js";import"./group-2-CsbviiZ6.js";import"./sort-descending-FFgYtEEy.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CbS6xyk7.js";import"./utils-B51JP7MS.js";import"./index-Cyxa-Lg1.js";import"./index-ePsAp63A.js";import"./index-DgaKDpsv.js";import"./navigation-down-arrow-D3N52Tck.js";import"./navigation-right-arrow-C56keY6-.js";import"./navigation-right-arrow-DtVrQ57T.js";import"./useCurrentTheme-NBNMJ8GX.js";import"./index-DPNHq_j6.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B1lcnCzB.js";import"./paper-plane-CY_k9ZwL.js";import"./index-ZJKQMD2K.js";import"./less-BFId0QYp.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
