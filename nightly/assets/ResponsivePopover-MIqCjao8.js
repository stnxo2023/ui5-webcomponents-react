import{j as o}from"./iframe-fnu3Vo41.js";import{useMDXComponents as s}from"./index-BSrpAODL.js";import{M as i,C as m}from"./blocks-BS5BROTL.js";import"./Tag-BiBlBJWE.js";import"./index-BbmVly28.js";import{C as c}from"./ControlsWithNote-BWgvPZ7_.js";import{D as a}from"./DocsHeader-CA2rdiYW.js";import{F as d}from"./CommandsAndQueries-Bopzu-n8.js";import{C as r,D as t}from"./ResponsivePopover.stories-ZqpeNXvm.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C4CUHJ6u.js";import"./sys-enter-2-Bq1R0WAk.js";import"./alert-xdJdEaU1.js";import"./index-B7d1u9D1.js";import"./index-rPkavUv0.js";import"./Link-BLTuinuO.js";import"./copy-BTIQv4wT.js";import"./copy-Db06aovL.js";import"./GitHub-Mark-B_X_RBkU.js";import"./TableOfContent-Df-n_UOr.js";import"./index-SCFjt_Ga.js";import"./index-CJk9IgGL.js";import"./index-BUdZGDL2.js";import"./index-C8EzOXR3.js";import"./index-DahYWRMR.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D2MON8lG.js";import"./addCustomCSSWithScoping-DzZplljN.js";import"./index-DYKo8bXl.js";import"./index-BrR0l5NR.js";import"./ListItemStandard-BRTdZnQJ.js";import"./settings-zDmG-3im.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
