import "./Event.css"
import { BsSearch } from "react-icons/bs"
import { AiOutlinePlus } from "react-icons/ai"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react"

export default function Event() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <section className="event">
        <div className="event__header">
          <h1>Organize all the events</h1>
          <div className="flex event__header__right">
            <button onClick={onOpen} className="event__header__button flex">
              <AiOutlinePlus className="event__header__search__icon text__white" />
              <span>Create an event</span>
            </button>
            <div className="event__header__search">
              <BsSearch className="event__header__search__icon" />
              <input type="text" />
            </div>
          </div>
        </div>

        <div className="event__body">
          <div className="event__body__header">
            <h1>Upcoming events</h1>
          </div>
        </div>
      </section>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="3xl">Create an event</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque,
            animi nihil maiores dicta pariatur quae doloribus qui ea minima
            repudiandae esse officia culpa, earum, porro laboriosam rerum sequi.
            Amet, quisquam.
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
