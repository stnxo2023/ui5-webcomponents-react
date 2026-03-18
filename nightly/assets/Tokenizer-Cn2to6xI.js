import{j as e}from"./iframe-ClKZoppV.js";import{useMDXComponents as m}from"./index-BBP-HRkM.js";import{A as p}from"./ArgTypesWithNote-B8-KnC_a.js";import{C as c}from"./ControlsWithNote-BJv1bkXz.js";import{D as l}from"./DocsHeader-aD31_w4z.js";import{F as d}from"./Footer-BJ8-oElo.js";import"./CommandsAndQueries-BSg7r23V.js";import"./PageNotFound-DkMfdMip.js";import{M as x,C as r,a as u,D as h}from"./blocks-C6PUfAN7.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-r9llkzLV.js";import{T as s}from"./index-DeB0qNlM.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Brz6Jamn.js";import"./information-C2rgVrmf.js";import"./sys-enter-2-zNCrvlrA.js";import"./alert-DLSg1FPP.js";import"./Tag-CnAKe81V.js";import"./index-CEU-nQxX.js";import"./index-Tx9EfJkS.js";import"./Link-DLU4uHoZ.js";import"./copy-zGSFbqtO.js";import"./copy-rX2zRtcl.js";import"./GitHub-Mark-DlD1eMnp.js";import"./TableOfContent-sHwgKy8t.js";import"./index-kUQXQip-.js";import"./index-Dnwis2Yb.js";import"./index-BFw8ePED.js";import"./index-W9ERffOR.js";import"./index-DG_kdwr6.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CJ7j91qP.js";import"./addCustomCSSWithScoping-5Po78CSL.js";import"./Illustrations-CjXAC4Lw.js";import"./i18n-defaults-CFWtSmu6.js";import"./Token-BGJ_CPca.js";import"./ScrollEnablement-DisvRpMe.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BgPpv9rh.js";import"./ResponsivePopoverCommon.css-Dcm-qCQM.js";import"./Suggestions.css-DMuxG7ST.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
`,e.jsx(l,{of:t,subComponents:["Token"],experimental:!0}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(r,{of:i}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(c,{of:i}),`
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
`,e.jsx(u,{children:f}),`
`,e.jsx(n.h2,{id:"token",children:"Token"}),`
`,e.jsx(h,{of:s}),`
`,e.jsx(p,{metaOf:t,of:s}),`
`,e.jsx(d,{})]})}function ie(o={}){const{wrapper:n}={...m(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(a,{...o})}):a(o)}export{ie as default};
