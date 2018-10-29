import { searchSubmit, changeLink } from '../../logic/search-field/actions';

export function mapStateToProps({ search: { link } }) {
    return { link };
}

export function mapDispatchToProps(dispatch) {
    return {
        linkChange(link){
            dispatch(changeLink(link));
        },
        searchClick(data) {
            dispatch(searchSubmit(data));
        }
    };
}