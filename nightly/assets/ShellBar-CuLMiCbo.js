import{j as e,e as s}from"./iframe-D1jKIypo.js";import{useMDXComponents as f}from"./index-M1_DZHmj.js";import{M as j,C as r,a,D as t,A as i}from"./blocks-BvvvBGFc.js";import"./Tag-BqsbpO_s.js";import"./index-ClSanEKt.js";import{C as u}from"./ControlsWithNote-Dvk3pXiG.js";import{D as S}from"./DocsHeader-DW4HLfqf.js";import{F as v}from"./CommandsAndQueries-BkaxH0BE.js";import{S as B}from"./SubcomponentsSection-BVy4lpQe.js";import{S as l,b as p,a as m,c}from"./sys-help-BeQ3jEq6.js";import{C as d,D as h,A as g,E as b,T as P,P as C,N as y,S as M}from"./ShellBar.stories-BrbweTdJ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B8vikb0m.js";import"./sys-enter-2-DByg53Ih.js";import"./alert-D9Mn7721.js";import"./index-C56hzs5D.js";import"./index-DHEWI2kL.js";import"./Link-BTNp59uu.js";import"./copy-CBApsEQO.js";import"./copy-DgqWK_AB.js";import"./GitHub-Mark-CbjORjsC.js";import"./TableOfContent-DgOocbRO.js";import"./index-BBeTD3z6.js";import"./index-T4x6aH8D.js";import"./index-C7kBl8gS.js";import"./index-BKZiIOM7.js";import"./index-D6PVc_6_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DRCEREPf.js";import"./addCustomCSSWithScoping-BmLQ2iz1.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./Search-CTV0ziwK.js";import"./Option-C3-dRc9X.js";import"./ListItemBaseTemplate-Cb9CjRMA.js";import"./Select-DLU6kJay.js";import"./InvisibleMessage-DNz0AAuG.js";import"./slim-arrow-down-CPVmWMXv.js";import"./slim-arrow-down-GqbbmAYy.js";import"./ResponsivePopoverCommon.css-DN-Rc-d6.js";import"./ValueStateMessage.css-CbVwogXq.js";import"./search-CmB-gAs0.js";import"./Input-D4NDzfB_.js";import"./Suggestions.css-BT6tIfnI.js";import"./SuggestionItem-DisQaTGu.js";import"./i18n-defaults-DGnw9SAb.js";import"./Person-Bk5r7PMP.js";import"./index-XD1hamhe.js";import"./less-uxHdLqH7.js";import"./index-DqwUh5Qy.js";import"./ListItemStandard-DQRvO6kb.js";import"./ButtonBadge-DYy-X1b5.js";import"./overflow-BRS2QrqR.js";const k=`## Design-Compliant Examples

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
