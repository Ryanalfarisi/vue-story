import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from "@storybook/addon-knobs";
import { withInfo } from 'storybook-addon-vue-info';
import InputText from '../components/InputText.vue';

export const behaviorInput = {
  type: 'disabled',
  text: 'Enter text here'
};

storiesOf('Input Text', module)
.addDecorator(withKnobs).addDecorator(withInfo)
  .add('Disabled', () => {
    return {
      components: { InputText },
      template: `<input-text :behaviorInput="behaviorInput"/>`,
      props: {
        behaviorInput: {
          type: Object,
          default: object("behaviorInput", { ...behaviorInput })
        }
      }
    }
  },
  {
    info: {}
  })
  .add('Active', () => {
    return {
      components: { InputText },
      template: `<input-text :behaviorInput="behaviorInput"/>`,
      data: () => ({ behaviorInput: { ...behaviorInput, type: 'active'} }),
    }
  },
  {
    info: {}
  })
  .add('Primary', () => {
    return {
      components: { InputText },
      template: `<input-text :behaviorInput="behaviorInput"/>`,
      data: () => ({ behaviorInput: { ...behaviorInput, type: 'input-primary'} }),
    }
  },
  {
    info: {}
  })