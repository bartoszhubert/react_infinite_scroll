import { connect } from 'react-redux';
import actions from 'store/story/actions';
import App from './App';
import { hasMoreStoriesSelector } from 'store/story/selectors';

const mapStateToProps = state => ({
    hasMoreStories: hasMoreStoriesSelector(state),
    isFetching: state.story.isFetching,
    page: state.story.page,
    stories: state.story.stories,
    storyIds: state.story.storyIds
});

const MapDispatchToProps = dispatch => ({
    fetchStories: ({ storyIds, page }) =>
        dispatch(actions.fetchStories({ storyIds, page })),
    fetchStoriesFirstPage: () => dispatch(actions.fetchStoryIds())
});

export default connect(mapStateToProps, MapDispatchToProps)(App);
