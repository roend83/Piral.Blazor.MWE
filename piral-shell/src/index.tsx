import 'piral/polyfills';
import { renderInstance } from 'piral';
import { layout, errors } from './layout';
import { createBlazorApi } from 'piral-blazor';

// change to your feed URL here (either using feed.piral.cloud or your own service)
const feedUrl = 'https://feed.piral.cloud/api/v1/pilet/empty';

renderInstance({
  plugins: [
    createBlazorApi()
  ],
  layout,
  errors,
  requestPilets() {
    return fetch(feedUrl)
      .then(res => res.json())
      .then(res => res.items);
  },
});
