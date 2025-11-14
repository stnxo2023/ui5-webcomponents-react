import{j as e}from"./iframe-D4Wcvdi9.js";import{useMDXComponents as o}from"./index-CyoSS2tn.js";import{I as l,F as r}from"./CommandsAndQueries-CHCF8nk5.js";import{M as a,C as c}from"./blocks-BZVDlLxv.js";import"./Tag-C8CPshPM.js";import"./index-C0Cp4coA.js";import"./copy-ByuSrISy.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DvH8YaNx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BfU-6WHW.js";import"./index-DRGYhnMd.js";import"./index-BoPvUO7L.js";import"./Link-DRjrHvv7.js";import"./index-C0aU4sgS.js";import"./index-DyEesLqq.js";import"./index-B5YCmd_L.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C_EKP5sQ.js";import"./addCustomCSSWithScoping-B3blWPk3.js";import"./index-iYqBFHCz.js";import"./information-BV6B4i17.js";import"./sys-enter-2-Be3rvkTR.js";import"./alert-Bj2TJcB4.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bg9NkTF8.js";import"./delete-Dan4xo-W.js";import"./settings-Dc0Ay2Ol.js";import"./NoData-CPHXEiea.js";import"./IllustratedMessage-CqSfiYLz.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-Cc_7hoVU.js";import"./index-hA8G-1F0.js";import"./index-umARLA2o.js";import"./slim-arrow-down-BQ4prS5H.js";import"./Input-Dw523AWA.js";import"./ResponsivePopoverCommon.css-DXXW23Pq.js";import"./ValueStateMessage.css-CGX3TujJ.js";import"./Suggestions.css-yWvjMCYt.js";import"./ListBoxItemGroupTemplate-BXg8ZZhL.js";import"./ComboBoxItemGroup-BWf21BRm.js";import"./ListItemBaseTemplate-BtxWLyBh.js";import"./Token-CJew2pIR.js";import"./ScrollEnablement-B_7Hn9ne.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B7i9H2_f.js";import"./ToggleButton-tkY9KnFv.js";import"./SuggestionItem-C-IyQ9GM.js";import"./index-CalwvC2l.js";import"./Option-o--nSFBp.js";import"./index-B4qdjTS3.js";import"./SegmentedButton-Dlsij53P.js";import"./index-Bs-Aw581.js";import"./Select-G5EwzUhf.js";import"./InvisibleMessage-z6pIlI85.js";import"./slim-arrow-down-BwasBD_7.js";import"./index-CbPN-lRT.js";import"./index-DZDIO8XF.js";import"./index-BNR4hbu3.js";import"./IconDesign-DXd8PPVF.js";import"./filter-AltxkYtY.js";import"./group-2-DCKEVdUW.js";import"./sort-descending-D6BynqyS.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C_DH5grj.js";import"./utils-BSZp2_tG.js";import"./index-Ddv6G0qJ.js";import"./index-MsmJ52zV.js";import"./index-BLw-L2xS.js";import"./navigation-down-arrow-CiJ3nX35.js";import"./navigation-right-arrow-CZ9bddNc.js";import"./navigation-right-arrow-B9tYbly4.js";import"./useCurrentTheme-DZ5Dd1Oz.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C_IB42fC.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-pRkoq2nx.js";import"./paper-plane-C5O9xOBt.js";import"./index-D9uEVirk.js";import"./less-Bgb69ICn.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
