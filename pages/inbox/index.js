import { Box, Center, Container, Flex, Text } from '@chakra-ui/layout'
import { Table, TableCaption, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/table'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../../common/Navbar'


export default function Home(props) {
  return (
    <>
      <Head>
        <title>Demo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar></Navbar>
        <Container m={0} p={0} >
          <Flex>
            <Box bg="red" h="100vh" w="20vw" minW="200px"></Box>
            <Box bg="black" h="100vh" w="80vw" minW="80vw" p={4} >
              <Text color="red" fontSize="3xl">Inbox</Text>
              <Table variant="simple" color="red">
                <TableCaption>{props.data.activity}</TableCaption>
                <Thead>
                  <Tr>

                    <Th>Name</Th>

                  </Tr>
                </Thead>
                <Tbody>
                  {props.info.map(x => {
                    return (
                    <Tr key={x}>
                      <Td>
                        {x}
                      </Td>
                    </Tr>)
                  })}

                </Tbody>

              </Table>
            </Box>
          </Flex>
        </Container>
      </main>
    </>
  )
}



export async function getServerSideProps(context) {
  const res = await fetch('https://www.boredapi.com/api/activity');
  const data = await res.json();
  
  return {
    props: {
      data,
      info:[1,2,3]
    }
  }
}