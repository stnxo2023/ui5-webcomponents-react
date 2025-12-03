import{j as o}from"./iframe-tj1IXK49.js";import{useMDXComponents as s}from"./index-BnfY_9Nm.js";import{M as i,C as m}from"./blocks-B5RuKJh5.js";import"./Tag-DQ_YqxY9.js";import"./index-BScgQgkK.js";import{C as c}from"./ControlsWithNote-8LDKc61c.js";import{D as a}from"./DocsHeader-C62Ebr8h.js";import{F as d}from"./CommandsAndQueries-BjstQSnK.js";import{C as r,D as t}from"./ResponsivePopover.stories-gYB_K7q3.js";import"./preload-helper-PPVm8Dsz.js";import"./information-7IX06_U3.js";import"./sys-enter-2-lbz-PkIt.js";import"./alert-BrK48pCK.js";import"./index-BSv7hb7A.js";import"./index-BINOQQsd.js";import"./Link-OqvTbJ_m.js";import"./copy-D4RHJWu1.js";import"./copy-7hwn-SEF.js";import"./GitHub-Mark-Bhp_x0Gd.js";import"./TableOfContent-Vz4CpZyN.js";import"./index-BZJK_qmM.js";import"./index-CG8SFQa2.js";import"./index--qIKxsMf.js";import"./index-yAmFIL7x.js";import"./index-DPa2AXHs.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DtbFBLyL.js";import"./addCustomCSSWithScoping-DTX7qnOW.js";import"./index-CDt63173.js";import"./index-CFNZtnKn.js";import"./ListItemStandard-BSxtlPA8.js";import"./settings-B4r0uagp.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
