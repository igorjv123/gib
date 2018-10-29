import { tabChange } from '../../logic/tab-bar/actions';

export function mapStateToProps({ tabs: { index } }) {
    return { index };
}

export function mapDispatchToProps(dispatch) {
    return {
        onTabChange(data) {
            console.log('hello from container' + data)
            dispatch(tabChange(data));
        }
    };
}