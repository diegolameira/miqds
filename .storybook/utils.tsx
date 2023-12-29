/* eslint-disable @typescript-eslint/naming-convention */
import { Story } from '@storybook/blocks';
import * as React from 'react';

const cardStyles: React.CSSProperties = {
  minHeight: '4rem',
  margin: '25px 0 40px',
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid hsla(203, 50%, 30%, 0.15)',
  padding: '1rem',
  borderRadius: '4px',
  boxShadow: 'rgba(0, 0, 0, 0.10) 0 1px 3px 0',
};

export const Grid = ({ of: components }: any) => {
  const { __namedExportsOrder, default: Default, ...stories } = components;
  return (
    <div
      style={{
        ...cardStyles,
        flexDirection: 'unset',
        backgroundColor: 'hsla(var(--background))',
      }}
    >
      {Object.values(stories)
        .sort((a, b) => a.sort - b.sort)
        .map((component: any, index: any) => (
          <div className="grid-item" style={{ flexGrow: 1 }} key={index}>
            <Story of={component} />
          </div>
        ))}
    </div>
  );
};

export const RadiiTable = ({ of: components }: any) => {
  const { __namedExportsOrder, default: Default, ...values } = components;
  return (
    <div style={cardStyles}>
      {Object.entries(values).map(([key, component], index: any) => (
        <div
          key={index}
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '16px',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: '#333',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontWeight: 600,
              flex: 0.3,
            }}
          >
            {key}
          </div>
          <div style={{ flex: 0.5 }}>{component.value}</div>
          <div style={{ flex: 2 }}>{component.description}</div>
          <div>
            <div
              style={{
                width: '100px',
                height: '100px',
                borderRadius: component.value,
                border: '1px solid #ccc',
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const ShadowsTable = ({ of: components }: any) => {
  const { __namedExportsOrder, default: Default, ...values } = components;
  return (
    <div style={cardStyles}>
      {Object.entries(values).map(([key, component], index: any) => (
        <div
          key={index}
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '16px',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: '#333',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontWeight: 600,
              flex: 0.3,
            }}
          >
            {key}
          </div>
          <div style={{ flex: 1 }}>{component.value}</div>
          <div style={{ flex: 1 }}>{component.description}</div>
          <div>
            <div
              style={{
                width: '100px',
                height: '100px',

                borderRadius: '13px',
                boxShadow: component.value,
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const TypographyTable = ({ of: components }) => {
  const headers = [
    'Style',
    'Size',
    'Line-height',
    'Letter spacing',
    'Weight',
    'Typeface',
  ];
  const { __namedExportsOrder, default: Default, ...values } = components;
  return (
    <div style={cardStyles}>
      <table>
        <thead>
          <tr>
            {headers.map((header: any, index: any) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(values).map(([key, component], index: any) => (
            <tr key={index}>
              <td
                style={{
                  ...component,
                }}
              >
                {key}
              </td>
              <td>{component.fontSize}</td>
              <td>{component.lineHeight}</td>
              <td>{component.letterSpacing}</td>
              <td>{component.fontWeights.join(', ')}</td>
              <td>{component.fontFamily}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const SpacingTable = ({ of: components }) => {
  const headers = ['Name', 'Value', 'Preview'];
  const { __namedExportsOrder, default: Default, ...values } = components;
  return (
    <div style={cardStyles}>
      <table>
        <thead>
          <tr>
            {headers.map((header: any, index: any) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(values).map(([key, value], index: any) => (
            <tr key={index}>
              <td>{key}</td>
              <td>{value}</td>
              <td>
                <div
                  style={{
                    background: 'hsla(var(--color-interaction-primary))',
                    width: value,
                    height: '30px',
                  }}
                ></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
