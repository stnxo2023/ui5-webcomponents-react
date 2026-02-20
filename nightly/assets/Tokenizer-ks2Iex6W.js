import{j as e}from"./iframe-D_oMot10.js";import{useMDXComponents as m}from"./index-Cg6HnkxT.js";import{A as p}from"./ArgTypesWithNote-CPEdS_de.js";import{C as c}from"./ControlsWithNote-DXnp8onQ.js";import{D as l}from"./DocsHeader-f9VHbHEE.js";import{F as d}from"./CommandsAndQueries-DPkePXTz.js";import{M as x,C as r,a as u,D as h}from"./blocks-2cuCWctq.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-Dbbsri3h.js";import{T as s}from"./index-B1PVPJJo.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DYuRbnft.js";import"./information-D9-yMhmx.js";import"./sys-enter-2-B1tI1-EQ.js";import"./alert-C600_lKj.js";import"./Tag-R7_VB2zh.js";import"./index-s1VP44pI.js";import"./index-DO_1WCge.js";import"./Link-9JdM6Hjv.js";import"./copy-C7-LK9Y4.js";import"./copy-D4R1-NDI.js";import"./GitHub-Mark-os5OPWIB.js";import"./TableOfContent-BFzbgAl_.js";import"./index-Ds5vSSWx.js";import"./index-3r4NxXtD.js";import"./index-DnX1qu0M.js";import"./index-DRuRCvkV.js";import"./index-1pxNHpjB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-izT7sph5.js";import"./addCustomCSSWithScoping-BPH8FgqV.js";import"./Token-BVzC5uio.js";import"./ScrollEnablement-DXy9g_lY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BdOqn1aP.js";import"./ResponsivePopoverCommon.css-AxdwvBmm.js";import"./Suggestions.css-Cabt6nOq.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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
