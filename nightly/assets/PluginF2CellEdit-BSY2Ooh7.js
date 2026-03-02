import{j as e}from"./iframe-Brff1rmP.js";import{useMDXComponents as o}from"./index-CqBWQ9Zx.js";import{I as l,F as r}from"./CommandsAndQueries-Z2F9olV7.js";import{M as a,C as c}from"./blocks-Cx2b2NzS.js";import"./Tag-CO6ENRz9.js";import"./index-DlA7--5Z.js";import"./copy-Bv1OuOcO.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CjilTa_F.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cl8f3le-.js";import"./index-GNhj6rYz.js";import"./index-DYmdKmkq.js";import"./Link-CnNfKrga.js";import"./index-CHjRsrmQ.js";import"./index-BM_H4FxE.js";import"./index-SsKZpktE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-hZd9oRLF.js";import"./addCustomCSSWithScoping-DWThNXxY.js";import"./index-C7l_yPP_.js";import"./information-Cs5lMjWh.js";import"./sys-enter-2-D0GbakMF.js";import"./alert-DvXA8o8i.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DGKptoJD.js";import"./delete-C9vgo_nn.js";import"./settings-K-nxoclT.js";import"./NoData-D4gr7NQb.js";import"./IllustratedMessage-EHffJ8mB.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-xJ_W-ozk.js";import"./index-v9HL1hDi.js";import"./index-BK9Dppbt.js";import"./slim-arrow-down-DHZaQUOz.js";import"./Input-Dd38fmul.js";import"./ResponsivePopoverCommon.css-CCXZCmBy.js";import"./ValueStateMessage.css-DyEd-7MM.js";import"./Suggestions.css-A8d5VcXf.js";import"./ListBoxItemGroupTemplate-DDtryC-p.js";import"./ComboBoxItemGroup-DiF6Vj82.js";import"./ListItemBaseTemplate-BPRyBwPx.js";import"./Token-CGQBD38e.js";import"./ScrollEnablement-L6YMa_Sh.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CFw-rkJd.js";import"./ToggleButton-CJv8CO-v.js";import"./SuggestionItem-CFU47XHi.js";import"./index-xNbk8EkH.js";import"./Option-CrDw5azF.js";import"./index-BNRoZ_z-.js";import"./SegmentedButton-C-poCUsN.js";import"./index-_Xx0BHEx.js";import"./Select-Chae-TJe.js";import"./InvisibleMessage-ByZ2WPzN.js";import"./slim-arrow-down-C94xZ_93.js";import"./index-C4Pu6wgx.js";import"./index-B597IRDL.js";import"./index-Sey1U4Nj.js";import"./index-ByUJYxuO.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B1HOC25c.js";import"./group-2-Bl1lsFHE.js";import"./sort-descending-CLPvvO8q.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DuPpFX5n.js";import"./utils-CGg_sa7o.js";import"./index-ChaPxfcm.js";import"./index-X945bjAw.js";import"./index-Cft4P2eI.js";import"./navigation-down-arrow-Cb_GEVcv.js";import"./navigation-right-arrow-Dj8u635l.js";import"./navigation-right-arrow-C3t6w78M.js";import"./useCurrentTheme-DEOFEBbn.js";import"./index-BAklYe1X.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-utzGJSQW.js";import"./paper-plane-4WEe8zaP.js";import"./index-NLOcJtOO.js";import"./less-Cjh9x-Bl.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
