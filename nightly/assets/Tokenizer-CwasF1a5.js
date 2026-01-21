import{j as e}from"./iframe-BFR-dU1l.js";import{useMDXComponents as m}from"./index-BRr5RSu7.js";import{A as p}from"./ArgTypesWithNote-8nCJ51pN.js";import{C as c}from"./ControlsWithNote-BAOTy4FM.js";import{D as l}from"./DocsHeader-6Y7Moh3O.js";import{F as d}from"./CommandsAndQueries-kf2pSDF5.js";import{M as x,C as r,a as u,D as h}from"./blocks-DTAC1Gxc.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-CRkW0Wxr.js";import{T as s}from"./index-VHtPpoy9.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dv1E9yaY.js";import"./information-BanFECND.js";import"./sys-enter-2-RSAR57lC.js";import"./alert-4GMQX2Dz.js";import"./Tag-Uk5Wz18b.js";import"./index-BAzgfXr-.js";import"./index-CvzwYeg1.js";import"./Link-DIc6gIaF.js";import"./copy-DnbsSyeI.js";import"./copy-Cc7XHaG7.js";import"./GitHub-Mark-B3ESfqwd.js";import"./TableOfContent-De6SMJi5.js";import"./index-CVrFyQhm.js";import"./index-CoobbAbb.js";import"./index-C3CLOvIH.js";import"./index-CFDOjZnD.js";import"./index-VAuUAMe6.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C1LKO1Rr.js";import"./addCustomCSSWithScoping-BBCqvj7y.js";import"./Token-BGFsQDvi.js";import"./ScrollEnablement-CfAnlfcJ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-M14QpxFJ.js";import"./ResponsivePopoverCommon.css-ibscBu1F.js";import"./Suggestions.css-C4f0pZkx.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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
