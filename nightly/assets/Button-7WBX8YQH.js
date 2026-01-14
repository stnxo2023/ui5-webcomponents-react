import{j as e,e as m}from"./iframe-C8VIz1cN.js";import{useMDXComponents as a}from"./index-DF3oZ9DD.js";import{S as u}from"./SubcomponentsSection-BVy4lpQe.js";import{M as p,C as c,a as l,D as x}from"./blocks-D-v6PHKz.js";import{A as d}from"./ArgTypesWithNote-BKIZuTQC.js";import{C as f}from"./ControlsWithNote-Cx_-zFP3.js";import{D as M}from"./DocsHeader-B2gToiar.js";import{F as I}from"./CommandsAndQueries-D_HB_HX-.js";import{C as o,D as r,B as i}from"./Button.stories-BYBZnsQ8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-W-CFrWn1.js";import"./information-Hi7RSuvY.js";import"./sys-enter-2-CeqtRGpA.js";import"./alert-DDLVUdt7.js";import"./Tag-Ce9kI3uB.js";import"./index-C3PbHa_S.js";import"./index-zu9Y-W0w.js";import"./Link-8iQqMH3R.js";import"./copy-DmsxEFne.js";import"./copy-ChBzOjSf.js";import"./GitHub-Mark-EKLu-fRk.js";import"./TableOfContent-rBzrQ-hO.js";import"./index-CK3WOJt5.js";import"./index-IuSSn5Ye.js";import"./index-DVHGI5Hf.js";import"./index-CQjs21SR.js";import"./index-D5h2jV28.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-VSpt3ox9.js";import"./addCustomCSSWithScoping-BS3ufxCI.js";import"./ai-BHaVVgf_.js";import"./ai-BIKNiYJg.js";import"./navigation-down-arrow-BzgaFSOU.js";import"./stop-Bxb3RiHD.js";import"./stop-CpVnXXnD.js";import"./query-CzSBusdE.js";import"./parameters-bundle.css-j-IoYmGi.js";import"./SplitButton-BQkw241O.js";import"./slim-arrow-down-Dfenv5Nd.js";import"./slim-arrow-down-B8cEuo7F.js";import"./index-ChvE3IyQ.js";import"./index-D9iZNWmo.js";function s(n){const t={code:"code",h2:"h2",pre:"pre",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:o}),`
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
