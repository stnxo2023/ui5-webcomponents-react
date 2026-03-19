import{j as o}from"./iframe-DZQsFHyF.js";import{useMDXComponents as r}from"./index-FeafUf3S.js";import{I as n}from"./CommandsAndQueries-Q7QL049M.js";import{M as m,C as p}from"./blocks-CCR5dlte.js";import"./Tag-njT3oUWj.js";import"./index-FZQI4JeT.js";import"./copy-B0ak1fDk.js";import{F as s}from"./Footer-1JL6Y-Rs.js";import"./PageNotFound-CAJJq4gT.js";import{PluginOnColumnResize as l}from"./AnalyticalTableHooks.stories-BuH-VEXs.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-Dy7YK0fU.js";import"./index-CmNuhxCj.js";import"./index-C2RcbU_s.js";import"./index-QENyXe96.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DsnnpcUC.js";import"./addCustomCSSWithScoping-BZT-QmME.js";import"./index-DGD79lBE.js";import"./index-CeHR91It.js";import"./index-JUdhH85j.js";import"./information-Byx_k42O.js";import"./sys-enter-2-CNKaU8fp.js";import"./alert-HiA3dax7.js";import"./index-CHkzxhcQ.js";import"./Illustrations-BlaFZAWE.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BJaohFVO.js";import"./delete-Bb9u1YlP.js";import"./settings-uxlfm5Eb.js";import"./NoData-DH1nVKCg.js";import"./NoFilterResults-CG83QGUe.js";import"./index-CKx2XrjC.js";import"./IllustratedMessage-8KXEKgMw.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-8Xbwx2Wl.js";import"./Input-DmDSg_Bp.js";import"./ResponsivePopoverCommon.css-CH3mALXJ.js";import"./ValueStateMessage.css-EXmMX5gs.js";import"./Suggestions.css-D2AfaPCJ.js";import"./ListBoxItemGroupTemplate-Ci0HBhCE.js";import"./ComboBoxItemGroup-nne4TIrE.js";import"./ListItemBaseTemplate-Ch_-zEJx.js";import"./Token-xIAyAS3n.js";import"./ScrollEnablement-Dl_lVbGP.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Du0wWGOA.js";import"./ToggleButton-CspSetq-.js";import"./multiselect-all-BaBAM3Qb.js";import"./SuggestionItem-CFEQvlUI.js";import"./index-BHH5WRWL.js";import"./Option-QnZNpfzw.js";import"./index-CvTa720j.js";import"./SegmentedButton-CEotyn2T.js";import"./index-CmxjBI6a.js";import"./Select-CJA0uPpx.js";import"./InvisibleMessage-BsWqZsBR.js";import"./index-sT6FfzL6.js";import"./index-C04kPmdl.js";import"./index-DvQYN9Bt.js";import"./index-YUMYtLpT.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DtCjc-pZ.js";import"./group-2-CWzLUS9i.js";import"./sort-descending-Brd47D1-.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-2s676dlH.js";import"./utils-CiQDjwNo.js";import"./index-BRePqaMI.js";import"./index-CAfOvHqP.js";import"./index-BY2jPfZG.js";import"./navigation-down-arrow-CkKFs3Xb.js";import"./navigation-right-arrow-BRDXxiyk.js";import"./navigation-right-arrow-CKEx--_J.js";import"./useCurrentTheme-CrJ4zyBU.js";import"./index-DCkgTfYz.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BHLafzmS.js";import"./paper-plane-21WFZ1Hz.js";import"./index-3r1XMCEK.js";import"./less-ByfJ7hLk.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOnColumnResize"}),`
`,o.jsx(e.h1,{id:"analyticaltable-plugin-useoncolumnresize",children:"AnalyticalTable Plugin: useOnColumnResize"}),`
`,o.jsx(n,{moduleName:"useOnColumnResize",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx(e.code,{children:"useOnColumnResize"}),` plugin hook allows firing a callback when a columns size has changed by dragging the "Resizer".
The first parameter is the callback itself (`,o.jsx(e.code,{children:"e: { columnWidth: number; header: Record<string, any> }) => void;"}),"), the second one are the optional ",o.jsx(e.code,{children:"options"})," for controlling how often the callback should fire."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.code,{children:"options"}),":"]}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"liveUpdate"}),": If ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),", the resize function will fire every time the width has changed depending on the ",o.jsx(e.code,{children:"options.wait"})," delay."]}),`
`,o.jsxs(e.li,{children:[o.jsx(e.code,{children:"wait"}),": The number of milliseconds for which the calls are to be delayed. ",o.jsxs(e.strong,{children:["Defaults to ",o.jsx(e.code,{children:"100"})]}),". (Only has an effect if ",o.jsx(e.code,{children:"liveUpdate"})," is ",o.jsx(e.code,{children:"true"}),")"]}),`
`]}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(p,{sourceState:"none",of:l}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`const TableComponent = (props) => {
  const handleColumResize = useCallback((e) => {
    console.log(e.columnWidth, e.header);
  }, []);

  const tableHooks = useMemo(
    () => [
      useOnColumnResize(handleColumResize, {
        liveUpdate: false,
        wait: 100,
      }),
    ],
    [handleColumResize],
  );

  return (
    <AnalyticalTable
      data={props.data}
      columns={props.columns}
      tableHooks={tableHooks}
    />
  );
};
`})}),`
`,o.jsx(s,{})]})}function So(i={}){const{wrapper:e}={...r(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(t,{...i})}):t(i)}export{So as default};
