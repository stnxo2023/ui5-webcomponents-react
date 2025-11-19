import{j as o}from"./iframe-DjfYWB_-.js";import{useMDXComponents as s}from"./index-CNEMb-s-.js";import{M as i,C as m}from"./blocks-nmBdCmu5.js";import"./Tag-BYbOAHsQ.js";import"./index-Cv9LJBlx.js";import{C as c}from"./ControlsWithNote-DsGQ_MBv.js";import{D as a}from"./DocsHeader-BzgrVMDY.js";import{F as d}from"./CommandsAndQueries-BsOJw-5f.js";import{C as r,D as t}from"./ResponsivePopover.stories-GiQ6rDUW.js";import"./preload-helper-PPVm8Dsz.js";import"./information-6Bx96viV.js";import"./sys-enter-2-Dkjyf6Zz.js";import"./alert-Cr4CwR6P.js";import"./index-CPQFexs4.js";import"./index-CkJ-GMHH.js";import"./Link-CGcb-hqt.js";import"./copy-D-LCchrs.js";import"./copy-DOQqskn1.js";import"./GitHub-Mark-CcO0w1du.js";import"./TableOfContent-bxTPAjpM.js";import"./index-Cwo-vKel.js";import"./index-B3I7HtBx.js";import"./index-3-iEB97a.js";import"./index-Blql2ABB.js";import"./index-B4phfj74.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-M6waVzUY.js";import"./addCustomCSSWithScoping-Bm9f8w42.js";import"./index-0H0qN1a3.js";import"./index-B-bcUYN5.js";import"./ListItemStandard-DkthL8Bg.js";import"./settings-Bqn2drvn.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
