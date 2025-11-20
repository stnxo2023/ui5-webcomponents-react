import{j as e}from"./iframe-CJIrZBlB.js";import{useMDXComponents as m}from"./index-xKVU5ZCd.js";import{A as p}from"./ArgTypesWithNote-DH6P01sb.js";import{C as c}from"./ControlsWithNote-DgEi_PLk.js";import{D as l}from"./DocsHeader-BV5sl85-.js";import{F as d}from"./CommandsAndQueries-C3g74-RT.js";import{M as x,C as r,a as u,D as h}from"./blocks-C-1O0LRm.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-8RXWvY7J.js";import{T as s}from"./index-sEqRuhZ6.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DmJ7zXRW.js";import"./information-BaxJEMV7.js";import"./sys-enter-2-COh9WNy8.js";import"./alert-BkaLAKBd.js";import"./Tag-BNlwFAFY.js";import"./index-EdNUKN4_.js";import"./index-CEkWgGTS.js";import"./Link-BElCP5h1.js";import"./copy-Do5bG9wn.js";import"./copy-DR5Kv1Iv.js";import"./GitHub-Mark-CILm86EZ.js";import"./TableOfContent-Cp1YxGMV.js";import"./index-BGOwz-CM.js";import"./index-YnpVhHMg.js";import"./index-BhZheF80.js";import"./index-DmwyQtvi.js";import"./index-BCwOIMZp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bf32rwnZ.js";import"./addCustomCSSWithScoping-CPo-hqqQ.js";import"./Token-BNv4B9pp.js";import"./ScrollEnablement-CKbJdcjA.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CHoTFWQP.js";import"./ResponsivePopoverCommon.css-xGlWqU9B.js";import"./Suggestions.css-Cy-COfO3.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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
