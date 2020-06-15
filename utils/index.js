export const findByTestAttr = (component, attr) =>
  component.find(`[data-testid="${attr}"]`);
