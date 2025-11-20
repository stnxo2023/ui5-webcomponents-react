import{j as e,e as r}from"./iframe-CJIrZBlB.js";import{useMDXComponents as d}from"./index-xKVU5ZCd.js";import{A as s}from"./ArgTypesWithNote-DH6P01sb.js";import{C as x}from"./ControlsWithNote-DgEi_PLk.js";import{D as h}from"./DocsHeader-BV5sl85-.js";import{F as l}from"./CommandsAndQueries-C3g74-RT.js";import{M as f,C as i,a as j,D as m}from"./blocks-C-1O0LRm.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-TG6lJ59d.js";import{M as a}from"./index-CrPsJfJo.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DmJ7zXRW.js";import"./information-BaxJEMV7.js";import"./sys-enter-2-COh9WNy8.js";import"./alert-BkaLAKBd.js";import"./Tag-BNlwFAFY.js";import"./index-EdNUKN4_.js";import"./index-CEkWgGTS.js";import"./Link-BElCP5h1.js";import"./copy-Do5bG9wn.js";import"./copy-DR5Kv1Iv.js";import"./GitHub-Mark-CILm86EZ.js";import"./TableOfContent-Cp1YxGMV.js";import"./index-BGOwz-CM.js";import"./index-YnpVhHMg.js";import"./index-BhZheF80.js";import"./index-DmwyQtvi.js";import"./index-BCwOIMZp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bf32rwnZ.js";import"./addCustomCSSWithScoping-CPo-hqqQ.js";import"./locked-CQWUl4sn.js";import"./index-qbYXEn3_.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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
