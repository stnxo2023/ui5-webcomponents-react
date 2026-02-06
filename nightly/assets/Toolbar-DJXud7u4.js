import{j as o}from"./iframe-DrnWJux_.js";import{useMDXComponents as h}from"./index-8FDMxm68.js";import{A as n}from"./ArgTypesWithNote-BHgS79zC.js";import{C as x}from"./ControlsWithNote-DIYc68X9.js";import{D as j}from"./DocsHeader-rqkxD5o1.js";import{F as b}from"./CommandsAndQueries-CNfp17jg.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-BFYkdnf5.js";import{C as r,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-DKskPFeu.js";import{T as d}from"./index-D_DwEqFk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-e4jmEiJR.js";import"./information-Djf1EDVN.js";import"./sys-enter-2-BH66Bhis.js";import"./alert-DUpqB4cV.js";import"./Tag-C0-SLfdZ.js";import"./index-CvpE5smH.js";import"./index-IUrjl9ty.js";import"./Link-DZzQtWK9.js";import"./copy-CUuGlY4c.js";import"./copy-BxyqZoQq.js";import"./GitHub-Mark-C5A0ffo9.js";import"./TableOfContent-CJ3shYO4.js";import"./index-CW1Fzcqx.js";import"./index-Cjg1iz22.js";import"./index-DVoKYJte.js";import"./index-BNqm2zkD.js";import"./index-CBWW3th1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CDLiZVZl.js";import"./addCustomCSSWithScoping-CbplP-kx.js";import"./Select-BOTkrqM0.js";import"./InvisibleMessage-C0LEPWkX.js";import"./slim-arrow-down-CVB2vj5c.js";import"./slim-arrow-down-DtR6poag.js";import"./ResponsivePopoverCommon.css-e_PJNQiz.js";import"./ValueStateMessage.css-CmtfF9l5.js";import"./Option-CqIki-Fh.js";import"./ListItemBaseTemplate-BtkgFioN.js";import"./ToolbarButton-BvfAL2nd.js";import"./overflow-GDqHaoJW.js";import"./ToolbarSpacer-BLKhjoTZ.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
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
