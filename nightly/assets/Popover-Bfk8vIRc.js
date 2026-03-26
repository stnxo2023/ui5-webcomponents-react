import{j as o}from"./iframe-CTCL6F1r.js";import{useMDXComponents as i}from"./index-COtiMl_W.js";import{M as s,C as m}from"./blocks-BWrgTR_X.js";import"./Tag-BL5Qfzs7.js";import"./index-DN-3xlKC.js";import{C as c}from"./ControlsWithNote-BbSbV3TH.js";import{D as a}from"./DocsHeader-DnQu7owR.js";import{F as d}from"./Footer-DeTYP8-R.js";import"./CommandsAndQueries-BsPL36Z9.js";import"./PageNotFound-D_xGTPNz.js";import{C as r,D as t}from"./Popover.stories-Dn0jJ1x5.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CiEkIJMA.js";import"./sys-enter-2-Cm5ZOXv2.js";import"./alert-CwDd6vfH.js";import"./index-9E9I64Wt.js";import"./index-BzwM6I24.js";import"./Link-A2IdBIvD.js";import"./copy-DGL6Pu-r.js";import"./copy-DEpsQlxb.js";import"./GitHub-Mark-yKvhTSPN.js";import"./TableOfContent-C2y7XBBL.js";import"./index-D_vdDgjG.js";import"./index-DWmGRAcl.js";import"./index-CeDd6fzK.js";import"./index-Dj3jefRS.js";import"./index-ByW0PFuk.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bj5cLhE3.js";import"./addCustomCSSWithScoping-Bp0u_2pD.js";import"./Illustrations-GQ99oYm_.js";import"./i18n-defaults-CFWtSmu6.js";import"./settings-BGGRR6oU.js";import"./index-B0bfBcoV.js";import"./index-zpAMMNek.js";import"./ListItemStandard-DzDcm21T.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:r}),`
`,o.jsx(a,{of:r,since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(n.h2,{id:"example",children:"Example"}),`
`,o.jsx(m,{of:t}),`
`,o.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(c,{of:t}),`
`,o.jsx(n.h2,{id:"opening-popovers",children:"Opening Popovers"}),`
`,o.jsxs(n.p,{children:["You can open and close the ",o.jsx(n.code,{children:"Popover"})," component in a declarative way using the ",o.jsx(n.code,{children:"open"})," and ",o.jsx(n.code,{children:"opener"})," prop."]}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-jsx",children:`const MyComponentWithPopover = () => {
  const btnRef = useRef(null);
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);
  return (
    <>
      <Button
        ref={btnRef}
        onClick={() => {
          setPopoverIsOpen(true);
        }}
      >
        Open Popover
      </Button>
      <Popover
        opener={btnRef.current}
        open={popoverIsOpen}
        onClose={() => {
          setPopoverIsOpen(false);
        }}
      />
    </>
  );
};
`})}),`
`,o.jsx(d,{})]})}function Q(e={}){const{wrapper:n}={...i(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(p,{...e})}):p(e)}export{Q as default};
