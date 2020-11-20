import { Skeleton, Stack } from '@chakra-ui/react';
import React from 'react'

const SkeletonCom = () => {
  
    return (
      <div>
        <Stack>
          <Skeleton style={{ marginTop: "20px" }} height="140px" />
          <Skeleton height="140px" />
          <Skeleton height="140px" />
          <Skeleton height="140px" />
          <Skeleton height="140px" />
          <Skeleton height="140px" />
          <Skeleton height="140px" />
          <Skeleton height="140px" />
          <Skeleton height="140px" />
          <Skeleton height="140px" />
        </Stack>
      </div>
    );
}

export default SkeletonCom
