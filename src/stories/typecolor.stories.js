import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from "@storybook/addon-knobs";
import { withInfo } from 'storybook-addon-vue-info';
import TypeColor from '../components/TypeColor.vue';

export const behaviorColor = {
  type: 'TypeColor'
};

storiesOf('Type Color', module)
.addDecorator(withKnobs).addDecorator(withInfo)
  .add('TypeColor', () => {
    return {
      components: { TypeColor },
      template: `<TypeColor :behaviorColor="behaviorColor"/>`,
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