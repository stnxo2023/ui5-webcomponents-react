import{j as o}from"./iframe-u8FS7fYy.js";import{useMDXComponents as s}from"./index-C5mdpSHf.js";import{M as i,C as m}from"./blocks-CA6IPYk4.js";import"./Tag-DslDE0Bb.js";import"./index-feIb_zWP.js";import{C as c}from"./ControlsWithNote-BB_y-Ms5.js";import{D as a}from"./DocsHeader-By-_ltcA.js";import{F as d}from"./CommandsAndQueries-q_IHoPaq.js";import{C as r,D as t}from"./ResponsivePopover.stories-SIFvJZts.js";import"./preload-helper-PPVm8Dsz.js";import"./information-eayia0M9.js";import"./sys-enter-2-Bq8G42J8.js";import"./alert-C2jJRi0I.js";import"./index-39vhHnbo.js";import"./index-Dt8N5TZZ.js";import"./Link-B1qI_6K5.js";import"./copy-Dg0wNPun.js";import"./copy-DnscT9w9.js";import"./GitHub-Mark-CxXEfG9N.js";import"./TableOfContent-LdXXrtdu.js";import"./index-Dm5-M5Tp.js";import"./index-BLjc-MlZ.js";import"./index-B2lRXwRR.js";import"./index-Ck97t6iE.js";import"./index-Cr0S2U_P.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-VZfInv7D.js";import"./addCustomCSSWithScoping-Bi-KBOqo.js";import"./index-DFCmj0mv.js";import"./index-C4EDa0au.js";import"./ListItemStandard-BMXLX1H8.js";import"./settings-CsmDkRWR.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
