import{j as e,e as s}from"./iframe-BfEtcTHs.js";import{useMDXComponents as f}from"./index-CPCxp1pX.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-BEk0eltt.js";import"./Tag-5zjMhKbj.js";import"./index-Cdy39dSN.js";import{C as u}from"./ControlsWithNote-BTHAdxiA.js";import{D as S}from"./DocsHeader-BBnupIsK.js";import{F as v}from"./CommandsAndQueries-XBwAul-0.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{S as l,b as p,a as m,c}from"./sys-help-BmO1nlGw.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-D09jd141.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DXNiXlp4.js";import"./sys-enter-2-Da7fZjtE.js";import"./alert-sulwnQm9.js";import"./index-BwoaU2AB.js";import"./index-BoD67Q0d.js";import"./Link-Dx6E4Ul6.js";import"./copy-Bt8ie9UZ.js";import"./copy-CuNW8uGj.js";import"./GitHub-Mark-DfOHtkyr.js";import"./TableOfContent-BB2woaWO.js";import"./index-CpslN8bF.js";import"./index-C2AzqXEp.js";import"./index-zG-h4Dtj.js";import"./index-DZog4k2R.js";import"./index-SIE8WAww.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DzVstS1R.js";import"./addCustomCSSWithScoping-BOC9QupD.js";import"./parameters-bundle.css-DHbieIhm.js";import"./Search-oHRxXVFG.js";import"./Option-Bnm7Q230.js";import"./ListItemBaseTemplate-BekWMZBh.js";import"./Select-CHLFQnon.js";import"./InvisibleMessage-c4INzckP.js";import"./slim-arrow-down-C0u-ePLI.js";import"./slim-arrow-down-PFXKhKTH.js";import"./ResponsivePopoverCommon.css-DnHFDVo1.js";import"./ValueStateMessage.css-71Kwz1nQ.js";import"./search-CUJfIA33.js";import"./Input-kpy9MJfL.js";import"./Suggestions.css-CVcapq67.js";import"./SuggestionItem-BFsIrsax.js";import"./i18n-defaults-DGnw9SAb.js";import"./Person-Bk5r7PMP.js";import"./index-BlUB7lqP.js";import"./less-BJgq7N11.js";import"./index-DYqrHXPm.js";import"./ListItemStandard-CRg3tQau.js";import"./ButtonBadge-DhmnNu1a.js";import"./overflow-BnvQLpr0.js";const k=`## Design-Compliant Examples

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
