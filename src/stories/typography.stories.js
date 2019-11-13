import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from "@storybook/addon-knobs";
import { withInfo } from 'storybook-addon-vue-info';
import Typography from '../components/Typography.vue';

export const behaviorTypo = {
  type: 'Typography'
};

storiesOf('Typo', module)
.addDecorator(withKnobs).addDecorator(withInfo)
  .add('Typography', () => {
    return {
      components: { Typography },
      template: `<Typography :behaviorTypo="behaviorTypo"/>`,
      data: () => ({ behaviorTypo }),
      props: {
        behaviorTypo: {
          type: Object,
          default: object("behaviorTypo", { ...behaviorTypo })
        }
      }
    }
  },
  {
    info: {}
  })
  
