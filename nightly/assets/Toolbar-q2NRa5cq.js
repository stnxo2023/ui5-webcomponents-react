import{j as o}from"./iframe-DZQsFHyF.js";import{useMDXComponents as x}from"./index-FeafUf3S.js";import{A as n}from"./ArgTypesWithNote-BdaAnrYG.js";import{C as j}from"./ControlsWithNote-DndMN2PG.js";import{D as b}from"./DocsHeader-BYmBOG9m.js";import{F as u}from"./Footer-1JL6Y-Rs.js";import"./CommandsAndQueries-Q7QL049M.js";import"./PageNotFound-CAJJq4gT.js";import{S as v}from"./SubcomponentsSection-BVy4lpQe.js";import{M as T,C as p,a as g,D as i}from"./blocks-CCR5dlte.js";import{C as r,D as s,W as w,O,T as a,a as l,b as m,c,d}from"./Toolbar.stories-BEApFKMq.js";import{T as h}from"./index-B7brHcHc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-FZQI4JeT.js";import"./information-Byx_k42O.js";import"./sys-enter-2-CNKaU8fp.js";import"./alert-HiA3dax7.js";import"./Tag-njT3oUWj.js";import"./index-JUdhH85j.js";import"./index-DGD79lBE.js";import"./Link-Dy7YK0fU.js";import"./copy-BrbFvn-Q.js";import"./copy-B0ak1fDk.js";import"./GitHub-Mark-DMTHjS90.js";import"./TableOfContent-B8ysGL0D.js";import"./index-CHkzxhcQ.js";import"./index-CeHR91It.js";import"./index-CmNuhxCj.js";import"./index-C2RcbU_s.js";import"./index-QENyXe96.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DsnnpcUC.js";import"./addCustomCSSWithScoping-BZT-QmME.js";import"./Illustrations-BlaFZAWE.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-DCkgTfYz.js";import"./index-BgBLJH2-.js";import"./InvisibleMessage-BsWqZsBR.js";import"./Input-DmDSg_Bp.js";import"./ResponsivePopoverCommon.css-CH3mALXJ.js";import"./ValueStateMessage.css-EXmMX5gs.js";import"./Suggestions.css-D2AfaPCJ.js";import"./SuggestionItem-CFEQvlUI.js";import"./ListItemBaseTemplate-Ch_-zEJx.js";import"./ComboBoxItemGroup-nne4TIrE.js";import"./ListBoxItemGroupTemplate-Ci0HBhCE.js";import"./index-C0J6Yhot.js";import"./DatePicker-DOGOkhZY.js";import"./query-CzSBusdE.js";import"./Calendar-CCHO7kA1.js";import"./Gregorian-t1T8HCb6.js";import"./getCachedLocaleDataInstance-CkAEsJYF.js";import"./slim-arrow-left-C5GlNcuU.js";import"./appointment-2-x4b4RlQr.js";import"./DateTimeInput-BwP7mw2g.js";import"./index-2s676dlH.js";import"./index-8Xbwx2Wl.js";import"./Token-xIAyAS3n.js";import"./ScrollEnablement-Dl_lVbGP.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Du0wWGOA.js";import"./ToggleButton-CspSetq-.js";import"./multiselect-all-BaBAM3Qb.js";import"./index-CZvh36Cz.js";import"./index-3r1XMCEK.js";import"./less-ByfJ7hLk.js";import"./ToolbarSpacer-BVgk1t5l.js";import"./ToolbarButton-CoT90lr1.js";import"./overflow-uAdCbH8p.js";import"./Select-CJA0uPpx.js";import"./Option-QnZNpfzw.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...x(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(T,{of:r}),`
`,o.jsx(b,{of:r,since:"1.19.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(p,{of:s}),`
`,o.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(j,{of:s}),`
`,o.jsx(e.h2,{id:"toolbaritem",children:"ToolbarItem"}),`
`,o.jsx(e.p,{children:"ToolbarItem wrapper used to add any component to Toolbar."}),`
`,o.jsxs(e.p,{children:[o.jsx(e.strong,{children:"Note:"})," To display the radio buttons and checkboxes in a column in the overflow popover, the ",o.jsx(e.code,{children:"toolbar-item-group"})," CSS class is used:"]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-css",children:`/* Use :state(overflowed) to style items differently when in overflow popover */
[ui5-toolbar-item]:state(overflowed) .toolbar-item-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
`})}),`
`,o.jsx(p,{of:w}),`
`,o.jsx(e.h2,{id:"opening-popovers-via-toolbarbutton",children:"Opening Popovers via ToolbarButton"}),`
`,o.jsxs(e.p,{children:["Since the ",o.jsx(e.code,{children:"ToolbarButton"})," is an ",o.jsx(e.a,{href:"?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components",children:"abstract UI5 web component"}),", the opener of the ",o.jsx(e.code,{children:"Popover"}),` needs the DOM reference of the actual element to position the popover correctly.
Starting with v2.5.0 of `,o.jsx(e.code,{children:"@ui5/webcomponents(-react)"}),", the ",o.jsx(e.code,{children:"detail"})," property of the ",o.jsx(e.code,{children:"ToolbarButton"}),"'s click handler now includes a ",o.jsx(e.code,{children:"targetRef"})," property, which can be used as the opener."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.strong,{children:"Note:"})," To prevent the overflow popover from closing when the opener ",o.jsx(e.code,{children:"ToolbarButton"})," of the Popover is clicked, you can call ",o.jsx(e.code,{children:"event.preventDefault()"})," in the ",o.jsx(e.code,{children:"onClick"})," event handler."]}),`
`,o.jsx(p,{of:O}),`
`,o.jsx(e.h3,{id:"example-code",children:"Example Code"}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-tsx",children:`function ToolbarWithPopover() {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const popoverRef = useRef<PopoverDomRef>(null);
  return (
    <>
      <Toolbar>
        <ToolbarButton
          onClick={(e) => {
            const { targetRef } = e.detail;
            e.preventDefault();
            if (popoverRef.current) {
              popoverRef.current.opener = targetRef;
              setPopoverOpen(true);
            }
          }}
          text="Open Popover"
        />
      </Toolbar>
      <Popover
        open={popoverOpen}
        ref={popoverRef}
        onClose={() => {
          setPopoverOpen(false);
        }}
      >
        Content
      </Popover>
    </>
  );
}
`})}),`
`,o.jsx(g,{children:v}),`
`,o.jsx(e.h2,{id:"toolbaritem-1",children:"ToolbarItem"}),`
`,o.jsxs(e.p,{children:[o.jsx(i,{of:a}),'"']}),`
`,o.jsx(n,{metaOf:r,of:a}),`
`,o.jsx(e.h2,{id:"toolbarbutton",children:"ToolbarButton"}),`
`,o.jsx(i,{of:h}),`
`,o.jsx(n,{metaOf:r,of:h}),`
`,o.jsx(e.h2,{id:"toolbarselect",children:"ToolbarSelect"}),`
`,o.jsx(i,{of:l}),`
`,o.jsx(n,{metaOf:r,of:l}),`
`,o.jsx(e.h2,{id:"toolbarselectoption",children:"ToolbarSelectOption"}),`
`,o.jsx(i,{of:m}),`
`,o.jsx(n,{metaOf:r,of:m}),`
`,o.jsx(e.h2,{id:"toolbarseparator",children:"ToolbarSeparator"}),`
`,o.jsx(i,{of:c}),`
`,o.jsx(n,{metaOf:r,of:c}),`
`,o.jsx(e.h2,{id:"toolbarspacer",children:"ToolbarSpacer"}),`
`,o.jsx(i,{of:d}),`
`,o.jsx(n,{metaOf:r,of:d}),`
`,o.jsx(u,{})]})}function qo(t={}){const{wrapper:e}={...x(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(f,{...t})}):f(t)}export{qo as default};
