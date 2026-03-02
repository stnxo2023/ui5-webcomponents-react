import{j as e,B as s}from"./iframe-Brff1rmP.js";import{useMDXComponents as f}from"./index-CqBWQ9Zx.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-Cx2b2NzS.js";import"./Tag-CO6ENRz9.js";import"./index-DlA7--5Z.js";import{C as u}from"./ControlsWithNote-Dryrg7rF.js";import{D as S}from"./DocsHeader-BQeKNX3t.js";import{F as v}from"./CommandsAndQueries-Z2F9olV7.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{b as l,S as p,c as m,a as c}from"./sys-help-DKv-s1ij.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-BEgf-wqL.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Cs5lMjWh.js";import"./sys-enter-2-D0GbakMF.js";import"./alert-DvXA8o8i.js";import"./index-C7l_yPP_.js";import"./index-DYmdKmkq.js";import"./Link-CnNfKrga.js";import"./copy-DTNRA_Dg.js";import"./copy-Bv1OuOcO.js";import"./GitHub-Mark-mz3YWYis.js";import"./TableOfContent-B_7Wp9mr.js";import"./index-Cl8f3le-.js";import"./index-GNhj6rYz.js";import"./index-CHjRsrmQ.js";import"./index-BM_H4FxE.js";import"./index-SsKZpktE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-hZd9oRLF.js";import"./addCustomCSSWithScoping-DWThNXxY.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./Search-CSFRbAgJ.js";import"./Option-CrDw5azF.js";import"./ListItemBaseTemplate-BPRyBwPx.js";import"./Select-Chae-TJe.js";import"./InvisibleMessage-ByZ2WPzN.js";import"./slim-arrow-down-C94xZ_93.js";import"./slim-arrow-down-DHZaQUOz.js";import"./ResponsivePopoverCommon.css-CCXZCmBy.js";import"./ValueStateMessage.css-DyEd-7MM.js";import"./search-DajjXOC4.js";import"./Input-Dd38fmul.js";import"./Suggestions.css-A8d5VcXf.js";import"./SuggestionItem-CFU47XHi.js";import"./i18n-defaults-Ca0KLLzw.js";import"./Person-Bk5r7PMP.js";import"./index-NLOcJtOO.js";import"./less-Cjh9x-Bl.js";import"./index-DwAvAuLn.js";import"./ListItemStandard-CFw-rkJd.js";import"./ButtonBadge-CxavwfVZ.js";import"./overflow-BaLHxEus.js";const k=`## Design-Compliant Examples

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
