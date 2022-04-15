import React from 'react';
import SkeletonPlaceholder from './SkeletonLoader';

type SkeletonProps = {
  show?: boolean;
  children: JSX.Element;
};

const SectionSkeleton: React.FC<SkeletonProps> = ({show, children}) => {
  if (show) {
    return (
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item width={600} height={237} />
        <SkeletonPlaceholder.Item width={500} height={95} marginTop={12} />
      </SkeletonPlaceholder>
    );
  }

  return children;
};

export default SectionSkeleton;
