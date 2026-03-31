import{j as e,A as r}from"./iframe-D-ZP0dY4.js";import{u as d,M as x,C as s,a as h,D as i}from"./blocks-DdKopPSC.js";import{A as p}from"./ArgTypesWithNote-Cxf4ymZ0.js";import{C as l}from"./ControlsWithNote-BIyz1_Xt.js";import{D as f}from"./DocsHeader-MhexG2vZ.js";import{F as j}from"./Footer-BLTkp7nE.js";import"./CommandsAndQueries-BDnj74c9.js";import"./PageNotFound-DiPPX7Ze.js";import{C as t,D as m,W as M,M as u}from"./Menu.stories-LNkMMH4C.js";import{M as a}from"./index-qawj8hZu.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C04kZKw9.js";import"./information-BKIP_Ra_.js";import"./sys-enter-2-vX0Cm-qe.js";import"./alert-Bu79oBCI.js";import"./Tag-CNlwwDmZ.js";import"./index-Dx3fp6V7.js";import"./index-BAH7VHrp.js";import"./Link-06g1SNw0.js";import"./copy-DEZgQs9x.js";import"./copy-HW_Kxlr2.js";import"./GitHub-Mark-Cxk1q0bN.js";import"./TableOfContent--BhlVRbW.js";import"./index-Tnz3nQrD.js";import"./index-U3Dsw_H6.js";import"./index-CF2Hkn6J.js";import"./index-BAothMF0.js";import"./index-eZWdMAeg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DxeCNWRQ.js";import"./addCustomCSSWithScoping-DSa3TmU8.js";import"./Illustrations-DQsCRA8v.js";import"./i18n-defaults-CFWtSmu6.js";import"./locked-_rAeJmmV.js";import"./index-B6Vp6cRl.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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
