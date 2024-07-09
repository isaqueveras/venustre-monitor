'use client'

import React, { useState } from 'react';

import {
  Badge,
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Grid,
  GridItem,
  Link,
  Progress,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure
} from '@chakra-ui/react'

import RoutineDetails from './routine-datails';
import Indicator from './indicator';
import Histogram from './histogram';

export default function Dashboard({ watcher, isLoading }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [logID, setLogID] = useState('')

  function openModal(id: string) {
    setLogID(id)
    onOpen()
  }

  return (
    <Box bg='#121212' minH={'100vh'}>
      <Box bg={'crimson'} h={2} />

      <Container maxW='8xl' textColor={'white'} pb={7} mt={7}>
        <Grid templateColumns='repeat(4, 1fr)' gap={4}>
          {/* <GridItem colSpan={4} bg='#1f1e1e' p={7}>
            <Text>Voltar</Text>
            <Input placeholder='Select Date and Time' size='md' type='datetime-local' />
          </GridItem> */}

          {/* <GridItem rowSpan={10} colSpan={1} bg={'#1f1e1e'} p={7} maxH={'950px'}>
            <Heading fontSize={'20px'} mb={3}>{watcher?.name}</Heading>
            <Text textColor={'gray'}>{watcher?.desc}</Text>

            <Input placeholder='Search routine' mt={3} variant='unstyled' size='lg' />
            <Box borderBottom={'1px solid #262525'} mt={4} />

            <Box overflow={'auto'} maxH={'800px'}>
              {[1, 2, 3, 4, 5].map((variant) => (
                <Box
                  key={variant}
                  borderBottom={'1px solid #262525'}
                  py={4}
                  px={2}
                  _hover={{
                    bg: '#0f0f0f',
                    cursor: 'pointer'
                  }}
                >
                  <Text fontSize={'16px'} mb={1}>Routine {variant}</Text>
                  <Text textColor={'gray'}>Lorem Ipsum is simply dummy...</Text>
                </Box>
              ))}
            </Box>
          </GridItem> */}

          <GridItem colSpan={4} bg='#1f1e1e'>
            <Progress isAnimated={true} size='sm' colorScheme='green' bg={'#1f1e1e'} isIndeterminate={isLoading} />
            <RoutineDetails isLoading={isLoading} />

            <Box borderTop={'1px solid #262525'} p={7}>
              <Box display={'flex'} justifyContent={'space-between'}>
                <Box>
                  <Text fontSize={13} textColor={'gray'}>Created at</Text>
                  <Text fontSize={15} textColor={'whiteAlpha.800'}>02/05/2024 13:24</Text>
                </Box>
                <Box>
                  <Text fontSize={13} textColor={'gray'}>Last run</Text>
                  <Text fontSize={15} textColor={'whiteAlpha.800'}>02/05/2024 13:24</Text>
                </Box>
                <Box>
                  <Text fontSize={13} textColor={'gray'}>Interval</Text>
                  <Text fontSize={15} textColor={'whiteAlpha.800'}>2 minute</Text>
                </Box>
                <Box>
                  <Text fontSize={13} textColor={'gray'}>Load interval</Text>
                  <Text fontSize={15} textColor={'whiteAlpha.800'}>15 days</Text>
                </Box>
                <Box>
                  <Text fontSize={13} textColor={'gray'}>Hours</Text>
                  <Text fontSize={15} textColor={'whiteAlpha.800'}>0h - 6h</Text>
                </Box>
                <Box>
                  <Text fontSize={13} textColor={'gray'}>Path</Text>
                  <Text fontSize={15} textColor={'whiteAlpha.800'}>/etc/system/usr/example/memory/routines.go:10</Text>
                </Box>
              </Box>
            </Box>
          </GridItem>

          <GridItem colSpan={4}>
            <Grid templateColumns='repeat(5, 1fr)' gap={4}>
              <GridItem colSpan={1} bg='#1f1e1e' p={7}>
                <Indicator name={'Total requests'} desc={'Overall sum of count'} value={123} />
              </GridItem>
              <GridItem colSpan={1} bg='#1f1e1e' p={7}>
                <Indicator name={'Error requests'} desc={'Overall sum of count'} value={12} />
              </GridItem>
              <GridItem colSpan={1} bg='#1f1e1e' p={7}>
                <Indicator name={'Average latency'} desc={'General average of count'} value={"0.23s"} />
              </GridItem>
              <GridItem colSpan={1} bg='#1f1e1e' p={7}>
                <Indicator name={'Error percentage'} desc={'Overall error percentage'} value={"0.2%"} />
              </GridItem>
              <GridItem colSpan={1} bg='#1f1e1e' p={7}>
                <Indicator name={'Error percentage'} desc={'Overall error percentage'} value={"0.2%"} />
              </GridItem>
            </Grid>
          </GridItem>

          <GridItem colSpan={4} bg='#1f1e1e' p={7}>
            <Histogram />
          </GridItem>

          <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            size={'xl'}
          >
            <DrawerOverlay />
            <DrawerContent bg={'#1f1e1e'} textColor={'white'}>
              <DrawerCloseButton />
              <DrawerHeader>{logID} - Technology image collector - 19/05/2024 02:06</DrawerHeader>
              <DrawerBody>
                <TableContainer>
                  <Table variant={'striped'} colorScheme={'blackAlpha'}>
                    <Thead>
                      <Tr>
                        <Th textColor={'white'}>Type</Th>
                        <Th textColor={'white'}>Message</Th>
                        <Th textColor={'white'}>Timestamp</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>INFO</Td>
                        <Td>this is an information message</Td>
                        <Td>2024-05-05T14:47:16.084211061-03:00</Td>
                      </Tr>
                      <Tr>
                        <Td>ERROR</Td>
                        <Td>não consegui desbloquear a rotina :/</Td>
                        <Td>2024-05-05T14:47:16.084242814-03:00</Td>
                      </Tr>
                      <Tr>
                        <Td>DEBUG</Td>
                        <Td>Está funcionando aqui</Td>
                        <Td>2024-05-05T14:47:16.084239624-03:00</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </DrawerBody>
            </DrawerContent>
          </Drawer>

          <GridItem colSpan={4} bg='#1f1e1e' p={7}>
            <TableContainer>
              <Table variant={'striped'} colorScheme={'blackAlpha'}>
                <Thead>
                  <Tr>
                    <Th textColor={'white'}>Status</Th>
                    <Th textColor={'white'}>Identifier</Th>
                    <Th textColor={'white'}>Latency</Th>
                    <Th textColor={'white'}>Initialized</Th>
                    <Th textColor={'white'}>Terminated</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td><Badge variant='solid' px={2} colorScheme='green'>Success</Badge></Td>
                    <Td><Link colorScheme='teal' onClick={() => openModal('759a96ab')}>759a96ab</Link></Td>
                    <Td>1.32s</Td>
                    <Td>05/05/2014 14:47:16</Td>
                    <Td>05/05/2014 14:47:16</Td>
                  </Tr>
                  <Tr>
                    <Td><Badge variant='solid' px={2} colorScheme='red'>Failure</Badge></Td>
                    <Td><Link colorScheme='teal' onClick={() => openModal('a4f0c041')}>a4f0c041</Link></Td>
                    <Td>1s</Td>
                    <Td>05/05/2014 14:47:16</Td>
                    <Td>05/05/2014 14:47:16</Td>
                  </Tr>
                  <Tr>
                    <Td><Badge variant='solid' px={2} colorScheme='green'>Success</Badge></Td>
                    <Td><Link colorScheme='teal' onClick={() => openModal('bc2a5e66')}>bc2a5e66</Link></Td>
                    <Td>0.12ms</Td>
                    <Td>05/05/2014 14:47:16</Td>
                    <Td>05/05/2014 14:47:16</Td>
                  </Tr>
                  <Tr>
                    <Td><Badge variant='solid' px={2} colorScheme='red'>Failure</Badge></Td>
                    <Td><Link colorScheme='teal' onClick={() => openModal('2a7ddf6b')}>2a7ddf6b</Link></Td>
                    <Td>0.21312ms</Td>
                    <Td>05/05/2014 14:47:16</Td>
                    <Td>05/05/2014 14:47:16</Td>
                  </Tr>
                  <Tr>
                    <Td><Badge variant='solid' px={2} colorScheme='green'>Success</Badge></Td>
                    <Td><Link colorScheme='teal' onClick={() => openModal('288f7801')}>288f7801</Link></Td>
                    <Td>0.21312ms</Td>
                    <Td>05/05/2014 14:47:16</Td>
                    <Td>05/05/2014 14:47:16</Td>
                  </Tr>
                  <Tr>
                    <Td><Badge variant='solid' px={2} colorScheme='green'>Success</Badge></Td>
                    <Td><Link colorScheme='teal' onClick={() => openModal('587c0bf0')}>587c0bf0</Link></Td>
                    <Td>0.21312ms</Td>
                    <Td>05/05/2014 14:47:16</Td>
                    <Td>05/05/2014 14:47:16</Td>
                  </Tr>
                  <Tr>
                    <Td><Badge variant='solid' px={2} colorScheme='red'>Failure</Badge></Td>
                    <Td><Link colorScheme='teal' onClick={() => openModal('ea998d17')}>ea998d17</Link></Td>
                    <Td>0.21312ms</Td>
                    <Td>05/05/2014 14:47:16</Td>
                    <Td>05/05/2014 14:47:16</Td>
                  </Tr>
                  <Tr>
                    <Td><Badge variant='solid' px={2} colorScheme='green'>Success</Badge></Td>
                    <Td><Link colorScheme='teal' onClick={() => openModal('2b6c6fc2')}>2b6c6fc2</Link></Td>
                    <Td>0.21312ms</Td>
                    <Td>05/05/2014 14:47:16</Td>
                    <Td>05/05/2014 14:47:16</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </GridItem>
        </Grid>

        <GridItem colSpan={1} mt={3}>
          <Text>Outis Dashboard - v0.0.1</Text>
        </GridItem>
      </Container >
    </Box >
  )
}
