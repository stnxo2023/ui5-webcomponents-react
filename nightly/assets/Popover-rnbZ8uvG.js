import{j as o}from"./iframe-BvHqSIyK.js";import{useMDXComponents as s}from"./index-C9vrwz77.js";import{M as i,C as m}from"./blocks-BxoU3Yu6.js";import"./Tag-99RoGaFy.js";import"./index-BB14dXBi.js";import{C as c}from"./ControlsWithNote-CTnWG3NF.js";import{D as a}from"./DocsHeader-Cs7Yrkde.js";import{F as d}from"./CommandsAndQueries-B3hUlog3.js";import{C as r,D as t}from"./Popover.stories-BlD2Tw6p.js";import"./preload-helper-PPVm8Dsz.js";import"./information-zngl4LUv.js";import"./sys-enter-2-D9Z1FJcM.js";import"./alert-F1tFIdLT.js";import"./index-B7BXsln5.js";import"./index-Dvhux2R5.js";import"./Link-CgDmPG1r.js";import"./copy-D3tG-hpB.js";import"./copy-BP-1S5h9.js";import"./GitHub-Mark-DZZ8zVqy.js";import"./TableOfContent-B7BIrx_g.js";import"./index-DAufjIqI.js";import"./index-Cb6d5Ui8.js";import"./index-BX2w3DS0.js";import"./index-lpb4Baiz.js";import"./index--L__lImq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C3VWoxNN.js";import"./addCustomCSSWithScoping-Bvbl39sy.js";import"./settings-D_BTzOE6.js";import"./index-DVh5GQMZ.js";import"./index-BW296Krt.js";import"./ListItemStandard-WAmqQIXu.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
`,o.jsx(a,{of:r,since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(n.h2,{id:"example",children:"Example"}),`
`,o.jsx(m,{of:t}),`
`,o.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(c,{of:t}),`
`,o.jsx(n.h2,{id:"opening-popovers",children:"Opening Popovers"}),`
`,o.jsxs(n.p,{children:["You can open and close the ",o.jsx(n.code,{children:"Popover"})," component in a declarative way using the ",o.jsx(n.code,{children:"open"})," and ",o.jsx(n.code,{children:"opener"})," prop."]}),`
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
      <Popover
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
