import{j as e}from"./iframe-DNJyEiMc.js";import{useMDXComponents as o}from"./index-Buf0tSMZ.js";import{I as r}from"./CommandsAndQueries-Buhz4vLI.js";import{M as l,C as a}from"./blocks-Cd1leuxf.js";import"./Tag-D8I94QaD.js";import"./index-BGa7wgQo.js";import"./copy-DriogBoE.js";import{F as c}from"./Footer-DsUhWQr2.js";import"./PageNotFound-CGNJPiuA.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-C53u1_Kf.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CHa9FW0P.js";import"./index-bWFHrqMY.js";import"./index-DcpLgbSq.js";import"./index-BNiXpovA.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cm_sH4gX.js";import"./addCustomCSSWithScoping-QHxNEQro.js";import"./index-CRk1MYZt.js";import"./index-DfQ2RFhn.js";import"./index-C8jwJsjc.js";import"./information-CKmAqDt9.js";import"./sys-enter-2-D1jYlQdI.js";import"./alert-BbM4Afj3.js";import"./index-DbBWaCWe.js";import"./Illustrations-8c1koKlL.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-LDPF3a89.js";import"./delete-cDZQdjVT.js";import"./settings-1s8BgQ_X.js";import"./NoData-WB6dabXf.js";import"./NoFilterResults-C5qt1K5x.js";import"./index-B8R9QwDI.js";import"./IllustratedMessage-DYh6wrAv.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BRVCdBaU.js";import"./Input-BwK_QO9m.js";import"./ResponsivePopoverCommon.css-DxGEQbl-.js";import"./ValueStateMessage.css-CgtkZrlq.js";import"./Suggestions.css-BOqaBsuR.js";import"./ListBoxItemGroupTemplate-CG0K-vjN.js";import"./ComboBoxItemGroup-AEcqyCPy.js";import"./ListItemBaseTemplate-BaNeY2LZ.js";import"./Token-mARndugh.js";import"./ScrollEnablement-gz1VS6rK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-yQaKLV68.js";import"./ToggleButton-Dq2kuoFa.js";import"./multiselect-all-BO8qqm2c.js";import"./SuggestionItem-JF6p_ddH.js";import"./index-B1-VZ-EY.js";import"./Option-DgY580TS.js";import"./index-CKPijgn-.js";import"./SegmentedButton-BIM0H3kM.js";import"./index-8XBAuycd.js";import"./Select-Ck3oYLRD.js";import"./InvisibleMessage-BoXj5AU1.js";import"./index-DqeRRPs0.js";import"./index-BPOoRnkM.js";import"./index-BiBEuW4q.js";import"./index-C4LD5Tmv.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DpOwQjR3.js";import"./group-2-DsaYD9Xx.js";import"./sort-descending-24nWTAR8.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BHlBOYOF.js";import"./utils-Byp4P8ND.js";import"./index-7feJEYJZ.js";import"./index-DjOPjAc9.js";import"./index-D-ZU151A.js";import"./navigation-down-arrow-DxMMwmKX.js";import"./navigation-right-arrow-33R7yPM9.js";import"./navigation-right-arrow-e5CJ7iL-.js";import"./useCurrentTheme-Qx4N1zdR.js";import"./index-CwHknFYt.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Di8TIgI9.js";import"./paper-plane--oliTSv-.js";import"./index-CS9CmAAh.js";import"./less-CbU3wJ7O.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
