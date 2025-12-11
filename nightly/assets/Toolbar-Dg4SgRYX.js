import{j as o}from"./iframe-D74d3IUT.js";import{useMDXComponents as h}from"./index-BzFpXofy.js";import{A as n}from"./ArgTypesWithNote-DqhNBWC8.js";import{C as x}from"./ControlsWithNote-CvEObb8r.js";import{D as j}from"./DocsHeader-DPBbsWBU.js";import{F as b}from"./CommandsAndQueries-CXtjs1YA.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-CXGWO-SS.js";import{C as r,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-DwRjVqIl.js";import{T as d}from"./index-VHDHpVAf.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D9Jimze5.js";import"./information-CzZVG8MP.js";import"./sys-enter-2-Bo9ZeWqv.js";import"./alert-BpouBdE8.js";import"./Tag-CGDi5rN6.js";import"./index-B6nGMvY0.js";import"./index-nz5M1FvK.js";import"./Link-BnKuAsKS.js";import"./copy-C5C63oSw.js";import"./copy-B52gZhj1.js";import"./GitHub-Mark-DXqoSDG3.js";import"./TableOfContent-CtfBXmkb.js";import"./index-Dp6BwZZH.js";import"./index-BAV2Dqb-.js";import"./index-CGofV6Bd.js";import"./index-CBnDxC_O.js";import"./index-CUp4_VMY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DI0ZtE-_.js";import"./addCustomCSSWithScoping-DX0DY0tV.js";import"./Select-Bl9KvdRX.js";import"./InvisibleMessage-BT-HA0qk.js";import"./slim-arrow-down-DDEX6AaA.js";import"./slim-arrow-down-CJ7jhAk1.js";import"./ResponsivePopoverCommon.css-Bm5g59rh.js";import"./ValueStateMessage.css-CNhskv9k.js";import"./Option-c6rQ8KOO.js";import"./ListItemBaseTemplate-BtNRlpdq.js";import"./ToolbarButton-Cpyub2oJ.js";import"./overflow-Crbv-4UA.js";import"./ToolbarSpacer-zffNJmr6.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
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
