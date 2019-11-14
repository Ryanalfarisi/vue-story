import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from "@storybook/addon-knobs";
import { withInfo } from 'storybook-addon-vue-info';
import Dashboard from '../components/Dashboard.vue';

export const behaviorDashboard = {
  type: 'card primary',
  title: 'Example title default',
  subTitle: 'Example Paragraph'
};

storiesOf('Dashboard', module)
.addDecorator(withInfo).addDecorator(withKnobs)
  .add('Index', () => {
    return {
      components: { Dashboard },
      template: `<Dashboard :behaviorDashboard="behaviorDashboard"/>`,
      data: () => ({ behaviorDashboard }),
      props: {
        behaviorDashboard: {
          type: Object,
          default: object("behaviorDashboard", { ...behaviorDashboard })
        }
      }
    }
  },
  {
    info: {}
  })
