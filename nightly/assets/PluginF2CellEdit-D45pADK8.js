import{j as e}from"./iframe-CTCL6F1r.js";import{useMDXComponents as o}from"./index-COtiMl_W.js";import{I as r}from"./CommandsAndQueries-BsPL36Z9.js";import{M as l,C as a}from"./blocks-BWrgTR_X.js";import"./Tag-BL5Qfzs7.js";import"./index-DN-3xlKC.js";import"./copy-DEpsQlxb.js";import{F as c}from"./Footer-DeTYP8-R.js";import"./PageNotFound-D_xGTPNz.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CC0OaYO6.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-A2IdBIvD.js";import"./index-CeDd6fzK.js";import"./index-Dj3jefRS.js";import"./index-ByW0PFuk.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bj5cLhE3.js";import"./addCustomCSSWithScoping-Bp0u_2pD.js";import"./index-BzwM6I24.js";import"./index-DWmGRAcl.js";import"./index-9E9I64Wt.js";import"./information-CiEkIJMA.js";import"./sys-enter-2-Cm5ZOXv2.js";import"./alert-CwDd6vfH.js";import"./index-D_vdDgjG.js";import"./Illustrations-GQ99oYm_.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-UhOOQ59H.js";import"./delete-BVyans79.js";import"./settings-BGGRR6oU.js";import"./NoData-DjKCJeL5.js";import"./NoFilterResults-KXdQvW0p.js";import"./index-Bbc0mtX6.js";import"./IllustratedMessage-oNHAfvQF.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-qKlu78ML.js";import"./Input-CskqmG-U.js";import"./ResponsivePopoverCommon.css-DqU8u_Xb.js";import"./ValueStateMessage.css-Dz2ZBT4Q.js";import"./Suggestions.css-pJEqYvzu.js";import"./ListBoxItemGroupTemplate-BWUUjUK6.js";import"./ComboBoxItemGroup-Ded9KrxA.js";import"./ListItemBaseTemplate-CAbiTx4K.js";import"./Token-CkMexFhY.js";import"./ScrollEnablement-B00j-Abc.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DzDcm21T.js";import"./ToggleButton-CGGo1Tc6.js";import"./multiselect-all-DXXVxUOw.js";import"./SuggestionItem-DluIx3Vy.js";import"./index-CDclxXJI.js";import"./Option-BPLDlZYg.js";import"./index-BJ3aDD5w.js";import"./SegmentedButton-Bzy-4e_3.js";import"./index-DkQ2VIB6.js";import"./Select-B9gMG-Mb.js";import"./InvisibleMessage-0vTx7A5o.js";import"./index-BvUve-In.js";import"./index-Co_AA59G.js";import"./index-CFfYMp7H.js";import"./index-BksCzbKY.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CLAP-CGA.js";import"./group-2-DFK22c05.js";import"./sort-descending-CAFmujKH.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CcZpUEcN.js";import"./utils-CrwAwKdr.js";import"./index-B0bfBcoV.js";import"./index-RisHXePe.js";import"./index-zpAMMNek.js";import"./navigation-down-arrow-wVevGwwX.js";import"./navigation-right-arrow-0lpCtsn6.js";import"./navigation-right-arrow-DF7UFLN2.js";import"./useCurrentTheme-Bmu75wPA.js";import"./index-pVHPziZI.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CVAaEzsl.js";import"./paper-plane-BLB4ESVt.js";import"./index-BslbOjMF.js";import"./less-CJ6uBOiE.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
