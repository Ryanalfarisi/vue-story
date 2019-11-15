import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from "@storybook/addon-knobs";
import { withInfo } from 'storybook-addon-vue-info';
import TypeNav from '../components/TypeNav.vue';

export const behaviorTypeNav = {
  type: 'TypeNav'
};

storiesOf('Navigation', module)
.addDecorator(withKnobs).addDecorator(withInfo)
  .add('Side Nav', () => {
    return {
      components: { TypeNav },
      template: `<TypeNav :behaviorTypeNav="behaviorTypeNav"/>`,
      props: {
        behaviorTypeNav: {
          type: Object,
          default: object("behaviorTypeNav", { ...behaviorTypeNav })
        }
      }
    }
  },
  {
    info: {}
  })