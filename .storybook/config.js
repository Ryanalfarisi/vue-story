import { configure } from '@storybook/vue';
import '../src/assets/css/new-index.css';
import 'vue-select/dist/vue-select.css';
import 'storybook-chromatic';

configure(require.context('../src', true, /\.stories\.js$/), module);

