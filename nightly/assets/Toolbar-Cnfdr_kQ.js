import{j as o}from"./iframe-DCh7S_7o.js";import{useMDXComponents as h}from"./index-CQ2Rgf0f.js";import{A as n}from"./ArgTypesWithNote-Dz_avZsf.js";import{C as x}from"./ControlsWithNote-CnU_Z6uv.js";import{D as j}from"./DocsHeader-DrTYK_rH.js";import{F as b}from"./CommandsAndQueries-BHuSnwTn.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-DmZmqlp_.js";import{C as r,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-3W3YEDxY.js";import{T as d}from"./index-XOagFgg_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C5sgOYh1.js";import"./information-FYwlptxJ.js";import"./sys-enter-2-CNa4r-Sw.js";import"./alert-Bj_hkuex.js";import"./Tag-CZuGcFNN.js";import"./index-gCdJvzAZ.js";import"./index-BzGBt6gL.js";import"./Link-DOaKYpM4.js";import"./copy-CtWnGcSg.js";import"./copy-BrUTFvSK.js";import"./GitHub-Mark-DXFulQjb.js";import"./TableOfContent-BF-a6WsZ.js";import"./index-DvoAW6NG.js";import"./index-BwuMWpwU.js";import"./index-CqXebPST.js";import"./index-CKcNqeBZ.js";import"./index-Gt-7HKkD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CDzt8G5a.js";import"./addCustomCSSWithScoping-DaHSAyiF.js";import"./Select-DgXiFLA1.js";import"./InvisibleMessage-CO-uxLEE.js";import"./slim-arrow-down-N5l622ic.js";import"./slim-arrow-down-D91T-40j.js";import"./ResponsivePopoverCommon.css-YvTmosB3.js";import"./ValueStateMessage.css-_40RyXNK.js";import"./Option-Bd427Odz.js";import"./ListItemBaseTemplate-B1GyPNZx.js";import"./ToolbarButton-DvelGxgx.js";import"./overflow-B51Ya9XS.js";import"./ToolbarSpacer-lT2917V-.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
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
