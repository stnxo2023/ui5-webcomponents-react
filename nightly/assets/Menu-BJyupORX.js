import{j as e,e as r}from"./iframe-0odebeya.js";import{useMDXComponents as d}from"./index-CqFbrvRl.js";import{A as s}from"./ArgTypesWithNote-I0zf6i3k.js";import{C as x}from"./ControlsWithNote-yy9Z70tj.js";import{D as h}from"./DocsHeader-HJTTPE0p.js";import{F as l}from"./CommandsAndQueries-EL4jX5E-.js";import{M as f,C as i,a as j,D as m}from"./blocks-CZanU-Ia.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-CgpESkSB.js";import{M as a}from"./index-DZF0mDj0.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D9xNyPsZ.js";import"./information-CjkTzkFz.js";import"./sys-enter-2-DdZ_D29i.js";import"./alert-D-ynjdbk.js";import"./Tag-BUYfpKMM.js";import"./index-BINGVIRj.js";import"./index-CaXXMvN7.js";import"./Link-BrHi8e0V.js";import"./copy-BYpie_7C.js";import"./copy-CT5RXkub.js";import"./GitHub-Mark-fdWbDvv0.js";import"./TableOfContent-DKap7IC3.js";import"./index-8HMofQBq.js";import"./index-Bj8LHsHM.js";import"./index-frz6UFer.js";import"./index-tz56fx9f.js";import"./index-CWrbfQpH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BHrZH3Z4.js";import"./addCustomCSSWithScoping-Dp2j1Uki.js";import"./locked-DGKMmPRk.js";import"./index-CfBCZ46I.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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
