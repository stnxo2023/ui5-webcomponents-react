import{j as o}from"./iframe-CJIrZBlB.js";import{useMDXComponents as h}from"./index-xKVU5ZCd.js";import{A as n}from"./ArgTypesWithNote-DH6P01sb.js";import{C as x}from"./ControlsWithNote-DgEi_PLk.js";import{D as j}from"./DocsHeader-BV5sl85-.js";import{F as b}from"./CommandsAndQueries-C3g74-RT.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-C-1O0LRm.js";import{C as r,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-C19m68oA.js";import{T as d}from"./index-DW5CgdKL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DmJ7zXRW.js";import"./information-BaxJEMV7.js";import"./sys-enter-2-COh9WNy8.js";import"./alert-BkaLAKBd.js";import"./Tag-BNlwFAFY.js";import"./index-EdNUKN4_.js";import"./index-CEkWgGTS.js";import"./Link-BElCP5h1.js";import"./copy-Do5bG9wn.js";import"./copy-DR5Kv1Iv.js";import"./GitHub-Mark-CILm86EZ.js";import"./TableOfContent-Cp1YxGMV.js";import"./index-BGOwz-CM.js";import"./index-YnpVhHMg.js";import"./index-BhZheF80.js";import"./index-DmwyQtvi.js";import"./index-BCwOIMZp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bf32rwnZ.js";import"./addCustomCSSWithScoping-CPo-hqqQ.js";import"./Select-D5EHVEMo.js";import"./InvisibleMessage-PB9O_FfW.js";import"./slim-arrow-down-BTXWHLy9.js";import"./slim-arrow-down-CdpV3nE0.js";import"./ResponsivePopoverCommon.css-xGlWqU9B.js";import"./ValueStateMessage.css-MyCATZT_.js";import"./Option-DuZb6gan.js";import"./ListItemBaseTemplate-C5F3HCqR.js";import"./ToolbarButton-4vP3Ae18.js";import"./overflow-CL644EIQ.js";import"./ToolbarSpacer-4-WQrz8_.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
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
