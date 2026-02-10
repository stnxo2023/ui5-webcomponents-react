import{j as e}from"./iframe-Bf1hlxgS.js";import{useMDXComponents as o}from"./index-B002OMKA.js";import{I as l,F as r}from"./CommandsAndQueries-BEe5YBSl.js";import{M as a,C as c}from"./blocks-CF_xVWI_.js";import"./Tag-BHAjLoAY.js";import"./index-p22CRHMo.js";import"./copy-D5BVEzvy.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BSgEoKJz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D-S325RU.js";import"./index-BciJGkl8.js";import"./index-hDeN6gmj.js";import"./Link-Bn0GO4LF.js";import"./index-BqDvsFmr.js";import"./index-BjKEmns7.js";import"./index-DhV0sN_I.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D7KxqJSV.js";import"./addCustomCSSWithScoping-BIqc26fM.js";import"./index-2lJhwVzj.js";import"./information-BXU6Hxbd.js";import"./sys-enter-2-BvfgNwob.js";import"./alert-B3TgQjln.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cb0z8X09.js";import"./delete-D8DWeF7d.js";import"./settings-Dh74knWL.js";import"./NoData-PZMeGE26.js";import"./IllustratedMessage-h1DOAdex.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-C3l4wxGh.js";import"./index-C5eIYaqM.js";import"./index-Bk0S-jnY.js";import"./slim-arrow-down-C4-n4KwM.js";import"./Input-Dqxhrjvq.js";import"./ResponsivePopoverCommon.css-Df1YsyQx.js";import"./ValueStateMessage.css-DXAAF2dF.js";import"./Suggestions.css-DM_nm0RD.js";import"./ListBoxItemGroupTemplate-C5qHO486.js";import"./ComboBoxItemGroup-DPlsTSsl.js";import"./ListItemBaseTemplate-BqEI7cM7.js";import"./Token-CPH3EVcO.js";import"./ScrollEnablement-Dfx6-CYw.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B9ipNNEN.js";import"./ToggleButton-D_L21r0E.js";import"./SuggestionItem-AhhjJ8Mh.js";import"./index-TUCbMDvM.js";import"./Option-CqSMarpV.js";import"./index-zS-bN0DU.js";import"./SegmentedButton-BicHJo62.js";import"./index-BK2139LG.js";import"./Select-FKh8tKiT.js";import"./InvisibleMessage-BnSLCX5X.js";import"./slim-arrow-down-amOGocIG.js";import"./index-BmHDaJX3.js";import"./index-C-eVdq9L.js";import"./index-BC1Ed97q.js";import"./index-ChBbQCuo.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DjkvSi-l.js";import"./group-2-BBxRQHAf.js";import"./sort-descending-BoIXgBQJ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DtECT_FH.js";import"./utils-BC9PCMpX.js";import"./index-CszV8wTC.js";import"./index-CxOmA48X.js";import"./index-DNt1wk0D.js";import"./navigation-down-arrow-DmEpUMgP.js";import"./navigation-right-arrow-Bu3lyT6l.js";import"./navigation-right-arrow-BBudxr1z.js";import"./useCurrentTheme-gu6EY9KG.js";import"./index-VBVjOL-U.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D-Rd56YE.js";import"./paper-plane-CEqXSyIK.js";import"./index-CSGuzL_r.js";import"./less-C1jg6kBH.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
