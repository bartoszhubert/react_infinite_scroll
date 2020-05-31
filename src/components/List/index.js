import React from 'react';
import { array } from 'prop-types';
import ListItem from 'components/ListItem';
import { ListWrapper } from './styles';

const List = ({ stories }) => (
    <ListWrapper>
        {stories.map(story => (
            <ListItem key={story.id} {...story} />
        ))}
    </ListWrapper>
);

List.propTypes = {
    stories: array.isRequired
};

export default List;
