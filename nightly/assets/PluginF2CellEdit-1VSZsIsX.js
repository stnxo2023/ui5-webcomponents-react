import{j as e}from"./iframe-DoO3B8k6.js";import{useMDXComponents as o}from"./index-c3qBf9j-.js";import{I as l,F as r}from"./CommandsAndQueries-BgTP9rvd.js";import{M as a,C as c}from"./blocks-SZ1zCtFT.js";import"./Tag-BQH01MnI.js";import"./index-0e8xkLwE.js";import"./copy-_xuz2Nel.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CmXCVKCh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BSLJX4WE.js";import"./index-CQlaTUTv.js";import"./index-DHXtHkXk.js";import"./Link-BjpII7wh.js";import"./index-DkL8yUNi.js";import"./index-DNsrF3vl.js";import"./index-DeXyQXgZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CRtsvWdt.js";import"./addCustomCSSWithScoping-BMQmLAx8.js";import"./index-DcEck9MJ.js";import"./information-CQ3_UNon.js";import"./sys-enter-2-04wFErlJ.js";import"./alert-TTaxVgBW.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CIhT2n-D.js";import"./delete-SjnFcxET.js";import"./settings-C0lq9GEs.js";import"./NoData-DfBjPnbb.js";import"./IllustratedMessage-CXdSvR4a.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-xMjYb9KY.js";import"./index-CpiZNEne.js";import"./index-DQXIYNyl.js";import"./slim-arrow-down-GZWBJmnW.js";import"./Input-C10NYIPu.js";import"./ResponsivePopoverCommon.css-CPXMLCds.js";import"./ValueStateMessage.css-69Ktf8Dg.js";import"./Suggestions.css-DN6X2W_Y.js";import"./ListBoxItemGroupTemplate-B5AqpDrM.js";import"./ComboBoxItemGroup-j1Qew58i.js";import"./ListItemBaseTemplate-BsAW94PE.js";import"./Token-DC4trEDg.js";import"./ScrollEnablement-vDfjB2It.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BmumZdm7.js";import"./ToggleButton-C4VP5bTt.js";import"./SuggestionItem-IO39S43j.js";import"./index-B94XsNA0.js";import"./Option-BaLD8Fma.js";import"./index-NWr0Tsrk.js";import"./SegmentedButton-X1XX7xUF.js";import"./index-C_c4Byeq.js";import"./Select-9rIpwA3F.js";import"./InvisibleMessage-CgykMR3a.js";import"./slim-arrow-down-t7AVMtWo.js";import"./index-DQKXzwtk.js";import"./index-D9vcEjIT.js";import"./index-MnZkDyaG.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ynF8pjf8.js";import"./group-2-Detpstok.js";import"./sort-descending-B0qjzB_P.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B_g-vZKh.js";import"./utils-LOEo2xLm.js";import"./index-GNYcE7dh.js";import"./index-DXQ56gFw.js";import"./index-BZhKH3An.js";import"./navigation-down-arrow-B33glP6f.js";import"./navigation-right-arrow-CD5NCtjH.js";import"./navigation-right-arrow-BNO-nAvK.js";import"./useCurrentTheme-DlkHXRgd.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DVfnIZQS.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D0_rTS9I.js";import"./paper-plane-BCWKCy3u.js";import"./index-DZMzSe-F.js";import"./less-2TELAs2h.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
