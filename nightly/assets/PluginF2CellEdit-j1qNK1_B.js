import{j as e}from"./iframe-Bb0HmHnB.js";import{useMDXComponents as o}from"./index-Meo06HOS.js";import{I as l,F as r}from"./CommandsAndQueries-tR4iht-v.js";import{M as a,C as c}from"./blocks-CgyFha0p.js";import"./Tag-CkJgtMYU.js";import"./index-e-oHYPrA.js";import"./copy-ClXY_Ebg.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CVCqajEn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BUHcje1a.js";import"./index-ujA-0uQD.js";import"./index-DRj5BOAv.js";import"./Link-Ctr6McPA.js";import"./index-DamhzNr0.js";import"./index-kXJ0csex.js";import"./index-DkF-cfFa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DmK6tfuz.js";import"./addCustomCSSWithScoping-DZsYEWJZ.js";import"./index-CCkcOLyJ.js";import"./information-CuEP2--w.js";import"./sys-enter-2-BxgOL3Cz.js";import"./alert-CRFvm_h4.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B3EdkcTs.js";import"./delete-DNvu7cli.js";import"./settings-X_qufnfv.js";import"./NoData-Be80XLqg.js";import"./IllustratedMessage-DD1_V1fS.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-YoedeCQZ.js";import"./index-CEumqWwt.js";import"./index-Ctco8NFr.js";import"./slim-arrow-down-BK6_kW2_.js";import"./Input-8EIzHHn6.js";import"./ResponsivePopoverCommon.css-CYHZGTr6.js";import"./ValueStateMessage.css-DQVkNKvB.js";import"./Suggestions.css-jL9cJ0bK.js";import"./ListBoxItemGroupTemplate-F9IXXChP.js";import"./ComboBoxItemGroup-rVDs3n5k.js";import"./ListItemBaseTemplate-DGXYw3IB.js";import"./Token-plZfxczM.js";import"./ScrollEnablement-CtICbC2N.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DRloOdH2.js";import"./ToggleButton-CIurin5E.js";import"./SuggestionItem-wc2mHVyx.js";import"./index-BaTE6PUT.js";import"./Option-CpLfiC8k.js";import"./index-IAfope6S.js";import"./SegmentedButton-BNh0v1Zf.js";import"./index-D8FXkeK7.js";import"./Select-DIxLDO_Y.js";import"./InvisibleMessage-BuHDtcTe.js";import"./slim-arrow-down-DOc9_ecn.js";import"./index-CN5pxO6-.js";import"./index-DD32uJSt.js";import"./index-wp5LnE7o.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CG2Pz_ak.js";import"./group-2-DRBOUlKY.js";import"./sort-descending-pJBX6NsG.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C4pQrK8W.js";import"./utils-DT171g7R.js";import"./index-BHDfFIKl.js";import"./index-COKyuEqS.js";import"./index-DnLo1BZO.js";import"./navigation-down-arrow-DQURBlhq.js";import"./navigation-right-arrow-BBRYGBWr.js";import"./navigation-right-arrow-DbJe2FI5.js";import"./useCurrentTheme-DeBv9RCX.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BllQlQx0.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-fxo11iCx.js";import"./paper-plane-BLDEhHRM.js";import"./index-DgN_PFsx.js";import"./less-B_rvZNau.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
