import{j as o}from"./iframe-DwL_U_4M.js";import{useMDXComponents as f}from"./index-DF1KaKr-.js";import{A as t}from"./ArgTypesWithNote-TyetLEZH.js";import{C as x}from"./ControlsWithNote-DIfi3Kqe.js";import{D as j}from"./DocsHeader-woZ-gFPF.js";import{F as b}from"./CommandsAndQueries-Dz5IdIhG.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-BkbxlrC9.js";import{C as n,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-B25i8_E0.js";import{T as d}from"./index-CakINTwv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DgsDGr1U.js";import"./information-BVmVMqd7.js";import"./sys-enter-2-B94IC9Xo.js";import"./alert-q5IjkK7H.js";import"./Tag-DWzoI0ag.js";import"./index-ak-yAlnV.js";import"./index-Db6l5aQj.js";import"./Link-BdX-3dcl.js";import"./copy-BoBBSTEQ.js";import"./copy-Ds9kRn1x.js";import"./GitHub-Mark-Qpag0ptV.js";import"./TableOfContent-BzUyEnfe.js";import"./index-BOSg5TA3.js";import"./index-Dqsw9_lb.js";import"./index-Vi2IbP0J.js";import"./index-DOHiCVZ-.js";import"./index-DKq2OUSi.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dkqe7TGi.js";import"./addCustomCSSWithScoping-CE7eblPA.js";import"./Select-BAca3Q1U.js";import"./InvisibleMessage-CeA3DNW4.js";import"./slim-arrow-down-BrKYHwbw.js";import"./slim-arrow-down-ByCeMr4H.js";import"./ResponsivePopoverCommon.css-CYR3rAjO.js";import"./ValueStateMessage.css-B8AI8KQ2.js";import"./Option-CcfnhX8_.js";import"./ListItemBaseTemplate-BG93_W6E.js";import"./ToolbarButton-t79_bAY4.js";import"./overflow-fTg8XLzE.js";import"./ToolbarSpacer-pP-SbzwM.js";function h(r){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...f(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:n}),`
`,o.jsx(j,{of:n,since:"1.19.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(s,{of:i}),`
`,o.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(x,{of:i}),`
`,o.jsx(e.h2,{id:"opening-popovers-via-toolbarbutton",children:"Opening Popovers via ToolbarButton"}),`
`,o.jsxs(e.p,{children:["Since the ",o.jsx(e.code,{children:"ToolbarButton"})," is an ",o.jsx(e.a,{href:"?path=/docs/knowledge-base-faq--docs#what-are-abstract-ui5-web-components",children:"abstract UI5 web component"}),", the opener of the ",o.jsx(e.code,{children:"Popover"}),` needs the DOM reference of the actual element to position the popover correctly.
Starting with v2.5.0 of `,o.jsx(e.code,{children:"@ui5/webcomponents(-react)"}),", the ",o.jsx(e.code,{children:"detail"})," property of the ",o.jsx(e.code,{children:"ToolbarButton"}),"'s click handler now includes a ",o.jsx(e.code,{children:"targetRef"})," property, which can be used as the opener."]}),`
`,o.jsxs(e.p,{children:[o.jsx(e.strong,{children:"Note:"})," To prevent the overflow popover from closing when the opener ",o.jsx(e.code,{children:"ToolbarButton"})," of the Popover is clicked, you can call ",o.jsx(e.code,{children:"event.preventDefault()"})," in the ",o.jsx(e.code,{children:"onClick"})," event handler."]}),`
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
`,o.jsx(T,{children:u}),`
`,o.jsx(e.h2,{id:"toolbarbutton",children:"ToolbarButton"}),`
`,o.jsx(p,{of:d}),`
`,o.jsx(t,{metaOf:n,of:d}),`
`,o.jsx(e.h2,{id:"toolbarselect",children:"ToolbarSelect"}),`
`,o.jsx(p,{of:a}),`
`,o.jsx(t,{metaOf:n,of:a}),`
`,o.jsx(e.h2,{id:"toolbarselectoption",children:"ToolbarSelectOption"}),`
`,o.jsx(p,{of:c}),`
`,o.jsx(t,{metaOf:n,of:c}),`
`,o.jsx(e.h2,{id:"toolbarseparator",children:"ToolbarSeparator"}),`
`,o.jsx(p,{of:l}),`
`,o.jsx(t,{metaOf:n,of:l}),`
`,o.jsx(e.h2,{id:"toolbarspacer",children:"ToolbarSpacer"}),`
`,o.jsx(p,{of:m}),`
`,o.jsx(t,{metaOf:n,of:m}),`
`,o.jsx(b,{})]})}function lo(r={}){const{wrapper:e}={...f(),...r.components};return e?o.jsx(e,{...r,children:o.jsx(h,{...r})}):h(r)}export{lo as default};
