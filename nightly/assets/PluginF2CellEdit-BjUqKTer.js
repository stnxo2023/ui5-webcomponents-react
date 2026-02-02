import{j as e}from"./iframe-DtD6gRbB.js";import{useMDXComponents as o}from"./index-BiO40HBX.js";import{I as l,F as r}from"./CommandsAndQueries-B26crKtq.js";import{M as a,C as c}from"./blocks-Ck7wLHdk.js";import"./Tag-CPFNFbnr.js";import"./index-BiosTbTI.js";import"./copy-DKyeVOxg.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Dmah3EWF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BSRohzC4.js";import"./index-CRlMy3bg.js";import"./index-pV_yzmY_.js";import"./Link-cYpkkuqp.js";import"./index-391GJ7ps.js";import"./index-DCELbeIn.js";import"./index-KaeBEDf1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DGQO4fMp.js";import"./addCustomCSSWithScoping-Bt7xCKzu.js";import"./index-CDW4JUA8.js";import"./information-uX8_TnNn.js";import"./sys-enter-2-CJJhzBhO.js";import"./alert-BmD5O1ac.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BXDuuJxS.js";import"./delete-BH_Ofluc.js";import"./settings-BOwjvOs-.js";import"./NoData-DAU8iV94.js";import"./IllustratedMessage-BdOpFcMu.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-D6IuGdJg.js";import"./index-8sZlfaIF.js";import"./index-C8a6NVMH.js";import"./slim-arrow-down-DjG80YJw.js";import"./Input-D-O_E4Pc.js";import"./ResponsivePopoverCommon.css-B045Nnj_.js";import"./ValueStateMessage.css-DpV5S_wa.js";import"./Suggestions.css-BvMw9k5F.js";import"./ListBoxItemGroupTemplate-o03o3K-I.js";import"./ComboBoxItemGroup-D7un_uFe.js";import"./ListItemBaseTemplate-DQCws7kn.js";import"./Token-D36n2Zus.js";import"./ScrollEnablement-QSFxM8aV.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CdwuH3bB.js";import"./ToggleButton-Cd5NUYjN.js";import"./SuggestionItem-AGh_Mf5H.js";import"./index-DbwyhNE4.js";import"./Option-CDh-ocF3.js";import"./index-C7kuhskk.js";import"./SegmentedButton-DEMlsUEh.js";import"./index-D1IFlFlx.js";import"./Select-DTxOAyO4.js";import"./InvisibleMessage-DU_sw7pv.js";import"./slim-arrow-down-DZcd6ZcC.js";import"./index-RfAAwJsf.js";import"./index-Bb0M5Coz.js";import"./index-DCwY0BNz.js";import"./index-C89pqI8n.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DKuclrLO.js";import"./group-2-C1B8sHxp.js";import"./sort-descending-CJ2KeZ-8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index--eFanla0.js";import"./utils-BQ9l0ZXj.js";import"./index-BgO6mcLt.js";import"./index-vZRCG4hQ.js";import"./index-CEJjFBjT.js";import"./navigation-down-arrow-nSfE-hjH.js";import"./navigation-right-arrow-ByC8k-O9.js";import"./navigation-right-arrow-DKjWi810.js";import"./useCurrentTheme-CcZ-F948.js";import"./index-DOX5DR-q.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CUn0jH8-.js";import"./paper-plane-DSmkYTvk.js";import"./index-BHAQBVRI.js";import"./less-Bjdjo6qR.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
