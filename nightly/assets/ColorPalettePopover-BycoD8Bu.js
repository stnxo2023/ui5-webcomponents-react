import{j as o}from"./iframe-Cu2r5DBt.js";import{useMDXComponents as i}from"./index-DsEnC-S2.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-DrEEcrJV.js";import"./Tag-BfeG-i6G.js";import"./index-DcYlZ6P4.js";import{C as x}from"./ControlsWithNote-DlpqvBve.js";import{D as u}from"./DocsHeader-guwo1FDt.js";import{F as h}from"./CommandsAndQueries-DfbTmmri.js";import{C as n,D as r}from"./ColorPalettePopover.stories-BpwXNJa8.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-SmX4BGxd.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Bxm8KRwL.js";import"./sys-enter-2-f8dz7x8Q.js";import"./alert-848W8p-Q.js";import"./index-DacMIu3h.js";import"./index-Os4Zeg9n.js";import"./Link-DyRt210A.js";import"./copy-CzZNgj09.js";import"./copy-D0JAZV9l.js";import"./GitHub-Mark-LdOWkat8.js";import"./TableOfContent-RWlZdsI9.js";import"./index-BCrFY3fH.js";import"./index-BlqIDgbk.js";import"./index-DiFMEeWS.js";import"./index-CMEHSo2E.js";import"./index-COwVlcqf.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CO5icxsl.js";import"./addCustomCSSWithScoping-81SqKEKs.js";import"./ResponsivePopoverCommon.css-D6DQUrFO.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
`,o.jsx(u,{of:n,since:"0.20.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(e.h2,{id:"example",children:"Example"}),`
`,o.jsx(a,{of:r}),`
`,o.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(x,{of:r}),`
`,o.jsx(e.h2,{id:"opening-colorpalettepopovers",children:"Opening ColorPalettePopovers"}),`
`,o.jsxs(e.p,{children:["You can open and close the ",o.jsx(e.code,{children:"ColorPalettePopover"})," component in a declarative way using the ",o.jsx(e.code,{children:"open"})," and ",o.jsx(e.code,{children:"opener"})," prop."]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`const ColorPalettePopoverComponent = () => {
  const [showPopover, setShowPopover] = useState(false);
  const buttonRef = useRef(null);
  const onButtonClick = (e) => {
    setShowPopover((prev) => !prev);
  };
  return (
    <>
      <Button ref={buttonRef} onClick={onButtonClick}>
        Open ColorPalettePopover
      </Button>
      <ColorPalettePopover open={showPopover} opener={buttonRef.current}>
        <ColorPaletteItem value="pink" />
        <ColorPaletteItem value="darkblue" />
      </ColorPalettePopover>
    </>
  );
};
`})}),`
`,o.jsx(l,{children:f}),`
`,o.jsx(e.h2,{id:"colorpaletteitem",children:"ColorPaletteItem"}),`
`,o.jsx(c,{of:p}),`
`,o.jsx(d,{of:p}),`
`,o.jsx(h,{})]})}function Q(t={}){const{wrapper:e}={...i(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(s,{...t})}):s(t)}export{Q as default};
