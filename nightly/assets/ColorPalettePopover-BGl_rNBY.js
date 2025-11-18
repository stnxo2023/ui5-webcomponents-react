import{j as o}from"./iframe-DMHzJZ-j.js";import{useMDXComponents as i}from"./index-C6fVjeP1.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-BBNtOPy5.js";import"./Tag-CQITClqv.js";import"./index-C0eFSkjd.js";import{C as x}from"./ControlsWithNote-BUBYP7Bu.js";import{D as u}from"./DocsHeader-7Pk9KcQL.js";import{F as h}from"./CommandsAndQueries-DGQGLEXC.js";import{C as n,D as r}from"./ColorPalettePopover.stories-CmXoX-uj.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-CEZgCmj4.js";import"./preload-helper-PPVm8Dsz.js";import"./information-41_Ak17O.js";import"./sys-enter-2-YeOg860G.js";import"./alert-Dt7k-zHX.js";import"./index-BlloQ94B.js";import"./index-Cr6zAa1Q.js";import"./Link-DH5vJWVF.js";import"./copy-16ICJGmW.js";import"./copy-x3ZdDA2U.js";import"./GitHub-Mark-BgT8t9P2.js";import"./TableOfContent-DmuZLTjo.js";import"./index-DhIsFRFq.js";import"./index-B1RFmErt.js";import"./index-DgEALGZi.js";import"./index-CqxeRCB-.js";import"./index-CEzdIVxS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-bWNLwVQr.js";import"./addCustomCSSWithScoping-Br9NkwKR.js";import"./ResponsivePopoverCommon.css-BZuN8o2Z.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
