import{j as e}from"./iframe-7SE3nFh2.js";import{useMDXComponents as m}from"./index-C0FWbpZL.js";import{A as p}from"./ArgTypesWithNote-HaCOtkb_.js";import{C as c}from"./ControlsWithNote-CfLd-2FY.js";import{D as l}from"./DocsHeader-aNnt3Lfp.js";import{F as d}from"./CommandsAndQueries-BztwtTDr.js";import{M as x,C as r,a as u,D as h}from"./blocks-BJKQ4CAZ.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-GoLFyvXP.js";import{T as s}from"./index-B4Zv90m_.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DcFj-mpl.js";import"./information-CEHY-zK8.js";import"./sys-enter-2-Db6aMDI3.js";import"./alert-iGUotenY.js";import"./Tag-CAr8yJM3.js";import"./index-CZm6iJJ6.js";import"./index-BH5SLEfd.js";import"./Link-DJshYrFL.js";import"./copy-Ck-cOtgE.js";import"./copy-CDZIXxHa.js";import"./GitHub-Mark-TqIkv81D.js";import"./TableOfContent-B1lf0qQg.js";import"./index-BdnA4cG1.js";import"./index-DZIYhziJ.js";import"./index-CJza0w__.js";import"./index-CHnd9ZVx.js";import"./index-cZBRAzkp.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bx3Mb7HN.js";import"./addCustomCSSWithScoping-CrtLyOIc.js";import"./Token-D_Njw8ms.js";import"./ScrollEnablement-u1O_vcM6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-5gZgEeYH.js";import"./ResponsivePopoverCommon.css-DqKEq-kc.js";import"./Suggestions.css-DT0Rp6yR.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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
