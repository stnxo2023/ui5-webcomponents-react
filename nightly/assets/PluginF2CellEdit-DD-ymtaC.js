import{j as e}from"./iframe-CJIrZBlB.js";import{useMDXComponents as o}from"./index-xKVU5ZCd.js";import{I as l,F as r}from"./CommandsAndQueries-C3g74-RT.js";import{M as a,C as c}from"./blocks-C-1O0LRm.js";import"./Tag-BNlwFAFY.js";import"./index-DmJ7zXRW.js";import"./copy-DR5Kv1Iv.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Coh8XRhB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BGOwz-CM.js";import"./index-YnpVhHMg.js";import"./index-CEkWgGTS.js";import"./Link-BElCP5h1.js";import"./index-BhZheF80.js";import"./index-DmwyQtvi.js";import"./index-BCwOIMZp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bf32rwnZ.js";import"./addCustomCSSWithScoping-CPo-hqqQ.js";import"./index-EdNUKN4_.js";import"./information-BaxJEMV7.js";import"./sys-enter-2-COh9WNy8.js";import"./alert-BkaLAKBd.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BA0xOeEx.js";import"./delete-C9vBXGAH.js";import"./settings-BAZbIl4B.js";import"./NoData-D1WCCIr-.js";import"./IllustratedMessage-BSOmXBM5.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-DvcJ3TrS.js";import"./index-2aQZOvza.js";import"./index-B5XNfqqK.js";import"./slim-arrow-down-CdpV3nE0.js";import"./Input-Btf27YOr.js";import"./ResponsivePopoverCommon.css-xGlWqU9B.js";import"./ValueStateMessage.css-MyCATZT_.js";import"./Suggestions.css-Cy-COfO3.js";import"./ListBoxItemGroupTemplate-DXkWU2-0.js";import"./ComboBoxItemGroup-CYzVMS6G.js";import"./ListItemBaseTemplate-C5F3HCqR.js";import"./Token-BNv4B9pp.js";import"./ScrollEnablement-CKbJdcjA.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CHoTFWQP.js";import"./ToggleButton-CFOd-MDd.js";import"./SuggestionItem-BI-IC1_F.js";import"./index-BOVwts_X.js";import"./Option-DuZb6gan.js";import"./index-DJqLFHqT.js";import"./SegmentedButton-D8Yf4_Qw.js";import"./index-BLHzNls7.js";import"./Select-D5EHVEMo.js";import"./InvisibleMessage-PB9O_FfW.js";import"./slim-arrow-down-BTXWHLy9.js";import"./index-CKVmIBse.js";import"./index-N6T3kPeD.js";import"./index-BPZe2Mw9.js";import"./IconDesign-DXd8PPVF.js";import"./filter-mMtT2jHR.js";import"./group-2-De9ft9J6.js";import"./sort-descending-BIwXsoMH.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DYDQ7rpc.js";import"./utils-CvOOfhDf.js";import"./index-DV5RwOKW.js";import"./index-Cfv_e0qb.js";import"./index-BKekFUxh.js";import"./navigation-down-arrow-B14ig-WM.js";import"./navigation-right-arrow-BtI2EckR.js";import"./navigation-right-arrow-CrzwDQrl.js";import"./useCurrentTheme-CJMp3CMu.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Dq6Z1nja.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Bb4BnNpy.js";import"./paper-plane-BzrDh65i.js";import"./index-D9LH8SsC.js";import"./less-Cb2Bvewk.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
