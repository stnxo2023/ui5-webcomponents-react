import{j as e,A as r}from"./iframe-DNJyEiMc.js";import{useMDXComponents as d}from"./index-Buf0tSMZ.js";import{A as s}from"./ArgTypesWithNote-hTbWEoVz.js";import{C as x}from"./ControlsWithNote-N22c85bk.js";import{D as h}from"./DocsHeader-DCzU-m5M.js";import{F as l}from"./Footer-DsUhWQr2.js";import"./CommandsAndQueries-Buhz4vLI.js";import"./PageNotFound-CGNJPiuA.js";import{M as f,C as i,a as j,D as m}from"./blocks-Cd1leuxf.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-DJzGmk-M.js";import{M as a}from"./index-DYZ31lIi.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BGa7wgQo.js";import"./information-CKmAqDt9.js";import"./sys-enter-2-D1jYlQdI.js";import"./alert-BbM4Afj3.js";import"./Tag-D8I94QaD.js";import"./index-C8jwJsjc.js";import"./index-CRk1MYZt.js";import"./Link-CHa9FW0P.js";import"./copy-DoBoCPeV.js";import"./copy-DriogBoE.js";import"./GitHub-Mark-B_5l0O_V.js";import"./TableOfContent-Cp2ISJUt.js";import"./index-DbBWaCWe.js";import"./index-DfQ2RFhn.js";import"./index-bWFHrqMY.js";import"./index-DcpLgbSq.js";import"./index-BNiXpovA.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cm_sH4gX.js";import"./addCustomCSSWithScoping-QHxNEQro.js";import"./Illustrations-8c1koKlL.js";import"./i18n-defaults-CFWtSmu6.js";import"./locked-CKWEH5cO.js";import"./index-CI3tBJ2O.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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
`,e.jsx(l,{})]})}function te(o={}){const{wrapper:n}={...d(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(c,{...o})}):c(o)}export{te as default};
