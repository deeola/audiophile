
const customViewports = {
  Mobile: {
    name: 'Mobile',
    styles: {
      width: '490px',
      height: '963px',
    },
  },
  Tablet: {
    name: 'Tablet',
    styles: {
      width: '802px',
      height: '801px',
    },
  },
  Laptop: {
    name: 'Laptop',
    styles: {
      width: '1080px',
      height: '801px',
    },
  },
  Desktop: {
    name: 'Desktop',
    styles: {
      width: '1180px',
      height: '801px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  viewport: { viewports: customViewports },
}