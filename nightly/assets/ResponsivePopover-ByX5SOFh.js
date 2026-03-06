import{j as o}from"./iframe-1PJgHZTG.js";import{useMDXComponents as s}from"./index-DQ8p-OUL.js";import{M as i,C as m}from"./blocks-BWdY__MG.js";import"./Tag-B40KCJnD.js";import"./index-C8yXoAsR.js";import{C as c}from"./ControlsWithNote-CsLsgmT1.js";import{D as a}from"./DocsHeader-DnpvZl4X.js";import{F as d}from"./Footer-Dn-umaI8.js";import"./CommandsAndQueries-CQXQgoMe.js";import"./PageNotFound-BDu5VFGA.js";import{C as r,D as t}from"./ResponsivePopover.stories-C6amZLmK.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DJc7dR8E.js";import"./sys-enter-2-C9tJiXDL.js";import"./alert-DYBuSdd9.js";import"./index-ppU6pF9w.js";import"./index-BhuvwaVu.js";import"./Link-7AxyQCs2.js";import"./copy-BGWb1lfv.js";import"./copy-DV2HGm9x.js";import"./GitHub-Mark-DnHXiXr5.js";import"./TableOfContent-BXrMFYBh.js";import"./index-BIAg1r_N.js";import"./index-BpyshfBP.js";import"./index-BQUqcZEd.js";import"./index-i1xIbWKA.js";import"./index-D-m_lTJG.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DnF5TvKk.js";import"./addCustomCSSWithScoping-NZMltsez.js";import"./Illustrations-BZEV-hfk.js";import"./i18n-defaults-CFWtSmu6.js";import"./index-B_CQz5B0.js";import"./index-lR-STrLr.js";import"./ListItemStandard-DwJ4wR2U.js";import"./settings-Bs8Htp6v.js";function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(i,{of:r}),`
`,o.jsx(a,{of:r,since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(n.h2,{id:"example",children:"Example"}),`
`,o.jsx(m,{of:t}),`
`,o.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(c,{of:t}),`
`,o.jsx(n.h2,{id:"opening-responsivepopovers",children:"Opening ResponsivePopovers"}),`
`,o.jsxs(n.p,{children:["You can open and close the ",o.jsx(n.code,{children:"ResponsivePopover"})," component in a declarative way using the ",o.jsx(n.code,{children:"open"})," and ",o.jsx(n.code,{children:"opener"})," prop."]}),`
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
      <ResponsivePopover
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
`,o.jsx(d,{})]})}function Q(e={}){const{wrapper:n}={...s(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(p,{...e})}):p(e)}export{Q as default};
