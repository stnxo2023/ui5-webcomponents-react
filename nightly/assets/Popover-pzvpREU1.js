import{j as o}from"./iframe-HT1spLTi.js";import{useMDXComponents as s}from"./index-DBCrLany.js";import{M as i,C as m}from"./blocks-BHdc3k3Z.js";import"./Tag-D0fQ6cD9.js";import"./index-QNmDooaX.js";import{C as c}from"./ControlsWithNote-C2NdPp4a.js";import{D as a}from"./DocsHeader-fKL6It59.js";import{F as d}from"./CommandsAndQueries-BbzR7uR6.js";import{C as r,D as t}from"./Popover.stories-DhhidVeu.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BYNrnqUc.js";import"./sys-enter-2-D7etVCyM.js";import"./alert-D38Y2b3l.js";import"./index-BXPXbeEl.js";import"./index-CWHtqZOi.js";import"./Link-dxeMesAc.js";import"./copy-C2DqEa-i.js";import"./copy-CRfxWZGx.js";import"./GitHub-Mark-BSVfygjg.js";import"./TableOfContent-BK7avpMU.js";import"./index-BZj-Nofr.js";import"./index-gqzRfHPw.js";import"./index-ILnTo0yK.js";import"./index-CNJfOrlA.js";import"./index-CV40RAYh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-tr8O9Dg_.js";import"./addCustomCSSWithScoping-DOmP-F21.js";import"./settings-OrML4UsD.js";import"./index-D0O_r2Gf.js";import"./index-BXOm-GNk.js";import"./ListItemStandard-B0rWPz1n.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
