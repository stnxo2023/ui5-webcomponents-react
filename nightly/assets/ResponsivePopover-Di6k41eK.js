import{j as o}from"./iframe-BSil-P7u.js";import{useMDXComponents as s}from"./index-vt-1HXZR.js";import{M as i,C as m}from"./blocks-DAd1jcGX.js";import"./Tag-C9JFY3U3.js";import"./index-DHsON_5K.js";import{C as c}from"./ControlsWithNote-IzVnpcp3.js";import{D as a}from"./DocsHeader-or8uocV3.js";import{F as d}from"./CommandsAndQueries-D6srY1_t.js";import{C as r,D as t}from"./ResponsivePopover.stories-D6OxCLko.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BmoL6a_m.js";import"./sys-enter-2-CRjOI67W.js";import"./alert-B93IgYs6.js";import"./index-CM8rBgl_.js";import"./index-CoIXLnKn.js";import"./Link-qL_T98pU.js";import"./copy-DRBTYiSa.js";import"./copy-CwHd1VH0.js";import"./GitHub-Mark-kSE0aKM7.js";import"./TableOfContent-BThO0rAD.js";import"./index-FBl5xz3h.js";import"./index-TzMEaDq9.js";import"./index-DYtE3L5B.js";import"./index-BEx2FW11.js";import"./index-DzdENY0T.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bp27VxQp.js";import"./addCustomCSSWithScoping-BLX4O9b7.js";import"./index-BosJcweM.js";import"./index-BBoe6R2N.js";import"./ListItemStandard-Co9OiWLE.js";import"./settings-CuEyn2tk.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
