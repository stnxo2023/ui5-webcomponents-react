import{j as o}from"./iframe-Ra0xSmd4.js";import{useMDXComponents as i}from"./index-B1uewCO1.js";import{M as s,C as m}from"./blocks-B8uzJZ3S.js";import"./Tag-vCzc8lpN.js";import"./index-DhDYAwwg.js";import{C as c}from"./ControlsWithNote-B47UM3qO.js";import{D as a}from"./DocsHeader-LE80zS-5.js";import{F as d}from"./Footer-BXZI9V38.js";import"./CommandsAndQueries-BEtDWerI.js";import"./PageNotFound-DAzm2SbT.js";import{C as r,D as t}from"./Popover.stories-DjQKVpT8.js";import"./preload-helper-PPVm8Dsz.js";import"./information-hzJ5lLQH.js";import"./sys-enter-2-weVfOb1a.js";import"./alert-BkoFHfp8.js";import"./index-Dh9i0xFK.js";import"./index-CCqLDoAJ.js";import"./Link-Cw9gqE6M.js";import"./copy-HSMVUc5p.js";import"./copy-Cehqzola.js";import"./GitHub-Mark-nqscAzxB.js";import"./TableOfContent-BgPrQZrb.js";import"./index-BHry3UrI.js";import"./index-CiJZaHkZ.js";import"./index-UbhsERGe.js";import"./index-DxchSxRT.js";import"./index-BhvLG_bo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cr-PyOpa.js";import"./addCustomCSSWithScoping-CcLMh_2y.js";import"./Illustrations-DuEXDQCv.js";import"./i18n-defaults-CFWtSmu6.js";import"./settings-CnhD6x-f.js";import"./index-qcFZyMu_.js";import"./index-DjymOdJY.js";import"./ListItemStandard-CFffdE_7.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...i(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:r}),`
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
