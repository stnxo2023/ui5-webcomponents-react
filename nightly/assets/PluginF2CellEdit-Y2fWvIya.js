import{j as e}from"./iframe-MOZTZvx5.js";import{useMDXComponents as o}from"./index-Dg_uAO8t.js";import{I as l,F as r}from"./CommandsAndQueries-D1cXr-nE.js";import{M as a,C as c}from"./blocks-OWx-zaQy.js";import"./Tag-D4CUHK9_.js";import"./index-BgV1CUPM.js";import"./copy-1ZgkFucr.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-Cw0HPS5N.js";import"./preload-helper-PPVm8Dsz.js";import"./index-jWV64fa4.js";import"./index-Wo6cIUDI.js";import"./index-BVuz7GOm.js";import"./Link-D6y2NVEd.js";import"./index-D_H2FzQ8.js";import"./index-BfSH4rx9.js";import"./index-CT3JBxRK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DgDY8vOY.js";import"./addCustomCSSWithScoping-C-qiC_lj.js";import"./index-Vm6d87Cs.js";import"./information-BmrOjFlN.js";import"./sys-enter-2-CJ54mtHu.js";import"./alert-CvnXXdTy.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DhneGV7w.js";import"./delete-Bn5gdNgE.js";import"./settings-Cbx-epPE.js";import"./NoData-BJR7iwul.js";import"./IllustratedMessage-YE7gLYpT.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-Jm7E3NGo.js";import"./index-C8xadZxD.js";import"./index-BLa13CRy.js";import"./slim-arrow-down-Cc4bNxF2.js";import"./Input-VwoOlGdU.js";import"./ResponsivePopoverCommon.css-NhonNuZc.js";import"./ValueStateMessage.css-B4GAmP9X.js";import"./Suggestions.css-DA1a_gYi.js";import"./ListBoxItemGroupTemplate-Dx4qYl7E.js";import"./ComboBoxItemGroup-Bw3Iaycs.js";import"./ListItemBaseTemplate-BZSLWu4w.js";import"./Token-DbnH4QPK.js";import"./ScrollEnablement-BN64g5L9.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-3bCIQ3yY.js";import"./ToggleButton-OlwgaROV.js";import"./SuggestionItem-CQ-oefH8.js";import"./index-oXUFSANu.js";import"./Option-U0m19n5L.js";import"./index-CY3YewAo.js";import"./SegmentedButton-rkgekSAQ.js";import"./index-C9UJ92uP.js";import"./Select-HunAogfG.js";import"./InvisibleMessage-B6eggr2u.js";import"./slim-arrow-down-CSnytLmB.js";import"./index-DKau9-Kv.js";import"./index-CnG-Mf1G.js";import"./index-ChNWUHOB.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CNuVE1dN.js";import"./group-2-DYeh0LPK.js";import"./sort-descending-CVlDQhaZ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BcUA259N.js";import"./utils-BOAuSk9m.js";import"./index-BUkrgD3V.js";import"./index-BbzY9xji.js";import"./index-NwVlg13M.js";import"./navigation-down-arrow-Dw2CvikE.js";import"./navigation-right-arrow-DRazBLZW.js";import"./navigation-right-arrow-BxyRDEC9.js";import"./useCurrentTheme-wbA7IpXG.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Bdi_NLBI.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Csl6zSRf.js";import"./paper-plane-DH1_vU7X.js";import"./index-Bs-jL4oy.js";import"./less-DPf2C5zX.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
