import{j as o}from"./iframe-DtedCjfy.js";import{useMDXComponents as h}from"./index-CHHTCtpJ.js";import{A as n}from"./ArgTypesWithNote-NkYgEqHM.js";import{C as x}from"./ControlsWithNote-U2_-yu-i.js";import{D as j}from"./DocsHeader-BSqDoS4X.js";import{F as b}from"./CommandsAndQueries-CefMw8Tu.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-B76JpcnK.js";import{C as r,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-B-Se-0vy.js";import{T as d}from"./index-DmanD6sl.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DKt9EK6E.js";import"./information-Dgg1zzf6.js";import"./sys-enter-2-BS_wAjUh.js";import"./alert-DCJXRL-H.js";import"./Tag-UovGhxml.js";import"./index-Np4eK1ew.js";import"./index-B_rkL0I7.js";import"./Link-DZXvuASQ.js";import"./copy-Bb-0xoGY.js";import"./copy-YvtV-MwK.js";import"./GitHub-Mark-BHD2VI9z.js";import"./TableOfContent-CgJSyrjN.js";import"./index-DX3eFopX.js";import"./index-DeLaWQId.js";import"./index-CYjF7K0n.js";import"./index-BwT8h001.js";import"./index-CSzpUMpn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BDJ7Ajcv.js";import"./addCustomCSSWithScoping-ClguXaul.js";import"./Select-Dv5jHc6p.js";import"./InvisibleMessage-CMofOcZ8.js";import"./slim-arrow-down-DO0xZWHM.js";import"./slim-arrow-down-B5bCreHk.js";import"./ResponsivePopoverCommon.css-82X5LMAI.js";import"./ValueStateMessage.css-BmfTYgl7.js";import"./Option-1uoBZugc.js";import"./ListItemBaseTemplate-vodsce4v.js";import"./ToolbarButton-BXbg8zbi.js";import"./overflow-v35HMBQb.js";import"./ToolbarSpacer-DoHm0ZQj.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
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
