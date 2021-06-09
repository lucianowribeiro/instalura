/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import PostImage from './utils/PostImage';
import CloseModal from '../../../theme/CloseModal';
import Box from '../../foundation/layout/Box';
import PostFilter from './utils/PostFilter';
import PostContent from './utils/PostContent';

export default function FormPost({
  image,
  setImage,
  resetPostForm,
  onClose,
  propsModal,
}) {
  const [filter, setFilter] = React.useState({ submit: false, type: '' });
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="white"
      borderRadius="2%"
      height={{ xs: '95vh', sm: '65vh', md: '60vh' }}
      width={{
        xs: '80%',
        sm: '70%',
        md: '45%',
        lg: '35%',
        xl: '400px',
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...propsModal}
    >
      <CloseModal
        type="post"
        onClick={() => {
          onClose();
          setFilter({ submit: false, type: '' });
          resetPostForm();
        }}
      />
      <PostImage image={image} filter={filter} setImage={setImage} />
      {filter.submit ? (
        <PostFilter
          url={image.url}
          filterType={filter.type}
          setFilter={setFilter}
          reset={resetPostForm}
        />
      ) : (
        <PostContent setFilter={setFilter} setImage={setImage} image={image} />
      )}
    </Box>
  );
}

FormPost.propTypes = {
  image: PropTypes.shape({
    have: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    url: PropTypes.string.isRequired,
    ready: PropTypes.bool.isRequired,
  }).isRequired,
  setImage: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  propsModal: PropTypes.object.isRequired,
  resetPostForm: PropTypes.func.isRequired,
};
