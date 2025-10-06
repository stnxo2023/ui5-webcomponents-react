import{j as o}from"./iframe-HNnxxD_z.js";import{useMDXComponents as s}from"./index-DMbTStZf.js";import{M as i,C as m}from"./blocks-CCejLYgP.js";import"./Tag-C_XEAXfN.js";import"./index-sOkH0Wf9.js";import{C as c}from"./ControlsWithNote-Dhu9GziC.js";import{D as a}from"./DocsHeader-Cea1CK0F.js";import{F as d}from"./CommandsAndQueries-10i8xq6U.js";import{C as r,D as t}from"./Popover.stories-BgYwuO2T.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BWoF60GS.js";import"./sys-enter-2-BmofK6wa.js";import"./alert-qoF8AI7R.js";import"./index-B3Qe_MYG.js";import"./index-B_Z8tqtL.js";import"./Link-CqZZKZ0X.js";import"./copy-CZ_9T5Wd.js";import"./copy-DRw12hkD.js";import"./GitHub-Mark-BpcLW3KD.js";import"./TableOfContent-C3vnVgT_.js";import"./index-BN0PdEk3.js";import"./index-DoZC0kx0.js";import"./index-Bmalf1dG.js";import"./index-CbtLCQbD.js";import"./index-BNjcdWK4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-7TcfhjQy.js";import"./addCustomCSSWithScoping-BgldszW1.js";import"./settings-5OpdjY_e.js";import"./index-CjfdEX9X.js";import"./index-FhSs3lIN.js";import"./ListItemStandard-oPCc0Uwz.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
