import{j as e}from"./iframe-BBABn56p.js";import{useMDXComponents as o}from"./index-JaA5rKoZ.js";import{I as l,F as r}from"./CommandsAndQueries-BQ3fu09v.js";import{M as a,C as c}from"./blocks-C48pq8eI.js";import"./Tag-2o8WwGUn.js";import"./index-CDfsiwkh.js";import"./copy-DZ9Ywk1q.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-DkIX-1rK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-J2oyeWCO.js";import"./index-CKtBuMmX.js";import"./index-DWO5htBk.js";import"./Link-Ber6JvTK.js";import"./index-bK0pQ8Eu.js";import"./index-D_78KBK9.js";import"./index-BkrG37On.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BGZzwSbc.js";import"./addCustomCSSWithScoping-BtxahzH2.js";import"./index-Ckf8DLFv.js";import"./information-BZFlG9j_.js";import"./sys-enter-2-DjgAxbYG.js";import"./alert-CS_Fjm7A.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BAH4TUxy.js";import"./delete-DsWdS96_.js";import"./settings-Df6DL7Gq.js";import"./NoData-BNjlB7uw.js";import"./IllustratedMessage-Di319cue.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-BsO5uN5a.js";import"./index-DhLGJCjj.js";import"./index-BqTDCnco.js";import"./slim-arrow-down-BG1nt-P_.js";import"./Input-CYLSHt27.js";import"./ResponsivePopoverCommon.css-BpyfczN_.js";import"./ValueStateMessage.css-B7LgM9S6.js";import"./Suggestions.css-CEnMSpxy.js";import"./ListBoxItemGroupTemplate-DMJ27KCA.js";import"./ComboBoxItemGroup-DdXTq1Vh.js";import"./ListItemBaseTemplate-DaYbGn7R.js";import"./Token-CJDolX8T.js";import"./ScrollEnablement-BLTuKYfn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B5ygJNfI.js";import"./ToggleButton-7E3RKcQ8.js";import"./SuggestionItem-Bine1zmz.js";import"./index-B6Q789ah.js";import"./Option-BjUcgJcl.js";import"./index-Ch7wW-jX.js";import"./SegmentedButton-DhLiQXqU.js";import"./index-6d4BSX0F.js";import"./Select-BKOJ5f1a.js";import"./InvisibleMessage-W81utmZk.js";import"./slim-arrow-down-CNYLbtEw.js";import"./index-BEp2nlaX.js";import"./index-CPKR6tvC.js";import"./index-BCqZx7KV.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Bg-CqXDw.js";import"./group-2-UoqYeskz.js";import"./sort-descending-BBmoGOXL.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BJgZ-Sj2.js";import"./utils-CQ2iljMS.js";import"./index-BlzTje2S.js";import"./index-10H1aut2.js";import"./index-CJlMvGeI.js";import"./navigation-down-arrow-CZ7v8mT2.js";import"./navigation-right-arrow-GIyVM7JZ.js";import"./navigation-right-arrow-BtregVCK.js";import"./useCurrentTheme-CTzRqOqk.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BfiFzDtl.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BoTjglKk.js";import"./paper-plane-D5Xcc4aT.js";import"./index-FOPI05Cv.js";import"./less-DX_0GEda.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
