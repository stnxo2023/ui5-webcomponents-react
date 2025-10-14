import{j as e}from"./iframe-_aM0UtJ2.js";import{useMDXComponents as o}from"./index-BfzIu2dE.js";import{I as l,F as r}from"./CommandsAndQueries-DzKXmTWy.js";import{M as a,C as c}from"./blocks-l9d8PUx_.js";import"./Tag-BfFHPicD.js";import"./index-DK-65CGT.js";import"./copy-DFcekAfZ.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CgldXt7D.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D4-JCcJ5.js";import"./index-D94cPjQU.js";import"./index-HG9KwvVi.js";import"./Link-DVTfY9Y-.js";import"./index-ChnKUkkG.js";import"./index-daYey1G6.js";import"./index-B2FptVvG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D5ZlAJzQ.js";import"./addCustomCSSWithScoping-JIDtcj4a.js";import"./index-80py4d9m.js";import"./information-Bugjbsmi.js";import"./sys-enter-2-B3MGAVo9.js";import"./alert-CNC7DRI_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BDin49Qt.js";import"./delete-qfJnygw7.js";import"./settings-4mK1hrn-.js";import"./NoData-8b23hioQ.js";import"./IllustratedMessage-BGHWa-aT.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-d2xsz83Y.js";import"./index-BrzyWVSa.js";import"./index-B7RpqTLg.js";import"./slim-arrow-down-BRjLnbot.js";import"./Input-MazSOwes.js";import"./ResponsivePopoverCommon.css-C9u2x3-0.js";import"./ValueStateMessage.css-DszbwuLg.js";import"./Suggestions.css-qx180UMs.js";import"./ListBoxItemGroupTemplate-DuHSjG0t.js";import"./ComboBoxItemGroup-D0cmVbGL.js";import"./ListItemBaseTemplate-DFJr1Bva.js";import"./Token-C2yl10l2.js";import"./ScrollEnablement-Bhq2qTDI.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BU1IwfYt.js";import"./ToggleButton-DYX2agjM.js";import"./SuggestionItem-C_mbbanp.js";import"./index-DKAKDwua.js";import"./Option-NFGo4imz.js";import"./index-ozNHZ0R1.js";import"./SegmentedButton-BCvDohGJ.js";import"./index-Cf7GYcbF.js";import"./Select-C0UwiMyq.js";import"./InvisibleMessage-C6DL-Jud.js";import"./slim-arrow-down-cxFeYscI.js";import"./index-C_W6PJrr.js";import"./index-Cr_o_sGI.js";import"./index-4LhBYovK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CNRItJq8.js";import"./group-2-BSuDu3BP.js";import"./sort-descending-CjYTHc_q.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D0_4QMUt.js";import"./utils-RjvQRYKv.js";import"./index-BxkisXba.js";import"./index-Di6FiDqU.js";import"./index-D-tGJU1i.js";import"./navigation-down-arrow-CXVkGqrk.js";import"./navigation-right-arrow-OXPBdahQ.js";import"./navigation-right-arrow-CCBpu_jK.js";import"./useCurrentTheme-C1Tgc9SL.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CtV42zsn.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CaZ25Jpx.js";import"./paper-plane-II9HzJH8.js";import"./index-Drkmvmr5.js";import"./less-BOPdbN0q.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
