import React from 'react';
import {useTheme} from 'styled-components/native';
import SkeletonPlaceholder from './SkeletonLoader';

type SkeletonProps = {
  show?: boolean;
  children: JSX.Element;
};

const CategoriesSkeleton: React.FC<SkeletonProps> = ({show, children}) => {
  const {colors} = useTheme();

  if (show) {
    return (
      <SkeletonPlaceholder
        backgroundColor={colors.skeletonBackground}
        highlightColor={colors.skeletonHighlight}>
        <SkeletonPlaceholder.Item width={500} height={55} marginTop={0} />
      </SkeletonPlaceholder>
    );
  }

  return children;
};

export default CategoriesSkeleton;
