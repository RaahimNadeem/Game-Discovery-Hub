import { Badge } from '@chakra-ui/react';


interface Props {
    score: number; 
}

const CriticScore = ({ score }: Props) => {
    let color = score > 75 ? 'green' : score > 50 ? 'yellow' : 'red';
  return (
    <Badge fontSize='15px' colorScheme={color} paddingX={3} paddingY={1} borderRadius={5}>{score}</Badge>
    )
}

export default CriticScore