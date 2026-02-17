import{j as e}from"./iframe-DFi9UtKE.js";import{useMDXComponents as m}from"./index-PehDt-ON.js";import{A as p}from"./ArgTypesWithNote-CGrCL-C1.js";import{C as c}from"./ControlsWithNote-BDtgiAUA.js";import{D as l}from"./DocsHeader-DL6MJPVs.js";import{F as d}from"./CommandsAndQueries-BgA_2y6P.js";import{M as x,C as r,a as u,D as h}from"./blocks-BZiPfi5R.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-BsBogq-T.js";import{T as s}from"./index-CdraDOvk.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DRo_4cI_.js";import"./information-C2fQMAhn.js";import"./sys-enter-2-C-DHMglr.js";import"./alert-Do2a0hn1.js";import"./Tag-DyC770Wv.js";import"./index-BVIBsTLM.js";import"./index-Bj7syw50.js";import"./Link-CKaRASof.js";import"./copy-BfQ0nxef.js";import"./copy-BtJq9lRd.js";import"./GitHub-Mark-BIVb8YrT.js";import"./TableOfContent-Dj-Rxe0E.js";import"./index-BlgbWjqC.js";import"./index-mz_qMVbD.js";import"./index-hjE9MH8j.js";import"./index-CgUZ8Jrz.js";import"./index-C91-M52B.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-QdlayBuh.js";import"./addCustomCSSWithScoping-C-Twfd1m.js";import"./Token-BvOFy9vC.js";import"./ScrollEnablement-CctDMVQ2.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cocq2_my.js";import"./ResponsivePopoverCommon.css-CTa7xzuq.js";import"./Suggestions.css-CKUgORQE.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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
`,e.jsx(d,{})]})}function ne(o={}){const{wrapper:n}={...m(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(a,{...o})}):a(o)}export{ne as default};
