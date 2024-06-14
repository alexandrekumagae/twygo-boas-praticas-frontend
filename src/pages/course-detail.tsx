import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { faker } from "@faker-js/faker";
import { AspectRatio, Box, Button, Card, CardBody, Container, Flex, Grid, HStack, Heading, Progress, Text, VStack } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

interface ModuleProps {
  id: number
  title: string
  description: string
  video: string
}

interface CourseProps {
  id: string
  image: string
  title: string
  description: string
  modules: ModuleProps[]
}

let fakeModules: ModuleProps[] = []
for (let i = 1; i <= 7; i++) {
  fakeModules.push({
    id: i,
    title: `Módulo ${i}`,
    description: faker.lorem.paragraph(2),
    video: faker.helpers.arrayElement([
      "https://www.youtube.com/embed/c5HLA2jj4z0?si=LG5cFFUWAXumc7dj",
      "https://www.youtube.com/embed/FFM3dVYF2sc?si=u3WuQG0ld5rsLwks",
      "https://www.youtube.com/embed/SAE8tcpPry0?si=0K_oPVigSzScv44L"
    ])
  });
}

export default function CourseDetail() {
  const [course, setCourse] = useState<CourseProps>()
  const [currentModule, setCurrentModule] = useState<ModuleProps>(fakeModules[0])
  const [isLoading, setIsLoading] = useState(false)

  function handleLoadVideo(module: ModuleProps) {
    setIsLoading(true)

    setTimeout(() => {
      setCurrentModule(module);
      setIsLoading(false);
    }, 500);
  }

  async function fakeFetch() {
    const fakeCourses = {
      id: faker.string.uuid(),
      image: faker.image.urlLoremFlickr({ category: 'book'}),
      title: `Curso de ${faker.commerce.department()}`,
      description: faker.lorem.paragraph(),
      modules: fakeModules
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
        <Container maxW="container.xl">
          <Flex gap={8} alignItems="center">
            <Link to="/">
              <Button variant='solid' colorScheme='purple'>
                <ChevronLeftIcon />
                <Text ml={2}>Voltar</Text>
              </Button>
            </Link>
            <Heading as="h1" fontSize='1xl' fontWeight='bold'>{course?.title}</Heading>
          </Flex>
        </Container>
      </Box>

      <Container maxW="container.xl">
        <Grid templateColumns="0.65fr 0.35fr" py={8} gap={8}>
          <Box>
            {isLoading ? (
              <Flex justifyContent="center" alignItems="center" height="100%">
                <Text>Carregando...</Text>
              </Flex>
            ) : (
              <AspectRatio maxW='100%' ratio={5/3}>
                <iframe
                  title={course?.title}
                  src={currentModule.video}
                  allowFullScreen
                />
              </AspectRatio>
            )}
          </Box>

          <VStack gap={4}>
            <Box width="100%">
              <Card>
                <CardBody>
                  <HStack spacing={4}>
                    <Box>
                      <Text>Progresso geral no curso</Text>
                    </Box>
                    <Box w='35%'>
                      <Progress hasStripe value={20} />
                    </Box>
                    <Box>
                      <Text>20%</Text>
                    </Box>
                  </HStack>
                </CardBody>
              </Card>
            </Box>

            <Box maxH="62vh" overflowY="scroll" p={2}>
              <VStack width="100%" gap={4}>
                {course?.modules.map(module => (
                  <Box width="100%" key={module.id}>
                    <Card onClick={() => handleLoadVideo(module)} cursor="pointer">
                      <CardBody>
                        <Heading as="h3" fontSize="lg" mb={2}>{module.title}</Heading>
                        <Text fontSize="sm">{module.description}</Text>
                      </CardBody>
                    </Card>
                  </Box>
                ))}
              </VStack>
            </Box>
          </VStack>
        </Grid>
      </Container>
    </Box>
  )
}