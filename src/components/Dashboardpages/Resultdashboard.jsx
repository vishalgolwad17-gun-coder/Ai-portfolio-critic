
import Dashboardheading from './Dashboardcomponents/dashboardheading'
import Dashboardoverview from './Dashboardcomponents/dashboardoverview'
import Dashboardscores from './Dashboardcomponents/dashboardscores'
import Dashboardrecomendations from './Dashboardcomponents/Dashboardrecomendations'
import Dashboardmobilescores from './Dashboardcomponents/Dashboardmobilescores'
import Dashboardstrengthsandweakness from './Dashboardcomponents/Dashboardstrengthsandweakness'

const Resultdashboard = () => {
  return (
    <div>
      <Dashboardheading/>
      <Dashboardoverview/>
      <Dashboardscores/>
      <Dashboardmobilescores/>
      <Dashboardstrengthsandweakness/>
      <Dashboardrecomendations/>
    </div>
  )
}

export default Resultdashboard