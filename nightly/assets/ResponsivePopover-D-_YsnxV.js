import{j as o}from"./iframe-Bx5nPEOl.js";import{useMDXComponents as s}from"./index-xw1HgrxR.js";import{M as i,C as m}from"./blocks-BnfvreJd.js";import"./Tag-Czmfabca.js";import"./index-DySSVXhZ.js";import{C as c}from"./ControlsWithNote-CahJmR9N.js";import{D as a}from"./DocsHeader-BI3J9sAt.js";import{F as d}from"./CommandsAndQueries-DQbk5l2-.js";import{C as r,D as t}from"./ResponsivePopover.stories-7U_d2bIt.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C_BRWXUj.js";import"./sys-enter-2-lnnKHtcu.js";import"./alert-CZSvHkOp.js";import"./index-D030oFb6.js";import"./index-DkrrTKjv.js";import"./Link-kOQVQryb.js";import"./copy-DXcXCTsO.js";import"./copy-CNcXjyuB.js";import"./GitHub-Mark-CS2VW7Dg.js";import"./TableOfContent-DsWzsd02.js";import"./index-BJ7q1nh3.js";import"./index-CHjTsZ6I.js";import"./index-DAgUYXjE.js";import"./index-EX-yWEKJ.js";import"./index-Bwj8Rahv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-4hIxCZ-4.js";import"./addCustomCSSWithScoping-BnQjkpis.js";import"./index-DBe8VqoY.js";import"./index-Cp2_alMF.js";import"./ListItemStandard-zfIyxVpK.js";import"./settings-CdO75LQa.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
