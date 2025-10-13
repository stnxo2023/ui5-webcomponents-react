import{j as e}from"./iframe-mZIFexBi.js";import{useMDXComponents as s}from"./index-CSeyhL4L.js";import{M as m,C as o}from"./blocks-pMMBqTak.js";import"./Tag-C5S5wO6X.js";import"./index-CY-KcLEe.js";import{C as l}from"./ControlsWithNote-CeKNi1j-.js";import{D as p}from"./DocsHeader-D6o94XkP.js";import{F as d}from"./CommandsAndQueries-_DqxABXw.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-BC5WELMZ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CuCRdO66.js";import"./sys-enter-2-Da-bg0qX.js";import"./alert-4bZr7bHx.js";import"./index-DbDxOjYs.js";import"./index-CPook487.js";import"./Link-Dky_yGkw.js";import"./copy-CYBLcZaz.js";import"./copy-CK4YnSbS.js";import"./GitHub-Mark-DBieLl-a.js";import"./TableOfContent-Bj42saZH.js";import"./index-Bym-t_ma.js";import"./index-BFs_s1ec.js";import"./index-BbeYDVUM.js";import"./index-DCVKeCrB.js";import"./index-B61-jGoN.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B9FjHI5t.js";import"./addCustomCSSWithScoping-BJ-ZUtqt.js";import"./Gregorian-EGLutllM.js";import"./query-CzSBusdE.js";import"./Input-DjI1lAlw.js";import"./ResponsivePopoverCommon.css-caZWKg7m.js";import"./ValueStateMessage.css-ZpzMuhyf.js";import"./Suggestions.css-BNm2UgCq.js";import"./appointment-2-BjefDRLx.js";import"./ListItemStandard-BsmNnGjy.js";import"./slim-arrow-left-BfTOY1jK.js";import"./Calendar-D1PRr9fc.js";import"./InvisibleMessage-D8WcmxR1.js";import"./index-C63IWCLZ.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
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
