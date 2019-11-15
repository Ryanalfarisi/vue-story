import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from "@storybook/addon-knobs";
import { withInfo } from 'storybook-addon-vue-info';
import Button from '../components/Button.vue';

export const behaviorButton = {
  shape: 'box',
  type: 'btn btn-default',
  title: 'Default'
};

storiesOf('Button', module)
.addDecorator(withKnobs).addDecorator(withInfo)
  .add('Button Default', () => {
    return {
      components: { Button },
      template: `<Button :behaviorButton="behaviorButton"/>`,
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
  .add('Button Primary', () => {
    return {
      components: { Button },
      template: `<Button :behaviorButton="behaviorButton"/>`,
      data: () => ({ behaviorButton: { ...behaviorButton, shape: 'box', type: 'btn btn-primary' } }),
    }
  },
  {
    info: {}
  })
  .add('Button Secondary', () => ({
    components: { Button },
    template: `<Button :behaviorButton="behaviorButton"/>`,
    data: () => ({ behaviorButton: { ...behaviorButton, shape: 'box', type: 'btn btn-secondary' } }),
  }),{
    info: {}
  })
  .add('Rounded Default', () => ({
    components: { Button },
    template: `<Button :behaviorButton="behaviorButton"/>`,
    data: () => ({ behaviorButton: { ...behaviorButton, shape: 'round', type: 'btn btn-default btn-rounded' } }),
  }),
  {
    info: {}
  })
  .add('Rounded Primary', () => ({
    components: { Button },
    template: `<Button :behaviorButton="behaviorButton"/>`,
    data: () => ({ behaviorButton: { ...behaviorButton, shape: 'round', type: 'btn btn-primary btn-rounded' } }),
  }),
  {
    info: {}
  })
  .add('Rounded Secondary', () => ({
    components: { Button },
    template: `<Button :behaviorButton="behaviorButton"/>`,
    data: () => ({ behaviorButton: { ...behaviorButton, shape: 'round', type: 'btn btn-secondary btn-rounded' } }),
  }),
  {
    info: {}
  })
  .add('Button No Style', () => ({
    components: { Button },
    template: `<Button :behaviorButton="behaviorButton"/>`,
    data: () => ({ behaviorButton: { ...behaviorButton, shape: 'box', type: 'btn nostyle' } }),
  }),
  {
    info: {}
  })
  .add('Link', () => ({
    components: { Button },
    template: `<Button :behaviorButton="behaviorButton"/>`,
    data: () => ({ behaviorButton: { ...behaviorButton, shape: 'box', type: 'btn link' } }),
  }),
  {
    info: {}
  })
