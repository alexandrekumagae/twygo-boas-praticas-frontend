import { useState, useEffect } from "react"
import { Grid } from "@chakra-ui/react"
import { faker } from "@faker-js/faker"
import { Course } from "../../types/course"
import CourseCard from "../course-card/course-card"

export function CourseList() {
  const [courses, setCourses] = useState<Course[]>([])

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
    <>
      <Grid templateColumns='repeat(3, 1fr)' gap={4} minH="100vh">
        {courses.map(course => (
          <CourseCard course={course} />
        ))}
      </Grid>
    </>
  )
}