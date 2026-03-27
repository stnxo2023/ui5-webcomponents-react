import{j as o}from"./iframe-Ra0xSmd4.js";import{useMDXComponents as x}from"./index-B1uewCO1.js";import{A as n}from"./ArgTypesWithNote-BdFBQfYk.js";import{C as j}from"./ControlsWithNote-B47UM3qO.js";import{D as b}from"./DocsHeader-LE80zS-5.js";import{F as u}from"./Footer-BXZI9V38.js";import"./CommandsAndQueries-BEtDWerI.js";import"./PageNotFound-DAzm2SbT.js";import{S as v}from"./SubcomponentsSection-BVy4lpQe.js";import{M as T,C as p,a as g,D as i}from"./blocks-B8uzJZ3S.js";import{C as r,D as s,W as w,O,T as a,a as l,b as m,c,d}from"./Toolbar.stories-KmLhn6qX.js";import{T as h}from"./index-C23-gTUw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DhDYAwwg.js";import"./information-hzJ5lLQH.js";import"./sys-enter-2-weVfOb1a.js";import"./alert-BkoFHfp8.js";import"./Tag-vCzc8lpN.js";import"./index-Dh9i0xFK.js";import"./index-CCqLDoAJ.js";import"./Link-Cw9gqE6M.js";import"./copy-HSMVUc5p.js";import"./copy-Cehqzola.js";import"./GitHub-Mark-nqscAzxB.js";import"./TableOfContent-BgPrQZrb.js";import"./index-BHry3UrI.js";import"./index-CiJZaHkZ.js";import"./index-UbhsERGe.js";import"./index-DxchSxRT.js";import"./index-BhvLG_bo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cr-PyOpa.js";import"./addCustomCSSWithScoping-CcLMh_2y.js";import"./Illustrations-DuEXDQCv.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-mlILjk2I.js";import"./index-Dg8A6afx.js";import"./InvisibleMessage-Nn0M2iFm.js";import"./Input-hYN12Gd7.js";import"./ResponsivePopoverCommon.css-D79T12cj.js";import"./ValueStateMessage.css-BEyluAo8.js";import"./Suggestions.css-CZemgMCI.js";import"./SuggestionItem-CRRSDxMr.js";import"./ListItemBaseTemplate-DDF3F_sC.js";import"./ComboBoxItemGroup-BjqeHnC8.js";import"./ListBoxItemGroupTemplate-CkuipRkL.js";import"./index-BpoAIbWp.js";import"./DatePicker-eM1NCuOb.js";import"./query-CzSBusdE.js";import"./Calendar-9NPejqdx.js";import"./Gregorian-CokXWi7y.js";import"./FormatUtils-CAxWC39T.js";import"./slim-arrow-left-DF_vdjLh.js";import"./appointment-2-C8oZUjbz.js";import"./DateTimeInput-DgI0Momx.js";import"./index-BodfA0Gi.js";import"./index-DADJiQQB.js";import"./Token-CsZP01nz.js";import"./ScrollEnablement-Dp-oqGSv.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CFffdE_7.js";import"./ToggleButton-BCMZO5K5.js";import"./multiselect-all-C9UpqjqM.js";import"./index-DSbWpFMz.js";import"./index-BKI5E3Yv.js";import"./less-WQ1GwY14.js";import"./ToolbarSpacer-CdFkZL_K.js";import"./ToolbarButton-Ao3pUNY4.js";import"./overflow-lXJGIMnG.js";import"./Select-xNN_GioC.js";import"./Option-BToNbCEU.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...x(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(T,{of:r}),`
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
