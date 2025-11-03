import{j as e}from"./iframe-BAeEsjGg.js";import{useMDXComponents as s}from"./index-Bq0E1dsP.js";import{M as u,C as o,a as c,D as r,A as i}from"./blocks-BgvPFJNP.js";import"./Tag-C0AbLWiC.js";import"./index-CofNVADY.js";import{C as h}from"./ControlsWithNote-C_MVHisI.js";import{D as I}from"./DocsHeader-90QUpf_R.js";import{F as y}from"./CommandsAndQueries-BmSS4dsr.js";import{S as x}from"./SubcomponentsSection-BVy4lpQe.js";import{a as p,b as a}from"./index-BWIx_ESf.js";import{C as d,D as m,a as F}from"./Form.stories-DFWXfOIn.js";import"./preload-helper-PPVm8Dsz.js";import"./information-DWcYA3Ge.js";import"./sys-enter-2-CQUiiR68.js";import"./alert-DfrSfG2k.js";import"./index-BcBOqS22.js";import"./index-D8OEyr8Q.js";import"./Link-C-dbgRnK.js";import"./copy-CSCU53L9.js";import"./copy-AboRjUVj.js";import"./GitHub-Mark-GM8lNh-o.js";import"./TableOfContent-CScjtNNq.js";import"./index-BbgOEhgO.js";import"./index-CdyvC-L0.js";import"./index-B1MvTI4o.js";import"./index-Bh0rKKOG.js";import"./index-DTbJ3L--.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-j4KshgYu.js";import"./addCustomCSSWithScoping-dmB8rtW3.js";import"./Input-BqTefG9q.js";import"./ResponsivePopoverCommon.css-CaExEbcN.js";import"./ValueStateMessage.css-j0uXhKgp.js";import"./Suggestions.css-LZu9AJzQ.js";import"./index-CMySECru.js";import"./index-DnyBfK-i.js";import"./index-BeVxZxme.js";import"./Select-D8r9sg-T.js";import"./InvisibleMessage-BamEjZig.js";import"./slim-arrow-down-DPB1_EKt.js";import"./slim-arrow-down-plIUNiIv.js";import"./index-CIveRvMm.js";import"./Option-BddoQSs-.js";import"./ListItemBaseTemplate-PmrEhlyw.js";import"./index-BS5kb7Yk.js";function l(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{of:d}),`
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
