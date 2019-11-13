import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from "@storybook/addon-knobs";
import { withInfo } from 'storybook-addon-vue-info';
import Pagination from '../components/Pagination.vue';

export const behaviorPagination = {
  type: 'Pagination'
};

storiesOf('Pagination', module)
.addDecorator(withKnobs).addDecorator(withInfo)
  .add('Light Pagination', () => {
    return {
      components: { Pagination },
      template: `<Pagination :behaviorColor="behaviorPagination"/>`,
      data: () => ({ behaviorPagination }),
      props: {
        behaviorPagination: {
          type: Object,
          default: object("behaviorPagination", { ...behaviorPagination })
        }
      }
    }
  },
  {
    info: {}
  })