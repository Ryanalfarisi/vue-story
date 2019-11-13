import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from "@storybook/addon-knobs";
import { withInfo } from 'storybook-addon-vue-info';
import Typecolor from '../components/Color.vue';

export const behaviorColor = {
  type: 'Typecolor'
};

storiesOf('Type Color', module)
.addDecorator(withKnobs).addDecorator(withInfo)
  .add('Typecolor', () => {
    return {
      components: { Typecolor },
      template: `<Typecolor :behaviorColor="behaviorColor"/>`,
      data: () => ({ behaviorColor }),
      props: {
        behaviorColor: {
          type: Object,
          default: object("behaviorColor", { ...behaviorColor })
        }
      }
    }
  },
  {
    info: {}
  })