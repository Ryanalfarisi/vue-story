import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from "@storybook/addon-knobs";
import { withInfo } from 'storybook-addon-vue-info';
import Dashboard from '../components/Dashboard.vue';

storiesOf('Dashboard', module)
.addDecorator(withInfo).addDecorator(withKnobs)
  .add('Index', () => {
    return {
      components: { Dashboard },
      template: `<Dashboard />`
    }
  },
  {
    info: {}
  })
