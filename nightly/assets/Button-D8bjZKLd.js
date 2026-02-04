import{j as e,B as m}from"./iframe-C8JI7dEI.js";import{useMDXComponents as a}from"./index-Dy3dbavl.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-dOc4ZvhQ.js";import{A as d}from"./ArgTypesWithNote-6Nmk20bP.js";import{C as f}from"./ControlsWithNote-Dj8GdX7q.js";import{D as M}from"./DocsHeader-DALRmzTd.js";import{F as I}from"./CommandsAndQueries-CAJp8baB.js";import{C as o,D as r,B as i}from"./Button.stories-B_BRXxG7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BEdzbacm.js";import"./information-DGVxJHTG.js";import"./sys-enter-2-iEzb33ry.js";import"./alert-BG5FVPBd.js";import"./Tag-Bh9-KKtm.js";import"./index-g7zsKBLX.js";import"./index-B3nw03BL.js";import"./Link-g_43hnwI.js";import"./copy-B8OvER0-.js";import"./copy-vzDhs336.js";import"./GitHub-Mark-DvqpePQ6.js";import"./TableOfContent-CM5UCwdk.js";import"./index-Bk0DUMEL.js";import"./index-BeiYD_4I.js";import"./index-x3EANzLS.js";import"./index-DM_OMODM.js";import"./index-BQN-IPa2.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DOnTZlr2.js";import"./addCustomCSSWithScoping-CSnh5KZm.js";import"./ai-CvOHAXdO.js";import"./ai-Dt64N6uK.js";import"./navigation-down-arrow-B0wv2RPc.js";import"./stop-C5N5ZPIy.js";import"./stop-DsiDYJn4.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-j-IoYmGi.js";import"./SplitButton-CYU_N_FO.js";import"./slim-arrow-down-D-3Ia4oG.js";import"./slim-arrow-down-BHxd8Vqs.js";import"./index-5B85T45s.js";import"./index-DbBDab7I.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
`,e.jsx(M,{of:o,experimental:!0}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(c,{of:r}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Show static code"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`function AIButton(props) {
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
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(f,{of:r}),`
`,e.jsx(l,{children:u}),`
`,e.jsx(t.h2,{id:"buttonstate",children:"ButtonState"}),`
`,e.jsx(x,{of:i}),`
`,e.jsx(d,{metaOf:o,of:i,hideHTMLPropsNote:!0,exclude:m}),`
`,e.jsx(I,{}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{})})]})}function se(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{se as default};
