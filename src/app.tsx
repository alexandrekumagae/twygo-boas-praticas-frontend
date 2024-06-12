import { useEffect, useState } from "react"
import { Box, Button, Card, CardBody, CardFooter, Container, Grid, Heading, Icon, Image, Stack, Text } from "@chakra-ui/react"
import { faker } from '@faker-js/faker/locale/pt_BR'
import { TriangleDownIcon } from "@chakra-ui/icons"
import { Link } from "react-router-dom"

interface CourseProps {
  id: string
  image: string
  title: string
  description: string
}

export function App() {
  const [courses, setCourses] = useState<CourseProps[]>([])

  async function fakeFetch() {
    const fakeCourses = Array.from({ length: 12 }, () => ({
      id: faker.string.uuid(),
      image: faker.image.urlLoremFlickr({ category: 'courses'}),
      title: `Curso sobre ${faker.commerce.department()}`,
      description: faker.lorem.paragraph(),
    }))

    await new Promise(resolve => setTimeout(resolve, 500))

    setCourses(fakeCourses)
  }

  useEffect(() => {
    fakeFetch()
  }, [])

  return (
    <Box bgColor='#F1F3F6' pb={8}>
      <Container maxW="container.lg">
        <Box py={4}>
          <Heading as="h1" fontSize='2xl' fontWeight='bold'>🦉 Twygers School</Heading>
        </Box>

        <Grid templateColumns='repeat(3, 1fr)' gap={4} minH="100vh">
          {courses.map(course => (
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
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
