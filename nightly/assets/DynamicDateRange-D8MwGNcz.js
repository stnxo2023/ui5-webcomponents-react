import{j as e}from"./iframe-DrnWJux_.js";import{useMDXComponents as s}from"./index-8FDMxm68.js";import{M as m,C as o}from"./blocks-BFYkdnf5.js";import"./Tag-C0-SLfdZ.js";import"./index-e4jmEiJR.js";import{C as l}from"./ControlsWithNote-DIYc68X9.js";import{D as p}from"./DocsHeader-rqkxD5o1.js";import{F as d}from"./CommandsAndQueries-CNfp17jg.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-CEZZ98__.js";import"./preload-helper-PPVm8Dsz.js";import"./information-Djf1EDVN.js";import"./sys-enter-2-BH66Bhis.js";import"./alert-DUpqB4cV.js";import"./index-CvpE5smH.js";import"./index-IUrjl9ty.js";import"./Link-DZzQtWK9.js";import"./copy-CUuGlY4c.js";import"./copy-BxyqZoQq.js";import"./GitHub-Mark-C5A0ffo9.js";import"./TableOfContent-CJ3shYO4.js";import"./index-CW1Fzcqx.js";import"./index-Cjg1iz22.js";import"./index-DVoKYJte.js";import"./index-BNqm2zkD.js";import"./index-CBWW3th1.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CDLiZVZl.js";import"./addCustomCSSWithScoping-CbplP-kx.js";import"./Gregorian-q9hha_e2.js";import"./getCachedLocaleDataInstance-Nk-LdNaJ.js";import"./query-CzSBusdE.js";import"./Input-4ibVB00q.js";import"./ResponsivePopoverCommon.css-e_PJNQiz.js";import"./ValueStateMessage.css-CmtfF9l5.js";import"./Suggestions.css-CmamAcfO.js";import"./appointment-2-OF0PoFtK.js";import"./ListItemStandard-yRZvETLK.js";import"./slim-arrow-left-Bt0ZhSnu.js";import"./Calendar-BvekCM48.js";import"./InvisibleMessage-C0LEPWkX.js";import"./index-BmAbNejI.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
`,e.jsx(p,{of:r}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(l,{of:a}),`
`,e.jsx(n.h2,{id:"more-examples",children:"More examples"}),`
`,e.jsx(n.h3,{id:"value-change",children:"Value Change"}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(n.h4,{id:"code",children:"Code"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`function DynamicDateRangeComponent() {
  const [selValue, setSelValue] = useState("");
  const [convertedDates, setConvertedDates] = useState("");
  return (
    <>
      <DynamicDateRange
        onChange={(e) => {
          const selectedValue = e.detail.value;
          setSelValue(JSON.stringify(selectedValue));

          const dates = e.currentTarget.toDates(selectedValue);
          setConvertedDates(
            dates.map((date) => date.toLocaleString()).join(" - "),
          );
        }}
      />
      <hr />
      <FlexBox alignItems="Center" gap="0.5rem">
        <Label for="sel-val" showColon>
          Selected Value
        </Label>
        <Input
          id="sel-val"
          readonly
          value={selValue}
          style={{ width: "100%", maxWidth: "400px" }}
        />
      </FlexBox>
      <FlexBox alignItems="Center" gap="0.5rem">
        <Label for="conv-val" showColon>
          Converted Dates
        </Label>
        <Input
          id="conv-val"
          readonly
          value={convertedDates}
          style={{ width: "100%", maxWidth: "400px" }}
        />
      </FlexBox>
    </>
  );
}
`})}),`
`,e.jsx(d,{})]})}function ee(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{ee as default};
