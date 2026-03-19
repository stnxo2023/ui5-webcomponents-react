import{j as e}from"./iframe-DZQsFHyF.js";import{useMDXComponents as o}from"./index-FeafUf3S.js";import{I as r}from"./CommandsAndQueries-Q7QL049M.js";import{M as l,C as a}from"./blocks-CCR5dlte.js";import"./Tag-njT3oUWj.js";import"./index-FZQI4JeT.js";import"./copy-B0ak1fDk.js";import{F as c}from"./Footer-1JL6Y-Rs.js";import"./PageNotFound-CAJJq4gT.js";import{F2CellEdit as s}from"./AnalyticalTableHooks.stories-BuH-VEXs.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-Dy7YK0fU.js";import"./index-CmNuhxCj.js";import"./index-C2RcbU_s.js";import"./index-QENyXe96.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DsnnpcUC.js";import"./addCustomCSSWithScoping-BZT-QmME.js";import"./index-DGD79lBE.js";import"./index-CeHR91It.js";import"./index-JUdhH85j.js";import"./information-Byx_k42O.js";import"./sys-enter-2-CNKaU8fp.js";import"./alert-HiA3dax7.js";import"./index-CHkzxhcQ.js";import"./Illustrations-BlaFZAWE.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BJaohFVO.js";import"./delete-Bb9u1YlP.js";import"./settings-uxlfm5Eb.js";import"./NoData-DH1nVKCg.js";import"./NoFilterResults-CG83QGUe.js";import"./index-CKx2XrjC.js";import"./IllustratedMessage-8KXEKgMw.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-8Xbwx2Wl.js";import"./Input-DmDSg_Bp.js";import"./ResponsivePopoverCommon.css-CH3mALXJ.js";import"./ValueStateMessage.css-EXmMX5gs.js";import"./Suggestions.css-D2AfaPCJ.js";import"./ListBoxItemGroupTemplate-Ci0HBhCE.js";import"./ComboBoxItemGroup-nne4TIrE.js";import"./ListItemBaseTemplate-Ch_-zEJx.js";import"./Token-xIAyAS3n.js";import"./ScrollEnablement-Dl_lVbGP.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Du0wWGOA.js";import"./ToggleButton-CspSetq-.js";import"./multiselect-all-BaBAM3Qb.js";import"./SuggestionItem-CFEQvlUI.js";import"./index-BHH5WRWL.js";import"./Option-QnZNpfzw.js";import"./index-CvTa720j.js";import"./SegmentedButton-CEotyn2T.js";import"./index-CmxjBI6a.js";import"./Select-CJA0uPpx.js";import"./InvisibleMessage-BsWqZsBR.js";import"./index-sT6FfzL6.js";import"./index-C04kPmdl.js";import"./index-DvQYN9Bt.js";import"./index-YUMYtLpT.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DtCjc-pZ.js";import"./group-2-CWzLUS9i.js";import"./sort-descending-Brd47D1-.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-2s676dlH.js";import"./utils-CiQDjwNo.js";import"./index-BRePqaMI.js";import"./index-CAfOvHqP.js";import"./index-BY2jPfZG.js";import"./navigation-down-arrow-CkKFs3Xb.js";import"./navigation-right-arrow-BRDXxiyk.js";import"./navigation-right-arrow-CKEx--_J.js";import"./useCurrentTheme-CrJ4zyBU.js";import"./index-DCkgTfYz.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BHLafzmS.js";import"./paper-plane-21WFZ1Hz.js";import"./index-3r1XMCEK.js";import"./less-ByfJ7hLk.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useF2CellEdit"}),`
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
