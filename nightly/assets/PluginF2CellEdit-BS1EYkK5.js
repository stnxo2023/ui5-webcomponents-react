import{j as e}from"./iframe-OU-rKGVl.js";import{useMDXComponents as o}from"./index-BdFoQaN_.js";import{I as l,F as r}from"./CommandsAndQueries-1YsKNX6u.js";import{M as a,C as c}from"./blocks-90C6s9DB.js";import"./Tag-BGeGdyvC.js";import"./index-CvYMziHu.js";import"./copy-ukTvQIks.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-CCULtsWI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BlWEaWz4.js";import"./index-B5S-I-wQ.js";import"./index-BCzS-sMX.js";import"./Link-DUV5jdr_.js";import"./index-Cy3EQ66_.js";import"./index-M6X6hbjk.js";import"./index-CvP3_iIG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DeGn29mr.js";import"./addCustomCSSWithScoping-BqWgeVkc.js";import"./index-CvIaP9X3.js";import"./information-DJNA9m3t.js";import"./sys-enter-2-Cr3cjNlh.js";import"./alert-Czqp44ew.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BGo6vKhl.js";import"./delete-_xztDnX7.js";import"./settings-CwmWqfy-.js";import"./NoData-BNu6Ou9F.js";import"./IllustratedMessage-Du7cTspw.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-B8-nnn9a.js";import"./index-BY5HHzcI.js";import"./index-Cq-fj5gm.js";import"./slim-arrow-down-vaMbUVTQ.js";import"./Input-B4YLSXwH.js";import"./ResponsivePopoverCommon.css-Bzv7nheL.js";import"./ValueStateMessage.css-UI9OOvTY.js";import"./Suggestions.css-BymAQ3Y4.js";import"./ListBoxItemGroupTemplate-DvCKbQ3V.js";import"./ComboBoxItemGroup-CKFYNVAp.js";import"./ListItemBaseTemplate-eGcqzXUs.js";import"./Token-DMjAKD8x.js";import"./ScrollEnablement-C7rUKtrC.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CxAFUNDr.js";import"./ToggleButton-EwMGFEkd.js";import"./SuggestionItem-CvAGY5Sq.js";import"./index-DTRkoFlC.js";import"./Option-DtkTSrk6.js";import"./index-Cf-s1qG0.js";import"./SegmentedButton-C67q4Csu.js";import"./index-C8V2aso4.js";import"./Select-DGZ5ZJGF.js";import"./InvisibleMessage-Dv2nzf5u.js";import"./slim-arrow-down-DxmGsJVh.js";import"./index-Dy0XpXnL.js";import"./index-DY2olzvX.js";import"./index-BOHa5n-X.js";import"./index-Bv6B9-dk.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BtBGaZRL.js";import"./group-2-CfykcAeN.js";import"./sort-descending-BtOSPJ2K.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DzoQYUdz.js";import"./utils-C0mg2yQM.js";import"./index-CXggoDTH.js";import"./index-B8n4hNMo.js";import"./index-BWr4kG0m.js";import"./navigation-down-arrow-V4PkR50p.js";import"./navigation-right-arrow-CDyYktkW.js";import"./navigation-right-arrow-CH-kCDBe.js";import"./useCurrentTheme-BcmpDbsZ.js";import"./index-Dh82-zLH.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BiiM2WaD.js";import"./paper-plane-C06ESYz6.js";import"./index-Bjb9tiJS.js";import"./less-aYFPVRCg.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
