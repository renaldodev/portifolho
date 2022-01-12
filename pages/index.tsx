import type { NextPage } from 'next'
import {Text,Heading} from '@chakra-ui/react'
import ParticlesBaner from '../components/ParticlesBaner'
import Banner from '../components/Banner'


const Home: NextPage = () => {
  return (
    <>
      <Banner justify={'center'} align={'center'}>
        <Text>Renaldo mateus</Text>
        <Heading color="black" size='3xl' fontWeight={'extrabold'}>Renaldo Mateus</Heading>
     <ParticlesBaner/> 
      </Banner>
    </>
  )
}

export default Home
