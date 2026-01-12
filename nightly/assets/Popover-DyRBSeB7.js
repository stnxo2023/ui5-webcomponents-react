import{j as o}from"./iframe-BWwaFrUe.js";import{useMDXComponents as s}from"./index-YNaFuKct.js";import{M as i,C as m}from"./blocks-CUOVkMW1.js";import"./Tag-C1jS-OQM.js";import"./index-D57lmYpc.js";import{C as c}from"./ControlsWithNote-BNlVEjwz.js";import{D as a}from"./DocsHeader-vdiSX0JK.js";import{F as d}from"./CommandsAndQueries-BTZsnlDx.js";import{C as r,D as t}from"./Popover.stories-BeIFuUJD.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DMTe0ysY.js";import"./sys-enter-2-DQvPI1W2.js";import"./alert-BsvI3BFP.js";import"./index-B87YjzNM.js";import"./index-D2byHvrl.js";import"./Link-BKxr4_LG.js";import"./copy-1vNfW39X.js";import"./copy-CotvDhWa.js";import"./GitHub-Mark-DsEw-lro.js";import"./TableOfContent-CRMHaK3X.js";import"./index-DWyfCle9.js";import"./index-CPNWsz0F.js";import"./index-CjEjkqT0.js";import"./index-BHGImwbL.js";import"./index-CZL1WN1v.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B9SYXEMy.js";import"./addCustomCSSWithScoping-DT9AYQXn.js";import"./settings-4vio0KZw.js";import"./index-BDRKN7at.js";import"./index-mG3R14Tg.js";import"./ListItemStandard-D-3ZFt0p.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
