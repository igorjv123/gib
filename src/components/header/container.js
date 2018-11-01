import { searchSubmit, linkInput } from '../../logic/search-field/actions';

export function mapStateToProps({ search: { link } }) {
    return { link };
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
// var parser = document.createElement('a');
// parser.href = "http://example.com:3000/pathname/?search=test#hash";

// parser.protocol; // => "http:"
// parser.hostname; // => "example.com"
// parser.port;     // => "3000"
// parser.pathname; // => "/pathname/"
// parser.search;   // => "?search=test"
// parser.hash;     // => "#hash"
// parser.host;     // => "example.com:3000"