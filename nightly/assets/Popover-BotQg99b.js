import{j as o}from"./iframe-DwL_U_4M.js";import{useMDXComponents as s}from"./index-DF1KaKr-.js";import{M as i,C as m}from"./blocks-BkbxlrC9.js";import"./Tag-DWzoI0ag.js";import"./index-DgsDGr1U.js";import{C as c}from"./ControlsWithNote-DIfi3Kqe.js";import{D as a}from"./DocsHeader-woZ-gFPF.js";import{F as d}from"./CommandsAndQueries-Dz5IdIhG.js";import{C as r,D as t}from"./Popover.stories-IGmJInpZ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BVmVMqd7.js";import"./sys-enter-2-B94IC9Xo.js";import"./alert-q5IjkK7H.js";import"./index-ak-yAlnV.js";import"./index-Db6l5aQj.js";import"./Link-BdX-3dcl.js";import"./copy-BoBBSTEQ.js";import"./copy-Ds9kRn1x.js";import"./GitHub-Mark-Qpag0ptV.js";import"./TableOfContent-BzUyEnfe.js";import"./index-BOSg5TA3.js";import"./index-Dqsw9_lb.js";import"./index-Vi2IbP0J.js";import"./index-DOHiCVZ-.js";import"./index-DKq2OUSi.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dkqe7TGi.js";import"./addCustomCSSWithScoping-CE7eblPA.js";import"./settings-D0VDSh3d.js";import"./index-dMrvblLs.js";import"./index-B699imMP.js";import"./ListItemStandard-XOt9jxnj.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
