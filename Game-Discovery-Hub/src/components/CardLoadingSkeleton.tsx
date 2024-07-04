import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const CardLoadingSkeleton = () => {
  return (
    <Card borderRadius={10} width='400px' height='380px' overflow="hidden">
        <Skeleton height="200px"/>
        <CardBody>
            <SkeletonText />
        </CardBody>
        
    </Card>
)
}

export default CardLoadingSkeleton