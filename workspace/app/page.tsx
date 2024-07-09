"use client"

import { Badge, Box, Container, Heading, Input, Link, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box bg='#121212' minH={'100vh'}>
      <Box bg={'crimson'} h={2} />
      <Container maxW='8xl' textColor={'white'} py={7}>
        <Box
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'space-between'}
        >
          <Heading mt={2}>Welcome to outis</Heading>
          <Input variant='flushed' colorScheme={'blackAlpha'} placeholder='Find the routine' maxW={350} size={'lg'} />
        </Box>

        <Box>
          {[1, 2, 3, 4, 5, 3, 1, 1, 1, 1].map((v) => (
            <Box
              mt={2}
              bg='#1f1e1e'
              p={7}
              display={'flex'}
              flexDirection={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}
            >
              <Box>
                <Box>
                  <Badge colorScheme={'gray'}>wid: <Link href="/w/3ed4bbc9-ab67-402f-82c1-0fdbd004afd6/r/5b15145b-df20-478d-bcc1-9dd30a451ad0">952cbe15-1e9f-4af8-89e8-bf49df95346e</Link></Badge>
                  {/* <Badge variant={'solid'} colorScheme={'green'} ml={1}>state: running</Badge> */}
                  <Heading fontSize={24} my={2} maxW={650}>Generators on the Internet as necessary</Heading>
                </Box>
              </Box>

              <Box display={'flex'} gap={12}>
                <Box>
                  <Heading fontSize={'24px'} mb={3}>{v}s</Heading>
                  <Text>Total requests</Text>
                </Box>

                <Box>
                  <Heading fontSize={'24px'} mb={3}>0.80ms</Heading>
                  <Text>Average latency</Text>
                </Box>

                <Box>
                  <Heading fontSize={'24px'} mb={3}>0.61%</Heading>
                  <Text>Error percentage</Text>
                </Box>

              </Box>
            </Box>
          ))}
        </Box>

      </Container>
    </Box>
  )
}
