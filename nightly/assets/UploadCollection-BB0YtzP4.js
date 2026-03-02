import{j as e}from"./iframe-Cu2r5DBt.js";import{useMDXComponents as d}from"./index-DsEnC-S2.js";import{A as s}from"./ArgTypesWithNote-BQ8td7Ep.js";import{C as p}from"./ControlsWithNote-DlpqvBve.js";import{D as m}from"./DocsHeader-guwo1FDt.js";import{F as c}from"./CommandsAndQueries-DfbTmmri.js";import{S as h}from"./SubcomponentsSection-BVy4lpQe.js";import{M as f,C as i,a as x,D as u}from"./blocks-DrEEcrJV.js";import{C as t,D as l,S as C,U as r}from"./UploadCollection.stories-CWtgN2Cw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DcYlZ6P4.js";import"./information-Bxm8KRwL.js";import"./sys-enter-2-f8dz7x8Q.js";import"./alert-848W8p-Q.js";import"./Tag-BfeG-i6G.js";import"./index-DacMIu3h.js";import"./index-Os4Zeg9n.js";import"./Link-DyRt210A.js";import"./copy-CzZNgj09.js";import"./copy-D0JAZV9l.js";import"./GitHub-Mark-LdOWkat8.js";import"./TableOfContent-RWlZdsI9.js";import"./index-BCrFY3fH.js";import"./index-BlqIDgbk.js";import"./index-DiFMEeWS.js";import"./index-CMEHSo2E.js";import"./index-COwVlcqf.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CO5icxsl.js";import"./addCustomCSSWithScoping-81SqKEKs.js";import"./stop-Cz6hBngB.js";import"./i18n-defaults-Ca0KLLzw.js";import"./Input-D3OZDz2j.js";import"./ResponsivePopoverCommon.css-D6DQUrFO.js";import"./ValueStateMessage.css-DVAUVrF2.js";import"./Suggestions.css-D_7WvW8J.js";import"./ProgressIndicator-D3aBYfr4.js";import"./AnimationMode-CQdZJCVV.js";import"./stop-Ci4umMp_.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./Tent-djHFJR1M.js";import"./IllustratedMessage-DX1YYOhS.js";function a(o){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...d(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(f,{of:t}),`
`,e.jsx(m,{of:t,since:"0.9.0"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(p,{of:l}),`
`,e.jsx(n.h2,{id:"handling-drag-and-drop-of-files",children:"Handling drag and drop of files"}),`
`,e.jsxs(n.p,{children:["Per default, files can be added by dragging them into the ",e.jsx(n.code,{children:"UploadCollection"}),` component.
To use this functionality the `,e.jsx(n.code,{children:"onDrop"})," handler has to be manually adjusted.",e.jsx("br",{}),`
`,e.jsx(n.strong,{children:"Note:"})," Use ",e.jsx(n.code,{children:"event.preventDefault()"})," in the ",e.jsx(n.code,{children:"onDrop"})," handler, otherwise some browsers will open some files in a different tab."]}),`
`,e.jsxs(n.p,{children:["This example shows, how to dynamically render a ",e.jsx(n.code,{children:"UploadCollectionItem"})," by dropping files into the ",e.jsx(n.code,{children:"UploadCollection"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { useState } from 'react';
import { Icon, Text, UploadCollection, UploadCollectionItem } from '@ui5/webcomponents-react';

export const UploadCollectionComponent = () => {
  const [children, setChildren] = useState([]);
  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    files.forEach((file) => {
      setChildren((prev) => [
        ...prev,
        <UploadCollectionItem file={file} fileName={file.name} thumbnail={<Icon name="document" />}>
          <Text>Uploaded On: Right now</Text>
        </UploadCollectionItem>
      ]);
    });
  };
  return <UploadCollection onDrop={handleDrop}>{children}</UploadCollection>;
};
`})}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h1,{id:"more-examples",children:"More Examples"}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"simulate-upload",children:"Simulate Upload"}),`
`,e.jsx(i,{of:C}),`
`,e.jsx(n.h3,{id:"code",children:"Code"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const SimulateUploadComponent = () => {
  const [children, setChildren] = useState([
    <UploadCollectionItem
      key={'0'}
      file={null}
      fileName={'file-name.txt'}
      uploadState={UploadState.Ready}
      thumbnail={
        <img src="https://raw.githubusercontent.com/UI5/webcomponents/main/docs/images/UI5_logo_water.png" />
      }
    >
      <Text>Uploaded by: Susanne Schmitt · Uploaded On: 2019-04-20</Text>
    </UploadCollectionItem>
  ]);
  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    files.forEach((file) => {
      setChildren((prev) => [
        ...prev,
        <UploadCollectionItem
          key={file.name}
          file={file}
          fileName={file.name}
          uploadState={UploadState.Ready}
          thumbnail={<Icon name={documentIcon} />}
        >
          <Text>{\`Last modified: \${file.lastModifiedDate} · Size: \${(file.size / 1000).toFixed(2)}KB\`}</Text>
        </UploadCollectionItem>
      ]);
    });
  };
  const simulateUpload = () => {
    if (children.length > 0) {
      Children.forEach(children, (child, index) => {
        if (child.props.uploadState === UploadState.Ready) {
          let progress = 0;
          const recTimeout = () => {
            setTimeout(
              () => {
                progress += Math.floor(Math.random() * 4) + 1;
                setChildren((prev) => {
                  const updatedChildren = [...prev];
                  updatedChildren[index] = cloneElement(prev[index], {
                    uploadState: UploadState.Uploading,
                    progress: Math.min(progress, 100)
                  });
                  return updatedChildren;
                });
                if (progress < 100) {
                  recTimeout();
                } else {
                  setChildren((prev) => {
                    const updatedChildren = [...prev];
                    updatedChildren[index] = cloneElement(prev[index], {
                      uploadState: UploadState.Complete
                    });
                    return updatedChildren;
                  });
                }
              },
              Math.floor(Math.random() * (1000 - 100 + 1)) + 100
            );
          };
          recTimeout();
        }
      });
    }
  };
  return (
    <UploadCollection
      onDrop={handleDrop}
      header={
        <FlexBox alignItems={FlexBoxAlignItems.Center}>
          <Title>Start upload:</Title>
          <Button onClick={simulateUpload}>Upload!</Button>
        </FlexBox>
      }
    >
      {children}
    </UploadCollection>
  );
};
`})}),`
`,e.jsx(x,{children:h}),`
`,e.jsx(n.h2,{id:"uploadcollectionitem",children:"UploadCollectionItem"}),`
`,e.jsx(u,{of:r}),`
`,e.jsx(s,{metaOf:t,of:r}),`
`,e.jsx(c,{})]})}function re(o={}){const{wrapper:n}={...d(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(a,{...o})}):a(o)}export{re as default};
