import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react"

export default function OrgnizationDonations() {
  return (
    <section className="overflow-y-auto w-[95%] mx-auto py-4">
      <div className="flex items-center justify-between pb-4 border-b">
        <h1 className="text-xl">Donations</h1>
      </div>

      <div className="mt-4">
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Donation Id</Th>
                <Th>Name of donor</Th>
                <Th>Date</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>ff4g7g82vr657gg</Td>
                <Td>Ritesh Khore</Td>
                <Td>24 March 2023</Td>
              </Tr>
              <Tr>
                <Td>ff4g7g82vr657gg</Td>
                <Td>Ritesh Khore</Td>
                <Td>24 March 2023</Td>
              </Tr>
              <Tr>
                <Td>ff4g7g82vr657gg</Td>
                <Td>Ritesh Khore</Td>
                <Td>24 March 2023</Td>
              </Tr>
              <Tr>
                <Td>ff4g7g82vr657gg</Td>
                <Td>Ritesh Khore</Td>
                <Td>24 March 2023</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </section>
  )
}
