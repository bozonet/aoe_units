import { Container, Grid, Col } from '@mantine/core';
import Header from '../components/Header';
import Filters from '../components/Filters';
import FilteredUnits from '../components/FilteredUnits';

type UnitsProps = {
  pageTitle?: string;
};



const Units: React.FC<UnitsProps> = () => {
  return (
    <Container
      size="xl"
    >
      <Header pageTitle='Units' />
      <Grid>
        <Col md={6} sm={12} lg={4} span={12}>
          <Filters />
        </Col>
        <Col md={6} sm={12} lg={8} span={12}>
          <FilteredUnits />
        </Col>

      </Grid>

    </Container>
  );
}

export default Units;
