import{j as e,A as r}from"./iframe-BXb_n64_.js";import{u as d,M as x,C as s,a as h,D as i}from"./blocks-9VP231tA.js";import{A as p}from"./ArgTypesWithNote-Dvv6L-Gq.js";import{C as l}from"./ControlsWithNote-D6w6Kb-X.js";import{D as f}from"./DocsHeader-BZ77PaiO.js";import{F as j}from"./Footer-DPPwB2I6.js";import"./CommandsAndQueries-BI-RA2OZ.js";import"./PageNotFound-CZrojxwO.js";import{C as t,D as m,W as M,M as u}from"./Menu.stories-D86LxGuP.js";import{M as a}from"./index-CDFkciS9.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BL83g4Fz.js";import"./information-C2n1oeWx.js";import"./sys-enter-2-BNeNMeW8.js";import"./alert-DXZPI1Fp.js";import"./Tag-CRNARXt6.js";import"./index-BNBy1IQK.js";import"./index-BD_xT1Nj.js";import"./Link-BUcKjx9R.js";import"./copy-CsgZl58a.js";import"./copy-BBKTKpbi.js";import"./GitHub-Mark-BVBi5bkL.js";import"./TableOfContent-CJDX4QJ8.js";import"./index-BSoVaSRp.js";import"./index-DqAHmx0d.js";import"./index-D10d9Tlr.js";import"./index-B22x7h0Z.js";import"./index-Ju3FGlVf.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Mi2Syuqb.js";import"./addCustomCSSWithScoping-F8HAuIL-.js";import"./Illustrations-ks8TfsTU.js";import"./i18n-defaults-CFWtSmu6.js";import"./locked-BnTLPWxy.js";import"./index-C11BfVzt.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
`,e.jsx(f,{of:t,since:"0.23.0"}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(l,{of:m}),`
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
`,e.jsx(s,{of:M}),`
`,e.jsx(h,{children:C}),`
`,e.jsx(n.h2,{id:"menuitem",children:"MenuItem"}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(p,{metaOf:t,hideHTMLPropsNote:!0,exclude:r,of:a}),`
`,e.jsx(n.h2,{id:"menuitemgroup",children:"MenuItemGroup"}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(p,{metaOf:t,hideHTMLPropsNote:!0,exclude:r,of:u}),`
`,e.jsx(j,{})]})}function oe(o={}){const{wrapper:n}={...d(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(c,{...o})}):c(o)}export{oe as default};
