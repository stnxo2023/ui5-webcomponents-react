import{j as e,e as r}from"./iframe-CtwEriWb.js";import{useMDXComponents as d}from"./index-D-9u9m_4.js";import{A as s}from"./ArgTypesWithNote-CV4vqpni.js";import{C as x}from"./ControlsWithNote-v4H3iXhU.js";import{D as h}from"./DocsHeader-B6ug-OW2.js";import{F as l}from"./CommandsAndQueries-CD3VJPSk.js";import{M as f,C as i,a as j,D as m}from"./blocks-BFYACaFi.js";import{C as t,D as p,W as M,M as u}from"./Menu.stories-f9Kr68K4.js";import{M as a}from"./index-ul6o5n3G.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DaHRprUe.js";import"./information-D5ukCsPX.js";import"./sys-enter-2-BPp72tdn.js";import"./alert-CQAVluiD.js";import"./Tag-Dp8ZKpct.js";import"./index-CeAyP2ez.js";import"./index-DDmWoC0P.js";import"./Link-D_PuN-3O.js";import"./copy-DAqDk282.js";import"./copy-DmD13pno.js";import"./GitHub-Mark-DLxtwLyp.js";import"./TableOfContent-Bk-RGPLp.js";import"./index-C5ngcH8h.js";import"./index-Bt4v4M6X.js";import"./index-zgbQGCMD.js";import"./index-C3uSNLH8.js";import"./index-wzivwl9m.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Lem94xA1.js";import"./addCustomCSSWithScoping-BBQMnugZ.js";import"./locked-Dbe2yyae.js";import"./index-93Kp23zO.js";function c(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
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
