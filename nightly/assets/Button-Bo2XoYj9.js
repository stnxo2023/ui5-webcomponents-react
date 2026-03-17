import{j as t,E as m}from"./iframe-CGE6jX6t.js";import{useMDXComponents as a}from"./index-CnlF4PpM.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-C1wugZAv.js";import{A as d}from"./ArgTypesWithNote-5N8T1KBX.js";import{C as f}from"./ControlsWithNote-Co8nCt7_.js";import{D as M}from"./DocsHeader-BDBaIGAV.js";import{F as I}from"./Footer-BebX2FrJ.js";import"./CommandsAndQueries-D_JGI6Ia.js";import"./PageNotFound-gkdNug7A.js";import{C as o,D as r,B as i}from"./Button.stories-D5XbQf0p.js";import"./preload-helper-PPVm8Dsz.js";import"./index-O5K3XRBn.js";import"./information-DjCg2NR8.js";import"./sys-enter-2-WI9s45tq.js";import"./alert-DkCV9tpB.js";import"./Tag-BT7c2k9t.js";import"./index-Bx2-sARl.js";import"./index-CMs90z2F.js";import"./Link-B734PLKt.js";import"./copy-DjOlJehV.js";import"./copy-ByAfyVz0.js";import"./GitHub-Mark-jrKWl5Ep.js";import"./TableOfContent-D00F15mF.js";import"./index-bjWm1Qbv.js";import"./index-D4AJb6hG.js";import"./index-D1hVPzQS.js";import"./index-WD-xjM3p.js";import"./index-DuWDlj0H.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-jWRCnrak.js";import"./addCustomCSSWithScoping-Bg1A5NWS.js";import"./Illustrations-DcoINpXf.js";import"./i18n-defaults-CFWtSmu6.js";import"./ai-BLXZvmkM.js";import"./ai-BqWqKfi7.js";import"./navigation-down-arrow-EEiViiJ7.js";import"./stop-DXek0sZs.js";import"./stop-CnNcEhTH.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-BprtGMjT.js";import"./index-Dkpjg5GM.js";import"./index-BC7prT_m.js";function s(n){const e={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:o}),`
`,t.jsx(M,{of:o,experimental:!0}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"example",children:"Example"}),`
`,t.jsx(c,{of:r}),`
`,t.jsxs("details",{children:[t.jsx("summary",{children:"Show static code"}),t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`function AIButton(props) {
  const generationIdRef = useRef<NodeJS.Timeout | null>(null);
  const buttonRef = useRef<ButtonDomRef>(null);
  const [buttonState, setButtonState] = useState("generate");
  const [menuOpen, setMenuOpen] = useState(false);

  const startGeneration = () => {
    generationIdRef.current = setTimeout(() => {
      setButtonState("revise");
    }, 3000);
  };

  const handleClick: ButtonPropTypes["onClick"] = (e) => {
    const btn = e.target;

    setMenuOpen(false);
    switch (btn.state) {
      case "generate":
        setButtonState("generating");
        startGeneration();
        break;
      case "generating":
        if (generationIdRef.current) {
          clearTimeout(generationIdRef.current);
          generationIdRef.current = null;
        }
        setButtonState("generate");
        break;
      case "revise":
        setMenuOpen(true);
        break;
    }
  };

  const handleMenuItemClick: MenuPropTypes["onItemClick"] = (e) => {
    if (e.detail.text === "Regenerate") {
      setButtonState("generating");
      startGeneration();
    }
  };

  return (
    <>
      <Button
        {...props}
        onClick={handleClick}
        state={buttonState}
        ref={buttonRef}
      >
        <ButtonState name="generate" text="Generate" icon={aiIcon} />
        <ButtonState name="generating" text="Stop Generating" icon={stopIcon} />
        <ButtonState
          name="revise"
          text="Revise"
          icon={aiIcon}
          endIcon={navDownIcon}
        />
      </Button>
      {menuOpen && (
        <Menu
          opener={buttonRef.current}
          open
          onItemClick={handleMenuItemClick}
          onClose={() => {
            setMenuOpen(false);
          }}
        >
          <MenuItem text="Regenerate" />
          <MenuSeparator />
          <MenuItem text="Fix Spelling & Grammar" />
          <MenuItem text="Change Tone">
            <MenuItem text="Option 1" />
            <MenuItem text="Option 2" />
            <MenuItem text="Option 3" />
          </MenuItem>
          <MenuItem text="Adjust Length">
            <MenuItem text="Shorten text" />
            <MenuItem text="Lengthen text" />
          </MenuItem>
          <MenuItem text="Bulleted List" />
          <MenuItem text="Translate">
            <MenuItem text="English" />
            <MenuItem text="German" />
            <MenuItem text="Spanish" />
          </MenuItem>
        </Menu>
      )}
    </>
  );
}
`})})]}),`
`,t.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(f,{of:r}),`
`,t.jsx(l,{children:u}),`
`,t.jsx(e.h2,{id:"buttonstate",children:"ButtonState"}),`
`,t.jsx(x,{of:i}),`
`,t.jsx(d,{metaOf:o,of:i,hideHTMLPropsNote:!0,exclude:m}),`
`,t.jsx(I,{}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{})})]})}function at(n={}){const{wrapper:e}={...a(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(s,{...n})}):s(n)}export{at as default};
