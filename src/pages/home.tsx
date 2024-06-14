import { Box, Container, Heading } from "@chakra-ui/react"

import { CourseList } from "../features/courses"

export default function Home() {
  return (
    <Box bgColor='#F1F3F6' pb={8}>
      <Container maxW="container.lg">
        <Box py={4}>
          <Heading as="h1" fontSize='2xl' fontWeight='bold'>🦉 Twygers School</Heading>
        </Box>

        <CourseList />
      </Container>
    </Box>
  )
}
