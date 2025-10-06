import{j as e}from"./iframe-C3aU9yO2.js";import{useMDXComponents as o}from"./index-DcLDqK7w.js";import{I as l,F as r}from"./CommandsAndQueries-D0nTXU9T.js";import{M as a,C as c}from"./blocks-B9oc031V.js";import"./Tag-CNw53_eT.js";import"./index-i1N6ua_w.js";import"./copy-D_R4P06r.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BwxHOvH5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CfpqN5Id.js";import"./index-g0B9jrXN.js";import"./index-DKI76k_B.js";import"./Link-BnEnKAv3.js";import"./index-DBwKQ69N.js";import"./index-D8QgyDbC.js";import"./index-CPcH_eI_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CPfGSaYG.js";import"./addCustomCSSWithScoping-C73QrPVQ.js";import"./index-BU0JfJz1.js";import"./information-B-Ns6m0d.js";import"./sys-enter-2-D_Kaw-gu.js";import"./alert-7z2pNDRB.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DnUmXdKQ.js";import"./delete-DmCWbdAi.js";import"./settings-1nFL_G7A.js";import"./NoData-vppJJq2k.js";import"./IllustratedMessage-BIRyOBBo.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-CtRAMKvF.js";import"./index-DEu9ukF7.js";import"./index-BJ4JqDZt.js";import"./slim-arrow-down-B-t7KMm_.js";import"./Input-Cfbtnwg6.js";import"./ResponsivePopoverCommon.css-BiqlokwB.js";import"./ValueStateMessage.css-BCiC-Blk.js";import"./Suggestions.css-DhC4w4Fb.js";import"./ListBoxItemGroupTemplate-C7SkMpNF.js";import"./ComboBoxItemGroup-CIO6k5QH.js";import"./ListItemBaseTemplate-C7NEMs7Q.js";import"./Token-D-8TO1My.js";import"./ScrollEnablement-B-ve8lNO.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BPLw0fnj.js";import"./ToggleButton--U2n7cRR.js";import"./SuggestionItem-B5fupWrO.js";import"./index-DrHO_6Yk.js";import"./Option-CeOJa7O5.js";import"./index-haCaBy7F.js";import"./SegmentedButton-DasYM7ls.js";import"./index-BHr0wFPK.js";import"./Select-C8enezS2.js";import"./InvisibleMessage-Ce5yXPOl.js";import"./slim-arrow-down-gN-yvIKk.js";import"./index-DcrniWqF.js";import"./index-ATxduGAU.js";import"./index-HMHM8G5Q.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BV4nhufn.js";import"./group-2-DXTcSu-3.js";import"./sort-descending-_zxdumlM.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DbNwybSm.js";import"./utils-HF4Qfx7C.js";import"./index-D4SYQI3K.js";import"./index-BFaqayaE.js";import"./index-CJWdScx6.js";import"./navigation-down-arrow-D4g4EBUf.js";import"./navigation-right-arrow-C2JbsM5-.js";import"./navigation-right-arrow-DER4Cb5G.js";import"./useCurrentTheme-CNp62qcx.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C_6DRLOc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CyLBUYXb.js";import"./paper-plane-CRXLbten.js";import"./index-DiOVCr3o.js";import"./less-C2uRyvrb.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
