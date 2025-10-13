import{j as o}from"./iframe-mZIFexBi.js";import{useMDXComponents as s}from"./index-CSeyhL4L.js";import{M as i,C as m}from"./blocks-pMMBqTak.js";import"./Tag-C5S5wO6X.js";import"./index-CY-KcLEe.js";import{C as c}from"./ControlsWithNote-CeKNi1j-.js";import{D as a}from"./DocsHeader-D6o94XkP.js";import{F as d}from"./CommandsAndQueries-_DqxABXw.js";import{C as r,D as t}from"./Popover.stories-DGhKUeTQ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CuCRdO66.js";import"./sys-enter-2-Da-bg0qX.js";import"./alert-4bZr7bHx.js";import"./index-DbDxOjYs.js";import"./index-CPook487.js";import"./Link-Dky_yGkw.js";import"./copy-CYBLcZaz.js";import"./copy-CK4YnSbS.js";import"./GitHub-Mark-DBieLl-a.js";import"./TableOfContent-Bj42saZH.js";import"./index-Bym-t_ma.js";import"./index-BFs_s1ec.js";import"./index-BbeYDVUM.js";import"./index-DCVKeCrB.js";import"./index-B61-jGoN.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B9FjHI5t.js";import"./addCustomCSSWithScoping-BJ-ZUtqt.js";import"./settings-CyhNrSEc.js";import"./index-C2MqkFzJ.js";import"./index-BY87GbXm.js";import"./ListItemStandard-BsmNnGjy.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
