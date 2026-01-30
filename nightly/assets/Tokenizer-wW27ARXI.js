import{j as e}from"./iframe-D2NU56Rf.js";import{useMDXComponents as m}from"./index-PnjEbenM.js";import{A as p}from"./ArgTypesWithNote-D2s5X3r0.js";import{C as c}from"./ControlsWithNote-CAF9_eD5.js";import{D as l}from"./DocsHeader-Cl3nNz31.js";import{F as d}from"./CommandsAndQueries-29xiV4Jg.js";import{M as x,C as r,a as u,D as h}from"./blocks-DZ0UXwr1.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-DqT77b8x.js";import{T as s}from"./index-YtBSg2ue.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BUSq7sbq.js";import"./information-D0vbTy2i.js";import"./sys-enter-2-VpvNFzz0.js";import"./alert-BQIN7sJt.js";import"./Tag-gDuKwEK0.js";import"./index-jUVFgVlz.js";import"./index-Un1NcZ-Y.js";import"./Link-O92RF9SA.js";import"./copy-DukcYOao.js";import"./copy-2VqtSmY4.js";import"./GitHub-Mark-CouNLLl9.js";import"./TableOfContent-CihQPfob.js";import"./index-B7GdD8iT.js";import"./index-B9i47eba.js";import"./index-Dje3V7QZ.js";import"./index-4WW0oGrP.js";import"./index-CgZch3zg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CHOcvBV5.js";import"./addCustomCSSWithScoping-CUv8r2Rw.js";import"./Token-CTqQ2vo2.js";import"./ScrollEnablement-B2R8AjnU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BIEX9q1d.js";import"./ResponsivePopoverCommon.css-BiNMVLeP.js";import"./Suggestions.css-RnxMuMvw.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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
