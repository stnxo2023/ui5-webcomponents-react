import{j as e,e as s}from"./iframe-D7LtZGbE.js";import{useMDXComponents as f}from"./index-DPe-hK9n.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-pr2PodND.js";import"./Tag-CAGvJLHq.js";import"./index-8IYrQOsB.js";import{C as u}from"./ControlsWithNote-BGB5-nBh.js";import{D as S}from"./DocsHeader-SfH7r9rU.js";import{F as v}from"./CommandsAndQueries-16gk4cWC.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{S as l,b as p,a as m,c}from"./sys-help-CgJEJAMh.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-CPLQTOzH.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DGR9jLKW.js";import"./sys-enter-2-pukk9ibo.js";import"./alert-ltuZ9R-x.js";import"./index-nlmJusRV.js";import"./index-DCDoujQt.js";import"./Link-DR-Yc_uT.js";import"./copy-uVLIBiwm.js";import"./copy-irE93QLw.js";import"./GitHub-Mark-q0BPK-l1.js";import"./TableOfContent-BQqicCGe.js";import"./index-CTJj7zal.js";import"./index-CQrPSC4r.js";import"./index-D9f7QWgZ.js";import"./index-7y0cv8s8.js";import"./index-B5kVVFk8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D0rw92sk.js";import"./addCustomCSSWithScoping-Q6oWMzUs.js";import"./parameters-bundle.css-DHbieIhm.js";import"./Search-DG8rQaga.js";import"./Option-DijjA4Vk.js";import"./ListItemBaseTemplate-DPI4cuqZ.js";import"./Select-BbkKcK4f.js";import"./InvisibleMessage-Cv3DnnE8.js";import"./slim-arrow-down-CRqqmTAd.js";import"./slim-arrow-down-CSg5EB5A.js";import"./ResponsivePopoverCommon.css-BuYzr302.js";import"./ValueStateMessage.css-B17FpIm5.js";import"./search-DYQneyy-.js";import"./Input-smzufGTw.js";import"./Suggestions.css-D7t7e06T.js";import"./SuggestionItem-Ccdg184n.js";import"./i18n-defaults-DGnw9SAb.js";import"./Person-Bk5r7PMP.js";import"./index-CdvQl7dB.js";import"./less-DCpc4-xW.js";import"./index-DD5uFoVD.js";import"./ListItemStandard-DJhw0qF_.js";import"./ButtonBadge-DF9ZsK6t.js";import"./overflow-JRtY1LFK.js";const k=`## Design-Compliant Examples

These examples demonstrate the implementation of design specifications. They primarily illustrate design concepts and mostly do not provide additional functionality. You can reference them to select the appropriate design patterns.
`;function x(o){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...f(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:d}),`
`,e.jsx(S,{of:d,since:"0.4.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(u,{of:h}),`
`,e.jsx(a,{children:k}),`
`,e.jsx(n.h3,{id:"all-features",children:"All Features"}),`
`,e.jsx(n.p,{children:"A comprehensive ShellBar demonstrating all available features including notifications, search, content items, and profile."}),`
`,e.jsx(r,{of:g}),`
`,e.jsx(n.h3,{id:"embedded-back-navigation",children:"Embedded Back Navigation"}),`
`,e.jsx(n.p,{children:"ShellBar with embedded back navigation button in the start area."}),`
`,e.jsx(r,{of:b}),`
`,e.jsx(n.h3,{id:"trial-example",children:"Trial Example"}),`
`,e.jsx(n.p,{children:"ShellBar configured for trial environments with trial tags and remaining days indicator."}),`
`,e.jsx(r,{of:P}),`
`,e.jsx(n.h3,{id:"multiple-productive-instances",children:"Multiple Productive Instances"}),`
`,e.jsx(n.p,{children:"ShellBar setup for multiple productive system instances with region indicators."}),`
`,e.jsx(r,{of:C}),`
`,e.jsx(n.h3,{id:"multiple-non-productive-instances",children:"Multiple Non-Productive Instances"}),`
`,e.jsx(n.p,{children:"ShellBar setup for multiple non-productive system instances with system and region tags."}),`
`,e.jsx(r,{of:y}),`
`,e.jsx(n.h2,{id:"more-examples",children:"More examples"}),`
`,e.jsx(n.h3,{id:"open-a-popover-on-shellbaritem-click",children:"Open a Popover on ShellBarItem click"}),`
`,e.jsxs(n.p,{children:["To open a popover with the ",e.jsx(n.code,{children:"ShellBarItem"})," you can use the ",e.jsx(n.code,{children:"detail.targetRef"})," property of the ",e.jsx(n.code,{children:"onClick"})," event."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const ShellBarComponent = () => {
  const popoverRef = useRef<PopoverDomRef>(null);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const handleShellBarItemClick: ShellBarItemPropTypes['onClick'] = (e) => {
    popoverRef.current!.opener = e.detail.targetRef;
    setPopoverOpen(true);
  };
  return (
    <>
      <ShellBar>
        <ShellBarItem onClick={handleShellBarItemClick} icon="add" text="add" />
      </ShellBar>
      <Popover
        ref={popoverRef}
        open={popoverOpen}
        onClose={() => {
          setPopoverOpen(false);
        }}
      >
        Hello there!
      </Popover>
    </>
  );
};
`})}),`
`,e.jsx(n.h3,{id:"shellbar-with-shellbarbranding-slot",children:"ShellBar with ShellBarBranding slot"}),`
`,e.jsx(r,{of:M}),`
`,e.jsx(a,{children:B}),`
`,e.jsx(n.h2,{id:"shellbaritem",children:"ShellBarItem"}),`
`,e.jsx(t,{of:l}),`
`,e.jsx(i,{hideHTMLPropsNote:!0,exclude:s,of:l}),`
`,e.jsx(n.h2,{id:"shellbarspacer",children:"ShellBarSpacer"}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(i,{hideHTMLPropsNote:!0,exclude:s,of:p}),`
`,e.jsx(n.h2,{id:"shellbarsearch-experimental",children:"ShellBarSearch (experimental)"}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(i,{hideHTMLPropsNote:!0,of:m}),`
`,e.jsx(n.h2,{id:"shellbarbranding-experimental",children:"ShellBarBranding (experimental)"}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(i,{hideHTMLPropsNote:!0,of:c}),`
`,e.jsx(v,{})]})}function Me(o={}){const{wrapper:n}={...f(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(x,{...o})}):x(o)}export{Me as default};
