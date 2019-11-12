import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from "@storybook/addon-knobs";
import { withInfo } from 'storybook-addon-vue-info';
import Card from '../components/Card.vue';

export const behaviorCard = {
  type: 'card primary',
  title: 'Example title default',
  subTitle: 'Example Paragraph'
};
const stories = storiesOf('Card', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withInfo);

stories.addParameters({ component: Card })
  .add('Card Primary', () => {
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
  .add('Card Secondary', () => {
    return {
      components: { Card },
      template: `<Card :behaviorCard="behaviorCard"/>`,
      data: () => ({ behaviorCard: { ...behaviorCard, title: 'Example Card Primary', subTitle: 'Example paragraf Primary', type: 'card secondary'} }),
    }
  },
  {
    info: {}
  })
