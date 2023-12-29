import { Decorator } from '@storybook/react';
import React, { useCallback, useRef } from 'react';

import { Theme, ThemeProvider } from '../src/components/theme';

const ThemeBlock = ({ children, style = {}, ...props }) => {
  const styles = {
    ...style,
    flexGrow: 1,
    overflow: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: 'hsla(var(--background))',
  };

  return (
    <div style={styles} {...props}>
      {children}
    </div>
  );
};

export const withTheme: Decorator = (
  StoryFn,
  { globals: { theme = Theme.System }, viewMode }
) => {
  const secondContainerRef = useRef<HTMLDivElement>(null);

  const firstBlockRef = useCallback(
    (node: any) => {
      if (node) {
        node.addEventListener('scroll', () => {
          if (secondContainerRef.current) {
            secondContainerRef.current.scrollTop = node.scrollTop;
          }
        });
      }
    },
    [secondContainerRef.current]
  );

  switch (theme as string) {
    case 'stackedHorizontally':
    case 'stackedVertically': {
      return (
        <ThemeProvider defaultTheme={Theme.Light}>
          <div
            className={`flex`}
            style={{
              margin: '-1rem',
              flexWrap: 'wrap',
              minHeight: viewMode == 'story' ? '100vh' : 'none',
              alignItems: 'stretch',
              flexDirection: theme == 'stackedHorizontally' ? 'row' : 'column',
            }}
          >
            <ThemeBlock ref={firstBlockRef} className="dark">
              <StoryFn />
            </ThemeBlock>
            <ThemeBlock ref={secondContainerRef} className="light">
              <StoryFn />
            </ThemeBlock>
          </div>
        </ThemeProvider>
      );
    }
    default: {
      return (
        <ThemeProvider defaultTheme={theme}>
          <ThemeBlock
            style={{
              minHeight: viewMode == 'story' ? 'calc(100vh - 40px)' : 'none',
            }}
          >
            <StoryFn />
          </ThemeBlock>
        </ThemeProvider>
      );
    }
  }
};

export const decorators = [withTheme];
