import { tabChange } from '../../logic/tab-bar/actions';

export function mapStateToProps(state) {
    const { tabs } = state;
    console.log('map'+state)
    return {tabs:tabs};
}

export function mapDispatchToProps(dispatch) {
    return {
        onTabChange(data) {
            console.log('hello from container' + data)
            dispatch(tabChange(data));
        }
    };
}