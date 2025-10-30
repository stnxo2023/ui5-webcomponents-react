import{j as e,e as r}from"./iframe-JkIS1XbA.js";import{useMDXComponents as d}from"./index-s0dX5IQa.js";import{A as s}from"./ArgTypesWithNote-ZEoSpDei.js";import{C as x}from"./ControlsWithNote-BVMBwcga.js";import{D as h}from"./DocsHeader-BlLUNc3_.js";import{F as l}from"./CommandsAndQueries-t8PqdBYw.js";import{M as f,C as i,a as j,D as m}from"./blocks-DIFA4jfF.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-OxR0YuMR.js";import{M as a}from"./index-D6yOOOzU.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cki6PEzP.js";import"./information-8O35dRa_.js";import"./sys-enter-2-BwjA-U8a.js";import"./alert-0nYrX8QQ.js";import"./Tag-CGYuzpRX.js";import"./index-wV8mgQwM.js";import"./index-Cc6IDcWO.js";import"./Link-C8ljX_Jl.js";import"./copy-Z5wMCCnC.js";import"./copy-BpEy4GT_.js";import"./GitHub-Mark-BkX-BybF.js";import"./TableOfContent-COxJdC22.js";import"./index-CcRV2upd.js";import"./index-If9QK12V.js";import"./index-BJe_Ldbq.js";import"./index-CIULjnJw.js";import"./index-D4k933VY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C6BvO_Mx.js";import"./addCustomCSSWithScoping-OrJPV9ed.js";import"./locked-CWvC6zzf.js";import"./index-D9CTgAml.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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
