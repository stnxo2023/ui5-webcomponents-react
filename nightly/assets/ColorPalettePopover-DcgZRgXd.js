import{j as o}from"./iframe-BsSawXP0.js";import{useMDXComponents as i}from"./index-DRH2teYu.js";import{M as m,C as a,a as l,D as c,A as d}from"./blocks-CXfuXrzt.js";import"./Tag-CNlUSOaG.js";import"./index-Dmc2-Gsy.js";import{C as x}from"./ControlsWithNote-DQTiYyBM.js";import{D as u}from"./DocsHeader-FBj4PZhc.js";import{F as h}from"./CommandsAndQueries-iaa-8XF0.js";import{C as n,D as r}from"./ColorPalettePopover.stories-CixXS_6w.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-BjPwuqnG.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BFVQ2hiO.js";import"./sys-enter-2-BXLoixfD.js";import"./alert-KY-hq2Su.js";import"./index-BP2Csnbb.js";import"./index-Crhu2fjF.js";import"./Link-DnipqSX8.js";import"./copy-qa9YjcU8.js";import"./copy-DbiVl2cO.js";import"./GitHub-Mark-Bz_74SOX.js";import"./TableOfContent-Hx7KrrNg.js";import"./index-DXS7E1yl.js";import"./index-BhcqlC9n.js";import"./index-ZJs7Cg1o.js";import"./index-ButdZwwN.js";import"./index-CaYKw0vF.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Czipwrtn.js";import"./addCustomCSSWithScoping-BEgtXhqx.js";import"./ResponsivePopoverCommon.css-BuCRiGSq.js";import"./query-CzSBusdE.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:n}),`
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
