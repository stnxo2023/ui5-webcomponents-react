import{j as o}from"./iframe-DCh7S_7o.js";import{useMDXComponents as s}from"./index-CQ2Rgf0f.js";import{M as i,C as m}from"./blocks-DmZmqlp_.js";import"./Tag-CZuGcFNN.js";import"./index-C5sgOYh1.js";import{C as c}from"./ControlsWithNote-CnU_Z6uv.js";import{D as a}from"./DocsHeader-DrTYK_rH.js";import{F as d}from"./CommandsAndQueries-BHuSnwTn.js";import{C as r,D as t}from"./ResponsivePopover.stories-SgeqTFgd.js";import"./preload-helper-PPVm8Dsz.js";import"./information-FYwlptxJ.js";import"./sys-enter-2-CNa4r-Sw.js";import"./alert-Bj_hkuex.js";import"./index-gCdJvzAZ.js";import"./index-BzGBt6gL.js";import"./Link-DOaKYpM4.js";import"./copy-CtWnGcSg.js";import"./copy-BrUTFvSK.js";import"./GitHub-Mark-DXFulQjb.js";import"./TableOfContent-BF-a6WsZ.js";import"./index-DvoAW6NG.js";import"./index-BwuMWpwU.js";import"./index-CqXebPST.js";import"./index-CKcNqeBZ.js";import"./index-Gt-7HKkD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CDzt8G5a.js";import"./addCustomCSSWithScoping-DaHSAyiF.js";import"./index-BF5blqws.js";import"./index-JhMtSdTx.js";import"./ListItemStandard-D-7OIxnD.js";import"./settings-D-G-hMFI.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
