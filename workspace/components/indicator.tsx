import { useFetch } from "@/app/hooks/useFetch"
import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react"

const Indicator = () => {
  const { data, error, isLoading, isValidating } = useFetch('/api/watcher/84cbfa32/routine/416e4b00-a8db-4b54-afbc-82de0016edf0/indicator')
  if (error) return <div>falhou ao carregar</div>
  if (isLoading) return <div>carregando</div>

  return (
    <Grid templateColumns='repeat(5, 1fr)' gap={4}>
      {data.data.map((value: any, i: any) => {
        return (
          <GridItem colSpan={1} bg='#1f1e1e' p={7} key={i}>
            <Box>
              <Heading fontSize={'54px'} mb={3}>{value?.value}</Heading>
              <Text>{value?.name}</Text>
              <Text textColor={'gray'}>{value?.desc}</Text>
            </Box>
          </GridItem>
        )
      })}
    </Grid>
  )
}

export default Indicator
