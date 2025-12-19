import{j as e}from"./iframe-fnu3Vo41.js";import{useMDXComponents as o}from"./index-BSrpAODL.js";import{I as l,F as r}from"./CommandsAndQueries-Bopzu-n8.js";import{M as a,C as c}from"./blocks-BS5BROTL.js";import"./Tag-BiBlBJWE.js";import"./index-BbmVly28.js";import"./copy-Db06aovL.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-cEuR5nNv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-SCFjt_Ga.js";import"./index-CJk9IgGL.js";import"./index-rPkavUv0.js";import"./Link-BLTuinuO.js";import"./index-BUdZGDL2.js";import"./index-C8EzOXR3.js";import"./index-DahYWRMR.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D2MON8lG.js";import"./addCustomCSSWithScoping-DzZplljN.js";import"./index-B7d1u9D1.js";import"./information-C4CUHJ6u.js";import"./sys-enter-2-Bq1R0WAk.js";import"./alert-xdJdEaU1.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cg3qW77l.js";import"./delete-DmiOTRnw.js";import"./settings-zDmG-3im.js";import"./NoData-nQLO9EZ8.js";import"./IllustratedMessage-BXzbNCL1.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-DBeKPlkH.js";import"./index-Brwr5FUa.js";import"./index-BDJpTTku.js";import"./slim-arrow-down-XRKMzLPf.js";import"./Input-Detc7Ii6.js";import"./ResponsivePopoverCommon.css-CxPrgmxN.js";import"./ValueStateMessage.css-CQ4OVJ9G.js";import"./Suggestions.css-vM9OM1GI.js";import"./ListBoxItemGroupTemplate-BYeB1Cl_.js";import"./ComboBoxItemGroup-4jucO2i6.js";import"./ListItemBaseTemplate-FeG_oPAJ.js";import"./Token-DAQ1DS0x.js";import"./ScrollEnablement-WgQtsSmN.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BRTdZnQJ.js";import"./ToggleButton-57cIItv1.js";import"./SuggestionItem-C8mqfWho.js";import"./index-CX4U2Jek.js";import"./Option-DD3Zi9NK.js";import"./index-jyed2UIl.js";import"./SegmentedButton-gKY9F3pt.js";import"./index-BRftw348.js";import"./Select-lOtzZ3fx.js";import"./InvisibleMessage-Bg2OVWgo.js";import"./slim-arrow-down-DRNkvrF7.js";import"./index-D5Hq6_Re.js";import"./index-BhBUN7y5.js";import"./index-oA7Crhpd.js";import"./index-Cw1Aet_f.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C-h3NHKT.js";import"./group-2-DwY0Xc-S.js";import"./sort-descending-Bc55MwdY.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bwnkn5xs.js";import"./utils-DYh0gtXT.js";import"./index-DYKo8bXl.js";import"./index-BPeyg5AZ.js";import"./index-BrR0l5NR.js";import"./navigation-down-arrow-B7W9-sHI.js";import"./navigation-right-arrow-D_oDOzWj.js";import"./navigation-right-arrow-B69jNS7a.js";import"./useCurrentTheme-BetgmMaZ.js";import"./index-q7ej9ehA.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CEjni14h.js";import"./paper-plane-DOa3jfws.js";import"./index-JCFhG4pE.js";import"./less-BaCzhisI.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
