import{j as e}from"./iframe-BXb_n64_.js";import{u as p,M as m,C as r,a as c,D as l}from"./blocks-9VP231tA.js";import{A as d}from"./ArgTypesWithNote-Dvv6L-Gq.js";import{C as x}from"./ControlsWithNote-D6w6Kb-X.js";import{D as u}from"./DocsHeader-BZ77PaiO.js";import{F as h}from"./Footer-DPPwB2I6.js";import"./CommandsAndQueries-BI-RA2OZ.js";import"./PageNotFound-CZrojxwO.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-COy5bfb9.js";import{T as s}from"./index-BjB3H2rw.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BL83g4Fz.js";import"./information-C2n1oeWx.js";import"./sys-enter-2-BNeNMeW8.js";import"./alert-DXZPI1Fp.js";import"./Tag-CRNARXt6.js";import"./index-BNBy1IQK.js";import"./index-BD_xT1Nj.js";import"./Link-BUcKjx9R.js";import"./copy-CsgZl58a.js";import"./copy-BBKTKpbi.js";import"./GitHub-Mark-BVBi5bkL.js";import"./TableOfContent-CJDX4QJ8.js";import"./index-BSoVaSRp.js";import"./index-DqAHmx0d.js";import"./index-D10d9Tlr.js";import"./index-B22x7h0Z.js";import"./index-Ju3FGlVf.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Mi2Syuqb.js";import"./addCustomCSSWithScoping-F8HAuIL-.js";import"./Illustrations-ks8TfsTU.js";import"./i18n-defaults-CFWtSmu6.js";import"./Token-C7CCdRfL.js";import"./ScrollEnablement-CdFwVVtK.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-dvvLOc5F.js";import"./ResponsivePopoverCommon.css-DMiEES2t.js";import"./Suggestions.css-BZAnlsRN.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...p(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:t}),`
`,e.jsx(u,{of:t,subComponents:["Token"],experimental:!0}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(r,{of:i}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(x,{of:i}),`
`,e.jsx(n.h2,{id:"more-examples",children:"More examples"}),`
`,e.jsx(n.h2,{id:"tokenizer-with-selection--delete-logic",children:"Tokenizer with selection & delete logic"}),`
`,e.jsx(r,{of:k}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Show Code"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function TokenizerComponent(props) {
  const [countries, setCountries] = useState([
    'Andorra',
    'Bulgaria',
    'Canada',
    'Denmark',
    'Estonia',
    'Fiji',
    'Ghana',
    'India',
    'Japan',
    'Kenya',
    'Luxembourg',
    'Mexico',
    'Nepal',
    'Qatar',
    'Uganda'
  ]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const handleTokenDelete: TokenizerPropTypes['onTokenDelete'] = (e) => {
    const { tokens } = e.detail;
    if (tokens) {
      const tokensToDelete = tokens.map((token) => token.text);
      setCountries((prev) => prev.filter((country) => !tokensToDelete.includes(country)));
      setSelectedCountries([]);
    }
  };
  const handleSelectionChange: TokenizerPropTypes['onSelectionChange'] = (e) => {
    const { tokens } = e.detail;
    if (tokens) {
      const selectedTokens = tokens.map((token) => token.text);
      setSelectedCountries(selectedTokens);
    }
  };
  return (
    <>
      <Tokenizer {...props} onTokenDelete={handleTokenDelete} onSelectionChange={handleSelectionChange}>
        {countries.map((country) => (
          <Token key={country} text={country} />
        ))}
      </Tokenizer>
      <br />
      <div style={{ display: 'flex', gap: '0.2rem' }}>
        <Label showColon>Selected countries</Label>
        <Text>{selectedCountries.join(', ')}</Text>
      </div>
    </>
  );
}
`})})]}),`
`,e.jsx(c,{children:f}),`
`,e.jsx(n.h2,{id:"token",children:"Token"}),`
`,e.jsx(l,{of:s}),`
`,e.jsx(d,{metaOf:t,of:s}),`
`,e.jsx(h,{})]})}function re(o={}){const{wrapper:n}={...p(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(a,{...o})}):a(o)}export{re as default};
