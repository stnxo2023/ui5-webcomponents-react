import{j as e}from"./iframe-Ra0xSmd4.js";import{useMDXComponents as o}from"./index-B1uewCO1.js";import{I as r}from"./CommandsAndQueries-BEtDWerI.js";import{M as l,C as a}from"./blocks-B8uzJZ3S.js";import"./Tag-vCzc8lpN.js";import"./index-DhDYAwwg.js";import"./copy-Cehqzola.js";import{F as c}from"./Footer-BXZI9V38.js";import"./PageNotFound-DAzm2SbT.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-ssQBIa1a.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-Cw9gqE6M.js";import"./index-UbhsERGe.js";import"./index-DxchSxRT.js";import"./index-BhvLG_bo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cr-PyOpa.js";import"./addCustomCSSWithScoping-CcLMh_2y.js";import"./index-CCqLDoAJ.js";import"./index-CiJZaHkZ.js";import"./index-Dh9i0xFK.js";import"./information-hzJ5lLQH.js";import"./sys-enter-2-weVfOb1a.js";import"./alert-BkoFHfp8.js";import"./index-BHry3UrI.js";import"./Illustrations-DuEXDQCv.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BzAfa2O0.js";import"./delete-BlJSnspk.js";import"./settings-CnhD6x-f.js";import"./NoData-BRWK73b6.js";import"./NoFilterResults-ByK9y8bo.js";import"./index-hlONtznb.js";import"./IllustratedMessage-DH81lWhH.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-DADJiQQB.js";import"./Input-hYN12Gd7.js";import"./ResponsivePopoverCommon.css-D79T12cj.js";import"./ValueStateMessage.css-BEyluAo8.js";import"./Suggestions.css-CZemgMCI.js";import"./ListBoxItemGroupTemplate-CkuipRkL.js";import"./ComboBoxItemGroup-BjqeHnC8.js";import"./ListItemBaseTemplate-DDF3F_sC.js";import"./Token-CsZP01nz.js";import"./ScrollEnablement-Dp-oqGSv.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CFffdE_7.js";import"./ToggleButton-BCMZO5K5.js";import"./multiselect-all-C9UpqjqM.js";import"./SuggestionItem-CRRSDxMr.js";import"./index-CgESqE8U.js";import"./Option-BToNbCEU.js";import"./index-BgXYskEj.js";import"./SegmentedButton-CdZJl0fK.js";import"./index-InyxuXtV.js";import"./Select-xNN_GioC.js";import"./InvisibleMessage-Nn0M2iFm.js";import"./index-CIhvul5w.js";import"./index-pIofiyof.js";import"./index-BBRryWn1.js";import"./index-C7nsWfZ0.js";import"./IconDesign-DXd8PPVF.js";import"./filter-7YCHc_s2.js";import"./group-2-BOcnnuw4.js";import"./sort-descending-Cgjiy5DM.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BodfA0Gi.js";import"./utils-BLx_e7Yk.js";import"./index-qcFZyMu_.js";import"./index-DYjZTUhi.js";import"./index-DjymOdJY.js";import"./navigation-down-arrow-BWhK4CvM.js";import"./navigation-right-arrow-eBw-UtsM.js";import"./navigation-right-arrow-Buva5oL1.js";import"./useCurrentTheme-BUBcvRiI.js";import"./index-mlILjk2I.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DQnXSe3U.js";import"./paper-plane-CivMq3tA.js";import"./index-BKI5E3Yv.js";import"./less-WQ1GwY14.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
