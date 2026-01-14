import{j as o}from"./iframe-C8VIz1cN.js";import{useMDXComponents as h}from"./index-DF3oZ9DD.js";import{A as n}from"./ArgTypesWithNote-BKIZuTQC.js";import{C as x}from"./ControlsWithNote-Cx_-zFP3.js";import{D as j}from"./DocsHeader-B2gToiar.js";import{F as b}from"./CommandsAndQueries-D_HB_HX-.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-D-v6PHKz.js";import{C as r,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-__imescD.js";import{T as d}from"./index-BBehapuc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-W-CFrWn1.js";import"./information-Hi7RSuvY.js";import"./sys-enter-2-CeqtRGpA.js";import"./alert-DDLVUdt7.js";import"./Tag-Ce9kI3uB.js";import"./index-C3PbHa_S.js";import"./index-zu9Y-W0w.js";import"./Link-8iQqMH3R.js";import"./copy-DmsxEFne.js";import"./copy-ChBzOjSf.js";import"./GitHub-Mark-EKLu-fRk.js";import"./TableOfContent-rBzrQ-hO.js";import"./index-CK3WOJt5.js";import"./index-IuSSn5Ye.js";import"./index-DVHGI5Hf.js";import"./index-CQjs21SR.js";import"./index-D5h2jV28.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-VSpt3ox9.js";import"./addCustomCSSWithScoping-BS3ufxCI.js";import"./Select-DBK-52OP.js";import"./InvisibleMessage-CFIf5I9Q.js";import"./slim-arrow-down-Dfenv5Nd.js";import"./slim-arrow-down-B8cEuo7F.js";import"./ResponsivePopoverCommon.css-DqUNlHfC.js";import"./ValueStateMessage.css-B6YWQgJF.js";import"./Option-SB8hrn2i.js";import"./ListItemBaseTemplate-Cvw5qOo6.js";import"./ToolbarButton-CPcqsLvG.js";import"./overflow-DF8K7pL_.js";import"./ToolbarSpacer-CE0aFJFp.js";function f(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...h(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:r}),`
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
