import{j as e}from"./iframe-DQUr2w9e.js";import{useMDXComponents as o}from"./index-uEfBZmVP.js";import{I as l,F as r}from"./CommandsAndQueries-BHqFNGC1.js";import{M as a,C as c}from"./blocks-CTU8TRaT.js";import"./Tag-CGtAgsci.js";import"./index-CHsUWkTe.js";import"./copy-DGFXVa9Z.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-SPeB0i7X.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BbVmwePH.js";import"./index-2aCTTGoH.js";import"./index-BtkqIySi.js";import"./Link-BHxA_VPp.js";import"./index-CSO1LyL1.js";import"./index-B4uSF3Nb.js";import"./index-CNdVS1MW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BpPxZFHh.js";import"./addCustomCSSWithScoping-CYkIrudw.js";import"./index-4ddJk1R_.js";import"./information-BjEP1Brt.js";import"./sys-enter-2-ByVlGYkM.js";import"./alert-B-w-1j20.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B0oXpXse.js";import"./delete-CKJlw0ul.js";import"./settings-BqZXbBzz.js";import"./NoData-CTfdrvzI.js";import"./IllustratedMessage-dFsirP1_.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-NmYqQAmV.js";import"./index-BfpPLO0z.js";import"./index-aZ35b9A0.js";import"./slim-arrow-down-BLkEvkYI.js";import"./Input-BJ886YXD.js";import"./ResponsivePopoverCommon.css-DUGj3C9j.js";import"./ValueStateMessage.css-DPUhzbsV.js";import"./Suggestions.css-CbdO06AC.js";import"./ListBoxItemGroupTemplate-C3D3SS1D.js";import"./ComboBoxItemGroup-Cal7Qapr.js";import"./ListItemBaseTemplate-LMCDkFyc.js";import"./Token-BqJOakxt.js";import"./ScrollEnablement-CQrRan6G.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-55PzQGAK.js";import"./ToggleButton-XKDt_BMd.js";import"./SuggestionItem-Bq6dqzFI.js";import"./index-BNBBhcR5.js";import"./Option-DSK6MS5F.js";import"./index-CoKAYfuw.js";import"./SegmentedButton-DyE0zOmq.js";import"./index-d-fBwfZp.js";import"./Select-DkZSi5CF.js";import"./InvisibleMessage-DVNnV7lb.js";import"./slim-arrow-down-DsQdRoV3.js";import"./index-DXtBm23l.js";import"./index-EOPyMVa_.js";import"./index-Cf9XpyMJ.js";import"./index-v9z5Zdm8.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DlQVZrE2.js";import"./group-2-BlX12n4R.js";import"./sort-descending-Dh1rcEGz.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CxR_3u2a.js";import"./utils-ru1t-ijs.js";import"./index-C3E04by4.js";import"./index-C9Yvpw-p.js";import"./index-D38IEv3D.js";import"./navigation-down-arrow-MdREaxMc.js";import"./navigation-right-arrow-VpBpYwUO.js";import"./navigation-right-arrow-D80pj5jS.js";import"./useCurrentTheme-DnzGvo4K.js";import"./index-NRqn2cP6.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-hjHvlJ0f.js";import"./paper-plane-dLhNd5G8.js";import"./index-D3fHXWzm.js";import"./less-CgyKfQmL.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
