import React from "react";
import "./Elementary.css";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import {
    SimpleGrid,
} from '@chakra-ui/react'
import { Button, Box, Image } from "@chakra-ui/react";
import { Heading, Divider, Card, CardBody, Text } from "@chakra-ui/react";
import { useState } from "react";


export function Elementary(): JSX.Element {

    const [isOpenModal1, setIsOpenModal1] = useState(false);
    const [isOpenModal2, setIsOpenModal2] = useState(false);
    const [isOpenModal3, setIsOpenModal3] = useState(false);
    const [isOpenModal4, setIsOpenModal4] = useState(false);
    const [isOpenModal5, setIsOpenModal5] = useState(false);
    const [isOpenModal6, setIsOpenModal6] = useState(false);
    const [isOpenModal7, setIsOpenModal7] = useState(false);
    const [isOpenModal8, setIsOpenModal8] = useState(false);
    const [isOpenModal9, setIsOpenModal9] = useState(false);
    const [isOpenModal10, setIsOpenModal10] = useState(false);
    const [isOpenModal11, setIsOpenModal11] = useState(false);
    const [isOpenModal12, setIsOpenModal12] = useState(false);

    const openModal1 = () => setIsOpenModal1(true);
    const closeModal1 = () => setIsOpenModal1(false);

    const openModal2 = () => setIsOpenModal2(true);
    const closeModal2 = () => setIsOpenModal2(false);

    const openModal3 = () => setIsOpenModal3(true);
    const closeModal3 = () => setIsOpenModal3(false);

    const openModal4 = () => setIsOpenModal4(true);
    const closeModal4 = () => setIsOpenModal4(false);

    const openModal5 = () => setIsOpenModal5(true);
    const closeModal5 = () => setIsOpenModal5(false);

    const openModal6 = () => setIsOpenModal6(true);
    const closeModal6 = () => setIsOpenModal6(false);

    const openModal7 = () => setIsOpenModal7(true);
    const closeModal7 = () => setIsOpenModal7(false);

    const openModal8 = () => setIsOpenModal8(true);
    const closeModal8 = () => setIsOpenModal8(false);

    const openModal9 = () => setIsOpenModal9(true);
    const closeModal9 = () => setIsOpenModal9(false);

    const openModal10 = () => setIsOpenModal10(true);
    const closeModal10 = () => setIsOpenModal10(false);

    const openModal11 = () => setIsOpenModal11(true);
    const closeModal11 = () => setIsOpenModal11(false);

    const openModal12 = () => setIsOpenModal12(true);
    const closeModal12 = () => setIsOpenModal12(false);

    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
        />
    )
    const [overlay, setOverlay] = React.useState(<OverlayOne />)

    /*  
    <div className="menu" >
                <Menu>  
    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                              </MenuButton>
                            <MenuList>                    
                         <MenuItem><Link  activeClass = "active" onClick={closeMenu} to="addition" spy={true} smooth={true} offset={-50} duration={500}>Integer Addition</Link></MenuItem>
                        <MenuItem><Link onClick={closeMenu} to="subtraction" spy={true} smooth={true} offset={-50} duration={500}>Integer Subtraction</Link></MenuItem>
                        <MenuItem><Link onClick={closeMenu} to="multiplication" spy={true} smooth={true} offset={-50} duration={500}>Integer Multiplication</Link></MenuItem>
                        <MenuItem><Link onClick={closeMenu} to="division" spy={true} smooth={true} offset={-50} duration={500}>Integer Division</Link></MenuItem>
                        <MenuItem><Link onClick={closeMenu} to="exponents" spy={true} smooth={true} offset={-50} duration={500}>Exponents</Link></MenuItem>
                        <MenuItem><Link onClick={closeMenu} to="exponentadd" spy={true} smooth={true} offset={-50} duration={500}>Exponential Addition</Link></MenuItem>
                        
                        </div>*/

    return (
        <section id="elementary">
            <Heading className="header">
                Elementary
            </Heading>
            <ColorModeSwitcher justifySelf="flex-end"/>
            <Heading className="codeheader">Integer Addition</Heading>
            <section id="addition" className="cards">
                <SimpleGrid columns={2} spacing={10}>
                    <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='elevated' align="center" >
                        <CardBody>
                            <Text py='2'>
                                Example: 3+2+9+8
                            </Text>
                        </CardBody>
                    </Card>
                    <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='elevated' align="center">
                        <CardBody>
                            <div className="codeCardHeader"><Heading size='sm'>Code Examples:</Heading></div>
                            <SimpleGrid columns={2} spacing={10}>
                                <div>
                                    <Box height="30px">
                                        <Button onClick={() => {
                                            setOverlay(<OverlayOne />)
                                            openModal1()
                                        }}>Recursion</Button>
                                        <Modal isOpen={isOpenModal1} onClose={closeModal1}>
                                            {overlay}
                                            <ModalContent>
                                                <ModalHeader>Recursion Example:</ModalHeader>
                                                <ModalCloseButton />
                                                <ModalBody>
                                                    <Image src="https://i.imgur.com/chGLR38.png" alt="recursion ex" ></Image>
                                                </ModalBody>
                                                <ModalFooter>
                                                    <Button colorScheme='blue' mr={3} onClick={closeModal1}>
                                                        Close
                                                    </Button>
                                                </ModalFooter>
                                            </ModalContent>
                                        </Modal>
                                    </Box>
                                </div>
                                <Box height="30px">
                                    <Button onClick={() => {
                                        setOverlay(<OverlayOne />)
                                        openModal2()
                                    }}>For Loop</Button>
                                    <Modal isOpen={isOpenModal2} onClose={closeModal2}> {overlay}
                                        <ModalOverlay />
                                        <ModalContent>
                                            <ModalHeader>For Loop Example:</ModalHeader>
                                            <ModalCloseButton />
                                            <ModalBody>
                                                <Image src="https://i.imgur.com/AzqONcD.png" alt="for loop ex"></Image>
                                            </ModalBody>

                                            <ModalFooter>
                                                <Button colorScheme='blue' mr={3} onClick={closeModal2}>
                                                    Close
                                                </Button>
                                            </ModalFooter>
                                        </ModalContent>
                                    </Modal>
                                </Box>
                            </SimpleGrid>
                        </CardBody>
                    </Card>
                </SimpleGrid>
            </section>
            <Divider orientation='horizontal' />
            <Heading className="codeheader">Integer Subtraction</Heading>
            <section id="subtraction" className="cards">
                <SimpleGrid columns={2} spacing={10}>
                    <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='elevated' align="center">
                        <CardBody>
                            <Text py='2'>
                                Example: 40-21-5
                            </Text>
                        </CardBody>
                    </Card>
                    <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='elevated' align="center">
                        <CardBody>
                            <div className="codeCardHeader"><Heading size='sm'>Code Examples:</Heading></div>
                            <SimpleGrid columns={2} spacing={10}>
                                <Box height="30px">
                                    <Button onClick={() => {
                                        setOverlay(<OverlayOne />)
                                        openModal3()
                                    }}>Recursion</Button>

                                    <Modal isOpen={isOpenModal3} onClose={closeModal3}>{overlay}
                                        <ModalOverlay />
                                        <ModalContent>
                                            <ModalHeader>Recursion Example:</ModalHeader>
                                            <ModalCloseButton />
                                            <ModalBody>
                                                <Image src="" alt="recursion ex"></Image>
                                            </ModalBody>

                                            <ModalFooter>
                                                <Button colorScheme='blue' mr={3} onClick={closeModal3}>
                                                    Close
                                                </Button>
                                            </ModalFooter>
                                        </ModalContent>
                                    </Modal>
                                </Box>
                                <Box height="30px">
                                    <Button onClick={() => {
                                        setOverlay(<OverlayOne />)
                                        openModal4()
                                    }}>For Loop</Button>

                                    <Modal isOpen={isOpenModal4} onClose={closeModal4}> {overlay}
                                        <ModalOverlay />
                                        <ModalContent>
                                            <ModalHeader>For Loop Example:</ModalHeader>
                                            <ModalCloseButton />
                                            <ModalBody>
                                                <Image src="" alt="for loop ex"></Image>
                                            </ModalBody>

                                            <ModalFooter>
                                                <Button colorScheme='blue' mr={3} onClick={closeModal4}>
                                                    Close
                                                </Button>
                                            </ModalFooter>
                                        </ModalContent>
                                    </Modal>
                                </Box>
                            </SimpleGrid>
                        </CardBody>
                    </Card>
                </SimpleGrid>
            </section>
            <Divider  orientation='horizontal' />
            <Heading className="codeheader">Integer Multiplication</Heading>
            <section id="multiplication" className="cards">
                <SimpleGrid columns={2} spacing={10}>
                    <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='elevated' align="center">
                        <CardBody>
                            <Text py='2'>
                                Example: 9*8
                            </Text>
                        </CardBody>
                    </Card>
                    <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='elevated' align="center">
                        <CardBody>
                            <div className="codeCardHeader"><Heading size='sm'>Code Examples:</Heading></div>
                            <SimpleGrid columns={2} spacing={10}>
                                <Box height="30px">
                                    <Button onClick={() => {
                                        setOverlay(<OverlayOne />)
                                        openModal5()
                                    }}>Recursion</Button>

                                    <Modal isOpen={isOpenModal5} onClose={closeModal5}>{overlay}
                                        <ModalOverlay />
                                        <ModalContent>
                                            <ModalHeader>Recursion Example:</ModalHeader>
                                            <ModalCloseButton />
                                            <ModalBody>
                                                <Image src="" alt="recursion ex"></Image>
                                            </ModalBody>

                                            <ModalFooter>
                                                <Button colorScheme='blue' mr={3} onClick={closeModal5}>
                                                    Close
                                                </Button>
                                            </ModalFooter>
                                        </ModalContent>
                                    </Modal>
                                </Box>
                                <Box height="30px">
                                    <Button onClick={() => {
                                        setOverlay(<OverlayOne />)
                                        openModal6()
                                    }}>For Loop</Button>

                                    <Modal isOpen={isOpenModal6} onClose={closeModal6}> {overlay}
                                        <ModalOverlay />
                                        <ModalContent>
                                            <ModalHeader>For Loop Example:</ModalHeader>
                                            <ModalCloseButton />
                                            <ModalBody>
                                                <Image src="" alt="for loop ex"></Image>
                                            </ModalBody>

                                            <ModalFooter>
                                                <Button colorScheme='blue' mr={3} onClick={closeModal6}>
                                                    Close
                                                </Button>
                                            </ModalFooter>
                                        </ModalContent>
                                    </Modal>
                                </Box>
                            </SimpleGrid>
                        </CardBody>
                    </Card>
                </SimpleGrid>
            </section >
            <Divider  orientation='horizontal' />
            <Heading className="codeheader">Integer Division</Heading>
            <section id="division" className="cards">
                <SimpleGrid columns={2} spacing={10}>
                    <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='elevated' align="center">
                        <CardBody>
                            <Text py='2'>
                                Example: 1230/46/2
                            </Text>
                        </CardBody>
                    </Card>
                    <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='elevated' align="center">
                        <CardBody>
                            <div className="codeCardHeader"><Heading size='sm'>Code Examples:</Heading></div>
                            <SimpleGrid columns={2} spacing={10}>
                                <Box height="30px">
                                    <Button onClick={() => {
                                        setOverlay(<OverlayOne />)
                                        openModal7()
                                    }}>Recursion</Button>

                                    <Modal isOpen={isOpenModal7} onClose={closeModal7}> {overlay}
                                        <ModalOverlay />
                                        <ModalContent>
                                            <ModalHeader>Recursion Example:</ModalHeader>
                                            <ModalCloseButton />
                                            <ModalBody>
                                                <Image src="" alt="recursion ex"></Image>
                                            </ModalBody>

                                            <ModalFooter>
                                                <Button colorScheme='blue' mr={3} onClick={closeModal7}>
                                                    Close
                                                </Button>
                                            </ModalFooter>
                                        </ModalContent>
                                    </Modal>
                                </Box>
                                <Box height="30px">
                                    <Button onClick={() => {
                                        setOverlay(<OverlayOne />)
                                        openModal8()
                                    }}>For Loop</Button>

                                    <Modal isOpen={isOpenModal8} onClose={closeModal8}> {overlay}
                                        <ModalOverlay />
                                        <ModalContent>
                                            <ModalHeader>For Loop Example:</ModalHeader>
                                            <ModalCloseButton />
                                            <ModalBody>
                                                <Image src="" alt="for loop ex"></Image>
                                            </ModalBody>
                                            <ModalFooter>
                                                <Button colorScheme='blue' mr={3} onClick={closeModal8}>
                                                    Close
                                                </Button>
                                            </ModalFooter>
                                        </ModalContent>
                                    </Modal>
                                </Box>
                            </SimpleGrid>
                        </CardBody>
                    </Card>
                </SimpleGrid>
            </section >
            <Divider  orientation='horizontal' />
            <Heading className="codeheader">Exponents</Heading>
            <section id="exponents" className="cards">
                <SimpleGrid columns={2} spacing={10}>
                    <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='elevated' align="center">
                        <CardBody>
                            <Text py='2'>
                                Example: 5^7
                            </Text>
                        </CardBody>
                    </Card>
                    <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='elevated' align="center">
                        <CardBody>
                            <div className="codeCardHeader"><Heading size='sm'>Code Examples:</Heading></div>
                            <SimpleGrid columns={2} spacing={10}>
                                <Box height="30px">
                                    <Button onClick={() => {
                                        setOverlay(<OverlayOne />)
                                        openModal9()
                                    }}>Recursion</Button>

                                    <Modal isOpen={isOpenModal9} onClose={closeModal9}> {overlay}
                                        <ModalOverlay />
                                        <ModalContent>
                                            <ModalHeader>Recursion Example:</ModalHeader>
                                            <ModalCloseButton />
                                            <ModalBody>
                                                <Image src="" alt="recursion ex"></Image>
                                            </ModalBody>

                                            <ModalFooter>
                                                <Button colorScheme='blue' mr={3} onClick={closeModal9}>
                                                    Close
                                                </Button>
                                            </ModalFooter>
                                        </ModalContent>
                                    </Modal>
                                </Box>
                                <Box height="30px">
                                    <Button onClick={() => {
                                        setOverlay(<OverlayOne />)
                                        openModal10()
                                    }}>For Loop</Button>

                                    <Modal isOpen={isOpenModal10} onClose={closeModal10}> {overlay}
                                        <ModalOverlay />
                                        <ModalContent>
                                            <ModalHeader>For Loop Example:</ModalHeader>
                                            <ModalCloseButton />
                                            <ModalBody>
                                                <Image src="" alt="for loop ex"></Image>
                                            </ModalBody>

                                            <ModalFooter>
                                                <Button colorScheme='blue' mr={3} onClick={closeModal10}>
                                                    Close
                                                </Button>
                                            </ModalFooter>
                                        </ModalContent>
                                    </Modal>
                                </Box>
                            </SimpleGrid>
                        </CardBody>
                    </Card>
                </SimpleGrid>
            </section>
            <Divider orientation='horizontal' />
            <Heading className="codeheader">Exponential Addition</Heading>
            <section id="exponentadd" className="cards">
                <SimpleGrid columns={2} spacing={10}>
                    <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='elevated' align="center">
                        <CardBody>
                            <Text py='2'>
                                Example: 6^0+4^9
                            </Text>
                        </CardBody>
                    </Card>
                    <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='elevated' align="center">
                        <CardBody>
                            <div className="codeCardHeader"><Heading size='sm'>Code Examples:</Heading></div>
                            <SimpleGrid columns={2} spacing={10}>
                                <Box height="30px">
                                    <Button onClick={() => {
                                        setOverlay(<OverlayOne />)
                                        openModal11()
                                    }}>Recursion</Button>
                                    <Modal isOpen={isOpenModal11} onClose={closeModal11}> {overlay}
                                        <ModalOverlay />
                                        <ModalContent>
                                            <ModalHeader>Recursion Example:</ModalHeader>
                                            <ModalCloseButton />
                                            <ModalBody>
                                                <Image src="" alt="recursion ex"></Image>
                                            </ModalBody>

                                            <ModalFooter>
                                                <Button colorScheme='blue' mr={3} onClick={closeModal11}>
                                                    Close
                                                </Button>
                                            </ModalFooter>
                                        </ModalContent>
                                    </Modal>
                                </Box>
                                <Box height="30px">
                                    <Button onClick={() => {
                                        setOverlay(<OverlayOne />)
                                        openModal12()
                                    }}>For Loop</Button>

                                    <Modal isOpen={isOpenModal12} onClose={closeModal12}> {overlay}
                                        <ModalOverlay />
                                        <ModalContent>
                                            <ModalHeader>For Loop Example:</ModalHeader>
                                            <ModalCloseButton />
                                            <ModalBody>
                                                <Image src="" alt="for loop ex"></Image>
                                            </ModalBody>

                                            <ModalFooter>
                                                <Button colorScheme='blue' mr={3} onClick={closeModal12}>
                                                    Close
                                                </Button>
                                            </ModalFooter>
                                        </ModalContent>
                                    </Modal>
                                </Box>
                            </SimpleGrid>
                        </CardBody>
                    </Card>
                </SimpleGrid>
            </section>
        </section>
    );

}
