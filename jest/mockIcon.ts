// @providesModule mockIcon
// @ts-nocheck
import mockComponent from './mockComponent';

const mockIcon = (name: string): React.ReactNode => {
  const Icon = mockComponent(name || 'Icon');
  Icon.Button = mockComponent(name + '.Button' || 'Icon.Button');
  Icon.loadFont = jest.fn();

  return Icon;
};

export default mockIcon;
