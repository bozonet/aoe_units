import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { Container, Paper, Table } from '@mantine/core'
import { getUnitRequest } from '../store/filter/actions'
import Header from '../components/Header'


export default function Unit() {
  const dispatch = useAppDispatch();



  const { unitId } = useParams<{ unitId: string }>()
  //parse the unitId to a number
  const unitIdNumber = parseInt(unitId || '0');

  useEffect(() => {
    dispatch(getUnitRequest({ id: unitIdNumber }));
  }, [dispatch, unitIdNumber]);


  const selectedUnit = useAppSelector(state => state.filter.selectedUnit);

  //make Array from Object for fetching
  const unitArray = Object.entries(selectedUnit || {});



  if (selectedUnit) {
    return (

      <Container
        size="xl"
      >
        <Header pageTitle="Unit Detail" />
        <Paper
          shadow={"sm"}
          style={{ margin: "0 20px 0 20px", padding: "5px 20px 20px 20px" }}
        >
          <h2>
            {selectedUnit.name}
          </h2>
          <Table highlightOnHover>
            <thead>
              <tr>
                <th>Key</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {unitArray.map((item) => (
                <tr key={
                  item[0]
                }>
                  <td><p>{(item[0]).toUpperCase().split("_").join(" ")}</p></td>
                  <td><p>{(JSON.stringify(item[1])).replace(/["{}[\]]/g, "")}</p></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Paper>
      </Container>
    )
  }
  else {
    return (
      <Container
        size={"xl"}
      >
        <Header pageTitle="Unit Detail" />
        <Paper>
          <h2>
            Unit not found
          </h2>
        </Paper>
      </Container>
    )
  }

}

