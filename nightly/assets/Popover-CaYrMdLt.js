import{j as o}from"./iframe-CZzIPN_f.js";import{useMDXComponents as s}from"./index-BN7772Ln.js";import{M as i,C as m}from"./blocks-CpAefQ0F.js";import"./Tag-B8_XKizL.js";import"./index-CYLMYqU3.js";import{C as c}from"./ControlsWithNote-D0D6e7_T.js";import{D as a}from"./DocsHeader-DscAge5I.js";import{F as d}from"./CommandsAndQueries-C_V-vyfI.js";import{C as r,D as t}from"./Popover.stories-DgjsG9mA.js";import"./preload-helper-PPVm8Dsz.js";import"./information-6G8KrWG0.js";import"./sys-enter-2-Blj9-cAn.js";import"./alert-BtpU_SH9.js";import"./index-TDczsIb0.js";import"./index-CiiSHxVf.js";import"./Link-Fkmlwa07.js";import"./copy-CkuztRfR.js";import"./copy-CFuW58eh.js";import"./GitHub-Mark-D1EJCevk.js";import"./TableOfContent-BiAzmVZ5.js";import"./index-RbSpX7Av.js";import"./index-RQjAfURV.js";import"./index-CCj5LB1a.js";import"./index-DMvyX2go.js";import"./index-c-1N-cez.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CmB6T7HK.js";import"./addCustomCSSWithScoping-DaZxNPdr.js";import"./settings-C8GSnPCs.js";import"./index-BigJjRDp.js";import"./index-D0gJWrcG.js";import"./ListItemStandard-DAcFQW4k.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
