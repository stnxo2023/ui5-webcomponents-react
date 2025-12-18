import{j as o}from"./iframe-DE5WqRSI.js";import{useMDXComponents as s}from"./index-DVGykmsi.js";import{M as i,C as m}from"./blocks-CybNjylu.js";import"./Tag-DXduP7K6.js";import"./index-BqsIcBTd.js";import{C as c}from"./ControlsWithNote-CAP3lJcn.js";import{D as a}from"./DocsHeader-B-orjW0t.js";import{F as d}from"./CommandsAndQueries-CT_qy-L6.js";import{C as r,D as t}from"./Popover.stories-Er2Osa4T.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CfYTqUOR.js";import"./sys-enter-2-Dqu1QcV8.js";import"./alert-Dotce8LG.js";import"./index-C1194UdL.js";import"./index-CxE79HQo.js";import"./Link-BcyJtysS.js";import"./copy-DMf344AF.js";import"./copy-CmTK1gpG.js";import"./GitHub-Mark-CPwTb6Pz.js";import"./TableOfContent-CFRSt6hc.js";import"./index-C3HZg113.js";import"./index-Bo0MdSU9.js";import"./index-EXtiqGa7.js";import"./index-DF_fIzZz.js";import"./index-BoscFH1P.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CURCJNNc.js";import"./addCustomCSSWithScoping-CHzs5Kt8.js";import"./settings-CZU_ZJ1W.js";import"./index-DcmdwFOG.js";import"./index-kbflT9HY.js";import"./ListItemStandard-CFNpTG6Z.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
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
`,o.jsx(d,{})]})}function A(e={}){const{wrapper:n}={...s(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(p,{...e})}):p(e)}export{A as default};
