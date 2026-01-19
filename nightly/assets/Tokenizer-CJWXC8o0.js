import{j as e}from"./iframe-IArRSqE_.js";import{useMDXComponents as m}from"./index-j7nsZpBW.js";import{A as p}from"./ArgTypesWithNote-_08zved_.js";import{C as c}from"./ControlsWithNote-DjRiLU9r.js";import{D as l}from"./DocsHeader-CfuOBayd.js";import{F as d}from"./CommandsAndQueries-Y7cLRyXq.js";import{M as x,C as r,a as u,D as h}from"./blocks-uZpIO_b1.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-DfAscOAP.js";import{T as s}from"./index-CXG6h1DC.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BxBWQyES.js";import"./information-CXNknbN_.js";import"./sys-enter-2-ByYwkCyE.js";import"./alert-ryPoEChu.js";import"./Tag-y4SxBR_K.js";import"./index-Dxbh4gdX.js";import"./index-gakMtpus.js";import"./Link-Ba0uGRWm.js";import"./copy-BJV-qLZ4.js";import"./copy-7xAa2gpG.js";import"./GitHub-Mark-BX1biNK5.js";import"./TableOfContent-DwRO066Y.js";import"./index-AiAyIf9Q.js";import"./index-C0j3-f_Y.js";import"./index-NrHuYdPm.js";import"./index-Cs2OWExd.js";import"./index-DL3EiYIa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Gn0YqzQq.js";import"./addCustomCSSWithScoping-DtA6p3SW.js";import"./Token-Cd_Fzg2A.js";import"./ScrollEnablement-n9c5FDfp.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C2IILuHn.js";import"./ResponsivePopoverCommon.css-DVDWeT9K.js";import"./Suggestions.css-DAgR6HvO.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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
