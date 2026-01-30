import{j as e}from"./iframe-D2NU56Rf.js";import{useMDXComponents as o}from"./index-PnjEbenM.js";import{I as l,F as r}from"./CommandsAndQueries-29xiV4Jg.js";import{M as a,C as c}from"./blocks-DZ0UXwr1.js";import"./Tag-gDuKwEK0.js";import"./index-BUSq7sbq.js";import"./copy-2VqtSmY4.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-ZbakYZtm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B7GdD8iT.js";import"./index-B9i47eba.js";import"./index-Un1NcZ-Y.js";import"./Link-O92RF9SA.js";import"./index-Dje3V7QZ.js";import"./index-4WW0oGrP.js";import"./index-CgZch3zg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CHOcvBV5.js";import"./addCustomCSSWithScoping-CUv8r2Rw.js";import"./index-jUVFgVlz.js";import"./information-D0vbTy2i.js";import"./sys-enter-2-VpvNFzz0.js";import"./alert-BQIN7sJt.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C-w4OQT-.js";import"./delete-C7Xgu3fR.js";import"./settings-C9R5wtHO.js";import"./NoData-Cq6XCPbf.js";import"./IllustratedMessage-SMl1msrS.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-Qm3Bc51e.js";import"./index-CXQ9TlNQ.js";import"./index-nEIt-vae.js";import"./slim-arrow-down-CM6lEZEE.js";import"./Input-DaL4-DtU.js";import"./ResponsivePopoverCommon.css-BiNMVLeP.js";import"./ValueStateMessage.css-CuKAeQ_D.js";import"./Suggestions.css-RnxMuMvw.js";import"./ListBoxItemGroupTemplate-Dz3TXsUQ.js";import"./ComboBoxItemGroup-BXCWC692.js";import"./ListItemBaseTemplate-BbOMO38P.js";import"./Token-CTqQ2vo2.js";import"./ScrollEnablement-B2R8AjnU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BIEX9q1d.js";import"./ToggleButton-zJBrjEVR.js";import"./SuggestionItem-2sr87sHw.js";import"./index-Iu7bkkY4.js";import"./Option-BiKS04Lw.js";import"./index-WvKxdzdh.js";import"./SegmentedButton-BQz7Epju.js";import"./index-Bu0JLayq.js";import"./Select-ree90dyr.js";import"./InvisibleMessage-DXtpTzED.js";import"./slim-arrow-down-BnBg9S_U.js";import"./index-CxXm1z84.js";import"./index-D9jywx_4.js";import"./index-BdNQFRAd.js";import"./index-CoXQm9zc.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dm126kNX.js";import"./group-2-BkGRWPAG.js";import"./sort-descending-BxfyQJVH.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DCiN1loq.js";import"./utils-o-V_reuI.js";import"./index-CleMm7uf.js";import"./index-Bo5Haci7.js";import"./index-D4iqPqxf.js";import"./navigation-down-arrow-BYO53pAx.js";import"./navigation-right-arrow-C6Zb3cwl.js";import"./navigation-right-arrow-IKuy3H_N.js";import"./useCurrentTheme-ttlaH6tG.js";import"./index-V5WOMRHm.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BmdyIu_o.js";import"./paper-plane-6KY-vdDs.js";import"./index-B40iZj12.js";import"./less-CwcF3uHB.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
