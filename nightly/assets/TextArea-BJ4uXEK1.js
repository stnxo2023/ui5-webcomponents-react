import{j as n}from"./iframe-eEgnsybz.js";import{useMDXComponents as a}from"./index-KUh3EncO.js";import{M as p,C as r}from"./blocks-C6o1VobD.js";import"./Tag-CyCgeEFX.js";import"./index-DlBhGBWU.js";import{C as c}from"./ControlsWithNote-eCm13KUA.js";import{D as l}from"./DocsHeader-BfTikCOy.js";import{F as u}from"./CommandsAndQueries-Bkg2fbFD.js";import{C as o,D as i,W as m}from"./TextArea.stories-HpvdoZtE.js";import"./preload-helper-PPVm8Dsz.js";import"./information-CKacNM7A.js";import"./sys-enter-2-D0fhmdQp.js";import"./alert-CxkpN3m7.js";import"./index-Pa5s-fex.js";import"./index-0PjuM5S8.js";import"./Link-BuGrrtP2.js";import"./copy-z_bq9S7h.js";import"./copy-7FG8PsWo.js";import"./GitHub-Mark-BfP3Ty1_.js";import"./TableOfContent-DXjRwDfa.js";import"./index-D9oALoTs.js";import"./index-BwSVcTHk.js";import"./index-yhFX9aug.js";import"./index-Dc3QGU-g.js";import"./index-CGhTEkOT.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CH2VPx4y.js";import"./addCustomCSSWithScoping-DKRk5X62.js";import"./TextArea-ZdJK7yh1.js";import"./ValueStateMessage.css-qrxzD_3f.js";import"./parameters-bundle.css-UR8Qxv08.js";import"./InvisibleMessage-2xnh5Mfi.js";import"./ToolbarButton-Po9_EpI-.js";import"./overflow-w37owxvG.js";import"./navigation-left-arrow-PYJa20Om.js";import"./navigation-right-arrow-U36zYERp.js";import"./ToolbarSpacer-MrgXEcz0.js";import"./ai-DmAvwQuj.js";import"./stop-DIOK88Qw.js";import"./index-B4VTghwc.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...a(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:o}),`
`,n.jsx(l,{of:o,experimental:!0}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h2,{id:"example",children:"Example"}),`
`,n.jsx(r,{of:i}),`
`,n.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,n.jsx(c,{of:i}),`
`,n.jsx(e.h2,{id:"textarea-with-fake-stream",children:"TextArea with Fake Stream"}),`
`,n.jsx(e.p,{children:"TextArea component implementing simple stream handling."}),`
`,n.jsx(r,{of:m}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"Show Static Code"}),n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { TextArea, TextAreaPropTypes } from '@ui5/webcomponents-ai-react';
import { Menu, MenuItem, MenuPropTypes } from '@ui5/webcomponents-react';
import { useEffect, useRef, useState, useTransition } from 'react';

type StartStreamOptions = {
  text: string;
  onComplete?: (fullText: string) => void;
  onProcessingComplete?: () => void;
};
export function useFakeStream(initialValue = '', typingDelay = 10, startingDelay = 1500) {
  const [value, setValue] = useState(initialValue);
  const [transitionIsPending, startTransition] = useTransition(); // active character updates
  const [isProcessing, setIsProcessing] = useState(false); // starting delay
  const [isTyping, setIsTyping] = useState(false); // actively typing characters
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isProcessingRef = useRef(isProcessing);
  const isTypingRef = useRef(isTyping);
  isProcessingRef.current = isProcessing;
  isTypingRef.current = isTyping;

  const startStream = ({ text, onComplete, onProcessingComplete }: StartStreamOptions) => {
    // Stop previous stream and timeout
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    setValue('');
    setIsProcessing(true);

    timeoutRef.current = setTimeout(() => {
      setIsProcessing(false);

      if (onProcessingComplete) {
        onProcessingComplete();
      }

      setIsTyping(true);
      let index = 0;

      intervalRef.current = setInterval(() => {
        if (index < text.length) {
          const nextChar = text[index];
          index++;

          startTransition(() => {
            setValue((prev) => prev + nextChar);
          });
        } else {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          setIsTyping(false);

          if (onComplete) {
            onComplete(text);
          }
        }
      }, typingDelay);
    }, startingDelay);
  };

  const stopStream = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsProcessing(false);
    setIsTyping(false);
  };

  return { value, transitionIsPending, isProcessing, isTyping, setValue, startStream, stopStream };
}

export function useStopStreamByESC(loading: boolean, stopStream: () => void, onStop?: () => void) {
  const loadingRef = useRef(loading);
  loadingRef.current = loading;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && loadingRef.current) {
        stopStream();
        if (onStop) {
          onStop();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [stopStream, onStop]);
}

const SAMPLE_TEXT =
  'Innovation managers operate with both creativity and business acumen, driving initiatives that cultivate an innovation-friendly culture, streamline the execution of new ideas, and ultimately unlock value for the organization and its customers.';

type VersionHistoryItem = {
  action: string;
  endAction: string;
  timestamp: string;
  value: string;
  promptDescription: string;
};

function AITextArea(props) {
  const { value, isTyping, isProcessing, setValue, startStream, stopStream } = useFakeStream();
  const [versionHistory, setVersionHistory] = useState<VersionHistoryItem[]>([]);
  const [currentHistoryIndex, setCurrentHistoryIndex] = useState(-1);
  const [promptDescription, setPromptDescription] = useState('');
  const currentActionRef = useRef<string>('');
  const isLoading = isProcessing || isTyping;

  const handleItemClick: MenuPropTypes['onItemClick'] = (e) => {
    const { action } = e.detail.item.dataset;
    if (isProcessing || !action) {
      return;
    }
    currentActionRef.current = action;
    setPromptDescription('Generating text...');
    startStream({
      text: SAMPLE_TEXT,
      onComplete: (fullText) => {
        setVersionHistory((prev) => [
          ...prev,
          {
            action,
            endAction: 'completed',
            timestamp: new Date().toISOString(),
            value: fullText,
            promptDescription: 'Generated text',
          },
        ]);
        setCurrentHistoryIndex((prev) => prev + 1);
        setValue('');
        setPromptDescription('');
      },
    });
  };

  const handleStopGeneration: TextAreaPropTypes['onStopGeneration'] = () => {
    stopStream();
    handleStop();
  };

  const handleStop = () => {
    setVersionHistory((prev) => [
      ...prev,
      {
        action: currentActionRef.current,
        endAction: 'stopped',
        timestamp: new Date().toISOString(),
        value: value,
        promptDescription: 'Generated text (stopped)',
      },
    ]);
    setCurrentHistoryIndex((prev) => prev + 1);
    setValue('');
    setPromptDescription('');
  };

  const handleVersionChange: TextAreaPropTypes['onVersionChange'] = (e) => {
    setCurrentHistoryIndex((prev) => (e.detail.backwards ? prev - 1 : prev + 1));
    setValue('');
  };

  const handleInput: TextAreaPropTypes['onInput'] = (e) => {
    setValue(e.target.value);
  };

  useStopStreamByESC(isLoading, stopStream, handleStop);

  return (
    <TextArea
      {...props}
      value={value || versionHistory[currentHistoryIndex]?.value || ''}
      currentVersion={currentHistoryIndex + 1}
      totalVersions={versionHistory.length}
      loading={isLoading}
      promptDescription={promptDescription || versionHistory[currentHistoryIndex]?.promptDescription || ''}
      onStopGeneration={handleStopGeneration}
      onVersionChange={handleVersionChange}
      onInput={handleInput}
      menu={
        <Menu onItemClick={handleItemClick}>
          <MenuItem text="Generate text" data-action="generate" />
        </Menu>
      }
    />
  );
}
`})})]}),`
`,n.jsx(u,{})]})}function $(t={}){const{wrapper:e}={...a(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{$ as default};
