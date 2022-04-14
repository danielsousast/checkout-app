import React from 'react';
import {HightlightCardContainer, HightlightCard} from './styles';

type SkeletonProps = {
  show?: boolean;
};

const NewSectionSkeleton: React.FC<SkeletonProps> = () => {
  return (
    <HightlightCardContainer>
      <HightlightCard />
      <HightlightCard />
    </HightlightCardContainer>
  );
};

export default NewSectionSkeleton;
