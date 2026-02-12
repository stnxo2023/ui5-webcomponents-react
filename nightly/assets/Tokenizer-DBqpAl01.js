import{j as e}from"./iframe-Hc0Jcm1H.js";import{useMDXComponents as m}from"./index-DuUU5AC1.js";import{A as p}from"./ArgTypesWithNote-DQ3k5sMj.js";import{C as c}from"./ControlsWithNote-CFIfyIzl.js";import{D as l}from"./DocsHeader-CcDmDBsq.js";import{F as d}from"./CommandsAndQueries-DaPP_-f6.js";import{M as x,C as r,a as u,D as h}from"./blocks-Blx2ursY.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-BvFaI1e6.js";import{T as s}from"./index-B2j_YTYn.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-X6pjtL8_.js";import"./information-MEaUQuQF.js";import"./sys-enter-2-Bor4HzlU.js";import"./alert-B5sjmhde.js";import"./Tag-DWcxngX2.js";import"./index-CJBWc845.js";import"./index-BP8PtjoR.js";import"./Link-B4jgiGqN.js";import"./copy-CmmOC4GI.js";import"./copy-BhskYI2N.js";import"./GitHub-Mark-DuG3V-eq.js";import"./TableOfContent-yaPdzqTW.js";import"./index-CQCUFERN.js";import"./index-BZHpmRs9.js";import"./index-D4_s-XzL.js";import"./index-DixWMcP9.js";import"./index-YGVe_Lue.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CSgKpTfU.js";import"./addCustomCSSWithScoping-C31rwvDU.js";import"./Token-C_NNBIIw.js";import"./ScrollEnablement-DdNa3g_Z.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DI8nzW2J.js";import"./ResponsivePopoverCommon.css-BUymfbWg.js";import"./Suggestions.css-DAulSdYD.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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
