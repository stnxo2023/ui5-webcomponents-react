import{j as e,e as r}from"./iframe-MOZTZvx5.js";import{useMDXComponents as d}from"./index-Dg_uAO8t.js";import{A as s}from"./ArgTypesWithNote-nZSi_-_b.js";import{C as x}from"./ControlsWithNote-CYCsEmFS.js";import{D as h}from"./DocsHeader-DhQMjacv.js";import{F as l}from"./CommandsAndQueries-D1cXr-nE.js";import{M as f,C as i,a as j,D as m}from"./blocks-OWx-zaQy.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-CywumCD3.js";import{M as a}from"./index-BbS9lpb-.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BgV1CUPM.js";import"./information-BmrOjFlN.js";import"./sys-enter-2-CJ54mtHu.js";import"./alert-CvnXXdTy.js";import"./Tag-D4CUHK9_.js";import"./index-Vm6d87Cs.js";import"./index-BVuz7GOm.js";import"./Link-D6y2NVEd.js";import"./copy-C45n88Kl.js";import"./copy-1ZgkFucr.js";import"./GitHub-Mark-CMzLKp4f.js";import"./TableOfContent-jJ2isKKi.js";import"./index-jWV64fa4.js";import"./index-Wo6cIUDI.js";import"./index-D_H2FzQ8.js";import"./index-BfSH4rx9.js";import"./index-CT3JBxRK.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DgDY8vOY.js";import"./addCustomCSSWithScoping-C-qiC_lj.js";import"./locked-CMdFet55.js";import"./index-CbHq_vE4.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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
