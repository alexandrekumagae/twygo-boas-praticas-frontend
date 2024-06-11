import { useEffect, useState } from "react";
import { AspectRatio, Box, Button, Card, CardBody, Container, Flex, Grid, HStack, Heading, Progress, Text, VStack } from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import { ChevronLeftIcon } from "@chakra-ui/icons";

interface CourseProps {
  id: string
  image: string
  title: string
  description: string
}

export function CourseDetail() {
  const [course, setCourse] = useState<CourseProps>()

  async function fakeFetch() {
    const fakeCourses = {
      id: faker.string.uuid(),
      image: faker.image.urlLoremFlickr({ category: 'book'}),
      title: `Curso de ${faker.commerce.department()}`,
      description: faker.lorem.paragraph(),
    }

    await new Promise(resolve => setTimeout(resolve, 500))

    setCourse(fakeCourses)
  }

  useEffect(() => {
    fakeFetch()
  }, [])

  return (
    <Box>
      <Box py={4} bgColor='rgb(239, 241, 245)'>
        <Container maxW="container.lg">
          <Flex gap={8} alignItems="center">
            <Button variant='solid' colorScheme='purple' onClick={() => history.go(-1)}>
              <ChevronLeftIcon />
              <Text ml={2}>Voltar</Text>
            </Button>
            <Heading as="h1" fontSize='1xl' fontWeight='bold'>{course?.title}</Heading>
          </Flex>
        </Container>
      </Box>

      <Container maxW="container.lg">
        <Grid templateColumns="0.65fr 0.35fr" py={8} gap={8}>
          <Box>
            <AspectRatio maxW='100%' ratio={4/3}>
              <iframe
                title='naruto'
                src='https://www.youtube.com/embed/QhBnZ6NPOY0'
                allowFullScreen
              />
            </AspectRatio>
          </Box>

          <VStack gap={4}>
            <Box>
              <Card>
                <CardBody>
                  <HStack spacing={4}>
                    <Box>
                      <Text>Progresso geral no curso</Text>
                    </Box>
                    <Box w='60px'>
                      <Progress hasStripe value={20} />
                    </Box>
                    <Box>
                      <Text>20%</Text>
                    </Box>
                  </HStack>
                </CardBody>
              </Card>
            </Box>

            <VStack width="100%">
              <Box width="100%">
                <Card>
                  <CardBody>
                    <Text>Módulo 1</Text>
                  </CardBody>
                </Card>
              </Box>
            </VStack>
          </VStack>
        </Grid>
      </Container>
    </Box>
  )
}