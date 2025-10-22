import{j as e}from"./iframe-aKs2ZWAj.js";import{useMDXComponents as m}from"./index-c4zJYkcR.js";import{A as p}from"./ArgTypesWithNote-CNPdQX98.js";import{C as c}from"./ControlsWithNote-B8WaBvsi.js";import{D as l}from"./DocsHeader-C9NlxNFr.js";import{F as d}from"./CommandsAndQueries-IBiFSZr-.js";import{M as x,C as r,a as u,D as h}from"./blocks-fvCr5kp9.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-Bl3dPD15.js";import{T as s}from"./index-DEQ4MebZ.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CMRRcr14.js";import"./information-CcxaAVSU.js";import"./sys-enter-2-DseuEdAf.js";import"./alert-DbU8Ao5u.js";import"./Tag-DSoVP5MU.js";import"./index-Dqo0aPAB.js";import"./index-Bj8ei7PO.js";import"./Link--ytwK8Iw.js";import"./copy-uvypmv5n.js";import"./copy-D9idsxI8.js";import"./GitHub-Mark-CtzbVoJK.js";import"./TableOfContent-BssXKtqS.js";import"./index-DNGZMnOS.js";import"./index-9dBzyYap.js";import"./index-ChXUbPo1.js";import"./index-B_N5JODd.js";import"./index-MuWvZ7Ot.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C1lURHaG.js";import"./addCustomCSSWithScoping--I2WhUfl.js";import"./Token-B4ffJEtp.js";import"./ScrollEnablement-loPYCCzg.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-xWRY6uoX.js";import"./ResponsivePopoverCommon.css-Dn8ntY67.js";import"./Suggestions.css-CJQWNtEa.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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
