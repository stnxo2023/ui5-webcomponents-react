import{j as t,E as m}from"./iframe-B7xuoxGk.js";import{useMDXComponents as a}from"./index-D6aSzRGN.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-DZ0Vo0vM.js";import{A as d}from"./ArgTypesWithNote-CJ6jrHyd.js";import{C as f}from"./ControlsWithNote-B_1zPi3p.js";import{D as M}from"./DocsHeader-BbOLILti.js";import{F as I}from"./Footer--uD18Qhj.js";import"./CommandsAndQueries-DKcdQNlV.js";import"./PageNotFound-DygNwEfd.js";import{C as o,D as r,B as i}from"./Button.stories-BHc0JNIn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BzZxDoNe.js";import"./information-BW_uN0gP.js";import"./sys-enter-2-BoXj1fRr.js";import"./alert-Cl-xvHRs.js";import"./Tag-CtaADOFc.js";import"./index-DmGPBpXp.js";import"./index-BXMXe_Dr.js";import"./Link-YW7Wqeu4.js";import"./copy-RUh9U7xa.js";import"./copy-h55QeB4j.js";import"./GitHub-Mark-BWr1adaM.js";import"./TableOfContent-DJgrMBhW.js";import"./index-B7nFcBs2.js";import"./index-B_T64Hn2.js";import"./index-wxY5XpWW.js";import"./index-D_A15Zs0.js";import"./index-Bimscpqo.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CZFeJY_e.js";import"./addCustomCSSWithScoping-1uVBaclk.js";import"./Illustrations-w0lfALHe.js";import"./i18n-defaults-CFWtSmu6.js";import"./ai-CqNFowLw.js";import"./ai-CIlMf8iN.js";import"./navigation-down-arrow-DcCyevym.js";import"./stop-D56X30i2.js";import"./stop-1quhTgkj.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-BprtGMjT.js";import"./index-C_UW0Udc.js";import"./index-zTvcaBzZ.js";function s(n){const e={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{of:o}),`
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
