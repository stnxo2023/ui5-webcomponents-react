import{j as o}from"./iframe-DqhX_Hdp.js";import{useMDXComponents as h}from"./index-B-LlaBAd.js";import{A as n}from"./ArgTypesWithNote-Ddk41kws.js";import{C as x}from"./ControlsWithNote-BiIXTcre.js";import{D as j}from"./DocsHeader-eXbdhBIT.js";import{F as b}from"./CommandsAndQueries-Ctn2WqFW.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-BTKPnx40.js";import{C as r,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-DJW_ZSWJ.js";import{T as d}from"./index-RzfyD2Yh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-eBm8t70p.js";import"./information-DBUGylnd.js";import"./sys-enter-2-CQyTlO0m.js";import"./alert-OnHFbpl_.js";import"./Tag-t-9sbcO3.js";import"./index-CuoIUeLC.js";import"./index-BJOWTBa5.js";import"./Link-KAeBCRn4.js";import"./copy-CQpGeKb_.js";import"./copy-BkBAOPVd.js";import"./GitHub-Mark-C5R0cC5Y.js";import"./TableOfContent-C8QLWD0L.js";import"./index-BeJ9wz7o.js";import"./index-DCixdKQP.js";import"./index-CZfYA9Jl.js";import"./index-D2G6pSj4.js";import"./index-CqRqJjYx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Duf1worp.js";import"./addCustomCSSWithScoping-BTNZ7_2D.js";import"./Select-Be7QzEWT.js";import"./InvisibleMessage-Bdbv9Ef9.js";import"./slim-arrow-down-CarTb4uE.js";import"./slim-arrow-down-B4S7UH3-.js";import"./ResponsivePopoverCommon.css-B62B-Zvc.js";import"./ValueStateMessage.css-D02law6b.js";import"./Option-CHApBvDG.js";import"./ListItemBaseTemplate-OClf921P.js";import"./ToolbarButton-DpczG_dd.js";import"./overflow-DE262v12.js";import"./ToolbarSpacer-BwJHPYRV.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
`,o.jsx(j,{of:r,since:"1.19.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(s,{of:i}),`
`,o.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(x,{of:i}),`
`,o.jsx(e.h2,{id:"opening-popovers-via-toolbarbutton",children:"Opening Popovers via ToolbarButton"}),`
`,o.jsxs(e.p,{children:["Since the ",o.jsx(e.code,{children:"ToolbarButton"})," is an ",o.jsx(e.a,{href:"?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components",children:"abstract UI5 web component"}),", the opener of the ",o.jsx(e.code,{children:"Popover"}),` needs the DOM reference of the actual element to position the popover correctly.
Starting with v2.5.0 of `,o.jsx(e.code,{children:"@ui5/webcomponents(-react)"}),", the ",o.jsx(e.code,{children:"detail"})," property of the ",o.jsx(e.code,{children:"ToolbarButton"}),"'s click handler now includes a ",o.jsx(e.code,{children:"targetRef"})," property, which can be used as the opener."]}),`
`,o.jsx(s,{of:O}),`
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
`,o.jsx(T,{children:u}),`
`,o.jsx(e.h2,{id:"toolbarbutton",children:"ToolbarButton"}),`
`,o.jsx(p,{of:d}),`
`,o.jsx(n,{metaOf:r,of:d}),`
`,o.jsx(e.h2,{id:"toolbarselect",children:"ToolbarSelect"}),`
`,o.jsx(p,{of:a}),`
`,o.jsx(n,{metaOf:r,of:a}),`
`,o.jsx(e.h2,{id:"toolbarselectoption",children:"ToolbarSelectOption"}),`
`,o.jsx(p,{of:c}),`
`,o.jsx(n,{metaOf:r,of:c}),`
`,o.jsx(e.h2,{id:"toolbarseparator",children:"ToolbarSeparator"}),`
`,o.jsx(p,{of:l}),`
`,o.jsx(n,{metaOf:r,of:l}),`
`,o.jsx(e.h2,{id:"toolbarspacer",children:"ToolbarSpacer"}),`
`,o.jsx(p,{of:m}),`
`,o.jsx(n,{metaOf:r,of:m}),`
`,o.jsx(b,{})]})}function lo(t={}){const{wrapper:e}={...h(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(f,{...t})}):f(t)}export{lo as default};
