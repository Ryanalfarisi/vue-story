import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from "@storybook/addon-knobs";
import { withInfo } from 'storybook-addon-vue-info';
import Typography from '../components/Typography.vue';

export const behaviorTypo = {
  type: 'card primary',
  title: 'Example title default',
  subTitle: 'Example Paragraph'
};

storiesOf('Typo', module)
.addDecorator(withKnobs).addDecorator(withInfo)
  .add('Card Primary', () => {
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
  .add('Card Secondary', () => {
    return {
      components: { behaviorTypo },
      template: `<Typography :behaviorTypo="behaviorTypo"/>`,
      data: () => ({ behaviorTypo: { ...behaviorTypo, title: 'Example Card Primary', subTitle: 'Example paragraf Primary', type: 'card secondary'} }),
    }
  },
  {
    info: {}
  })
