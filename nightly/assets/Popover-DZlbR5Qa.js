import{j as o}from"./iframe-DQ6p6C4w.js";import{useMDXComponents as s}from"./index-PJ7eIANP.js";import{M as i,C as m}from"./blocks-DzLxfDF_.js";import"./Tag-maX3wI_O.js";import"./index-DMdtpgB4.js";import{C as c}from"./ControlsWithNote-Ur_jkq9G.js";import{D as a}from"./DocsHeader-Fv8T_lZo.js";import{F as d}from"./CommandsAndQueries-D4Earqxe.js";import{C as r,D as t}from"./Popover.stories-rjmh495a.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DP-BBVKe.js";import"./sys-enter-2-CHLEBxpk.js";import"./alert-DwSet8Gr.js";import"./index-BBaHTUom.js";import"./index-Crvp2P38.js";import"./Link-C5vNyymE.js";import"./copy-D-zwDUZI.js";import"./copy-DK9nMyWi.js";import"./GitHub-Mark-aXQ0sgqE.js";import"./TableOfContent-DmXt6Qjn.js";import"./index-DyLo2c5y.js";import"./index-BX38vZ_H.js";import"./index-BTeE4XW8.js";import"./index-GGF-6yBD.js";import"./index-BiYiYWPU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DEFxvwKp.js";import"./addCustomCSSWithScoping-D-NBvgXV.js";import"./settings-Qlfl2--E.js";import"./index-DDn9deUd.js";import"./index-YsTawKKr.js";import"./ListItemStandard-CNdPnkVA.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
