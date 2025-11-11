import{j as o}from"./iframe-Di0CnA8S.js";import{useMDXComponents as h}from"./index-D1yNQJed.js";import{A as n}from"./ArgTypesWithNote-C-gysoS5.js";import{C as x}from"./ControlsWithNote-Byoi2WIS.js";import{D as j}from"./DocsHeader-B2m9S15f.js";import{F as b}from"./CommandsAndQueries-zSui8mFJ.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-CQfV0luP.js";import{C as r,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-6imDVUZd.js";import{T as d}from"./index-BFeTi3Dh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cv974V6E.js";import"./information-DzISr5a2.js";import"./sys-enter-2-Vd3zyEtx.js";import"./alert-DaK0qpmR.js";import"./Tag-YM6QkIty.js";import"./index-C4vcrMlE.js";import"./index-CX_Pkcfg.js";import"./Link-WIuadCnC.js";import"./copy-DZxVjMt2.js";import"./copy-BnyBSvmF.js";import"./GitHub-Mark-BfLU5nBo.js";import"./TableOfContent-CaAMmFRO.js";import"./index-Bkm6KJyR.js";import"./index-FrAwh-uI.js";import"./index-Bms_gXSs.js";import"./index-DEJJ6ZVN.js";import"./index-DChMCwxZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BL09SrHJ.js";import"./addCustomCSSWithScoping-D9ak18Ev.js";import"./Select-CSvcStkQ.js";import"./InvisibleMessage-CA5l1OrC.js";import"./slim-arrow-down-BZ32OfT-.js";import"./slim-arrow-down-bK9T7o5_.js";import"./ResponsivePopoverCommon.css--b7te08F.js";import"./ValueStateMessage.css-wgmiBQCU.js";import"./Option-DNM61xVD.js";import"./ListItemBaseTemplate-0lg9M0fM.js";import"./ToolbarButton-CXKU3lv9.js";import"./overflow-gA3uY6U4.js";import"./ToolbarSpacer-Bm9Umm30.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
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
