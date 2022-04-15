import React from 'react';
import {useTheme} from 'styled-components/native';
import SkeletonPlaceholder from './SkeletonLoader';

type SkeletonProps = {
  show?: boolean;
  children: JSX.Element;
};

const SectionSkeleton: React.FC<SkeletonProps> = ({show, children}) => {
  const {colors} = useTheme();

  if (show) {
    return (
      <SkeletonPlaceholder
        backgroundColor={colors.skeletonBackground}
        highlightColor={colors.skeletonHighlight}>
        <SkeletonPlaceholder.Item width={600} height={237} />
        <SkeletonPlaceholder.Item width={500} height={95} marginTop={12} />
      </SkeletonPlaceholder>
    );
  }

  return children;
};

export default SectionSkeleton;
