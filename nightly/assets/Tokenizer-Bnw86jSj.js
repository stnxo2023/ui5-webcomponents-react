import{j as e}from"./iframe-D7AtRUpE.js";import{useMDXComponents as m}from"./index-DRFX2LG8.js";import{A as p}from"./ArgTypesWithNote-WxsGxT3R.js";import{C as c}from"./ControlsWithNote-BuOt4CbO.js";import{D as l}from"./DocsHeader-CKFKCZtO.js";import{F as d}from"./CommandsAndQueries-BtIPK2kL.js";import{M as x,C as r,a as u,D as h}from"./blocks-DtVmZnZe.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-BABxSQ91.js";import{T as s}from"./index-C2ABdOST.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ehmuZHI1.js";import"./information-D-fAW1gu.js";import"./sys-enter-2-DRPF_4qy.js";import"./alert-fnVpcWPE.js";import"./Tag-DZXgvHmp.js";import"./index-BWvZCzda.js";import"./index-Dd6OnJpC.js";import"./Link-DWIR53PW.js";import"./copy-Bpb_R_BT.js";import"./copy-BpQCF5oY.js";import"./GitHub-Mark-CW0ZyVD2.js";import"./TableOfContent-DJLXVcV1.js";import"./index-CCJ9pFYK.js";import"./index-BGkf-dJq.js";import"./index-CjaPk49X.js";import"./index-CH_KzusP.js";import"./index-54VAs-Li.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-RhrsIb0U.js";import"./addCustomCSSWithScoping-C2Eje0Og.js";import"./Token-Bn9BgD8D.js";import"./ScrollEnablement-DFMfFOOU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dkffh3P6.js";import"./ResponsivePopoverCommon.css-C_ECllnd.js";import"./Suggestions.css-CrAZUaHe.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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
