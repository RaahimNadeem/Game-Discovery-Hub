import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const CardLoadingSkeleton = () => {
  return (
    <Card>
        <Skeleton height="200px"/>
        <CardBody>
            <SkeletonText height="170px" />
        </CardBody>
        
    </Card>
)
}

export default CardLoadingSkeleton