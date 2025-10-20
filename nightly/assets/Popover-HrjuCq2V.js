import{j as o}from"./iframe-7SE3nFh2.js";import{useMDXComponents as s}from"./index-C0FWbpZL.js";import{M as i,C as m}from"./blocks-BJKQ4CAZ.js";import"./Tag-CAr8yJM3.js";import"./index-DcFj-mpl.js";import{C as c}from"./ControlsWithNote-CfLd-2FY.js";import{D as a}from"./DocsHeader-aNnt3Lfp.js";import{F as d}from"./CommandsAndQueries-BztwtTDr.js";import{C as r,D as t}from"./Popover.stories-BpguhK0M.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CEHY-zK8.js";import"./sys-enter-2-Db6aMDI3.js";import"./alert-iGUotenY.js";import"./index-CZm6iJJ6.js";import"./index-BH5SLEfd.js";import"./Link-DJshYrFL.js";import"./copy-Ck-cOtgE.js";import"./copy-CDZIXxHa.js";import"./GitHub-Mark-TqIkv81D.js";import"./TableOfContent-B1lf0qQg.js";import"./index-BdnA4cG1.js";import"./index-DZIYhziJ.js";import"./index-CJza0w__.js";import"./index-CHnd9ZVx.js";import"./index-cZBRAzkp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bx3Mb7HN.js";import"./addCustomCSSWithScoping-CrtLyOIc.js";import"./settings-D2UzRPAT.js";import"./index-Bk-K0ke_.js";import"./index-r--j9iEI.js";import"./ListItemStandard-5gZgEeYH.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
