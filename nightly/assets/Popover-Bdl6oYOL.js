import{j as o}from"./iframe-CojmUvbr.js";import{useMDXComponents as s}from"./index-yNE59oSe.js";import{M as i,C as m}from"./blocks-CCIsbg9K.js";import"./Tag-Dsf3IOJa.js";import"./index-Brr98IUO.js";import{C as c}from"./ControlsWithNote-DQ8Crg8_.js";import{D as a}from"./DocsHeader-SVcQ-nrz.js";import{F as d}from"./CommandsAndQueries-aZHAlwyo.js";import{C as r,D as t}from"./Popover.stories-BW-YCrSH.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BEykFvbu.js";import"./sys-enter-2-BjWZZR70.js";import"./alert-CeJt7tDB.js";import"./index-CW7nJiyw.js";import"./index-YKIZAZmt.js";import"./Link-DrGCnOch.js";import"./copy-DAVGLFJC.js";import"./copy-BaosELJI.js";import"./GitHub-Mark-CClA253F.js";import"./TableOfContent-CYdFHrwI.js";import"./index-DWXpW2Nz.js";import"./index-CJ7ufDVc.js";import"./index-DSq2zmmv.js";import"./index-n-K8h2zA.js";import"./index-BIRLYBEm.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CBX4KpMg.js";import"./addCustomCSSWithScoping-IwiFNes4.js";import"./settings-rTgMGjKN.js";import"./index-CGQmGuch.js";import"./index-k6h4lExd.js";import"./ListItemStandard-x9obTEZ-.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
