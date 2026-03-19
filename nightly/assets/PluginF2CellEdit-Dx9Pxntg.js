import{j as e}from"./iframe-bPNgMO5h.js";import{useMDXComponents as o}from"./index-C4j4ILCK.js";import{I as r}from"./CommandsAndQueries-CzGU51jX.js";import{M as l,C as a}from"./blocks-DApk4By0.js";import"./Tag-eZA227UP.js";import"./index-CuRLQ5dh.js";import"./copy-DSB5O1lX.js";import{F as c}from"./Footer-Bh2hTs_t.js";import"./PageNotFound-Dw8P7BXA.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DjvL60Qy.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-ZXYeKMWB.js";import"./index-4UioHVXW.js";import"./index-CcoeKc2Y.js";import"./index-CjQWdaPL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbYGGim3.js";import"./addCustomCSSWithScoping-BM8ISZdO.js";import"./index-QMND5HNb.js";import"./index-5px67lZR.js";import"./index-mw4j7xrs.js";import"./information-C2d19MHy.js";import"./sys-enter-2-D4Z01vRG.js";import"./alert-Ct4GAPph.js";import"./index-D8vCUd0L.js";import"./Illustrations--EfuNW2c.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bp92srSy.js";import"./delete-CZaWvsw2.js";import"./settings-yWmyjAh_.js";import"./NoData-tuasnKt_.js";import"./NoFilterResults-DJYt6ITG.js";import"./index-DfjjeQhE.js";import"./IllustratedMessage-D45xyK5E.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-Bug9Y4_C.js";import"./Input--k2fVCdQ.js";import"./ResponsivePopoverCommon.css-C9m2n_WO.js";import"./ValueStateMessage.css-5RYJguS7.js";import"./Suggestions.css-kgVEttjd.js";import"./ListBoxItemGroupTemplate-D17nKtUN.js";import"./ComboBoxItemGroup-DtEK8K2r.js";import"./ListItemBaseTemplate-DOCzUHDT.js";import"./Token-DK_BK7Xd.js";import"./ScrollEnablement-0saldGDB.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DqDMg7f9.js";import"./ToggleButton-oLAt7dS0.js";import"./multiselect-all-DOxz8ncZ.js";import"./SuggestionItem-DATbDIak.js";import"./index-DwTOmRJC.js";import"./Option-DjwKEC0h.js";import"./index-C9e7sFCK.js";import"./SegmentedButton-Dw3GdGu8.js";import"./index-C8DOH3y9.js";import"./Select-DqepO6nd.js";import"./InvisibleMessage-CiSDUG8R.js";import"./index-C43v6hU6.js";import"./index-ve0FQzF0.js";import"./index-SeTeuHTC.js";import"./index-CCfS2xdR.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BpeMjZpa.js";import"./group-2-DKJR9cs7.js";import"./sort-descending-DvmMzoJz.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D2nJf9Zv.js";import"./utils-BldSJTDV.js";import"./index-CIZr7faC.js";import"./index-D_m5mtxi.js";import"./index-yfJAvgK-.js";import"./navigation-down-arrow-B9_zRrcu.js";import"./navigation-right-arrow-Dj2eD2zH.js";import"./navigation-right-arrow-sjpm_efd.js";import"./useCurrentTheme-jpUiEjmR.js";import"./index-C_ntH17V.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DkBNoMcS.js";import"./paper-plane-CvTWiV4j.js";import"./index-CPV1ISqE.js";import"./less-Dh8-HrfA.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
