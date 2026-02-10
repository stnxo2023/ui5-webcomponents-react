import{j as o}from"./iframe-OU-rKGVl.js";import{useMDXComponents as s}from"./index-BdFoQaN_.js";import{M as i,C as m}from"./blocks-90C6s9DB.js";import"./Tag-BGeGdyvC.js";import"./index-CvYMziHu.js";import{C as c}from"./ControlsWithNote-DsttCYtU.js";import{D as a}from"./DocsHeader-BYXcCq73.js";import{F as d}from"./CommandsAndQueries-1YsKNX6u.js";import{C as r,D as t}from"./ResponsivePopover.stories-x1_PpqzU.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DJNA9m3t.js";import"./sys-enter-2-Cr3cjNlh.js";import"./alert-Czqp44ew.js";import"./index-CvIaP9X3.js";import"./index-BCzS-sMX.js";import"./Link-DUV5jdr_.js";import"./copy-CLHqn6KR.js";import"./copy-ukTvQIks.js";import"./GitHub-Mark-D7jy9NLm.js";import"./TableOfContent-ChbIOij0.js";import"./index-BlWEaWz4.js";import"./index-B5S-I-wQ.js";import"./index-Cy3EQ66_.js";import"./index-M6X6hbjk.js";import"./index-CvP3_iIG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DeGn29mr.js";import"./addCustomCSSWithScoping-BqWgeVkc.js";import"./index-CXggoDTH.js";import"./index-BWr4kG0m.js";import"./ListItemStandard-CxAFUNDr.js";import"./settings-CwmWqfy-.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
