import{j as e}from"./iframe-5rXfnPaz.js";import{useMDXComponents as o}from"./index-BqyI3aT9.js";import{I as l,F as r}from"./CommandsAndQueries-Xz4gCbJR.js";import{M as a,C as c}from"./blocks-_HtGHxpQ.js";import"./Tag-BLU9xLwR.js";import"./index-TJORVIjM.js";import"./copy-3qQuBQub.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CcOUaagY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D3cU9WTA.js";import"./index-BB6TdVmi.js";import"./index-BgPkgqrz.js";import"./Link-IINvsuro.js";import"./index-X9fuUMPC.js";import"./index-DVjD8wbo.js";import"./index-Bna4bEkh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BikUYAZO.js";import"./addCustomCSSWithScoping-Cv8BQzm9.js";import"./index-DN9fi-2P.js";import"./information-C9cuRXqE.js";import"./sys-enter-2-y9J_ETy2.js";import"./alert-CnXddf7Q.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CnsKBKKm.js";import"./delete-CqVU8QSy.js";import"./settings-C6C2rMP5.js";import"./NoData-C6zrEqdJ.js";import"./IllustratedMessage-DVsNM8KB.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BY5FKPNb.js";import"./index-B2arcq-S.js";import"./index-Bxgt3Ou_.js";import"./slim-arrow-down-CG38GsAh.js";import"./Input-4O3kRwLq.js";import"./ResponsivePopoverCommon.css-C1xBOZoa.js";import"./ValueStateMessage.css-BdW6AGS6.js";import"./Suggestions.css-BLWo3F15.js";import"./ListBoxItemGroupTemplate-BZVK3C21.js";import"./ComboBoxItemGroup-BWv8Jfn6.js";import"./ListItemBaseTemplate-CP6xKZ4g.js";import"./Token-BUGkfYZH.js";import"./ScrollEnablement-C55G51IY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cua6cuRg.js";import"./ToggleButton-BeKGXq8p.js";import"./SuggestionItem-Cz6KMxHh.js";import"./index-Bij98Q-R.js";import"./Option-B7oChQ-z.js";import"./index-BQE7n4xd.js";import"./SegmentedButton-BsxmG9wr.js";import"./index-BmXkEItO.js";import"./Select-Cw6Szu5N.js";import"./InvisibleMessage-lYBgp4_P.js";import"./slim-arrow-down-BJXvyOyf.js";import"./index-0cRpwkC4.js";import"./index-VzaEEiDt.js";import"./index-B15VKN5k.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BzinyoGp.js";import"./group-2-BQu0Iyd9.js";import"./sort-descending-rgN241_I.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-ZZRaGFiZ.js";import"./utils-CkPWUOLN.js";import"./index-D0YwngEh.js";import"./index-DGROWVtJ.js";import"./index-Ct1kN3_s.js";import"./navigation-down-arrow-CN6lpdwx.js";import"./navigation-right-arrow-_aRbtzGU.js";import"./navigation-right-arrow-DxIZ5HVF.js";import"./useCurrentTheme-PC0lES2v.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B0PC4qEQ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cij_psQ1.js";import"./paper-plane-CpxuoSNW.js";import"./index-D89dDm_o.js";import"./less-arHg6uEN.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
