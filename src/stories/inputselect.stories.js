import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from "@storybook/addon-knobs";
import { withInfo } from 'storybook-addon-vue-info';
import InputSelect from '../components/InputSelect';

export const behaviorSelect = {
  prefix: 'default',
  option: ['number 1', 'number 2', 'number 3', 'number 4', 'number 5'],
  disabled: false
};

storiesOf('InputSelect', module)
.addDecorator(withInfo).addDecorator(withKnobs)
  .add('Default', () => ({
      components: { InputSelect },
      template: `<input-select :behaviorSelect="behaviorSelect"/>`,
      props: {
        behaviorSelect: {
          type: Object,
          default: object("behaviorSelect", { ...behaviorSelect })
        }
      }
  }),
  {
    info: {
    }
  })
  .add('Disable', () => ({
    components: { InputSelect },
    template: `<input-select :behaviorSelect="behaviorSelect"/>`,
    data: () => ({ behaviorSelect: { ...behaviorSelect, prefix: 'disable', disabled: true} }),
  }),
  {
    info: {
    }
  })
  .add('Primary', () => ({
    components: { InputSelect },
    template: `<input-select :behaviorSelect="behaviorSelect"/>`,
    data: () => ({ behaviorSelect: { ...behaviorSelect, prefix: 'primary'} }),
  }),
  {
    info: {
  }
  })