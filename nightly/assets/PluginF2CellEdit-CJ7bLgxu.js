import{j as e}from"./iframe-BSil-P7u.js";import{useMDXComponents as o}from"./index-vt-1HXZR.js";import{I as l,F as r}from"./CommandsAndQueries-D6srY1_t.js";import{M as a,C as c}from"./blocks-DAd1jcGX.js";import"./Tag-C9JFY3U3.js";import"./index-DHsON_5K.js";import"./copy-CwHd1VH0.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Bxr1oTwn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-FBl5xz3h.js";import"./index-TzMEaDq9.js";import"./index-CoIXLnKn.js";import"./Link-qL_T98pU.js";import"./index-DYtE3L5B.js";import"./index-BEx2FW11.js";import"./index-DzdENY0T.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bp27VxQp.js";import"./addCustomCSSWithScoping-BLX4O9b7.js";import"./index-CM8rBgl_.js";import"./information-BmoL6a_m.js";import"./sys-enter-2-CRjOI67W.js";import"./alert-B93IgYs6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CoH36o8l.js";import"./delete-BI-937IP.js";import"./settings-CuEyn2tk.js";import"./NoData-CGFrF-GJ.js";import"./IllustratedMessage-bk9jckQm.js";import"./i18n-defaults-BTYpTGpY.js";import"./parameters-bundle.css-B37gDvcF.js";import"./NoFilterResults-DJ4x8n8R.js";import"./index-DM1cWKd-.js";import"./index-BAOnjwgh.js";import"./slim-arrow-down-CceGcM8g.js";import"./Input-Brq604ts.js";import"./ResponsivePopoverCommon.css-D6ugJ8J6.js";import"./ValueStateMessage.css-Bl9ehnfn.js";import"./Suggestions.css-DL5LMP4f.js";import"./ListBoxItemGroupTemplate-DTEnhQcP.js";import"./ComboBoxItemGroup-D278rfHD.js";import"./ListItemBaseTemplate-XePtjjIP.js";import"./Token-BjQ1h7zj.js";import"./ScrollEnablement-BseTvxzn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Co9OiWLE.js";import"./ToggleButton-CucfFvuo.js";import"./SuggestionItem-D-NzBmhj.js";import"./index-x2opHf5c.js";import"./Option-D_fhd8yQ.js";import"./index-0XEIKLHq.js";import"./SegmentedButton-CxPgyCvs.js";import"./index-B4ETCzn3.js";import"./Select-DIzgGRIh.js";import"./InvisibleMessage-8W7RFh9p.js";import"./slim-arrow-down-CEMmPYc4.js";import"./index-dpHfrh8L.js";import"./index-B81hxV8d.js";import"./index-BSCj-pol.js";import"./index-BxBIGX03.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DDvkMb7O.js";import"./group-2-B3KKCYd6.js";import"./sort-descending-xaSeLobU.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CwWYxgbu.js";import"./utils-BC-DJmvs.js";import"./index-BosJcweM.js";import"./index-BDjwx27j.js";import"./index-BBoe6R2N.js";import"./navigation-down-arrow-DZHe0qjz.js";import"./navigation-right-arrow-B-M3EsUK.js";import"./navigation-right-arrow-Caxsuv4H.js";import"./useCurrentTheme-BWoqnafC.js";import"./index-BbeYWMcG.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B8wJR6kV.js";import"./paper-plane-CJEv3WjG.js";import"./index-CBHCu-XZ.js";import"./less-Cu4-mAFi.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
