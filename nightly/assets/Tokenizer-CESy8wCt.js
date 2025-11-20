import{j as e}from"./iframe-HT1spLTi.js";import{useMDXComponents as m}from"./index-DBCrLany.js";import{A as p}from"./ArgTypesWithNote-EAzFMw7S.js";import{C as c}from"./ControlsWithNote-C2NdPp4a.js";import{D as l}from"./DocsHeader-fKL6It59.js";import{F as d}from"./CommandsAndQueries-BbzR7uR6.js";import{M as x,C as r,a as u,D as h}from"./blocks-BHdc3k3Z.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-DAB4Fn-3.js";import{T as s}from"./index-a66Z2aLL.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-QNmDooaX.js";import"./information-BYNrnqUc.js";import"./sys-enter-2-D7etVCyM.js";import"./alert-D38Y2b3l.js";import"./Tag-D0fQ6cD9.js";import"./index-BXPXbeEl.js";import"./index-CWHtqZOi.js";import"./Link-dxeMesAc.js";import"./copy-C2DqEa-i.js";import"./copy-CRfxWZGx.js";import"./GitHub-Mark-BSVfygjg.js";import"./TableOfContent-BK7avpMU.js";import"./index-BZj-Nofr.js";import"./index-gqzRfHPw.js";import"./index-ILnTo0yK.js";import"./index-CNJfOrlA.js";import"./index-CV40RAYh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-tr8O9Dg_.js";import"./addCustomCSSWithScoping-DOmP-F21.js";import"./Token-CJWVjFqm.js";import"./ScrollEnablement-COl_OArp.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B0rWPz1n.js";import"./ResponsivePopoverCommon.css-DumVabDv.js";import"./Suggestions.css-B7Xe6SyY.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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
