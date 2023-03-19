import FoodItem from "../../../components/food_item/FoodItem"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react"
import { useState } from "react"

export default function Items() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [image, setImaage] = useState(null)

  const handleSetImage = (e) => {
    const files = e.target.files
    if (files.length) {
      setImaage(files[0])
    }
  }

  return (
    <>
      <section className="overflow-y-auto w-[95%] mx-auto py-4">
        <div className="flex items-center justify-between pb-4 border-b">
          <h1 className="text-xl">Food items inventory</h1>
          <button
            onClick={onOpen}
            className="border-primary border transition-all px-2 py-3 rounded-md text-primary hover:bg-primary hover:text-white"
          >
            Add food item
          </button>
        </div>

        <div className="flex items-center flex-wrap gap-4 mt-4">
          <FoodItem />
          <FoodItem />
          <FoodItem />
          <FoodItem />
        </div>
      </section>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new food item</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form action="" className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label className="text-sm" htmlFor="">
                  Food item title
                </label>
                <input
                  type="text"
                  className="bg-gray-100 outline-none mt-2 w-full px-2 py-3 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm" htmlFor="">
                  Quantity
                </label>
                <input
                  type="text"
                  className="bg-gray-100 outline-none mt-2 w-full px-2 py-3 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm" htmlFor="">
                  Description
                </label>
                <textarea className="bg-gray-100 resize-none outline-none mt-2 w-full px-2 py-3 rounded-md" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm" htmlFor="">
                  Price
                </label>
                <input
                  type="text"
                  className="bg-gray-100 outline-none mt-2 w-full px-2 py-3 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm" htmlFor="">
                  Discount
                </label>
                <input
                  type="text"
                  className="bg-gray-100 outline-none mt-2 w-full px-2 py-3 rounded-md"
                />
              </div>
              {image ? (
                <div>
                  <img
                    className="w-full h-[200px] object-cover rounded-md"
                    src={URL.createObjectURL(image)}
                    alt=""
                  />
                </div>
              ) : (
                <div className="flex flex-col">
                  <label
                    className="text-sm text-center cursor-pointer text-primary"
                    htmlFor="image"
                  >
                    Choose food image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="image"
                    onChange={handleSetImage}
                  />
                </div>
              )}
            </form>
          </ModalBody>

          <ModalFooter>
            <button className="transition-all px-2 py-3 rounded-md text-white bg-primary">
              Create
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
