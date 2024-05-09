import { useSomeMatchDetailsFetchHook } from 'src/api/hooks/useSomeMatchDetailsFetchHook'
import DetailsTable from 'src/components/molecules/details-table'
import MainTemplate from 'src/components/templates/main-template'

const MatchDetailsPage = () => {

    const res = useSomeMatchDetailsFetchHook()

    return (
        <MainTemplate title='Детальная информация матча' loading={res.isLoading}>
            <DetailsTable isRadiant={true}/>
            <DetailsTable isRadiant={false}/>
        </MainTemplate>
    )
}

export default MatchDetailsPage