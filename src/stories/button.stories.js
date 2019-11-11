import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from "@storybook/addon-knobs";
import { withInfo } from 'storybook-addon-vue-info';
import Button from '../components/Button.vue';

export const behaviorButton = {
  shape: 'box',
  type: 'default',
  title: 'Default'
};
const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);
stories.addDecorator(withInfo);

stories.addParameters({ component: Button })
  .add('Box Default', () => {
    return {
      components: { Button },
      template: `<Button :behaviorButton="behaviorButton"/>`,
      data: () => ({ behaviorButton }),
      props: {
        behaviorButton: {
          type: Object,
          default: object("behaviorButton", { ...behaviorButton })
        }
      }
    }
  },
  {
    info: {}
  })
  .add('Box Link', () => {
    return {
      components: { Button },
      template: `<Button :behaviorButton="behaviorButton"/>`,
      data: () => ({ behaviorButton: { ...behaviorButton, shape: 'box', type: 'link' } }),
    }
  },
  {
    info: {}
  })
  .add('Box Primary', () => ({
    components: { Button },
    template: `<Button :behaviorButton="behaviorButton"/>`,
    data: () => ({ behaviorButton: { ...behaviorButton, shape: 'box', type: 'primary' } }),
  }),{
    info: {}
  })
  .add('Round Default', () => ({
    components: { Button },
    template: `<Button :behaviorButton="behaviorButton"/>`,
    data: () => ({ behaviorButton: { ...behaviorButton, shape: 'round', type: 'default' } }),
  }),
  {
    info: {}
  })
  .add('Round Link', () => ({
    components: { Button },
    template: `<Button :behaviorButton="behaviorButton"/>`,
    data: () => ({ behaviorButton: { ...behaviorButton, shape: 'round', type: 'link' } }),
  }),
  {
    info: {}
  })
  .add('Round Primary', () => ({
    components: { Button },
    template: `<Button :behaviorButton="behaviorButton"/>`,
    data: () => ({ behaviorButton: { ...behaviorButton, shape: 'round', type: 'primary' } }),
  }),
  {
    info: {}
  })
