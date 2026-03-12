import{j as e}from"./iframe-bao9qRDH.js";import{useMDXComponents as m}from"./index-D58rFl3P.js";import{A as p}from"./ArgTypesWithNote-CG4itUXO.js";import{C as c}from"./ControlsWithNote-B5-P5vcT.js";import{D as l}from"./DocsHeader-FxRbQzqR.js";import{F as d}from"./Footer-WVPZdxr3.js";import"./CommandsAndQueries-Bg8yb33a.js";import"./PageNotFound-sLpD2w2i.js";import{M as x,C as r,a as u,D as h}from"./blocks-uUz_WETG.js";import{C as t,D as i,W as k}from"./Tokenizer.stories-D7fb_vTG.js";import{T as s}from"./index-DkD7BGQ9.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B3NnTsyp.js";import"./information-DbPZ0LCP.js";import"./sys-enter-2-Ch2YqKTp.js";import"./alert-CeM8CijD.js";import"./Tag-DnPLRNDs.js";import"./index-CwfO5OAT.js";import"./index-DPEMBgxp.js";import"./Link-ZWtIcHaY.js";import"./copy-DUEvZFUb.js";import"./copy-jfQcw6pd.js";import"./GitHub-Mark-tOKz_pt5.js";import"./TableOfContent-CharJQun.js";import"./index-D32QYjx2.js";import"./index-5JMcfQSp.js";import"./index-BNO-qx4N.js";import"./index-Dl2g3tcZ.js";import"./index-DOBS9bga.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-L1xKvRVU.js";import"./addCustomCSSWithScoping-D0v__xyi.js";import"./Illustrations-BL_lLuOy.js";import"./i18n-defaults-CFWtSmu6.js";import"./Token-CmOxgLRY.js";import"./ScrollEnablement-DTj4JYqk.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-_fmCfmaL.js";import"./ResponsivePopoverCommon.css-boUjI9kL.js";import"./Suggestions.css-Czb7XS0g.js";function a(o){const n={code:"code",h2:"h2",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:t}),`
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
`,e.jsx(d,{})]})}function ie(o={}){const{wrapper:n}={...m(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(a,{...o})}):a(o)}export{ie as default};
