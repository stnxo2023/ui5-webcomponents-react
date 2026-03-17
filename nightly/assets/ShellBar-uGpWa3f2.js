import{j as e,E as s}from"./iframe-CGE6jX6t.js";import{useMDXComponents as f}from"./index-CnlF4PpM.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-C1wugZAv.js";import"./Tag-BT7c2k9t.js";import"./index-O5K3XRBn.js";import{C as u}from"./ControlsWithNote-Co8nCt7_.js";import{D as S}from"./DocsHeader-BDBaIGAV.js";import{F as v}from"./Footer-BebX2FrJ.js";import"./CommandsAndQueries-D_JGI6Ia.js";import"./PageNotFound-gkdNug7A.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{b as l,S as p,c as m,a as c}from"./sys-help-C8I5z6VV.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-CehYs4VY.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DjCg2NR8.js";import"./sys-enter-2-WI9s45tq.js";import"./alert-DkCV9tpB.js";import"./index-Bx2-sARl.js";import"./index-CMs90z2F.js";import"./Link-B734PLKt.js";import"./copy-DjOlJehV.js";import"./copy-ByAfyVz0.js";import"./GitHub-Mark-jrKWl5Ep.js";import"./TableOfContent-D00F15mF.js";import"./index-bjWm1Qbv.js";import"./index-D4AJb6hG.js";import"./index-D1hVPzQS.js";import"./index-WD-xjM3p.js";import"./index-DuWDlj0H.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-jWRCnrak.js";import"./addCustomCSSWithScoping-Bg1A5NWS.js";import"./Illustrations-DcoINpXf.js";import"./i18n-defaults-CFWtSmu6.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BuIRw4Zl.js";import"./query-CzSBusdE.js";import"./ButtonBadge-FRotP6jv.js";import"./ListItemStandard-Dve_L83D.js";import"./search-DeGx0WYm.js";import"./overflow-BIZ5ExnC.js";import"./Search-D42dvTmK.js";import"./Option-dcd03uYH.js";import"./ListItemBaseTemplate-Dx7gl5aW.js";import"./Select-BMfjDvRC.js";import"./InvisibleMessage-DG05ioDr.js";import"./ResponsivePopoverCommon.css-BdAey9nW.js";import"./ValueStateMessage.css-CXantPrh.js";import"./Input-WMBW16LC.js";import"./Suggestions.css-C3jx0r5H.js";import"./SuggestionItem-DkZnmDv0.js";import"./Person-Bk5r7PMP.js";import"./index-B-5DXRiN.js";import"./less-oZYALZR_.js";const k=`## Design-Compliant Examples

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
`,e.jsx(v,{})]})}function De(o={}){const{wrapper:n}={...f(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(x,{...o})}):x(o)}export{De as default};
