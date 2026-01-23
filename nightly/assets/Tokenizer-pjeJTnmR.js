import{j as e}from"./iframe-jtGuD92m.js";import{useMDXComponents as m}from"./index-DyF6GLYl.js";import{A as p}from"./ArgTypesWithNote-Dt2b4Jn4.js";import{C as c}from"./ControlsWithNote-BaJ4jHGx.js";import{D as l}from"./DocsHeader-B3UKiZrJ.js";import{F as d}from"./CommandsAndQueries-BgMZZCcl.js";import{M as x,C as r,a as u,D as h}from"./blocks-BL9sBKUV.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-DjzX1lEX.js";import{T as s}from"./index-CnlxhaSB.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-l_17qA1t.js";import"./information-DbZkMEoB.js";import"./sys-enter-2-K-A7BdiC.js";import"./alert-Csq7QRRu.js";import"./Tag-Dpj_ZR-y.js";import"./index-DWeXgmyB.js";import"./index-BEvnvfMN.js";import"./Link-DNXoJofm.js";import"./copy-Bn16TAtg.js";import"./copy-Cn3-Cbk_.js";import"./GitHub-Mark-BBN7SMNW.js";import"./TableOfContent-8auMu_R0.js";import"./index-6t-0TKBV.js";import"./index-D83RH-Pe.js";import"./index-C31MI_yM.js";import"./index-B03g8ajZ.js";import"./index-DtTTXQKH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BUd6X6mW.js";import"./addCustomCSSWithScoping-Bli4C3Yg.js";import"./Token-BHrN57pC.js";import"./ScrollEnablement-NU8w7nTv.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DhTllij2.js";import"./ResponsivePopoverCommon.css-CWePAE7F.js";import"./Suggestions.css-DBI26x47.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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
