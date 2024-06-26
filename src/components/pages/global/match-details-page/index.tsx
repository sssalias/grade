import { useSomeMatchDetailsFetchHook } from 'src/api/hooks/useSomeMatchDetailsFetchHook'
import DetailsTable from 'src/components/molecules/tables/details-table'
import MatchData from 'src/components/organisms/match-data'
import MainTemplate from 'src/components/templates/main-template'

const MatchDetailsPage = () => {

    const res = useSomeMatchDetailsFetchHook()

    return (
        <MainTemplate title='Детальная информация матча' loading={res.isLoading}>
            <MatchData/>
            <DetailsTable isRadiant={true}/>
            <DetailsTable isRadiant={false}/>
        </MainTemplate>
    )
}

export default MatchDetailsPage