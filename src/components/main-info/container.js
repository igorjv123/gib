import { searchSubmit, linkInput } from '../../logic/search-field/actions';

export function mapStateToProps({ data: { mainInfo } }) {
    return { mainInfo };
}

export function mapDispatchToProps(dispatch) {
    return {
        linkChange(link){
            dispatch(linkInput(link));
        },
        searchClick(data) {
            dispatch(searchSubmit(data));
        }
    };
}