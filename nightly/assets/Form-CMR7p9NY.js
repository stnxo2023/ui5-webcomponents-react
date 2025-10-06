import{j as e}from"./iframe-C3aU9yO2.js";import{useMDXComponents as s}from"./index-DcLDqK7w.js";import{M as u,C as o,a as c,D as r,A as i}from"./blocks-B9oc031V.js";import"./Tag-CNw53_eT.js";import"./index-i1N6ua_w.js";import{C as h}from"./ControlsWithNote-nHtB5Dyt.js";import{D as I}from"./DocsHeader-BfkKDq-N.js";import{F as y}from"./CommandsAndQueries-D0nTXU9T.js";import{S as x}from"./SubcomponentsSection-BVy4lpQe.js";import{a as p,b as a}from"./index-B2QbEZQy.js";import{C as d,D as m,a as F}from"./Form.stories-CQz0tAce.js";import"./preload-helper-PPVm8Dsz.js";import"./information-B-Ns6m0d.js";import"./sys-enter-2-D_Kaw-gu.js";import"./alert-7z2pNDRB.js";import"./index-BU0JfJz1.js";import"./index-DKI76k_B.js";import"./Link-BnEnKAv3.js";import"./copy-CA-gndrC.js";import"./copy-D_R4P06r.js";import"./GitHub-Mark-D3WRJqR4.js";import"./TableOfContent-Bu4A0xbb.js";import"./index-CfpqN5Id.js";import"./index-g0B9jrXN.js";import"./index-DBwKQ69N.js";import"./index-D8QgyDbC.js";import"./index-CPcH_eI_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CPfGSaYG.js";import"./addCustomCSSWithScoping-C73QrPVQ.js";import"./Input-Cfbtnwg6.js";import"./ResponsivePopoverCommon.css-BiqlokwB.js";import"./ValueStateMessage.css-BCiC-Blk.js";import"./Suggestions.css-DhC4w4Fb.js";import"./index-B4_obUuS.js";import"./index-DbNwybSm.js";import"./index-BHr0wFPK.js";import"./Select-C8enezS2.js";import"./InvisibleMessage-Ce5yXPOl.js";import"./slim-arrow-down-gN-yvIKk.js";import"./slim-arrow-down-B-t7KMm_.js";import"./index-DrHO_6Yk.js";import"./Option-CeOJa7O5.js";import"./ListItemBaseTemplate-C7NEMs7Q.js";import"./index-C_6DRLOc.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:d}),`
`,e.jsx(I,{of:d,subComponents:["FormGroup","FormItem"]}),`
`,e.jsx("br",{}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(h,{of:m}),`
`,e.jsx(t.h1,{id:"more-examples",children:"More Examples"}),`
`,e.jsx(t.h2,{id:"display-only-and-edit-mode",children:"Display-Only and Edit mode"}),`
`,e.jsx(o,{of:F,sourceState:"none"}),`
`,e.jsx(t.h3,{id:"code",children:"Code"}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Show Code"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const StandardField = ({ editMode, value, inputType = InputType.Text, onInput, ...rest }) => {
  if (editMode) {
    return <Input value={value} style={{ width: '100%' }} type={inputType} onInput={onInput} {...rest} />;
  }
  if (inputType === InputType.URL || inputType === InputType.Email) {
    return (
      <Link href={inputType === InputType.Email ? \`mailto:\${value}\` : value} target="_blank" {...rest}>
        {value}
      </Link>
    );
  }
  return <Text {...rest}>{value}</Text>;
};

const reducer = (state, { field, value }) => {
  return { ...state, [field]: value };
};

const FormComponent = (props) => {
  const [editMode, toggleEditMode] = useReducer((prev) => !prev, false, undefined);
  const [formState, dispatch] = useReducer(
    reducer,
    {
      name: 'Red Point Stores',
      street: 'Main St 1618',
      zip: 31415,
      city: 'Maintown',
      country: 'Germany',
      web: 'https://www.sap.com',
      mail: 'john.smith@sap.com',
      twitter: '@sap',
      phone: '+49 1234 56789'
    },
    undefined
  );
  const { zip, city, name, street, country, web, mail, twitter, phone } = formState;

  const handleInput = (e) => {
    dispatch({ field: Object.keys(e.target.dataset)[0], value: e.target.value });
  };

  return (
    <>
      <Button onClick={toggleEditMode}>Toggle {editMode ? 'Display-Only Mode' : 'Edit Mode'}</Button>
      <Form
        {...props}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <FormGroup titleText="Address">
          <FormItem label="Name">
            <StandardField editMode={editMode} value={name} onInput={handleInput} data-name />
          </FormItem>
          <FormItem label="Street">
            <StandardField editMode={editMode} value={street} onInput={handleInput} data-street />
          </FormItem>
          <FormItem label="ZIP Code / City">
            {editMode ? (
              <>
                <Input value={zip} type={InputType.Number} style={{ width: '30%' }} onInput={handleInput} data-zip />
                <Input value={city} style={{ width: '70%' }} onInput={handleInput} data-city />
              </>
            ) : (
              <Text>{\`\${zip} \${city}\`}</Text>
            )}
          </FormItem>
          <FormItem label="Country">
            <StandardField editMode={editMode} value={country} onInput={handleInput} data-country />
          </FormItem>
          <FormItem label="Web">
            <StandardField editMode={editMode} value={web} inputType={InputType.URL} onInput={handleInput} data-web />
          </FormItem>
        </FormGroup>
        <FormGroup titleText="Contact">
          <FormItem label="Email">
            <StandardField
              editMode={editMode}
              value={mail}
              inputType={InputType.Email}
              onInput={handleInput}
              data-email
            />
          </FormItem>
          <FormItem label="Twitter">
            <StandardField editMode={editMode} value={twitter} onInput={handleInput} data-twitter />
          </FormItem>
          <FormItem label="Phone">
            <StandardField
              editMode={editMode}
              value={phone}
              inputType={InputType.Tel}
              onInput={handleInput}
              data-phone
            />
          </FormItem>
        </FormGroup>
      </Form>
    </>
  );
};
`})})]}),`
`,e.jsx(c,{children:x}),`
`,e.jsx(t.h2,{id:"form-group",children:"Form Group"}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(t.h2,{id:"formitem",children:"FormItem"}),`
`,e.jsx(r,{of:a}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(y,{})]})}function le(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(l,{...n})}):l(n)}export{le as default};
