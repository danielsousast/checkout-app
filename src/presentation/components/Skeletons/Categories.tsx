import React from 'react';
import SkeletonPlaceholder from './SkeletonLoader';

type SkeletonProps = {
  show?: boolean;
  children: JSX.Element;
};

const CategoriesSkeleton: React.FC<SkeletonProps> = ({show, children}) => {
  if (show) {
    return (
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item width={500} height={55} marginTop={0} />
      </SkeletonPlaceholder>
    );
  }

  return children;
};

export default CategoriesSkeleton;
