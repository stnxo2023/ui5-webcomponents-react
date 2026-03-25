import{j as t,A as m}from"./iframe-DNJyEiMc.js";import{useMDXComponents as a}from"./index-Buf0tSMZ.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-Cd1leuxf.js";import{A as d}from"./ArgTypesWithNote-hTbWEoVz.js";import{C as f}from"./ControlsWithNote-N22c85bk.js";import{D as M}from"./DocsHeader-DCzU-m5M.js";import{F as I}from"./Footer-DsUhWQr2.js";import"./CommandsAndQueries-Buhz4vLI.js";import"./PageNotFound-CGNJPiuA.js";import{C as o,D as r,B as i}from"./Button.stories-Bnr8_-B5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BGa7wgQo.js";import"./information-CKmAqDt9.js";import"./sys-enter-2-D1jYlQdI.js";import"./alert-BbM4Afj3.js";import"./Tag-D8I94QaD.js";import"./index-C8jwJsjc.js";import"./index-CRk1MYZt.js";import"./Link-CHa9FW0P.js";import"./copy-DoBoCPeV.js";import"./copy-DriogBoE.js";import"./GitHub-Mark-B_5l0O_V.js";import"./TableOfContent-Cp2ISJUt.js";import"./index-DbBWaCWe.js";import"./index-DfQ2RFhn.js";import"./index-bWFHrqMY.js";import"./index-DcpLgbSq.js";import"./index-BNiXpovA.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cm_sH4gX.js";import"./addCustomCSSWithScoping-QHxNEQro.js";import"./Illustrations-8c1koKlL.js";import"./i18n-defaults-CFWtSmu6.js";import"./ai-ubbXaFCU.js";import"./ai-N7ehqNT2.js";import"./navigation-down-arrow-DxMMwmKX.js";import"./stop-V3tBpTkn.js";import"./stop-DN5XyfWX.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-BprtGMjT.js";import"./index-CI3tBJ2O.js";import"./index-DYZ31lIi.js";function s(n){const e={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:o}),`
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
