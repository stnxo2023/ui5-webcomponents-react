import{j as e}from"./iframe-D-ZP0dY4.js";import{u as s,M as m,C as o}from"./blocks-DdKopPSC.js";import"./Tag-CNlwwDmZ.js";import"./index-C04kZKw9.js";import{C as p}from"./ControlsWithNote-BIyz1_Xt.js";import{D as l}from"./DocsHeader-MhexG2vZ.js";import{F as d}from"./Footer-BLTkp7nE.js";import"./CommandsAndQueries-BDnj74c9.js";import"./PageNotFound-DiPPX7Ze.js";import{C as r,D as a,V as c}from"./DynamicDateRange.stories-B61rSzlH.js";import"./preload-helper-PPVm8Dsz.js";import"./information-BKIP_Ra_.js";import"./sys-enter-2-vX0Cm-qe.js";import"./alert-Bu79oBCI.js";import"./index-Dx3fp6V7.js";import"./index-BAH7VHrp.js";import"./Link-06g1SNw0.js";import"./copy-DEZgQs9x.js";import"./copy-HW_Kxlr2.js";import"./GitHub-Mark-Cxk1q0bN.js";import"./TableOfContent--BhlVRbW.js";import"./index-Tnz3nQrD.js";import"./index-U3Dsw_H6.js";import"./index-CF2Hkn6J.js";import"./index-BAothMF0.js";import"./index-eZWdMAeg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DxeCNWRQ.js";import"./addCustomCSSWithScoping-DSa3TmU8.js";import"./Illustrations-DQsCRA8v.js";import"./i18n-defaults-CFWtSmu6.js";import"./Gregorian-Bat002kO.js";import"./FormatUtils-Bm-FfBby.js";import"./query-CzSBusdE.js";import"./Input-BOgGLefA.js";import"./ResponsivePopoverCommon.css-Dq17JFm7.js";import"./ValueStateMessage.css-CBH2VacG.js";import"./Suggestions.css-BN8N-6EC.js";import"./appointment-2-BeTiQuOC.js";import"./ListItemStandard-ByPNXDkr.js";import"./slim-arrow-left-C0zk9S9q.js";import"./Calendar-DGeph1Fp.js";import"./InvisibleMessage-D_du7Nj7.js";import"./index-B4X1hHJn.js";function i(n){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:r}),`
`,e.jsx(l,{of:r}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(p,{of:a}),`
`,e.jsx(t.h2,{id:"more-examples",children:"More examples"}),`
`,e.jsx(t.h3,{id:"value-change",children:"Value Change"}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(t.h4,{id:"code",children:"Code"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`function DynamicDateRangeComponent() {
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
`,e.jsx(d,{})]})}function oe(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{oe as default};
