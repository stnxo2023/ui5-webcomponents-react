import{j as o}from"./iframe-Hc0Jcm1H.js";import{useMDXComponents as s}from"./index-DuUU5AC1.js";import{M as i,C as m}from"./blocks-Blx2ursY.js";import"./Tag-DWcxngX2.js";import"./index-X6pjtL8_.js";import{C as c}from"./ControlsWithNote-CFIfyIzl.js";import{D as a}from"./DocsHeader-CcDmDBsq.js";import{F as d}from"./CommandsAndQueries-DaPP_-f6.js";import{C as r,D as t}from"./ResponsivePopover.stories-BplPM1AB.js";import"./preload-helper-PPVm8Dsz.js";import"./information-MEaUQuQF.js";import"./sys-enter-2-Bor4HzlU.js";import"./alert-B5sjmhde.js";import"./index-CJBWc845.js";import"./index-BP8PtjoR.js";import"./Link-B4jgiGqN.js";import"./copy-CmmOC4GI.js";import"./copy-BhskYI2N.js";import"./GitHub-Mark-DuG3V-eq.js";import"./TableOfContent-yaPdzqTW.js";import"./index-CQCUFERN.js";import"./index-BZHpmRs9.js";import"./index-D4_s-XzL.js";import"./index-DixWMcP9.js";import"./index-YGVe_Lue.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CSgKpTfU.js";import"./addCustomCSSWithScoping-C31rwvDU.js";import"./index-CP62UNNy.js";import"./index-Dc4nb1AV.js";import"./ListItemStandard-DI8nzW2J.js";import"./settings-DoJo7PIR.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
