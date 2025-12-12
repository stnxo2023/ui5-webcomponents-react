import{j as o}from"./iframe-5Ai_0qn6.js";import{useMDXComponents as s}from"./index-B7f66Dmz.js";import{M as i,C as m}from"./blocks-B56i3DPI.js";import"./Tag-COMV1q97.js";import"./index-DmI0q2i9.js";import{C as c}from"./ControlsWithNote-Dmf2RZYl.js";import{D as a}from"./DocsHeader-BNDJcX-j.js";import{F as d}from"./CommandsAndQueries-JQTwJq8J.js";import{C as r,D as t}from"./Popover.stories-BnfULVUh.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D04M7OHu.js";import"./sys-enter-2-1BgXqzpT.js";import"./alert-BhFUrxxf.js";import"./index-BkdUYSuU.js";import"./index-BRDhzPf9.js";import"./Link-D--4KGaX.js";import"./copy-B5LlkFWV.js";import"./copy-DNLRE2WL.js";import"./GitHub-Mark-CmaLVeo_.js";import"./TableOfContent-BjCvBF3F.js";import"./index-Ce1oa-YM.js";import"./index-q1btkUh6.js";import"./index-B-uO6_4g.js";import"./index-D661wfa7.js";import"./index-Bq31yNzK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-COAGvdy_.js";import"./addCustomCSSWithScoping-DYNqCkls.js";import"./settings-C7ek-hnD.js";import"./index-Cb8kvc5z.js";import"./index-DwAuXlyS.js";import"./ListItemStandard-BzBCEa9G.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
