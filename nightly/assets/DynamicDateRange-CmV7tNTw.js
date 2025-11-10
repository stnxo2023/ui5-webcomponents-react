import{j as e}from"./iframe-5rXfnPaz.js";import{useMDXComponents as s}from"./index-BqyI3aT9.js";import{M as m,C as o}from"./blocks-_HtGHxpQ.js";import"./Tag-BLU9xLwR.js";import"./index-TJORVIjM.js";import{C as l}from"./ControlsWithNote-CyGeYvva.js";import{D as p}from"./DocsHeader-DW4KxXV-.js";import{F as d}from"./CommandsAndQueries-Xz4gCbJR.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-BIQHf17l.js";import"./preload-helper-PPVm8Dsz.js";import"./information-C9cuRXqE.js";import"./sys-enter-2-y9J_ETy2.js";import"./alert-CnXddf7Q.js";import"./index-DN9fi-2P.js";import"./index-BgPkgqrz.js";import"./Link-IINvsuro.js";import"./copy-BaXzEQMr.js";import"./copy-3qQuBQub.js";import"./GitHub-Mark-Cd9kpE0C.js";import"./TableOfContent-DOPl490X.js";import"./index-D3cU9WTA.js";import"./index-BB6TdVmi.js";import"./index-X9fuUMPC.js";import"./index-DVjD8wbo.js";import"./index-Bna4bEkh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BikUYAZO.js";import"./addCustomCSSWithScoping-Cv8BQzm9.js";import"./Gregorian-BQHCi3-B.js";import"./query-CzSBusdE.js";import"./Input-4O3kRwLq.js";import"./ResponsivePopoverCommon.css-C1xBOZoa.js";import"./ValueStateMessage.css-BdW6AGS6.js";import"./Suggestions.css-BLWo3F15.js";import"./appointment-2-BW1zQvcc.js";import"./ListItemStandard-Cua6cuRg.js";import"./slim-arrow-left-3zUOYbeB.js";import"./Calendar-BQMe0bhM.js";import"./InvisibleMessage-lYBgp4_P.js";import"./index-ZZRaGFiZ.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
`,e.jsx(d,{})]})}function $(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{$ as default};
