import{j as e,e as r}from"./iframe-HT1spLTi.js";import{useMDXComponents as d}from"./index-DBCrLany.js";import{A as s}from"./ArgTypesWithNote-EAzFMw7S.js";import{C as x}from"./ControlsWithNote-C2NdPp4a.js";import{D as h}from"./DocsHeader-fKL6It59.js";import{F as l}from"./CommandsAndQueries-BbzR7uR6.js";import{M as f,C as i,a as j,D as m}from"./blocks-BHdc3k3Z.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-Cff4_9Y_.js";import{M as a}from"./index-TyihIJ9j.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-QNmDooaX.js";import"./information-BYNrnqUc.js";import"./sys-enter-2-D7etVCyM.js";import"./alert-D38Y2b3l.js";import"./Tag-D0fQ6cD9.js";import"./index-BXPXbeEl.js";import"./index-CWHtqZOi.js";import"./Link-dxeMesAc.js";import"./copy-C2DqEa-i.js";import"./copy-CRfxWZGx.js";import"./GitHub-Mark-BSVfygjg.js";import"./TableOfContent-BK7avpMU.js";import"./index-BZj-Nofr.js";import"./index-gqzRfHPw.js";import"./index-ILnTo0yK.js";import"./index-CNJfOrlA.js";import"./index-CV40RAYh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-tr8O9Dg_.js";import"./addCustomCSSWithScoping-DOmP-F21.js";import"./locked-CcUvVxxt.js";import"./index-Cq5E26sb.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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
