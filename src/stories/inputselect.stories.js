import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from "@storybook/addon-knobs";
import { withInfo } from 'storybook-addon-vue-info';
import InputSelect from '../components/InputSelect';

export const task = {
  id: '1',
  option: ['Number 1', 'Number 2', 'Number 3', 'Number 4', 'Number 5'],
};

export const methods = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

// const stories = storiesOf('InputSelect', module);
// stories.addDecorator(withKnobs);
// stories.addDecorator(withInfo);

storiesOf('InputSelect', module)
.addDecorator(withKnobs).addDecorator(withInfo)
  .add('Default', () => ({
      components: { InputSelect },
      template: `<input-select :task="task"/>`,
      data: () => ({ task }),
      props: {
        task: {
          type: Object,
          default: object("task", { ...task })
        }
      },
      methods
  }),
  {
    info: {
      summary : "Ini merupakan descriptsi dari code kami"
    }
  })