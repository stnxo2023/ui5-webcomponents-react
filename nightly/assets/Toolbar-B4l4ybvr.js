import{j as o}from"./iframe-DQ6p6C4w.js";import{useMDXComponents as f}from"./index-PJ7eIANP.js";import{A as t}from"./ArgTypesWithNote-Cea0b37c.js";import{C as x}from"./ControlsWithNote-Ur_jkq9G.js";import{D as j}from"./DocsHeader-Fv8T_lZo.js";import{F as b}from"./CommandsAndQueries-D4Earqxe.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as v,C as s,a as T,D as p}from"./blocks-DzLxfDF_.js";import{C as n,D as i,O,T as a,a as c,b as l,c as m}from"./Toolbar.stories-quMb7fu5.js";import{T as d}from"./index-Cdq66rfj.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DMdtpgB4.js";import"./information-DP-BBVKe.js";import"./sys-enter-2-CHLEBxpk.js";import"./alert-DwSet8Gr.js";import"./Tag-maX3wI_O.js";import"./index-BBaHTUom.js";import"./index-Crvp2P38.js";import"./Link-C5vNyymE.js";import"./copy-D-zwDUZI.js";import"./copy-DK9nMyWi.js";import"./GitHub-Mark-aXQ0sgqE.js";import"./TableOfContent-DmXt6Qjn.js";import"./index-DyLo2c5y.js";import"./index-BX38vZ_H.js";import"./index-BTeE4XW8.js";import"./index-GGF-6yBD.js";import"./index-BiYiYWPU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DEFxvwKp.js";import"./addCustomCSSWithScoping-D-NBvgXV.js";import"./Select-BaxOqbyI.js";import"./InvisibleMessage-24SaMl40.js";import"./slim-arrow-down-BD-D-jTM.js";import"./slim-arrow-down-I4aiGrie.js";import"./ResponsivePopoverCommon.css-MVZLdMIH.js";import"./ValueStateMessage.css-CkUI3rSD.js";import"./Option-CqqhCzJo.js";import"./ListItemBaseTemplate-BQzetuJF.js";import"./ToolbarButton-D3vhAY1-.js";import"./overflow-CjX-FMgR.js";import"./ToolbarSpacer-D1HVZilz.js";function h(r){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...f(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{of:n}),`
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
