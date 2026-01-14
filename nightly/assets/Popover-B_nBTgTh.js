import{j as o}from"./iframe-C8VIz1cN.js";import{useMDXComponents as s}from"./index-DF3oZ9DD.js";import{M as i,C as m}from"./blocks-D-v6PHKz.js";import"./Tag-Ce9kI3uB.js";import"./index-W-CFrWn1.js";import{C as c}from"./ControlsWithNote-Cx_-zFP3.js";import{D as a}from"./DocsHeader-B2gToiar.js";import{F as d}from"./CommandsAndQueries-D_HB_HX-.js";import{C as r,D as t}from"./Popover.stories-CjxHREzI.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Hi7RSuvY.js";import"./sys-enter-2-CeqtRGpA.js";import"./alert-DDLVUdt7.js";import"./index-C3PbHa_S.js";import"./index-zu9Y-W0w.js";import"./Link-8iQqMH3R.js";import"./copy-DmsxEFne.js";import"./copy-ChBzOjSf.js";import"./GitHub-Mark-EKLu-fRk.js";import"./TableOfContent-rBzrQ-hO.js";import"./index-CK3WOJt5.js";import"./index-IuSSn5Ye.js";import"./index-DVHGI5Hf.js";import"./index-CQjs21SR.js";import"./index-D5h2jV28.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-VSpt3ox9.js";import"./addCustomCSSWithScoping-BS3ufxCI.js";import"./settings-qFLjUWC6.js";import"./index-BXRJsEsZ.js";import"./index-Cnckaa8J.js";import"./ListItemStandard-BNEO49EL.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
