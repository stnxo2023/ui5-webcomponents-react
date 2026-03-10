import{j as o}from"./iframe-D9bwNIEw.js";import{useMDXComponents as x}from"./index-C7Zm3EXU.js";import{A as n}from"./ArgTypesWithNote-BlA1wRf9.js";import{C as j}from"./ControlsWithNote-Jn1GAeVz.js";import{D as b}from"./DocsHeader-D_ch1a__.js";import{F as u}from"./Footer-rCYhEoIf.js";import"./CommandsAndQueries-C_WJZTxK.js";import"./PageNotFound-C24XQEWZ.js";import{S as v}from"./SubcomponentsSection-BVy4lpQe.js";import{M as T,C as p,a as g,D as i}from"./blocks-CdTlBqmb.js";import{C as r,D as s,W as w,O,T as a,a as l,b as m,c,d}from"./Toolbar.stories-Cct0S_LG.js";import{T as h}from"./index-sL1ShP5b.js";import"./preload-helper-PPVm8Dsz.js";import"./index-v7UWUzZA.js";import"./information-BBRTwn-C.js";import"./sys-enter-2-BgYzXgjA.js";import"./alert-Dvz5ATv0.js";import"./Tag-nAJAFGwR.js";import"./index-DYbVUH4U.js";import"./index-DpP2zBoF.js";import"./Link-DLbf1NX7.js";import"./copy-XBKnZrVA.js";import"./copy-C4qxUcFd.js";import"./GitHub-Mark-B3kCUXSj.js";import"./TableOfContent-DIRu9y5y.js";import"./index-B24aDDF0.js";import"./index-B5Io8E3V.js";import"./index-DiWu_OvK.js";import"./index-BWceQhWo.js";import"./index-DX-an7LC.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BYx-bkvu.js";import"./addCustomCSSWithScoping-CTtTC3T9.js";import"./Illustrations-CAUI_mYY.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-BzcMPirF.js";import"./index-COjYazF7.js";import"./InvisibleMessage-BbRDjx9q.js";import"./Input-CYuZcn_p.js";import"./ResponsivePopoverCommon.css-CkiXBi7B.js";import"./ValueStateMessage.css-oZNuDkL6.js";import"./Suggestions.css-CMZyvU-Z.js";import"./SuggestionItem-BeJwmeJ_.js";import"./ListItemBaseTemplate-CuVwXQqy.js";import"./ComboBoxItemGroup-SbXrXIXH.js";import"./ListBoxItemGroupTemplate-D6WAuS51.js";import"./index-cqZIbehY.js";import"./DatePicker-bPMQoK2N.js";import"./query-CzSBusdE.js";import"./Calendar-BI0Nz-R8.js";import"./Gregorian-chX3TgCd.js";import"./getCachedLocaleDataInstance-R_nt01Oi.js";import"./slim-arrow-left-Bl4tGIQN.js";import"./appointment-2-CZEtwEj0.js";import"./DateTimeInput-DmmdnO1h.js";import"./index-8EuiRxkG.js";import"./index-CGD-1joK.js";import"./Token-DONenf2t.js";import"./ScrollEnablement-C9fhfdHG.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CLmJtC2x.js";import"./ToggleButton-Hap8L6WH.js";import"./multiselect-all-DA9VqXJi.js";import"./index-DkYcM58D.js";import"./index-D9PFjJIf.js";import"./less-DhdsysxP.js";import"./ToolbarSpacer-mk_xjz7k.js";import"./ToolbarButton-TGurx5UB.js";import"./overflow-DsB1r5Kj.js";import"./Select-BgIvcjPK.js";import"./Option-BoCXKUm2.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...x(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(T,{of:r}),`
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
