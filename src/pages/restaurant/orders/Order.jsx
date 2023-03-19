import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react"

export default function Order() {
  return (
    <section className="overflow-y-auto w-[95%] mx-auto py-4">
      <div className="flex items-center justify-between pb-4 border-b">
        <h1 className="text-xl">Orders</h1>
      </div>

      <div className="mt-4">
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Order ID</Th>
                <Th>Customer Name</Th>
                <Th isNumeric>Amount</Th>
                <Th>Date</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>ff4g7g82vr657gg</Td>
                <Td>Ritesh Khore</Td>
                <Td isNumeric>500</Td>
                <Td>24 March 2023</Td>
              </Tr>
              <Tr>
                <Td>ff4g7g82vr657gg</Td>
                <Td>Ritesh Khore</Td>
                <Td isNumeric>500</Td>
                <Td>24 March 2023</Td>
              </Tr>
              <Tr>
                <Td>ff4g7g82vr657gg</Td>
                <Td>Ritesh Khore</Td>
                <Td isNumeric>500</Td>
                <Td>24 March 2023</Td>
              </Tr>
              <Tr>
                <Td>ff4g7g82vr657gg</Td>
                <Td>Ritesh Khore</Td>
                <Td isNumeric>500</Td>
                <Td>24 March 2023</Td>
              </Tr>
              <Tr>
                <Td>ff4g7g82vr657gg</Td>
                <Td>Ritesh Khore</Td>
                <Td isNumeric>500</Td>
                <Td>24 March 2023</Td>
              </Tr>
              <Tr>
                <Td>ff4g7g82vr657gg</Td>
                <Td>Ritesh Khore</Td>
                <Td isNumeric>500</Td>
                <Td>24 March 2023</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </section>
  )
}
