import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from "@storybook/addon-knobs";
import { withInfo } from 'storybook-addon-vue-info';
import Card from '../components/Card.vue';

export const behaviorCard = {
  type: 'card-default',
  title: 'Example title default',
  subTitle: 'Example Paragraph'
};

storiesOf('Card', module)
.addDecorator(withKnobs).addDecorator(withInfo)
.add('Card Default', () => {
    return {
      components: { Card },
      template: `<Card :behaviorCard="behaviorCard"/>`,
      data: () => ({ behaviorCard }),
      props: {
        behaviorCard: {
          type: Object,
          default: object("behaviorCard", { ...behaviorCard })
        }
      }
    }
  },
  {
    info: {}
  })
  .add('Card Primary', () => {
    return {
      components: { Card },
      template: `<Card :behaviorCard="behaviorCard"/>`,
      data: () => ({ behaviorCard: { ...behaviorCard, title: 'Example Card Primary', subTitle: 'Example paragraf Primary', type: 'card-primary'} }),
    }
  },
  {
    info: {}
  })
