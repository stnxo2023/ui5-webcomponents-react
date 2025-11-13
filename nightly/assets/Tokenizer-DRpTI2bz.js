import{j as e}from"./iframe-DtedCjfy.js";import{useMDXComponents as m}from"./index-CHHTCtpJ.js";import{A as p}from"./ArgTypesWithNote-NkYgEqHM.js";import{C as c}from"./ControlsWithNote-U2_-yu-i.js";import{D as l}from"./DocsHeader-BSqDoS4X.js";import{F as d}from"./CommandsAndQueries-CefMw8Tu.js";import{M as x,C as r,a as u,D as h}from"./blocks-B76JpcnK.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-hXIQiaA5.js";import{T as s}from"./index-D45HhTj-.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DKt9EK6E.js";import"./information-Dgg1zzf6.js";import"./sys-enter-2-BS_wAjUh.js";import"./alert-DCJXRL-H.js";import"./Tag-UovGhxml.js";import"./index-Np4eK1ew.js";import"./index-B_rkL0I7.js";import"./Link-DZXvuASQ.js";import"./copy-Bb-0xoGY.js";import"./copy-YvtV-MwK.js";import"./GitHub-Mark-BHD2VI9z.js";import"./TableOfContent-CgJSyrjN.js";import"./index-DX3eFopX.js";import"./index-DeLaWQId.js";import"./index-CYjF7K0n.js";import"./index-BwT8h001.js";import"./index-CSzpUMpn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BDJ7Ajcv.js";import"./addCustomCSSWithScoping-ClguXaul.js";import"./Token-dHSL_sqK.js";import"./ScrollEnablement-CJ3-LAJa.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BKpRxXOc.js";import"./ResponsivePopoverCommon.css-82X5LMAI.js";import"./Suggestions.css-D0hxhwDs.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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
