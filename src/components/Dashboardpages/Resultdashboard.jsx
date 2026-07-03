
import Dashboardheading from './Dashboardcomponents/Dashboardheading'
import Dashboardoverview from './Dashboardcomponents/Dashboardoverview'
import Dashboardscores from './Dashboardcomponents/Dashboardscores'
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
