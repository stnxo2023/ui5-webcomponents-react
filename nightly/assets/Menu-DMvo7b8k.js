import{j as e,e as r}from"./iframe-D74d3IUT.js";import{useMDXComponents as d}from"./index-BzFpXofy.js";import{A as s}from"./ArgTypesWithNote-DqhNBWC8.js";import{C as x}from"./ControlsWithNote-CvEObb8r.js";import{D as h}from"./DocsHeader-DPBbsWBU.js";import{F as l}from"./CommandsAndQueries-CXtjs1YA.js";import{M as f,C as i,a as j,D as m}from"./blocks-CXGWO-SS.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-DJryAr9w.js";import{M as a}from"./index-CanMCy3s.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D9Jimze5.js";import"./information-CzZVG8MP.js";import"./sys-enter-2-Bo9ZeWqv.js";import"./alert-BpouBdE8.js";import"./Tag-CGDi5rN6.js";import"./index-B6nGMvY0.js";import"./index-nz5M1FvK.js";import"./Link-BnKuAsKS.js";import"./copy-C5C63oSw.js";import"./copy-B52gZhj1.js";import"./GitHub-Mark-DXqoSDG3.js";import"./TableOfContent-CtfBXmkb.js";import"./index-Dp6BwZZH.js";import"./index-BAV2Dqb-.js";import"./index-CGofV6Bd.js";import"./index-CBnDxC_O.js";import"./index-CUp4_VMY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DI0ZtE-_.js";import"./addCustomCSSWithScoping-DX0DY0tV.js";import"./locked-ChNsN7Wl.js";import"./index-DyXHi0fA.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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
