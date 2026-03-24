import{j as e}from"./iframe-DBRigOoU.js";import{useMDXComponents as o}from"./index-apRVXKap.js";import{I as r}from"./CommandsAndQueries-CSuPwIuY.js";import{M as l,C as a}from"./blocks-BfIRBmeA.js";import"./Tag-DEWl5_iK.js";import"./index-CtZlHOCH.js";import"./copy-D7myjbZ2.js";import{F as c}from"./Footer-C0l-yj0s.js";import"./PageNotFound-CQZvX7Tj.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-B11QIys0.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-WDyL8T_Q.js";import"./index-NhTjO4vR.js";import"./index-BAsbE3_A.js";import"./index-u05fNeKh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bc6gryl9.js";import"./addCustomCSSWithScoping-Oz7AbKTz.js";import"./index-DxEJ2UxM.js";import"./index-DybExlT-.js";import"./index-DWKSf_OJ.js";import"./information-Di_zbJNn.js";import"./sys-enter-2-CpC_ZrXX.js";import"./alert-CuS5B2OC.js";import"./index-C-7GLaxU.js";import"./Illustrations-aiaUW8Wr.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-7qA_JtjR.js";import"./delete-CTGykAkJ.js";import"./settings-Dg8O-66-.js";import"./NoData-DguEQNRg.js";import"./NoFilterResults-DtRFGhMh.js";import"./index-BhR_yJpK.js";import"./IllustratedMessage-ByVRx6RQ.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-D6CltELs.js";import"./Input-CtHTs60C.js";import"./ResponsivePopoverCommon.css-Da1SZvGe.js";import"./ValueStateMessage.css-nbS3DH35.js";import"./Suggestions.css-W26MlxzS.js";import"./ListBoxItemGroupTemplate-C6kkFi_o.js";import"./ComboBoxItemGroup-BElYaVDv.js";import"./ListItemBaseTemplate-CQKCVtx8.js";import"./Token-sjwuvo1P.js";import"./ScrollEnablement-D2Hwnqmj.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BfX1rpOQ.js";import"./ToggleButton-CBS-G2ZN.js";import"./multiselect-all-DN-bH4h7.js";import"./SuggestionItem-BdsM9iKO.js";import"./index-DtdveVs3.js";import"./Option-BiUpRTT7.js";import"./index-BRz6iuWA.js";import"./SegmentedButton-Bi1zUA1m.js";import"./index-DWQUGHoP.js";import"./Select-ozqLHBcF.js";import"./InvisibleMessage-CdaXnoMp.js";import"./index-BSmsbgeq.js";import"./index-caETFkvA.js";import"./index-Dg9lVvz1.js";import"./index-BFhPQQPD.js";import"./IconDesign-DXd8PPVF.js";import"./filter-p9qYgOWh.js";import"./group-2-BnNeS8WE.js";import"./sort-descending-DdagI1nq.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-rB7yhNqF.js";import"./utils-CCmbeTCZ.js";import"./index-BqTTgId_.js";import"./index-CrXK0vZY.js";import"./index-aJnjZLGo.js";import"./navigation-down-arrow-BFJ7Hu2K.js";import"./navigation-right-arrow-82Tpqbaq.js";import"./navigation-right-arrow-DkEC0vdN.js";import"./useCurrentTheme-CD182pcz.js";import"./index-CNAb_u8i.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CEAvFyV7.js";import"./paper-plane-CREdbXKT.js";import"./index-C4eTaivo.js";import"./less-W_1D3jc4.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
