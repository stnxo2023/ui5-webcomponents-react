import{j as o}from"./iframe-ClKZoppV.js";import{useMDXComponents as x}from"./index-BBP-HRkM.js";import{A as n}from"./ArgTypesWithNote-B8-KnC_a.js";import{C as j}from"./ControlsWithNote-BJv1bkXz.js";import{D as b}from"./DocsHeader-aD31_w4z.js";import{F as u}from"./Footer-BJ8-oElo.js";import"./CommandsAndQueries-BSg7r23V.js";import"./PageNotFound-DkMfdMip.js";import{S as v}from"./SubcomponentsSection-BVy4lpQe.js";import{M as T,C as p,a as g,D as i}from"./blocks-C6PUfAN7.js";import{C as r,D as s,W as w,O,T as a,a as l,b as m,c,d}from"./Toolbar.stories-BZt4obyu.js";import{T as h}from"./index-DZQWnKe7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Brz6Jamn.js";import"./information-C2rgVrmf.js";import"./sys-enter-2-zNCrvlrA.js";import"./alert-DLSg1FPP.js";import"./Tag-CnAKe81V.js";import"./index-CEU-nQxX.js";import"./index-Tx9EfJkS.js";import"./Link-DLU4uHoZ.js";import"./copy-zGSFbqtO.js";import"./copy-rX2zRtcl.js";import"./GitHub-Mark-DlD1eMnp.js";import"./TableOfContent-sHwgKy8t.js";import"./index-kUQXQip-.js";import"./index-Dnwis2Yb.js";import"./index-BFw8ePED.js";import"./index-W9ERffOR.js";import"./index-DG_kdwr6.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CJ7j91qP.js";import"./addCustomCSSWithScoping-5Po78CSL.js";import"./Illustrations-CjXAC4Lw.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-CUey85Pp.js";import"./index-55ktLTeI.js";import"./InvisibleMessage-BAsmVFY2.js";import"./Input-DifhVVae.js";import"./ResponsivePopoverCommon.css-Dcm-qCQM.js";import"./ValueStateMessage.css-C3kGxfwH.js";import"./Suggestions.css-DMuxG7ST.js";import"./SuggestionItem-DvrIUtwR.js";import"./ListItemBaseTemplate-wnFyFdMD.js";import"./ComboBoxItemGroup-CZ_yERJC.js";import"./ListBoxItemGroupTemplate-DCEyEHtj.js";import"./index-BnJ372ba.js";import"./DatePicker-XbJCng0A.js";import"./query-CzSBusdE.js";import"./Calendar-DdPoIABB.js";import"./Gregorian-CsXwCw0Y.js";import"./getCachedLocaleDataInstance-QId5vDUB.js";import"./slim-arrow-left-D2eIC3jM.js";import"./appointment-2-CkbnRHaL.js";import"./DateTimeInput-G2OQ-OVm.js";import"./index-C86D3ysp.js";import"./index-Ct-vvlBG.js";import"./Token-BGJ_CPca.js";import"./ScrollEnablement-DisvRpMe.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BgPpv9rh.js";import"./ToggleButton-EH5FNVd0.js";import"./multiselect-all-DfoaZX6L.js";import"./index-84Amvfn6.js";import"./index-B-c0kiTT.js";import"./less-C_ayitlz.js";import"./ToolbarSpacer-BnOsVy2Q.js";import"./ToolbarButton-CwddZaUX.js";import"./overflow-DhLcxAMs.js";import"./Select-BNOIoVRp.js";import"./Option-hV2MsLrQ.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...x(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(T,{of:r}),`
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
