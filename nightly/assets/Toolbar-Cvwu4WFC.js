import{j as o}from"./iframe-BXb_n64_.js";import{u as x,M as j,C as p,a as b,D as n}from"./blocks-9VP231tA.js";import{A as i}from"./ArgTypesWithNote-Dvv6L-Gq.js";import{C as u}from"./ControlsWithNote-D6w6Kb-X.js";import{D as v}from"./DocsHeader-BZ77PaiO.js";import{F as T}from"./Footer-DPPwB2I6.js";import"./CommandsAndQueries-BI-RA2OZ.js";import"./PageNotFound-CZrojxwO.js";import{S as g}from"./SubcomponentsSection-BVy4lpQe.js";import{C as r,D as s,W as w,O,T as a,a as l,b as m,c,d}from"./Toolbar.stories-8bwXoqIY.js";import{T as h}from"./index-BbEQ6UxA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BL83g4Fz.js";import"./information-C2n1oeWx.js";import"./sys-enter-2-BNeNMeW8.js";import"./alert-DXZPI1Fp.js";import"./Tag-CRNARXt6.js";import"./index-BNBy1IQK.js";import"./index-BD_xT1Nj.js";import"./Link-BUcKjx9R.js";import"./copy-CsgZl58a.js";import"./copy-BBKTKpbi.js";import"./GitHub-Mark-BVBi5bkL.js";import"./TableOfContent-CJDX4QJ8.js";import"./index-BSoVaSRp.js";import"./index-DqAHmx0d.js";import"./index-D10d9Tlr.js";import"./index-B22x7h0Z.js";import"./index-Ju3FGlVf.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Mi2Syuqb.js";import"./addCustomCSSWithScoping-F8HAuIL-.js";import"./Illustrations-ks8TfsTU.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-BW8nkbFg.js";import"./index-DtTymJ1C.js";import"./InvisibleMessage-tI82KiTk.js";import"./Input-B1pV19yo.js";import"./ResponsivePopoverCommon.css-DMiEES2t.js";import"./ValueStateMessage.css-YCjELpnO.js";import"./Suggestions.css-BZAnlsRN.js";import"./SuggestionItem-CuJ_PC3L.js";import"./ListItemBaseTemplate-CL-9zx8x.js";import"./ComboBoxItemGroup-DfJF5BDs.js";import"./ListBoxItemGroupTemplate-5-RLXPsG.js";import"./index-Bv9zylji.js";import"./DatePicker-Coh6HCqg.js";import"./query-CzSBusdE.js";import"./Calendar-DU668rq3.js";import"./Gregorian-BfyB-lO4.js";import"./FormatUtils-BzEa-y9Z.js";import"./slim-arrow-left-Cjs_Lf9F.js";import"./appointment-2-BrxmyqYa.js";import"./DateTimeInput-DyWDYpyb.js";import"./index-BGaKo2kM.js";import"./index-DO2GHw1V.js";import"./Token-C7CCdRfL.js";import"./ScrollEnablement-CdFwVVtK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-dvvLOc5F.js";import"./ToggleButton-REMyBJsR.js";import"./multiselect-all-Ch1Qp7qR.js";import"./index-mPQ5Z-Of.js";import"./index-DL4fpI_G.js";import"./less-0zzPWnhW.js";import"./ToolbarSpacer-WUltWoUA.js";import"./ToolbarButton-BctdpPZc.js";import"./overflow-NBrFVI3M.js";import"./Select-DjVfX_jp.js";import"./Option-DDwjJ3Kz.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...x(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(j,{of:r}),`
`,o.jsx(v,{of:r,since:"1.19.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(p,{of:s}),`
`,o.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(u,{of:s}),`
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
`,o.jsx(b,{children:g}),`
`,o.jsx(e.h2,{id:"toolbaritem-1",children:"ToolbarItem"}),`
`,o.jsxs(e.p,{children:[o.jsx(n,{of:a}),'"']}),`
`,o.jsx(i,{metaOf:r,of:a}),`
`,o.jsx(e.h2,{id:"toolbarbutton",children:"ToolbarButton"}),`
`,o.jsx(n,{of:h}),`
`,o.jsx(i,{metaOf:r,of:h}),`
`,o.jsx(e.h2,{id:"toolbarselect",children:"ToolbarSelect"}),`
`,o.jsx(n,{of:l}),`
`,o.jsx(i,{metaOf:r,of:l}),`
`,o.jsx(e.h2,{id:"toolbarselectoption",children:"ToolbarSelectOption"}),`
`,o.jsx(n,{of:m}),`
`,o.jsx(i,{metaOf:r,of:m}),`
`,o.jsx(e.h2,{id:"toolbarseparator",children:"ToolbarSeparator"}),`
`,o.jsx(n,{of:c}),`
`,o.jsx(i,{metaOf:r,of:c}),`
`,o.jsx(e.h2,{id:"toolbarspacer",children:"ToolbarSpacer"}),`
`,o.jsx(n,{of:d}),`
`,o.jsx(i,{metaOf:r,of:d}),`
`,o.jsx(T,{})]})}function _o(t={}){const{wrapper:e}={...x(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(f,{...t})}):f(t)}export{_o as default};
