import Enzyme from 'enzyme';
import EnzymeAadapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new EnzymeAadapter(),
  disableLifecycleMethods: true,
});
