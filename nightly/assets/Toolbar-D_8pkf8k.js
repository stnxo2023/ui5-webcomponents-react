import{j as o}from"./iframe-DVV5VFB7.js";import{useMDXComponents as h}from"./index-qyzUrO0d.js";import{A as n}from"./ArgTypesWithNote-ng7tMO9l.js";import{C as x}from"./ControlsWithNote-Cyp5Omba.js";import{D as j}from"./DocsHeader-C5HE4F6W.js";import{F as b}from"./CommandsAndQueries-lBZKGmp7.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-D1E9_7c3.js";import{C as r,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-DcmHl8MV.js";import{T as d}from"./index-Bi_BdDZR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bn7PyzsE.js";import"./information-rc4de9km.js";import"./sys-enter-2-DXmpS6_D.js";import"./alert-DByE3GtL.js";import"./Tag-CQyymDzh.js";import"./index-DCIIs4BW.js";import"./index-gDTG9hvV.js";import"./Link-DfNmKUcn.js";import"./copy-C0qjFs7Y.js";import"./copy-Cn3WomF2.js";import"./GitHub-Mark-DFg714Wy.js";import"./TableOfContent-BFe6IJBY.js";import"./index-Dqdoz1dV.js";import"./index-BkDm8D7N.js";import"./index-gNtvK5Wx.js";import"./index-ZnLduBLK.js";import"./index-BHIms4DS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B_xwBI5c.js";import"./addCustomCSSWithScoping-DOzeCYXW.js";import"./Select-BMXrr-12.js";import"./InvisibleMessage-D0yEGssO.js";import"./slim-arrow-down-DH4qIoze.js";import"./slim-arrow-down-DEwtX93l.js";import"./ResponsivePopoverCommon.css-D_3NdHu-.js";import"./ValueStateMessage.css-CTyww1Cy.js";import"./Option-DWq_yYfl.js";import"./ListItemBaseTemplate-7WJ7iCbr.js";import"./ToolbarButton-pGC_Axs0.js";import"./overflow-EwzuOxIy.js";import"./ToolbarSpacer-KSekE0Uz.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
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
