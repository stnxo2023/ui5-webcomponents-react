import{j as o}from"./iframe-UvPIdInY.js";import{useMDXComponents as s}from"./index-C_wnFVs3.js";import{M as i,C as m}from"./blocks-D0ZGQgrL.js";import"./Tag-IR_ETKFS.js";import"./index-D9ZFZ6F-.js";import{C as c}from"./ControlsWithNote-C05KfOzz.js";import{D as a}from"./DocsHeader-CkhoLqPC.js";import{F as d}from"./CommandsAndQueries-aWAd2RXn.js";import{C as r,D as t}from"./Popover.stories-xxfLLnPx.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BPTpUfW-.js";import"./sys-enter-2-CWNypIDi.js";import"./alert-CSWOQ1yD.js";import"./index-D_al-J9d.js";import"./index-mim0XNOQ.js";import"./Link-BLS11L9W.js";import"./copy-D00_ipqs.js";import"./copy-BE3LAxqE.js";import"./GitHub-Mark-NKmIjtfb.js";import"./TableOfContent-C3sVY331.js";import"./index-O5JzLw5N.js";import"./index-Ba89z5vW.js";import"./index-B0iNMIwQ.js";import"./index-CXKBVYRd.js";import"./index-Bvo9-fQy.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BNxf-Cq6.js";import"./addCustomCSSWithScoping-7EyTrlnL.js";import"./settings-jDUCJDFQ.js";import"./index-DeIw8vVn.js";import"./index-QMPfoD9h.js";import"./ListItemStandard-n4LvxKbk.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
