import checkPropTypes from 'check-prop-types';

export const findByTestAttr = (component, attr) =>
  component.find(`[data-testid="${attr}"]`);

export const checkProps = (component, expectedProps) =>
  checkPropTypes(
    component.propTypes,
    expectedProps,
    'props',
    component.name,
  );
