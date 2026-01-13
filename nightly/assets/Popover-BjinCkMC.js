import{j as o}from"./iframe-BkU8WQpb.js";import{useMDXComponents as s}from"./index-BeG8GrN5.js";import{M as i,C as m}from"./blocks-CLMMfPPt.js";import"./Tag-Cih70sHI.js";import"./index-DnBqZpyB.js";import{C as c}from"./ControlsWithNote-DyRp8-gJ.js";import{D as a}from"./DocsHeader-C30QBAZS.js";import{F as d}from"./CommandsAndQueries-DetvrItO.js";import{C as r,D as t}from"./Popover.stories-CtQKjxzo.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CjNccefj.js";import"./sys-enter-2-RLTSxo4s.js";import"./alert-DdBYY2qU.js";import"./index-DATmYB4_.js";import"./index-eFI2U8Up.js";import"./Link-DLFy93gF.js";import"./copy-BbR_ie7A.js";import"./copy-B4HTDbaZ.js";import"./GitHub-Mark-BfbqEMTI.js";import"./TableOfContent-PrM3zgzS.js";import"./index-Dj6CZlQQ.js";import"./index-f6jDEWAh.js";import"./index-D4xCyo8q.js";import"./index-DWR5LsZZ.js";import"./index-BysDONg4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Fp7idO2l.js";import"./addCustomCSSWithScoping-CehjyWVu.js";import"./settings-CJS1NR3M.js";import"./index-BJRBwXE4.js";import"./index-lT6ku5Z4.js";import"./ListItemStandard-BgczD3q6.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
