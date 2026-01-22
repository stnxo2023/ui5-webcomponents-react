import{j as e,e as r}from"./iframe-CuVq63aR.js";import{useMDXComponents as d}from"./index-0t9brk-b.js";import{A as s}from"./ArgTypesWithNote-D5PafWFM.js";import{C as x}from"./ControlsWithNote-Cvy6nlTQ.js";import{D as h}from"./DocsHeader-IL3dZ6XJ.js";import{F as l}from"./CommandsAndQueries-Ca8tTwEu.js";import{M as f,C as i,a as j,D as m}from"./blocks-Cc_3mMVm.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-1-y0x0hP.js";import{M as a}from"./index-ynkWtBQV.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CzEXcp-Y.js";import"./information-DZp5RqnQ.js";import"./sys-enter-2-CNKv6pdA.js";import"./alert-7PGhDeFz.js";import"./Tag-Dg3yp9Ne.js";import"./index-B7_hFjeD.js";import"./index-KhF7LlaL.js";import"./Link-CIBW5Nwu.js";import"./copy-DoywngLP.js";import"./copy-B33m91ys.js";import"./GitHub-Mark-DXrWHUYM.js";import"./TableOfContent-B2bS9DpB.js";import"./index-wXdy4JWU.js";import"./index-BxKmXxxw.js";import"./index-Bncw1rp-.js";import"./index-CTTCfriq.js";import"./index-CNebcKEn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CmxSnjHn.js";import"./addCustomCSSWithScoping-C8i5UOAF.js";import"./locked-DdWgZ4Cq.js";import"./index-DQtcXAKK.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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
