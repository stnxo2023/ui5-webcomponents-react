import{j as o}from"./iframe-rBa3eszb.js";import{useMDXComponents as s}from"./index-ywplRXEz.js";import{M as i,C as m}from"./blocks-g4en69Tv.js";import"./Tag-Ub-ab5wh.js";import"./index-CpHbQUX7.js";import{C as c}from"./ControlsWithNote-CNfoTTea.js";import{D as a}from"./DocsHeader-BhvQ3ZFL.js";import{F as d}from"./CommandsAndQueries-CwUQeNe6.js";import{C as r,D as t}from"./ResponsivePopover.stories-CSc8rVHc.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Do12jBFt.js";import"./sys-enter-2-Gg5Ob7c_.js";import"./alert-Cl85dmlC.js";import"./index-Dlmk5mT2.js";import"./index--W9c_yZX.js";import"./Link-Dq-0iXqs.js";import"./copy-D-tNIjzC.js";import"./copy-DpAiYmLC.js";import"./GitHub-Mark-Dr6vZ266.js";import"./TableOfContent-BZvuIbfz.js";import"./index-_uK4ftNi.js";import"./index-dvt-GDfC.js";import"./index-SiJKqGQM.js";import"./index-Bt8TlIkO.js";import"./index-CCm0OAPD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C-cGFZau.js";import"./addCustomCSSWithScoping-BFTmBMm0.js";import"./index-BofIltQ1.js";import"./index-BDnRm_Qs.js";import"./ListItemStandard-DN6z6JAI.js";import"./settings-B5OYEsJJ.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
`,o.jsx(a,{of:r,since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(n.h2,{id:"example",children:"Example"}),`
`,o.jsx(m,{of:t}),`
`,o.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(c,{of:t}),`
`,o.jsx(n.h2,{id:"opening-responsivepopovers",children:"Opening ResponsivePopovers"}),`
`,o.jsxs(n.p,{children:["You can open and close the ",o.jsx(n.code,{children:"ResponsivePopover"})," component in a declarative way using the ",o.jsx(n.code,{children:"open"})," and ",o.jsx(n.code,{children:"opener"})," prop."]}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-jsx",children:`const MyComponentWithPopover = () => {
  const btnRef = useRef(null);
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);
  return (
    <>
      <Button
        ref={btnRef}
        onClick={() => {
          setPopoverIsOpen(true);
        }}
      >
        Open Popover
      </Button>
      <ResponsivePopover
        opener={btnRef.current}
        open={popoverIsOpen}
        onClose={() => {
          setPopoverIsOpen(false);
        }}
      />
    </>
  );
};
`})}),`
`,o.jsx(d,{})]})}function A(e={}){const{wrapper:n}={...s(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(p,{...e})}):p(e)}export{A as default};
