import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from "@storybook/addon-knobs";
import { withInfo } from 'storybook-addon-vue-info';
import Pagination from '../components/Pagination.vue';

export const behaviorPagination = {
  type: 'light'
};

storiesOf('Pagination', module)
.addDecorator(withKnobs).addDecorator(withInfo)
  .add('Default', () => {
    return {
      components: { Pagination },
      template: `<Pagination :behaviorPagination="behaviorPagination"/>`,
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
  .add('Light Pagination', () => {
    return {
      components: { Pagination },
      template: `<Pagination :behaviorPagination="behaviorPagination"/>`,
      data: () => ({ behaviorPagination }),
      props: {
        behaviorPagination: {
          type: Object,
          default: object("behaviorPagination", { ...behaviorPagination, type: 'dark'})
        }
      }
    }
  },
  {
    info: {}
  })