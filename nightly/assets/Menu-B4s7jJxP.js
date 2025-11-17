import{j as e,e as r}from"./iframe-DeqKlIRG.js";import{useMDXComponents as d}from"./index-BkEa29Df.js";import{A as s}from"./ArgTypesWithNote-D1G-Iv45.js";import{C as x}from"./ControlsWithNote-DNWSkOtb.js";import{D as h}from"./DocsHeader-u_PHA39t.js";import{F as l}from"./CommandsAndQueries-BK0G3Pqq.js";import{M as f,C as i,a as j,D as m}from"./blocks-C1D2jvVQ.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-CO1j4MU1.js";import{M as a}from"./index-C5-ZhAhr.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CW-zKJIF.js";import"./information-BKTQWge_.js";import"./sys-enter-2-qREtxQiM.js";import"./alert-J7MXwQPX.js";import"./Tag-EQmX-47F.js";import"./index-CNR4ri7j.js";import"./index-vsoaIVfP.js";import"./Link-DmriJHN9.js";import"./copy-B2GlItSC.js";import"./copy-DS8sFIJH.js";import"./GitHub-Mark-GuENG757.js";import"./TableOfContent-5V1zI8jP.js";import"./index-BnqCxbWG.js";import"./index-D3fIG7Vo.js";import"./index-DZSRf0vt.js";import"./index-CUp9ZC_J.js";import"./index-BjGpgXu_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CD5youlR.js";import"./addCustomCSSWithScoping-W7fjoweE.js";import"./locked-BhhFli_p.js";import"./index-CNJ6EnRy.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
`,e.jsx(h,{of:t,since:"0.23.0"}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(x,{of:p}),`
`,e.jsx(n.h2,{id:"opening-menus",children:"Opening Menus"}),`
`,e.jsxs(n.p,{children:["You can open and close the ",e.jsx(n.code,{children:"Menu"})," component in a declarative way using the ",e.jsx(n.code,{children:"open"})," and ",e.jsx(n.code,{children:"opener"})," prop."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const MyComponentWithMenu = () => {
  const buttonRef = useRef(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <>
      <Button
        ref={buttonRef}
        onClick={() => {
          setMenuIsOpen(true);
        }}
      >
        Open Action Sheet
      </Button>
      <Menu
        opener={buttonRef.current}
        open={menuIsOpen}
        onClose={() => {
          setMenuIsOpen(false);
        }}
      />
    </>
  );
};
`})}),`
`,e.jsx(n.h2,{id:"more-examples",children:"More examples"}),`
`,e.jsx(n.h3,{id:"menu-with-submenu",children:"Menu with Submenu"}),`
`,e.jsx(i,{of:M}),`
`,e.jsx(j,{children:C}),`
`,e.jsx(n.h2,{id:"menuitem",children:"MenuItem"}),`
`,e.jsx(m,{of:a}),`
`,e.jsx(s,{metaOf:t,hideHTMLPropsNote:!0,exclude:r,of:a}),`
`,e.jsx(n.h2,{id:"menuitemgroup",children:"MenuItemGroup"}),`
`,e.jsx(m,{of:u}),`
`,e.jsx(s,{metaOf:t,hideHTMLPropsNote:!0,exclude:r,of:u}),`
`,e.jsx(l,{})]})}function $(o={}){const{wrapper:n}={...d(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(c,{...o})}):c(o)}export{$ as default};
