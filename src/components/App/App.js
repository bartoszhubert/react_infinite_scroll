import React, { useEffect } from 'react';
import { array, number, bool, func } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from 'hooks/useDarkMode';
import InfiniteScroll from 'react-infinite-scroll-component';
import List from 'components/List';
import Loader from 'components/Loader';
import Toggle from 'components/Toggle';
import { darkTheme, lightTheme } from 'styles/palette';

import { Wrapper, Title } from './styles';

function App({
    isFetching,
    fetchStories,
    fetchStoriesFirstPage,
    hasMoreStories,
    stories,
    page,
    storyIds
}) {
    const [theme, themeToggler, mountedComponent] = useDarkMode();

    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    useEffect(() => fetchStoriesFirstPage(), [fetchStoriesFirstPage]);

    const fetchNextStories = () => {
        if (isFetching) return;
        fetchStories({ storyIds, page });
    };

    if (!mountedComponent) return null;

    return (
        <ThemeProvider theme={themeMode}>
            <Wrapper>
                <Toggle theme={theme} themeToggler={themeToggler} />
                <Title>Hacker News</Title>
                <InfiniteScroll
                    dataLength={stories.length}
                    next={fetchNextStories}
                    hasMore={hasMoreStories}
                    loader={<Loader />}
                    style={{
                        height: '100%',
                        overflow: 'visible'
                    }}
                >
                    <List stories={stories} />
                </InfiniteScroll>
            </Wrapper>
        </ThemeProvider>
    );
}

App.defaultProps = {
    stories: []
};

App.propTypes = {
    isFetching: bool.isRequired,
    hasMoreStories: bool.isRequired,
    fetchStories: func.isRequired,
    fetchStoriesFirstPage: func.isRequired,
    page: number.isRequired,
    stories: array.isRequired,
    storyIds: array.isRequired
};

export default App;
