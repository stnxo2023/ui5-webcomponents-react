import{j as e,E as r}from"./iframe-BFfiCRAQ.js";import{useMDXComponents as d}from"./index-CnIchwG9.js";import{A as s}from"./ArgTypesWithNote-DZwNit9-.js";import{C as x}from"./ControlsWithNote-COkN8HtC.js";import{D as h}from"./DocsHeader-BqSqZAws.js";import{F as l}from"./Footer-3U2rULEI.js";import"./CommandsAndQueries-D2e25SQ4.js";import"./PageNotFound-CAIx-1qq.js";import{M as f,C as i,a as j,D as m}from"./blocks-D8UGMoOU.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-BaynFsyj.js";import{M as a}from"./index-BFwTkpew.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BvMEXi75.js";import"./information-mHfS5cWl.js";import"./sys-enter-2-BfeK50PI.js";import"./alert-DGgnTy1o.js";import"./Tag-D5_wJnae.js";import"./index-BsyXKf0m.js";import"./index-De1oz68R.js";import"./Link-BzXMrnu2.js";import"./copy-BWFRoD18.js";import"./copy-CbWPHS6-.js";import"./GitHub-Mark-1-avKd4a.js";import"./TableOfContent-DfIS3zQ7.js";import"./index-stFY49PR.js";import"./index-C_tePRTa.js";import"./index-Arv69njm.js";import"./index-BEK-Ecqi.js";import"./index-CX51hblh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-RE3-w7CJ.js";import"./addCustomCSSWithScoping-rUi9bOzC.js";import"./Illustrations-DMZSmuvx.js";import"./i18n-defaults-CFWtSmu6.js";import"./locked-CQkcBW__.js";import"./index-Caa1sAGv.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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
