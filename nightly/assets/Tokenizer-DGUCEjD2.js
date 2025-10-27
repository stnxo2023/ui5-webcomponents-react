import{j as e}from"./iframe-CRoIzMtp.js";import{useMDXComponents as m}from"./index-uepxEeS1.js";import{A as p}from"./ArgTypesWithNote-D9EvnbJ1.js";import{C as c}from"./ControlsWithNote-B074C6wz.js";import{D as l}from"./DocsHeader-BtNALTqX.js";import{F as d}from"./CommandsAndQueries-tg7iHgNo.js";import{M as x,C as r,a as u,D as h}from"./blocks-BWnl8hC4.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-C4C5unfO.js";import{T as s}from"./index-Dr8XQAAX.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-l4qALITX.js";import"./information-DT5Qd4to.js";import"./sys-enter-2-DutWnZ3I.js";import"./alert-D-9oczO0.js";import"./Tag-pVHInn9_.js";import"./index-BY3Vu1_E.js";import"./index-83H_WNAi.js";import"./Link-ByRh7pJY.js";import"./copy-CuZEUVA0.js";import"./copy-D8-Me-o2.js";import"./GitHub-Mark-BMfoN6Yu.js";import"./TableOfContent-CzcYt69w.js";import"./index-C8wLfWwH.js";import"./index-BWA_OWVW.js";import"./index-DCZY0XoF.js";import"./index-BGCNx8iW.js";import"./index-Cq7XEcI3.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CbjPHeWw.js";import"./addCustomCSSWithScoping-DJ9mEG-L.js";import"./Token-DCFzDq3v.js";import"./ScrollEnablement-Dou-HT1U.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DLhORhWI.js";import"./ResponsivePopoverCommon.css-CCSjtQV1.js";import"./Suggestions.css-Zd5amcux.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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
