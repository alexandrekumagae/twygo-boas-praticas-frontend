import { Link } from "react-router-dom";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { Card, CardBody, Stack, Heading, CardFooter, Button, Image, Text } from "@chakra-ui/react";
import { Course } from "../../types/course";

interface CourseCardProps {
  course: Course
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Link to={`/curso/${course.id}`} key={course.id}>
      <Card key={course.id} maxW='sm' height="100%">
        <CardBody pb={0}>
          <Image
            src={course.image}
            alt='Course Image'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{course.title}</Heading>
            <Text>
              {course.description}
            </Text>
          </Stack>
        </CardBody>
        
        <CardFooter>
          <Button variant='solid' colorScheme='purple'>
            <TriangleDownIcon transform='rotate(270deg)' />
            <Text ml={2}>Assistir curso</Text>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}